$(function() {
  $(".nav-container").waypoint({
    handler: function(direction) {
      $("nav").toggleClass('sticky', direction=='down');
    }
  });
});
