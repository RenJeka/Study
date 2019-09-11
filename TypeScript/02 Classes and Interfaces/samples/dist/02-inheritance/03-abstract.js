// abstract - ключевое слово, которое позволяет создавать абстрактные методы и абстрактные классы.
// абстрактный класс - это класс, который может выступать только в роли базового класса. Создать экземпляр абстрактного класса не получится.
// абстрактный метод - это метод, который не имеет реализации в текущем классе но обязательно должен быть реализован в производном классе.
// абстрактные методы могут создаваться только в абстрактных классах.
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(this.name + " передвигается");
    }
}
class Cat extends Animal {
    constructor() {
        super("Кот");
    }
    makeSound() {
        console.log("Мяу-Мяу");
    }
}
class Cow extends Animal {
    constructor() {
        super("Корова");
    }
    makeSound() {
        console.log("Му-у-у-у");
    }
}
let murzik = new Cat();
murzik.makeSound();
murzik.move();
let burenka = new Cow();
burenka.makeSound();
burenka.move();
//# sourceMappingURL=03-abstract.js.map