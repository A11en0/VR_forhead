$(document).ready(function() {

    var currentIndex = "0";

    // init
    $(function () {
        $("#tab-" + currentIndex).css("box-shadow", "0 0 12px rgba(0, 0, 0, .3)");
        $("#main-" + currentIndex).fadeIn(300);
    });

    // tab click
    $(".tab-btn").click(function() {
        var id = $(this).attr("id");
        var index = id.substr(id.indexOf("-") + 1).toString();

        if (index === currentIndex) return false;

        $("#tab-" + currentIndex).css("box-shadow", "0 0 4px rgba(0, 0, 0, 0.1)");
        $("#main-" + currentIndex).fadeOut(0);

        currentIndex = index;

        $("#tab-" + currentIndex).css("box-shadow", "0 0 12px rgba(0, 0, 0, .3)");
        $("#main-" + currentIndex).fadeIn(300);
    });

});