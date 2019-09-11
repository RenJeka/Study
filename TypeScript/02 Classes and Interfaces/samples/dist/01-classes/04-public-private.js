class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.company = "ITVDN";
    }
    printToConsole() {
        console.log(`Employee ${this.name}, position - ${this.position}, company - ${this.company}`);
    }
}
let emp1 = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "Team Lead";
//emp1.company = "..."; // [ts] Property 'company' is private and only accessible within class 'Employee'
emp1.printToConsole();
//# sourceMappingURL=04-public-private.js.map