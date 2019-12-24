var tiles = document.querySelectorAll(".tiles");
for(var i = 0; i<tiles.length; i++){
    var letter = tiles[i].innerHTML;
    tiles[i].addEventListener("click",playSound);
}

function playSound(e){
    letter = e.target.innerHTML;
    var sound = document.getElementById("audio"+letter);
    sound.play();
}