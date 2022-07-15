document
  .querySelector('form#generate-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const resultElement = document.getElementById('result');
    const barcodeValue = e.target.elements['barcodeValue'].value || '';
    const format = e.target.elements['format'].value;
    const width = e.target.elements['width'].value;
  
    resultElement.innerHTML = '';

    if (!barcodeValue) return;

    const url = `${window.location.protocol}//${window.location.host}/generate/${barcodeValue}?format=${format}&width=${width}`;

    const text = document.getElementById('result-url');
    text.value = url;

    document.querySelector('#copythis').addEventListener('click', (e) => {
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

function copyToClipboard(text = '') {
  navigator.clipboard.writeText(text).then(() => notify());
}

function notify() {
  const el = document.querySelector('.copied-notify');
  const closeBtn = el.querySelector('.close');
  el.classList.add('show');
  closeBtn.addEventListener('click', () => el.classList.remove('show'));
}
