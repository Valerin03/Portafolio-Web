// Scroll suave
  document.querySelectorAll('.nav-circulos a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Activar círculo según scroll
  const sections = document.querySelectorAll('section');
  const circles = document.querySelectorAll('.nav-circulos a');

  window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    circles.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

// Oculta todas las secciones al cargar, excepto "inicio"
document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("main section, header");
  secciones.forEach((sec) => sec.style.display = "none");
  document.querySelector("#inicio").closest("header").style.display = "block";

  // Clic en círculos de navegación
  const circulos = document.querySelectorAll(".nav-circulos a");
  circulos.forEach(circulo => {
    circulo.addEventListener("click", e => {
      e.preventDefault();
      const targetID = circulo.getAttribute("href").replace("#", "");

      // Oculta todo y muestra solo el seleccionado
      secciones.forEach(sec => sec.style.display = "none");
      const target = document.getElementById(targetID);
      if (target) {
        const contenedor = target.closest("header") || target.closest("section");
        contenedor.style.display = "block";
      }

      // Maneja el estilo activo
      circulos.forEach(c => c.classList.remove("active"));
      circulo.classList.add("active");
    });
  });
});