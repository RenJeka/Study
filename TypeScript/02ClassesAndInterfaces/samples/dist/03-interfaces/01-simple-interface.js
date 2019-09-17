// obj: { name: string } - параметр obj должен быть объектом со свойством name строкового типа
function printValue1(obj) {
    console.log(obj.name);
}
let myObj1 = { value: 10, name: "Hello" };
printValue1(myObj1); // myObj1 имеет свойство name
let myObj2 = { data: 10, param: "Hello" };
// функция printValue2 принимает параметр типа NamedValue
// в качестве параметра можно передать экземпляр класса, который реализовал интерфейс
// или объект, который по своей структуре подходит под указанный интерфейс. Использовать приведение типов как в большинстве других языков не нужно
function printValue2(obj) {
    console.log(obj.name);
}
let myObj3 = { value: 10, name: "World" };
printValue1(myObj3); // myObj1 имеет свойство name
let myObj4 = { data: 10, param: "Hello" };
//printValue1(myObj4); // myObj2 не может использоваться в качестве параметра, так как не имеет свойства name
//# sourceMappingURL=01-simple-interface.js.map