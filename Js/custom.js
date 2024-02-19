function showElementId(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden')
}

// Color Button
// Seat Button Declear;

function getElementByValue(elementId){
    const elementValue = document.getElementById(elementId);
    const elementText = elementValue.innerText;
    const elementIntValue = parseInt(elementText)
    return elementIntValue
}

function setElementByValue(elementId, elementIntValue){
    const elementValue = document.getElementById(elementId)
    elementValue.innerText = elementIntValue
}

