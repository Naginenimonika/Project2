document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Convert height to meters
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display BMI result
    document.getElementById('bmi-value').textContent = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById('bmi-category').textContent = `Category: ${category}`;
    document.getElementById('result').style.display = 'block';
});
