$(document).ready(function(){
    // initialize sidenav for mobile
    $('.sidenav').sidenav();

    // slide from right
    $('.sidenav').sidenav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    // show color icon on hover
    $('.social-link').hover(function() {
      $(this).children().toggleClass('hide');
    });
  
});