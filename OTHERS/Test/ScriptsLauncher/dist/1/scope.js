
var b = 5;
console.log(window);
function foo (a) {
	var b = "shadow";
	var window = 12;
	
	function bar(){
		
		console.log(a + window.b);
	}
	bar();
}

foo(2);
