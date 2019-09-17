namespace Shapes {
    
    export class Circle { 
        constructor() { console.log("Circle"); }
    }
    export class Square { 
        constructor() { console.log("Square"); }
    }

    export namespace Complex {
        export class Image {
            constructor() { console.log("Image"); }
        }
        export class Animation { 
            constructor() { console.log("Animation"); }
        }
    }
}

// создание псевдонима с именем complex для пространства имен Shapes.Complex
import complex = Shapes.Complex;

let img1 = new complex.Image();
let img2 = new Shapes.Complex.Image(); // тоже что и 22 строка