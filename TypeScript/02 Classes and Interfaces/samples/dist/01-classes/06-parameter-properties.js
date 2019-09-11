class Person {
    // Если при определении параметров в конструкторе указать для них модификаторы доступа
    // Эти параметры автоматически станут полями класса с соответствующим уровнем доступа
    // и значениями, которые будут установлены при вызове конструктора.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name + " " + this.age);
    }
}
let person = new Person("Jhon", 25);
person.print();
person.name = "111"; // поле public
//person.age = 111; // поле private
//# sourceMappingURL=06-parameter-properties.js.map