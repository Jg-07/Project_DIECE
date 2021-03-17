//Role the dice

var x = document.querySelector(".DRoll");
var u = document.querySelector(".DHold");
var p = 1;
var P1 = document.querySelector(".ScoreP1");
var P2 = document.querySelector(".ScoreP2");
var curScore1 = 0;
var curScore2 = 0;
var totScore1 = 0;
var totScore2 = 0;
var z1 = document.getElementById("score1");
var z2 = document.getElementById("score2");
function Holder() {
    let t1 = document.getElementById("Frame1");
    let t2 = document.getElementById("Frame2");
    let h1 = document.getElementById("head1");
    let h2 = document.getElementById("head2");
    if (p == 1) {
        t2.classList.remove("colChanger");
        t1.classList.add("colChanger");
        h2.classList.remove("hidden");
        h1.classList.add("hidden");
        z1.innerText = 0;
        totScore1 += curScore1;
        P1.innerHTML = totScore1;
        curScore1 = 0;
        p++;
    }
    else if (p == 2) {
        t1.classList.remove("colChanger");
        t2.classList.add("colChanger");
        h1.classList.remove("hidden");
        h2.classList.add("hidden");
        z2.innerText = 0;
        totScore2 += curScore2;
        P2.innerHTML = totScore2;
        curScore2 = 0;
        p--;
    }
}
x.addEventListener("click", function () {
    var y = document.querySelector(".Dice");
    var i = Math.floor(Math.random() * Math.floor(6)) + 1;
    //console.log(i);
    var j = i.toString();
    y.src = "Frame " + j + ".png";
    if (p == 1 && i != 1) {
        curScore1 += i;
        z1.innerText = curScore1;
    }
    else if (p == 2 && i != 1) {
        curScore2 += i;
        z2.innerText = curScore2;
    }
    else {
        curScore1 = 0;
        curScore2 = 0;
        Holder();
    }
});
u.addEventListener("click", Holder);