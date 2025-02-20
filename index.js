var randomNumber1 = Math.floor(Math.random() + 1); //created a random number and rounded it up
randomNumber1 = randomNumber1 * 6;// multiplied it by 6 so that it can generate numbers form 0-6
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");//selects the img element with the class img1 and sets src to the path of the randomly selected dice image.
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber1 + ".png");