window.addEventListener("load", function () {
    
    var myCanvas = this.document.querySelector("canvas");
    
    var myContext =  myCanvas.getContext("2d");

    myContext.save();
    myContext.translate(200, 200);

    // for (let i = 0; i < 10; i++) {
    //     var  shiftX = i * 10 + 10;
    //     myContext.moveTo(shiftX,0);
    //     myContext.lineTo(shiftX, 110);
    //     myContext.stroke();
        
    // }
    // for (let i = 0; i < 10; i++) {
    //     var  shiftY = i * 10 + 10;
    //     myContext.moveTo(0,shiftY);
    //     myContext.lineTo(110, shiftY);
    //     myContext.stroke();

    // }

    for (let i = 0; i < 10; i++) {
        var  shiftX = i * 10 + 10;
        var  shiftY = i * 10 + 10;
        // myContext.beginPath();
        myContext.moveTo(shiftX,0);
        myContext.lineTo(shiftX, 110);
        // myContext.closePath();
        myContext.stroke();

        // myContext.beginPath();
        myContext.moveTo(0,shiftY);
        myContext.lineTo(110, shiftY);
        // myContext.closePath();
        myContext.stroke();

    }


    myContext.restore();


})