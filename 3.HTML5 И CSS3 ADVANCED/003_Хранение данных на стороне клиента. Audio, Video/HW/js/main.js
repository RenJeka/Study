window.addEventListener("load", function () {
    function $(selector) {
        return document.getElementById(selector);
    }

    var 
        inp1    = $("number_1"),
        inp2    = $("number_2"),
        btn1    = $("count_1"),
        btn2    = $("count_2"),
        btn3    = $("count_3"),
        btn4    = $("count_4"),
        output  = $("output");

        var worker1 = new Worker("worker1.js");
        var worker2 = new Worker ("worker2.js");
        var worker3 = new Worker ("worker3.js");
        var worker4 = new Worker ("worker4.js");

        btn1.addEventListener("click", function () {
            worker1.addEventListener("message", function (e) {
                output.innerHTML += e.data + "</br>";
                console.log(111)
            })
            worker1.postMessage("some data");
        });


        // btn2.addEventListener("click", function () {
        //     worker2.addEventListener("message", function (e) {
        //         output.innerHTML += e.data + "</br>";
        //     })
        //     worker2.postMessage("some data");
        // });


        // btn3.addEventListener("click", function () {
        //     worker3.addEventListener("message", function (e) {
        //         output.innerHTML += e.data + "</br>";
        //     })
        //     worker3.postMessage("some data");
        // });


        // btn4.addEventListener("click", function () {
        //     worker4.addEventListener("message", function (e) {
        //         output.innerHTML += e.data + "</br>";
        //     })
        //     worker4.postMessage("some data");
        // });






});