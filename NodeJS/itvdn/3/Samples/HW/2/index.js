const fs = require('fs');

const fileName = 'yevhenii_test_file.txt';

const fileData = `Hello dear friend!
This is letter for you.
I would like to show you, that 'fs' module can write file and read data from file.
It can be implemented at low (by using buffer) or high level.  
`;

fs.writeFile(fileName, fileData, (error) => {
    if (error) throw error;
    console.log('file has been written successfully');
});


fs.readFile(fileName, (error, data) => {
    if (error) throw error;
    console.log('\nDATA FROM FILE: \n');
    console.log(data.toString());

});
