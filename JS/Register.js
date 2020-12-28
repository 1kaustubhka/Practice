$(document).ready(()=>{
    $('#shpass').click((event)=>{
       if( $('#password').attr('type')=='text')
       {
        $('#password').attr('type','password');
       }
       else
       {
        $('#password').attr('type','text')
       }
        event.preventDefault();
    });
    
})