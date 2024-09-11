// console.log("jai shree ram");
let gameSeq = [];
let userseq = [];
let btns = ["red", "green", "yellow", "purple"];
let started = false;
let level = 0;
let high = 0;
let h3 = document.querySelector("h2");
let highest = document.querySelector("h3");
let start = document.querySelector(".start");
document.addEventListener("keypress", function () {
    if (started == false) {

        started = true;
        levelUp();
    }

});

function levelUp() {
    userseq = [];
    level++;

    h3.innerText = `Level ${level}`;
    //random button choose
    let randInx = Math.floor(Math.random() * 3);
    let randColor = btns[randInx];
    let randomBtns = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randomBtns);
    highest.innerText = ` Highest score ${high}`;


}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 100);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 100);

}
function levelCheck(idx) {

    if (gameSeq[idx] == userseq[idx]) {
        if (gameSeq.length == userseq.length) {
            setTimeout(levelUp, 500);
            high++;
        }
    } else {
        h3.innerHTML = `Game over! Your score was ${level - 1} <br/> Press any key to start`;






        reset();
    }
}
function btnPressed() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");

    userseq.push(userColor);

    levelCheck(userseq.length - 1);
}
let allBtns = document.querySelectorAll(".button");
for (bns of allBtns) {
    bns.addEventListener("click", btnPressed);
}
function reset() {
    started = false;
    level = 0;
    userseq = [];
    gameSeq = [];


}
