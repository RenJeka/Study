var Promise = function () {
    this.successCallbacks = [];
    this.failCallbacks = [];
};

Promise.prototype = {
    successCallbacks: null, // callback функции для запуска при успешном завершении операции
    failCallbacks: null, // callback функции для запуска при возникновении ошибок

    then: function (success, fail) {
        this.successCallbacks.push(success);
        if (fail) {
            this.failCallbacks.push(fail);
        }
    }
};

var Defer = function () {
    this.promise = new Promise();
};

Defer.prototype = {
    promise: null,

    // успешно завершенная асинхронная операция.
    resolve: function (data) {
        this.promise.successCallbacks.forEach(function (callback) {
            window.setTimeout(function () {
                callback(data)
            }, 0);
        });
    },

    // асинхронная операция завершена с ошибкой.
    reject: function (error) {
        this.promise.failCallbacks.forEach(function (callback) {
            window.setTimeout(function () {
                callback(error)
            }, 0);
        });
    }
};
