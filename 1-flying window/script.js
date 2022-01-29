var win1;
var c;
function OpenWin() {
  //window.open('url','Name', 'Properties');

  win1 = window.open("", "_Blank", "width=300,height=150,screenX=0,screenY=0");
  win1.document.write(" <h1> child Window page   </h1> ");
  c= win1.setInterval(movewindow, 400);

}

function movewindow() {
  win1.moveBy(20, 20);
  win1.focus();
}
function close(){
  win1.clearInterval(c)
  
}