$(document).ready(()=>{
    $('#search').keyup(()=>{
        var val=$('#search').val();
        var s = val.toUpperCase();

        $('tr').filter(function() {
            if($(this).text().toUpperCase().indexOf(s)> -1)
            {
                $(this).css('display',"");
            }
            else
            {
                $(this).css('display',"none");
            }
        });
        
    });
});