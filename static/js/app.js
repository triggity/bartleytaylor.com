
var isMobile;

//Identify if visitor on mobile with lame sniffing to remove parallaxing title
if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
  ){
  isMobile = true;
}

$(document).ready(function() {

  // Global vars
  var $artHeaderInner = $('.art-header-inner');
  var $artHeader = $('.art-header');
  var $artTitle = $('.art-title');
  var $artSubtitle = $('.art-subtitle');
  var $artTime = $('.art-time');
  var artTitleFontSize = parseInt($artTitle.css('font-size'));
  var $nav = $('#nav');
  var windowScroll;

  //initial y
  var hi = $artHeader.css("background-position"); 
  //var y = parseInt(hi.split(" ")[1].replace(/[A-Za-z$-]/g, ""));
  var y = $artHeader.height();
  var innery = $artHeaderInner.offset().top;

  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
  //$artTitle.fitText(1, { minFontSize: '34px' });

  // Identify if visitor has a large enough viewport for parallaxing title
  function isLargeViewport() {
    if($nav.css('position') == "relative") {
      return false;
    } else {
      return true;
    }
  }

  // If large viewport and not mobile, parallax the title
  if(!isMobile) {
    $(window).scroll(function() {
        slidingTitle();
    });
  }

  // Window gets large enough, need to recalc all parallaxing title values
  $(window).resize(function() {
    if(isLargeViewport()) {
      slidingTitle();
    }
  });

  // Functional parallaxing calculations
  function slidingTitle() {
    //Get scroll position of window
    windowScroll = $(this).scrollTop();

    //Slow scroll of .art-header-inner scroll and fade it out
    var moveinner =  innery  + (windowScroll);
    $artHeaderInner.css({
      'margin-top' : moveinner+"px",
      'opacity' : 1-(windowScroll/550)
    });


    //Fade the .nav out
    //$nav.css({
    //  'opacity' : 1-(windowScroll/400)
    //});
  }

  // Link to top of page without changing URL
  $('.back-to-top a').click(function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  })
  //Google Map Skin - Get more at http://snazzymaps.com/
  var myOptions = {
      zoom: 15,
      center: new google.maps.LatLng(34.159962, -118.428165),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 17
          }]
      }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 20
          }]
      }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 17
          }]
      }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 29
          }, {
              "weight": 0.2
          }]
      }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 18
          }]
      }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 16
          }]
      }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 21
          }]
      }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "visibility": "on"
          }, {
              "color": "#000000"
          }, {
              "lightness": 16
          }]
      }, {
          "elementType": "labels.text.fill",
          "stylers": [{
              "saturation": 36
          }, {
              "color": "#000000"
          }, {
              "lightness": 40
          }]
      }, {
          "elementType": "labels.icon",
          "stylers": [{
              "visibility": "off"
          }]
      }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 19
          }]
      }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 20
          }]
      }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#000000"
          }, {
              "lightness": 17
          }, {
              "weight": 1.2
          }]
      }]
  };
  
  var map = new google.maps.Map(document.getElementById('map'), myOptions);

});
