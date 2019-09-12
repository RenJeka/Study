window.addEventListener("load", function () {
    function $(selector) {
        return document.querySelector(selector);
    }

    var 
        inp1    = $("#number_1"),
        inp2    = $("#number_2"),    
        btn1    = $("#count_1"),
        btn2    = $("#count_2"),
        btn3    = $("#count_3"),
        btn4    = $("#count_4"),
        output  = $("#output"),
        loader  = $(".loader");
        

    var worker1 = new Worker("js/worker1.js"),
        worker2 = new Worker ("js/worker2.js"),
        worker3 = new Worker ("js/worker3.js"),
        worker4 = new Worker ("js/worker4.js");

    var myObject = {
        inp1,
        inp2,
    }

    inp1.addEventListener("change", function () {
        myObject.inp1 = parseFloat( inp1.value);
    });
    inp2.addEventListener("change", function () {
        myObject.inp2 = parseFloat( inp2.value);
    });
    
    function verify() {
        if (inp1.value == "" || inp2.value == "") {
            return false;
        } else {
            return true;
        }
    };

    function makeWorker(worker, message = "Подождите, идет подсчет результата") {
        if (verify()) {
            console.log(myObject.inp1);
            console.log(myObject.inp2);
            worker.addEventListener("message", function (e) {
                
                // Почему добавляеться несколько строк?
                loader.style.display = "none";
                output.innerHTML = e.data + "</br>";
            });
            worker.postMessage(JSON.stringify(myObject));
            output.style.color = "black";
            loader.style.display = "block";
            output.innerHTML = message

        }else{
            output.style.color = "red";
            output.innerHTML = "Вы не ввели числа";
        }
    }
    
    btn1.addEventListener("click", function () {

        makeWorker(worker1);
                
    });

    btn2.addEventListener("click", function () {

        makeWorker(worker2);
                
    });

    btn3.addEventListener("click", function () {

        makeWorker(worker3);
                
    });

    btn4.addEventListener("click", function () {

        makeWorker(worker4, "Извините за задержку -- очень сложные вычисления");
                
    });


    






});