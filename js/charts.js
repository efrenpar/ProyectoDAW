Vue.use(VueFusionCharts, FusionCharts);
var app = new Vue({
    el: '#chart1',
    data: {
        width: '100%',
        height: '550',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Las obras de Enrique Tábara son las más vistas",
                "subCaption": "",
                "xAxisName": "Artistas",
                "yAxisName": "Visualizaciones",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            "data": [{
                "label": "E.Tábara",
                "value": "2.9"
            }, {
                "label": "A.Villacis",
                "value": "2.6"
            }, {
                "label": "E.Kigman",
                "value": "1.8"
            }, {
                "label": "B.Peñafiel",
                "value": "1.4"
            },
              {
                "label": "H.Ramirez",
                "value": "1.1"
            },{
                "label": "M.Velastegui",
                "value": "0.1"}
           ]
        }
    }

});


var app = new Vue({
    el: '#chart2',
    data: {
        width: '100%',
        height: '380',
        type: 'pyramid',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Cuadros vendidos",
                "theme": "fusion",
                "showvalues": "1",
                "plottooltext":
                    "Se vendieron <b>$dataValue</b> cuadros de <b>$label</b>",
                "is2d": "0"
            },
            "data": [{
                "label": "Enrique Tábara",
                "value": "2"
            }, {
                "label": "Hector Ramirez",
                "value": "4"
            }, {
                "label": "Antonio Arias",
                "value": "7"
            },
            {
                "label": "Eduardo kigman",
                "value": "8"
            }, {
                "label": "Anibal Villaciss",
                "value": "10"
            }]
        }
    }

});

var app = new Vue({
    el: '#chart4',
    data: {
        width: '100%',
        height: '550',
        type: 'multilevelpie',
        dataFormat: 'json',
        dataSource: {

"chart": {
    "caption": "Los eventos con mayor acogida son realizados en Guayaquil($55.5k)",
    "showplotborder": "1",
    "plotfillalpha": "60",
    "hoverfillcolor": "#CCCCCC",
    "numberprefix": "$",
    "plottooltext": "Las ventas en <b>$label</b> fueron de <b>$$valueK</b>, lo cual representa un $percentValue de su categoría",
    "theme": "fusion"
  },
  "category": [
    {
      "label": "Ecuador",
      "tooltext": "Por favor pase sobre las subcatergorías para ver detalles",
      "color": "#ffffff",
      "value": "150",
      "category": [
        {
          "label": "Guayaquil",
          "color": "#f8bd19",
          "value": "55.5",
          "category": [
            {
              "label": "Museo Presley",
              "color": "#f8bd19",
              "value": "11.1"
            },
            {
              "label": "M.Municipal",
              "color": "#f8bd19",
              "value": "20.75"
            },
            {
              "label": "Red Solare ",
              "color": "#f8bd19",
              "value": "9.99"
            },
            {
              "label": "Expo.2019",
              "color": "#f8bd19",
              "value": "13.66"
            }
          ]
        },
        {
          "label": "Quito",
          "color": "#33ccff",
          "value": "42",
          "category": [
            {
              "label": "Museo Mariño",
              "color": "#33ccff",
              "value": "10.08"
            },
            {
              "label": "Pilar Bustos",
              "color": "#33ccff",
              "value": "18.9"
            },
            {
              "label": "S.de Papel",
              "color": "#33ccff",
              "value": "6.3"
            },
            {
              "label": "M.Municipal",
              "color": "#33ccff",
              "value": "6.72"
            }
          ]
        },
        {
          "label": "Machala",
          "color": "#ffcccc",
          "value": "22.5",
          "category": [
            {
              "label": "M.Flaviker",
              "color": "#ffcccc",
              "value": "6.45"
            },
            {
              "label": "Mirage Dark",
              "color": "#ffcccc",
              "value": "9.3"
            },
            {
              "label": "Municipio",
              "color": "#ffcccc",
              "value": "6.75"
            }
          ]
        },
        {
          "label": "Cuenca",
          "color": "#ccff66",
          "value": "30",
          "category": [
            {
              "label": "Malecon",
              "color": "#ccff66",
              "value": "8.1"
            },
            {
              "label": "Express",
              "color": "#ccff66",
              "value": "10.5"
            },
            {
              "label": "M.Catedral",
              "color": "#ccff66",
              "value": "11.4"
            }
          ]
        }
      ]
    }
  ]
}}});

var app = new Vue({
    el: '#chart5',
    data: {
        width: '100%',
        height: '380',
        type: 'angulargauge',
        dataFormat: 'json',
        dataSource: {
"chart": {
    "caption": "Se recomienda un reabastecimiento del inventario",
    "lowerlimit": "0",
    "upperlimit": "100",
    "showvalue": "1",
    "numbersuffix": "%",
    "theme": "fusion",
    "showtooltip": "0"
  },
  "colorrange": {
    "color": [
      {
        "minvalue": "0",
        "maxvalue": "33.33",
        "code": "#F2726F"
      },
      {
        "minvalue": "33.33",
        "maxvalue": "66",
        "code": "#FFC533"
      },
      {
        "minvalue": "66",
        "maxvalue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "55"
      }
    ]
  }
}}});



FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "dragcolumn2d",
    renderAt: "chart-container",
    width: "100%",
    height: "450",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Proyecciones de Ventas de Vidrios y Policarbonatos",
        subCaption:
          "Arrastre la parte superior de las columnas para ajustar proyecciones para 2019 & 2020",
        numberPrefix: "$",
        numberSuffix: "K",
        yaxismaxvalue: "200",
        theme: "fusion",
        plotToolText: "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
      },
      categories: [
        {
          category: [
            {
              label: "2016",
              fontItalic: "0"
            },
            {
              label: "2017",
              fontItalic: "0"
            },
            {
              label: "2018",
              fontItalic: "0"
            },
            {
              label: "2019 (Proyectado)"
            },
            {
              label: "2020 (Proyectado)"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Vidrios",
          data: [
            {
              value: "73",
              alpha: "100",
              allowDrag: "0"
            },
            {
              value: "80",
              alpha: "100",
              allowDrag: "0"
            },
            {
              value: "97",
              alpha: "100",
              allowDrag: "0"
            },
            {
              value: "110",
              toolText: "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            },
            {
              value: "180",
              toolText: "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }
          ]
        },
        {
          seriesname: "Policarbonato",
          data: [
            {
              value: "63.2",
              alpha: "100",
              allowDrag: "0"
            },
            {
              value: "68",
              alpha: "100",
              allowDrag: "0"
            },
            {
              value: "82",
              alpha: "100",
              allowDrag: "0"
            },
            {
              value: "99",
              toolText: "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            },
            {
              value: "150",
              toolText: "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }
          ]
        }
      ]
    },
    events: {
      dataplotDragEnd: function(ev, props) {
        console.log(props);
        var dataSet = props.datasetName;
        var beforeVal = Math.round(props.startValue * 100) / 100;
        var afterVal = Math.round(props.endValue * 100) / 100;
        document.getElementById("info").innerHTML =
          "<b>" +
          dataSet +
          "</b> es modificado a <b>$" +
          afterVal +
          "K</b> de <b>$" +
          beforeVal +
          "K</b>";
      }
    }
  }).render();
});