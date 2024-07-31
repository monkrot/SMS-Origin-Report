ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5899").setExtent([37276.937862, 922166.757346, 1414099.858459, 1638168.510774]);
var wms_layers = [];


        var lyr_QuickMapServices_0 = new ol.layer.Tile({
            'title': 'QuickMapServices',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VNM_2 = new ol.format.GeoJSON();
var features_VNM_2 = format_VNM_2.readFeatures(json_VNM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_VNM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNM_2.addFeatures(features_VNM_2);
var lyr_VNM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VNM_2, 
                style: style_VNM_2,
                popuplayertitle: "VNM",
                interactive: true,
                title: '<img src="styles/legend/VNM_2.png" /> VNM'
            });
var format_LDmap_3 = new ol.format.GeoJSON();
var features_LDmap_3 = format_LDmap_3.readFeatures(json_LDmap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_LDmap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LDmap_3.addFeatures(features_LDmap_3);
var lyr_LDmap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LDmap_3, 
                style: style_LDmap_3,
                popuplayertitle: "LD@map",
                interactive: true,
                title: '<img src="styles/legend/LDmap_3.png" /> LD@map'
            });
var format_DiLinhGridmap_4 = new ol.format.GeoJSON();
var features_DiLinhGridmap_4 = format_DiLinhGridmap_4.readFeatures(json_DiLinhGridmap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_DiLinhGridmap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiLinhGridmap_4.addFeatures(features_DiLinhGridmap_4);
var lyr_DiLinhGridmap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiLinhGridmap_4, 
                style: style_DiLinhGridmap_4,
                popuplayertitle: "DiLinh@Gridmap",
                interactive: true,
                title: '<img src="styles/legend/DiLinhGridmap_4.png" /> DiLinh@Gridmap'
            });
var format_DilinhLocal_5 = new ol.format.GeoJSON();
var features_DilinhLocal_5 = format_DilinhLocal_5.readFeatures(json_DilinhLocal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_DilinhLocal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DilinhLocal_5.addFeatures(features_DilinhLocal_5);
var lyr_DilinhLocal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DilinhLocal_5, 
                style: style_DilinhLocal_5,
                popuplayertitle: "Dilinh@Local",
                interactive: true,
                title: '<img src="styles/legend/DilinhLocal_5.png" /> Dilinh@Local'
            });
var format_SMSCodeFarmerList_6 = new ol.format.GeoJSON();
var features_SMSCodeFarmerList_6 = format_SMSCodeFarmerList_6.readFeatures(json_SMSCodeFarmerList_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_SMSCodeFarmerList_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMSCodeFarmerList_6.addFeatures(features_SMSCodeFarmerList_6);
var lyr_SMSCodeFarmerList_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMSCodeFarmerList_6, 
                style: style_SMSCodeFarmerList_6,
                popuplayertitle: "SMS Code FarmerList",
                interactive: true,
                title: '<img src="styles/legend/SMSCodeFarmerList_6.png" /> SMS Code FarmerList'
            });
var group_InfraStructureMaps = new ol.layer.Group({
                                layers: [lyr_VNM_2,lyr_LDmap_3,lyr_DiLinhGridmap_4,lyr_DilinhLocal_5,lyr_SMSCodeFarmerList_6,],
                                fold: "open",
                                title: "InfraStructure Maps"});

lyr_QuickMapServices_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_VNM_2.setVisible(true);lyr_LDmap_3.setVisible(true);lyr_DiLinhGridmap_4.setVisible(true);lyr_DilinhLocal_5.setVisible(true);lyr_SMSCodeFarmerList_6.setVisible(true);
var layersList = [lyr_QuickMapServices_0,lyr_OSMStandard_1,group_InfraStructureMaps];
lyr_VNM_2.set('fieldAliases', {'NAME_0': 'NAME_0', });
lyr_LDmap_3.set('fieldAliases', {'fid': 'fid', 'LDM_adm': 'LDM_adm', });
lyr_DiLinhGridmap_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', });
lyr_DilinhLocal_5.set('fieldAliases', {'NAME_2': 'NAME_2', 'Emage': 'comon view at Di Linh', });
lyr_SMSCodeFarmerList_6.set('fieldAliases', {'No.': 'No.', 'National I': 'National I', 'FarmID': 'FarmID', 'Area(ha)': 'Area(ha)', 'Yield(mt)': 'Yield(mt)', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'Certified': 'Certified', 'Full name': 'Full name', 'Gender': 'Gender', 'Age': 'Age', 'Province': 'Province', 'Address': 'Address', 'Tel.': 'Tel.', 'Status': 'Status', });
lyr_VNM_2.set('fieldImages', {'NAME_0': 'TextEdit', });
lyr_LDmap_3.set('fieldImages', {'fid': 'TextEdit', 'LDM_adm': 'TextEdit', });
lyr_DiLinhGridmap_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', });
lyr_DilinhLocal_5.set('fieldImages', {'NAME_2': 'TextEdit', 'Emage': 'ExternalResource', });
lyr_SMSCodeFarmerList_6.set('fieldImages', {'No.': 'TextEdit', 'National I': 'TextEdit', 'FarmID': 'TextEdit', 'Area(ha)': 'TextEdit', 'Yield(mt)': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', 'Certified': 'TextEdit', 'Full name': 'TextEdit', 'Gender': 'TextEdit', 'Age': 'TextEdit', 'Province': 'TextEdit', 'Address': 'TextEdit', 'Tel.': 'TextEdit', 'Status': 'TextEdit', });
lyr_VNM_2.set('fieldLabels', {'NAME_0': 'no label', });
lyr_LDmap_3.set('fieldLabels', {'fid': 'no label', 'LDM_adm': 'inline label - always visible', });
lyr_DiLinhGridmap_4.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', });
lyr_DilinhLocal_5.set('fieldLabels', {'NAME_2': 'inline label - always visible', 'Emage': 'inline label - always visible', });
lyr_SMSCodeFarmerList_6.set('fieldLabels', {'No.': 'hidden field', 'National I': 'inline label - always visible', 'FarmID': 'inline label - always visible', 'Area(ha)': 'inline label - always visible', 'Yield(mt)': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longtitude': 'inline label - always visible', 'Certified': 'inline label - always visible', 'Full name': 'inline label - always visible', 'Gender': 'inline label - always visible', 'Age': 'inline label - always visible', 'Province': 'inline label - always visible', 'Address': 'inline label - always visible', 'Tel.': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_SMSCodeFarmerList_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});