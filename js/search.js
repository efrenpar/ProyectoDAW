class Post {
    constructor(autor,nacimiento,nacionalidad,movimiento,campo,img) {
      this.autor = autor;
      this.nacimiento=nacimiento;
      this.nacionalidad=nacionalidad;
      this.movimiento=movimiento;
      this.campo=campo;
      this.img = img;
    }
  }
  
  const app = new Vue ({
    el: '#app',
    data: {
      search: '',
      postList : [
        new Post(
          'Anibal Villacis',
          '1927; Ambato, Ecuador',
          'Ecuatoriana',
          'Informalismo precolombino - indigenista',
          'Pintura', 
          'images/AnibalVillacis.jpg'
        ),
        new Post(
          'Enrique Tábara',
          '1930; Guayaquil, Ecuador',
          'Ecuatoriana',
          'Expresionista.abstraccion.construtivista precolombino',
          'Pintura',
          'images/EnriqueTabara.jpeg'
        ),
        new Post(

          'Bolivar Peñafiel',
          '1934; Guayaquil, Ecuador',
          'Ecuatoriana',
          'Neofigurativismo',
          'Pintura', 
          'images/LuisPena.jpg'
        ),
        new Post(

          'Eduardo Kingman',
          '1913; Loja, Ecuador',
          'Ecuatoriana',
          'Figurativismo, Realismo Social',
          'Pintura', 
          'images/kingman.jpg'
        ),
        new Post(

          'Hector Ramirez',
          '; Guayaquil, Ecuador',
          'Ecuatoriana',
          'Abstraccionismo',
          'Pintura',
          'images/ramirez.jpg'
        ),
        new Post(

          'Antonio Arias',
          '1944; Quito, Ecuador',
          'Ecuatoriana',
          'Neofigurativismo',
          'Pintura,Escultura', 
          'images/arias.jpg'
        ),

         new Post(

          'Carlos Catasse',
          '1944; Santiago de Chile, Chile',
          'Chilena',
          'Neofigurativo - Abstracto',
          'Pintura', 
          'images/catasse.jpg'
        ),
        new Post(

          'Manuel Velastegui',
          '1944; Guayaquil, Ecuador',
          'Chilena',
          'Neofigurativo',
          'Escultura', 
          'images/velastegui.jpg'
        ),
  ]
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.autor.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  })