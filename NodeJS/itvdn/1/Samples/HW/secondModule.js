class MyClass1 {
    name = null;
    a = null;
    b = null;

    constructor(name, a, b) {
        this.name = name;
        this.a = a;
        this.b = b;
    }

    log() {
        console.log(`
            In myClass1: 
            name is ${this.name}
            a = ${this.a}
            b = ${this.b}
            so sum will be ${this.a + this.b}
        `);
    }
}


module.exports = MyClass1;
