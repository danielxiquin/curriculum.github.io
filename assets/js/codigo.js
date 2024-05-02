function mostrarPorcentaje(contenedor, porcentaje) {
    var overlay = contenedor.querySelector(".overlay");
    var progressBar = overlay.querySelector(".progress-bar");
    var percentage = overlay.querySelector(".percentage");
  
    progressBar.style.width = porcentaje + "%";
    percentage.textContent = porcentaje + "%";
  }