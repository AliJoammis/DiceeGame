var player1 = prompt("Enter player1 name");
var str1= document.getElementById("p1").innerHTML;
var txt = str1.replace("Player 1",player1);
document.getElementById("p1").innerHTML = txt;

var player2 = prompt("Enter player2 name");
var str2= document.getElementById("p2").innerHTML;
var txt = str2.replace("Player 2",player2);
document.getElementById("p2").innerHTML = txt;

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImage);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩!";
}
else{
    document.querySelector("h1").innerHTML = "Draw! please refresh";
}
