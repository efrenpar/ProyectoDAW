Vue.use(VueFusionCharts, FusionCharts);
var app = new Vue({
    el: '#chart1',
    data: {
        width: '800',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Cantidad de productos vendidos [Mayo-Junio]",
                "subCaption": "",
                "xAxisName": "Productos",
                "yAxisName": "Cantidad",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            "data": [{
                "label": "Vidrios",
                "value": "2.9"
            }, {
                "label": "Policarbonato",
                "value": "2.6"
            }, {
                "label": "Hierro",
                "value": "1.8"
            }, {
                "label": "Herrajes",
                "value": "1.4"
            }, {
                "label": "Agarraderas",
                "value": "1.5"
            }, {
                "label": "Maquinarias",
                "value": "0.1"
            }, {
                "label": "Pisos",
                "value": "0.7"
            }, {
                "label": "Porcelanatos",
                "value": "1"
            }]
        }
    }
    
});


var app = new Vue({
    el: '#chart2',
    data: {
        width: '800',
        height: '400',
        type: 'pie2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Principales distribuidores",
                "theme": "fusion"
            },
            "data": [{
                "label": "Vidrios",
                "value": "2.9"
            }, {
                "label": "Policarbonato",
                "value": "2.6"
            }, {
                "label": "Hierro",
                "value": "1.8"
            }, {
                "label": "Herrajes",
                "value": "1.4"
            }, {
                "label": "Agarraderas",
                "value": "1.5"
            }, {
                "label": "Maquinarias",
                "value": "0.1"
            }, {
                "label": "Pisos",
                "value": "0.7"
            }, {
                "label": "Porcelanatos",
                "value": "1"
            }]
        }
    }
    
});