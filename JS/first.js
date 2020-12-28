$(document).ready(
    ()=>{
        alert("jQuery is working fine");
        var life =  $('div.life').css('background-color','lightgreen');
        var man = $('#manmade').css('background-color','pink');;
        var divodd=$('div:odd');
        var diveven=$('div:even');
        var divfirst=$('div:first').css('background-color','lightorange');
        var divlast=$('div:last');
        $('div:odd').addClass('odd');
     console.log(life);
     console.log(man);
     console.log(diveven);
     console.log(divodd);
     console.log(divfirst);
     console.log(divlast);
            
     var h = $('a[href]');
     console.log(h);

     var hstart=$('a[href^="https://g"]');
     console.log(hstart);
        
     var hend=$('a[href$="y.com"]');
     console.log(hend);

     var findp = $('document').find('p');
     console.log(findp);

     var childp = $('document').children('p');
     console.log(childp);
     var childd = $('document').children('div');
     console.log(childd);

     var childdp = $('div').children('p');
     console.log(childdp);

     $('.life').html('<p>LIFE IS BEAUTIFUL</p>');
     $('.life').css('color','pink');
     alert($('#inp').val());

     $('div:even').toggleClass('even');
     $('div:odd').addClass('odd');
     $('div:odd').hide();
    // $('div:odd').show();
    
    $('#togle').click(()=>{
        $('div:even').toggleClass('even');
        $('div:odd').toggle();
    });
    }
);