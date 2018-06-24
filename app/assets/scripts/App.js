import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import 'owl.carousel';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();




//IE FIX FOR SHAKY BACKGROUND - PARALLAX
if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
    $('body').on("mousewheel", function (event) {
        // remove default behavior
        event.preventDefault(); 

        //scroll without smoothing
        var wheelDelta = event.wheelDelta;
        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
}    

// Znany Lekarz - Widget
!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//www.docplanner-platform.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");



jQuery(function ($) {

  'use strict';
//      (function () {
//       $(document).ready(function() {
 
//    });
// }());

   (function () {
      $(document).ready(function(){
      // Automatically load reviews from Google location account and append them to owl recommendation carousel
//fetch reviews from Google API in JSON
var googleAPI="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJDUhcRqKVFkcRBFG3CKyWqrM&fields=review&key=AIzaSyCMPw99oS6ha9M4ufOSp0tcA450Qd7sbNk";
$.getJSON(googleAPI, function(data){
  var reviewsArray = data["result"]["reviews"];
  var i; 
    for (i in reviewsArray) {
      //for each review extract text and author's name
      var review = reviewsArray[i];
      var reviewText = review.text;
      var reviewAuthor = review.author_name;
      var count = i; 

      if (reviewText !== "") {
        //create a new div for a new quote 
        var reviewsCarousel = document.querySelector(".recommendation-carousel");
        var reviewsItem = document.createElement("div");
        $(reviewsItem).addClass("recommendation-carousel__item");
        var reviewsHeading = document.createElement("h2");
        $(reviewsHeading).addClass("recommendation-carousel__quote");
        var reviewsHeadingText = document.createTextNode("“"+ reviewText + "”");
        reviewsHeading.appendChild(reviewsHeadingText);
        reviewsItem.appendChild(reviewsHeading);

        //create source span with author's name
        var reviewsSmall = document.createElement("small");
        $(reviewsSmall).addClass("recommendation-carousel__source");
        var reviewsSmallText = document.createTextNode(reviewAuthor);
        reviewsSmall.appendChild(reviewsSmallText);
        reviewsItem.appendChild(reviewsSmall);

        reviewsCarousel.appendChild(reviewsItem);
        count ++; 
    };
  };
        if (count >=4) {
                    $('.recommendation-carousel').owlCarousel({
            nav: true,
            navText: ["◀","▶"],
            items: 1,
            loop:true,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 500,
            autoplayHoverPause:true,
            margin:10,
            touchDrag: true,
        });
                  };
    });
});
}());

   (function () {
      $(document).ready(function() {
        $("#read-more-button").click(function() {
          var elem = $("#read-more-button").text();
        if (elem == "Więcej...") {
          $("#read-more-button").text("Mniej...");
          $("#read-more-content").slideDown();
        } else {
          $("#read-more-button").text("Więcej...");
          $("#read-more-content").slideUp();
        }
      });
    });
}());


   (function () {
    $(document).ready(function() {
      $(".read-more").click(function() {
        $(".read-more-text").show();
      });
      $(".read-less").click(function() {
        $(".read-more-text").hide();
      }); 
    });
}());


(function () {
        if ($('#googleMap').length > 0) {

            //set your google maps parameters
            var $latitude  = 50.024763, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude = 19.224779,
                $map_zoom  = 16;
            /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = './assets/images/google-map-marker.png';

            //we define here the style of the map
            var style = [
            {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ];

            //set google map options
            var map_options = {
                center            : new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : false,
                zoomControl       : true,
                mapTypeControl    : false,
                streetViewControl : false,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : false,
                styles            : style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }
    }());



}); // JQuery end



