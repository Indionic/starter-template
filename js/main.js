
////  ////
// Maps //
////  ////

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 13,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(-31.959524, 115.856158), // Perth

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
  };

  var FloreatString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Floreat Location</h1>'+
  '<div id="bodyContent">'+
  '<p><strong>Address:</strong><br>5 Howtree Pl, Floreat WA 6014</p>'+
  '<p><strong>Phone:</strong><br>(08) XXXX XXXX</p>'+
  '<p><strong>Opening Hours:</strong><br>Sunday: 10am-8:30pm<br>Monday-Wednesday: 8:30am-8:30pm<br>Thursday-Saturday: 8:30am-9pm</p>'+
  '</div>'+
  '</div>';

  var VicParkString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Victoria Park Location</h1>'+
  '<div id="bodyContent">'+
  '<p><strong>Address:</strong><br>910 Albany Hwy,<br>East Victoria Park WA 6101</p>'+
  '<p><strong>Phone</strong>:<br>(08) XXXX XXXX</p>'+
  '<p><strong>Opening Hours:</strong><br>Sunday-Thursday: 11am-9:30pm<br>Friday-Saturday: 11:00am-10:00pm</p>'+
  '</div>'+
  '</div>';

  var ElizabethQuayString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Elizabeth Quay Location</h1>'+
  '<div id="bodyContent">'+
  '<p><strong>Address:</strong><br> Elizabeth Quay Station Park<br> Next to BHP Billiton Water Park</p>'+
  '<p><strong>Phone</strong>:<br>(08) XXXX XXXX</p>'+
  '<p><strong>Opening Hours:</strong><br>Sunday-Thursday: Lunch<br>Friday-Saturday: Lunch &amp; Dinner</p>'+
  '</div>'+
  '</div>';

  var infowindowFloreat = new google.maps.InfoWindow({
    content: FloreatString
  });

  var infowindowVicPark = new google.maps.InfoWindow({
    content: VicParkString
  });

  var infowindowElizabethQuay = new google.maps.InfoWindow({
    content: ElizabethQuayString
  });

// Get the HTML DOM element that will contain your map
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById('map');

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

var markerFloreat = new google.maps.Marker({
	position: {lat: -31.936203,  lng: 115.792961},
	map: map,
	title: 'Floreat Location'
});
markerFloreat.addListener('click', function() {
	infowindowFloreat.open(map, markerFloreat);
});

var markerVicPark = new google.maps.Marker({
  position: {lat: -31.987114, lng: 115.904968},
	map: map,
	title: 'Victoria Park Location'
});
markerVicPark.addListener('click', function() {
	infowindowVicPark.open(map, markerVicPark);
});

var markerElizabethQuay = new google.maps.Marker({
  position: {lat: -31.957366, lng: 115.855880},
  map: map,
  title: 'Elizabeth Quay Location'
});
markerElizabethQuay.addListener('click', function() {
  infowindowElizabethQuay.open(map, markerElizabethQuay);
});
}
