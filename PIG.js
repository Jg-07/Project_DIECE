//Role the dice

var x = document.querySelector(".DRoll");

var k = 0;
x.addEventListener("click", function () {
    let z2 = document.getElementById("score2");
    let z1 = document.getElementById("score1");
    let t1 = document.getElementById("Frame1");
    let t2 = document.getElementById("Frame2");
    class player {
        constructor(curScore) {
            this.curScore = curScore;
            //  let totScore = 0;
            // totScore += this.curScore;
        }
    }
    var y = document.querySelector(".Dice");
    var i = Math.floor(Math.random() * Math.floor(6)) + 1;
    //console.log(i);
    var j = i.toString();
    y.src = "Frame " + j + ".png";
    for (let p = 1; p <= 2; p++) {
        if (p == 1) {
            if (k != 0) {
                t2.classList.remove("colChanger");
            }
            t1.classList.add("colChanger");
            let player1 = new player(i);
            z1.innerText = player1.curScore;
        }
        else if (p == 2) {
            t1.classList.remove("colChanger");
            t2.classList.add("colChanger");
            let player2 = new player(i);
            z2.innerText = player2.curScore;
        }
        k++;
    }
});
