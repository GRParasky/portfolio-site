// ===== NAVIGATION =====
function navigate(page) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // update nav links
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // close mobile menu
  document.getElementById('mobileMenu').classList.remove('open');

  // scroll to top
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

  // Simulate sending
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('show');
    this.reset();
    btn.textContent = 'Enviar Mensagem';
    btn.disabled = false;
  }, 1200);
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();
