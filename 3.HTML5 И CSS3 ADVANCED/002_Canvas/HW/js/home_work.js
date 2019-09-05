window.addEventListener("load", function () {
    var myCanvas = this.document.querySelector("canvas");
    var ctx = myCanvas.getContext("2d");

    var shiftX = 0;
    var shiftY = 0;
    var startX = 160;
    var startY = 141;
    var myGradient = ctx.createLinearGradient(startX,startY,startX + 250,startY);

    myGradient.addColorStop(0.25, "red");
    myGradient.addColorStop(0.25, "white");
    myGradient.addColorStop(0.75, "white");
    myGradient.addColorStop(0.75, "red");
    ctx.fillStyle = myGradient;
    // ctx.shadowColor = "black";
    // ctx.shadowOffsetX = 5;
    // ctx.shadowOffsetY = 5;
    // ctx.shadowBlur = 3;
    ctx.lineWidth = 0.01;

    ctx.beginPath();
    ctx.moveTo(startX+shiftX, startY+shiftY);
    ctx.bezierCurveTo(212+shiftX, 173+shiftY, 356+shiftX, 89+shiftY, 414+shiftX, 128+shiftY);
    ctx.lineTo(414,278 );
    ctx.bezierCurveTo(390 , 230 , 230 , 330 , 160 , 291 );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    var currentX;
    var currentY;

    function shiftLine(shiftX, shiftY) {

        currentX = currentX + shiftX;
        currentY = currentY + shiftY;
        ctx2.lineTo(currentX, currentY);

    }

    var shift1X = 130;
    var shift1Y = 90;
    var ctx2 = myCanvas.getContext("2d");
    // ctx2.moveTo(startX +shift1X,startY+shift1Y);

    currentX =startX +shift1X;
    currentY = startY+shift1Y;
    ctx2.moveTo(currentX,currentY);
    shiftLine(30,0);
    shiftLine(-3,-10);
    shiftLine(15,-20);
    shiftLine(-5,-3);
    shiftLine(5,-15);
    shiftLine(-15,2);
    shiftLine(-2,-7);
    shiftLine(-15,20);
    shiftLine(7,-35);
    shiftLine(-8,4);
    shiftLine(-10,-20);
    shiftLine(0,120);
    shiftLine(4,0);
    // shiftLine(0,-35);
    ctx2.closePath();
    // ctx2.fillStyle="red"
    ctx2.fill();


    ctx2.lineWidth = 3;
    console.dir(ctx2);
    ctx2.stroke();



})
    
