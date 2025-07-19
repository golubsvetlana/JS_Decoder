let btn = document.querySelector('.decode-btn');

btn.addEventListener('click', decodeBase64);

function decodeBase64() {
  const decodeInput = decodeURIComponent(document.querySelector('#decode-input').value);
  console.log(decodeInput)
  try {
    if (decodeInput === '') {
      throw new Error('Input is empty');
    }
    const decoded = atob(decodeInput);
    const result = document.querySelector('.script-result');
    result.innerHTML = `
      <h5 class="text-center">Result</h5>
      <code class="form-control">${decoded}</code>      
      `;
    result.style.color = 'black';
  } catch (error) {
    const result = document.querySelector('.script-result');
    result.innerHTML = `<h3>${error}</h3>`;
    result.style.color = 'red';
  }
}
