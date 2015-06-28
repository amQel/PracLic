"use strict"

$(document).ready(function () {
    var $editForm = $("form");
    var $divCities = $("#changeCities");
    var $provinceSelection = $editForm.find('select[name=province]');
    var $citySelection = $editForm.find('#citiesCheck');

    $divCities.toggle();

    $provinceSelection.load('./cities/provinces');

    $provinceSelection.on("change", function () {
        $citySelection.load('./cities/' + $(this).children(":selected").attr("id"));
    });
});