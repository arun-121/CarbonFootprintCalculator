// Constants for carbon emissions
const CO2_PER_KM_CAR = 0.142; // kg CO2 per km driven by car
const CO2_PER_KM_BUS = 0.089; // kg CO2 per km ridden on bus
const CO2_PER_KM_TRAIN = 0.03; // kg CO2 per km ridden on train
const CO2_PER_KG_FLIGHT = 3.15; // kg CO2 per kg of air travel
const CO2_PER_KWH_ELEC = 0.527; // kg CO2 per kWh of electricity

// Get form elements
const numPeopleInput = document.getElementById("numPeople");
const numCarsInput = document.getElementById("numCars");
const distanceCarInput = document.getElementById("distanceCar");
const numBusesInput = document.getElementById("numBuses");
const distanceBusInput = document.getElementById("distanceBus");
const numTrainsInput = document.getElementById("numTrains");
const distanceTrainInput = document.getElementById("distanceTrain");
const numFlightsInput = document.getElementById("numFlights");
const elecConsumptionInput = document.getElementById("elecConsumption");
const calculateButton = document.getElementById("calculateButton");
const resultDiv = document.getElementById("result");

// Calculate carbon footprint when Calculate button is clicked
calculateButton.addEventListener("click", function () {
  // Retrieve user inputs
  let numPeople = parseFloat(numPeopleInput.value);
  let numCars = parseFloat(numCarsInput.value);
  let distanceCar = parseFloat(distanceCarInput.value);
  let numBuses = parseFloat(numBusesInput.value);
  let distanceBus = parseFloat(distanceBusInput.value);
  let numTrains = parseFloat(numTrainsInput.value);
  let distanceTrain = parseFloat(distanceTrainInput.value);
  let numFlights = parseFloat(numFlightsInput.value);
  let elecConsumption = parseFloat(elecConsumptionInput.value);

  // Calculate carbon footprint from transportation
  let totalCarEmissions = numCars * CO2_PER_KM_CAR * distanceCar;
  let totalBusEmissions = numBuses * CO2_PER_KM_BUS * distanceBus;
  let totalTrainEmissions = numTrains * CO2_PER_KM_TRAIN * distanceTrain;
  let totalFlightEmissions = numFlights * CO2_PER_KG_FLIGHT * 1000;

  let totalTransportEmissions = totalCarEmissions + totalBusEmissions + totalTrainEmissions + totalFlightEmissions;

  // Calculate carbon footprint from electricity consumption
  let totalElectricityEmissions = elecConsumption * CO2_PER_KWH_ELEC;

  // Calculate total carbon footprint
  let totalCarbonFootprint = totalTransportEmissions + totalElectricityEmissions;

  // Calculate carbon footprint per person
  let carbonFootprintPerPerson = totalCarbonFootprint / numPeople;

  // Display results to user
  resultDiv.innerHTML = `Your household's carbon footprint is ${totalCarbonFootprint.toFixed(2)}`;
});
