// import * as tablesort from  "lib/tablesort.min.js";
declare let Tablesort:any;
window.addEventListener("load", () => {

	
	let overlay:HTMLDivElement  = document.querySelector("#modalBg") as HTMLDivElement;
	let modalBody:HTMLDivElement = document.querySelector("#modal-body") as HTMLDivElement;
	let bigImg:HTMLImageElement = document.querySelector("#big-img") as HTMLImageElement;
	let API_URL: string;
	let sort // Объект "Tablesort"
	const TABLE_ID= "tableSort";
	const AVOID_PROPERTY_NAME = "other"; // Свойство в данных, которое не нужно выводить в таблицу
	const FETCH_URL = "data_2.json";
	const LINK_NAME = "Ссылка";
	const submitBtn: HTMLInputElement = document.querySelector("#api-submit") as HTMLInputElement;
	const apiInput:HTMLInputElement = document.querySelector("#api-input") as HTMLInputElement;
	type imageOrLink = "image" | "link" | "text" | "number"
	overlay.addEventListener("click", closeModal)

	/**
	 * Функция задает правильные размеры картинке и ограничиваемому блоку и размещает картинку
	 * @param image {HTMLImageElement} изображение, которое будет выводится в центр екрана
	 */
	function displayToModal(image: HTMLImageElement): void {

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

		} else if (modalHeight >= image.naturalHeight) {
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
	function closeModal(e:Event) {
		if (e.target !== bigImg) {
			overlay.style.display = "none"
			modalBody.classList.remove("modal-body_visible");
		}	
	}

	// Функция пробегается по массиву картинок и устанавливает обработчики событий на клики
	function setTableImageClickHandler() {
		let arrTableImages:NodeListOf<HTMLImageElement> = document.querySelectorAll("table img") as NodeListOf<HTMLImageElement>;
		arrTableImages.forEach((image) => {
			image.addEventListener("click", () => {
				displayToModal(image);
				console.log("set");
			})
		})
	}

	function getData(url:string): Promise<any> {
		return fetch(url);
	}

	/**
	 * Функция создает таблицу на основе массива с данными, которые мы передадим в аргумент
	 * @param dataArray Массив с данными (объктами, с которых будет создаваться таблица)
	 */
	function fillTable(tableID:string, dataArray:Array<object>):void {
		
		const TABLE:HTMLTableElement = document.querySelector(`#${tableID}`) as HTMLTableElement;
		const THEAD:HTMLTableSectionElement = TABLE.querySelector("thead") as HTMLTableSectionElement;
		const TBODY:HTMLTableSectionElement = TABLE.querySelector("tbody") as HTMLTableSectionElement;
		let dataArrayNew: object[] = [];
		/**
		 * Заполняет <THEAD> таблицы переданными значениями
		 * @param objectKeys объект, по ключам которого создадутся названия колонок таблицы (<th>)
		 */
		function fillTableHeader(objectKeys: string[]): HTMLTableSectionElement {
			const TR: HTMLTableRowElement = document.createElement("tr");
			// Пробегаемся по ключам и создаем <th>, и заполняем его (названием ключа объекта)
			objectKeys.forEach((thName: string) => {
				if (thName === AVOID_PROPERTY_NAME) {
					return
				}
				const TH: HTMLTableHeaderCellElement = document.createElement("th");
				
				TH.innerHTML = thName;
				TR.appendChild(TH)
			});
			
			THEAD.appendChild(TR);
			return THEAD;
		}

		/**
		 * 
		 * @param arrObjects массив объект в качестве данных
		 */
		function fillTableBody(arrObjects: object[]): HTMLTableSectionElement {
			
			function checkFormat(property:string): imageOrLink {
				const TEST_STRING_FOR_HTTP:string = property.slice(0, 8) // Берем последние 4 символа строки, чтобы узнать расширение
				const TEST_STRING_FOR_IMG:string = property.slice(-5) // Берем последние 4 символа строки, чтобы узнать расширение
				const REGEXP_HTTP = /(https\:\/\/)|(http\:\/\/) /
				const REGEXP_IMAGES = /(\.jpeg)|(\.jpg)|(\.png)|(\.gif)|(\.svg) / 

				// Проверяем, это ссылка, картинка или просто текст
				if (REGEXP_HTTP.test(TEST_STRING_FOR_HTTP) && REGEXP_IMAGES.test(TEST_STRING_FOR_IMG)) {
					return "image"
				} else if (REGEXP_HTTP.test(TEST_STRING_FOR_HTTP)) {
					return "link"
				
				} else if (checkIsNumber(property)) {
					return "number"
				} else {
					return "text"
				}
			}

			/**
			 * Функция проверяет, является ли переданное значение числом.
			 * @param value Значение, которое будет проверятся на число
			 */
			function checkIsNumber(value: string): boolean {
				return !isNaN(parseFloat(value))
			}

			/**
			 * Функция обрабатывает разные типы запятых
			 * @param value число в строковом формате, которое впоследствии будет сконвертировано в правильный формат
			 */
			function convertCommaFormat(stringifiedNumber: string): number {

				return 0
			}

			arrObjects.forEach((obj: {[key:string] : any }) => {
				const TR:HTMLTableRowElement = document.createElement("tr");
				let arrTableDataCellNames: string[] = [];

				for (let prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						arrTableDataCellNames.push(obj[prop] as string);
					}
					
				}
				// let isPropertyImageOrLink: imageOrLink;
				// Создание и заполнение ячейки TD
				arrTableDataCellNames.forEach((tdContent: string) => {
					const TD: HTMLTableDataCellElement = document.createElement("td");
					// Проверка, что свойство JSON объекта не специально зарезервированное свойство, которое не нужно вносить в таблицу. (Вывод свойства нужно избежать)
					if (tdContent === AVOID_PROPERTY_NAME) { return }

					// Проверка на то, что свойство JSON объекта имеент вложенный объект
					if (tdContent === "[object Object]") {
						tdContent = "Unvalid Data"
					}
					// isPropertyImageOrLink = isImageORLink(tdContent);
					switch (checkFormat(`${tdContent}`)) {
						case "image":
							const IMG: HTMLImageElement = document.createElement("img");
							IMG.src = tdContent;
							TD.appendChild(IMG);
							break;

						case "link":
							const LINK: HTMLAnchorElement = document.createElement("a");
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
							throw new Error("Ошибка! Свойство JSON объекта не является ни ссылкой на картинку, ни простой ссылкой, ни текстом.")
					}

					TR.appendChild(TD);
				})

				TBODY.appendChild(TR);
			});
			
			return TBODY;
		}

		if (!dataArray.length) {
			dataArrayNew.push(dataArray);
		} else {
			dataArrayNew = dataArray;
		}
		fillTableHeader(Object.keys(dataArrayNew[0]));
		fillTableBody(dataArrayNew);
	}

	
	function validateInput(): boolean {
		if (apiInput.value.trim().length === 0) {
			apiInput.classList.add("input-block__input_error");
			document.querySelector("#error-msg")?.classList.add("input-block__error_active");
			document.querySelector("#input-wrapper")?.classList.add("input-block__input-wrapper_error");
			apiInput.focus();

			setTimeout(() => {
				apiInput.classList.remove("input-block__input_error");
				document.querySelector("#error-msg")?.classList.remove("input-block__error_active");
				document.querySelector("#input-wrapper")?.classList.remove("input-block__input-wrapper_error");
			}, 3000)

			return false
		} else {
			return true
		}
	}

	function clearTable(formID: string) {
		const table: HTMLTableElement = document.querySelector(`#${formID}`) as HTMLTableElement;
		for (let i = table.rows.length - 1;  i < table.rows.length && i >= 0; i--) {
			table.deleteRow(i)
		}
	}	
	

	// Забираем данные и отрисовываем таблицу с этими данными
	( () => {
		submitBtn.addEventListener("click", () => {
			if (validateInput()) {
				API_URL = apiInput.value;
				clearTable("tableSort");
				apiInput.value = "";
				getData (API_URL).then((response) => {
					return response.json()
				}).then((data) => {
					console.clear();
					console.log("Данные:", data);
					fillTable(TABLE_ID, data);
					setTableImageClickHandler();
					sort = new Tablesort(document.querySelector('#tableSort'));
					sort.refresh();
				})
			}
		})
		return getData (FETCH_URL).then((response) => {
			return response.json()
		}).then((data) => {
			console.log("Данные:", data);
			fillTable(TABLE_ID, data);
			setTableImageClickHandler();
			sort = new Tablesort(document.querySelector('#tableSort'));
			// sort.refresh();
		})
	})()

})