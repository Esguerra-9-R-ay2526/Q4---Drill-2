// Toggle instructions
function toggleInstructions() {
    let instructions = document.getElementById("instructions");

    if (instructions.style.display === "none") {
        instructions.style.display = "block";
    } else {
        instructions.style.display = "none";
    }
}

// Heat index checker
function checkHeatIndex() {

    // Get values
    let temp = parseFloat(document.getElementById("temp").value);
    let humidity = parseFloat(document.getElementById("humidity").value);

    // Compute heat index
    let heatIndex = temp + (0.33 * humidity) - 4;

    let status = "";

    // Determine status
    if (heatIndex <= 27) {
        status = "Comfortable / Cool";
    } else if (heatIndex <= 32) {
        status = "Warm";
    } else if (heatIndex <= 37) {
        status = "Hot";
    } else if (heatIndex <= 41) {
        status = "Very Hot / Caution";
    } else {
        status = "Extreme Heat / Danger";
    }

    // Display output
    document.getElementById("result").innerHTML =
        "Heat Index: " + heatIndex.toFixed(2) + " °C";

    document.getElementById("status").innerHTML =
        "Status: " + status;
}
