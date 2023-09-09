function randomTime() {
  return Math.floor(Math.random() * (1000 - 100) + 100);
}

function seleccionarArchivo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const archivoSeleccionado = archivo;
      console.log("Archivo seleccionado: " + archivoSeleccionado);
      resolve(archivoSeleccionado);
    }, randomTime());
  });
}

function verificarFormato(nombreArchivo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const formatoValido = nombreArchivo.endsWith(".txt");
      console.log("Formato válido: " + formatoValido);
      resolve(formatoValido);
    }, randomTime());
  });
}

function verificarTamaño(nombreArchivo, formatoValido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tamañoAceptable = formatoValido && nombreArchivo.length < 20;
      resolve(tamañoAceptable);
      console.log("Tamaño aceptable: " + tamañoAceptable);
    }, randomTime());
  });
}

function cargarArchivo(nombreArchivo, tamañoAceptable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tamañoAceptable) {
        resolve(`El archivo ${nombreArchivo} se ha cargado exitosamente.`);
      } else {
        reject(
          `El archivo ${nombreArchivo} no pudo ser cargado debido a su tamaño o formato.`
        );
      }
    }, randomTime());
  });
}

const archivo = "archivo.txt";

const botonSubir = document.getElementById("subir");
const textoContainer = document.getElementById("texto");

botonSubir.addEventListener("click", () => {
  seleccionarArchivo()
    .then((nombreArchivo) => {
      const span = document.createElement("span");
      span.textContent = "Archivo seleccionado: " + nombreArchivo + "--> ";
      textoContainer.appendChild(span);
      return verificarFormato(nombreArchivo);
    })
    .then((formatoValido) => {
      const span = document.createElement("span");
      span.textContent = "Formato válido: " + formatoValido + "--> ";
      textoContainer.appendChild(span);
      return verificarTamaño(archivo, formatoValido);
    })
    .then((tamañoAceptable) => {
      const span = document.createElement("span");
      span.textContent = "Tamaño aceptable: " + tamañoAceptable + "--> ";
      textoContainer.appendChild(span);
      return cargarArchivo(archivo, tamañoAceptable);
    })
    .then((resultado) => {
      const span = document.createElement("span");
      span.textContent = resultado;
      textoContainer.appendChild(span);
    })
    .catch((error) => {
      const span = document.createElement("span");
      span.textContent = "Error: " + error;
      textoContainer.appendChild(span);
    });
});
