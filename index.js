var randomNumber =Math.floor(Math.random() * 6) +1;

var randomImage = "dice"+randomNumber+".png";

var imageSource= "images/"+randomImage; // images/dice1.png to dice6.png

document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber2 =Math.floor(Math.random() * 6)+1;

var imageSource2 = "images/dice"+randomNumber2+".png"

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}