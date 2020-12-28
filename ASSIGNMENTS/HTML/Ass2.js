function changeColor()
{
    var pg=document.querySelector('p');
    pg.style.backgroundColor="blue";
}

function changeAllColor()
{
    var pgs=document.querySelectorAll('p');
    for(i=0;i<pgs.length;i++)
        pgs[i].style.backgroundColor="lightPink";
}