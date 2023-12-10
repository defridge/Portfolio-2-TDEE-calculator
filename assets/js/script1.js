document.querySelector('.submit').addEventListener('click', calcBmr);
document.querySelector('.submit2').addEventListener('click', calcTdee);
document.querySelector('.submit3').addEventListener('click', calcNewKcals);

function calcBmr() {
    let age = parseInt(document.getElementById('age').value);
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let genderSelect = document.getElementById('gender');
    let gender = genderSelect.options[genderSelect.selectedIndex].value;

    if (gender === 'male') {
        let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        document.getElementById('bmr').innerHTML = bmr;
    } else if (gender === 'female') {
        let bmr = (10 * weight) + (6.26 * height) - (5 * age) - 161;
        document.getElementById('bmr').innerHTML = bmr;
    }
};

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
};

function calcNewKcals() {
    let weightGoals = document.getElementById('goals').value;
    let tdee = parseFloat(document.getElementById('tdee').innerHTML);

    switch (weightGoals) {
        case 'maintenance' :
            document.getElementById('kcals').innerHTML = tdee;
            break;
        case 'mild-weight-loss' :
            document.getElementById('kcals').innerHTML = Math.round(tdee * 0.8);
            break;
        case 'weight-loss' :
            document.getElementById('kcals').innerHTML = Math.round(tdee * 0.7);
            break;
        case 'mild-weight-gain' :
            document.getElementById('kcals').innerHTML = Math.round(tdee * 1.1);
            break;
        case 'weight-gain' :
            document.getElementById('kcals').innerHTML = Math.round(tdee * 1.2);
            break;
    }
};