
var userClickedPattern = [];// to store the color selected by the user and the user’s clicks.
var gamePattern = [];// to store the randomn chosen color of the user and the correct sequence.
var buttonColors = ["red", "blue", "green", "yellow"];//created an array
var started = 0;//this is to track if the game has started
var level = 0;//this is to initialize the level of the game
//detect keyPress to start the game
$(document).keypress(function() {
    if (started === 0) {//this checks if the game has started
        $("#level-title").text("Level" + level);//change the h1 text
        nextSquence();
        started = 1;
    }
});
// creating  a new function called nextSequence()
function nextSquence() {
    level++;//to increase the level
    $("#level-title").text("Level" + level);//change the h1 text
    var randomNumber = Math.random();//created a random number  
    randomNumber = randomNumber * 3; //multiplied it by 3 so that it can generate numbers from 1-3
    randomNumber = Math.floor(randomNumber) + 1; //and rounded it up and added 1 so that it will be number 1-3.
    //console.log(randomNumber);

    var randomChosenColour = buttonColors[randomNumber];//select a random colour from the buttonColours array

    gamePattern.push(randomChosenColour);// added the randomChosenColour into the empty array

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);//Used jquery to select the buttons by ID and applied fadeIn and fadeOut animation.
    playSound(randomChosenColour);
 }
 //nextSquence();
//to make the selected color play sound
function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

// using Jquery to detect button click and trigger a handler function.
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");//using jquery to get the id of the clicked button 
    playSound(userChosenColour);//Play the sound based on the clicked color
    animatePress(userChosenColour);// add the animation effect to the clicked color
    userClickedPattern.push(userChosenColour);// the selected color is added to the empty array
    checkAnswer(userClickedPattern.length);//to check users answer

});

// create a function animate press for the animation
function animatePress(currentColour) {
    //using jquery to add the pressed class to the button that gets clicked
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100); 
}

//created function checkAnswer() to verify the user's sequence and determine if they got it right.
function checkAnswer(currentLevel) {
 if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("✅ Success");
    //move to the next level if the user completes the sequence
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSquence();
        }, 1000);
    }
 }   else{
    console.log("❌ Wrong");
    gameOver();
 }
}
function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("level-title").text("Game Over! Press Any Key to Restart");

    resetGame()// to restart the game
}
//to be able to restart the game
function resetGame() {
    level = 0;
    gamePattern = [];
    started = 0;
}