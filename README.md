# CompMol - Portal de Aplicações Computacionais Moleculares

Catálogo aberto, em português, de softwares e bases de dados usados em química computacional — química quântica, DFT de sólidos, dinâmica molecular, quimioinformática, docking, visualização, bioquímica e portais de dados. Cada entrada tem uma página dedicada com resumo, métodos suportados, plataformas, forma de citação e links oficiais verificados.

É um site **totalmente estático**: HTML, CSS e JavaScript puro, sem framework, sem build e sem servidor. Basta abrir `index.html` no navegador.

## Marca e identidade visual

O portal usa paleta azul e branco. O rodapé da página principal exibe o crédito "Desenvolvido pelo Pople Computational Chemistry".

## Como usar

- **Buscar** — o campo de busca cobre nome, descrição, tags, métodos, plataformas e licença, ignora acentos e aceita várias palavras (ex.: `planos de onda`, `ccsd`, `gpu`).
- **Filtrar** — por área de estudo, aplicabilidade e preço. Ao filtrar, os cards de resumo dão lugar a um único card com o número de resultados.
- **Comparar** — clique em *⚖️ Comparar* em até 3 cards e abra a tabela lado a lado (preço, licença, plataformas, métodos, documentação, download, código-fonte).
- **Compartilhar** — filtros, busca e seleção de comparação vivem na URL (`?area=docking&price=free&busca=vina&comparar=20,11`). O botão *🔗 Copiar link desta seleção* gera um link que reabre a página exatamente naquele estado.
- **Sugerir** — faltou alguma ferramenta? O formulário de sugestão leva a proposta ao administrador, que aprova antes de entrar no catálogo. Veja [Sugerir um software ou base de dados](#sugerir-um-software-ou-base-de-dados).

> A URL só é atualizada quando o site é servido por HTTP. Abrindo `index.html` com duplo clique (`file://`), o navegador bloqueia a escrita na barra de endereços — filtros e comparação continuam funcionando normalmente, apenas não são compartilháveis.

## Estrutura

```
index.html              página principal (cards, filtros, busca, comparação) — editável à mão
sugerir.html            formulário para propor um software ou base de dados
admin.html              painel de revisão das sugestões (uso do mantenedor)
gerar-paginas.js        recria as páginas do site a partir dos dados
mesclar-sugestoes.js    aplica ao catálogo o pacote de sugestões aprovadas
dados/
  softwares.json        DADOS BASE do catálogo — edite aqui
  detalhes.json         enriquecimento pesquisado nos sites oficiais — edite aqui
  catalogo.js           GERADO: dados base + enriquecimento, lidos pelo navegador
softwares/              páginas dedicadas, uma por entrada (GERADAS)
```

Só `gerar-paginas.js` produz arquivos: as páginas de `softwares/` e `dados/catalogo.js` nunca devem ser editados à mão — tudo sai de `dados/`. O `index.html`, ao contrário, é escrito à mão e não é sobrescrito pelo gerador.

## Rodando localmente

Abrir o arquivo direto funciona. Para testar compartilhamento de URL e cabeçalhos corretos, sirva a pasta:

```bash
node -e "const h=require('http'),f=require('fs'),p=require('path');h.createServer((q,r)=>{let u=decodeURIComponent(q.url.split('?')[0]);if(u==='/')u='/index.html';f.readFile(p.join(process.cwd(),u),(e,d)=>{if(e){r.writeHead(404);return r.end('404')}r.writeHead(200,{'Content-Type':p.extname(u)==='.js'?'text/javascript':'text/html; charset=utf-8'});r.end(d)})}).listen(8080,()=>console.log('http://localhost:8080'))"
```

`python -m http.server 8080` também serve.

## Regenerando as páginas

Depois de qualquer mudança em `dados/`:

```bash
node gerar-paginas.js
```

O script reescreve as páginas de `softwares/` e o arquivo `dados/catalogo.js`, e avisa sobre: entradas sem dados enriquecidos e arquivos soltos que não correspondem a nenhuma entrada do catálogo.

## Sugerir um software ou base de dados

O botão **➕ Sugerir software ou base de dados**, logo abaixo do campo de busca (e o link no rodapé), abre [`sugerir.html`](sugerir.html). O formulário valida os campos, avisa se a ferramenta já estiver no catálogo (por nome ou domínio — duplicatas são bloqueadas no envio) e monta uma mensagem estruturada para o administrador. Como o site é estático, não há servidor nem banco: a entrega é por e-mail.

- Se o e-mail do mantenedor estiver configurado, o botão **Enviar por e-mail** abre seu programa de correio com o assunto e o corpo prontos.
- Sem configuração, ou quando a mensagem é longa demais para um link de e-mail, o mesmo conteúdo pode ser **copiado** ou **baixado como `.json`**. Os dados completos viajam num bloco codificado entre `--- INICIO CAT 1 ---` e `--- FIM CAT 1 ---`, que sobrevive a quebras de linha do cliente de e-mail.
- O rascunho fica no navegador (`localStorage`), então dá para fechar a página e voltar depois.

O mantenedor revisa em [`admin.html`](admin.html): cola o texto recebido (ou carrega o `.json`), vê erros e avisos automáticos, aprova ou rejeita com parecer e reserva o `id`. As aprovadas viram um pacote que se aplica com:

```bash
node mesclar-sugestoes.js pacote-aprovadas.json
```

O script insere as entradas em `dados/softwares.json` e `dados/detalhes.json`, recusa o que duplica ou viola o vocabulário e roda o gerador em seguida. Antes de publicar, confira manualmente os links e a citação na página oficial — o painel ajuda, não substitui a revisão.

> Para o envio por e-mail funcionar no site publicado, troque a constante `EMAIL_ADMIN` no início do script de `sugerir.html` pelo endereço do mantenedor.

## Cobertura

85 entradas em 8 áreas:

- **Química Quântica (15)** — Gaussian, ORCA, Psi4, GAMESS, Q-Chem, Molpro, NWChem, Dalton, PySCF, xtb, TURBOMOLE, ADF, MRCC, TeraChem, MOPAC
- **DFT e Sólidos (16)** — VASP, Quantum ESPRESSO, CP2K, SIESTA, CASTEP, Materials Studio, ABINIT, WIEN2k, Elk, Octopus, OpenMX, GPAW, Wannier90, Yambo, ASE, pymatgen
- **Dinâmica Molecular (13)** — GROMACS, AMBER, NAMD, LAMMPS, OpenMM, HOOMD-blue, DL_POLY, CHARMM, Tinker, MDAnalysis, MDTraj, Packmol, ACPYPE
- **Quimioinformática (7)** — RDKit, Open Babel, ChemDraw, MarvinSketch, Ketcher, DeepChem, CDK
- **Docking e Descoberta de Fármacos (9)** — AutoDock Vina, Schrödinger Suite, Discovery Studio, HADDOCK3, GOLD, rDock, AutoDock-GPU, Smina, GNINA
- **Visualização Molecular (7)** — PyMOL, VMD, ChimeraX, Jmol/JSmol, 3Dmol.js, NGLview, OVITO
- **Bioquímica / Proteínas (8)** — Rosetta, AlphaFold, MODELLER, SWISS-MODEL, ESMFold, FreeSASA, PLIP, Biopython
- **Bases de Dados e Portais (10)** — PubChem, ChEMBL, ZINC20, RCSB PDB, Materials Project, NOMAD, Crystallography Open Database, Cambridge Structural Database, BindingDB, DrugBank

Dados e links verificados nas páginas oficiais em **novembro de 2026**. Licenças, preços e URLs mudam — confirme no site do desenvolvedor antes de instalar ou citar. Contribuições são bem-vindas: veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença do conteúdo do catálogo

As marcas, softwares e documentos citados pertencem aos respectivos desenvolvedores. Este repositório reúne apenas informações públicas e links.
