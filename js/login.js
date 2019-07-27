
function showLoginForm(){
    $('#loginModal').empty();
    $('#loginModal').append('<div class="modal-dialog login animated"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close_modal" data-dismiss="modal" aria-hidden="true">&times;</button> <h4 >Inicio de sesión</h4> </div> '+
    '<div class="modal-body"> <div class="box"> <div class="content"> <div class="social"> <a class="circle build" > <i class="medium material-icons">build</i> </a><a  class="circle verified" ><i class="medium material-icons">verified_user</i></a> </div>'+
    '<div class="division"> <div class="line l"></div> <span>ADMIN</span> <div class="line r"></div> </div><div class="error"></div>'+
    '<div class="form loginBox"> <form method="" action="" accept-charset="UTF-8"> <input id="email" class="form-control" type="text" placeholder="Usuario" name="email"> <input id="password" class="form-control" type="password" placeholder="Contraseña" name="password">'+
    '<input class="btn btn-default btn-login" type="button" value="Iniciar Sesión" onclick="loginAjax()"></form></div></div></div></div></div></div>');
    $('#loginModal').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){

if($('#email').val()=='admin' && $('#password').val()=='admin'){

    window.location.replace("admin.html");
}

    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */
   else{
    shakeModal();
   }

     
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html("Usuario/Contraseña no válidos").fadeIn();
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake');
                $('.error').fadeOut(3000);
    }, 1000); 
}


	

   