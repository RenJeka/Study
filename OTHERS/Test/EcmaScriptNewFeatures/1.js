const COLOR = "#ffeebb";

console.log(COLOR);

const array = [1, 2, 3, 4, 5, 6, 11, 25, 355];

let aaa;

if (true){
    aaa = 7 + 19;
    console.log(aaa);

}

// ==================

const str = 'Hello';

console.log(str.startsWith('He'));
console.log(str.startsWith('e'));

console.log(str.endsWith('lo'));
console.log(str.endsWith('e'));

console.log(str.includes('llo'));

console.log(str.repeat(3));

console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.padStart(10, '1234')); //Минимальная длинна строки (добавляет символы в начале)
console.log(str.padEnd(10, '1234')); //Минимальная длинна строки (добавляет символы в конце)

console.log();
