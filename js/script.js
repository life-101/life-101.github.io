$(".expand").click(function () {

    $button = $(this);
    //getting the next element
    $content = $button.parent().prev();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of button based on visibility of content div
        if ($content.is(':visible'))
        $content.css('display','flex');

        $button.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Read less" : "Read more";
        });
    });
    /*console.log($content);*/

});

$(".hidden").css( "display", "none");
/*
$( ".expand" ).on( "mouseover", function() {
  $( this ).css( "background", "#333" );
  $( this ).css( "color", "#FFF" );
});
$( ".expand" ).on( "mouseout", function() {
  $( this ).css( "background", "#FFF" );
  $( this ).css( "color", "#000" );
});*/