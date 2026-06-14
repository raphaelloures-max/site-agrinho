# Entre Rios – Tradição & Sustentabilidade

Projeto desenvolvido para o Concurso Agrinho 2026 – Categoria Programação, na Subcategoria 3: Programação Front-End – HTML, CSS e JavaScript.

## 🌱 Tema do Concurso

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente**

## 📌 Sobre o Projeto

O projeto **"Entre Rios – Tradição & Sustentabilidade"** apresenta, de forma visual, interativa e educativa, a história, a cultura e as práticas agrícolas sustentáveis do distrito de Entre Rios, localizado em Guarapuava, no Paraná.

A proposta mostra como os Suábios do Danúbio — imigrantes europeus chegados em 1951 — construíram um dos modelos mais bem-sucedidos de agricultura cooperativista e sustentável do Brasil, provando que alta produtividade e responsabilidade ambiental podem caminhar juntas.

Por meio de textos, imagens, linha do tempo, acordeão interativo, quiz e um jogo, o site busca aproximar o visitante da realidade de Entre Rios e destacar a importância do distrito para o Paraná e para o Brasil.

## 🎯 Objetivo

Conscientizar os visitantes sobre a importância da produção sustentável e da preservação cultural, mostrando que desenvolvimento econômico pode caminhar junto com o cuidado com o meio ambiente e a valorização das raízes históricas.

O site busca também dar visibilidade a um distrito que, apesar de ser um dos mais importantes do Brasil, é pouco reconhecido fora do Paraná.

## 🧭 Páginas e Funcionalidades

O projeto é composto por cinco páginas HTML:

### 🏠 Início (`index.html`)
- Hero animado com partículas de trigo
- Painel de estatísticas dinâmico (renderizado via JS)
- Seção "Sobre" com texto e imagem
- Abas interativas com os pilares de Entre Rios
- Carrossel de imagens com navegação manual e automática
- Cards de sustentabilidade (renderizados via JS)
- Banner de chamada para ação

### 📜 História (`historia.html`)
- Seção sobre a origem dos Suábios do Danúbio
- Bloco completo sobre a história do distrito
- Seção de cultura viva com citações do Museu da Imigração Suábio-Brasileira
- Seção sobre a Cooperativa AGRÁRIA
- Seção de impacto nacional e legado
- Linha do tempo de marcos históricos (renderizada via JS)
- Acordeão interativo sobre agricultura sustentável (renderizado via JS)

### 🌿 Meio Ambiente (`meio-ambiente.html`)
- Seção sobre equilíbrio entre produção e preservação ambiental
- Dados oficiais sobre vegetação nativa e plantio direto
- Seção sobre o pioneirismo da AGRÁRIA no plantio direto nos anos 1970
- Seção sobre a importância de Entre Rios para o Paraná e para a Floresta com Araucária
- Reflexão sobre o baixo reconhecimento do distrito

### 🎮 MiniJogo (`minijogo.html`)
- Seletor de abas para alternar entre os dois jogos
- **Quiz educativo** com 7 perguntas sobre história, meio ambiente e curiosidades de Entre Rios, com feedback explicativo em cada resposta e pontuação final
- **Jogo do Trator** — runner no qual o jogador desvia de árvores usando as teclas ⬆️⬇️ / W / S ou toque na tela; velocidade aumenta progressivamente; sempre 2 ou 1 árvores por rodada

### 📋 Sobre o Projeto (`projeto.html`)
- Apresentação do projeto, motivação e base na ODS 2
- Cards de tecnologias utilizadas
- 13 referências bibliográficas no formato ABNT

## ♿ Acessibilidade

- Botão para aumentar o tamanho da fonte
- Botão para diminuir o tamanho da fonte
- Modo de alto contraste
- Textos alternativos em todas as imagens
- Uso de elementos semânticos do HTML (`header`, `main`, `footer`, `nav`, `section`, `figure`, `figcaption`)
- Atributos `aria-label`, `aria-current`, `aria-expanded` e `role` nos elementos interativos
- Navegação organizada por seções
- Menu responsivo com fechamento pelo botão hambúrguer

## 💻 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando apenas tecnologias básicas de front-end:

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

✅ Não foram utilizados frameworks.  
✅ Não foi utilizado Tailwind CSS.  
✅ Os arquivos de estilo e script estão separados (`style.css` e `script.js`).

## 📁 Estrutura de Arquivos

```
/
├── index.html
├── historia.html
├── meio-ambiente.html
├── minijogo.html
├── projeto.html
├── style.css
├── script.js
├── README.md
└── img/
    ├── arvore.png
    ├── trator.png
    ├── Museu.png
    ├── Agraria75anos.png
    ├── img_imigrantes.png
    ├── img_dancas.png
    ├── img_moagem.png
    ├── img_trigo.png
    ├── img_soja.png
    ├── img_mata.png
    ├── img_colheita.png
    ├── img_gado.png
    ├── img_arquitetura.png
    ├── ExcelênciaAgrícola.jpg
    ├── Maibaumfest.png
    ├── banner_arcade.jpg
    ├── banner_codigo.jpg
    └── img_ods2.png
```
## ▶️ Como Executar o Projeto

