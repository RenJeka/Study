var Promise = function () {
    this.successCallbacks = [];
    this.failCallbacks = [];
};

Promise.prototype = {
    successCallbacks: null, // callback ������� ��� ������� ��� �������� ���������� ��������
    failCallbacks: null, // callback ������� ��� ������� ��� ������������� ������

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

    // ������� ����������� ����������� ��������.
    resolve: function (data) {
        this.promise.successCallbacks.forEach(function (callback) {
            window.setTimeout(function () {
                callback(data)
            }, 0);
        });
    },

    // ����������� �������� ��������� � �������.
    reject: function (error) {
        this.promise.failCallbacks.forEach(function (callback) {
            window.setTimeout(function () {
                callback(error)
            }, 0);
        });
    }
};
