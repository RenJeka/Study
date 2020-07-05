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
    var arrImg = document.querySelectorAll("table img");
    var overlay = document.querySelector("#modalBg");
    var modalBody = document.querySelector("#modal-body");
    var bigImg = document.querySelector("#big-img");
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
    // Цикл пробегается по массиву картинок и ставит обработчики событий
    arrImg.forEach(function (image) {
        image.addEventListener("click", function () {
            displayToModal(image);
        });
    });
    function getData(url) {
        console.log(111);
        return fetch(url);
    }
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData("/src/data.json").then(function (response) {
                        console.log(response);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); })();
});
