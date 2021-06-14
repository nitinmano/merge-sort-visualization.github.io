// Create default array
const defaultArray = [10, 7, 20, 5, 11, 3, 8, 6];
let $container = displayArray(defaultArray);
let miliseconds = {value: 800};

function unsort(arr) {
    $container = displayArray(arr);
}

/**
 * @public 
 * @returns {Jquery Object} A container with an array that can be animated
 */
function getArrayValue() {
    return $container;
}

/**
 * @public 
 * @returns {Javascript Object} An object containing the value for the animation miliseconds
 */
function getTimeout() {
    return miliseconds;
}

$(document).ready(() => {

    // Side Menu

    $('#settings-btn').click(() => {
        $('#settings').css('transform', "translateX(400px)");
        $("header").animate({opacity: 0.5}, {duration: 400});
        $("main").animate({opacity: 0.5}, {duration: 400});
    });
    $('#close-menu').click(() => {
        $('#settings').css('transform', 'translateX(0)');
        $("header").animate({opacity: 1}, {duration: 400});
        $("main").animate({opacity: 1}, {duration: 400});
    });

    // Save Settings Button 

    $('#save-settings').click(() => {
        try {
            if ($('#arr').val() != '') {
                let arr = parse($('#arr').val());
                $container = displayArray(arr);
                sorted = false;
            }
            $("#settings-error").text("");
            if ($('#timeout').val() < 0) {
                $("p#success").text("");
                $("#settings-error").text("Timeout cannot be negative");
                return;
            }
            miliseconds.value = $("#timeout").val() !== '' ? 
                $("#timeout").val() : miliseconds.value;
            
            $('p#success').text('Saved!');
        }
        catch (e) {
            $("p#success").text("");
            $('#settings-error').text(e);
        }
    });

});