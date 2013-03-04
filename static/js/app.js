var isMobile;

// Identify if visitor on mobile with lame sniffing to remove parallaxing title
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
  //var $artTime = $('.art-time');
  var artTitleFontSize = parseInt($artTitle.css('font-size'));
  var $nav = $('.nav');
  var windowScroll;
  console.log(" post section 1");

  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
  $artTitle.fitText(1, { minFontSize: '34px' });
  console.log(" post section 2");


  // Identify if visitor has a large enough viewport for parallaxing title
  function isLargeViewport() {
    if($nav.css('position') == "relative") {
      return false;
    } else {
      return true;
    }
  }
  console.log(" post section 3");

  // If large viewport and not mobile, parallax the title
  if(!isMobile) {
    $(window).scroll(function() {
      if(isLargeViewport()) {
        slidingTitle();
      }
    });
  }
  console.log(" post section 4");

  // Window gets large enough, need to recalc all parallaxing title values
  $(window).resize(function() {
    if(isLargeViewport()) {
      slidingTitle();
    }
  });
  console.log(" post section 5");

  // Functional parallaxing calculations
  function slidingTitle() {
    //Get scroll position of window
    windowScroll = $(this).scrollTop();
    //console.log("windowScroll = " + windowScroll);
    
    //Slow scroll of .art-header-inner scroll and fade it out
    $artHeaderInner.css({
      'margin-top' : -(windowScroll/3)+"px",
      'opacity' : 1-(windowScroll/550)
    });

    //Slowly parallax the background of .art-header
    $artHeader.css({
      'background-position' : 'center ' + (-windowScroll/8)+"px"
    });

    //Fade the .nav out
    $nav.css({
      'opacity' : 1-(windowScroll/400)
    });
  console.log(" post section 6");  

  }



  // Link to top of page without changing URL
  $('.back-to-top a').click(function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  })

});