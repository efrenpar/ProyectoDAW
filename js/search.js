
var app = new Vue({
  el: '#app',
  data: {
    filterKey: 'todos',
    search: '',
    artistas: null,
    obras: null,
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
  $('#modal_obras').append('<div class="modal-dialog-obras login animated">'
    + '<div class="modal-content"> <div class="modal-header"> <h4> Obras de artistas</h4> </div>' +
    '<div id="cuerpo" class="modal-body"></div></div></div>');
  var artista = document.getElementById("cuerpo");


  var aux = app.obras;

  for (var i = 0; i < aux.length; i++) {
    if (aux[i].autor == autor) {
      var imagenes = aux[i].imagenes;
      console.log(imagenes);
      for (var j = 0; j < imagenes.length; j++) {
        var img = document.createElement('img');
        img.className = "obra_responsive";
        var res = imagenes[j].split("-");
        img.src = "images/"+ res[0] + "/"+ imagenes[j];
        artista.appendChild(img);
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
    var aux = json.escritores;
    console.log(aux);
    app.artistas=aux;
});

$.getJSON('data/obras.json',function(json) {
    var aux = json.obras;
    console.log(aux);
    app.obras=aux;
});
