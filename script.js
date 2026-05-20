/* ============================================================
   ENTRE RIOS – script.js
   Módulos: Dados, Acessibilidade, Navbar, Scroll Reveal,
            Carrossel, Tabs, Acordeão, Timeline, Partículas
   ============================================================ */

'use strict';

/* ============================================================
   1. DADOS – Arrays de objetos (edite aqui para mudar conteúdo)
   ============================================================ */

const STATS_DATA = [
  { number: '~9.000', label: 'habitantes' },
  { number: '5',      label: 'colônias' },
  { number: '1951',   label: 'ano de fundação' },
  { number: '74+',    label: 'anos de história' },
];

const CARDS_DATA = [
  {
    icon: '🌱',
    title: 'Plantio Direto',
    text: 'A AGRÁRIA foi pioneira no Brasil na adoção do sistema de plantio direto, desenvolvido nos anos 1970, que conserva o solo, reduz a erosão e hoje abrange milhões de hectares no país.',
    tag: 'Solo',
  },
  {
    icon: '🌾',
    title: 'Cevada e Malte',
    text: 'Entre Rios é o principal polo de cevada do Brasil. A Agrária Malte, localizada em Grandes Rios (PR), é a maior maltaria da América Latina, abastecendo as principais cervejarias do país.',
    tag: 'Produção',
  },
  {
    icon: '🌿',
    title: 'Pesquisa Agropecuária',
    text: 'A FAPA (Fundação Agrária de Pesquisa Agropecuária) desenvolve variedades adaptadas ao clima subtropical de Guarapuava, elevando a produtividade de trigo, soja, milho e cevada.',
    tag: 'Pesquisa',
  },
  {
    icon: '💧',
    title: 'Preservação Hídrica',
    text: 'Corredores de vegetação nativa protegem as nascentes dos rios Jordão e Pinhão, que delimitam o distrito. O uso racional da água é monitorado em toda a cadeia produtiva da cooperativa.',
    tag: 'Água',
  },
  {
    icon: '🌳',
    title: 'Mata Nativa',
    text: 'Mais de 30% da área do distrito é coberta por vegetação nativa, superando as exigências do Código Florestal. O horto florestal da Agrária, ativo desde 1992, distribui mudas para toda a região.',
    tag: 'Biodiversidade',
  },
  {
    icon: '🤝',
    title: 'Cooperativismo',
    text: 'A Cooperativa Agrária distribui resultados entre os associados e mantém serviços de saúde, educação e cultura para toda a comunidade das cinco colônias de Entre Rios.',
    tag: 'Comunidade',
  },
];

const CAROUSEL_DATA = [
  {
    img: 'img/img_trigo.png',
    title: 'Colheita do Trigo',
    caption: 'Colheitadeira percorre os campos dourados da Colônia Vitória – Entre Rios, Guarapuava.',
  },
  {
    img: 'img/img_soja.png',
    title: 'Colheita de Soja',
    caption: 'Soja e trigo são as principais culturas da Cooperativa AGRÁRIA em Guarapuava.',
  },
  {
    img: 'img/img_gado.png',
    title: 'Pecuária nas Colônias',
    caption: 'Gado leiteiro pasta nas colinas verdes, com a paisagem serrana de Entre Rios ao fundo.',
  },
  {
    img: 'img/img_arquitetura.png',
    title: 'Arquitetura Suábia',
    caption: 'Casas com estrutura enxaimel preservam a identidade arquitetônica dos imigrantes nas colônias.',
  },
  {
    img: 'img/img_dancas.png',
    title: 'Festival Cultural',
    caption: 'Danças folclóricas suábias reúnem centenas de pessoas no Centro de Eventos AGRÁRIA.',
  },
  {
    img: 'img/img_moagem.png',
    title: 'Moagem AGRÁRIA',
    caption: 'A Agrária Farinhas processa trigo produzido nas colônias, abastecendo o mercado nacional.',
  },
  {
    img: 'img/img_mata.png',
    title: 'Floresta de Eucaliptos',
    caption: 'O horto florestal da Cooperativa AGRÁRIA preserva e distribui espécies nativas desde 1992.',
  },
];

