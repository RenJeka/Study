// compile the template

let obj = { doesWhat: "rocks!" };
var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
// execute the compiled template and print the output to the console


console.log(template(obj));

console.dir(template);
