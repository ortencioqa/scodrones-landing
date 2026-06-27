// WhatsApp
function falarWhatsApp(servico) {
  const numero = "5541996128712";
  const texto = servico
    ? `Olá, gostaria de solicitar um orçamento para: ${servico}.`
    : "Olá, gostaria de solicitar um orçamento para serviço com drone em Curitiba.";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
}

// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add("visible"), parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Contadores animados
function animateCount(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".num-value").forEach(el => counterObserver.observe(el));

// Tabs portfólio
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".portfolio-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

// Formulário → WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const telefone = this.telefone.value.trim();
  const servico = this.servico.value;
  const mensagem = this.mensagem.value.trim();

  const texto = `Olá, me chamo *${nome}*.
Telefone: ${telefone}
Serviço: ${servico}
${mensagem ? `Mensagem: ${mensagem}` : ""}
Gostaria de um orçamento!`;

  window.open(`https://wa.me/5541996128712?text=${encodeURIComponent(texto)}`, "_blank");
});
