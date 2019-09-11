class Student {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    print() {
        console.log(`Student - ${this.firstName}, age - ${this.age} years.`);
    }
}
let student1 = new Student("Ivan", 25); // вызов конструктора с передачей значений
let student2 = new Student("John", 24);
student1.print();
student2.print();
//# sourceMappingURL=03-constructor-params.js.map