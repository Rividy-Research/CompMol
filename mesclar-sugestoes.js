// Insere no catálogo as sugestões aprovadas no painel admin (admin.html).
// O painel gera o arquivo baixado "pacote-aprovadas.json"; este script o aplica.
// Uso: node mesclar-sugestoes.js pacote-aprovadas.json
//      node mesclar-sugestoes.js pacote-aprovadas.json --sec  (sem gerar páginas)
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const [arquivoPacote] = process.argv.slice(2).filter((a) => !a.startsWith('--'));

if (!arquivoPacote) {
    console.error('Uso: node mesclar-sugestoes.js <pacote-aprovadas.json>');
    process.exit(1);
}

const pacote = JSON.parse(fs.readFileSync(path.resolve(arquivoPacote), 'utf8'));
const catalogo = JSON.parse(fs.readFileSync(path.join(ROOT, 'dados', 'softwares.json'), 'utf8'));
const detalhes = JSON.parse(fs.readFileSync(path.join(ROOT, 'dados', 'detalhes.json'), 'utf8'));

const AREAS = ['quimica-quantica', 'dft-solidos', 'dinamica-molecular', 'quimioinformatica', 'bioquimica', 'visualizacao', 'docking', 'bases-dados'];
const PRECOS = ['free', 'academic', 'paid', 'freemium'];
const APPS = ['desktop', 'hpc', 'web', 'cli', 'python'];

const porNome = new Map(catalogo.softwares.map((s) => [s.name.toLowerCase(), s.id]));
const porId = new Map(catalogo.softwares.map((s) => [s.id, s.name]));

const entradas = pacote.softwares || [];
const inseridas = [];
const recusadas = [];

const slug = (nome) => String(nome).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

entradas.forEach((s) => {
    const detalhe = (pacote.detalhes || {})[String(s.id)] || {};

    if (!s.id || !s.name) return recusadas.push(`${s.name || 'sem nome'}: falta id ou name`);
    if (porId.has(s.id)) return recusadas.push(`${s.name}: id ${s.id} já usado por "${porId.get(s.id)}"`);
    if (porNome.has(s.name.toLowerCase())) return recusadas.push(`${s.name}: já cadastrado com id ${porNome.get(s.name.toLowerCase())}`);
    if (!AREAS.includes(s.area)) return recusadas.push(`${s.name}: área inválida "${s.area}"`);
    if (!PRECOS.includes(s.price)) return recusadas.push(`${s.name}: preço inválido "${s.price}"`);
    if (!Array.isArray(s.applicability) || s.applicability.some((a) => !APPS.includes(a))) return recusadas.push(`${s.name}: aplicabilidade inválida`);
    if (!s.website || !/^https?:\/\//i.test(s.website)) return recusadas.push(`${s.name}: website não é uma URL http(s)`);

    catalogo.softwares.push({
        id: s.id,
        name: s.name,
        area: s.area,
        applicability: s.applicability,
        price: s.price,
        description: s.description,
        tags: s.tags || [],
        license: s.license,
        website: s.website
    });

    detalhes[String(s.id)] = {
        resumo: detalhe.resumo || s.description,
        recursos: detalhe.recursos || s.tags || [],
        plataformas: detalhe.plataformas || [],
        licenca: detalhe.licenca || s.license,
        publicacao: detalhe.publicacao || null,
        doi_url: detalhe.doi_url || null,
        url_oficial_corrigida: detalhe.url_oficial_corrigida || null,
        links: detalhe.links || { site: s.website }
    };

    porNome.set(s.name.toLowerCase(), s.id);
    porId.set(s.id, s.name);
    inseridas.push(`${s.id} ${s.name} -> softwares/software-${s.id}-${slug(s.name)}.html`);
});

catalogo.softwares.sort((a, b) => a.id - b.id);

fs.writeFileSync(path.join(ROOT, 'dados', 'softwares.json'), JSON.stringify(catalogo, null, 2) + '\n');
fs.writeFileSync(path.join(ROOT, 'dados', 'detalhes.json'), JSON.stringify(detalhes, null, 2) + '\n');

console.log(`Sugestões no pacote: ${entradas.length}`);
console.log(`Inseridas: ${inseridas.length}${inseridas.length ? '\n  ' + inseridas.join('\n  ') : ''}`);
if (recusadas.length) console.log(`Recusadas: ${recusadas.length}\n  ${recusadas.join('\n  ')}`);
console.log(`Catálogo agora com ${catalogo.softwares.length} entradas.`);

if (process.argv.includes('--sec')) console.log('Rode depois: node gerar-paginas.js');
else require(path.join(ROOT, 'gerar-paginas.js'));
