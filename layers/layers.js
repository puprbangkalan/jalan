var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalanBerdasarkanKonektivitas_1 = new ol.format.GeoJSON();
var features_JalanBerdasarkanKonektivitas_1 = format_JalanBerdasarkanKonektivitas_1.readFeatures(json_JalanBerdasarkanKonektivitas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBerdasarkanKonektivitas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBerdasarkanKonektivitas_1.addFeatures(features_JalanBerdasarkanKonektivitas_1);
var lyr_JalanBerdasarkanKonektivitas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanBerdasarkanKonektivitas_1, 
                style: style_JalanBerdasarkanKonektivitas_1,
                interactive: true,
    title: 'Jalan Berdasarkan Konektivitas<br />\
    <img src="styles/legend/JalanBerdasarkanKonektivitas_1_0.png" /> Penghubung 3 Kecamatan<br />\
    <img src="styles/legend/JalanBerdasarkanKonektivitas_1_1.png" /> Penghubung 2 Kecamatan<br />\
    <img src="styles/legend/JalanBerdasarkanKonektivitas_1_2.png" /> Tidak menghubungkan Kecamatan<br />'
        });
var format_JalanBerdasarkanRencanaPolaRuang_2 = new ol.format.GeoJSON();
var features_JalanBerdasarkanRencanaPolaRuang_2 = format_JalanBerdasarkanRencanaPolaRuang_2.readFeatures(json_JalanBerdasarkanRencanaPolaRuang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBerdasarkanRencanaPolaRuang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBerdasarkanRencanaPolaRuang_2.addFeatures(features_JalanBerdasarkanRencanaPolaRuang_2);
var lyr_JalanBerdasarkanRencanaPolaRuang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanBerdasarkanRencanaPolaRuang_2, 
                style: style_JalanBerdasarkanRencanaPolaRuang_2,
                interactive: true,
    title: 'Jalan Berdasarkan Rencana Pola Ruang<br />\
    <img src="styles/legend/JalanBerdasarkanRencanaPolaRuang_2_0.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/JalanBerdasarkanRencanaPolaRuang_2_1.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/JalanBerdasarkanRencanaPolaRuang_2_2.png" /> Kawasan Lainnya<br />'
        });
var format_JalanBerdasarkanKondisiFisik_3 = new ol.format.GeoJSON();
var features_JalanBerdasarkanKondisiFisik_3 = format_JalanBerdasarkanKondisiFisik_3.readFeatures(json_JalanBerdasarkanKondisiFisik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBerdasarkanKondisiFisik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBerdasarkanKondisiFisik_3.addFeatures(features_JalanBerdasarkanKondisiFisik_3);
var lyr_JalanBerdasarkanKondisiFisik_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanBerdasarkanKondisiFisik_3, 
                style: style_JalanBerdasarkanKondisiFisik_3,
                interactive: true,
    title: 'Jalan Berdasarkan Kondisi Fisik<br />\
    <img src="styles/legend/JalanBerdasarkanKondisiFisik_3_0.png" /> Kondisi Fisik Kerusakan Berat<br />\
    <img src="styles/legend/JalanBerdasarkanKondisiFisik_3_1.png" /> Kondisi Fisik Kerusakan Sedang<br />\
    <img src="styles/legend/JalanBerdasarkanKondisiFisik_3_2.png" /> Kondisi Fisik Kerusakan Rendah<br />'
        });
