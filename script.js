var numOfDrums = document.querySelectorAll(".btn").length;

for(var i=0;i<numOfDrums;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click", function()
    {
        var buttonInnerhtml = this.innerHTML;

        makeSound(buttonInnerhtml);
        animated(buttonInnerhtml);
    });
}

document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    animated(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "a":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;        
        case "s":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sound/snare.mp3");
            tom3.play();
            break;
        case "j":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sound/kick-bass.mp3");
            kick.play();
            break;
        
        default: console.log(key);
    }
}

function animated(currKey)
{
    var activebtn = document.querySelector("." + currKey);
    activebtn.classList.add("pressed");

    setTimeout(function()
    {
        activebtn.classList.remove("pressed");
    },100);

}