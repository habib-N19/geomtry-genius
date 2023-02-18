// function for all input validation and make the input string values to float as needed
function getInputValueByID(input1, input2) {
    const inputField1 = document.getElementById(input1);
    const inputField1String = inputField1.value;
    const inputValue1 = parseFloat(inputField1String);
    const inputField2 = document.getElementById(input2);
    const inputField2String = inputField2.value;
    const inputValue2 = parseFloat(inputField2String);

    if (isNaN(inputValue1) || inputValue1 <= 0 || isNaN(inputValue2) || inputValue2 <= 0) {
        return alert('Please enter valid numbers')
    }
    const inputFieldsValueTotal = inputValue1 * inputValue2;
    return inputFieldsValueTotal;

}

// function for showing result on the side section
function displayResult(name, result) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial} </td>
    <td>${name} </td>
    <td>${result} cm<sup>2</sup> </td>
    <td><button class="convert-button" > m<sup>2</sup> </button/></td>
    
    `
    tableContainer.appendChild(tr);

}