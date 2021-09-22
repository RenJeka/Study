'use strict';

console.log('Function is loading');

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.table; // Имя таблицы получаем с  энвайромента нашей люмбды.

const scanTable = () => {
	const params = {
		TableName: TABLE_NAME,
	}
	// return dynamodb.scan(params).promise();
	return new Promise((resolve, reject) => {
		documentClient.scan(params, function(err, data) {
			if(err) {
				console.log(err);
				reject(err);
			}
			resolve(data);
		})
		
	});
};

// standarts modules
// fs, moment, aws-sdk

module.exports.handler = (event, context, callback) => {

	const dev = event.dev; // NULL

	scanTable()
		.then((result) => {
			if (dev) {
				console.log(result);
			}
			callback(null, result);
		})
		.catch((error) => {
			if (dev) {
				console.error(error);
			}
			callback(error);
		})

}