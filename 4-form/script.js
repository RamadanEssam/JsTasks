function display()
{
    var info = location.search;
    var g = info.split("?")[1];
    var h = g.split("&");

     var info = "your name is : " + h[0].split("=")[1] + "<br> your email is : " 
                 + h[1].split("=")[1].replace("%40","@") + "<br>  your Genger is : " + h[2].split("=")[1] +"<br> your title jop : " 
       + h[3].split("=")[1] + "<br>  your Address : " + h[4].split("=")[1] +"<br> your Mopile number is : "+ h[5].split("=")[1] + "<br>  your password is : " + h[6].split("=")[1]  ;

     document.getElementById("myinfo").innerHTML = info ;
    
}