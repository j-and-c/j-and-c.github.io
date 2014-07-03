/* global $, L*/
$(document).ready(function () {
    'use strict';
    
    var map = L.mapbox.map('map', 'examples.map-i86nkdio', {center: [39.730227, -121.772449],
                                                            zoom: 10,
                                                            minZoom: 5,
                                                            maxZoom: 16
                                                           }),

    geojson = (function () {
            var geojson = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'json/chico.geojson',
                'dataType': "json",
                'success': function (data) {
                    geojson = data;
                }
            });
            return geojson;
        }());
    
    for (var i = 0; i<geojson.features.length; i++) {
 
             var a = geojson.features[i].geometry.coordinates;
             var name = geojson.features[i].properties.name;
             var description = geojson.features[i].properties.description;
             var address = geojson.features[i].properties.address;
             var image = geojson.features[i].properties.image;
             var marker = L.marker(new L.LatLng(a[1], a[0]), {
                        icon: L.icon(geojson.features[i].properties.icon)
             });
             marker.bindPopup('<h1>' + name + '</h1>' +
                              '<p>' + description +'</p>' +
                              '<p class="address">' + address + '</p>' +
                              '<img src="' + image + '" />', 
                              {'closeButton': false, className: 'popup'});
             map.addLayer(marker);
            }
    
});
                    
                                        