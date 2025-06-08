// This file handles the background image upload functionality.

const uploadBgImageBtn = document.getElementById("uploadBgImage");
const bgImageInput = document.getElementById("bgImageInput");
const graphContainer = document.getElementById("graphContainer");

export function setupBgImageUpload() {
  uploadBgImageBtn.addEventListener("click", () => {
    bgImageInput.click();
  });

  bgImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
      graphContainer.style.backgroundImage = `url('${evt.target.result}')`;
    };
    reader.readAsDataURL(file);
  });
}
