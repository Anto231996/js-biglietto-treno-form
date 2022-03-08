let userDistance = document.getElementById("input-km");
let userAge = document.querySelector("#input-age");
let userName = document.getElementById("input-name");

const basePricePerKm = 0.27;

const ticketGeneratorButton = document.getElementById("button-generate");

const outputElement = document.querySelector("#ticket-desk");

ticketGeneratorButton.addEventListener("click", function () {
  console.log(userName.value);

  let ticketPrice = basePricePerKm * userDistance.value;
  console.log(ticketPrice);

  console.log(userAge.value);

  if (userAge.value == "minorenne") {
    ticketPrice = ticketPrice * 0.83;
    console.log("Scontato del 17%");
  } else if (userAge.value == "over65") {
    ticketPrice -= ticketPrice * 0.33;
    console.log("Scontato del 33%");
  } else {
    console.log("Nessuno sconto applicato");
  }
  console.log(ticketPrice);

  if (
    isNaN(parseInt(userDistance.value)) ||
    /[^a-zA-Z]\s/.test(userName.value)
  ) {
    outputElement.classList.add("text-warning");

    outputElement.classList.remove("text-white");

    outputElement.innerHTML = `La distanza inserita o il nome non sono corretti`;
  } else {
    outputElement.classList.remove("text-warning");

    outputElement.classList.add("text-white");

    outputElement.innerHTML = `Il biglietto di ${
      userName.value
    } ha un costo di ${ticketPrice.toFixed(2)}€`;
  }
  document.getElementById("output").classList.remove("d-none");
});

const ticketReset = document.getElementById("button-reset");

ticketReset.addEventListener("click", function () {
  userName.value = "";
  userAge.value = "maggiorenne";
  userDistance.value = "";
  outputElement.innerHTML = "";

  document.getElementById("output").classList.add("d-none");
});
