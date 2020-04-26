"use strict";
window.addEventListener("load", () => {
    /**
     * Функция делает из пути — имя.
     * @param path путь (путь к файлу в формате .js)
     * @returns Имя файла без расширения
     */
    function getName(path) {
        let arrSlugs = path.split("/");
        return arrSlugs[arrSlugs.length - 1].slice(0, -3);
    }
    /**
     * Функция делает кнопку
     * @param btnName Название кнопки
     */
    function getButton(filePath) {
        let button = document.createElement("button");
        button.innerHTML = getName(filePath);
        button.dataset.path = filePath;
        button.dataset.script = "userscript";
        return button;
    }
    /**
     * Функция размещает кнопку на странице
     * @param buttonName Имя кнопки
     */
    function placeButton(filePath) {
        let myCurrentBtn = getButton(filePath);
        let btnWrapper = document.createElement("p");
        let scriptContainer = document.querySelector("#scriptContainer");
        btnWrapper.appendChild(myCurrentBtn);
        scriptContainer.append(btnWrapper);
        return btnWrapper;
    }
    /**
     * Функция создает кнопки на странице, по данным с переданного массива
     * @param pathArray Массив с путями для созданя имен кнопок
     */
    function createButtons(pathArray) {
        if (pathArray) {
            pathArray.forEach(filePath => {
                placeButton(filePath);
            });
        }
    }
    /**
     * Функция устанавливает обработчик события на клик по кнопке
     * @param DOMElement DOM-элемент, в котором находится кнопка или сама кнопка
     */
    function setButtonHandler(DOMElement) {
        let button;
        if (DOMElement.tagName == "BUTTON" && DOMElement.dataset.script == 'userscript') {
            button = DOMElement;
        }
        else {
            button = DOMElement.querySelector("button[data-script='userscript']");
        }
        let scriptPath = button.dataset.path;
        button.addEventListener("click", () => {
            deleteScripts();
            placeScript(scriptPath);
        });
    }
    /**
     * Функция устанавливает обработчики событий на все созданные (пользовательские) кнопки, которые есть на странице
     */
    function setAllButtonsHandlers() {
        let allButtons = document.querySelectorAll("button[data-script='userscript']");
        if (allButtons.length > 0) {
            allButtons.forEach(button => setButtonHandler(button));
        }
    }
    /**
     * Функция создает тег скрипта <script> и помещает его в конец "body"
     * @param scriptSrc Путь скрипта
     */
    function placeScript(scriptSrc) {
        let myScript = document.createElement("script");
        myScript.src = scriptSrc;
        document.body.append(myScript);
        return myScript;
    }
    /**
     * Функция удаляет все лишние теги <script> и очищает консоль.
     */
    function deleteScripts() {
        for (let bodyElement of document.body.children) {
            if (bodyElement.tagName === "SCRIPT" && bodyElement.id != "mainScript") {
                document.body.removeChild(bodyElement);
            }
        }
        ;
        console.clear();
    }
    /**
     * Функция добавляет пользовательский путь к файлу в localStorage
     *
     * @param localStoregeKey ключ в localStorage, по которому находится массив с пользовательскими путями к файлам.
     * @param scriptPath пукть к скрипту, который добавляется в localStorage
     * @returns Массив с путями, взятый из localStorage
     */
    function localStorageHandler(localStoregeKey, scriptPath) {
        let myScripts = window.localStorage.getItem(localStoregeKey);
        if (myScripts) {
            let tempArray = JSON.parse(myScripts);
            if (tempArray.indexOf(scriptPath) == -1) {
                tempArray.push(scriptPath);
                window.localStorage.setItem(localStoregeKey, JSON.stringify(tempArray));
            }
            else {
                alert(" Такой скрипт уже есть! ");
                return false;
            }
            // Если массив создается впервые
        }
        else {
            let myScriptsArray = [];
            myScriptsArray.push(scriptPath);
            window.localStorage.setItem(localStoregeKey, JSON.stringify(myScriptsArray));
        }
        return true;
    }
    /**
     * Функция удаляет все данные пользователя.
     */
    function clearAllScripts() {
        let buttonContainer = document.querySelector("#scriptContainer");
        let buttons = buttonContainer.querySelectorAll("button");
        buttons.forEach(button => button.remove);
        window.localStorage.clear();
        location.reload();
    }
    /**
     * Главная функция
     */
    function main() {
        const LOCAL_STORAGE_KEY = "myScripts";
        let input = document.querySelector("#inputPath"), addBtn = document.querySelector("#addFileBtn"), clearBtn = document.querySelector("#clearAll");
        /**
         * Старые скрипты пользователя, которые хранятся в LocalStorage
         */
        let oldScripts = [];
        let tempJSON = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (tempJSON) {
            oldScripts = JSON.parse(tempJSON);
        }
        createButtons(oldScripts);
        setAllButtonsHandlers();
        /**
         * Валидация на пустое значение поля input
         */
        function checkEmptyInput() {
            if (input.value == "") {
                alert("Вы не ввели путь к скрипту!");
                return false;
            }
            return true;
        }
        /**
         * Функция подготавливает путь к скрипту в правильном формате
         * @returns Возвращает путь к скрипту в правильном формате
         */
        function getScriptPath() {
            let arrSlugs = input.value.split("/"), lastSlug = arrSlugs[arrSlugs.length - 1];
            if (lastSlug.indexOf(".") >= 0) {
                return input.value;
            }
            else {
                return input.value + ".js";
            }
        }
        // Обработчик нажатия на кнопку "Добавить файл"
        addBtn.addEventListener("click", () => {
            if (checkEmptyInput() && localStorageHandler(LOCAL_STORAGE_KEY, getScriptPath())) {
                let currentButtonWrapper = placeButton(getScriptPath());
                setButtonHandler(currentButtonWrapper);
            }
        });
        // Обработчик нажатия на "enter"
        input.addEventListener("keyup", (e) => {
            if (e.code.toLocaleLowerCase() == "enter") {
                if (checkEmptyInput() && localStorageHandler(LOCAL_STORAGE_KEY, getScriptPath())) {
                    let currentButtonWrapper = placeButton(getScriptPath());
                    setButtonHandler(currentButtonWrapper);
                }
            }
        });
        clearBtn.addEventListener("click", () => {
            clearAllScripts();
        });
        return "true";
    }
    main();
});
//# sourceMappingURL=main.js.map