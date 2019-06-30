
new Vue({
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


    ]
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
      return this.artistas.filter((aux) => !aux.nacionalidad.toLowerCase().includes("ecuatoriana") )
    },
    buscar() {
      return this.artistas.filter((aux) => aux.autor.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
})