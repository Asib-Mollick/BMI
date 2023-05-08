const calculateBMI = () => {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  }
  
  document.getElementById("calculateBtn").addEventListener("click", () => {
    const bmiResult = calculateBMI();
    document.getElementById("result").innerHTML = `Your BMI is: ${bmiResult}`;
  });
  