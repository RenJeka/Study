function downloadData() {
    // создание объекта представляющего асинхронную операцию.
    var defer = new Defer();
    // иммитация запроса к серверу
    serverCall(function (request) {
        if (request.status === 200) {
            // сервер обработал запрос
            defer.resolve(request.responseText);
        } else {
            // при обработке запроса возникла ошибка
            defer.reject(new Error("Status code was " + request.status));
        }
    });
    return defer.promise;
}

function serverCall(callback) {
    // ждем 2 секунды и запускаем callback функцию передавая ей объект со свойствами status и responseText
    setTimeout(function () {
        callback({
            status: 200,
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
