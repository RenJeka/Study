window.addEventListener("load", function () {
    function $(selector) {
        return document.getElementById(selector);
    }

    var 
        inp1    = $("number_1"),
        inp2    = $("number_2"),
        btn1    = $("number_2"),
        btn2    = $("number_2"),
        btn3    = $("number_2"),
        btn4    = $("number_2"),
        output  = $("output");

        var worker1 = new Worker ("worker1.js");
        var worker2 = new Worker ("worker2.js");
        var worker3 = new Worker ("worker3.js");
        var worker4 = new Worker ("worker4.js");





});