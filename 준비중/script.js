$(function () {

    var marquee = $("#marquee");
    marquee.css({ "overflow": "hidden", "width": "100%" });

    // wrap "My Text" with a span (IE doesn't like divs inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align": "center" });
    marquee.append(marquee.find("span").clone()); // now there are two spans with "My Text"

    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    var reset = function () {
        $(this).css("margin-left", "-100%");
        $(this).animate({ "margin-left": "0%" }, 10000, 'linear', reset);
    };

    reset.call(marquee.find("div"));

});