(function (main) {
    main(window.jQuery, window, document);
}(function ($, window, document) {
    // global variables for this javascript
    var app = {
        hideAndShow: hideAndShowNavbar()
    };
    // on page end of charger the script execute this instructions
    $(function () {
        app.hideAndShow;
    });
    // functions
    function hideAndShowNavbar() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-64px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
}));