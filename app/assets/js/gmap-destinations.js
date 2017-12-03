$(function() {
  var myLatlng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.querySelector('.destinations-map'), {
    zoom: 1,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Australia'
  });

  marker.addListener('click', function() {
  	$('#destinations-1').modal('show')
  });
})