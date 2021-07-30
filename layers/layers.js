var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_1920SanbornMap_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "1920 Sanborn Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1920SanbornMap_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9243981.308600, 3392455.030600, -9242196.568700, 3394086.396400]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleRoad_2.setVisible(false);lyr_1920SanbornMap_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_GoogleRoad_2,lyr_1920SanbornMap_3];
