export function filterValidation(siblingInput_id, id, min, max, value) {
  const validMin = min;
  const validMax = max;
  var minElement;
  var maxElement;
  var minValue;
  var maxValue;

  /* recognize ids to handle pair of html inputs */
  if (id.includes("-min-") && siblingInput_id.includes("-max-")) {
    minElement = document.getElementById(id);
    maxElement = document.getElementById(siblingInput_id);
  } else {
    minElement = document.getElementById(siblingInput_id);
    maxElement = document.getElementById(id);
  }

  /* check if input is not empty and store input values */
  if (minElement.value !== "") {
    minValue = parseInt(minElement.value);
  } else {
    minElement.value = validMin;
    return;
  }

  if (maxElement.value !== "") {
    maxValue = parseInt(maxElement.value);
  } else {
    maxElement.value = validMax;
    return;
  }

  /* check input range */
  if (minValue < validMin) {
    minElement.value = validMin;
  }
  if (minValue > validMax) {
    minElement.value = validMax;
  }

  if (maxValue < validMin) {
    maxElement.value = validMin;
  }
  if (maxValue > validMax) {
    maxElement.value = validMax;
  }
}