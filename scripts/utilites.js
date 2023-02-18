// function for all input validation and make the input string values to float as needed
function getInputValueByID(input1, input2) {
    const inputFieldValue1 = document.getElementById(input1).value;
    // const inputFieldValue1 = inputField1.value;
    const inputFieldValue2 = document.getElementById(input2).value;
    // const= inputField2.value;
    const inputFieldsValueTotal = inputFieldValue1 * inputFieldValue2;
    return inputFieldsValueTotal;

}