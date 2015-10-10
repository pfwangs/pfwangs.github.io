$(document).ready(function(){
blinkFont();
});

function blinkFont()
{

document.getElementById("blink").style.color="blue"
document.getElementById("blink").style.background="Chartreuse"

setTimeout("setblinkFont()",50)
}

function setblinkFont()
{

document.getElementById("blink").style.color="red"
document.getElementById("blink").style.background="yellow"
setTimeout("blinkFont()",50)
}


