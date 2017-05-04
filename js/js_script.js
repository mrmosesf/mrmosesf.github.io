/**
 * Created by Moses Franco on 4/25/17
 * Codeup
 * Pinnacles
 */
(function () {

    "use strict";
    // This was done to show a modal after a delay, but in truth, should never be done, because it's kinda frustrating'
    /*setTimeout(function () {
     $('#resumeModal').modal('show');
     }, 8000);*/

    // TODO: Looks like bad code, fix it, in future might be better to detect whether or not the user is registering touch events
    if ($(window).width() < 768) {
        $('#specialDropdown').removeClass('disabled');
    }
    else {
        $('#specialDropdown').addClass('disabled');
    }

    $(window).bind("resize", function () {
        if ($(this).width() < 768) {
            $('#specialDropdown').removeClass('disabled');
        }
        else {
            $('#specialDropdown').addClass('disabled');
        }
    })

})();