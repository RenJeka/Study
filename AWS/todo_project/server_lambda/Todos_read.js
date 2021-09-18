'use strict';

console.log('Function is loading');

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
// const httpRequest = new AWS.HttpRequest();

const documentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.table; // Имя таблицы получаем с  энвайромента нашей люмбды.

const scanTable = () => {
	const params = {
		TableName: TABLE_NAME,
	}
	// return dynamodb.scan(params).promise();
	return new Promise((resolve, reject) => {
		documentClient.scan(params, function(err, data) {
			if (err) {
				console.log(err);
				reject(err);
			}
			resolve(data);
		})

	});
};

function getLastIndex(scanTableResult) {
	if (scanTableResult.Items.length > 0) {
		let idsArr = scanTableResult.Items.map(item => {
			const indexOfIdNumber = item.id.indexOf('-') + 1;
			const idAsString = item.id.slice(indexOfIdNumber);
			return parseInt(idAsString);
		});
	
		idsArr.sort((prev, next) => next - prev);
		return idsArr[0];
	} else {
		return 1;
	}
	
}

function putItemToTable(todoName) {

	return scanTable()
		.then((result) => {
			// Find index to write last todo's
			const lastIndex = getLastIndex(result);
			const lastId = 'item-' + (lastIndex + 1);

			// Prepare item for writing to table
			const AttributeValue = {
				"id": { S: lastId },
				"name": { S: todoName },
				"statement": { BOOL: false }
			};

			// Prepare params for writing to table
			const paramsForPutItem = {
				Item: AttributeValue,
				TableName: TABLE_NAME,
				// ReturnValues: 'ALL_OLD',
				// ReturnConsumedCapacity: 'TOTAL',
				// ReturnItemCollectionMetrics: 'SIZE'
			};
			return paramsForPutItem;
		})
		.then((paramsForPutItem) => {
			return new Promise((resolve, reject) => {
				dynamodb.putItem(paramsForPutItem, function(err, data) {

					if (err) {
						console.log(err);
						reject(err);
					}
					console.log('data from dynamodb.putItem: ', data);
					resolve(scanTable());
				})
			});
		})
		.catch((error) => {
			console.error(error);
		});
}

function deleteItem(id) {
	return scanTable()
		.then((result) => {
			
			// Find item by id
			const targetItem = result.Items.find(item => item.id === id);

			const AttributeValue = {
				"id": { S: targetItem.id }
			};

			// Prepare params for writing to table
			const paramsForDeleteItem = {
				Key: AttributeValue,
				TableName: TABLE_NAME,
			};

			return paramsForDeleteItem;
		})
		.then((paramsForDeleteItem) => {
			return new Promise((resolve, reject) => {
				dynamodb.deleteItem(paramsForDeleteItem, function(err, data) {

					if (err) {
						console.log(err);
						reject(err);
					}
					console.log('data from dynamodb.putItem: ', data);
					resolve(scanTable());
				})
			});
		})
		// .catch((error) => {
		// 	console.error(error);
		// });
}


// standarts modules
// fs, moment, aws-sdk

module.exports.handler = (event, context, callback) => {

	const dev = event.dev; // NULL

	switch (event['http-method']) {
		
		case 'GET':
			scanTable()
				.then((result) => {
					if (dev) {
						console.log('scanTable result (dev)', result);
					}

					console.log('scanTable result', result);
					callback(null, { event: event, body: result });
				})
				.catch((error) => {
					if (dev) {
						console.error('scanTable error', error);
					}
					callback(error);
				});
			break;
			
		case 'POST':
			putItemToTable(event.body.text)
				.then((result) => {
					if (dev) {
						console.log('putItemToTable dev result', result);
					}

					callback(null, { event: event, body: result });
					// callback(null, result);
				})
				.catch((error) => {
					if (dev) {
						console.error(error);
					}
					callback(error);
				});
			break;
			
		case 'DELETE':
			if (event.id) {
				deleteItem(event.id)
					.then((result) => {
						callback(null, { event: event, body: result });
					})
					.catch((error) => {
						if (dev) {
							console.error(error);
						}
						callback(error);
					});
			}
			break;

		default:
			scanTable()
				.then((result) => {
					if (dev) {
						console.log('scanTable result (dev)', result);
					}

					console.log('scanTable result', result);
					callback(null, { event: event, body: result });
				})
				.catch((error) => {
					if (dev) {
						console.error('scanTable error', error);
					}
					callback(error);
				});
			break;
	}
};
