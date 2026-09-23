const tecnologias = [

    {
        nombre: "HTML",
        icono: "assets/icons/html5.svg"
    },

    {
        nombre: "CSS",
        icono: "assets/icons/css_old.svg"
    },

    {
        nombre: "JavaScript",
        icono: "assets/icons/javascript.svg"
    },

    {
        nombre: "Figma",
        icono: "assets/icons/figma.svg"
    },

    {
        nombre: "Bootstrap",
        icono: "assets/icons/bootstrap.svg"
    },

    {
        nombre: "WebFlow",
        icono: "assets/icons/webflow.svg"
    },

    {
        nombre: "WordPress",
        icono: "assets/icons/wordpress.svg"
    },

    {
        nombre: "MVC",
        icono: "assets/icons/mvc.png"
    },

    {
        nombre: "Elementor",
        icono: "assets/icons/elementor.svg"
    },

    {
        nombre: "SQL Server",
        icono: "assets/icons/sql-server.svg"
    },

    {
        nombre: "MySQL",
        icono: "assets/icons/mysql-wordmark-dark.svg"
    },

    {
        nombre: "GitHub",
        icono: "assets/icons/github_dark.svg"
    },

    {
        nombre: "Canva",
        icono: "assets/icons/canva.svg"
    },

    {
        nombre: "CapCut",
        icono: "assets/icons/capcut.png"
    }

];


function obtenerCantidadTarjetas() {

    const ancho = window.innerWidth;

    if (ancho <= 576) {
        return 1;
    } 
    
    else if (ancho <= 991) {
        return 2;
    } 
    
    else {
        return 3;
    }
}


function crearCarrusel() {

    const contenedor = document.getElementById(
        "carouselTecnologiasInner"
    );

    contenedor.innerHTML = "";

    const cantidad = obtenerCantidadTarjetas();

    for (let i = 0; i < tecnologias.length; i += cantidad) {

        const slide = document.createElement("div");

        slide.classList.add("carousel-item");

        if (i === 0) {
            slide.classList.add("active");
        }

        const cardsContainer = document.createElement("div");

        cardsContainer.classList.add("cards-container");

        const grupo = tecnologias.slice(
            i,
            i + cantidad
        );

        grupo.forEach(tecnologia => {

            const card = document.createElement("div");

            card.classList.add(
                "card",
                "tech-card"
            );

            card.innerHTML = `

                <img
                    src="${tecnologia.icono}"
                    class="card-img-top"
                    alt="${tecnologia.nombre}"
                >

                <div class="card-body">

                    <p class="card-text">
                        ${tecnologia.nombre}
                    </p>

                </div>

            `;

            cardsContainer.appendChild(card);

        });

        slide.appendChild(cardsContainer);

        contenedor.appendChild(slide);
    }
}


crearCarrusel();


window.addEventListener(
    "resize",
    crearCarrusel
);