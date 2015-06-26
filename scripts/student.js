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

    var $editForm = $("form");
    var $provinceSelection = $editForm.find('select[name=province]');
    var $citySelection = $editForm.find('#citiesCheck');

    $provinceSelection.on("change", function () {
        $citySelection.load('./citiesCheck/' + $(this).children(":selected").attr("id"));
    });
});