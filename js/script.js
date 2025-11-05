  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  }

 // Script para manejar precios y WhatsApp dinámico

const numeroWhatsApp = "5491130603771";

const productos = [
  {
    nombre: "Conjunto Oficial FABO (Camiseta + Short)",
    selectId: "telaConjunto",
    talleId: "talleConjunto",
    numeroId: "numeroConjunto",
    precioId: "precioConjunto",
    botonId: "btnConjunto"
  },
  {
    nombre: "Camiseta FABO",
    selectId: "telaCamiseta",
    talleId: "talleCamiseta",
    numeroId: "numeroCamiseta",
    precioId: "precioCamiseta",
    botonId: "btnCamiseta"
  },
  {
    nombre: "Short FABO",
    selectId: "telaShort",
    talleId: "talleShort",
    numeroId: "numeroShort",
    precioId: "precioShort",
    botonId: "btnShort"
  }
];

productos.forEach(p => {
  const selectTela = document.getElementById(p.selectId);
  const selectTalle = document.getElementById(p.talleId);
  const inputNumero = document.getElementById(p.numeroId);
  const precio = document.getElementById(p.precioId);
  const boton = document.getElementById(p.botonId);

  if (selectTela && precio && boton && selectTalle) {

    const actualizarPrecio = () => {
      const opt = selectTela.options[selectTela.selectedIndex];
      const valor = opt.value;
      const anterior = opt.dataset.anterior;
      precio.innerHTML = `
        <span class="line-through text-gray-400 text-sm mr-2">$${Number(anterior).toLocaleString("es-AR")}</span>
        <span class="text-cyan-500 font-bold text-xl">$${Number(valor).toLocaleString("es-AR")}</span>
      `;
    };

    const actualizarWhatsApp = () => {
      const tela = selectTela.options[selectTela.selectedIndex].text;
      const talle = selectTalle.value;
      const numero = inputNumero && inputNumero.value.trim() !== "" ? `, Número ${inputNumero.value}` : "";
      const mensaje = encodeURIComponent(
        `Hola FABO! Quiero este producto: ${p.nombre} - Tela ${tela}, Talle ${talle}${numero}.`
      );
      boton.href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    };

    // Inicializar
    actualizarPrecio();
    actualizarWhatsApp();

    // Eventos
    selectTela.addEventListener("change", () => {
      actualizarPrecio();
      actualizarWhatsApp();
    });

    selectTalle.addEventListener("change", actualizarWhatsApp);

    if (inputNumero) inputNumero.addEventListener("input", actualizarWhatsApp);
  }
});

  // Carrusel
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: { 
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  



