function openNewpage()
{
 var win =   window.open('child.html',"","width = 500px ,height = 500px ");
}
function pagescrol()
{
    var t = setInterval(()=>{
        if(window.scrollY <=1690)
        {
            window.scrollBy(100,100);
        }
        else
        {
            window.close();

        }
    },1000)
}