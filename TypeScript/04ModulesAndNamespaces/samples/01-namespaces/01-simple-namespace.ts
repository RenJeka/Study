// namespace (пространство имен) - механизм для группировки кода и определения отдельных областей видимости. 
// Код, помещенный в пространство имен, находиться в области видимости пространства имен, а не в глобальной области видимости.
// Для того, чтобы элементы пространства имен были доступны за пределами пространства имен, необходимо использовать ключевое слово export.

// определение пространства имен с именем Sample1
namespace Sample1 {

    // класс будет доступен за пределами пространства Sample1
    export class MyClass1 {
        public message() {
            console.log("Sample1.MyClass1.message");
        }
    }

    class MyClass2 {
        public message() {
            console.log("Sample1.MyClass2.message");
        }
    }
}

namespace Sample2 {

    export class MyClass1 {
        public message() {
            console.log("Sample2.MyClass1.message");
        }
    }

    class MyClass2 {
        public message() {
            console.log("Sample2.MyClass2.message");
        }
    }
}

// следующий код находится в глобальной области видимости.

// Использование класса MyClass1 из пространства имен Sample1
let temp1 = new Sample1.MyClass1();
temp1.message();

let temp2 = new Sample2.MyClass1();
temp2.message();

