window.addEventListener("load", () => {

	let arrImg = document.querySelectorAll("table img");
	let overlay = document.querySelector("#modalBg");
	let modalBody = document.querySelector("#modal-body");
	let bigImg = document.querySelector("#big-img");

	overlay.addEventListener("click", overlayHandler)

	/**
	 * Функция задает правильные размеры картинке и ограничиваемому блоку и размещает картинку
	 */
	function smallImageHandler() {
		let coefficientWidth = +((((window.innerWidth / this.naturalWidth)) + 1) / 2).toFixed(2);
		let coefficientHeight = +((((window.innerHeight / this.naturalHeight)) + 1) / 2).toFixed(2);
		let modalWidth;
		let modalHeight;

		bigImg.src = this.src;

		// Задаем правильные размеры картинке и ограничивающему блоку
		modalWidth = this.naturalWidth * coefficientWidth;
		modalHeight = this.naturalHeight * coefficientHeight;
		modalBody.style.width = modalWidth + "px";
		modalBody.style.height = modalHeight + "px";
		
		// Для того, чтобы работала адаптвность (свойсвто object-fit — задаем разные размеры картинке
		if (modalWidth >= this.naturalWidth) {
			bigImg.style.height = "100%";
			bigImg.style.width = "auto";

		} else if (modalHeight >= this.naturalHeight) {
			bigImg.style.height = "auto";
			bigImg.style.width = "100%";
		}

		// Показываем оверлей, ограничивающий блок и размещаем там картинку 
		modalBody.classList.toggle("modal-body_visible");
		modalBody.appendChild(bigImg);
		overlay.style.display = "block";

	}

	function overlayHandler(e) {
		if (e.target !== bigImg) {
			overlay.style.display = "none"
			modalBody.classList.remove("modal-body_visible");
		}
		
	}

	// Цикл пробегается по массиву картинок и ставит обработчики событий
	arrImg.forEach((image) => {
		image.addEventListener("click", smallImageHandler)
	})


})