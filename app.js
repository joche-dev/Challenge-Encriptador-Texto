// Definición de constantes
const validarTexto = /^[a-z0-9\s]+$/;
const textoEncriptar = document.querySelector('#text-encrypt');
const textoEncriptado = document.querySelector('#result-message');
const btnCopy = document.querySelector('#btn-copy');
const imgMessage = document.querySelector('.img-message');
const titleMessage = document.querySelector('.title-message');
const textMessage = document.querySelector('.text-message');
const sectionMessage = document.querySelector('.section-message');
const warning = document.querySelector('.warning');
const warningText = document.querySelector('.warning-text');

const encriptarPatrones = [
  { original: 'e', encriptado: 'enter' },
  { original: 'i', encriptado: 'imes' },
  { original: 'a', encriptado: 'ai' },
  { original: 'o', encriptado: 'ober' },
  { original: 'u', encriptado: 'ufat' },
];

// Función para mostrar advertencia de error
function warningError() {
  warningText.innerHTML =
    textoEncriptar.value.trim() === ''
      ? 'No puede estar vacío'
      : 'Solo letras minúsculas, sin acentos y caracteres especiales';
  warning.style.color = 'var(--red)';
  textoEncriptar.classList.add('shake');
  setTimeout(() => textoEncriptar.classList.remove('shake'), 1000);
}

// Función para encriptar texto
function encriptar() {
  if (!validarTexto.test(textoEncriptar.value)) {
    warningError();
    return;
  } else {
    warningText.innerHTML = 'Solo letras minúsculas y sin acentos';
    warning.style.color = 'var(--dark-blue-300)';
  }

  let textoEncriptado = textoEncriptar.value;
  encriptarPatrones.forEach((patron) => {
    textoEncriptado = textoEncriptado.replaceAll(patron.original, patron.encriptado);
  });

  mostrarResultado(textoEncriptado);
}

// Función para desencriptar texto
function desencriptar() {
  if (!validarTexto.test(textoEncriptar.value)) {
    warningError();
    return;
  } else {
    warningText.innerHTML = 'Solo letras minúsculas y sin acentos';
    warning.style.color = 'var(--dark-blue-300)';
  }

  let textoDesencriptado = textoEncriptar.value;
  encriptarPatrones.forEach((patron) => {
    textoDesencriptado = textoDesencriptado.replaceAll(patron.encriptado, patron.original);
  });

  mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
  textoEncriptado.value = texto;
  textoEncriptar.value = '';

  textoEncriptado.style.display = 'block';
  btnCopy.style.display = 'block';
  imgMessage.style.display = 'none';
  titleMessage.style.display = 'none';
  textMessage.style.display = 'none';
  sectionMessage.style.justifyContent = 'space-between';
}

// Función para copiar texto al portapapeles
function copiar() {
  textoEncriptado.select();
  document.execCommand('copy');
}
