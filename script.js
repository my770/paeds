// Function to save the weight and perform necessary calculations
document.addEventListener("DOMContentLoaded", function () {
  const weightForm = document.getElementById("weightForm");
  if (weightForm) {
    weightForm.addEventListener("submit", saveWeight);
  } else {
    console.error("Form not found.");
  }
});

function saveWeight(event) {
  event.preventDefault(); // Prevent form submission
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(weight) || weight <= 0) {
    console.error("Invalid weight value");
    return;
  }

  // Perform calculations and update the UI
  document.getElementById("morphineStrength").innerHTML = `${Math.min(
    weight * 1,
    50
  )} mg`;
  document.getElementById("fentanylStrength").innerHTML = `${Math.min(
    weight * 25,
    1000
  )} &micro;g`;
  document.getElementById("midazolamStrength").innerHTML = `${weight * 5} mg`;
  document.getElementById("ketamine2Rate").innerHTML = `${(
    0.15 * weight
  ).toFixed(1)} - ${(1.2 * weight).toFixed(1)} ml/hr`;
  document.getElementById("ketamine10Rate").innerHTML = `${(
    0.03 * weight
  ).toFixed(1)} - ${(0.24 * weight).toFixed(1)} ml/hr`;
  document.getElementById("dex1Rate").innerHTML = `${(weight * 0.2).toFixed(
    1
  )} - ${(weight * 1.4).toFixed(1)} ml/hr`;
  document.getElementById("dex4Rate").innerHTML = `${(weight * 0.05).toFixed(
    1
  )} - ${(weight * 0.35).toFixed(1)} ml/hr`;
  document.getElementById("atracuriumRate").innerHTML = `${(
    weight * 0.03
  ).toFixed(1)} - ${(weight * 0.1).toFixed(1)} ml/hr`;
  document.getElementById("rocuroniumRate").innerHTML = `${(
    weight * 0.03
  ).toFixed(1)} - ${(weight * 0.1).toFixed(1)} ml/hr`;
  document.getElementById("adrenalineP").innerHTML = `${(weight * 0.3).toFixed(
    1
  )} - ${(weight * 3).toFixed(1)} ml/hr`;
  document.getElementById("adrenalineC").innerHTML = `${(weight * 0.3).toFixed(
    1
  )} mg`;
  document.getElementById("noradrenaline").innerHTML = `${(
    weight * 0.3
  ).toFixed(1)} mg`;
  document.getElementById("dopamineP").innerHTML = `${(weight * 0.03).toFixed(
    1
  )} - ${(weight * 0.6).toFixed(1)} ml/hr`;
  document.getElementById("dopamineC").innerHTML = `${(weight * 3).toFixed(
    1
  )} mg`;
  document.getElementById("dobutamine").innerHTML = `${(weight * 3).toFixed(
    1
  )} mg`;
  document.getElementById("vasopressin").innerHTML = `${(weight * 1.5).toFixed(
    1
  )} mg to <b>25 ml</b>`;
  document.getElementById("isoprenaline").innerHTML = `${(
    weight * 0.06
  ).toFixed(1)} - ${(weight * 0.3).toFixed(1)} ml/hr`;
  document.getElementById("milrinone").innerHTML = `${(weight * 0.038).toFixed(
    1
  )} - ${(weight * 0.113).toFixed(1)} ml/hr`;
  document.getElementById("labetalolP").innerHTML = `${(weight * 1).toFixed(
    1
  )} - ${(weight * 3).toFixed(1)} ml/hr`;
  document.getElementById("labetalolC").innerHTML = `${(weight * 0.2).toFixed(
    1
  )} - ${(weight * 0.6).toFixed(1)} ml/hr`;
  document.getElementById("salbutamolP").innerHTML =
    weight >= 20
      ? `6 ml/hr`
      : `${(weight * 0.3).toFixed(1)} - ${Math.min(
          (weight * 1.5).toFixed(1),
          6
        )} ml/hr`;
  document.getElementById("aminophylline").innerHTML = `${(
    weight * 0.5
  ).toFixed(1)} - ${(weight * 0.1).toFixed(1)} ml/hr`;
  document.getElementById("pge2").innerHTML = `${(weight * 0.3).toFixed(
    1
  )} - ${(weight * 1.2).toFixed(1)} ml/hr`;
  document.getElementById("furosemide").innerHTML = `${(weight * 0.02).toFixed(
    1
  )} - ${(weight * 0.4).toFixed(1)} ml/hr`;
}
