// Event listeners that will run functions when a button is clicked
document.getElementsByClassName('submit')[0].addEventListener('click', calcBmr);
document.getElementsByClassName('submit2')[0].addEventListener('click', calcTdee);
document.getElementsByClassName('submit3')[0].addEventListener('click', calcNewKcals);

// Function for calculating BMR based on input values
function calcBmr() {
    let age = parseInt(document.getElementById('age').value);
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let genderSelect = document.getElementById('gender');
    let gender = genderSelect.options[genderSelect.selectedIndex].value;

    // Will throw alert if any input fields are emply
    if (!age || !height || !weight || !gender) {
        alert('Please fill in all required fields.');
        return;
    }

    if (gender === 'male') {
        let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        document.getElementById('bmr').innerHTML = bmr;
    } else if (gender === 'female') {
        let bmr = (10 * weight) + (6.26 * height) - (5 * age) - 161;
        document.getElementById('bmr').innerHTML = bmr;
    }
}

// Function to calculate TDEE 
function calcTdee() {
    let activityMulti = document.getElementById('activity-multiplier');
    let activityOption = activityMulti.options[activityMulti.selectedIndex].value;
    let bmr = parseInt(document.getElementById('bmr').innerHTML);

    let activityMultiplier;
    if (activityOption === 'sedentary') {
        activityMultiplier = 0.2;
    } else if (activityOption === 'light-active') {
        activityMultiplier = 0.37;
    } else if (activityOption === 'moderate-active') {
        activityMultiplier = 0.55;
    } else if (activityOption === 'active') {
        activityMultiplier = 0.72;
    } else if (activityOption === 'high-active') {
        activityMultiplier = 0.9;
    }

    let tdee = bmr * activityMultiplier;
    let newTdee = bmr + tdee;
    document.getElementById('tdee').innerHTML = Math.round(newTdee);
}

// Function to calculate new kcals dependent on goals
function calcNewKcals() {
    let weightGoals = document.getElementById('goals').value;
    let tdee = parseFloat(document.getElementById('tdee').innerHTML);

    switch (weightGoals) {
        case 'maintenance':
            document.getElementById('kcals').innerHTML = tdee;
            break;
        case 'mild-weight-loss':
            document.getElementById('kcals').innerHTML = Math.round(tdee * 0.8);
            break;
        case 'weight-loss':
            document.getElementById('kcals').innerHTML = Math.round(tdee * 0.7);
            break;
        case 'mild-weight-gain':
            document.getElementById('kcals').innerHTML = Math.round(tdee * 1.1);
            break;
        case 'weight-gain':
            document.getElementById('kcals').innerHTML = Math.round(tdee * 1.2);
            break;
    }
}

// Code to display modal box
let macroModal = document.getElementsByClassName('submit4')[0];
let macroBtn = document.getElementsByClassName('submit3')[0];
macroBtn.onclick = function () {
    macroModal.style.display = 'inline';
};

let modal = document.getElementById('macros');
let btn = document.getElementsByClassName('submit4')[0];
let span = document.getElementsByClassName('close')[0];
let macroContent = document.getElementsByClassName('macro-wording')[0];

// Function to calculate macros and add content to modal box
btn.onclick = function () {
    modal.style.display = 'block';
    let newKcals = parseInt(document.getElementById('kcals').innerHTML);
    let weight = parseInt(document.getElementById('weight').value);
    let protein = weight * 2;
    let fat = weight * 0.9;
    let proteinKcal = protein * 4;
    let fatKcal = fat * 9;
    let carbKcal = newKcals - (proteinKcal + fatKcal);
    let carbs = carbKcal / 4;
    macroContent.innerHTML = `
    <h3>Macro Split</h3>
    <p>Based on the information you have already entered, here is an example split for your Carbs, Fats, and Protein macronutrients that will fit into your new daily calorie intake.</p>
    <ul>
        <li>Protein: ${Math.round(protein)}g</li>
        <li>Fats: ${Math.round(fat)}g</li>
        <li>Carbs ${Math.round(carbs)}g:</li>
    </ul>`;

};

// Code to remove modal box when clicking on the X or anywhere on the page
span.onclick = function () {
    modal.style.display = 'none';
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Grabs buttons with Help class and loops through them
let buttons = document.getElementsByClassName('help');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        showHide('hidden-box' + (i + 1));
    });
}

// Shows div when button is clicked
function showHide(targetId) {
    let hiddenDiv = document.getElementById(targetId);
    if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
}