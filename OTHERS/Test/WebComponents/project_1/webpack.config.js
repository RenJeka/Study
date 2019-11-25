
let path = require('path');


let mySettings =  {
	entry: {
		index: './src/index.js',
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		publicPath: 'dist/',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
				exclude: '/node_modules/',
				// enforce: 'pre',
			},


		],
	},

	devServer: {
		overlay: true,
	},

	devtool: 'source-map',
}

module.exports = mySettings;