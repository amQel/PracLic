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

    function hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null, str, replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }
    var $a = $("p#a").text();
    var $b = $("p#b").text();
    console.log(a);
    console.log(hexToBase64(b));
    $("#image").attr("src", "data:" + a + ";base64," + hexToBase64(b));
});