$(document).ready(function () {
  redrawDotNav();

  //will need a debounce in here
  window.addEventListener("scroll", function () {
    parallaxScroll();
    redrawDotNav();
  });

  /* Next/prev and primary nav btn click handlers */
  $("a.manned-flight").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000,
      function () {
        parallaxScroll(); // Callback is required for iOS
      }
    );
    return false;
  });
  $("a.frameless-parachute").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#frameless-parachute").offset().top,
      },
      1000,
      function () {
        parallaxScroll(); // Callback is required for iOS
      }
    );
    return false;
  });
  $("a.english-channel").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#english-channel").offset().top,
      },
      1000,
      function () {
        parallaxScroll(); // Callback is required for iOS
      }
    );
    return false;
  });
  $("a.about").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      1000,
      function () {
        parallaxScroll(); // Callback is required for iOS
      }
    );
    return false;
  });

  /* Show/hide dot lav labels on hover */
  $("nav#primary a").hover(
    function () {
      $(this).prev("h1").show();
    },
    function () {
      $(this).prev("h1").hide();
    }
  );
});

/* Scroll the background layers */
function parallaxScroll() {
  const scrolled = window.scrollY;
  const bg1 = document.getElementById("parallax-bg1");
  const bg2 = document.getElementById("parallax-bg2");
  const bg3 = document.getElementById("parallax-bg3");

  bg1.style.top = 0 - scrolled * 0.25 + "px";
  bg2.style.top = 0 - scrolled * 0.5 + "px";
  bg3.style.top = 0 - scrolled * 0.75 + "px";
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav() {
  var section1Top = 0;
  // The top of each section is offset by half the distance to the previous section.
  var section2Top =
    $("#frameless-parachute").offset().top -
    ($("#english-channel").offset().top -
      $("#frameless-parachute").offset().top) /
      2;
  var section3Top =
    $("#english-channel").offset().top -
    ($("#about").offset().top - $("#english-channel").offset().top) / 2;
  var section4Top =
    $("#about").offset().top -
    ($(document).height() - $("#about").offset().top) / 2;
  $("nav#primary a").removeClass("active");
  if (
    $(document).scrollTop() >= section1Top &&
    $(document).scrollTop() < section2Top
  ) {
    $("nav#primary a.manned-flight").addClass("active");
  } else if (
    $(document).scrollTop() >= section2Top &&
    $(document).scrollTop() < section3Top
  ) {
    $("nav#primary a.frameless-parachute").addClass("active");
  } else if (
    $(document).scrollTop() >= section3Top &&
    $(document).scrollTop() < section4Top
  ) {
    $("nav#primary a.english-channel").addClass("active");
  } else if ($(document).scrollTop() >= section4Top) {
    $("nav#primary a.about").addClass("active");
  }
}
