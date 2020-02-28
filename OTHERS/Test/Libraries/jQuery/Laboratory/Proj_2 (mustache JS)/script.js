
let aaa = require('mustache');

let arrayOfObjects = [
		{
			title: 'John',
			someResult: function(){
				return 111+222;
			}
		},

		{
			title: 'Bob',
			someResult: function(){
				return 222+333;
			}
		},

		{
			title: 'Nency',
			someResult: function(){
				return 333+444;
			}
		}];

let mustacheResult;

	for (var i = 0; i < arrayOfObjects.length; i++) {

		mustacheResult = aaa.render("Hello, {{title}}. How are you? Let`s count something. Result is {{someResult}}", arrayOfObjects[i]);

		document.body.innerHTML += mustacheResult  + '<br>';
	}
	

	
