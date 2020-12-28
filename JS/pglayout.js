$(document).ready(()=>{

    $('#layout').click(()=>{
        $('header').height('10%');
        $('header').toggleClass('Header2');
        $('header').html('<h1>THIS IS THE HEADER</h1><hr>');

        
        $('#div2').height('80%');
        $('#div2').css('background-color','lightpink');
        $('#div2').html('<h1>THIS IS DIV 2</h1>');
        $('#div2').width('50%');
        $('#div2').css('float','left');

        $('#div1').css('background-color','cyan');
        $('#div1').height("80%");
        $('#div1').width('50%');
        $('#div2').css('float','right');


        $('footer').css({'background-color':'black','color':'White','border':'white 2px dashed'});
        $('footer').height("10%");

        

    });
    $('#music').click(function () {
        $('#div2').append($("input").map(function() {
            console.log($(this).val());
            return $(this).val();
        })
        .get()
        .join(". ") );
    });

    $( "div" ).each(function() {
        $( this ).addClass( "ndiv" );
      });

      $('#div1').append('<h3>APPEND</h3>');
      $('#div1').prepend('<h3>PREPEND</h3>');
      $('#div1').before('<h3>before</h3>');
      $('#div1').after('<h3>after</h3>');
});