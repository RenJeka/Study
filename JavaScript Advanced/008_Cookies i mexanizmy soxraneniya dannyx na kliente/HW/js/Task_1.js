window.addEventListener("load", function(){
    

    
    var color =this.document.getElementById("colSel_1"); 
    var btn_save =this.document.getElementById("btn_save"); 
    var input = this.document.getElementById("font_size"); 

    color.value = getCookies("color");
    input.value = getCookies("textSize");
    document.body.style.backgroundColor = color.value;
    document.body.style.fontSize = input.value + "px";

    btn_save.addEventListener("click", function (e) {
        document.body.style.backgroundColor = color.value;
        document.body.style.fontSize = input.value + "px";
        document.cookie ="color="+ color.value + ";max-age=3600";
        document.cookie ="textSize="+ input.value + ";max-age=3600";
        
    });

    function getCookies(name) {
        var cookieString = document.cookie;
        var pos;
        var startIndexValue;
        var endIndexValue;
        var value;

        pos = cookieString.indexOf(name + "=");
        startIndexValue = pos + name.length + 1;
        endIndexValue = cookieString.indexOf(";",startIndexValue);

        if (endIndexValue == -1) {
            endIndexValue = cookieString.length;
        }
        value = cookieString.substring(startIndexValue, endIndexValue);

        return value;
        

    }

});