const wrongStatus = document.getElementById("wrongNotify"); 
const successStatus = document.getElementById("successNotify");
const generateButton = document.getElementById("generateBtn");
const randomInputField = document.getElementById("randomNum");
const numberButtons = document.querySelectorAll('[data-number]');
const userInputField = document.getElementById("userInputValue");
const submitButton = document.getElementById("submitBtn");
const clearAllUserInput = document.getElementById("allClear");
const backspaceButton = document.getElementById("backspaceBtn");
// const btnClickCount = document.getElementById("btnClickCount"); // Span value get for click count
var submitCount = 0;


//hide notify
function hideStatus() {
    wrongNotify.style.display = 'none';
    successNotify.style.display = 'none';
    randomInputField.style.backgroundColor = '#3D4153';
}
window.onload = hideStatus;


//generateBtn
generateBtn.addEventListener('click', function () {
    generateRandomNumber(); 
});
   
function generateRandomNumber() { 
    var random = Math.floor(Math.random() * 9999);
    if (random.toString().length === 4) {
        randomInputField.value = random;
        changeInputFieldColorBgColorTextAline(randomInputField);
    }
    else {
        generateRandomNumber();
    }
}


//all number btn
for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        userInputField.value = userInputField.value + this.id;
        changeInputFieldColorBgColorTextAline(userInputField);
    });
}

function changeInputFieldColorBgColorTextAline(changesID) {
    changesID.style.color = 'white';
    changesID.style.backgroundColor = '#3D4153';
    changesID.style.textAlign = 'center';
}

//submitBtn
submitBtn.addEventListener('click', function () {
    if (parseInt(randomInputField.value) == parseInt(userInputField.value)) {
        successStatus.style.display = 'inline';
        wrongStatus.style.display = 'none';
        submitCount = 0;
        btnClickCount.innerText = 3;
    } else {
        submitCount++;
        wrongStatus.style.display = 'inline';
        successStatus.style.display = 'none';
    }

    checkTotalSubmit(submitCount);
});

allClear.addEventListener('click', function () {
    userInputField.value = "";
});

backspaceBtn.addEventListener('click', function () {
    if (userInputField.value.length > 0) {
        userInputField.value = userInputField.value.slice(0, -1);
    }
});
