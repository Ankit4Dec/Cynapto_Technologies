// Get the scale input and scale value elements
const scaleInput = document.getElementById("scale");
const scaleValue = document.getElementById("scaleValue");
const scaleInput2 = document.getElementById("scale2");
const scaleValue2 = document.getElementById("scaleValue2");

// Update the scale value text box when the scale input changes
scaleInput.addEventListener("input", function () {
  // Ensure the scale value is within the range of 1 to 100
  let scale = parseFloat(this.value);
  if (scale < 1) {
    scale = 1;
  } else if (scale > 100) {
    scale = 100;
  }

  // Update the scale value
  scaleValue.value = scale.toFixed(1);
});
// Update the scale value text box when the scale input changes
scaleInput2.addEventListener("input", function () {
  // Ensure the scale value is within the range of 1 to 100
  let scale2 = parseFloat(this.value);
  if (scale2 < 1) {
    scale2 = 1;
  } else if (scale2 > 100) {
    scale2 = 100;
  }

  // Update the scale value
  scaleValue2.value = scale2.toFixed(1);
});