const PILLARS_DATA = [
  {
    id: 'pilar-1',
    label: '🌾 Agricultura',
    icon: '🌾',
    title: 'Excelência Agrícola',
    text: 'Entre Rios é um dos maiores polos produtores de trigo e cevada do Brasil. A AGRÁRIA introduziu variedades adaptadas ao clima subtropical de Guarapuava, combinando genética avançada com rotação de culturas e saúde do solo. As culturas principais são soja, milho, trigo e cevada.',
  },
  {
    id: 'pilar-2',
    label: '🏘️ As Colônias',
    icon: '🏘️',
    title: 'As Cinco Colônias',
    text: 'O distrito de Entre Rios é formado por cinco colônias eslavo-germânicas: Vitória (sede da Cooperativa Agrária), Jordãozinho, Cachoeira, Socorro e Samambaia. Cada uma preserva sua identidade, dialeto e tradições trazidas da Europa pelos 500 famílias pioneiras.',
  },
  {
    id: 'pilar-3',
    label: '🌿 Meio Ambiente',
    icon: '🌿',
    title: 'Compromisso Ambiental',
    text: 'Mais de 30% da área do distrito é coberta por vegetação nativa, superando as exigências do Código Florestal. O distrito é delimitado pelos rios Jordão e Pinhão, e o horto florestal da Agrária, ativo desde 1992, já recebeu doações de espécies de todo o Brasil e da Europa.',
  },
  {
    id: 'pilar-4',
    label: '🎭 Cultura',
    icon: '🎭',
    title: 'Identidade Cultural',
    text: 'Os festivais tradicionais, a gastronomia suábia (Schnitzel, Maultaschen, Strudel), a arquitetura enxaimel e o dialeto Donauschwäbisch dos mais velhos mantêm viva a memória de um povo que reconstruiu sua vida nas terras do Paraná. A Fundação Cultural Suábio-Brasileira (FCSB), criada em 2001, coordena essa preservação.',
  },
];

const TIMELINE_DATA = [
  {
    year: '1945–1950',
    title: 'A diáspora suábia',
    text: 'Com o fim da Segunda Guerra, o regime comunista expulsou os suábios do leste europeu (Hungria, Croácia, Romênia). Acolhidos na Áustria, após sete anos em campos de refugiados, a "Ajuda Suíça à Europa" negocia sua vinda ao Brasil. O engenheiro agrônomo Michael Moor lidera a seleção das famílias e das terras em Guarapuava.',
  },
  {
    year: 'Maio de 1951',
    title: 'Chegada e fundação',
    text: 'As primeiras 500 famílias suábias chegam à região de Guarapuava, delimitada pelos rios Jordão e Pinhão. Encontram mata fechada e campos nativos. Antes mesmo de construir as casas, fundam a Cooperativa Agrária Mista de Entre Rios, presidida por Michael Moor. As cinco colônias — Vitória, Jordãozinho, Cachoeira, Socorro e Samambaia — começam a ser formadas.',
  },
  {
    year: '1962',
    title: 'Criação oficial do distrito',
    text: 'Pela lei estadual nº 4.583, de 27 de junho de 1962, o distrito de Entre Rios é oficialmente criado e anexado ao município de Guarapuava, situado a 18 km da sede municipal.',
  },
  {
    year: '1970s',
    title: 'Revolução do plantio direto',
    text: 'Técnicos da AGRÁRIA e agricultores locais são pioneiros do sistema de plantio direto no Brasil, técnica que hoje está presente em dezenas de milhões de hectares no país. A soja se consolida como cultura principal ao lado do trigo.',
  },
  {
    year: '1980s–1990s',
    title: 'Diversificação e cevada',
    text: 'A cooperativa expande para a cevada, abastecendo cervejarias, e inaugura a Agrária Malte, que se tornará a maior maltaria da América Latina, responsável por cerca de 30% da demanda nacional de malte.',
  },
  {
    year: '2001 – hoje',
    title: 'Cultura, pesquisa e sustentabilidade',
    text: 'Criação da Fundação Cultural Suábio-Brasileira (FCSB) em Vitória para preservar o patrimônio suábio. A FAPA (Fundação Agrária de Pesquisa Agropecuária) posiciona Entre Rios como referência em pesquisa agrícola no Brasil, com certificações internacionais e agricultura de precisão.',
  },
];

