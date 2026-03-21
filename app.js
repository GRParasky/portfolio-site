// ===== TRANSLATIONS =====
const translations = {
  en: {
    'nav-home':               'Home',
    'nav-projects':           'Projects',
    'nav-contact':            'Contact',
    'hero-role':              'Backend Developer',
    'hero-tagline':           'Focused on data integration and extraction for internal information consolidation — passionate about solving complex problems with quality and continuous improvement.',
    'hero-btn-projects':      'View Projects',
    'hero-btn-contact':       'Get in Touch',
    'about-title':            'About Me',
    'about-p1':               'Backend Developer with <strong>6+ years of experience</strong>, specializing in data integration and extraction for internal information consolidation. Passionate from an early age about solving complex problems and continuously refining my craft.',
    'about-p2':               'Experienced working with agile teams using Scrum and Kanban methodologies, with a strong focus on continuous delivery and ensuring the highest quality for end clients.',
    'info-location-label':    'Location',
    'info-availability-label':'Availability',
    'info-availability-value':'Open to Opportunities',
    'info-workmode-label':    'Work Mode',
    'info-workmode-value':    'Remote · Hybrid · On-site',
    'info-languages-label':   'Languages',
    'info-languages-value':   'Portuguese (native) · English (intermediate) · German (basic)',
    'skills-title':           'Core Stack',
    'skills-databases':       'Databases',
    'exp-title':              'Experience',
    'exp1-role':              'Integration Developer',
    'exp1-period':            'Nov. 2025 — Present',
    'exp1-desc':              "Working on the development of integrations for new clients using the Totvs ERP, as well as directly contributing to the implementation of new features and bug fixes in the standard integration product.",
    'exp2-role':              'Integration Analyst',
    'exp2-period':            'Jan. 2025 — Oct. 2025',
    'exp2-desc':              "Developed 10 integrations for new clients, handling data extraction, normalization, and transformation according to the company's data model. Supported maintenance and bug fixes for integrations with brands such as Adidas, Nike, and Natura, among others.",
    'exp3-role':              'Implementation Analyst',
    'exp3-period':            'Jan. 2024 — Dec. 2024',
    'exp3-desc':              "Worked directly with over 40 clients, delivering training sessions focused on B2B and B2C e-commerce platforms, developing ERP integrations, and building custom solutions tailored to each client's business needs.",
    'edu-title':              'Education',
    'edu1-course':            'Technical Degree in Computer Science',
    'edu1-period':            'Feb. 2018 — Dec. 2020',
    'edu2-course':            'Python Systems Developer',
    'edu2-period':            'Nov. 2019 — Mar. 2020',
    'projects-title':         'Projects',
    'projects-sub':           'Featured works and contributions.',
    'proj-featured':          'Featured',
    'proj-wip-status':        'In Development',
    'proj1-title':            'MRP Drone',
    'proj1-desc':             'Landing page for a drone photography and videography channel. Built as a freelance project, featuring hero, about, portfolio, contact and social sections.',
    'contact-title':          'Get in Touch',
    'contact-sub':            "Have an opportunity, a project idea, or just want to connect? I'd love to hear from you.",
    'contact-talk-title':     "Let's Talk",
    'contact-talk-desc':      'I\'m open to new opportunities, projects, and collaborations. I typically respond within 24 hours.',
    'form-name-label':        'Name',
    'form-name-placeholder':  'Your full name',
    'form-subject-label':     'Subject',
    'form-subject-placeholder':'e.g., Job opportunity',
    'form-message-label':     'Message',
    'form-message-placeholder':'Write your message...',
    'form-submit':            'Send Message',
    'form-sending':           'Sending...',
    'form-success':           "✅ Message sent! I'll get back to you soon.",
    'footer-text':            'Made with ❤️ by Gabriel Parasky ·',
    'title-home':             'Home — GRParasky',
    'title-projects':         'Projects — GRParasky',
    'title-contact':          'Contact — GRParasky',
    'exp4-role':              'Data Intern',
    'exp4-period':            'Jun. 2021 — Jun. 2022',
    'exp4-desc':              'Developed ETL processes for internal data extraction, making data available for querying across multiple management dashboards.',
    'exp5-role':              'Support Analyst',
    'exp5-period':            'Jan. 2023 — Dec. 2023',
    'exp5-desc':              'Provided customer support for inquiries and adjustment requests, delivered training sessions to end users, and maintained integrations to implement new tools and ensure system performance.',
    'exp6-role':              'Data Engineer',
    'exp6-period':            'Nov. 2019 — Apr. 2021',
    'exp6-desc':              'Joined the Data team focused on engineering activities in the Azure environment: script development with Databricks, data extraction from APIs, databases and spreadsheets, transformation with PySpark, loading with Spark, and pipeline structuring with Data Factory.',
    'exp-show-more':          'Show full experience',
    'exp-show-less':          'Show less',
  },
  pt: {
    'nav-home':               'Início',
    'nav-projects':           'Projetos',
    'nav-contact':            'Contato',
    'hero-role':              'Desenvolvedor Back-end',
    'hero-tagline':           'Focado em integração e extração de dados para consolidação de informação interna — apaixonado por resolver problemas complexos com qualidade e melhoria contínua.',
    'hero-btn-projects':      'Ver Projetos',
    'hero-btn-contact':       'Entre em Contato',
    'about-title':            'Sobre Mim',
    'about-p1':               'Desenvolvedor Back-end com <strong>6+ anos de experiência</strong>, focado em integração e extração de dados para consolidação de informação interna. Apaixonado desde muito novo em resolver problemas complexos e me aperfeiçoar ao longo do caminho.',
    'about-p2':               'Experiência com times ágeis, Scrum/Kanban e entrega contínua. Foco bastante na qualidade da entrega, garantindo o melhor para o cliente final.',
    'info-location-label':    'Localização',
    'info-availability-label':'Disponibilidade',
    'info-availability-value':'Aberto a propostas',
    'info-workmode-label':    'Modalidade',
    'info-workmode-value':    'Remoto · Híbrido · Presencial',
    'info-languages-label':   'Idiomas',
    'info-languages-value':   'Português (nativo) · Inglês (intermediário) · Alemão (básico)',
    'skills-title':           'Stack Principal',
    'skills-databases':       'Banco de Dados',
    'exp-title':              'Experiência',
    'exp1-role':              'Desenvolvedor de Integrações',
    'exp1-period':            'Nov. 2025 — Presente',
    'exp1-desc':              'Tem atuado no desenvolvimento de integrações para novos clientes com ERP Totvs, além de atuar diretamente na implementação de novas funcionalidades e correções no produto padrão da integração.',
    'exp2-role':              'Analista de Integração',
    'exp2-period':            'Jan. 2025 — Out. 2025',
    'exp2-desc':              'Desenvolveu 10 integrações para novos clientes, tratando da extração, normalização e transformação dos dados conforme Data Model da empresa. Apoiou em ajustes e correções nas integrações de empresas como Adidas, Nike, Natura, entre outras.',
    'exp3-role':              'Analista de Implantação',
    'exp3-period':            'Jan. 2024 — Dez. 2024',
    'exp3-desc':              'Atuou diretamente com mais de 40 clientes, realizando treinamentos com foco na plataforma de Ecommerce B2B e B2C, desenvolvimento de integrações com diversos ERPs e criação de customizações específicas para cada negócio.',
    'edu-title':              'Formação',
    'edu1-course':            'Curso Técnico de Informática',
    'edu1-period':            'Fev. 2018 — Dez. 2020',
    'edu2-course':            'Desenvolvedor de Sistemas em Python',
    'edu2-period':            'Nov. 2019 — Mar. 2020',
    'projects-title':         'Projetos',
    'projects-sub':           'Trabalhos e contribuições em destaque.',
    'proj-featured':          'Destaque',
    'proj-wip-status':        'Em Desenvolvimento',
    'proj1-title':            'MRP Drone',
    'proj1-desc':             'Landing page para um canal de fotografia e videografia com drone. Projeto freelance com seções de hero, sobre, portfólio, contato e redes sociais.',
    'contact-title':          'Entre em Contato',
    'contact-sub':            'Tem uma oportunidade, projeto ou quer bater um papo? Estou por aqui.',
    'contact-talk-title':     'Vamos conversar',
    'contact-talk-desc':      'Estou aberto a novas oportunidades, projetos ou colaborações. Respondo em até 24 horas.',
    'form-name-label':        'Nome',
    'form-name-placeholder':  'Seu nome completo',
    'form-subject-label':     'Assunto',
    'form-subject-placeholder':'Ex: Oportunidade de emprego',
    'form-message-label':     'Mensagem',
    'form-message-placeholder':'Escreva sua mensagem...',
    'form-submit':            'Enviar Mensagem',
    'form-sending':           'Enviando...',
    'form-success':           '✅ Mensagem enviada! Entrarei em contato em breve.',
    'footer-text':            'Feito com ❤️ por Gabriel Parasky ·',
    'title-home':             'Início — GRParasky',
    'title-projects':         'Projetos — GRParasky',
    'title-contact':          'Contato — GRParasky',
    'exp4-role':              'Estagiário de Dados',
    'exp4-period':            'Jun. 2021 — Jun. 2022',
    'exp4-desc':              'Desenvolveu processos de ETL para extração de dados internos, disponibilizando dados para consulta em diferentes Dashboards usados pela gestão.',
    'exp5-role':              'Analista de Suporte',
    'exp5-period':            'Jan. 2023 — Dez. 2023',
    'exp5-desc':              'Atendimento a clientes com dúvidas ou solicitações de ajustes, apresentação de treinamentos para capacitar o usuário final e manutenção de integrações para implementar novas ferramentas e garantir o bom desempenho do sistema.',
    'exp6-role':              'Engenheiro de Dados',
    'exp6-period':            'Nov. 2019 — Abr. 2021',
    'exp6-desc':              'Integrei o time de Dados, atuando com foco em atividades de Engenharia em ambiente Azure: desenvolvimento de scripts com Databricks, extração de dados de APIs, bases de dados e planilhas, transformação com PySpark, carregamento com Spark e estruturação de Pipelines com Data Factory.',
    'exp-show-more':          'Ver experiência completa',
    'exp-show-less':          'Ver menos',
  }
};

