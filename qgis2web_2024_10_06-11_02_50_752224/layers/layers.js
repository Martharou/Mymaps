var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Uganda_1 = new ol.format.GeoJSON();
var features_Uganda_1 = format_Uganda_1.readFeatures(json_Uganda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uganda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uganda_1.addFeatures(features_Uganda_1);
var lyr_Uganda_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uganda_1, 
                style: style_Uganda_1,
                popuplayertitle: "Uganda",
                interactive: true,
    title: 'Uganda<br />\
    <img src="styles/legend/Uganda_1_0.png" /> 0 - 96189<br />\
    <img src="styles/legend/Uganda_1_1.png" /> 96189 - 129385<br />\
    <img src="styles/legend/Uganda_1_2.png" /> 129385 - 174954<br />\
    <img src="styles/legend/Uganda_1_3.png" /> 174954 - 228329<br />\
    <img src="styles/legend/Uganda_1_4.png" /> 228329 - 1189142<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Uganda_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Uganda_1];
lyr_Uganda_1.set('fieldAliases', {'F15Regions': 'Region', 'Label': 'District', 'Area': 'Area', '2002': '2002 Population', });
lyr_Uganda_1.set('fieldImages', {'F15Regions': 'TextEdit', 'Label': 'TextEdit', 'Area': 'TextEdit', '2002': 'TextEdit', });
lyr_Uganda_1.set('fieldLabels', {'F15Regions': 'inline label - visible with data', 'Label': 'inline label - visible with data', 'Area': 'inline label - visible with data', '2002': 'inline label - visible with data', });
lyr_Uganda_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});