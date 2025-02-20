//DETECTING BUTTON PRESS
// for the whole button to give the alert when clicked
/*
function handleClick() {
    alert("I got clicked");
}
document.querySelector(".set").addEventListener("click", handleClick);
*/
//OR
var numberofDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrumButtons; i++) {
    //grabs all the element that has the class drum. A listener added to listen for a click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML; // to hold the value of the buttons.
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        //this.style.color = "purple";
        //"this" is not a variable. It is a keyword. You cannot change the value of this.
       
        
    })
    
}
// DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    //this.classList.add('purple');
    
})

function makeSound(key) {
    // switch (what you want to switch on, in our case we are switching on the letters inside the button in the innerHTML)
    switch (key) {
        case "w":
            var audioElement1 = new Audio("sounds/tom-1.mp3");
            audioElement1.play();
            break;
        case "a":
            var audioElement2 = new Audio("sounds/tom-2.mp3");
            audioElement2.play();
            break;
        case "s":
            var audioElement3 = new Audio("sounds/tom-3.mp3");
            audioElement3.play();
            break;
        case "d":
            var audioElement4 = new Audio("sounds/tom-4.mp3");
            audioElement4.play();
            break;
        case "j":
            var audioElement5 = new Audio("sounds/crash.mp3");
            audioElement5.play();
            break;
        case "k":
            var audioElement6 = new Audio("sounds/kick-bass.mp3");
            audioElement6.play();
            break;
        case "l":
            var audioElement7 = new Audio("sounds/crash.mp3");
            audioElement7.play();
            break;


    default:
        console.log(buttonInnerHTML);
  }
    
}
/**
 * function makeSound was created so that it takes character/letter so that it checks it against the switch statement in order to play the correct 
 * sound when the letter is pressed on the keyboard, the call insid e the 2 event listeners
 */
//To add animation, making the button to flash when pressed
function buttonAnimation(currentKey) {
    //get the class that has the current key
    var activeButton = document.querySelector("." + currentKey);
    //add the pressed class styled in the CSS file to the active button
    activeButton.classList.add("pressed");
    //to give the animation effect so that it goes back to it's original state after a second
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
