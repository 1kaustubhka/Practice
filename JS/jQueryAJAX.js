$(document).ready(()=>{
/*
    $.ajax({
        url: "https://reqres.in/api/users/4",
        method: "GET",
        success:(x)=>{
            var img = x.data.avatar;
            var d = "<img src='"+img+"'/>";
            $("#pic").append(d);
            $('img').width(300);
            $("#name").append(x.data.first_name+" "+x.data.last_name);
            $("#email").append(x.data.email);
        },
        error:(e)=>{
            alert("Error: "+e);
        },
        complete:()=>{
            alert("CALL IS COMPLETE");
        }
    });
    */

    $('#post').click(()=>{
        alert("BUTTON CLICKED");
        $.ajax({
           
            url: "https://reqres.in/api/users",
            method: "POST",
            data: {
                "name": $('#inname').val(),
                "job": $('#inemail').val()
            },
            success:(x)=>{
                alert("USER POSTED");
                console.log(x);
            },
            error:(e)=>{
                alert("Error: "+e);
            },
            complete:()=>{
                alert("CALL IS COMPLETE");
            }
    })
 
});

$('#get').click(()=>{
    $.ajax({
        url: "https://reqres.in/api/users/4",
        method: "GET",
        success:(x)=>{
            var img = x.data.avatar;
            var d = "<img src='"+img+"'/>";
            $("#pic").append(d);
            $('img').width(300);
            $("#name").append(x.data.first_name+" "+x.data.last_name);
            $("#email").append(x.data.email);
        },
        error:(e)=>{
            alert("Error: "+e);
        },
        complete:()=>{
            alert("CALL IS COMPLETE");
        }
    });
});
})