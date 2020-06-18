window.addEventListener("load", () => {

	let arrImg = document.querySelectorAll("table img");
	let modalBg = document.querySelector("#modalBg");
	let modalBody = document.querySelector("#modal-body");
	let bigImg = document.querySelector("#big-img");
	let currentWidth = window.innerWidth;
	let currentHeight = window.innerHeight;
	modalBg.addEventListener("click", func2)

	function func1() {
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