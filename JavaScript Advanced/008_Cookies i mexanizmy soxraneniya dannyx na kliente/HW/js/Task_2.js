window.addEventListener("load", function(){
    
    var color =this.document.getElementById("colSel_1"); 
    var btn_save =this.document.getElementById("btn_save"); 
    var input = this.document.getElementById("font_size"); 

    if (window.localStorage.color &&window.localStorage.textSize) {
        if (window.localStorage.color.length!=0 && window.localStorage.textSize.length !=0) {
            color.value = window.localStorage.getItem("color");
            input.value = window.localStorage.getItem("textSize");
        }
    }
   
    
     document.body.style.backgroundColor = color.value;
     document.body.style.fontSize = input.value + "px";

    btn_save.addEventListener("click", function (e) {
        document.body.style.backgroundColor = color.value;
        document.body.style.fontSize = input.value + "px";

        window.localStorage.setItem("color", color.value);
        window.localStorage.setItem("textSize", input.value);
        console.log(color.value);
        console.log(input.value);

        
    });



});