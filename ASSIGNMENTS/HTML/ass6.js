function pg()
{
    logo();
    images();
}

function logo()
{
    var c = document.getElementById("rainbow");
    var d = c.getContext("2d");

    d.beginPath();
    d.fillStyle="violet";
    d.arc(50,50,40,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();

    d.beginPath();
    d.fillStyle="indigo";
    d.arc(50,50,37,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();
 
    
    
    d.beginPath();
    d.fillStyle="blue";
    d.arc(50,50,34,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();

    d.beginPath();
    d.fillStyle="green";
    d.arc(50,50,31,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();

    d.beginPath();
    d.fillStyle="yellow";
    d.arc(50,50,29,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();


    d.beginPath();
    d.fillStyle="orange";
    d.arc(50,50,26,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();

    d.beginPath();
    d.fillStyle="red";
    d.arc(50,50,23,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();

    d.beginPath();
    d.fillStyle="white";
    d.arc(50,50,20,0,Math.PI,true);
    d.closePath();
    d.fill();
    d.stroke();
   
}


function images(){
    
        var c = document.getElementById("images");
        var ctx = c.getContext("2d");

        var pods = new Image();
        pods.src= "airpods.jpg";
        pods.onload = function() {
            ctx.drawImage(pods, 0, 0,400,300);
        }
        
        ctx.font = "30px Arial";
        ctx.fillText("ALL NEW AIRPODS",   450, 150);
        
        var mac = new Image();
        mac.src= "mac.jpg";
        mac.onload = function() {
        ctx.drawImage(mac,0,300 ,400, 300);
        }
        ctx.fillText("ALL NEW MAC",   450, 450);
        var iphone = new Image();
        iphone.src= "iphone12.jpg";
        iphone.onload = function() {
        ctx.drawImage(iphone, 0,600, 400, 300);
        }
        ctx.fillText("ALL NEW IPHONE 12",   450, 750);
        
    
}