/*$(document).on('change', '.checkbox.lorem-ipsum', function() {
    $(".hex.lorem-ipsum").fadeToggle( 400, "swing" );
    $("h1").fadeToggle( 400, "swing" );
});

$(document).on('change', '.checkbox.call-my-name', function() {
    $(".hex.call-my-name").fadeToggle( 400, "swing" );
});*/


 $(document).on('change', '.checkbox.lorem-ipsum', function() {
    if ($(".hex.lorem-ipsum").hasClass('hide-hex')) {
        // $(".hex.lorem-ipsum").height($(".hex-lorem-ipsum").find('.hook').height());
        $(".hex.lorem-ipsum").removeClass('hide-hex');
    } else {
        // $(".hex.lorem-ipsum").height(''); 
        $(".hex.lorem-ipsum").addClass('hide-hex');
    }
});

$(document).on('change', '.checkbox.call-my-name', function() {
    if ($(".hex.call-my-name").hasClass('hide-hex')) {
        // $(".hex.call-my-name").height($(".hex-call-my-name").find('.hook').height());
        $(".hex.call-my-name").removeClass('hide-hex');
    } else {
        // $(".hex.call-my-name").height(''); 
        $(".hex.call-my-name").addClass('hide-hex');
    }
});

$(document).on('change', '.checkbox.twod-art', function() {
    if ($(".hex.twod-art").hasClass('hide-hex')) {
        $(".hex.twod-art").removeClass('hide-hex');
    } else {
        $(".hex.twod-art").addClass('hide-hex');
    }
});