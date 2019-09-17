var Shapes;
(function (Shapes) {
    class Circle {
        constructor() { console.log("Circle"); }
    }
    Shapes.Circle = Circle;
    class Square {
        constructor() { console.log("Square"); }
    }
    Shapes.Square = Square;
    let Complex;
    (function (Complex) {
        class Image {
            constructor() { console.log("Image"); }
        }
        Complex.Image = Image;
        class Animation {
            constructor() { console.log("Animation"); }
        }
        Complex.Animation = Animation;
    })(Complex = Shapes.Complex || (Shapes.Complex = {}));
})(Shapes || (Shapes = {}));
// создание псевдонима с именем complex для пространства имен Shapes.Complex
var complex = Shapes.Complex;
let img1 = new complex.Image();
let img2 = new Shapes.Complex.Image(); // тоже что и 22 строка
//# sourceMappingURL=02-aliases.js.map