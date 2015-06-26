$(document).ready(function () {
    $('.toggle').click(function () {

        var collapse_content_selector = $(this).attr('href');

        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {

                toggle_switch.html('Change password');
            } else {
                toggle_switch.html('Do not change password');
            }
        });
    });

    var $imageDisplay = $("#image-display");

    function readSingleFile(e) {
        var file = e.target.files[0];
        if (file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e){
            $imageDisplay.html("<p>Super jest</p>");
        };
    }

    $("#image-uploader").on('change', readSingleFile, false);
});