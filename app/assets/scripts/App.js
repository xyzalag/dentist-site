import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import 'owl.carousel';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
new RevealOnScroll($(".contact"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

jQuery(function ($) {
   (function () {
      $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
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
        })
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


//     (function () {
//       if ($('#googleMap').length > 0) {

//             //set your google maps parameters
//             var $latitude  = 50.061958, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
//                 $longitude = 19.919863,
//                 $map_zoom  = 16;
//             /* ZOOM SETTING */

//             //google map custom marker icon
//             var $marker_url = 'img/google-map-marker.png';

//             //set google map options
//             var map_options = {
//                 center            : new google.maps.LatLng($latitude, $longitude),
//                 zoom              : $map_zoom,
//                 panControl        : false,
//                 zoomControl       : true,
//                 mapTypeControl    : false,
//                 streetViewControl : false,
//                 mapTypeId         : google.maps.MapTypeId.ROADMAP,
//                 scrollwheel       : false,
//                 styles            : style,
//             }
//             //initialize the map
//             var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
//             //add a custom marker to the map
//             var marker = new google.maps.Marker({
//                 position : new google.maps.LatLng($latitude, $longitude),
//                 map      : map,
//                 visible  : true,
//                 icon     : $marker_url
//             });
//         }
// }());


}); // JQuery end



