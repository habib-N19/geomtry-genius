let serial = 0;
// triangle card
document.getElementById('triangle-calc-btn').addEventListener('click', function () {
    // console.log('first btn clicked')
    serial += 1;
    const name = 'Triangle';
    const inputFieldsValues = getInputValueByID('b-value-triangle', 'h-value-triangle');
    const areaTotal = 0.5 * inputFieldsValues;
    const areaValue = parseFloat(areaTotal).toFixed(2);
    if (inputFieldsValues === null) {
        serial -= 1;
        return;
    }
    displayResult(name, areaValue);


})
// rectangle card
document.getElementById('rectangle-calc-btn').addEventListener('click', function () {
    // console.log(' btn clicked')
    serial += 1;
    const name = 'Rectangle';
    const inputFieldsValues = getInputValueByID('w-value-rectangle', 'l-value-rectangle');
    const areaTotal = inputFieldsValues;
    const area = parseFloat(areaTotal).toFixed(2);
    if (inputFieldsValues === null) {
        serial -= 1;
        return;
    }
    displayResult(name, area);
})
// parallelogram card
document.getElementById('parallelogram-calc-btn').addEventListener('click', function () {
    // console.log('first btn clicked')
    serial += 1;
    const name = 'Parallelogram';
    const inputFieldsValues = getInputValueByID('b-value-parallelogram', 'h-value-parallelogram');
    const areaTotal = inputFieldsValues;
    const area = parseFloat(areaTotal).toFixed(2);
    if (inputFieldsValues === null) {
        serial -= 1;
        return;
    }
    displayResult(name, area);
})
// rhombus card
document.getElementById('rhombus-calc-btn').addEventListener('click', function () {
    // console.log('first btn clicked')
    serial += 1;
    const name = 'Rhombus';
    const inputFieldsValues = getInputValueByID('d1-value-rhombus', 'd2-value-rhombus');
    const areaTotal = 0.5 * inputFieldsValues;
    const area = parseFloat(areaTotal).toFixed(2);
    if (inputFieldsValues === null) {
        serial -= 1;
        return;
    }
    displayResult(name, area);
})
// pentagon card
document.getElementById('pentagon-calc-btn').addEventListener('click', function () {
    serial += 1;
    const name = 'Pentagon';
    const inputFieldsValues = getInputValueByID('p-value-pentagon', 'b-value-pentagon');
    const areaTotal = 0.5 * inputFieldsValues;
    const area = parseFloat(areaTotal).toFixed(2);
    if (inputFieldsValues === null) {
        serial -= 1;
        return;
    }
    displayResult(name, area);
})
// ellipse card
document.getElementById('ellipse-calc-btn').addEventListener('click', function () {
    serial += 1;
    const name = 'Ellipse';
    const inputFieldsValues = getInputValueByID('a-value-ellipse', 'b-value-ellipse');
    const areaTotal = 3.14 * inputFieldsValues;
    const area = parseFloat(areaTotal).toFixed(2);
    if (inputFieldsValues === null) {
        serial -= 1;
        return;
    }
    displayResult(name, area);
})


// bonus section
// random bg color on hover effect
const cardItems = document.querySelectorAll('.card-item');
// random rgb generator
function randomRGBcolor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;

}


// function to add event listener to every card
for (let cardItem of cardItems) {
    cardItem.addEventListener('mouseenter', function () {
        const color = randomRGBcolor();
        cardItem.setAttribute('data-bgColor', color);
        cardItem.style.backgroundColor = color;
    });
    cardItem.addEventListener('mouseleave', function () {
        const color = cardItem.getAttribute('data-bgColor');
        cardItem.style.backgroundColor = color;
    })
}
