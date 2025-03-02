//Form
const userForm = document.getElementById("user-form");
//Campi compilabili
const userName = document.getElementById("name");
const userKm = document.getElementById("km");
const userAge = document.getElementById("age");
//Risultati
const resultName = document.getElementById("guest");
const resultOffer = document.getElementById("offer");
const resultCost = document.getElementById("cost");

userForm.addEventListener("submit", trainTicket)

function trainTicket(event) {
    event.preventDefault();

    document.getElementById("ticket").classList.remove("d-none");

    const name = userName.value;
    const km = userKm.value;
    const age = userAge.value;

    const fee = 0.21;
    let discount = 0;
    let resultOfferValue = "Standard";
    let cost = km*fee;

    if (age === "minorenne") {
        discount = (20*cost)/100;
        resultOfferValue = "Sconto Minorenni";
    } else if (age === "anziano") {
        discount = (40*cost)/100;
        resultOfferValue = "Sconto Anziani";
    }

    resultName.innerText = name;
    resultOffer.innerText = resultOfferValue;
    resultCost.innerText = (cost - discount).toFixed(2) + "€";
    

}






