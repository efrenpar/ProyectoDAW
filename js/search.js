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
          'Hugo Lara',
          '6 de julio de 1919; Quito, Ecuador',
          'Ecuatoriana',
          'Expresionismo',
          'Pintura,Escultura',
          'images/HugoLara.jpg'
        ),
        new Post(
          'Enrique Tábara',
          '6 de julio de 1919; Quito, Ecuador',
          'Ecuatoriana',
          'Expresionismo',
          'Pintura,Escultura',
          'images/artista2.jpeg'
        ),
        new Post(

          'Oswaldo Guayasamín',
          '6 de julio de 1919; Quito, Ecuador',
          'Ecuatoriana',
          'Expresionismo',
          'Pintura,Escultura', 
          'images/artista1.jpg'
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