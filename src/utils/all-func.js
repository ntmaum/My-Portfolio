// // header slide fade
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
};

// contact toggle
$('#toggle').click(function () {
    $('#contact').slideToggle();
    $("svg").toggleClass("active");
});

