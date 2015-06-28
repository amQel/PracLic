"use strict";

$(document).ready(function () {
    var $searchForm = $("form");
    var $divCities = $("#city");
    var $provinceSelection = $searchForm.find('select[name=province]');
    var $citySelection = $searchForm.find('select[name=city]');
    var $subjectSelection = $searchForm.find('select[name=subject]');
    var $levelSelection = $searchForm.find('select[name=level]');

    $provinceSelection.load('./cities/provinces');
    $subjectSelection.load('./cities/subjects');
    $levelSelection.load('./cities/levels');

    $provinceSelection.on("change", function () {
        $citySelection.load('./cities/' + $(this).children(":selected").attr("id"));
    });
});