var randomNumber1 = Math.floor(Math.random() + 1); //created a random number and rounded it up for the first dice
randomNumber1 = randomNumber1 * 6;// multiplied it by 6 so that it can generate numbers form 1-6

var randomNumber2 = Math.random();//created a random number  for the second dice
randomNumber2 = randomNumber2* 6; //multiplied it by 6 so that it can generate numbers from 1-6
randomNumber2 = Math.floor(randomNumber2) + 1; //and rounded it up and added 1 so that it will be number 1-6. Another way of achieving one above

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");//selects the img element with the class img1 and sets src to the path of the randomly selected dice image.
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2+ ".png");

//change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a 
// draw depending on the dice values of player 1 (left) and player 2 (right).
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "It's a draw!";
}