/**
 * Casa DALO — menú, colecciones, animaciones y cotización
 */
const CONTACT = {
  email: "paorobgalan@gmail.com",
  whatsapp: "56965609346",
};

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNav();
  initCollectionsCarousel();
  initReveal();
  initMiniConfig();
  initQuoteForm();
  initNewsletter();
});

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  };

  const open = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menú");
  };

  toggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) close();
    else open();
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) close();
  });
}

function initCollectionsCarousel() {
  const track = document.getElementById("collections-track");
  const prev = document.querySelector("[data-collections-prev]");
  const next = document.querySelector("[data-collections-next]");
  if (!track || !prev || !next) return;

  const scrollByCard = (dir) => {
    const card = track.querySelector(".collection");
    if (!card) return;
    const amount = card.getBoundingClientRect().width + 16;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal, .process-item");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

function getConfigSummary() {
  const tapa = document.getElementById("cfg-tapa")?.value;
  const coleccion = document.getElementById("cfg-coleccion")?.value;
  const papel = document.getElementById("cfg-papel")?.value;
  const acabado = document.getElementById("cfg-acabado")?.value;
  if (!tapa || !coleccion || !papel || !acabado) return "";
  return `${tapa} · ${coleccion} · Papel ${papel} · ${acabado}`;
}

function initMiniConfig() {
  const fields = ["cfg-tapa", "cfg-coleccion", "cfg-papel", "cfg-acabado"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const preview = document.getElementById("preview-line");
  if (!fields.length || !preview) return;

  const update = () => {
    preview.textContent = getConfigSummary();
  };

  fields.forEach((el) => el.addEventListener("change", update));
  update();
}

function buildMessage(data) {
  const lines = [
    "Hola Casa DALO,",
    "",
    "Quiero pedir una cotización:",
    "",
    `Nombre: ${data.nombre}`,
    `Contacto: ${data.contacto}`,
    `Tipo de proyecto: ${data.tipo}`,
    "",
    "Idea:",
    data.mensaje,
  ];

  if (data.config) {
    lines.push("", "--- Preferencias del configurador ---", data.config);
  }

  lines.push("", "— Enviado desde la web Casa DALO");
  return lines.join("\n");
}

function readForm(form) {
  const nombre = form.nombre.value.trim();
  const contacto = form.contacto.value.trim();
  const tipo = form.tipo.value.trim();
  const mensaje = form.mensaje.value.trim();
  if (!nombre || !contacto || !tipo || !mensaje) return null;
  return { nombre, contacto, tipo, mensaje, config: getConfigSummary() };
}

function showSuccess() {
  const success = document.getElementById("form-success");
  if (!success) return;
  success.classList.add("is-visible");
  window.setTimeout(() => success.classList.remove("is-visible"), 6000);
}

function sendEmail(data) {
  const subject = encodeURIComponent(`Cotización Casa DALO — ${data.nombre}`);
  const body = encodeURIComponent(buildMessage(data));
  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}

function sendWhatsApp(data) {
  const text = encodeURIComponent(buildMessage(data));
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
}

function initQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = readForm(form);
    if (!data) {
      form.reportValidity();
      return;
    }
    sendEmail(data);
    showSuccess();
  });

  const waBtn = form.querySelector('[data-send="whatsapp"]');
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const data = readForm(form);
      if (!data) {
        form.reportValidity();
        return;
      }
      sendWhatsApp(data);
      showSuccess();
    });
  }
}

function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.querySelector("input")?.value.trim();
    if (!email) return;

    const subject = encodeURIComponent("Suscripción newsletter Casa DALO");
    const body = encodeURIComponent(
      `Hola Casa DALO,\n\nQuiero suscribirme al newsletter.\n\nEmail: ${email}\n`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    form.reset();
  });
}
