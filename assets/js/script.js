document.querySelector('.submit').addEventListener('click', function() {

    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let genderSelect = document.getElementById('gender');
    let gender = genderSelect.options[genderSelect.selectedIndex].value;

    if (gender === 'male') {
        let bmrM = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        console.log(bmrM);
        document.getElementById('bmr').innerText = bmrM;
    } else if (gender === 'female') {
        let bmrF = (10 * weight) + (6.26 * height) - (5 * age) - 161;
        console.log(bmrF);
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
        console.log(sedentaryTdee);
    } else if (activityOption === 'light-active') {
        let bmr = document.getElementById('bmr').innerText;
        let light = bmr * 0.37;
        let lightTdee = parseFloat(bmr) + parseFloat(light);
        document.getElementById('tdee').innerText = Math.round(lightTdee);
        console.log(lightTdee);
    } else if (activityOption === 'moderate-active') {
        let bmr = document.getElementById('bmr').innerText;
        let moderate = bmr * 0.55;
        let moderateTdee = parseFloat(bmr) + parseFloat(moderate);
        document.getElementById('tdee').innerText = Math.round(moderateTdee);
        console.log(moderateTdee);
    } else if (activityOption === 'active') {
        let bmr = document.getElementById('bmr').innerText;
        let active = bmr * 0.72;
        let activeTdee = parseFloat(bmr) + parseFloat(active);
        document.getElementById('tdee').innerText = Math.round(activeTdee);
        console.log(activeTdee);
    } else if (activityOption === 'high-active') {
        let bmr = document.getElementById('bmr').innerText;
        let highActive = bmr * 0.9;
        let highActiveTdee = parseFloat(bmr) + parseFloat(highActive);
        document.getElementById('tdee').innerText = Math.round(highActiveTdee);
        console.log(highActiveTdee);
    }
});
