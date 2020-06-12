document.querySelector(".button").addEventListener("click", handleClick);

function handleClick () {
    var audio = new Audio("sounds/squaky.mp3");
    audio.play();
}
