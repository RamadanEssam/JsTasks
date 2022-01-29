var x = [];
var s = 0;
document.getElementById("score").innerHTML = s;

function chang(t) {

    t.firstChild.style.opacity = "1";
    if (x.length == 0) {
        x[0] = t;
    } else if (x.length == 1) {
        x[1] = t;
    }

    if (x.length == 2) {
        setTimeout(check, 700);
    }
}

function check() {
    if (x[0].firstChild.src == x[1].firstChild.src) {
        x[0].firstChild.style.opacity = "1";
        x[1].firstChild.style.opacity = "1";
        s = document.getElementById("score").innerHTML = (s + 10);
        if (s == 60) {
            document.getElementById("score").innerHTML = "you are win ";
            document.getElementById("d").style.display ="none";
            document.getElementById("l").style.display ="none";
            document.getElementById("reload").style.display ="initial" ;
        }
        x = [];
    } else {
        x[0].firstChild.style.opacity = "0";
        x[1].firstChild.style.opacity = "0";
        x = [];
    }
}
function display()
{
    location.reload();
}