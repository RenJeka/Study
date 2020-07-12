"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
window.addEventListener("load", function () {
    var overlay = document.querySelector("#modalBg");
    var modalBody = document.querySelector("#modal-body");
    var bigImg = document.querySelector("#big-img");
    var API_URL;
    var sort; // Объект "Tablesort"
    var TABLE_ID = "tableSort";
    var AVOID_PROPERTY_NAME = "other"; // Свойство в данных, которое не нужно выводить в таблицу
    var FETCH_URL = "data_2.json";
    var LINK_NAME = "Ссылка";
    var submitBtn = document.querySelector("#api-submit");
    var apiInput = document.querySelector("#api-input");
    overlay.addEventListener("click", closeModal);
    /**
     * Функция задает правильные размеры картинке и ограничиваемому блоку и размещает картинку
     * @param image {HTMLImageElement} изображение, которое будет выводится в центр екрана
     */
    function displayToModal(image) {
        var coefficientWidth = +((((window.innerWidth / image.naturalWidth)) + 1) / 2).toFixed(2);
        var coefficientHeight = +((((window.innerHeight / image.naturalHeight)) + 1) / 2).toFixed(2);
        var modalWidth;
        var modalHeight;
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
        var arrTableImages = document.querySelectorAll("table img");
        arrTableImages.forEach(function (image) {
            image.addEventListener("click", function () {
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
        var TABLE = document.querySelector("#" + tableID);
        var THEAD = TABLE.querySelector("thead");
        var TBODY = TABLE.querySelector("tbody");
        /**
         * Заполняет <THEAD> таблицы переданными значениями
         * @param objectKeys объект, по ключам которого создадутся названия колонок таблицы (<th>)
         */
        function fillTableHeader(objectKeys) {
            var TR = document.createElement("tr");
            // Пробегаемся по ключам и создаем <th>, и заполняем его (названием ключа объекта)
            objectKeys.forEach(function (thName) {
                if (thName === AVOID_PROPERTY_NAME) {
                    return;
                }
                var TH = document.createElement("th");
                TH.innerHTML = thName;
                TR.appendChild(TH);
            });
            THEAD.appendChild(TR);
            return THEAD;
        }
        /**
         *
         * @param arrObjects массив объект в качестве данных
         */
        function fillTableBody(arrObjects) {
            function checkFormat(property) {
                var TEST_STRING_FOR_HTTP = property.slice(0, 8); // Берем последние 4 символа строки, чтобы узнать расширение
                var TEST_STRING_FOR_IMG = property.slice(-5); // Берем последние 4 символа строки, чтобы узнать расширение
                var REGEXP_HTTP = /(https\:\/\/)|(http\:\/\/) /;
                var REGEXP_IMAGES = /(\.jpeg)|(\.jpg)|(\.png)|(\.gif)|(\.svg) /;
                // Проверяем, это ссылка, картинка или просто текст
                if (REGEXP_HTTP.test(TEST_STRING_FOR_HTTP) && REGEXP_IMAGES.test(TEST_STRING_FOR_IMG)) {
                    return "image";
                }
                else if (REGEXP_HTTP.test(TEST_STRING_FOR_HTTP)) {
                    return "link";
                }
                else if (checkIsNumber(property)) {
                    return "number";
                }
                else {
                    return "text";
                }
            }
            /**
             * Функция проверяет, является ли переданное значение числом.
             * @param value Значение, которое будет проверятся на число
             */
            function checkIsNumber(value) {
                return !isNaN(parseFloat(value));
            }
            /**
             * Функция обрабатывает разные типы запятых
             * @param value число в строковом формате, которое впоследствии будет сконвертировано в правильный формат
             */
            function convertCommaFormat(stringifiedNumber) {
                return 0;
            }
            arrObjects.forEach(function (obj) {
                var TR = document.createElement("tr");
                var arrTableDataCellNames = [];
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        arrTableDataCellNames.push(obj[prop]);
                    }
                }
                // let isPropertyImageOrLink: imageOrLink;
                // Создание и заполнение ячейки TD
                arrTableDataCellNames.forEach(function (tdContent) {
                    var TD = document.createElement("td");
                    // Проверка, что свойство JSON объекта не специально зарезервированное свойство, которое не нужно вносить в таблицу. (Вывод свойства нужно избежать)
                    if (tdContent === AVOID_PROPERTY_NAME) {
                        return;
                    }
                    // Проверка на то, что свойство JSON объекта имеент вложенный объект
                    if (tdContent === "[object Object]") {
                        tdContent = "Unvalid Data";
                    }
                    // isPropertyImageOrLink = isImageORLink(tdContent);
                    switch (checkFormat("" + tdContent)) {
                        case "image":
                            var IMG = document.createElement("img");
                            IMG.src = tdContent;
                            TD.appendChild(IMG);
                            break;
                        case "link":
                            var LINK = document.createElement("a");
                            LINK.href = tdContent;
                            LINK.innerHTML = LINK_NAME;
                            TD.appendChild(LINK);
                            break;
                        case "number":
                            TD.innerHTML = tdContent.toString().replace(',', '.');
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
    function validateInput() {
        var _a, _b;
        if (apiInput.value.trim().length === 0) {
            apiInput.classList.add("input-block__input_error");
            (_a = document.querySelector("#error-msg")) === null || _a === void 0 ? void 0 : _a.classList.add("input-block__error_active");
            (_b = document.querySelector("#input-wrapper")) === null || _b === void 0 ? void 0 : _b.classList.add("input-block__input-wrapper_error");
            apiInput.focus();
            setTimeout(function () {
                var _a, _b;
                apiInput.classList.remove("input-block__input_error");
                (_a = document.querySelector("#error-msg")) === null || _a === void 0 ? void 0 : _a.classList.remove("input-block__error_active");
                (_b = document.querySelector("#input-wrapper")) === null || _b === void 0 ? void 0 : _b.classList.remove("input-block__input-wrapper_error");
            }, 3000);
            return false;
        }
        else {
            return true;
        }
    }
    function clearTable(formID) {
        var table = document.querySelector("#" + formID);
        for (var i = table.rows.length - 1; i < table.rows.length && i >= 0; i--) {
            table.deleteRow(i);
        }
    }
    // Забираем данные и отрисовываем таблицу с этими данными
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    submitBtn.addEventListener("click", function () {
                        if (validateInput()) {
                            API_URL = apiInput.value;
                            clearTable("tableSort");
                            apiInput.value = "";
                            getData(API_URL).then(function (response) {
                                return response.json();
                            }).then(function (data) {
                                console.clear();
                                console.log("Данные:", data);
                                fillTable(TABLE_ID, data);
                                setTableImageClickHandler();
                                sort = new Tablesort(document.querySelector('#tableSort'));
                                sort.refresh();
                            });
                        }
                    });
                    return [4 /*yield*/, getData(FETCH_URL).then(function (response) {
                            return response.json();
                        }).then(function (data) {
                            console.log("Данные:", data);
                            fillTable(TABLE_ID, data);
                            setTableImageClickHandler();
                            sort = new Tablesort(document.querySelector('#tableSort'));
                            // sort.refresh();
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); })();
});
//# sourceMappingURL=main.js.map