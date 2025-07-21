let btn = document.querySelector('.decode-btn');
let slctElem = document.querySelector('#encode_select');
const firstInput = document.querySelector('#decode-input');

btn.addEventListener('click', decodeBase64);

function decodeBase64() {
  const decodeInput = decodeURIComponent(firstInput.value);
  const slctIndex = slctElem.selectedIndex;

  const decodeByIndex = () => {
    if (slctIndex === 0) {
      return atob(decodeInput);
    } if (slctIndex === 1) {
      return decodeURIComponent(decodeInput.replace(/\+/g, ' '));
    }
  }
  try {
    if (decodeInput === '') {
      throw new Error('Input is empty');
    }
    const decoded = decodeByIndex();
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
