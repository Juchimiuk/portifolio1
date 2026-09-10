# O que falta fazer

Levantamento feito em 10/09/2026. Ordenado por impacto: o que está no topo
quebra na cara de quem visita o site.

---

## 🔴 Bloqueia — links que hoje não funcionam

Estes quatro dependem de você: são arquivos ou informações que só você tem.

### 1. O currículo não existe

`public/curriculo.pdf` não está no repositório, mas **três botões apontam para ele**:

| Onde | Arquivo |
| --- | --- |
| Header, desktop | `src/components/Header.tsx:86` |
| Header, menu mobile | `src/components/Header.tsx:145` |
| CTA principal do hero | `src/sections/HomeSection.tsx:52` |

Hoje os três devolvem **404**. É o caminho mais provável que um recrutador
percorre no site, e ele termina em erro.

**O que fazer:** salvar o PDF como `public/curriculo.pdf`. É só colocar o
arquivo na pasta — o Vite copia para a raiz do build automaticamente.

### 2. O LinkedIn aponta para a home do LinkedIn

| Onde | Situação |
| --- | --- |
| `src/components/Footer.tsx:24` | vai para `https://www.linkedin.com/` |
| `src/sections/ContactSection.tsx:38` | vai para `https://www.linkedin.com/` |

Na seção Contato é pior: o texto exibido diz `linkedin.com/in/juchimiuk`
(`ContactSection.tsx:37`) mas o destino é outro. Texto que não bate com o link
é lido como descuido.

**O que fazer:** me passar a URL real do seu perfil, ou trocar nos dois lugares.

### 3. O WhatsApp provavelmente vai para o número errado

O link é `wa.me/55988478664` e o número aparece como `(+55) 98847-8664` —
**sem DDD**. O WhatsApp vai interpretar `98` como DDD (Maranhão) e sobram só
7 dígitos. Você está em Santa Catarina, então o número correto deve começar
com 47, 48 ou 49.

| Onde | Arquivo |
| --- | --- |
| Link do WhatsApp no footer | `src/components/Footer.tsx:40` |
| Link do WhatsApp em Contato | `src/sections/ContactSection.tsx:24` |
| Texto exibido em Contato | `src/sections/ContactSection.tsx:23` |
| Link `tel:` no currículo | `src/sections/ResumeSection.tsx:110` |
| Texto exibido no currículo | `src/sections/ResumeSection.tsx:113` |

**O que fazer:** confirmar o número com DDD. O formato do link fica
`https://wa.me/5547988478664` e o texto `(+55) 47 98847-8664`.

Vale clicar no link atual para confirmar antes.

### 4. O preview do link está vazio

`index.html:22` e `index.html:30` apontam para `/og.png`, que não existe.
Quando você mandar o portfólio no WhatsApp ou no LinkedIn, o card de preview
vem em branco — exatamente no momento em que a primeira impressão acontece.

**O que fazer:** uma imagem 1200×630 px em `public/og.png`. Posso gerar uma
com sua marca se você quiser.

---

## 🟡 Conteúdo — decisões que são suas

### 5. "Disponibilidade: A ver"

`src/sections/ResumeSection.tsx:117`. Parece rascunho que ficou. Ou vira uma
resposta de verdade ("Aberto a propostas", "CLT ou PJ", "Remoto") ou o campo
sai.

### 6. O EasyFinance não tem link nenhum

`src/sections/FeaturesSection.tsx` — o projeto está com `href: "#"` e
`repo: "#"`. Um projeto sem demo e sem repositório é uma afirmação sem prova.

**Decisão:** publicar o repositório/demo, ou tirar o card. Dois projetos com
prova pesam mais que um bom e um vazio.

### 7. Descrições sem resultado

"Interface Web para gerenciar finanças pessoais" diz o que a coisa é, não o
que você resolveu. Uma linha de decisão técnica ou de impacto vale mais que o
parágrafo inteiro — algo como "dashboard atualiza em tempo real via
WebSocket" ou "reduzi o bundle de X para Y".

### 8. Título: "Desenvolvedor de Software" ou "Full Stack"?

Está como **Desenvolvedor de Software** (`src/sections/HomeSection.tsx:38`),
que é o cargo que você já tem na Index. Evitei "Full Stack" porque a página
mostra dois projetos front-end — anunciar full stack sem back-end à vista
enfraquece o resto.

Se quiser mudar, é uma linha. Mas aí vale subir um projeto com back-end junto.

---

## 🟢 Ajustes de código — posso fazer, é só pedir

Nenhum destes depende de informação sua.

- [ ] **Busca e filtros para 2 projetos.** São 8 filtros de tag para 2 cards.
      O excesso de interface anuncia o vazio em vez de escondê-lo. Com menos
      de ~6 projetos, o grid puro comunica melhor.
- [ ] **Menu mobile branco** num site inteiramente escuro
      (`src/components/Header.tsx`). Abre e destoa de tudo.
- [ ] **Header esconde "Home" no desktop** (`navItems.slice(1)`) mas mostra no
      mobile. Escolher um dos dois.
- [ ] **Taxonomia inconsistente:** as chips do hero dizem `UI, UX`, as tags dos
      projetos dizem `UI | UX`.
- [ ] **`"EasyFinance - Gerenciador Financeiro "`** tem espaço sobrando no fim
      do título.
- [ ] **"Cursando Analise"** sem acento (`src/sections/ResumeSection.tsx`).
- [ ] **Imagens pesadas:** `JuckIcon.png` tem 198 KB para renderizar como
      favicon de 32 px, e `juckIcon2.png` tem 263 KB para exibir a 80 px.
      Meio megabyte para ~5 KB de pixels úteis.

---

## Referência: como o fundo funciona

A esfera do fundo (`src/components/Background.tsx`) se reposiciona conforme a
section que está no centro da tela. Cada section declara onde ela deve estar
pelo atributo `data-blob="x, y, escala"`, onde `x` e `y` são frações da
largura e da altura da viewport:

| Section | Arquivo | Valor |
| --- | --- | --- |
| Home | `HomeSection.tsx` | `0.32, 0.08, 1.05` |
| Projetos | `FeaturesSection.tsx` | `-0.26, -0.06, 1.15` |
| Sobre | `ResumeSection.tsx` | `0.24, 0.12, 0.92` |
| Contato | `ContactSection.tsx` | `-0.20, 0.14, 1.05` |

Mexer nesses quatro valores é tudo que é preciso para recoreografar o fundo.
O tamanho e a velocidade da esfera ficam em `src/index.css`, no bloco
`.bg-orb` — `animation: orb-drift 64s` e `width: 54vmin` em `.bg-orb-wrap`.
Apagar a linha do `animation` deixa a esfera estática, e aí o custo em repouso
é zero.
