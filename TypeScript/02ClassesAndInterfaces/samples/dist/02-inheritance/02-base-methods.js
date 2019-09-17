// базовый тип данных
class Shape {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        return `This is ${this.name}.`;
    }
}
// производный тип данных
class Rect extends Shape {
    constructor(width, height) {
        super("Rectangle"); // запуск конструктора родительского класса
        this.width = width;
        this.height = height;
    }
    getInfo() {
        let baseInfo = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}
// производный тип данных
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
}
let shapes = []; // создание массива базового типа
shapes.push(new Rect(100, 200)); // заполнение массива экземплярами производного класса
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));
// в массив shapes можно добавлять только объекты имеющие идентичную с классом Shape структуру
shapes.push({
    name: "foo",
    getInfo: () => { return "bar"; }
});
for (let i = 0; i < shapes.length; ++i) {
    let info = shapes[i].getInfo();
    console.log(info);
}
//# sourceMappingURL=02-base-methods.js.map