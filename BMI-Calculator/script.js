function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const result = document.getElementById("result");
  
    if (isNaN(height) || isNaN(weight)) {
      result.textContent = "Please enter valid numbers.";
      return;
    }
  
    let bmi;
  
    if (unit === "metric") {
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    } else {
      bmi = (weight / (height * height)) * 703;
    }
  
    bmi = bmi.toFixed(2);

    let interpretation = "";
    if (bmi < 18.5) {
      interpretation = "underweight";
    } else if (bmi < 25) {
      interpretation = "a healthy weight";
    } else if (bmi < 30) {
      interpretation = "overweight";
    } else {
      interpretation = "obese";
    }
  
    result.textContent = `As a ${gender}, your BMI is ${bmi}, which is considered ${interpretation}.`;
  }
  