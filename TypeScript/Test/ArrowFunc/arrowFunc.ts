//================================================
let f1 = () =>console.log("%c Hello, there! Guys.", "color:yellow");


f1();

// ===============================================

// function f2(x, y) {
// 	return x*x +(2*x*y) + y*y;
// }

let f2 = (x:number,y:number) => x*x +(2*x*y) + y*y;

console.log(f2(13,26));

//===============================================

let array1:number[]=[1,2,3,4,5,6,7,8,9,10];

console.log(array1);

let sum:number = 0;

array1.forEach(elementOfArray =>sum += elementOfArray);

let squared = array1.map(n => n * n)

console.log("sum = " + sum);
console.log(squared);

//================================================


let person ={
	name: "Bob",
	greet :  () =>{
		console.log(`Hello, my name is ${this.name}`);
		console.log(this);
	}
}

person.greet();


(()=>console.log("Куча скобочек"))();



(()=>"()")()   // Смотри какую херню можно творить на JavaScript. Это функция

// ================================================




















