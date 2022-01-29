

function Move()
{
    document.getElementById("nav").style.listStyle = "circle" ;
    document.getElementById('header').style.textAlign = "right";
    var f = document.getElementById('header');
    var ne = f.cloneNode(true);
    document.getElementsByClassName('center')[0].appendChild(ne);
    document.getElementsByClassName('center')[0].insertBefore(ne,ne);
     ne.style.textAlign ="left";
}