const ACCORDION_DATA = [
  {
    id: 'acc-1',
    title: '🌍 Por que Entre Rios é um exemplo nacional',
    content: 'Entre Rios é reconhecida como uma das comunidades agrícolas mais sustentáveis do Brasil. Desde a chegada dos colonos suábios em 1951, a região desenvolveu um modelo único que combina alta produtividade com preservação ambiental e coesão social. A Cooperativa AGRÁRIA integra toda a cadeia produtiva — da semente à mesa — garantindo renda aos agricultores, preservação do solo e segurança alimentar para o país. Esse modelo está alinhado diretamente à ODS 2 da ONU: Fome Zero e Agricultura Sustentável, que propõe acabar com a fome, alcançar segurança alimentar, melhorar a nutrição e promover a agricultura sustentável até 2030.',
  },
  {
    id: 'acc-2',
    title: '🌱 Plantio direto e conservação do solo',
    content: 'A AGRÁRIA foi pioneira no Brasil na adoção do sistema de plantio direto, desenvolvido nas suas próprias áreas experimentais na década de 1970. A técnica consiste em semear sem revolver o solo, mantendo a palha da cultura anterior na superfície. Isso reduz drasticamente a erosão, conserva a umidade, aumenta a matéria orgânica e sequestra carbono. Hoje, essa prática é obrigatória para todos os associados da cooperativa e está presente em dezenas de milhões de hectares em todo o Brasil, sendo considerada uma das maiores contribuições brasileiras à agricultura sustentável mundial.',
  },
  {
    id: 'acc-3',
    title: '📋 Regras e práticas internas da AGRÁRIA',
    content: 'A Cooperativa AGRÁRIA estabelece normas técnicas e ambientais rigorosas para todos os seus associados:<br/><br/><strong>• Rotação de culturas obrigatória:</strong> os agricultores alternam soja, milho, trigo e cevada nas mesmas áreas, evitando o esgotamento do solo e reduzindo o uso de defensivos.<br/><strong>• Análise de solo periódica:</strong> cada talhão é analisado regularmente para que a adubação seja feita de forma precisa, sem desperdício de insumos.<br/><strong>• Preservação de matas ciliares:</strong> faixas de vegetação nativa ao longo de rios e nascentes são obrigatórias, protegendo os recursos hídricos.<br/><strong>• Assistência técnica contínua:</strong> engenheiros agrônomos acompanham as propriedades ao longo do ano, orientando boas práticas e prevenindo problemas.<br/><strong>• Uso responsável de defensivos:</strong> a AGRÁRIA orienta e fiscaliza a aplicação de agroquímicos, priorizando produtos de menor impacto ambiental e respeitando os períodos de carência.',
  },
  {
    id: 'acc-4',
    title: '🔬 Pesquisa, inovação e cevada',
    content: 'A FAPA (Fundação Agrária de Pesquisa Agropecuária), criada pela cooperativa, desenvolve variedades de trigo, cevada, soja e milho adaptadas ao clima subtropical de Guarapuava. Esse trabalho contínuo de melhoramento genético permite aumentar a produtividade sem ampliar a área plantada — conceito central da agricultura sustentável. A cevada cultivada em Entre Rios abastece a Agrária Malte, em Grandes Rios (PR), a maior maltaria da América Latina, que fornece malte para as principais cervejarias do Brasil. Toda a cadeia — da pesquisa ao processamento — acontece de forma integrada e sustentável dentro do modelo cooperativista.',
  },
];

const TECH_CARDS_DATA = [
  { icon: '📄', title: 'HTML5 Semântico', text: 'Tags semânticas e atributos ARIA para máxima acessibilidade e SEO.', tag: 'Estrutura' },
  { icon: '🎨', title: 'CSS3 Moderno', text: 'Variables, Grid, Flexbox, animações, mobile-first e alto contraste.', tag: 'Design' },
  { icon: '⚙️', title: 'JavaScript ES6+', text: 'Módulos, array methods, DOM dinâmico, Intersection Observer API.', tag: 'Lógica' },
  { icon: '♿', title: 'Acessibilidade WCAG', text: 'Foco visível, ARIA roles, labels e controles de fonte e contraste.', tag: 'A11y' },
  { icon: '📱', title: 'Design Responsivo', text: 'Layout adaptável a mobile, tablet e desktop com breakpoints claros.', tag: 'UX' },
  { icon: '🚀', title: 'Zero dependências', text: 'Sem frameworks externos – HTML, CSS e JS puros para máxima performance.', tag: 'Performance' },
];

