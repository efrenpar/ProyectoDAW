
Vue.component('v-select', VueSelect.VueSelect);
var reporte = new Vue({
    el: '#reporte',
    data: {
        artistas: [],
        selected:"",
        lista:null
    },
    placeholder: {
      type: String,
      default: ""
    },
    
    mounted () {
        axios
          .get('http://localhost:3000/artistas')
          .then(response => (reporte.artistas = response.data
            ))
      },
})

function load(){
var request = new XMLHttpRequest();
var aux = reporte.selected.split(" ");
  console.log(reporte.selected);
  console.log(aux[1]);
  request.open('GET', 'http://localhost:3000/cuadros/'+aux[1], true)
  request.onload = function() {
     var data= this.response;
    if (request.status >= 200 && request.status < 400) {
        reporte.lista=JSON.parse(data);
        console.log(reporte.lista);
    } else {
      console.log('error');
    }
  }
  request.send();
}