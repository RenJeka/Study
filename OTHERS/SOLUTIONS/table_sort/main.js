"use strict";
window.addEventListener("load", () => {
    let overlay = document.querySelector("#modalBg");
    let modalBody = document.querySelector("#modal-body");
    let bigImg = document.querySelector("#big-img");
    const TABLE_ID = "tableSort";
    const AVOID_PROPERTY_NAME = "other"; // Свойство в данных, которое не нужно выводить в таблицу
    const FETCH_URL = "data_2.json";
    const LINK_NAME = "Ссылка";
    overlay.addEventListener("click", closeModal);
    /**
     * Функция задает правильные размеры картинке и ограничиваемому блоку и размещает картинку
     * @param image {HTMLImageElement} изображение, которое будет выводится в центр екрана
     */
    function displayToModal(image) {
        let coefficientWidth = +((((window.innerWidth / image.naturalWidth)) + 1) / 2).toFixed(2);
        let coefficientHeight = +((((window.innerHeight / image.naturalHeight)) + 1) / 2).toFixed(2);
        let modalWidth;
        let modalHeight;
        bigImg.src = image.src;
        // Задаем правильные размеры картинке и ограничивающему блоку
        modalWidth = image.naturalWidth * coefficientWidth;
        modalHeight = image.naturalHeight * coefficientHeight;
        modalBody.style.width = modalWidth + "px";
        modalBody.style.height = modalHeight + "px";
        // Для того, чтобы работала адаптвность (свойсвто object-fit — задаем разные размеры картинке
        if (modalWidth >= image.naturalWidth) {
            bigImg.style.height = "100%";
            bigImg.style.width = "auto";
        }
        else if (modalHeight >= image.naturalHeight) {
            bigImg.style.height = "auto";
            bigImg.style.width = "100%";
        }
        // Показываем оверлей, ограничивающий блок и размещаем там картинку 
        modalBody.classList.toggle("modal-body_visible");
        modalBody.appendChild(bigImg);
        overlay.style.display = "block";
    }
    /**
     * Закрывает модальное окно при клике на серой области (Overlay)
     * @param e Событие мыши
     */
    function closeModal(e) {
        if (e.target !== bigImg) {
            overlay.style.display = "none";
            modalBody.classList.remove("modal-body_visible");
        }
    }
    // Функция пробегается по массиву картинок и устанавливает обработчики событий на клики
    function setTableImageClickHandler() {
        let arrTableImages = document.querySelectorAll("table img");
        arrTableImages.forEach((image) => {
            image.addEventListener("click", () => {
                displayToModal(image);
                console.log("set");
            });
        });
    }
    function getData(url) {
        return fetch(url);
    }
    /**
     * Функция создает таблицу на основе массива с данными, которые мы передадим в аргумент
     * @param dataArray Массив с данными (объктами, с которых будет создаваться таблица)
     */
    function fillTable(tableID, dataArray) {
        const TABLE = document.querySelector(`#${tableID}`);
        const THEAD = TABLE.querySelector("thead");
        const TBODY = TABLE.querySelector("tbody");
        /**
         * @param objectKeys объект, по ключам которого создадутся названия колонок таблицы (<th>)
         */
        function fillTableHeader(objectKeys) {
            // Пробегаемся по ключам и создаем <th>, и заполняем его (названием ключа объекта)
            objectKeys.forEach((thName) => {
                if (thName === AVOID_PROPERTY_NAME) {
                    return;
                }
                const TH = document.createElement("th");
                TH.innerHTML = thName;
                THEAD.appendChild(TH);
            });
            return THEAD;
        }
        /**
         *
         * @param arrObjects массив объект в качестве данных
         */
        function fillTableBody(arrObjects) {
            function isImageORLink(property) {
                const TEST_STRING_FOR_HTTP = property.slice(0, 8); // Берем последние 4 символа строки, чтобы узнать расширение
                const TEST_STRING_FOR_IMG = property.slice(-5); // Берем последние 4 символа строки, чтобы узнать расширение
                const REGEXP_HTTP = /(https\:\/\/)|(http\:\/\/) /;
                const REGEXP_IMAGES = /(\.jpeg)|(\.jpg)|(\.png)|(\.gif)|(\.svg) /;
                // Проверяем, это ссылка, картинка или просто текст
                if (REGEXP_HTTP.test(TEST_STRING_FOR_HTTP) && REGEXP_IMAGES.test(TEST_STRING_FOR_IMG)) {
                    console.log("Совпадение. Картинка", property);
                    return "image";
                }
                else if (REGEXP_HTTP.test(TEST_STRING_FOR_HTTP)) {
                    console.log("Совпадение. Ссылка", property);
                    return "link";
                }
                else {
                    return "text";
                }
            }
            arrObjects.forEach((obj) => {
                const TR = document.createElement("tr");
                let arrTableDataCellNames = Object.values(obj);
                // let isPropertyImageOrLink: imageOrLink;
                // Создание и заполнение ячейки TD
                arrTableDataCellNames.forEach((tdContent) => {
                    const TD = document.createElement("td");
                    // Проверка, что свойство JSON объекта не специально зарезервированное свойство, которое не нужно вносить в таблицу. (Вывод свойства нужно избежать)
                    if (tdContent === AVOID_PROPERTY_NAME) {
                        return;
                    }
                    // Проверка на то, что свойство JSON объекта имеент вложенный объект
                    if (tdContent === "[object Object]") {
                        tdContent = "Unvalid Data";
                    }
                    // isPropertyImageOrLink = isImageORLink(tdContent);
                    switch (isImageORLink(`${tdContent}`)) {
                        case "image":
                            const IMG = document.createElement("img");
                            IMG.src = tdContent;
                            TD.appendChild(IMG);
                            break;
                        case "link":
                            const LINK = document.createElement("a");
                            LINK.href = tdContent;
                            LINK.innerHTML = LINK_NAME;
                            TD.appendChild(LINK);
                            break;
                        case "text":
                            TD.innerHTML = tdContent;
                            break;
                        default:
                            throw new Error("Ошибка! Свойство JSON объекта не является ни ссылкой на картинку, ни простой ссылкой, ни текстом.");
                    }
                    TR.appendChild(TD);
                });
                TBODY.appendChild(TR);
            });
            return TBODY;
        }
        fillTableHeader(Object.keys(dataArray[0]));
        fillTableBody(dataArray);
    }
    // Забираем данные и отрисовываем таблицу с этими данными
    (async () => {
        return await getData(FETCH_URL).then((response) => {
            return response.json();
        }).then((data) => {
            console.log("Данные:", data);
            fillTable(TABLE_ID, data);
            setTableImageClickHandler();
        });
    })();
});
//# sourceMappingURL=main.js.map