/* ============================================================
   2. UTILITÁRIOS
   ============================================================ */

/** Cria elemento com atributos e innerHTML opcionais */
function createElement(tag, attrs = {}, innerHTML = '') {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

/** Seleciona elemento, retorna null sem erro */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   3. ACESSIBILIDADE – Tamanho de fonte e alto contraste
   ============================================================ */
(function initA11y() {
  // Estado salvo no localStorage para persistir entre páginas
  const FONT_KEY    = 'er_fontSize';
  const CONTRAST_KEY = 'er_contrast';

  let fontLevel = parseInt(localStorage.getItem(FONT_KEY) || '0', 10);
  const FONT_STEP  = 2;    // px por clique
  const FONT_MIN   = -4;   // -4px do padrão
  const FONT_MAX   = 8;    // +8px do padrão
  const BASE_SIZE  = 16;   // px base do :root

  function applyFont() {
    document.documentElement.style.fontSize = (BASE_SIZE + fontLevel) + 'px';
    localStorage.setItem(FONT_KEY, fontLevel);
  }

  function applyContrast() {
    const on = localStorage.getItem(CONTRAST_KEY) === '1';
    document.body.classList.toggle('high-contrast', on);
  }

  applyFont();
  applyContrast();

  // Botões
  const btnInc = $('#btn-font-inc');
  const btnDec = $('#btn-font-dec');
  const btnCon = $('#btn-contrast');

  btnInc && btnInc.addEventListener('click', () => {
    if (fontLevel < FONT_MAX) { fontLevel += FONT_STEP; applyFont(); }
  });

  btnDec && btnDec.addEventListener('click', () => {
    if (fontLevel > FONT_MIN) { fontLevel -= FONT_STEP; applyFont(); }
  });

  btnCon && btnCon.addEventListener('click', () => {
    const on = document.body.classList.toggle('high-contrast');
    localStorage.setItem(CONTRAST_KEY, on ? '1' : '0');
  });
})();

/* ============================================================
   4. NAVBAR – Toggle mobile + scroll shadow
   ============================================================ */
(function initNavbar() {
  const toggle = $('#nav-toggle');
  const nav    = $('#nav-menu');
  const navbar = $('.navbar');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });

    // Fecha menu ao clicar em link
    $$('.nav__link', nav).forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });

    // Fecha com ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        toggle.focus();
      }
    });
  }

  // Sombra na navbar ao rolar
  if (navbar) {
    const observer = new IntersectionObserver(
      ([entry]) => navbar.classList.toggle('scrolled', !entry.isIntersecting),
      { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
    );
    const sentinel = createElement('div', { style: 'height:1px;position:absolute;top:0;left:0;right:0;' });
    document.body.prepend(sentinel);
    observer.observe(sentinel);
  }
})();

/* ============================================================
   5. SCROLL REVEAL – Intersection Observer
   ============================================================ */
