
let calculation='';

function evaluateCalculation() {
    try {
        calculation = eval(calculation); // Evaluate the calculation
        document.getElementById("display").innerText = calculation; // Update the display
    } catch (error) {
        document.getElementById("display").innerText = "Error"; // Handle invalid input
        console.error("Invalid Calculation"); // Log the error
    }
} 

function clearCalculation() {
    calculation='';
    document.getElementById("display").innerText = "0";
    console.log(calculation); // For debugging
}


function displayValue(){
    calculation = calculation; // Evaluate the calculation
    document.getElementById("display").innerText = calculation;
}