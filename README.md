# Casa DALO

**Casa DALO** = **Del Amor y Otras Lecturas**  
Artefactos literarios hechos a mano en Chile.

Esta carpeta es la página web de la imprenta boutique.

---

## Cómo ver la página (paso a paso)

1. Abre la carpeta **Casa-DALO** en tu computador (la de este proyecto).
2. Busca el archivo que se llama **`index.html`** (es la puerta de entrada de la web).
3. Haz **doble clic** en `index.html`.
4. Se abrirá en tu navegador (Chrome, Safari, etc.).
5. ¡Listo! Ya estás viendo Casa DALO.

### Ver cómo se ve en el celular (sin celular)

1. Con la página abierta en Chrome o Safari, abre las **herramientas de desarrollador**:
   - En Mac: `Cmd + Opción + I`
2. Activa el modo celular (ícono de teléfono/tablet).
3. Elige un tamaño como iPhone y revisa el menú y las colecciones.

---

## Qué hay en esta carpeta

| Archivo / carpeta | Qué es (en simple) |
|-------------------|--------------------|
| `index.html` | La página completa |
| `css/styles.css` | Colores, tipografías y diseño |
| `js/main.js` | Menú del celular, carrusel y formulario |
| `assets/` | Íconos e imágenes de marca |

---

## Formulario de cotización

Cuando alguien llena el formulario:

- **Enviar por correo** abre el programa de correo con el mensaje listo.
- **Enviar por WhatsApp** abre WhatsApp con el mensaje listo.

### Cómo poner TU email y TU WhatsApp

1. Abre el archivo `js/main.js`.
2. Arriba verás algo así:

```js
const CONTACT = {
  email: "paorobgalan@gmail.com",
  whatsapp: "56965609346",
};
```

3. Ya está configurado con tu correo y WhatsApp.
4. Si algún día cambias de número o correo, edita esos dos valores (WhatsApp: código de país + número, **sin** espacios ni el signo `+`).

---

## Qué NO necesita (por ahora)

- No hace falta **Java**.
- No hace falta **Node.js**.
- Solo HTML, CSS y un poquito de JavaScript.

Más adelante se puede sumar tienda con pagos, blog real y base de datos.

---

## Marca (colores)

- Burdeos `#5B1E2D`
- Verde bosque `#1E2F28`
- Dorado `#B78C42`
- Crema `#F1E7D6`
- Taupe `#6E635A`

Tipografías: **Cormorant Garamond** (títulos) y **Lora** (texto).
