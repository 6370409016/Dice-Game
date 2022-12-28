var randomNumber1= Math.floor(Math.random()*6)+1; // create a random number between  1 - 6
var randomNumber2= Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png"); // change the image name with random number
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

function diceRefresh(){
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩🚩Player 1 win.<br> Refresh Again.";
}else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw! <br> Refresh Again.";
}else{
  document.querySelector("h1").innerHTML="Player 2 win 🚩🚩.<br> Refresh Again."
}
}

diceRefresh();
