/**
 * Casa DALO — menú, configurador y pedidos
 */
const CONTACT = {
  email: "paorobgalan@gmail.com",
  whatsapp: "56965609346",
};

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNav();
  initConfiguratorPreview();
  initOrderForm();
});

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");
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
    if (window.innerWidth > 760) close();
  });
}

function initConfiguratorPreview() {
  const tapa = document.getElementById("tapa");
  const coleccion = document.getElementById("coleccion");
  const papel = document.getElementById("papel");
  const acabado = document.getElementById("acabado");
  const preview = document.getElementById("preview-text");
  if (!tapa || !coleccion || !papel || !acabado || !preview) return;

  const update = () => {
    preview.textContent = `${tapa.value} · ${coleccion.value} · Papel ${papel.value} · ${acabado.value}`;
  };

  [tapa, coleccion, papel, acabado].forEach((el) => el.addEventListener("change", update));
}

function buildMessage(data) {
  return [
    "Hola Casa DALO,",
    "",
    "Quiero hacer un pedido / cotización:",
    "",
    `Nombre: ${data.nombre}`,
    `Contacto: ${data.contacto}`,
    `Tipo de proyecto: ${data.tipo}`,
    "",
    "Mensaje:",
    data.mensaje,
    "",
    "— Enviado desde la web Casa DALO",
  ].join("\n");
}

function readOrderForm(form) {
  const nombre = form.nombre.value.trim();
  const contacto = form.contacto.value.trim();
  const tipo = form.tipo.value.trim();
  const mensaje = form.mensaje.value.trim();
  if (!nombre || !contacto || !tipo || !mensaje) return null;
  return { nombre, contacto, tipo, mensaje };
}

function showSuccess() {
  const el = document.getElementById("form-success");
  if (!el) return;
  el.style.display = "block";
  window.setTimeout(() => {
    el.style.display = "none";
  }, 6000);
}

function sendEmail(data) {
  const subject = encodeURIComponent(`Pedido Casa DALO — ${data.nombre}`);
  const body = encodeURIComponent(buildMessage(data));
  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}

function sendWhatsApp(data) {
  const text = encodeURIComponent(buildMessage(data));
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
}

function initOrderForm() {
  const form = document.getElementById("order-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = readOrderForm(form);
    if (!data) {
      form.reportValidity();
      return;
    }

    const idea = document.getElementById("idea")?.value.trim();
    const tapa = document.getElementById("tapa")?.value;
    const coleccion = document.getElementById("coleccion")?.value;
    const papel = document.getElementById("papel")?.value;
    const acabado = document.getElementById("acabado")?.value;
    const extras = [
      tapa && `Tapa: ${tapa}`,
      coleccion && `Colección: ${coleccion}`,
      papel && `Papel: ${papel}`,
      acabado && `Acabado: ${acabado}`,
      idea && `Idea del configurador: ${idea}`,
    ]
      .filter(Boolean)
      .join("\n");

    if (extras) {
      data.mensaje = `${data.mensaje}\n\n--- Configurador ---\n${extras}`;
    }

    sendEmail(data);
    showSuccess();
  });

  const waBtn = form.querySelector('[data-send="whatsapp"]');
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const data = readOrderForm(form);
      if (!data) {
        form.reportValidity();
        return;
      }

      const idea = document.getElementById("idea")?.value.trim();
      const tapa = document.getElementById("tapa")?.value;
      const coleccion = document.getElementById("coleccion")?.value;
      const papel = document.getElementById("papel")?.value;
      const acabado = document.getElementById("acabado")?.value;
      const extras = [
        tapa && `Tapa: ${tapa}`,
        coleccion && `Colección: ${coleccion}`,
        papel && `Papel: ${papel}`,
        acabado && `Acabado: ${acabado}`,
        idea && `Idea del configurador: ${idea}`,
      ]
        .filter(Boolean)
        .join("\n");

      if (extras) {
        data.mensaje = `${data.mensaje}\n\n--- Configurador ---\n${extras}`;
      }

      sendWhatsApp(data);
      showSuccess();
    });
  }
}
