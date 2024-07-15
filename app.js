const validarTexto = /^[a-z\s]+$/;
const textoEncriptar = document.querySelector('#text-encrypt');
const textoEncriptado = document.querySelector('#result-message');
const btnCopy = document.querySelector('#btn-copy');
const imgMessage = document.querySelector('.img-message');
const titleMessage = document.querySelector('.title-message');
const textMessage = document.querySelector('.text-message');
const sectionMessage = document.querySelector('.section-message');

const encriptarPatrones = [
  { original: 'e', encriptado: 'enter' },
  { original: 'i', encriptado: 'imes' },
  { original: 'a', encriptado: 'ai' },
  { original: 'o', encriptado: 'ober' },
  { original: 'u', encriptado: 'ufat' }
];

function encriptar() {
  if (!validarTexto.test(textoEncriptar.value)) {
    alert('texto no valido');
    return;
  }

  let texto = textoEncriptar.value;
  encriptarPatrones.forEach(patron => {
    const regex = new RegExp(patron.original, 'g');
    texto = texto.replace(regex, patron.encriptado);
  });

  textoEncriptado.value = texto;
  mostrarResultado();
}

function desencriptar() {
  if (!validarTexto.test(textoEncriptar.value)) {
    alert('texto no valido');
    return;
  }

  let texto = textoEncriptar.value;
  encriptarPatrones.forEach(patron => {
    const regex = new RegExp(patron.encriptado, 'g');
    texto = texto.replace(regex, patron.original);
  });

  textoEncriptado.value = texto;
  mostrarResultado();
}

function mostrarResultado() {
  textoEncriptado.style.display = 'block';
  btnCopy.style.display = 'block';
  imgMessage.style.display = 'none';
  titleMessage.style.display = 'none';
  textMessage.style.display = 'none';
  sectionMessage.style.justifyContent = 'space-between';
}

function copiar() {
  textoEncriptado.select();
  document.execCommand('copy');
}
