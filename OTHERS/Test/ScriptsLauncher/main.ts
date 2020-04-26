window.addEventListener("load", () => {

	/**
	 * Функция делает из пути — имя.
	 * @param path путь (путь к файлу в формате .js)
	 * @returns Имя файла без расширения
	 */
	function getName(path:string):string {
		let arrSlugs: string[] = path.split("/");
		return arrSlugs[arrSlugs.length - 1].slice(0, -3);
	}

	/**
	 * Функция делает кнопку
	 * @param btnName Название кнопки
	 */
	function getButton(filePath: string): HTMLButtonElement {
		let button: HTMLButtonElement = document.createElement("button");
		button.innerHTML = getName(filePath);
		button.dataset.path = filePath;
		button.dataset.script = "userscript";
		return button;
	}

	/**
	 * Функция размещает кнопку на странице
	 * @param buttonName Имя кнопки
	 */
	function placeButton(filePath:string): HTMLParagraphElement {

		let myCurrentBtn: HTMLButtonElement = getButton(filePath);
		let btnWrapper: HTMLParagraphElement = document.createElement("p");
		let scriptContainer: HTMLDivElement = document.querySelector("#scriptContainer") as HTMLDivElement;

		btnWrapper.appendChild(myCurrentBtn);
		scriptContainer.append(btnWrapper);
		
		return btnWrapper;
		
	}

	/**
	 * Функция создает кнопки на странице, по данным с переданного массива
	 * @param pathArray Массив с путями для созданя имен кнопок
	 */
	function createButtons(pathArray:Array<string> | null):void {
		
		if (pathArray) {

			pathArray.forEach(filePath => {
				placeButton(filePath);
			})
		}
		
	}

	/**
	 * Функция устанавливает обработчик события на клик по кнопке
	 * @param DOMElement DOM-элемент, в котором находится кнопка или сама кнопка
	 */
	function setButtonHandler(DOMElement:HTMLElement | HTMLButtonElement) {

		let button:HTMLButtonElement;
		
		if (DOMElement.tagName == "BUTTON" && DOMElement.dataset.script == 'userscript') {

			button = DOMElement as HTMLButtonElement;

		}else{
			button = DOMElement.querySelector("button[data-script='userscript']") as HTMLButtonElement;
		}

		let scriptPath:string = button.dataset.path as string;

		button.addEventListener("click", () => {
			deleteScripts();
			placeScript(scriptPath);
		})
	}

	/**
	 * Функция устанавливает обработчики событий на все созданные (пользовательские) кнопки, которые есть на странице
	 */
	function setAllButtonsHandlers():void {

		let allButtons:NodeListOf<HTMLElement> = document.querySelectorAll("button[data-script='userscript']");

		if (allButtons.length > 0) {
			allButtons.forEach(button=>setButtonHandler(button));
		}
	}

	/**
	 * Функция создает тег скрипта <script> и помещает его в конец "body"
	 * @param scriptSrc Путь скрипта
	 */
	function placeScript(scriptSrc: string): HTMLScriptElement {
		let myScript: HTMLScriptElement = document.createElement("script");
		myScript.src = scriptSrc;
		document.body.append(myScript);

		return myScript;
	}

	/**
	 * Функция удаляет все лишние теги <script> и очищает консоль.
	 */
	function deleteScripts(): void {
		for (let bodyElement of document.body.children) {
			if (bodyElement.tagName === "SCRIPT" && bodyElement.id != "mainScript") {
				document.body.removeChild(bodyElement);
			}
		};
		console.clear();
	}
	
	/**
	 * Функция добавляет пользовательский путь к файлу в localStorage
	 * 
	 * @param localStoregeKey ключ в localStorage, по которому находится массив с пользовательскими путями к файлам.
	 * @param scriptPath пукть к скрипту, который добавляется в localStorage
	 * @returns Массив с путями, взятый из localStorage
	 */
	function localStorageHandler(localStoregeKey: string, scriptPath:string):boolean{

		let myScripts:string = window.localStorage.getItem(localStoregeKey) as string;

		if (myScripts) {
			let tempArray:Array<string>  = JSON.parse(myScripts);

			if (tempArray.indexOf(scriptPath) == -1) {
				tempArray.push(scriptPath);
				window.localStorage.setItem(localStoregeKey, JSON.stringify(tempArray));
			}else{
				alert(" Такой скрипт уже есть! ");
				return false;
			}
			
		// Если массив создается впервые
		}else{
			let myScriptsArray:Array<string> = [];
			myScriptsArray.push(scriptPath);
			window.localStorage.setItem(localStoregeKey, JSON.stringify(myScriptsArray));
		}

		return true;
	}

	/**
	 * Функция удаляет все данные пользователя.
	 */
	function clearAllScripts():void {
		let buttonContainer: HTMLElement = document.querySelector("#scriptContainer") as HTMLElement;
		let buttons:NodeListOf<HTMLElement> = buttonContainer.querySelectorAll("button");

		buttons.forEach(button=>button.remove);

		window.localStorage.clear();

		location.reload();
	}

	/**
	 * Главная функция
	 */
	function main():string {
		
		const LOCAL_STORAGE_KEY:string = "myScripts";
		let input: HTMLInputElement = document.querySelector("#inputPath") as HTMLInputElement,
			addBtn: HTMLButtonElement = document.querySelector("#addFileBtn") as HTMLButtonElement,
			clearBtn: HTMLButtonElement = document.querySelector("#clearAll") as HTMLButtonElement;
		/**
		 * Старые скрипты пользователя, которые хранятся в LocalStorage
		 */
		let oldScripts:Array<string> = [];

		let tempJSON = window.localStorage.getItem(LOCAL_STORAGE_KEY);
		

		if (tempJSON) {
			oldScripts = JSON.parse(tempJSON);
		}

		createButtons(oldScripts);
		setAllButtonsHandlers();

		/**
		 * Валидация на пустое значение поля input
		 */
		function checkEmptyInput():boolean {
			if (input.value == "") {
				alert("Вы не ввели путь к скрипту!")
				return false;
			}
			return true;
		}

		/**
		 * Функция подготавливает путь к скрипту в правильном формате
		 * @returns Возвращает путь к скрипту в правильном формате
		 */
		function getScriptPath(): string {

			let arrSlugs: string[] = input.value.split("/"),
				lastSlug: string = arrSlugs[arrSlugs.length - 1];


			if (lastSlug.indexOf(".") >= 0 ) {
				return input.value;
			}else{
				return input.value + ".js"
			}
		}

		// Обработчик нажатия на кнопку "Добавить файл"
		addBtn.addEventListener("click", ()=>{
			
			if (checkEmptyInput() && localStorageHandler(LOCAL_STORAGE_KEY, getScriptPath())) {
				let currentButtonWrapper =  placeButton(getScriptPath());
				setButtonHandler(currentButtonWrapper);
			}
		});
		
		// Обработчик нажатия на "enter"
		input.addEventListener("keyup", (e)=>{
			
			if (e.code.toLocaleLowerCase() == "enter" ) {
				
				if (checkEmptyInput() && localStorageHandler(LOCAL_STORAGE_KEY, getScriptPath())) {
					let currentButtonWrapper =  placeButton(getScriptPath());
					setButtonHandler(currentButtonWrapper);
				}
			}
		});

		clearBtn.addEventListener("click", ()=>{
			clearAllScripts();
		});

		return"true";
	}

	main();

})