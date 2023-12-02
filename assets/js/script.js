document.querySelector('.submit').addEventListener('click', function() {

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
});

document.querySelector('.submit2').addEventListener('click', function() {

    let activityMulti = document.getElementById('activity-multiplier');
    let activityOption = activityMulti.options[activityMulti.selectedIndex].value;

    if (activityOption === 'sedentary') {
        let bmr = document.getElementById('bmr').innerText;
        let sedentary = bmr * 0.2;
        let sedentaryTdee = parseFloat(bmr) + parseFloat(sedentary);
        document.getElementById('tdee').innerText = Math.round(sedentaryTdee);
    } else if (activityOption === 'light-active') {
        let bmr = document.getElementById('bmr').innerText;
        let light = bmr * 0.37;
        let lightTdee = parseFloat(bmr) + parseFloat(light);
        document.getElementById('tdee').innerText = Math.round(lightTdee);
    } else if (activityOption === 'moderate-active') {
        let bmr = document.getElementById('bmr').innerText;
        let moderate = bmr * 0.55;
        let moderateTdee = parseFloat(bmr) + parseFloat(moderate);
        document.getElementById('tdee').innerText = Math.round(moderateTdee);
    } else if (activityOption === 'active') {
        let bmr = document.getElementById('bmr').innerText;
        let active = bmr * 0.72;
        let activeTdee = parseFloat(bmr) + parseFloat(active);
        document.getElementById('tdee').innerText = Math.round(activeTdee);
    } else if (activityOption === 'high-active') {
        let bmr = document.getElementById('bmr').innerText;
        let highActive = bmr * 0.9;
        let highActiveTdee = parseFloat(bmr) + parseFloat(highActive);
        document.getElementById('tdee').innerText = Math.round(highActiveTdee);
    }
});

document.querySelector('.submit3').addEventListener('click', function () {

    let weightGoals = document.getElementById('goals');
    let goals = weightGoals.options[weightGoals.selectedIndex].value;

    if (goals === 'maintenance') {
        let tdee = document.getElementById('tdee').innerText;
        let maintenance = tdee;
        document.getElementById('kcals').innerText = maintenance;
    } else if (goals === 'mild-weight-loss') {
        let tdee = document.getElementById('tdee').innerText;
        let mildWeight = tdee * 0.2;
        let mildWeightKcals = parseFloat(tdee) - parseFloat(mildWeight);
        document.getElementById('kcals').innerText = Math.round(mildWeightKcals);
    } else if (goals === 'weight-loss') {
        let tdee = document.getElementById('tdee').innerText;
        let weightLoss = tdee * 0.3;
        let weightLossKcals = parseFloat(tdee) - parseFloat(weightLoss);
        document.getElementById('kcals').innerText = Math.round(weightLossKcals);
    } else if (goals === 'mild-weight-gain') {
        let tdee = document.getElementById('tdee').innerText;
        let mildWeightGain = tdee * 0.1;
        let mildWeightGainKcals = parseFloat(tdee) + parseFloat(mildWeightGain);
        document.getElementById('kcals').innerText = Math.round(mildWeightGainKcals);
    } else if (goals === 'weight-gain') {
        let tdee = document.getElementById('tdee').innerText;
        let weightGain = tdee * 0.2;
        let weightGainKcals = parseFloat(tdee) + parseFloat(weightGain);
        document.getElementById('kcals').innerText = Math.round(weightGainKcals);
    }
})
