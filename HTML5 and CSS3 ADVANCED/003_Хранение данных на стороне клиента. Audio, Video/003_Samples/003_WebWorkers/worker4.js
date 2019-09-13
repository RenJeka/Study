onmessage = function (e) {
    transport = new XMLHttpRequest();
    transport.open('GET', 'message.txt', true);
    transport.onreadystatechange = function () {
        if (transport.readyState == 4) {
            postMessage(transport.response);
        }
    };
    transport.send();
};