const inputCheckAYear = document.querySelector('.check-a-year-input');
let findAYear = document.querySelector('.inputs-button');
let yesNoParagraph = document.getElementById('result');

findAYear.addEventListener('click', (event) => {
    event.preventDefault();
    let userInput =  parseInt(inputCheckAYear.value);
    if (isNaN(userInput)) {
        yesNoParagraph.textContent = "Будь ласка, введіть коректний рік!";
        yesNoParagraph.className = "red-paragraph";
        return;
    };
    if (userInput > 2025){
        inputCheckAYear.value= '';
        yesNoParagraph.textContent = 'такого року ще не було)))))';
        yesNoParagraph.className = "grey-paragraph";
    } else if(userInput % 4 ===0){
        inputCheckAYear.value= '';
        yesNoParagraph.textContent = 'Ви народилися у високосний рік!';
        yesNoParagraph.className = "green-paragraph";
    } else{
        checkYearInput.value = "";
        yesNoLeap.textContent = "Ви не народились у високосний рік";
        yesNoLeap.className = "red-paragraph";
    }
});