1. Baixe ou clone este repositório
2. Abra a pasta do projeto em seu computador
3. Abra o arquivo `index.html` em um navegador de internet
4. Navegue pelas páginas utilizando o menu principal

Também é possível acessar o projeto publicado pelo GitHub Pages, por meio do link disponível na seção **About** deste repositório.

## 🌿 Sustentabilidade

O conteúdo do site aborda práticas relacionadas ao equilíbrio entre produção e meio ambiente, como:

- 🌱 Sistema de plantio direto — pioneirismo da AGRÁRIA nos anos 1970, hoje em mais de 33 milhões de hectares no Brasil (IBGE, 2017)
- 🌳 Preservação de mais de 30% do território em vegetação nativa, acima do exigido pelo Código Florestal
- 💧 Proteção das matas ciliares ao longo dos rios Jordão e Pinhão
- 🔬 Pesquisa agropecuária sustentável pela FAPA
- 🤝 Modelo cooperativista que mantém a renda na comunidade
- 🌎 Contribuição para a preservação da Floresta com Araucária

## 🧠 Conceitos de Programação Aplicados

- Estruturação semântica com HTML5
- Estilização com CSS externo e variáveis CSS
- Responsividade com media queries
- Manipulação do DOM com JavaScript
- Renderização dinâmica de conteúdo (timeline, cards, tabs, carrossel)
- Eventos de clique, teclado e toque (touch)
- Funções, arrays, objetos e condicionais
- `requestAnimationFrame` para o loop do jogo
- `IntersectionObserver` para animações de entrada
- Controle de estado de elementos interativos

## 🤖 Prompts Genéricos de IA Utilizados
🌾 Primeiro modelo utilizado como base para o site

Contexto: Atue como um Desenvolvedor Full-Stack focado em UX e Acessibilidade. Crie um modelo de um site MPA (Multi page Website) sobre "Entre Rios: tradição agrícola e sustentabilidade".
Arquitetura de Arquivos: Entregue o código dividido em três arquivos: index.html, style.css e script.js. No HTML, use tags semânticas (header, main, section, article, footer) e atributos ARIA.
Design System (CSS): Use Variáveis CSS (:root) para definir a paleta de cores, espaçamentos e arredondamentos (--radius). O layout deve ser Responsivo (Mobile-First) usando CSS Grid e Flexbox. Adicione um modo de Alto Contraste acionado por uma classe .high-contrast no body.Implemente animações de entrada suaves (Scroll Reveal) para as seções.
Camada de Inteligência (JS): Gestão de Dados: Não escreva o conteúdo repetitivo (como cards ou itens de galeria) direto no HTML. Crie um array de objetos no JavaScript e renderize-os dinamicamente. Acessibilidade: Implemente funções para aumentar/diminuir o tamanho da fonte globalmente. Componentes: Crie um carrossel funcional e um sistema de abas ou acordeões (expandables).
Instrução de Edição (Flexibilidade): O código deve ser modular. Comente as seções do CSS para que eu possa localizar facilmente onde mudar o grid-template-columns ou as cores primárias. Entregue primeiro a estrutura do HTML, depois o CSS e por fim o JS.
Desenvolva uma barra de navegação superior moderna, responsiva e fixa no topo da página (sticky navbar). A barra deve possuir um design limpo e organizado, com os links de navegação centralizados horizontalmente. Os links devem redirecionar para diferentes páginas internas do mesmo site, sendo elas:
Início
História
MiniJogo (esta página deve permanecer vazia, sem conteúdo visível)
Sobre o Autor A navegação deve apresentar efeito visual ao passar o cursor sobre os links (hover effect), além de indicar claramente qual página está ativa no momento.


🌱 Prototipo do jogo do trator

Crie o jogo do zero seguinto as seguintes caractéristicas: O personagem principal deve ser um emoji de trator 🚜. Os obstáculos devem ser emojis de árvores 🌳 posicionados aleatoriamente no caminho, porém com um intervalo para que aparecem de uma fluida, com no máximo 2 obstáculos por vez. O fundo do jogo deve ser inspirado em um grande campo agrícola de trigo visto de cima, com tons naturais, áreas de plantação, terra e vegetação. O cenário deve se mover continuamente para criar sensação de velocidade e progresso. O jogador deve controlar o trator desviando das árvores utilizando as teclas S/W ou setas esquerda/direita. O jogo deve aumentar gradualmente a velocidade conforme o tempo passa. Adicione sistema de pontuação baseado no tempo sobrevivido. Inclua tela de “Game Over” com botão de reiniciar. O jogo deve iniciar com um botão de inicio Utilize canvas ou elementos HTML animados para criar a movimentação do jogo. O estilo visual deve ter temática rural usando emojis. O jogo deverá ser estilo horizontal, incluindo as linhas que o trator que ele deverá andar. O números de caminhos deverá ser 3.


## 👨‍🎓 Autoria

**Aluno:** Raphael Loures  
**Professor orientador:** Jessé dos Santos  
**Município:** Guarapuava – Paraná

## 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais e para participação no Concurso Agrinho 2026.
