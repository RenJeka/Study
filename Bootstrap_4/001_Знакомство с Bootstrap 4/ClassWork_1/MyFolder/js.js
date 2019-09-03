window.addEventListener("load", function () {
   var img = document.getElementById("myIMG");
   img.addEventListener("mouseover",function () {
        img.style.width = document.images[0].naturalWidth + "px";
        img.style.zIndex = "10";
        

   });
   img.addEventListener("mouseout",function () {
        img.style.width = "75px";       
   });

});