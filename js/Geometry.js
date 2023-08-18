function calculateTriangleArea (){
     //get triangle base value by id
     let baseInputField = document.getElementById('triangle-base');
     let baseValueText = baseInputField.value;
     let base = parseFloat(baseValueText);
    //  console.log(base);

    
    //  get triangle height value.
    const heightInputField = document.getElementById ('triangle-height');
    const heightValueText = heightInputField.value;
    const height = parseFloat (heightValueText);
    // console.log(height);

    let area = 0.5 * base * height;
    // console.log(area);

    // show triangle area.
    let triangleAreaSpan = document.getElementById ('triangle-area');
    triangleAreaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}
function calculateRectangleArea (){
    // get rectangle width value by id.
    let widthInputField = document.getElementById ('rectangle-width');
    let widthValueText = widthInputField.value;
    let width = parseFloat (widthValueText);
    // console.log(width);

    // get rectangle height value by id.
    const heightInputField = document.getElementById ('rectangle-length');
    const heightValueText = heightInputField.value;
    const length = parseFloat (heightValueText);
    // console.log(length);

    // validate input.
    if (isNaN (width) || isNaN (length)){
        alert('Please insert a number');
        return;
    }

    const area = width * length;
    // console.log(area);

    // show rectangle area.

    let rectangleAreaSpan = document.getElementById ('rectangle-area');
    rectangleAreaSpan.innerText =area;
    addToCalculationEntry('Rectangle', area);
}




// reusable function --> reduce duplicate code.
function calculateParallelogramArea (){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    // console.log(area);
    // validate
    if (isNaN (base) || isNaN (height)) {
        alert('Please insert number');
        return;
    }
    setElementInnerText('parallelogram-area', area)
    // add to calculation entry.
    addToCalculationEntry ('Parallelogram', area);
 
}

function calculateEllipseArea (){
    const majorRadius = getInputValue ('ellipse-major-radius');
    const minorRadius = getInputValue ('Ellipse-minor-radius')
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDesimal = area.toFixed(2);
    setElementInnerText ('ellipse-area', areaTwoDesimal)

    addToCalculationEntry('Ellipse', area);
}

// reusable get input value field in number.
function getInputValue (fieldId) {
    const inputField = document.getElementById (fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat (inputValueText);
    return value;

}

// reusable set  span, p, div, etc text

function setElementInnerText (elementId, area) {
    let element = document.getElementById (elementId);
    element.innerText = area;
}


// add to calculation entry.
/**
 * 1. get the element where you want to add the dynamic HTML.
 * 2. creat an element you want to add.
 * 3.if needed add some class.
 * 4. set innerHTML. It could be dynamic template string.
 * 5. append the created element as a child of the parent.
 */
function addToCalculationEntry (areaType, area){
    let calculationEntry = document.getElementById ('calculation-entry');
    let count = calculationEntry.childElementCount;
    let p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm text-white">Convert</button`
    calculationEntry.appendChild(p);


}


// Data validation.

/*
1. set the proper type of the input field. (number, data, email).
2. check typeof using typeof.
3. NaN means: not a number. isNaN is checking whether the input is not number or not.
*/