var format_TotalPrioritasJalan_4 = new ol.format.GeoJSON();
var features_TotalPrioritasJalan_4 = format_TotalPrioritasJalan_4.readFeatures(json_TotalPrioritasJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalPrioritasJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalPrioritasJalan_4.addFeatures(features_TotalPrioritasJalan_4);
var lyr_TotalPrioritasJalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalPrioritasJalan_4, 
                style: style_TotalPrioritasJalan_4,
                interactive: true,
    title: 'Total Prioritas Jalan<br />\
    <img src="styles/legend/TotalPrioritasJalan_4_0.png" /> Jalan Prioritas Tinggi<br />\
    <img src="styles/legend/TotalPrioritasJalan_4_1.png" /> Jalan Prioritas Sedang<br />\
    <img src="styles/legend/TotalPrioritasJalan_4_2.png" /> Jalan Prioritas Rendah<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_JalanBerdasarkanKonektivitas_1.setVisible(true);lyr_JalanBerdasarkanRencanaPolaRuang_2.setVisible(true);lyr_JalanBerdasarkanKondisiFisik_3.setVisible(true);lyr_TotalPrioritasJalan_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_JalanBerdasarkanKonektivitas_1,lyr_JalanBerdasarkanRencanaPolaRuang_2,lyr_JalanBerdasarkanKondisiFisik_3,lyr_TotalPrioritasJalan_4];
lyr_JalanBerdasarkanKonektivitas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'No_Ruas': 'No_Ruas', 'NAMA': 'NAMA', 'objectid_1': 'objectid_1', 'RUAS': 'RUAS', 'Panjang_To': 'Panjang_To', 'Baik': 'Baik', 'Sedang': 'Sedang', 'Rusak_Ring': 'Rusak_Ring', 'Rusak_Bera': 'Rusak_Bera', 'Lebar': 'Lebar', 'kode': 'kode', 'Konektivit': 'Konektivit', 'NKAWASAN': 'NKAWASAN', 'N1': 'N1', 'N2': 'N2', 'N3': 'N3', 'Total': 'Total', 'FISIK': 'FISIK', 'PRIO': 'PRIO', });
lyr_JalanBerdasarkanRencanaPolaRuang_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'No_Ruas': 'No_Ruas', 'NAMA': 'NAMA', 'NAMOBJ': 'NAMOBJ', 'POLA': 'POLA', 'Panjang': 'Panjang', 'Nilai': 'Nilai', });
lyr_JalanBerdasarkanKondisiFisik_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'No_Ruas': 'No_Ruas', 'NAMA': 'NAMA', 'objectid_1': 'objectid_1', 'RUAS': 'RUAS', 'Panjang_To': 'Panjang_To', 'Baik': 'Baik', 'Sedang': 'Sedang', 'Rusak_Ring': 'Rusak_Ring', 'Rusak_Bera': 'Rusak_Bera', 'Lebar': 'Lebar', 'kode': 'kode', 'Konektivit': 'Konektivit', 'NKAWASAN': 'NKAWASAN', 'N1': 'N1', 'N2': 'N2', 'N3': 'N3', 'Total': 'Total', 'FISIK': 'FISIK', 'PRIO': 'PRIO', });
lyr_TotalPrioritasJalan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'No_Ruas': 'No_Ruas', 'NAMA': 'NAMA', 'objectid_1': 'objectid_1', 'RUAS': 'RUAS', 'Panjang_To': 'Panjang_To', 'Baik': 'Baik', 'Sedang': 'Sedang', 'Rusak_Ring': 'Rusak_Ring', 'Rusak_Bera': 'Rusak_Bera', 'Lebar': 'Lebar', 'kode': 'kode', 'Konektivit': 'Konektivit', 'NKAWASAN': 'NKAWASAN', 'N1': 'N1', 'N2': 'N2', 'N3': 'N3', 'Total': 'Total', 'FISIK': 'FISIK', 'PRIO': 'PRIO', });
lyr_JalanBerdasarkanKonektivitas_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'No_Ruas': 'TextEdit', 'NAMA': 'TextEdit', 'objectid_1': 'TextEdit', 'RUAS': 'TextEdit', 'Panjang_To': 'TextEdit', 'Baik': 'TextEdit', 'Sedang': 'TextEdit', 'Rusak_Ring': 'TextEdit', 'Rusak_Bera': 'TextEdit', 'Lebar': 'TextEdit', 'kode': 'TextEdit', 'Konektivit': 'TextEdit', 'NKAWASAN': 'TextEdit', 'N1': 'TextEdit', 'N2': 'TextEdit', 'N3': 'TextEdit', 'Total': 'TextEdit', 'FISIK': '', 'PRIO': '', });
lyr_JalanBerdasarkanRencanaPolaRuang_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'No_Ruas': 'TextEdit', 'NAMA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'POLA': 'TextEdit', 'Panjang': 'TextEdit', 'Nilai': 'TextEdit', });
lyr_JalanBerdasarkanKondisiFisik_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'No_Ruas': 'TextEdit', 'NAMA': 'TextEdit', 'objectid_1': 'TextEdit', 'RUAS': 'TextEdit', 'Panjang_To': 'TextEdit', 'Baik': 'TextEdit', 'Sedang': 'TextEdit', 'Rusak_Ring': 'TextEdit', 'Rusak_Bera': 'TextEdit', 'Lebar': 'TextEdit', 'kode': 'TextEdit', 'Konektivit': 'TextEdit', 'NKAWASAN': 'TextEdit', 'N1': 'TextEdit', 'N2': 'TextEdit', 'N3': 'TextEdit', 'Total': 'TextEdit', 'FISIK': 'TextEdit', 'PRIO': 'TextEdit', });
lyr_TotalPrioritasJalan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'No_Ruas': 'TextEdit', 'NAMA': 'TextEdit', 'objectid_1': 'TextEdit', 'RUAS': 'TextEdit', 'Panjang_To': 'TextEdit', 'Baik': 'TextEdit', 'Sedang': 'TextEdit', 'Rusak_Ring': 'TextEdit', 'Rusak_Bera': 'TextEdit', 'Lebar': 'TextEdit', 'kode': 'TextEdit', 'Konektivit': 'TextEdit', 'NKAWASAN': 'TextEdit', 'N1': 'TextEdit', 'N2': 'TextEdit', 'N3': 'TextEdit', 'Total': 'TextEdit', 'FISIK': 'TextEdit', 'PRIO': 'TextEdit', });
lyr_JalanBerdasarkanKonektivitas_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'No_Ruas': 'hidden field', 'NAMA': 'no label', 'objectid_1': 'hidden field', 'RUAS': 'hidden field', 'Panjang_To': 'hidden field', 'Baik': 'hidden field', 'Sedang': 'hidden field', 'Rusak_Ring': 'hidden field', 'Rusak_Bera': 'hidden field', 'Lebar': 'hidden field', 'kode': 'hidden field', 'Konektivit': 'no label', 'NKAWASAN': 'hidden field', 'N1': 'hidden field', 'N2': 'hidden field', 'N3': 'hidden field', 'Total': 'hidden field', 'FISIK': 'hidden field', 'PRIO': 'hidden field', });
lyr_JalanBerdasarkanRencanaPolaRuang_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'No_Ruas': 'no label', 'NAMA': 'no label', 'NAMOBJ': 'hidden field', 'POLA': 'no label', 'Panjang': 'hidden field', 'Nilai': 'no label', });
lyr_JalanBerdasarkanKondisiFisik_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'No_Ruas': 'no label', 'NAMA': 'no label', 'objectid_1': 'hidden field', 'RUAS': 'hidden field', 'Panjang_To': 'inline label - visible with data', 'Baik': 'inline label - visible with data', 'Sedang': 'inline label - visible with data', 'Rusak_Ring': 'inline label - visible with data', 'Rusak_Bera': 'inline label - visible with data', 'Lebar': 'inline label - visible with data', 'kode': 'hidden field', 'Konektivit': 'hidden field', 'NKAWASAN': 'hidden field', 'N1': 'hidden field', 'N2': 'hidden field', 'N3': 'hidden field', 'Total': 'hidden field', 'FISIK': 'hidden field', 'PRIO': 'hidden field', });
lyr_TotalPrioritasJalan_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'No_Ruas': 'no label', 'NAMA': 'no label', 'objectid_1': 'hidden field', 'RUAS': 'hidden field', 'Panjang_To': 'hidden field', 'Baik': 'hidden field', 'Sedang': 'hidden field', 'Rusak_Ring': 'hidden field', 'Rusak_Bera': 'hidden field', 'Lebar': 'hidden field', 'kode': 'hidden field', 'Konektivit': 'hidden field', 'NKAWASAN': 'hidden field', 'N1': 'hidden field', 'N2': 'hidden field', 'N3': 'hidden field', 'Total': 'hidden field', 'FISIK': 'hidden field', 'PRIO': 'no label', });
lyr_TotalPrioritasJalan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});