
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
    //console.log("slidingtitle");
    //Get scroll position of window
    windowScroll = $(this).scrollTop();

    //Slow scroll of .art-header-inner scroll and fade it out
    var moveinner =  innery  + (windowScroll);
    $artHeaderInner.css({
      'margin-top' : moveinner+"px",
      'opacity' : 1-(windowScroll/550)
    });

    //Slowly parallax the background of .art-header
    //var move = y - 683 + (windowScroll/2);
    //$artHeader.css({
    //  'background-position' : 'left ' + move+"px"
    //});

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

});