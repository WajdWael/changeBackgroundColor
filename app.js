/*===================  START JAVASCRIPT {fourth 4} PROJECT   ===================*/
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "#337af1", "#0add0a"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    // Get Random Number Between 0 - 3 Colors[3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.querySelector('.sc-4').style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length
);
}


// Hellow js

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn1 = document.getElementById('btn');
const color2 = document.querySelector(".color");

//start Adding Event Listener
btn1.addEventListener("click", function(){
    //hex color can't work without #
    let  hexColor = "#";

    //loop in the array
    for (let i = 0; i <6; i++){
        hexColor += hex[getRandomNumber()];
    }

    //change the color and text 
    color2.textContent = hexColor;
    document.body.style.background = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}