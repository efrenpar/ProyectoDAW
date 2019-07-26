
var app = new Vue({
  el: '#app',
  data: {
    filterKey: 'todos',
    search: '',
    artistas: [
      {
        autor: 'Anibal Villacis', nacimiento: '1927; Ambato, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Informalismo precolombino - indigenista', campo: 'Pintura', img: 'images/AnibalVillacis.jpg'
      },
      {
        autor: 'Enrique Tábara', nacimiento: '1930; Guayaquil, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Expresionista, Abstraccion, Construtivista precolombino', campo: 'Pintura', img: 'images/EnriqueTabara.jpeg'
      },
      {
        autor: 'Bolivar Peñafiel', nacimiento: '1934; Guayaquil, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Neofigurativismo', campo: 'Pintura', img: 'images/LuisPena.jpg'
      },
      {
        autor: 'Eduardo Kingman', nacimiento: '1913; Loja, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Figurativismo, Realismo Social', campo: 'Pintura', img: 'images/kingman.jpg'
      },
      {
        autor: 'Hector Ramirez', nacimiento: '1982;Guayaquil, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Abstraccionismo', campo: 'Pintura', img: 'images/ramirez.jpg'
      },
      {
        autor: 'Antonio Arias', nacimiento: '1944; Quito, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Neofigurativismo', campo: 'Pintura,Escultura', img: 'images/arias.jpg'
      },
      {
        autor: 'Carlos Catasse', nacimiento: '1944; Santiago de Chile, Chile', nacionalidad: 'Chilena',
        movimiento: 'Neofigurativo - Abstracto', campo: 'Pintura', img: 'images/catasse.jpg'
      },
      {
        autor: 'Manuel Velastegui', nacimiento: '1944; Guayaquil, Ecuador', nacionalidad: 'Ecuatoriana',
        movimiento: 'Neofigurativo', campo: 'Escultura', img: 'images/velastegui.jpg'
      },


    ],
    obras: [{
      autor: "Anibal Villacis", obras: ["AV-00109.jpg", "AV-00109.jpg", "AV-00114.jpg", "AV-00119.jpg", "AV-00119.jpg", "AV-00127.jpg", "AV-00137.jpg", "AV-00139.jpg"]
    }, {
      autor: "Enrique Tábara", obras: ["ET-00101.jpg", "ET-00104.jpg", "ET-00160.jpg", "ET-00163.jpg"]

    }, {
      autor: "Bolivar Peñafiel", obras: ["BPM-00104.jpg", "BPM-00128.jpg", "BPM-00165.jpg", "BPM-00196.jpg", "BPM-00208.jpg", "BPM-00310.jpg", "BPM-00373.jpg"]

    }, {
      autor: "Eduardo Kingman", obras: ["LPB-00109.jpg", "LPB-00129.jpg", "LPB-00147.jpg", "LPB-00156.jpg", "LPB-00218.jpg", "LPB-00222.jpg", "LPB-00259.jpg", "LPB-00231.jpg"]

    }, {
      autor: "Carlos Catasse", obras: ["HRAM-00105.jpg", "HRAM-00164.jpg", "HRAM-00177.jpg", "HRAM-00178.jpg", "HRAM-00186.jpg", "HRAM-00199.jpg", "HRAM-00209.jpg", "HRAM-00226.jpg"]

    }, {
      autor: "Manuel Velastegui", obras: ["HULA-00121.jpg", "HULA-00123.jpg", "HULA-00124.jpg", "HULA-00130.jpg", "HULA-00141.jpg", "HULA-00146.jpg"]

    },
    ],
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
      var imagenes = aux[i].obras;
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

