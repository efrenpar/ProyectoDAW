
var app = new Vue({
  el: '#app',
  data: {
    filterKey: 'todos',
    search: '',
    artistas:null ,
    obras: null
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

    }
  }


})



function mostrar_obras(autor) {
  $('#modal_obras').empty();
  $('#modal_obras').append('<div class="modal-dialog-obras animated">'
    + '<div class="modal-content"> <div class="modal-header"> <button type="button" class="close_modal" data-dismiss="modal" aria-hidden="true">&times;</button> <h3 class="formato_artista"> Obras de ' + autor + ' </h3> </div>' +
    '<div id="cuerpo" class="modal-body"></div></div></div>');
  var aux = app.obras;

  for (var i = 0; i < aux.length; i++) {
    if (aux[i].autor == autor) {
      var imagenes = aux[i].imagenes;
      for (var j = 0; j < imagenes.length; j++) {
        var res = imagenes[j].split("-");
        $("#cuerpo").append('<div class="card">'+
        '<img class="obra_responsive" src="/uploads/images/'+ imagenes[j]+'" alt="Card image cap">'+
        '<div class="card-body">'+
          '<p class="card-text">Descripción</p>'+
       '</div></div>');
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
