var markersData = [
  {
    position: {
      lat: -37.843843, // Широта
      lng: 144.760568 // Долгота
    },
    name: "Australia",
    status: true,
    pText: "<p>Connoisseur International Distribution Ltd C/O<br> Freight de Way Services PTE Ltd<br>115 Airport Road 08-04 Cargo Agents Bldg C<br>Changi Airfreight Centre<br>Singapore 819834<br>Tel: 006565432112<br>Fax: 006565431131<br>Email: operation@fdw.com.sg<br></p>"
    },  
  {
    position: {
      lat: -27.843843, // Широта
      lng: 0 // Долгота
    },
    name: "Canada",
    status: true // Произвольное название, которое будем выводить в информационном окне
  },
  {
    position: {
      lat: 0, // Широта
      lng: 144.760568 // Долгота
    },
    name: "China",
    status: true // Произвольное название, которое будем выводить в информационном окне
  }
];

var map, infoWindow;

function initMap() {
  var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
  var mapOptions = {
    center: centerLatLng,
    zoom: 1
  };

  map = new google.maps.Map(
    document.querySelector(".destinations-map"),
    mapOptions
  );

  // Создаем объект информационного окна и помещаем его в переменную infoWindow
  // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
  infoWindow = new google.maps.InfoWindow();

  // Отслеживаем клик в любом месте карты
  google.maps.event.addListener(map, "click", function() {
    // infoWindow.close - закрываем информационное окно.
    infoWindow.close();
  });

  // Перебираем в цикле все координата хранящиеся в markersData
  for (var i = 0; i < markersData.length; i++) {
    var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    var name = markersData[i].name;

    // Добавляем маркер с информационным окном
    addMarker(latLng, name);
  }
}
google.maps.event.addDomListener(window, "load", initMap);

// Функция добавления маркера с информационным окном
function addMarker(latLng, name) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: name
  });

  // Отслеживаем клик по нашему маркеру
  google.maps.event.addListener(marker, "click", function() {
    console.log(this);
  });
}

$(function() {
  $(".bth-toggle").click(function() {
    var number = $(this)
      .parents(".modal.fade")
      .index();
    if (markersData[number].status) {
      $(this)
        .parent()
        .find(".our-company")
        .toggleClass("hidden");
      $(this)
        .parent()
        .find(".our-company-map-block")
        .toggleClass("hidden");
      $(this)
        .parent()
        .find(".our-company-map-block")
        .html(
          "<p>" +  markersData[number].pText + "<a class=\"btn btn-info\" href=\"mailto:sales@cid.uk.com?Subject=Web Enquiries -" + markersData[number].name +
            "\">Conctact us</a></p><div class=\"our-company-map\"></div>"
        );

      var map = new google.maps.Map(
        $(this)
          .parent()
          .find(".our-company-map")[0],
        {
          zoom: 1,
          center: markersData[number].position
        }
      );

      var marker = new google.maps.Marker({
        position: markersData[number].position,
        map: map,
        title: markersData.name
      });

      markersData[number].status = false;
    } else {
      $(this)
        .parent()
        .find(".our-company")
        .toggle(".hidden");
      $(this)
        .parent()
        .find(".our-company-map-block")
        .toggle(".hidden");

      markersData[number].status = true;
      var map = null;
      var marker = null;
    }
  });
});
