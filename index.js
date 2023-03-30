//change the images/dice6.png" part
var randomNum1 = Math.random();
randomNum1 = Math.floor(randomNum1 * 6)+1;

var newSource = "images/dice" +  randomNum1 + ".png";

//change the src part for dice1
document.querySelector(".img1").setAttribute("src", newSource);

//do the same thing for dice2
var randomNum2 = Math.random();
randomNum2 = Math.floor(randomNum2 * 6)+1;

var newSource2 = "images/dice" +  randomNum2 + ".png";

//change the src part for dice2
document.querySelector(".img2").setAttribute("src", newSource2);

if(randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML = ("Player1 wins!");
}

else if(randomNum2 > randomNum1)
{
    document.querySelector("h1").innerHTML = ("Player2 wins!");
}

else
{
    document.querySelector("h1").innerHTML = ("Draw!");
}

