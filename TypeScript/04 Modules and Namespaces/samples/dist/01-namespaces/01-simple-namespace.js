// namespace (пространство имен) - механизм для группировки кода и определения отдельных областей видимости. 
// Код, помещенный в пространство имен, находиться в области видимости пространства имен, а не в глобальной области видимости.
// Для того, чтобы элементы пространства имен были доступны за пределами пространства имен, необходимо использовать ключевое слово export.
// определение пространства имен с именем Sample1
var Sample1;
(function (Sample1) {
    // класс будет доступен за пределами пространства Sample1
    class MyClass1 {
        message() {
            console.log("Sample1.MyClass1.message");
        }
    }
    Sample1.MyClass1 = MyClass1;
    class MyClass2 {
        message() {
            console.log("Sample1.MyClass2.message");
        }
    }
})(Sample1 || (Sample1 = {}));
var Sample2;
(function (Sample2) {
    class MyClass1 {
        message() {
            console.log("Sample2.MyClass1.message");
        }
    }
    Sample2.MyClass1 = MyClass1;
    class MyClass2 {
        message() {
            console.log("Sample2.MyClass2.message");
        }
    }
})(Sample2 || (Sample2 = {}));
// следующий код находится в глобальной области видимости.
// Использование класса MyClass1 из пространства имен Sample1
let temp1 = new Sample1.MyClass1();
temp1.message();
let temp2 = new Sample2.MyClass1();
temp2.message();
//# sourceMappingURL=01-simple-namespace.js.map