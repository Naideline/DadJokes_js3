import Publisher from "./Publish";

const colorInputs = document.querySelectorAll('.color');
const colorChange = new Publisher();

function handleColorChange(event) {
    const color = event.currentTarget.dataset.id;
    colorChange.publish();
}

function initColors() {
    colorInputs.forEach(col => {
        col.addEvenListener('change', handleColorChange)
    })
}

export {
    initColors,
    colorChange
}