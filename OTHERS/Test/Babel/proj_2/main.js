// Скрипт получает данные с сервера,  сортирует их  и выводит на страницу в виде таблицы с заголовками месяцев.
require('whatwg-fetch');

require("@babel/polyfill");
$(document).ready(function () {

    let language = currentCulture.language;
    let getCoursePlansLink = `/${language}/schedule/get-course-plans`;
    let getTemplateTableRowLink = `/assets/js/templates/template-schedulte.${language}.html`;

    /**
    * Функция, которая получает шаблон для обработки данных с сервера
    * @param {String} urlTemplate Строка URL для получения шаблона.
    * @returns {Promise} Возвращает Promise с шаблоном.
    */
    async function getTemplate(urlTemplate) {
        let returnTemplate = await window.fetch(urlTemplate)
            .then(response => response.text())

        return returnTemplate;
    }

    /**
    * Функция, которая получает данные с сервера
    * @param {String} urlData Строка URL для получения данных расписания курсов.
    * @returns {Promise} Возвращает Promise с данными расписания курсов.
    */
    async function getData(urlData) {
        let returnData = await window.fetch(urlData)
            .then(response => response.json())

        return returnData;
    }

    /**
     * Функция перебирает массив, и находит все уникальные значения, которые фигурируют в массиве с объектами
     * @param {Array} dataArray Массив с объектами, где будет проходить поиск уникальных значений
     * @param {String} propToFind Поле, по которому будут находиться уникальные значения
     * @param {Boolean} needSort Нужна ли сортировка. (По умолч. true — нужна)
     * @returns {Array} Возвращает отсортированный массив с уникальными значениями по полю "propToFind".
     * */
    function getUniqueData(dataArray, propToFind, needSort) {

        if (!dataArray || !propToFind) {
            throw "ArgumentNullException: dataArray или propToFind == underfined. Проверьте входные значения"
        }
        needSort = (needSort !== undefined) ? needSort : true;

        let arrUniqueValues = []; // Массив уникальных значений, который будет возвращатся функцией

        // Перебираем массив "arrAllDataToFind", чтобы найти уникальные значения.
        for (let elem of dataArray) {
            // Для доступа к вложенным свойствам реализуем доступ с точечной нотацией.
            let curr = elem;
            let props = propToFind.split('.');

            // цыкл для того, чтобы дотянуться к вложенному значению
            for (var i = 0; i < props.length; i++) {
                if (!curr) break;
                curr = curr[props[i]];
            }

            // проверка на уникальность, если значение не уникально — не добавляем его в массив уникальн. значений и ищем другое.
            if (curr && !arrUniqueValues.includes(curr)) {
                arrUniqueValues.push(curr);
            }
        }

        if (needSort) {
            // Сортируем по возрастанию
            arrUniqueValues.sort(function (a, b) { return a - b })
        }
        
        return arrUniqueValues;
    }

    /**
     * Функция подбирает метро к каждой улице
     * @param {any} arrSchedule Исходный массив со всеми данными (Массив расписания курсов)
     * @param {any} arrUniqueStreets Массив с уникальными улицами, к которым нужно найти станцию метро.
"arrUniqueStreets")
     * @returns {Array} Возвращает массив со станциями метро в правильной последовательности. В случае, если нет  станции метро — добавляется "null"
     */
    function getMetroStations(arrSchedule, arrUniqueStreets) {

        let arrMetroStations = [];
        let metroStation = null; // Элемент, который будет добавлятся в массив "arrMetroStations".

        for (let i = 0; i < arrUniqueStreets.length; i++) {
            for (var j = 0; j < arrSchedule.length; j++) {
                if (arrSchedule[j].Office.ShortName === arrUniqueStreets[i]) {
                    metroStation = arrSchedule[j].Office.SubwayStationName;
                    break;
                } 
            }
            arrMetroStations.push(metroStation);
        }
        return arrMetroStations;

    }

    /**
     * Функция проверяет на наличие курсов и показываем пустое сообщение
     * @param {Array} arrayOfCurrentMonth Данные для текущего месяца
     * @param {Object} elementToRender Элемент, куда необходимо добавить сообщение 
     * @returns {void} Ничего не возвращает
     */
    function checkEmptyMsg(arrayOfCurrentMonth, elementToRender) {

        let EmptyMsg = document.createElement('div');
        EmptyMsg.classList.add("schedule-s2__no-courses-msg");
        EmptyMsg.innerHTML = "Нет запланированных курсов"
        if (arrayOfCurrentMonth.length == 0) {
            elementToRender.appendChild(EmptyMsg);
        }
    }

    /**
     *  Функция создает свойство "coverColorUrl" каждого элемента коллекции с правильным цветом
     * @param {any} collectionCourses коллекция элементов, в котором нужно создать свойство  "coverColorUrl"
     * @returns {void} ничего не возвращает
     */
    function setCourseColor(collectionCourses) {
        collectionCourses.forEach(course => {
            course.coverColorUrl = getCoverUrl(course.coverColor);
        })
    }

    /**
     *  Создает путь к картинке разного цвета в зависимости от параметра
     * @param {string} courseColor  Строка с названием цвета
     * @returns {string} Возвращает готовый путь к картинке с необходимым цветом
     */
    function getCoverUrl(courseColor) {
        let pathToImg = "/assets/img/specialities/main-course-bg/";
        switch (courseColor) {

            case "Orange":
                return pathToImg + "Orange.jpg";
            case "Gray":
                return pathToImg + "Gray.jpg";
            case "Red":
                return pathToImg + "LightRed.jpg";
            case "Green":
                return pathToImg + "Green.jpg";
            case "Blue":
                return pathToImg + "LightBlue.jpg";
            case "Yellow":
                return pathToImg + "Yellow.jpg";
            case "LightBlue":
                return pathToImg + "LightBlue.jpg";
            case "Purple":
                return pathToImg + "Purple.jpg";
        }
        return "";
    }

    /**
     * Функция заполняет теги <option> для фильтра "Локация"
     * @param {Array} arrStreetLocation Массив с улицами, который будет заполнятся в "selectList"
     * @param {Array} arrMetroLocation Массив с метро, который будет заполнятся в "selectList". Каждое значение должно соответствовать значению из "arrStreetLocation"! 
     * */
    function setLocationSelectList(arrStreetLocation, arrMetroLocation) {

        let selectList = document.querySelector(".schedule-s2__table-courses_location");
        let tempOption; // Временный <option>, который будет добавлятся в "selectList"
        let tempValue; // Значение, которое будет записываться в "tempOption"

        arrStreetLocation.forEach((elem, index) => {

            if (arrMetroLocation[index] && arrMetroLocation[index].trim()) {
                tempValue = `${elem}  (м. ${arrMetroLocation[index]})`;
            } else {
                tempValue = elem;
            }
            
            tempOption = document.createElement("option");
            tempOption.value = elem;
            tempOption.innerHTML = tempValue;

            selectList.add(tempOption);
        })

        
    }

    // ================  ФИЛЬТРАЦИЯ start ======================
    /* Чтобы добавить очередной фильтр нужно:
         1. Добавить в разметку ячейку таблицы фильтра с уникальным классом или ID
         2. Добавить обработчик событий в "Главную асинхронную функцию"
         3. Добавить свойство (JSON - объекта), по которому происходит фильтрация - в объект фильтрации  "filterObject" (в Главной ассинхронной функции). Если есть вложенность - объект фильтрации можно заполнять либо вложенно, либо просто добавив "свойство : значение".
         4. Занулить значение свойства этого объекта в обработчике событий "сбросить фильтры"
     */

    /**
     *  Функция фильтрирует массив "data" по свойствам объекта фильтрации "filterObj"
     *  
     * @param {Array} unfilteredData Данные для фильтрации
     * @param {Object} filterObj Объект по свойствам которого будет проходить фильтрация (свойство == свойство в "data", значение = значение в "data")
     * @returns {Array} Возвращает массив с уже отфильтрированными данными по всем св-вам объекта фильтрации
     */
    function filterFunc(unfilteredData, filterObj) {

        let filtredData = [];
        let flag = true;

        /**
         * Функция фильтрует данные по 1-му свойству "propName" и 1-му  значению "propValue"
         * @param {any} arrData Массив объектов для фильтрации
         * @param {string} filterProp Имя свойсва фильтрации
         * @param {any} filterValue Значение свойсва фильтрации
         * @returns {Array} Возвращает отфильтрованный массив по конкретному свойству и конкретному значению
         */
        function filterCore(arrData, filterProp, filterValue) {

            let arrFiltredData = [];

            /**
             * Рекурсивная функция, которая проходит по всему объекту с данными, находит нужное свойство с нужным ключом и делает по нему фильтрацию.
             * @param {Object} object Объект с данными, про свойствам которого будет 
             * @returns {boolean} Возвращает true, если свойсво и значение совпадает со свойством и значением объекта фильтрации и false - если не совпадает.
             * */
            function bypassOriginalObject(object){
                for (var prop in object) {

                    if (object.hasOwnProperty(prop)) {

                        // В случае внутрених объектов - проходимся по ним этой же функцией.
                        if (typeof object[prop] === 'object') {

                            return bypassOriginalObject(object[prop]);
                        }

                        // Сравнение происходит рекурсивно по всем свойствам
                        if (prop == filterProp && object[prop] == filterValue) {
                            return true;
                        } else {
                            continue;
                        }

                    }
                }
                return false
            }

            // Если значение фильтрующего объекта - пустая строка, значит нужно выбрать все элементы
            if (filterValue == "" || filterValue == -1) {
                arrFiltredData = arrData.filter(elem => true);
            } else {
                arrFiltredData = arrData.filter((elem) => { return bypassOriginalObject(elem) });
            }
            return arrFiltredData;
        }

        /**
         * Рекурсивная функция, которая проходит по всему объекту фильтрации "innerFilterObj" и создает отфильтрованный массив. 
         * @description Рекурсия тут не обязательна, но она позволяет делать объект фильтрации многомерным. (Для удобства). Без рекурсии объект фильтрации должен быть одномерным.
         * @param {any} innerFilterObj объект, по свойствам которого необходимо пройтись
         * @returns {void} ничего не возвращает.
         */
        function bypassFilterObject(innerFilterObj) {

            for (var prop in innerFilterObj) {

                if (innerFilterObj.hasOwnProperty(prop)) {
                    // В первый раз помещаем в отфильтрованные данные - все данные
                    if (flag) {
                        filtredData = unfilteredData;
                        flag = false;
                    }
                    // В случае внутрених объектов - проходимся по ним этой же функцией.
                    if (typeof innerFilterObj[prop] === 'object') {
                        bypassFilterObject(innerFilterObj[prop]);
                        continue;
                    }

                    filtredData = filterCore(filtredData, prop, innerFilterObj[prop]);
                }
            }
            return;
        }

        if (!unfilteredData) {
            throw "ArgumentNullException: Не передан 'unfilteredData', проверьте входные данные! "
        } else if (!filterObj || filterObj.length == 0 ) {
            throw "ArgumentNullException: Не передан 'filterObj', проверьте входные данные! "
        }

        bypassFilterObject(filterObj);
        return filtredData;
    }
    // ================  ФИЛЬТРАЦИЯ end ======================

    /**
     * Основная функция, которая рендерит переданные ей данные на страницу
     * @param {Array} fRawData Массив объектов, который необходимо отрендерить на страницу
     * @param {String} fTemplateTableRow Массив объектов, который необходимо отрендерить на страницу
     * @param {Object} fFilterObject Объект с фильтрирующими параметрами где имя свойства — свойство JSON объекта, по которому необходимо фильтровать, значение — значение JSON объекта
     * @returns {void} Ничего не возвращает
     */
    function showResult(fRawData, fTemplateTableRow, fFilterObject) {
        let arrDataPerMonth = [],   // Массив с расписаниями курсов отдельно для каждого месяца.
            outerContainer = $('.schedule-s2__body_month-sort-courses'), // Внешний контейнер для расписания.
            templateWrapper = document.querySelector("#templateWrapper"), //Оберточный шаблон для каждого месяца
            templateWrapperContent, // Внутреняя разметка элемента <template>
            templateWrapperTitle,   // Заголовок, который вставляется в шаблон для каждого месяца
            table,                  // Таблица (в шаблоне "templateWrapper"), куда будут рендерится строки
            currentTable,           // Объект jQuery таблицы "table"
            readyToRenderData,      // Готовые данные для рендеринга в таблицу "table"
            months, // Массив месяцев, которые нужно заполнить в html - разметке
            filtredData = [];       // Отфильтрированные данные

        if (!fRawData) {
            throw "Не переданы данные по курсам";
            return;
        }

        if (!fTemplateTableRow) {
            throw "Не передан шаблон для отрисовки данных";
            return;
        }

        if (!fFilterObject) {
            throw "Не переданы фильтрирующие параметры";
        }

        // Устанавливаем цвета картинок
        setCourseColor(fRawData);

        // Удаляем предыдущую таблицу с расписанием
        $(".schedule-s2__body_month-block, .schedule-s2__no-courses-msg").remove();

        // Получаем отфильтрированный массив с данными для рендеринга
        filtredData = filterFunc(fRawData, fFilterObject);

        // Проверяем на наличие курсов и показываем пустое сообщение
        checkEmptyMsg(filtredData, outerContainer.get(0))

        // Находим уникальные месяца в отфильтрованном массиве
        months = getUniqueData(filtredData, "monthNumber");

        // Перебор массива месяцев, чтобы создать блок месяца с расписанием курсов.
        months.forEach(currentMonth => {

            // Получаем содержимое от "templateWrapper" (задействована технология Web Components — templates)
            templateWrapperContent = document.importNode(templateWrapper.content, true);

            // ищем элемент заголовка во фрагменте  <template>
            templateWrapperTitle = templateWrapperContent.querySelector(".schedule-s2__body_month-block_title");
            table = templateWrapperContent.querySelector("#courses-table");
            currentTable = $(table); // Превращаем в объект jQuery, так как сразу не получается получить объект "table" в контексте "templateWrapperContent"

            // Достаем из данных только те, которые относятся к месяцу "currentMonth"

            if (!filtredData) {
                arrDataPerMonth = fRawData.filter(course => currentMonth == course.monthNumber)
            } else {
                arrDataPerMonth = filtredData.filter(course => currentMonth == course.monthNumber)
            }

            // Добавляем название месяца в заголовок оберточного шаблона (блока с расписанием на месяц)
            templateWrapperTitle.innerHTML = arrDataPerMonth[0].monthName;
            outerContainer.append(templateWrapperContent);

            // Рендерим таблицу для текущего месяца (currentMonth) при помощи библиотеки Handlebars
            arrDataPerMonth.forEach(elem => {
                readyToRenderData = Handlebars.compile(fTemplateTableRow);
                currentTable.append(readyToRenderData(elem));
            })
        })
    }

    // Главная асинхронная функция
    (async function () {

        let templateTableRow = await getTemplate(getTemplateTableRowLink);
        let rawData = await getData(getCoursePlansLink); // JSON- данные с расписанием курсов

        // Инициализация фильтрирующего объекта, по свойствам которого будет проходить фильтрация
        let filterObject = {
            slug: "",
            time: "",
            monthNumber: -1,
            Office: {ShortName: ""}
        }

        // Чтобы заполнить раскрывающий список для фильтра "Локация", нужно 2 массива — название улицы и связанное с ней метро.
        // Получаем уникальные улицы
        let arrUniqueOffices = getUniqueData(rawData, 'Office.ShortName', false);
        // Получаем связанное метро к каждой улице
        let arrRelatedMetroToOffices = getMetroStations(rawData, arrUniqueOffices)

        // Заполняем раскрывающийся список 
        setLocationSelectList(arrUniqueOffices, arrRelatedMetroToOffices);

        // Первый показ данных с расписанием
        showResult(rawData, templateTableRow, filterObject);

        // Обработчик на фильтр "название курса" (Курсы)
        $(".schedule-s2__table-courses_course-title").on("change", (e) => {
            filterObject.slug = event.currentTarget.value.trim();
            showResult(rawData, templateTableRow, filterObject);
            bLazy.revalidate();
        });

        // Обработчик на фильтр "Время" 
        $(".schedule-s2__table-courses_time").on("change", (e) => {
            filterObject.time = event.currentTarget.value.trim();
            showResult(rawData, templateTableRow, filterObject);
            bLazy.revalidate();
        });

        // Обработчик на фильтр "Месяц" 
        $(".schedule-s2__table-courses_month").on("change", (e) => {
            filterObject.monthNumber = event.currentTarget.value.trim();
            showResult(rawData, templateTableRow, filterObject);
            bLazy.revalidate();
        });

        // Обработчик на фильтр "Локация" 
        $(".schedule-s2__table-courses_location").on("change", (e) => {
            filterObject.Office.ShortName = event.currentTarget.value.trim();
            showResult(rawData, templateTableRow, filterObject);
            bLazy.revalidate();
        });

        // Обработчик на кнопку "сбросить фильтры"
        $(".schedule-s2__table-courses_reset").on("click", () => {
            filterObject.slug = "";
            filterObject.time = "";
            filterObject.monthNumber = -1;
            filterObject.Office.ShortName = "";
            $(".schedule_form")[0].reset();
            showResult(rawData, templateTableRow, filterObject);
            bLazy.revalidate();
        });

        bLazy.revalidate();
    })()
})