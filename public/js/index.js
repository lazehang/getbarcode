document
  .querySelector('form#generate-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const resultElement = document.getElementById('result');
    const barcodeValue = e.target.elements['barcodeValue'].value || '';
    resultElement.innerHTML = '';

    if (!barcodeValue) return;

    const url = `${window.location.protocol}//${window.location.host}/generate/${barcodeValue}`;

    const text = document.getElementById('result-url');
    text.value = url;

    document.querySelector('#copythis').addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(url);
    });

    appendImage(resultElement, url);

    document.querySelector('.clipboard').style.display = 'flex';
  });

function appendImage(el, src) {
  const image = new Image();
  image.src = src;
  el.appendChild(image);
}

function copyToClipboard(text) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
}
