import Publisher from '../publisher/Publisher.js';

const colorInputs = document.querySelectorAll('.color');
const colorChange = new Publisher();

function handleColorChange(event) {
  const color = event.currentTarget.getAttribute('value');
  colorChange.publish(color);
}

function initColors() {
  colorInputs.forEach(col => {
    col.addEventListener('change', handleColorChange);
  });
}

const colors = [
  { value: 'white' },
  { value: 'black' },
];

const colorSelector = document.querySelector('.color-selector');

// Crear los elementos HTML para las opciones de color
colors.forEach(color => {
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'color';
  input.value = color.value;
  if (color.value === 'white') {
    input.checked = true;
  }

  const label = document.createElement('label');
  label.textContent = color.value;
  input.setAttribute('class', `color-option color-${color.value}`);

  colorSelector.appendChild(input);
  colorSelector.appendChild(label);
});

export {
  initColors,
  colorChange,
};
