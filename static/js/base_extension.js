$(document).ready(function() {

  // White navbar
  function bgWhite() {
    $('.header').addClass('bg-white');
  }

  function bgHoverWhite() {
    bgWhite();
    $('.header').addClass('bg-hover-white');
  }

  // Navbar not fixed to the top
  function navbarNotFixedTop() {
    $('.header').removeClass('fixed-top');
  }

  // Navbar fixed to the top
  function navbarFixedTop() {
    $('.header').addClass('fixed-top');
  }

  // Hide the navbar collapse menu
  function hideNavbarCollapseMenu() {
    $('.navbar-collapse').removeClass('show');
    $('#main-nav').removeClass('navbar-mobile');
    $('#main-nav').addClass('navbar-desktop');
  }

  // Initialisation (page not scrolled)
  function init() {
    bgHoverWhite();
    navbarNotFixedTop();
  }

  // Trigger the click event on the navbar-toggler class element
  $('.navbar-toggler').click(function(event) {
    $('#main-nav').toggleClass('navbar-mobile');
    $('#main-nav').toggleClass('navbar-desktop');
    $('.header').toggleClass('fixed-top');
  });

  // Trigger the click event on the wrapper class element
  $('.wrapper').click(function(event) {
    if ($('.navbar-mobile#main-nav').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  // Trigger the click event on the mobile-user-options id element
  $('#mobile-user-options').click(function(event) {
    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
      // When scroll down display a bottom border in the fixed navbar
      if ($(window).scrollTop() == 0) {
        //This code will execute when when the scrollbar is on the top
        navbarNotFixedTop();
      } else {
        //This code will execute when the scrollbar is not on the top
        navbarFixedTop();
      }
    }
  });

  // Trigger the click event on the mobile-gallery id element
  $('#mobile-gallery').click(function(event) {
    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
      // When scroll down display a bottom border in the fixed navbar
      if ($(window).scrollTop() == 0) {
        //This code will execute when when the scrollbar is on the top
        navbarNotFixedTop();
      } else {
        //This code will execute when the scrollbar is not on the top
        navbarFixedTop();
      }
    }
  });

  // Trigger the click event on the mobile-search id element
  $('#mobile-search').click(function(event) {
    // Reset the value of the text input
    $('.dropdown-menu-mobile-search input').val('');

    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  // Trigger the click event on the footer class element
  $('.footer').click(function(event) {
    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  // When scroll down display a bottom border in the fixed navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
      //This code will execute when when the scrollbar is on the top
      navbarNotFixedTop();
    } else {
      //This code will execute when the scrollbar is not on the top
      navbarFixedTop();
    }
  });

  init();

  // Toast notifications
  $('.toast').toast({
    autohide: true,
    delay: 3000
  });

  $('.toast').toast('show');

  // Connect links zoom when hovered
  $('.connect-links a i').hover(function() {
    // This code will execute when mouse enters the header class element;
    $(this).addClass('fa-lg');
  }, function() {
    // This code will execute when mouse leaves the header class element
    $(this).removeClass('fa-lg');
  });

  // Go to the top of the page
  $('.btt-button-top').click(function(e) {
    window.scrollTo(0, 0);
  });

  // Go to the bottom of the page
  $('.btt-button-down').click(function(e) {
    window.scrollTo(0, document.body.scrollHeight);
  });
});
