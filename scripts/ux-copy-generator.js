const copyTemplates = {
  button: ['Get Started', 'Submit Request', 'Try Free for 7 Days'],
  formLabel: ['Enter your email address', 'Create a secure password', 'Your full name'],
  tooltip: ['Click to learn more', 'Hover for more info', 'This action is irreversible']
};

function generateCopy() {
  const type = document.getElementById('elementType').value;
  const options = copyTemplates[type];
  const random = options[Math.floor(Math.random() * options.length)];
  document.getElementById('copyOutput').innerText = `Copy: ${random}`;
}
