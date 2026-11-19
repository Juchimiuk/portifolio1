# Pendências

Atualizado em 19/11/2026.

O conteúdo da home está em `src/data/profile.ts` e o da página do Ritza em
`src/data/ritza.ts`.

## Quebra hoje

- [ ] **Currículo:** salvar o PDF em `public/curriculo.pdf`. Os botões "Baixar currículo" dão 404 até lá.
- [ ] **WhatsApp:** confirmar o número com DDD (`contacts.whatsapp`). Formato do link: `https://wa.me/55DDNUMERO`.
- [ ] **LinkedIn:** confirmar a URL real do perfil (`contacts.linkedin`).
- [ ] **Preview de link:** criar `public/og.png` (1200×630).

## Decisões de conteúdo

- [ ] **Cargo:** o "Sobre mim" diz "full stack com foco em front-end", mas o hero e o título dizem "Desenvolvedor de Software".
- [ ] **Experiência:** o texto fala em 2 anos, mas a trajetória mostra a Index só desde 2025. Falta alguma experiência?
- [ ] **Index:** trocar os 2 pontos placeholder por entregas reais (`journey`).
- [ ] **Disponibilidade:** o que você busca de verdade (`profile.availability`).
- [ ] **Ritza:** confirmar que a sincronização com o Garmin, os lembretes, a cobrança de vagas extras e os widgets estão funcionando; adicionar links da App Store/Google Play se o app estiver publicado; confirmar se pode usar as telas com nomes de alunos; adicionar números de uso reais quando tiver.

## Código

- [ ] Testar header, footer e página do Ritza no celular.
- [ ] Converter imagens para WebP (a foto tem 263 KB e é exibida com cerca de 140px).
- [ ] Gerar um favicon pequeno (o `JuckIcon.png` atual tem 198 KB).
- [ ] Apagar `public/TripLanso.png` e `public/EasyFinance1.png`, que não são mais usadas.
- [ ] Atualizar o README e o nome do pacote (`indexfly-site`).
- [ ] Fazer commit do redesign (nada foi commitado ainda).

## Feito

- [x] Tema claro, nova estrutura, animações leves, sem framer-motion
- [x] Header flutuante e footer unificado com o contato
- [x] "Sobre mim" com o seu texto
- [x] Stack curada pelo mercado
- [x] Trajetória em ordem cronológica
- [x] Ritza como projeto principal, com página de estudo de caso
