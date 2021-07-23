score = 0;
cross = true;
gameoverAudio = new Audio('gameover.mp3');
gameAudio = new Audio('music.mp3');

setTimeout(() => {
    gameAudio.play();
}, 1000);

document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(
            window.getComputedStyle(dino, null).getPropertyValue("left")
        );
        dino.style.left = dinoX + 120 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(
            window.getComputedStyle(dino, null).getPropertyValue("left")
        );
        dino.style.left = dinoX - 120 + "px";
    }
    if (e.keyCode == 13) {
        location.reload();
    }
};

setInterval(() => {
    dino = document.querySelector(".dino");
    gameover = document.querySelector(".gameover");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(
        window.getComputedStyle(obstacle, null).getPropertyValue("left")
    );
    oy = parseInt(
        window.getComputedStyle(obstacle, null).getPropertyValue("top")
    );

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility = "visible";
        obstacle.classList.remove("animateObstacle");
        gameAudio.pause();
        gameoverAudio.play();

        setTimeout(() => {
            gameoverAudio.pause();
        }, 1000);
    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }


}, 10);

function updatescore(score) {
    scoreCont.innerHTML = `Your Score : ${score}`;
}
