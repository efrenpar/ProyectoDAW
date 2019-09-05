Vue.use(VueFusionCharts, FusionCharts);
consumirApiGraficos();
function consumirApiGraficos(){
  
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/chart/1', true)
  request.onload = function() {
     var chart1= this.response;
  
    if (request.status >= 200 && request.status < 400) {
        app1.dataSource=chart1;
    } else {
      console.log('error');
    }
  }
  request.send();

  var request2 = new XMLHttpRequest();
  request2.open('GET', 'http://localhost:3000/chart/2', true)
  request2.onload = function() {
     var chart2= this.response;
  
    if (request2.status >= 200 && request.status < 400) {
        app2.dataSource=chart2;
    } else {
      console.log('error');
    }
  }
  request2.send();

  var request3 = new XMLHttpRequest();
  request3.open('GET', 'http://localhost:3000/chart/3', true)
  request3.onload = function() {
     var chart3= this.response;
  
    if (request3.status >= 200 && request.status < 400) {
        app3.dataSource=chart3;
    } else {
      console.log('error');
    }
  }
  request3.send();


  var request4 = new XMLHttpRequest();
  request4.open('GET', 'http://localhost:3000/chart/4', true)
  request4.onload = function() {
     var chart4= this.response;
  
    if (request4.status >= 200 && request.status < 400) {
        app4.dataSource=chart4;
    } else {
      console.log('error');
    }
  }
  request4.send();

}


var app1 = new Vue({
    el: '#chart1',
    data: {
        width: '100%',
        height: '550',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: null
    }

});


var app2 = new Vue({
    el: '#chart2',
    data: {
        width: '100%',
        height: '480',
        type: 'doughnut2d',
        dataFormat: 'json',
        dataSource: null
    }

});

var app3 = new Vue({
    el: '#chart4',
    data: {
        width: '100%',
        height: '550',
        type: 'multilevelpie',
        dataFormat: 'json',
        dataSource: null
}

});

var app4 = new Vue({
    el: '#chart5',
    data: {
        width: '100%',
        height: '480',
        type: 'angulargauge',
        dataFormat: 'json',
        dataSource: null

}});
