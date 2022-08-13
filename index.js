let btn = document.getElementsByClassName("drum");
let body = document.body;

for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", function (e) {
        checktext(e.target.textContent)
        animation(e.target.textContent);
        
    })
    body.addEventListener("keypress", function(event) {
        checktext(event.key);
        animation(event.key);
    })
}
function animation(currentKey) {
    let activeButton = document.querySelector("."+ currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 1000)
}

function checktext(text) {
    if (text == 'w') {
        var audio = new Audio('./sounds/9mm-pistol-shoot-short-reverb-7152.mp3');
        audio.play();

    }
    if (text == 'a') {
        var audio = new Audio('./sounds/9mm-pistol-shot-6349.mp3');
        audio.play();
    }
    if (text == 's') {
        var audio = new Audio('./sounds/m1-garand-rifle-80192.mp3');
        audio.play();
    }
    if (text == 'd') {
        var audio = new Audio('./sounds/pistol-cock-6014.mp3');
        audio.play();
    }
    if (text == 'j') {
        var audio = new Audio('./sounds/rifle-shot-m1-garand-80260.mp3');
        audio.play();
    }
    if (text == 'k') {
        var audio = new Audio('./sounds/sniper-rifle-5989.mp3');
        audio.play();
    }
    if (text == 'l') {
        var audio = new Audio('./sounds/m1-garand-rifle-80192.mp3');
        audio.play();

    }
}



