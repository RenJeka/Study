window.addEventListener("load", () => {

	let arrImg = document.querySelectorAll("table img");
	let modalBg = document.querySelector("#modalBg");
	let modalBody = document.querySelector("#modal-body");
	let bigImg = document.querySelector("#big-img");

	modalBg.addEventListener("click", func2)

	function func1() {
		let coefficientWidth = +((((window.innerWidth / this.naturalWidth)) + 1) / 2).toFixed(2);
		let coefficientHeight = +((((window.innerHeight / this.naturalHeight)) + 1) / 2).toFixed(2);


		modalBody.style.width = this.naturalWidth * coefficientWidth + "px";
		modalBody.style.height = this.naturalHeight * coefficientHeight + "px";
		console.log(modalBody.style.width);
		console.log(modalBody.style.height);
		bigImg.src = this.src;
		modalBody.classList.toggle("modal-body_visible");
		modalBody.appendChild(bigImg);
		modalBg.style.display = "block";

	}

	function func2(e) {
		if (e.target !== bigImg) {
			modalBg.style.display = "none"
			modalBody.classList.remove("modal-body_visible");
		}
		
	}

	arrImg.forEach((image) => {
		image.addEventListener("click", func1)
	})


})