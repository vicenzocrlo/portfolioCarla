# Site Carla Cirilo (React + Vite)

## Rodar no VS Code
Precisa do Node.js (nodejs.org, versão LTS). No terminal do VS Code:

    npm install
    npm run dev

Abra o endereço que aparecer (normalmente http://localhost:5173).
Para publicar: `npm run build` gera a pasta `dist/` (envie para Vercel/Netlify) ou conecte o repositório na Vercel.

## Estrutura
- src/data/conteudo.js        -> TODOS os textos, páginas, menu, links e contatos
- src/styles/style.css        -> cores e fontes (início, em :root) e visual
- src/components/Intro.jsx    -> assinatura animada de abertura
- src/components/Header.jsx   -> menu
- src/components/Page.jsx     -> montagem de cada página
- src/components/Blocks.jsx   -> tipos de bloco (h2, p, q, ul, img, cards, btn)
- public/img/                 -> imagens

## Nova página
Copie um item de PAGINAS em conteudo.js e troque `id` e `menu`.

## Assinatura
- Velocidade: DURACAO em Intro.jsx. Nome: NOME. Fonte: --sign no style.css.
- Assinatura real: troque o <text> por <path d="..."> exportado em SVG do seu desenho
  (mantenha mask="url(#caneta)").
