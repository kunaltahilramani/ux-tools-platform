function generateColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}
function generatePalette() {
  const container = document.getElementById('palette');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = generateColor();
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = color;
    box.title = color;
    box.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      box.classList.add('copied');
      setTimeout(() => box.classList.remove('copied'), 800);
    });
    container.appendChild(box);
  }
}
document.addEventListener('DOMContentLoaded', generatePalette);
