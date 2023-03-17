const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yevhenii-first-mongodb')
    .then(() => {
        console.log('MongoDB has started!');
    })
    .catch((error) => {
        console.log(error);
    })

require('./person.modal')

const Person = mongoose.model('persons')

// Person.find({age: 29})
//     .then((persons) => {
//         console.log(JSON.stringify(persons, null, 2));
//
//     });

Person
    .f
    .find({name: 'Yevhenii'})
    .then((persons) => {
        console.log(JSON.stringify(persons, null, 2));
        // const p = persons[0];
        // Person
        //     .findOneAndRemove({_id: p._id})
        //     .then(() => {
        //         console.log('removed');
        //
        //     })

    });