(function initScrollReveal() {
  const reveals = $$('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  reveals.forEach(el => observer.observe(el));
})();

/* ============================================================
   6. PARTÍCULAS DE TRIGO (hero)
   ============================================================ */
(function initParticles() {
  const container = $('#hero-particles');
  if (!container) return;

  const EMOJIS = ['🌾', '✦', '·'];
  const COUNT  = 18;

  for (let i = 0; i < COUNT; i++) {
    const p = createElement('span', { class: 'wheat-particle', 'aria-hidden': 'true' });
    p.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    p.style.setProperty('--dur',   `${6 + Math.random() * 8}s`);
    p.style.setProperty('--delay', `${Math.random() * 12}s`);
    p.style.left  = `${Math.random() * 100}%`;
    p.style.bottom = `${Math.random() * 20}%`;
    container.appendChild(p);
  }
})();

/* ============================================================
   7. STATS – Renderização dinâmica
   ============================================================ */
(function renderStats() {
  const container = $('#stats-container');
  if (!container) return;

  STATS_DATA.forEach(stat => {
    const item = createElement('div', { class: 'stat-item', role: 'listitem' });
    item.innerHTML = `
      <span class="stat-number" aria-label="${stat.number} ${stat.label}">${stat.number}</span>
      <span class="stat-label" aria-hidden="true">${stat.label}</span>
    `;
    container.appendChild(item);
  });
})();

/* ============================================================
   8. CARDS DE SUSTENTABILIDADE – Renderização dinâmica
   ============================================================ */
(function renderCards() {
  // index.html – cards de sustentabilidade
  const sustContainer = $('#cards-container');
  if (sustContainer) {
    CARDS_DATA.forEach(card => {
      sustContainer.appendChild(buildCard(card));
    });
  }

  // autor.html – cards de tecnologias
  const techContainer = $('#tech-cards');
  if (techContainer) {
    TECH_CARDS_DATA.forEach(card => {
      techContainer.appendChild(buildCard(card));
    });
  }

  function buildCard({ icon, title, text, tag }) {
    const el = createElement('article', { class: 'card', role: 'listitem' });
    el.innerHTML = `
      <div class="card__icon" aria-hidden="true">${icon}</div>
      <h3 class="card__title">${title}</h3>
      <p class="card__text">${text}</p>
      <span class="card__tag">${tag}</span>
    `;
    return el;
  }
})();

/* ============================================================
   9. TABS (Pilares) – index.html
   ============================================================ */
(function initTabs() {
  const btnContainer   = $('#tab-buttons');
  const panelContainer = $('#tab-panels');
  if (!btnContainer || !panelContainer) return;

  // Renderiza botões e painéis a partir dos dados
  PILLARS_DATA.forEach((pilar, i) => {
    // Botão
    const btn = createElement('button', {
      class:           `tab-btn${i === 0 ? ' active' : ''}`,
      role:            'tab',
      'aria-selected': i === 0 ? 'true' : 'false',
      'aria-controls': pilar.id,
      id:              `${pilar.id}-tab`,
    }, pilar.label);
    btnContainer.appendChild(btn);

    // Painel
    const panel = createElement('div', {
      id:               pilar.id,
      class:            `tab-panel${i === 0 ? ' active' : ''}`,
      role:             'tabpanel',
      'aria-labelledby': `${pilar.id}-tab`,
      tabindex:         '0',
    });
    panel.innerHTML = `
      <div class="tab-panel__inner">
        <div class="tab-panel__icon" aria-hidden="true">${pilar.icon}</div>
        <div>
          <h3 class="tab-panel__title">${pilar.title}</h3>
          <p class="tab-panel__text">${pilar.text}</p>
        </div>
      </div>
    `;
    panelContainer.appendChild(panel);
  });

  // Interatividade
  const buttons = $$('.tab-btn', btnContainer);

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => activateTab(i));

    // Navegação por teclado (setas)
    btn.addEventListener('keydown', e => {
      let target = -1;
      if (e.key === 'ArrowRight') target = (i + 1) % buttons.length;
      if (e.key === 'ArrowLeft')  target = (i - 1 + buttons.length) % buttons.length;
      if (target >= 0) { buttons[target].focus(); activateTab(target); }
    });
  });

  function activateTab(index) {
    buttons.forEach((b, i) => {
      b.classList.toggle('active', i === index);
      b.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    $$('.tab-panel', panelContainer).forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }
})();

/* ============================================================
   10. CARROSSEL
   ============================================================ */
