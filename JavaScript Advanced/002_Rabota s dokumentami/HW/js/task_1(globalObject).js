   
   var globalObject = {};


   globalObject.method1 =  function () {
        window.onload = function () {

            var paragraphs = document.getElementsByTagName('p');

            for (  i= 0;  i< paragraphs.length; i++) {
                paragraphs[i].innerHTML = "PARAGRAPH";
            }
        };
    };
globalObject.method1();
   