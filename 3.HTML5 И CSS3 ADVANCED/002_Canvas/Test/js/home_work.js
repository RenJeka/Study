window.addEventListener("load", function () {
    var myCanvas = this.document.querySelector("canvas");

    var ctx2 = myCanvas.getContext("2d");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    // var currentX = myCanvas.width/2;
    // var currentY = myCanvas.height/2;

    var startX = 50;
    var startY = 100;
    var currentX ;
    var currentY ;
    var a = 0;
    var b = 0;
    var flag = true;
    var flag2 = false;
    function shiftLine(shiftX, shiftY) {
        currentX = currentX + shiftX;
        currentY = currentY + shiftY;
        ctx2.lineTo(currentX, currentY);
    }
    setInterval(function () {

        ctx2.clearRect(0,0,ctx2.canvas.width, ctx2.canvas.height);
        currentX = 200;
        currentY = 100;
        a += 0;

        if (b >= -0.4 && b < 0.4 ) {
            if (flag2 == false) {
                b += 0.01;
            }else if(flag2 == true){
                
                b -= 0.01;
            }
            
        }else if (b >= 0.4) {

            flag2 = true;
            b = 0;

        }else if (b < -0.4  ) {
            flag2 = false;
            b = 0;
        }
            
        
        


        flag = !flag;

        if (flag == true) {
            c = 1;
        }else{
            c = -1;
        }

        // console.log(a);
        console.log(b);
        // ctx2.transform( 1 , a , b , 1 , 0 , 0 );
        ctx2.scale(c,1);
        console.log("c = " + c);
        
        
        ctx2.beginPath();
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
        ctx2.closePath();
        ctx2.fillStyle="red";
        ctx2.fill();
        
        ctx2.stroke();
    }, 50);
    
    
    // =====TRANSFORMATION==================
    // ctx2.rotate(.2);
    // ctx2.scale(1.5,1.5);
    // ctx2.translate(100, 100);
    //======================================


});
    