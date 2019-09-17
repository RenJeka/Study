/*
    Модуль - отдельный файл со своей областью видимости. Переменные, функции, классы и т.д. определенные в модуле
    не доступные за его пределами.
    
    Любой файл, в котором на верхнем уровне находиться import или export является модулем.
    
    Зависимости между модулями определяются с помощью ключевого слова import

    Модули импортируются с помощью загрузчиков модулей. Во время выполнения загрузчик модуля ответственный за определение
    расположения модуля и его загрузку перед его выполнением. 

    Загрузчики модулей - Webpack, CommonJS, SystemJS, requier.js
    */

export interface Validator {
    validate(value: string): boolean;
}

export class CreditCardValidator implements Validator {
    validate(value: string): boolean {
        return false;
    }
}

export class UrlValidator implements Validator {
    validate(value: string): boolean {
        return false;
    }
}

