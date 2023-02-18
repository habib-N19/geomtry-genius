// triangle card
document.getElementById('triangle-calc-btn').addEventListener('click', function () {
    // console.log('first btn clicked')
    const inputFieldsValues = getInputValueByID('b-value-triangle', 'h-value-triangle');
    const areaTotal = 0.5 * inputFieldsValues;
    const area = parseFloat(areaTotal).toFixed(2);
    console.log(area);


})
// rectangle card
document.getElementById('rectangle-calc-btn').addEventListener('click', function () {
    console.log('first btn clicked')
})
// parallelogram card
document.getElementById('parallelogram-calc-btn').addEventListener('click', function () {
    console.log('first btn clicked')
})
// rhombus card
document.getElementById('rhombus-calc-btn').addEventListener('click', function () {
    console.log('first btn clicked')
})
// pentagon card
document.getElementById('pentagon-calc-btn').addEventListener('click', function () {
    console.log('first btn clicked')
})
// ellipse card
document.getElementById('ellipse-calc-btn').addEventListener('click', function () {
    console.log('first btn clicked')
})