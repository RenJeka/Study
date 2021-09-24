const fs = require('fs');

const readme = JSON.parse(fs.readFileSync('result.json', 'utf8'));
const dataArray = Array.from(readme)

console.log(dataArray.length);

const resultArray = [];

dataArray.forEach((dataItem) => {
    let wrapperObj = Object.assign(dataItem);
    wrapperObj["deliveryTypes"] = ["api"];
    wrapperObj["offerRequestType"] = "dynamic";
    wrapperObj["scopes"] = {
        "sharing": [
            "passport", "internal-passport", "foreign-passport", "taxpayer-card", "reference-internally-displaced-person"
        ],
            "identification": [ ],
            "documentIdentification": [
            "internal-passport","foreign-passport", "age-range"
        ]
    }
    resultArray.push(wrapperObj);
})

fs.writeFile('test-1.json', JSON.stringify(resultArray), 'utf8',  function (error) {
    if (error) {
        throw error;
    }
    console.log('done!');
})
console.log(resultArray[0]);
