$.widget( "custom.fontSizeSlider", $.ui.slider, {
    options: {
        value: 3.7,
        min: 2.4,
        max: 15,
        step: 0.1,
    },
});

$.widget( "custom.colorSlider", $.ui.slider, {
    options: {
        value: 51,
        min: 0,
        max: 255,
        step: 1,
    },
});

$( function() {
    $('#font-size-slider').fontSizeSlider().fontSizeSlider();
    $('#font-size-slider > .ui-slider-handle').css('background-color', 'rgb(255,255,255) !important');
    $('#font-size-slider > .ui-slider-handle').css('color', 'rgb(51,51,51) !important');

    $('#color-slider').colorSlider();
    $('#color-slider.ui-slider').css('background','linear-gradient(to right, black, white)');
    $('#color-slider > .ui-slider-handle').css('background-color', 'rgb(51,51,51) !important');

    $('#background-color-slider').colorSlider();
    $('#background-color-slider.ui-slider').css('background','linear-gradient(to right, white, black)');
    $('#background-color-slider > .ui-slider-handle').css('background-color', 'rgb(255,255,255) !important');

    $('#font-size-slider').fontSizeSlider({
        slide: function(event, ui) {
            $('#font-size').html(Math.round(ui.value * ui.value) + ' px');
            $('.text').css('font-size', Math.round(ui.value * ui.value) + 'px' );
            $('#font-size-slider > .ui-slider-handle').html(Math.round(ui.value * ui.value));
        },
        start: function(event, ui) {
            $('#font-size-slider > .ui-slider-handle').html(Math.round(ui.value * ui.value));
        },
        stop: function(event, ui) {
            $('#font-size-slider > .ui-slider-handle').html('');
        }
    });

    $('#color-slider').colorSlider({
        slide: function(event, ui) {
            $('#font-color').html(ui.value);
            $('body').css('color', 'rgb(' + ui.value + ',' + ui.value + ',' + ui.value + ')');
            $('#color-slider > .ui-slider-handle').css('background-color', 'rgb(' + ui.value + ',' + ui.value + ',' + ui.value + ') !important');
            $('#font-size-slider > .ui-slider-handle').css('color', 'rgb(' + ui.value + ',' + ui.value + ',' + ui.value + ') !important');
        },
        start: function(event, ui) {
            $('#color-slider > .ui-slider-handle').css('background-color', 'rgb(' + ui.value + ',' + ui.value + ',' + ui.value + ') !important');
        }
    })

    $('#background-color-slider').colorSlider({
        value: 0,
        slide: function(event, ui) {
            $('#background-color').html(255 - ui.value);
            $('body').css('background-color', 'rgb(' + (255-ui.value) + ',' + (255-ui.value) + ',' + (255-ui.value) + ')');
            $('input').css('background-color', 'rgb(' + (255-ui.value) + ',' + (255-ui.value) + ',' + (255-ui.value) + ')');
            $('#background-color-slider > .ui-slider-handle').css('background-color', 'rgb(' + (255-ui.value) + ',' + (255-ui.value) + ',' + (255-ui.value) + ') !important');
            $('#font-size-slider > .ui-slider-handle').css('background-color', 'rgb(' + (255-ui.value) + ',' + (255-ui.value) + ',' + (255-ui.value) + ') !important');
        },
        start: function(event, ui) {
            $('#background-color-slider > .ui-slider-handle').css('background-color', 'rgb(' + (255-ui.value) + ',' + (255-ui.value) + ',' + (255-ui.value) + ') !important');
        }
    })
});
