var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomImage = "./images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "./images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win !!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 win !!";
}
else{
    document.querySelector("h1").innerHTML="Draw !!";
}
