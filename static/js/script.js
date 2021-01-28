/*$(document).on('change', '.checkbox.lorem-ipsum', function() {
    $(".hex.lorem-ipsum").fadeToggle( 400, "swing" );
    $("h1").fadeToggle( 400, "swing" );
});

$(document).on('change', '.checkbox.daughters-nemesis', function() {
    $(".hex.daughters-nemesis").fadeToggle( 400, "swing" );
});*/


 $(document).on('change', '.checkbox.nemesis-anti', function() {
    if ($(".hex.nemesis-anti").hasClass('hide-hex')) {
        // $(".hex.lorem-ipsum").height($(".hex-lorem-ipsum").find('.hook').height());
        $(".hex.nemesis-anti").removeClass('hide-hex');
    } else {
        // $(".hex.lorem-ipsum").height(''); 
        $(".hex.nemesis-anti").addClass('hide-hex');
    }
});

$(document).on('change', '.checkbox.nemesis-pro', function() {
    if ($(".hex.nemesis-pro").hasClass('hide-hex')) {
        // $(".hex.daughters-nemesis").height($(".hex-daughters-nemesis").find('.hook').height());
        $(".hex.nemesis-pro").removeClass('hide-hex');
    } else {
        // $(".hex.daughters-nemesis").height(''); 
        $(".hex.nemesis-pro").addClass('hide-hex');
    }
});

$(document).on('change', '.checkbox.threed-art', function() {
    if ($(".hex.threed-art").hasClass('hide-hex')) {
        $(".hex.threed-art").removeClass('hide-hex');
    } else {
        $(".hex.threed-art").addClass('hide-hex');
    }
});

$(document).on('change', '.checkbox.character-design', function() {
    if ($(".hex.character-design").hasClass('hide-hex')) {
        $(".hex.character-design").removeClass('hide-hex');
    } else {
        $(".hex.character-design").addClass('hide-hex');
    }
});

$(document).on('change', '.checkbox.illustration', function() {
    if ($(".hex.illustration").hasClass('hide-hex')) {
        $(".hex.illustration").removeClass('hide-hex');
    } else {
        $(".hex.illustration").addClass('hide-hex');
    }
});