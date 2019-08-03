window.addEventListener("load", function () {
    var output = document.getElementById("p1");
    var arrayOfDiv = document.querySelectorAll("div");
    var arrayOfContentDiv=[];
    console.log(arrayOfDiv);

    function getInnerHTML() {
        for ( i = 0; i < arrayOfDiv.length; i++) {
            arrayOfContentDiv[i] = arrayOfDiv[i].innerHTML;
        }
        return arrayOfContentDiv;
    };
    getInnerHTML()

    document.addEventListener("keypress", function(e){
        var currentKey = String.fromCharCode(e.charCode);

        for ( j = 0; j < arrayOfContentDiv.length; j++) {
            if (currentKey == arrayOfContentDiv[j]){
                arrayOfDiv[j].style.backgroundColor = "red";
                currentDiv =arrayOfDiv[j]; 
            }
            
        }
        output.innerHTML += currentKey;

    },true)

    document.addEventListener("keyup", function(){
        currentDiv.style.backgroundColor = "green";
    })
},true)