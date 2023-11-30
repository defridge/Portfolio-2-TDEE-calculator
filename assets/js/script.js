
let age = document.getElementById("age").value;
let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;


function calculateBmr () {

    let bmrM = (10 * weight) + (6.25 * height) - (5 * age) + 100;
    let bmrF = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    if (document.getElementById("male")) {
        document.getElementById("bmr").innerText = bmrM;
    } else if (document.getElementById("female")) {
        document.getElementById("bmr").innerText = bmrF;
    }
}

calculateBmr();