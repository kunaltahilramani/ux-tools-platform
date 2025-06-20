document.addEventListener('DOMContentLoaded', () => {
  const fields = {
    name: 'Aarav Mehta',
    age: '29',
    jobTitle: 'Product Manager',
    goals: 'Simplify product workflows for customers.',
    frustrations: 'Overcomplicated tools, unclear communication.',
    quote: 'I just want things to work and make sense.'
  };

  const form = document.getElementById('persona-form');

  for (const key in fields) {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-field';

    const label = document.createElement('label');
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1);

    const input = document.createElement('input');
    input.name = key;
    input.value = fields[key];

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    form.appendChild(wrapper);
  }
});
