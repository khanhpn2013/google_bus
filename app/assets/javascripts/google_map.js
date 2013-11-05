google.maps.visualRefresh = true;
var map;
function initialize() {
  var mapOptions = {
    zoom: 18,
    center: new google.maps.LatLng(10.7714015, 106.70627820000004),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }
google.maps.event.addDomListener(window, 'load', initialize);