let btn = document.querySelector('.decode-btn');

btn.addEventListener('click', decodeBase64);

function decodeBase64() {
  const decodeInput = decodeURIComponent(document.querySelector('#decode-input').value);
  console.log(decodeInput)
  try {
    const decoded = atob(decodeInput);
    const result = document.querySelector('.script-result');
    result.innerHTML = `
      <h5>Result</h5>
      <code>${decoded}</code>      
      `;
    result.style.color = 'black';
  } catch (error) {
    const result = document.querySelector('.script-result');
    result.innerHTML = `<h2>Invalid Input</h2>`;
    result.style.color = 'red';
  }
}
