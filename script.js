let actualTemp = 56;
let desiredTemp = 72;

// actualTemp = 80;
// desiredTemp = 72;

if (actualTemp > desiredTemp) {
  console.log("Run AC");
} else if (actualTemp < desiredTemp) {
  console.log("Run Heat");
} else {
  console.log("Standby");
}

let tempCelsius = 25;
let targetUnit = "K";

switch (targetUnit) {
  case "C":
    console.log(tempCelsius + "°C");
    break;
  case "F":
    console.log(tempCelsius * 1.8 + 32 + "°F");
    break;
  case "K":
    console.log(tempCelsius + 237.15 + "K");
    break;
  default:
    console.log("That is an invalid unit");
}
