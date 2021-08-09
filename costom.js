
let width = document.querySelector('.width');
let height = document.querySelector('.height');
// let pinter = document.querySelector('.button');
let canvas = document.querySelector('#canvas');
let inputText = document.querySelector('#inputText');
let submit = document.querySelector('.submit');

submit.addEventListener('click', function(event){
    event.preventDefault();
    
    if(inputText.value.length > 0){
        new QRCode(document.getElementById("canvas"), {
            text: `${inputText.value}`,
            type: 'image/jpeg',
            width: `${width.value}`,
            height: `${height.value}`,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }else{
        alert("Text Box Empty! Please Try again...")
    }

    inputText.value = "";
  
})




