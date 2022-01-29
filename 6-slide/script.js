var arrimg = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
var imgsrc = document.getElementById("myimg").src = arrimg[0];

function nextimg() {
    for (i = 0; i < arrimg.length; i++) {
        if (imgsrc == arrimg[i] && (i + 1) <= arrimg.length) {
            i += 1;
            if (i <= 5) imgsrc = arrimg[i];
            document.getElementById("myimg").src = imgsrc;
        }
    }
}


function next2() {
    if (imgsrc == arrimg[5]) { 
        imgsrc= document.getElementById("myimg").src = arrimg[0]; 
    }
     else {
        nextimg();
    }
}
var intervel;

function slidimg() {
    intervel = window.setInterval(next2, 500);
}

function stopslid() {
    clearInterval(intervel);
}

function privimg() {
    for (i = arrimg.length; i >= 0; i--) {
        if (imgsrc == arrimg[i] && (i - 1) >= 0) {
            i -= 1;
            if (i >= 0) imgsrc = arrimg[i];
            document.getElementById("myimg").src = imgsrc;
        }
    }
}