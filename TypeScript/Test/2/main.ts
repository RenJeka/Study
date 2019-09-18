class Cat {



		weight:number = 2.5;

		eat(){
			this.weight += 0.5;
			console.log("eat = " + this.weight);
		}
		
		run(){
			this.weight -= 0.5;
			console.log("run = " + this.weight);
		}

		showWeight(){
			console.log('%c 龴ↀ◡ↀ龴   My owner, my weight only ' + this.weight + "kg. Can I eat more?",  'background: #222; color: #bada55; font-size: 18px;');
		}


}

let cat1 = new Cat();
cat1.eat();
cat1.eat();
cat1.eat();

cat1.run();

cat1.showWeight();
console.log(cat1);