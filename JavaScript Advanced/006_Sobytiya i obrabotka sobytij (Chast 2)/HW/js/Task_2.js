window.addEventListener("load", function () {
    
    var arrayOfParagraph = document.getElementsByTagName("p");
    this.console.dir(arrayOfParagraph);
    var mainBody = this.document.getElementById("main");

    mainBody.addEventListener("keypress", function (e) {
        var currentChar = String.fromCharCode(e.charCode);
        switch (currentChar) {
            case "r":
                for (var i = 0; i < arrayOfParagraph.length; i++) {
                    arrayOfParagraph[i].style.color = "red";
                }
                break;
            case "g":
                for (var i = 0; i < arrayOfParagraph.length; i++) {
                    arrayOfParagraph[i].style.color = "green";
                }
                break;
            case "b":
                for (var i = 0; i < arrayOfParagraph.length; i++) {
                    arrayOfParagraph[i].style.color = "blue";
                }
                break;
        
            default:
                for (var i = 0; i < arrayOfParagraph.length; i++) {
                    arrayOfParagraph[i].style.color = "black";
                }
                break;
        }
        console.log(currentChar);
    })


})