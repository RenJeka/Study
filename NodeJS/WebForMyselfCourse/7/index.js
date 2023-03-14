const fs = require('fs');

// fs.writeFileSync('test.txt', 'Hello, file! This is simple information!');
//
// const fileData = fs.readFileSync('test.txt', { encoding: 'utf-8' });
//
// console.log(fileData);

fs.writeFile('test.txt','Hello, file! This is simple information!', (err) => {
    if (err) throw new Error(err);

    fs.rename('test.txt', 'test2.txt', () => {
        if (err) throw new Error(err);
        fs.readFile('test2.txt', {encoding: 'utf-8'},  (err, data) => {
            if (err) throw new Error(err);
            console.log(data);
        });
    });


});




console.log(1);


