$(function() {
    $('a').text('xJQuery').removeClass("blue")
    .addClass("bold")
    .css("color", "blue");

    $('a').click(function(event) {
        event.preventDefault();
        $(this).fadeToggle('slow');
    });
});
