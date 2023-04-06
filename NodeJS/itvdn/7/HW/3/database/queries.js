const mssql = require('mssql');
const connection = require('./config');
const tableName = 'nodejs_lesson_7';

module.exports = {

	tableRows: '',
	// выбор всех элементов и отображение в виде таблицы
	getAllItems: function (req, res) {

		const self = this;
		self.tableRows = ``;

		const request = new mssql.Request(connection);
		request.stream = true;
		request.query(`SELECT * FROM ${tableName}`);

		request.on('row', function (row) {
			if (req.url == '/') {
				self.tableRows += ` <tr>
							<td>${row.name} </td>
							<td>${row.description}</td>
							<td>${row.completed ? 'yes' : 'no'}</td>
						</tr>`

			} else {
				self.tableRows += ` <tr>
							<td><span class="glyphicon glyphicon-pencil edit" style="cursor: pointer" 
							id="${row.id}"> &nbsp; </span> 
							<span class="glyphicon glyphicon-remove delete" style="cursor: pointer" 
							id="${row.id}"> &nbsp; </span>
							${row.name} </td>
							<td>${row.description}</td>
							<td>${row.completed ? 'yes' : 'no'}</td>
						</tr>`
			}
		});

		request.on('done', function (affected) {

			if (req.url == '/') {
				const options = { edit: false }
			} else {
				const options = { edit: true }
			}

			if (req.url == '/') {
				res.render('index', { data: self.tableRows, buttons: false });
			} else {
				res.render('index', { data: self.tableRows, buttons: true });
			}
		})

	},

	// добавить элемент в бд
	insertItem: function (data, req, res) {

		const inserts = {
			name: data.name,
			description: data.description,
			completed: parseInt(data.completed)
		}

		const ps = new mssql.PreparedStatement(connection);

		ps.input('name', mssql.Text);
		ps.input('description', mssql.Text);
		ps.input('completed', mssql.Int);

		ps.prepare(`INSERT INTO ${tableName} (name, description, completed) VALUES (@name , @description, @completed)`, function (err) {
			if (err) console.log(err);
			const request = ps.execute(inserts, function (err) {

				console.log(err);
				console.log('add item');
				ps.unprepare();
			});
		});
	},

	// загрузить элемент из бд по id 
	loadItemById: function (req, res) {

		const inserts = {
			id: parseInt(req.params.id)
		};

		const ps = new mssql.PreparedStatement(connection);
		ps.input('id', mssql.Int);

		ps.prepare(`SELECT * FROM ${tableName} WHERE id=@id`, function (err) {

			ps.execute(inserts, function (err, recordsets ) {
				if (err) console.log(err);
				console.log('get item by id');

				const row = recordsets.recordset[0];
				res.render('edit_item_page', {
					id: row.id,
					name: row.name,
					description: row.description,
					completed: row.completed
				});

				ps.unprepare();
			});
		});
	},

	updateItem: function (req, res) {

		const inserts = {
			id: parseInt(req.body.id),
			name: req.body.name,
			description: req.body.description,
			completed: parseInt(req.body.completed)
		};

		const ps = new mssql.PreparedStatement(connection);

		ps.input('id', mssql.Int);
		ps.input('name', mssql.Text);
		ps.input('description', mssql.Text);
		ps.input('completed', mssql.Int)

		ps.prepare(`UPDATE ${tableName} SET name=@name, description=@description, completed=@completed WHERE id=@id`, function (err) {
			if (err) console.log(err)
			ps.execute(inserts, function (err) {
				if (err) console.log(err);

				console.log('item updated');
				ps.unprepare();
			});
		});
	},

	deleteItem: function (req, res) {

		const self = this;
		const inserts = {
			id: parseInt(req.params.id)
		};

		const ps = new mssql.PreparedStatement(connection);

		ps.input('id', mssql.Int);

		ps.prepare(`DELETE FROM ${tableName} WHERE id=@id`, function (err) {
			if (err) console.log(err)

			ps.execute(inserts, function (err) {
				if (err) console.log(err);

				console.log('item deleted');

				ps.unprepare();
				res.send('OK');

			});
		});
	}
}
