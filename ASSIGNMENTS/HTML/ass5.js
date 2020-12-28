function draw()
{
    var c = document.getElementById("smiley");
    var d = c.getContext("2d");

    d.beginPath();
    d.fillStyle="yellow";
    d.arc(200,200,200,0,Math.PI*2);
    d.closePath();
    d.fill();

    d.beginPath();
    d.fillStyle="black";
    d.arc(100,100,40,0,Math.PI*2);
    d.closePath();
    d.fill();

    d.beginPath();
    d.fillStyle="black";
    d.arc(300,100,40,0,Math.PI*2);
    d.closePath();
    d.fill();

    d.beginPath();
    d.fillStyle="black";
    d.arc(200,300,60,0,Math.PI,false);
   
    d.stroke();
}