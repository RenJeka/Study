var XLSX = require("xlsx");
var fs = require("fs");
var workbook = XLSX.readFile("demo.xlsx");
var sheet_name_list = workbook.SheetNames;
// console.log(sheet_name_list); // getting as Sheet1

sheet_name_list.forEach(function (y) {
    var worksheet = workbook.Sheets[y];
    //getting the complete sheet
    // console.log(worksheet);

    var headers = {};
    var data = [];
	
	// console.log(worksheet)
    for (z in worksheet) {
        if (z[0] === "!") continue;
        //parse out the column, row, and value
        //var col = z.substring(0, 1);
		var col = z.match(/[A-Z]+/)[0] // letters, that means columns
        //console.log(col);

        //var row = parseInt(z.substring(1));
		var row = z.match(/\d+/)[0] // digits (numbers), that means rows
        //console.log(row);

        var value = null;
		if((worksheet[z].v).toString().toLowerCase() !== "null") {
			value = worksheet[z].v
		}
		
        //store header names
        if (row == 1) {
            headers[col] = value;
            // storing the header names
            continue;
        }

        if (!data[row]) data[row] = {};
        data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();

    // console.log(data);

    const resultWritingFile = fs.writeFile('result.json', JSON.stringify(data), 'utf8', function (error) {
        if (error) {
            throw error;
        }
        console.log('file has been wrote successfully! Well Done!');
    });
});
