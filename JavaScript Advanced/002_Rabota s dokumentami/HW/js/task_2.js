window.onload = function () {
    
        var btn_Add = document.getElementById('btn_Add');
        var task2 = {};
        var counter = 0;

        task2.addParagraph = function () {
            
            pArray = document.getElementsByTagName("p");

            var newPar= document.createElement('p');

            newPar.innerHTML = ('Новый параграф с каким-то текстом. Я не добавлял много текста сюда чтобы удобнее было просматривать пример. Горячая клавиша для быстрого добавления параграфа: alt+s');

            document.body.insertBefore(newPar, btn_Add);
            counter ++;

            if (counter >= 10) {

                for (var i = pArray.length; i > 0; i--) {
                    document.body.removeChild(pArray[pArray.length-1]);
                }
                counter = 0;

            }
        };
        // btn_Add.addEventListener("click", task2.addParagraph);
        btn_Add.onclick = task2.addParagraph;
        
};