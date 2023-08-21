$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbarr").addClass("act");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("act");
        }
    });
});