var config = {
	entry: ['./app/app.es6'],
	output: {
		filename: 'bundle.js'
	},
	
	module: {
		preLoaders: [
			{ loader: 'eslint', test: /\.es6?$/,  exclude: /node_modules/ }
		],

		loaders: [
			{ loader: 'babel-loader', test: /\.es6$/, exclude: /node_modules/ }
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	},

	eslint: {
        failOnWarning: true,
        failOnError: true
    }
}

module.exports = config;