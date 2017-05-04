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

    if ($(window).width() < 979) {
        $('#specialDropdown').removeClass('disabled');
        console.log("Class should be removed");
    }
    else {
        $('#specialDropdown').addClass('disabled');
        console.log("Dropdown is added");
    }

})();