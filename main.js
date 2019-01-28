document.getElementById("one").addEventListener("click", function () {
    document.getElementById("one").style.display = "none";
});

document.getElementById("two").addEventListener("mouseover", function () {
    document.getElementById("two").innerHTML = "<h1>Mouseover!</h1>";
});

for (var i = 0; i < 10; i++){
    document.getElementById("three").innerHTML += "Please scroll!<br>";

}

var size = 2;
document.getElementById("three").addEventListener("scroll", function () {
    console.log(size);
    document.getElementById("three").style.fontSize = size + "em";
        size += 0.01;

});



var count = 0;
document.getElementById("four").addEventListener("mousemove", function () {
    var array = ["red" , "blue", "yellow", "green"];
    if(count < 4){
        count++;
    } else {
        count = 0;
    }
    document.getElementById("four").style.background =array[count];

});

document.getElementById("five").addEventListener("mouseout", function () {
    document.getElementById("five").innerHTML = "Come again!";
    var array = ["red" , "blue", "yellow", "green"];
    if(count < 4){
        count++;
    } else {
        count = 0;
    }
    document.getElementById("five").style.background = array[count];
});