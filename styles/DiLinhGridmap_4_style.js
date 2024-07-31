var size = 0;
var placement = 'point';

var style_DiLinhGridmap_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffff10";
    var bufferColor = "#000000";
    var bufferWidth = 0.1;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("fid") !== null) {
        labelText = String(feature.get("fid"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
