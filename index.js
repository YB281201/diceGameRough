var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImagesource = "images/dice"+ randomNumber1 +".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImagesource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImagesource2 = "images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="player 1 WINS!!";
}

else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="player 2 WINS!!";
}

else{
    document.querySelectorAll("h1")[0].innerHTML="It's a tie!!";
}