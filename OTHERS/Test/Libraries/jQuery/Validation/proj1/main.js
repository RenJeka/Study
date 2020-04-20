// $("#btn1").click(function (e) { 
// 	e.preventDefault();
// 	$(".block1").toggleClass("green");
	
// });
$(document).ready(function () {

	$.validator.addMethod("customMethod1", function (value, element) { 
		console.log(value);
		console.log(element);
		console.dir(element);
		return value.length >= 6 && /\d/.test(value) && /\D/i.test(value)
		
		// Вариант с опциональным параметром (нужно поле required) 
		// this.optional(element) || value.length >= 6 && /\d/.test(value) && /\w/i.test(value);


	 }, "Поле должно содержать минимум 6 знаков, минимум одну цифру и одну букву");

	 // 
	$("#commentForm").validate({
		rules: {
			name: {
				required: true,
			},
	
			pass1: {
				required: true,
				
			},
	
			pass2: {
				required: true,
				equalTo: "#pass1",
			},

			custom1: {

				customMethod1: true,
			}
		},
		messages: {
			name: {
				required : "Уважаеммые пользователи сайта ...!!! Кх.. кх.."
			},
	
			pass1: {
	
			},
	
			pass2: {
	
			}
	
		}
	});
	
});
