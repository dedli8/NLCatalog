$(function () {
    $( "#slider-range" ).slider({
        range: true,
        min: 510,
        max: 17000,
        values: [ 0, 11000 ],
        slide: function( event, ui ) {
            $( "#amount1" ).val( ui.values[ 0 ]);
            $( "#amount2" ).val( ui.values[ 1 ]);
        }
    });
    $( "#amount1" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val ($( "#slider-range" ).slider( "values", 1 ));
});