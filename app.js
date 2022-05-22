// kayakimg
$( "#kayaking" )
  .on( "mouseenter", function() {
    $("#kayaking-inner-con").css({
      "display": "block"
    });

    $("#kayaking-inner-con2").css({
        "display": "none"
    });
  })
  .on( "mouseleave", function() {
    $("#kayaking-inner-con").css( {
        "display": "none"
    } );
    $("#kayaking-inner-con2").css({
        "display": "block"
    });
  });


// sailing
$( "#sailing" )
  .on( "mouseenter", function() {
    $("#sailing-inner-con").css({
      "display": "block"
    });

    $("#sailing-inner-con2").css({
        "display": "none"
    });
  })
  .on( "mouseleave", function() {
    $("#sailing-inner-con").css( {
        "display": "none"
    } );
    $("#sailing-inner-con2").css({
        "display": "block"
    });
  });

// fishing
$( "#fishing" )
  .on( "mouseenter", function() {
    $("#fishing-inner-con").css({
      "display": "block"
    });

    $("#fishing-inner-con2").css({
        "display": "none"
    });
  })
  .on( "mouseleave", function() {
    $("#fishing-inner-con").css( {
        "display": "none"
    } );
    $("#fishing-inner-con2").css({
        "display": "block"
    });
  });


// pedal boat
$( "#pedal-boat" )
  .on( "mouseenter", function() {
    $("#pedal-boat-inner-con").css({
        "display": "block"
    });

    $("#pedal-boat").css({
        "background-color": "rgb(224, 71, 44)"
    });

    $("#pedal-boat-inner-con2").css({
        "display": "none"
    });
  })
  .on( "mouseleave", function() {
    $("#pedal-boat-inner-con").css( {
        "display": "none"
    } );
    $("#pedal-boat-inner-con2").css({
        "display": "block"
    });
    $("#pedal-boat").css({
        "background-color": "transparent"
    });
  });