// var lat = 0,
// 	lon = 0,
// 	foundLocation = function(position){
// 		lat = position.coords.latitude,
// 	    lon = position.coords.longitude;
// 	},
// 	noLocation = function(){
// 		lat = -36.853282;
// 	    lon = 174.765896;
// 	}
// ;

// var currentPosition = navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
var map = L.map('map').setView([-36.853282, 174.765896], 13);

var hello = L.layerGroup([L.tileLayer('http://{s}.tiles.mapbox.com/v3/nzherald.gb3l9agk/{z}/{x}/{y}.png')]).addTo(map);