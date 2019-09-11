// implements - ключевое слово для реализации интерфейса в классе
// если члены интерфейса не будут определены в классе компилятор выдаст ошибку
class DailyReport {
    constructor() {
        this.name = "Daily Report";
    }
    build() {
        return "some daili report data";
    }
}
class WeaklyReport {
    constructor() {
        this.name = "Weakly Report";
    }
    build() {
        return "some weakly report data";
    }
}
console.log(new DailyReport().build());
console.log(new WeaklyReport().build());
//# sourceMappingURL=05-implementing.js.map