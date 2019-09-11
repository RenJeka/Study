// с помощью ключевого слова readonly можно создать поля только на чтение.
// Такое поле может быть инициализировано в момент его создания или в конструкторе 
class Dog {
    constructor(name) {
        this.numberOfLegs = 4;
        this.name = name;
    }
}
let dog = new Dog("Sharik");
console.log(dog.name);
console.log(dog.numberOfLegs);
//dog.numberOfLegs = 5; // [ts] cannot assign to 'numberOfLags' because it is a constant or read-only property
//dog.name = "";
//# sourceMappingURL=05-readonly.js.map