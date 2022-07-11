var i = 0;
var txt = 'Hi !! Welcome to My Website';
var speed = 100;

function typeWriter(txt) {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
while (true) {
    setTimeout(typeWriter, 2000)
}