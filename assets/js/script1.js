document.querySelector('.submit').addEventListener('click', calcBmr);

function calcBmr() {
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let genderSelect = document.getElementById('gender');
    let gender = genderSelect.options[genderSelect.selectedIndex].value;

    if (gender === 'male') {
        let bmrM = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        document.getElementById('bmr').innerText = bmrM;
    } else if (gender === 'female') {
        let bmrF = (10 * weight) + (6.26 * height) - (5 * age) - 161;
        document.getElementById('bmr').innerText = bmrF;
    } 
};

function calcActivityMultiplier()