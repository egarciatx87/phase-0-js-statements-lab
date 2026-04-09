const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Step 1: Check temperature for watering
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Step 2: Check time of day for lights
// if (timeOfDay === "morning") {
//     console.log("Lights Off");
// } else {
//     console.log("Lights On")
// }
if (timeOfDay === "morning") {
  console.log("Lights off");
}

// Step 3: Increment soilMoisture until it reaches 40
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}