const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  // Estrellas
  let stars = [];
  const numStars = 150;

  // Cursor
  let mouse = { x: innerWidth / 2, y: innerHeight / 2 };

  // Rastro
  let trail = [];

  // Resize
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);

  // Movimiento del mouse
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Crear partícula de rastro
    trail.push({
      x: e.clientX,
      y: e.clientY,
      radius: Math.random() * 2 + 1,
      alpha: 1
    });
  });

  // Crear estrellas
  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.5,
      });
    }
  }

  // Dibujar estrellas
  function drawStars() {
    for (let star of stars) {
      const dx = star.x - mouse.x;
      const dy = star.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;
      const brightness = Math.max(0.2, 1 - dist / maxDist);

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
      ctx.fill();
    }
  }

  // Dibujar rastro
  function drawTrail() {
    for (let i = trail.length - 1; i >= 0; i--) {
      const p = trail[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
  
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 10;
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fill();
  
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
  
      p.alpha -= 0.02;
      p.radius -= 0.1;
  
      if (p.alpha <= 0 || p.radius <= 0) {
        trail.splice(i, 1);
      }
    }
  }

  // Animación
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawTrail();
    requestAnimationFrame(animate);
  }

  // Iniciar
  resize();
  createStars();
  animate();