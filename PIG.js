//Role the dice

var x = document.querySelector(".DRoll");

x.addEventListener("click", function () {
    var y = document.querySelector(".Dice");
    var i = Math.floor(Math.random() * Math.floor(6)) + 1;
    console.log(i);
    var j = i.toString();
    y.src =  "Frame"+j+".png";
});
