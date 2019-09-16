
var socket = null;

var app = new Vue({
  el: '#app',
  data: {
    filterKey: 'todos',
    search: '',
    artistas:null ,
    obras: null
  },
  created:function(){
    socket = io();
  },
  mounted:function(){
      
          socket.on('enviarOpinion',function(result){
            refrescarOpiniones(result);
          }); 
          
          socket.on('eliminarOpinion',function(result){
            refrescarOpiniones(result);
          }); 

  },
  computed: {
    filtroArtistas() {
      return this[this.filterKey]
    },
    todos() {
      return this.artistas
    },
    nacionales() {
      return this.artistas.filter((aux) => aux.nacionalidad.toLowerCase().includes("ecuatoriana"))
    },
    internacionales() {
      return this.artistas.filter((aux) => !aux.nacionalidad.toLowerCase().includes("ecuatoriana"))
    },
    buscar() {
      return this.artistas.filter((aux) => aux.autor.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  methods: {
    openModal: function (autor) {
      mostrar_obras(autor);
      setTimeout(function () {
        $('#modal_obras').modal('show');
      }, 230);

    } ,
  comentarios:function(evento,autor){
    var nombre = autor.split(" ")[0];
    
    
      if (!$( "#comentarios" ).length) {
        
            var componentArtista = evento.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var item = '<div class = "comments-container">'
              +'<h1 id = "autor">'+autor+'<a id=cerrarComments>cerrar</a></h1>'
              +'<ul id = comentarios>'
              +'</ul>'
          +'</div>';
          $(componentArtista).after(item);

          $('#cerrarComments').click(function(){
            $('.comments-container').remove();
          })
          
      }
      armarComentariosPorAutor(nombre);
      nuevoComentario();

    }
  }


})

function refrescarOpiniones(result){
  var autor = $("#autor").text().split(' ')[0];
            $.get('http://localhost:3000/artistas/'+autor,function(data,status){
                  if(result.artista == data.id){
                    $("#comentarios").empty();
                    armarComentariosPorAutor(autor);
                    nuevoComentario();
                  }
            })

}

function armarComentariosPorAutor(nombre){
  $.get("http://localhost:3000/artistas/"+nombre,function(data,status){
    var id = data.id;
    console.log("El ID DE EL ARTISTA"+data);
    if(status = "success"){
      $.get("http://localhost:3000/opinion/"+id,function(data,status){
        var opiniones = data;
        
        if(status = "success"){
          for(var i = 0; i<data.length; i = i+1 ){
            ingresarNuevoComentario(data[i]);
          }
        }
  })
    }
});


}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }


function ingresarNuevoComentario(opinion){
  
  $('#comentarios').append('<li id='+opinion['id']+'>'
  +'<div class = "comment-main-level">'
      +'<div class = "comment-avatar"></div>'
      +'<div class = "comment-box">'
          +'<div class="comment-head">'
              +'<h6 class = "comment-name by-author"><a >'+opinion['cliente']+'</a></h6>'
              +'<span>hace 20 minutos</span>'
              +'<i class = "editar" > editar </i>'
              +'<i id = "eliminar'+opinion['id']+'" > eliminar </i>'
          +'</div>'
          +'<div class = "commet-conten">'
            +opinion['contenido']
          +'</div>'
      +'</div>'
  +'</div>'
+'</li>');
  

  $("#eliminar"+opinion['id']).click(function(){
      eliminarNode = $(this).attr("id");
      eliminarComentario(eliminarNode.slice(-1));
      socket.emit("eliminarOpinion",opinion);
     
  })
 
}

function eliminarComentario(index){
  if(index != null && index!=0){
      $.ajax({
        url: 'http://localhost:3000/opinion/'+index,
        type: 'DELETE',
        success: function(result) {
            id = '#'+index;
            $(id).remove();
            //socket.emit("eliminarOpinion",opinion);
        }
    });
  }
}

function nuevoComentario(){
    $('#comentarios').append('<li id="textoNuevo">'
    +'<div class = "comment-main-level">'
        +'<div class = "comment-avatar"></div>'
        +'<div class = "comment-box">'
            +'<div class="comment-head">'
                +'<h6 class = "comment-name by-author"><a >'+ atob(getCookie("user"))+'</a></h6>'
                +'<span>hace 20 minutos</span>'
                +'<button id = "enviar" > enviar </button>'
            +'</div>'
            +'<div class = "commet-conten">'
              +'<textarea rows="4" cols="30">'
              +'</textarea>'
              
            +'</div>'
        +'</div>'
    +'</div>'
  +'</li>');

  $('#enviar').click(function(){
    enviarContenido();
  })

}



function enviarContenido(){

  

  var usuario = atob(getCookie("user"));
  if(usuario){
    
    
    nombre = $("#autor").text().split(" ")[0];
   
    $.get("http://localhost:3000/artistas/"+nombre,function(data,status){
        $.post("http://localhost:3000/opinion",{contenido: $.trim($("textarea").val()), cliente: usuario, artista: data['id']}).then(result=>{
          
          $.get("http://localhost:3000/opinion/"+data['id'],function(data,status){
            ingresarNuevoComentario(data[[data.length-1]]);
            //envio de socket crear comentario
            socket.emit("enviarOpinion",data[[data.length-1]]);
            $('textarea').val('');
          })
          
        });
    });

    
    
  }else{
    alert(" Tiene que iniciar sesion para comentar:");
  }
  
}


function mostrar_obras(autor) {
  $('#modal_obras').empty();
  $('#modal_obras').append('<div class="modal-dialog-obras animated">'
    + '<div class="modal-content"> <div class="modal-header"> <button type="button" class="close_modal" data-dismiss="modal" aria-hidden="true">&times;</button> <h3 class="formato_artista"> Obras de ' + autor + ' </h3> </div>' +
    '<div id="cuerpo" class="modal-body"></div></div></div>');
  var aux = app.obras;

  for (var i = 0; i < aux.length; i++) {
    if (aux[i].autor == autor) {
      var imagenes = aux[i].imagenes;
      console.log(imagenes);
      for (var j = 0; j < imagenes.length; j++) {
        var res = imagenes[j].split("-");
        console.log(descripcion);
        for (var k = 0; k < descripcion.length; k++) {
          console.log(k);
        $("#cuerpo").append('<div class="card">'+
        '<img class="obra_responsive" src="images/'+res[0] +'/'+ imagenes[j]+'" alt="Card image cap">'+
        '<div class="card-body">'+
          '<p class="card-text">'+descripcion[k]+'</p>'+
       '</div></div>');
        }
      }
    }
  }


  $('#modal_obras').fadeOut('fast', function () {
    $('.loginBox').fadeIn('fast');

    $('.modal-title').html('Login with');
  });
  $('.error').removeClass('alert alert-danger').html('');
}


$.getJSON('data/artistas.json',function(json) {
  var aux = json.artistas;
  app.artistas=aux;
});

$.getJSON('data/obras.json',function(json) {
  var aux = json.obras;
  app.obras=aux;
});