(function initCarousel() {
  const track      = $('#carousel-track');
  const dotsEl     = $('#carousel-dots');
  const prevBtn    = $('#carousel-prev');
  const nextBtn    = $('#carousel-next');
  if (!track) return;

  let current  = 0;
  let autoTimer = null;
  const VISIBLE = getVisibleCount(); // slides visíveis por vez

  // Renderiza slides
  CAROUSEL_DATA.forEach((slide, i) => {
    const el = createElement('div', {
      class: 'carousel__slide',
      role:  'group',
      'aria-label': `Slide ${i + 1} de ${CAROUSEL_DATA.length}: ${slide.title}`,
      'aria-roledescription': 'slide',
    });
    el.innerHTML = `
      <div class="carousel__img-wrap">
        <img
          src="${slide.img}"
          alt="${slide.title}"
          style="width:100%;height:100%;object-fit:cover;display:block;"
          loading="lazy"
        />
      </div>
      <p class="carousel__caption">${slide.caption}</p>
    `;
    track.appendChild(el);
  });

  function getVisibleCount() {
    return window.innerWidth >= 960 ? 3 : 1;
  }

  // Renderiza dots apenas para posições alcançáveis (não um por slide)
  function buildDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    const positions = CAROUSEL_DATA.length - getVisibleCount() + 1;
    for (let i = 0; i < positions; i++) {
      const dot = createElement('button', {
        class: `carousel__dot${i === 0 ? ' active' : ''}`,
        role:  'tab',
        'aria-label': `Ir para posição ${i + 1}`,
        'aria-selected': i === 0 ? 'true' : 'false',
      });
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    }
  }

  buildDots();

  function goTo(index) {
    const max = CAROUSEL_DATA.length - getVisibleCount();
    current = Math.max(0, Math.min(index, max));
    track.style.transform = `translateX(-${current * (100 / getVisibleCount())}%)`;
    updateDots();
    updateAriaLive();
  }

  function updateDots() {
    const dots = $$('.carousel__dot', dotsEl);
    dots.forEach((d, i) => {
      const active = i === current;
      d.classList.toggle('active', active);
      d.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function updateAriaLive() {
    const region = $('.carousel');
    if (region) region.setAttribute('aria-label', `Carrossel – slide ${current + 1} de ${CAROUSEL_DATA.length}`);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo((current + 1) % CAROUSEL_DATA.length), 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); stopAuto(); });
  nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); stopAuto(); });

  // Pausa no hover
  const carousel = $('.carousel');
  carousel && carousel.addEventListener('mouseenter', stopAuto);
  carousel && carousel.addEventListener('mouseleave', startAuto);

  // Swipe (touch)
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    stopAuto();
  });

  // Responsividade – reconstrói dots pois a qtd visível muda
  window.addEventListener('resize', () => { buildDots(); goTo(current); });

  startAuto();
})();

/* ============================================================
   11. ACORDEÃO – historia.html
   ============================================================ */
(function initAccordion() {
  const container = $('#accordion-container');
  if (!container) return;

  ACCORDION_DATA.forEach((item, i) => {
    const isFirst = i === 0;
    const el = createElement('div', { class: 'accordion__item reveal', role: 'listitem' });
    el.innerHTML = `
      <button
        class="accordion__trigger"
        id="${item.id}-btn"
        aria-expanded="${isFirst ? 'true' : 'false'}"
        aria-controls="${item.id}-panel"
      >
        ${item.title}
        <em class="accordion__icon" aria-hidden="true">+</em>
      </button>
      <div
        id="${item.id}-panel"
        class="accordion__panel"
        role="region"
        aria-labelledby="${item.id}-btn"
        aria-hidden="${isFirst ? 'false' : 'true'}"
        style="${isFirst ? 'display:block;' : 'display:none;'}"
      >
        ${item.content}
      </div>
    `;
    container.appendChild(el);
  });

  // Interatividade
  $$('.accordion__trigger', container).forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panelId  = btn.getAttribute('aria-controls');
      const panel    = document.getElementById(panelId);

      // Fecha todos
      $$('.accordion__trigger', container).forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) { p.style.display = 'none'; p.setAttribute('aria-hidden', 'true'); }
      });

      // Abre o clicado (toggle)
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        if (panel) { panel.style.display = 'block'; panel.setAttribute('aria-hidden', 'false'); }
      }
    });
  });
})();

/* ============================================================
   12. TIMELINE – historia.html
   ============================================================ */
(function renderTimeline() {
  const list = $('#timeline-list');
  if (!list) return;

  TIMELINE_DATA.forEach((item, i) => {
    const li = createElement('li', {
      class: 'timeline__item',
      style: `animation-delay:${i * 120}ms`,
    });
    li.innerHTML = `
      <time class="timeline__year" datetime="${item.year}">${item.year}</time>
      <h3 class="timeline__title">${item.title}</h3>
      <p class="timeline__text">${item.text}</p>
    `;
    list.appendChild(li);
  });
})();
