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

    const area = width * length;
    // console.log(area);

    // show rectangle area.

    let rectangleAreaSpan = document.getElementById ('rectangle-area');
    rectangleAreaSpan.innerText =area;
}