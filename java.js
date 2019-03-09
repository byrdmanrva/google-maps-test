var userLat;
var userLng;
var map;
var service;
var place;
var infowindow;

function initMap() {
    place = new google.maps.LatLng(userLat,userLng);
    map = new google.maps.Map(document.getElementById('map'), {
    center: place,
    zoom: 8
    });

    var request = {
        location: place,
        radius: '5000',
        type: ['jiu jitsu gym']
      };

    0
    service.nearbySearch(request, callback);
}


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var location = results[i];
        createMarker(results[i]);
      }
    }
  }

var geocoded = "https://maps.googleapis.com/maps/api/geocode/json?address=23228&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc"
$.getJSON(geocoded, function(result){
    userLat = parseInt(result.results[0].geometry.location.lat)
    userLng = parseInt(result.results[0].geometry.location.lng)
})

// var gymMarkersUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=jiu+jitsu+gym&location=42.3675294,-71.186966&radius=1000&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc&libraries=places"
// $.ajax({
//     url: gymMarkersUrl, 
//     type: "GET",   
//     dataType: 'jsonp',
//     cache: false,
//     success: function(response){                          
//         alert(response);
//         console.log(response)                   
//     }           
// }); 

// axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=jiu+jitsu+gym&location=42.3675294,-71.186966&radius=1000&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc&libraries=places")
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });