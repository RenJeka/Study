// Главная функция при открытии окна
window.onload=function () {
    var isOpen = false;
    var currentWindow;
    var whichOpen;
    var tempInnerHTML=[];


    //создаем массив кнопок-ссылок
    var buttons=[];
    buttons[0] = document.getElementById("link1");
    buttons[1] = document.getElementById("link2");
    buttons[2] = document.getElementById("link3");


    // создаем массив ссылок на новые страницы
    var linksArray = [];
    linksArray[0] = "extraPages/page1.html";
    linksArray[1] = "extraPages/page2.html";
    linksArray[2] = "extraPages/page3.html"; 

    // функция обработчика события на клик мыши, 
    function onClickHandler(NumberOfLink) {

        //"whichOpen" нужен для того, чтобы автоматизировать какую страницу открыть после нажатия ссылки,  "whichOpen" привязывается к индексам массивов. -1 нужен для удобства, чтобы пользователь "onClickHandler" указал в параметре номер ссылки, а не индекс в массиве.
        whichOpen = NumberOfLink-1;

        //проверяем, если "isOpen" в позиции "true" — тогда окно открыто и нужно его закрыть, если в позиции "false" — тогда окно закрыто и нужно открыть его
        if (!isOpen) {
        openWindow(linksArray[whichOpen]);
        }else{
        closeWindow();
        }
    }

    // функция для открытия окна
    function openWindow(arrayOfWindows){

        // создаем окно
        currentWindow = window.open(arrayOfWindows,"newWindow","width=100, height=100, left=100, top=100");

        // добавляем фразу
        buttons[whichOpen].innerHTML = buttons[whichOpen].innerHTML+"(страница открыта)";
        isOpen = true;

    }

    // функция для закрытия окна
    function closeWindow(){
        // закрываем окно
        currentWindow.close();

        // удаляем фразу (берем изначальное значение с массива "tempInnerHTML")
        buttons[whichOpen].innerHTML = tempInnerHTML[whichOpen];
        isOpen = false;
    }


    // СТАРТ ПРОГРАММЫ

    // копируем изначальные значения "InnerHTML"(текст ссылки)  с массива "buttons"  в массив "tempInnerHTML"
    for (var i = 0; i < buttons.length; i++) {
        tempInnerHTML[i] = buttons[i].innerHTML;       
    }
    


    buttons[0].onclick = function(){
        onClickHandler(1);
    };
    buttons[1].onclick = function(){
        onClickHandler(2);
    };
    buttons[2].onclick = function(){
        onClickHandler(3);
    };

};


// ♦Как определить, какая ссылка нажата в данный момент? ( как добраться к псевдоклассу  :active )
// ♦ Как не писать повторяющийся код в этом случае нажатия на каждую ссылку? Как лучше автоматизировать весь процесс?