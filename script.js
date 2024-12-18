// jQuery example: Show a welcome message
$(document).ready(function() {
  alert("Welcome to my student portfolio!");
});

// Scroll to Top button functionality
$(document).ready(function() {
  var scrollButton = $('<button>').text('Scroll to Top').addClass('scroll-top');
  $('body').append(scrollButton);

  scrollButton.click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});
