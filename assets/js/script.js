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

    /*if (document.getElementById('male')) {
        let bmrM = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        console.log(bmrM);
        document.getElementById('bmr').innerText = bmrM;
    } else if (document.getElementById('female')) {
        let bmrF = (10 * weight) + (6.26 * height) - (5 * age) - 161;
        console.log(bmrF);
        document.getElementById('bmr').innerText = bmrF;
    }*/
    
});

/*let bmrF = (10 * weight) + (6.25 * height) - (5 * age) - 161;

console.log(bmrM);
console.log(bmrF); */