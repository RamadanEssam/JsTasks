var win;

var x = 0,
    y = 0,
    incrementedX = 10,
    incrementedY = 10,
    windowWidth = 100,
    windowHeight = 100;

var interval;

function openFlyingWindow() {
    win = open("../HTMLs/flyingWindow.html", "", "width=100,height=100");
    // Initial Position on screen at  0 , 0
    win.moveTo(x, y);
    // Interval to make window move diagonally each second
    interval = setInterval(function() {
        if (((x + incrementedX) > (screen.availWidth - windowWidth)) || ((x + incrementedX) < 0)) {
            incrementedX = -incrementedX;
            incrementedY = -incrementedY;
        }
        if (((y + incrementedY) > (screen.availHeight - windowHeight)) || ((y + incrementedY) < 0)) {
            incrementedX = -incrementedX;
            incrementedY = -incrementedY;
        }
        x += incrementedX;
        y += incrementedY;

        // Move to new position
        win.moveTo(x, y);
    }, 50);
}


function stopFlyingWindow() {
    clearInterval(interval);
    x = 0;
    y = 0;
    win.focus();
    setTimeout(function() { win.close(); }, 2000);
}