const text = "Cargando más...";
let i = 0;
const speed = 150; // velocidad de escritura en ms

function typeWriter() {
  if (i < text.length) {
    document.getElementById("cargando").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.getElementById("cargando").innerHTML = "";
      i = 0;
      typeWriter();
    }, 2000); // reinicia después de 2s
  }
}

window.onload = typeWriter;