let currentLang = 'en';
let currentPage = 'home';

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (elements with nested tags like <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // HTML lang attribute and page title
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.title = translations[lang]['title-' + currentPage];

  // Toggle button label (shows the language you can switch TO)
  document.getElementById('langToggle').textContent = lang === 'en' ? 'PT' : 'EN';

  // Keep experience expand button label in sync
  const expBtn = document.getElementById('expToggle');
  expBtn.textContent = translations[lang][expExpanded ? 'exp-show-less' : 'exp-show-more'];
}

// ===== LANGUAGE TOGGLE =====
document.getElementById('langToggle').addEventListener('click', () => {
  applyTranslations(currentLang === 'en' ? 'pt' : 'en');
});

// ===== EXPERIENCE EXPAND =====
let expExpanded = false;
document.getElementById('expToggle').addEventListener('click', () => {
  expExpanded = !expExpanded;
  const extra = document.getElementById('timelineExtra');
  const btn   = document.getElementById('expToggle');
  extra.classList.toggle('open', expExpanded);
  btn.textContent = translations[currentLang][expExpanded ? 'exp-show-less' : 'exp-show-more'];
});

// ===== NAVIGATION =====
function navigate(page) {
  currentPage = page;
  document.title = translations[currentLang]['title-' + page];

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  document.getElementById('mobileMenu').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nav links click
document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
  link.addEventListener('click', () => navigate(link.dataset.page));
});

// Hero buttons
document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.goto));
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = translations[currentLang]['form-sending'];
  btn.disabled = true;

  setTimeout(() => {
    const successEl = document.getElementById('formSuccess');
    successEl.textContent = translations[currentLang]['form-success'];
    successEl.classList.add('show');
    this.reset();
    btn.textContent = translations[currentLang]['form-submit'];
    btn.disabled = false;
  }, 1200);
});

// ===== SCROLL ANIMATIONS =====
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Stagger timeline items and edu cards by group
document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.edu-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
});
// Stagger the 3 about columns
const aboutCols = ['.about-photo', '.about-text', '.skills-panel'];
aboutCols.forEach((sel, i) => {
  const el = document.querySelector(sel);
  if (el) el.style.transitionDelay = `${i * 0.12}s`;
});

document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();
