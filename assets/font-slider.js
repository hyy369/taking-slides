$.widget( "custom.fontSizeSlider", $.ui.slider, {
    // value: 7,
    // min: 1,
    // max: 35,
    // step: 1,
    // slide: function() {
    //     var aFontsSizeArray = new Array('5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '26', '28', '30', '33', '36', '39', '42', '45', '48', '55', '65', '75', '85', '95', '110', '130', '150');
    //     var sFontSizeArray = aFontsSizeArray[this.value];
    //     $('#font_size').val(this.value + ' px');
    //     $('.text').css('font-size', sFontSizeArray + 'px' );
    // }
});

$.widget( "custom.colorSlider", $.ui.slider, {
    min: 0,
    max: 255,
    step: 1,
});

$( function() {
    $( "#font-size-slider" ).fontSizeSlider().fontSizeSlider();
    $( "#color-slider" ).colorSlider();
    $( "#background-color-slider" ).colorSlider();
});

$(function() {
    var aFontsSizeArray = new Array('5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '26', '28', '30', '33', '36', '39', '42', '45', '48', '55', '65', '75', '85', '95', '110', '130', '150');
    $('#font-size-slider').fontSizeSlider({
        value: 3.7,
        min: 2.4,
        max: 15,
        step: 0.1,
        slide: function(event, slider) {
            $('#font-size').val(Math.round(slider.value * slider.value) + ' px');
            $('.text').css('font-size', Math.round(slider.value * slider.value) + 'px' );
        }
    });

    $('#color-slider').colorSlider({
        value: 51,
        min: 0,
        max: 255,
        step: 1,
        slide: function(event, slider) {
            // var sFontSizeArray = aFontsSizeArray[ui.value];
            $('#font-color').val(slider.value + ' px');
            // $('.text').css('color', 'rgb(' + slider.value + ',' + slider.value + ',' + slider.value + ')');
            $('body').css('color', 'rgb(' + slider.value + ',' + slider.value + ',' + slider.value + ')');
        }
    })

    $('#background-color-slider').colorSlider({
        min: 0,
        max: 255,
        step: 1,
        slide: function(event, slider) {
            // var sFontSizeArray = aFontsSizeArray[ui.value];
            $('#background-color').val(255 - slider.value + ' px');
            // $('.text').css('color', 'rgb(' + slider.value + ',' + slider.value + ',' + slider.value + ')');
            $('body').css('background-color', 'rgb(' + (255-slider.value) + ',' + (255-slider.value) + ',' + (255-slider.value) + ')');
            $('input').css('background-color', 'rgb(' + (255-slider.value) + ',' + (255-slider.value) + ',' + (255-slider.value) + ')');
        }
    })
});
