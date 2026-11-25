# Contribuindo

O catálogo é gerado a partir de dois arquivos JSON. **Não edite as páginas de `softwares/` nem `dados/catalogo.js`** — eles são reescritos por `node gerar-paginas.js`. O `index.html` é escrito à mão e o gerador não o toca.

## Adicionar um software

### 1. Entradas válidas (obrigatórias)

Abra [`dados/softwares.json`](dados/softwares.json) e acrescente um objeto ao array `softwares`. Use o primeiro `id` livre (hoje, 86):

```json
{
  "id": 86,
  "name": "Nome do Software",
  "area": "quimica-quantica",
  "applicability": ["desktop", "hpc"],
  "price": "free",
  "description": "Uma frase objetiva sobre o que o software faz.",
  "tags": ["DFT", "Open Source"],
  "license": "GNU GPL",
  "website": "https://exemplo.org"
}
```

| Campo | Regra |
|---|---|
| `id` | inteiro único, nunca reutilizado nem renumerado |
| `name` | como o projeto se autopresenta no site oficial |
| `area` | `quimica-quantica`, `dft-solidos`, `dinamica-molecular`, `quimioinformatica`, `bioquimica`, `visualizacao`, `docking`, `bases-dados` |
| `applicability` | qualquer combinação de `desktop`, `hpc`, `web`, `cli`, `python` |
| `price` | `free`, `academic`, `paid`, `freemium` |
| `description` | texto em pt-BR, sem marketing, usado nos cards, na busca e na meta description |
| `tags` | métodos e recursos; também alimentam a busca |
| `license` | texto literal, ex.: `GNU LGPL v2.1`, `Comercial` |
| `website` | URL da página oficial, testada no navegador |

`description`, `tags` e `license` são pesquisáveis — escreva-os com as palavras que um usuário digitaria.

### 2. Enriquecimento (recomendado)

Abra [`dados/detalhes.json`](dados/detalhes.json) e adicione a chave `"86"`:

```json
"86": {
  "resumo": "Parágrafo baseado no texto oficial, em pt-BR.",
  "recursos": ["Método A", "Método B"],
  "plataformas": ["Linux", "macOS", "Windows"],
  "licenca": "Código aberto (GNU GPL)",
  "publicacao": "Autor, F. et al. Título do artigo. Journal, 2020.",
  "doi_url": "https://doi.org/10.xxxx/yyyy",
  "url_oficial_corrigida": null,
  "links": {
    "site": "https://exemplo.org/",
    "download": "https://exemplo.org/download",
    "documentacao": "https://exemplo.org/docs",
    "tutorial": null,
    "suporte": "https://exemplo.org/forum",
    "codigo": "https://github.com/exemplo/projeto",
    "publicacao": "https://doi.org/10.xxxx/yyyy"
  }
}
```

- `links.tutorial` etc. aceitam `null` quando não há página oficial. **Nunca chute uma URL** — deixe `null`.
- `url_oficial_corrigida` é campo de auditoria: registre aqui a URL que substituiu um endereço morto. O link que efetivamente renderiza é `links.site` (e o `website` do card).
- Sem entrada em `detalhes.json`, a página ainda é gerada usando `description`, `tags` e `license`, e o script avisa no console.

### 3. Regerar e revisar

```bash
node gerar-paginas.js
```

Isso recria `softwares/software-<id>-<slug>.html` e `dados/catalogo.js`. O slug é derivado do `name` removendo acentos (`Schrödinger Suite` → `schrodinger-suite`), então renomear um software gera uma página com novo nome de arquivo e deixa a antiga como "arquivo solto" no aviso do script — apague a órfã.

### 4. Checklist do pull request

- [ ] `node gerar-paginas.js` roda sem avisos.
- [ ] Todos os `links` não nulos abrem na página oficial do software (nada de blog, mirror ou página de terceiros).
- [ ] `id` é único; nenhum `id` existente foi alterado.
- [ ] Os valores de `area`, `price` e `applicability` usam só os vocabulários da tabela.
- [ ] Texto em pt-BR, inclusive os termos que já sejam ingleses por convenção da área (`DFT`, `HPC`).
- [ ] Licença e preço conferidos na página oficial **na data da contribuição**.

## Corrigir dados existentes

Mudar dados é a contribuição mais valiosa: licenças mudam, fóruns migram, manuais trocam de endereço. Edite o JSON, rode o gerador e explique no PR a página oficial consultada e a data.

Cada página gerada termina com o aviso "Conteúdo e links verificados nas páginas oficiais em novembro de 2026". Ao revisar um software, atualize também essa data em `gerar-paginas.js` (string dentro de `page()`) e o campo `verificado_em` de `dados/detalhes.json`.

## Sugerir um software sem editar os JSON

Nem todo mundo quer abrir um PR. O formulário de [`sugerir.html`](sugerir.html) — acessível pelo botão abaixo do campo de busca e pelo link do rodapé — serve justamente para isso: ele valida os campos, bloqueia duplicatas (mesmo nome ou mesmo domínio de uma entrada já cadastrada) e envia a proposta ao mantenedor por e-mail, sem servidor nem conta.

- Preencha ao menos nome, site oficial, área, preço, aplicabilidade, licença e descrição. Os campos de enriquecimento são opcionais, mas aceleram a revisão.
- O botão **Enviar por e-mail** abre seu programa de correio com tudo pronto. Se ele não abrir, ou se a mensagem for longa demais para um link, use **Copiar sugestão** ou **Baixar `.json`** e mande ao mantenedor do jeito que preferir.
- Também vale abrir uma issue com nome, site oficial, área e por que a ferramenta é relevante para a comunidade brasileira de química computacional. Não é necessário saber os métodos suportados — isso é pesquisado na implementação.

## Aplicar sugestões aprovadas (mantenedor)

As propostas recebidas são revisadas em [`admin.html`](admin.html), que pode ser aberto localmente sem publicar nada:

1. Cole o texto do e-mail (ou carregue o `.json` baixado) e clique **Analisar texto**. O painel lista erros que bloqueiam a aprovação e avisos que só merecem conferência.
2. **Aprovar** reserva o próximo `id` livre e mostra os dois blocos prontos para `dados/softwares.json` e `dados/detalhes.json`; **Rejeitar** guarda o parecer.
3. **Baixar aprovadas** gera `pacote-aprovadas.json`. Aplique-o com:

```bash
node mesclar-sugestoes.js pacote-aprovadas.json
```

O script insere as entradas nos dois JSON, recusa duplicatas e valores fora dos vocabulários e roda `gerar-paginas.js` em seguida (use `--sec` para pular a geração). Antes do commit, confira os links e a citação na página oficial — a revisão humana continua obrigatória.

Detalhes de transporte: os dados completos viajam em UTF-8 → base64 quebrado a cada 72 caracteres entre as marcas `--- INICIO CAT 1 ---` e `--- FIM CAT 1 ---`, porque clientes de e-mail reescrevem quebras de linha. O painel ignora espaços e quebras ao decodificar. Rascunho do formulário e fila do painel vivem em `localStorage`, por navegador.

> Para o botão de envio por e-mail funcionar no site publicado, troque a constante `EMAIL_ADMIN` no script de `sugerir.html` pelo endereço do mantenedor.

## Estilo

- Comentários e identificadores de código do projeto em pt-BR.
- Nenhuma dependência externa: sem frameworks, sem CDN, sem build. O site tem que continuar funcionando offline por `file://`.
- JavaScript do `index.html` é inline de propósito, para que a página dependa apenas de `dados/catalogo.js`.
