$(document).ready(()=>{
   // $('#myDiv').prev().css('color','blue');
   // $('#inrdiv').next().css('color','red');

    //$('#inrdiv').siblings().css('color','olive');
   // $('#inrdiv').children().css('color','orange');
    //$('#inrdiv').parent().css('background-color','lightgrey');

   $('#anime').click(()=>{
       alert("button click");
        $('#myp').animate({borderWidth: "40px"});
        //$('#myp').animate({border: '40px solid red'});
        $('#myp').animate({height: "800px"});
       // $('#mydiv').slideUp(1000);
    });

    $('#up').hover(()=>{
       $("#ed").slideUp(1000);
     });

     $('#down').hover(()=>{
        $("#ed").slideDown(1000);
      });


      $('#in').click(()=>{
        $("#ed").fadeIn(1000);
      });

      $('#out').click(()=>{
        $("#ed").fadeOut(1000);
      });
})