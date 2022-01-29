

var imageArray = new Array(3);
var currentImage = 1;

for (i = 0; i < 3; i++) {
    imageArray[i] = "marble" + eval((i + 1)) + ".jpg"
}
var i = 0;

a = 0;
c = 0;
b = 0;

function lightingMarbles() {
    for (b = 0; b < a; b++)
     {
        document.images[b].src = imageArray[0]; 
    }
    if (a == 5)  a = 0;

        document.images[a].src = imageArray[2]

    a++;
    
}


