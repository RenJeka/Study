function downloadData() {
    // Использование конструктора Promise (ECMAScript 6)
    var p1 = new Promise(function (resolve, reject) {
        serverCall(function (request) {
            if (request.status === 200) {
               resolve(request.responseText);
            } else {
                reject(new Error("Status code was " + request.status));
            }
        });
    });
    
    return p1;
}

function serverCall(callback) {
    setTimeout(function(){
        callback({
            status:200,
            responseText: "Данные полученные с сервера."
        });
    }, 2000);

    /*setTimeout(function(){
     callback({
     status:500,
     responseText: "Internal Server Error"
     });
     }, 2000);*/
}