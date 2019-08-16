window.addEventListener("load", function () {
    var dateObject = new Date();
    var output = document.getElementById("output");
    var tempEncode;

    if (document.cookie.length == 0) {
        output.innerHTML = "Вы зашли впервые  "
    }else{

        output.innerHTML = "Последнее посещение страницы было в  " + decodeURIComponent(document.cookie);
    }
    
    document.cookie = encodeURIComponent(dateObject.toLocaleString())+"; max-age=2592000‬";
    

});