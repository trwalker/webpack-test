var config = {
	entry: ['./app/app.js'],
	output: {
		filename: 'index.js'
	},
	
	module: {
		preLoaders: [
			{ loader: 'eslint', test: /\.js$/,  exclude: /node_modules/ }
		],

		loaders: [
			{ loader: 'babel', query: { presets: ['es2015'] }, test: /\.js$/, exclude: /node_modules/ },
			{ loader: 'style-loader!css-loader', test: /\.css$/, exclude: /node_modules/ }
		]
	},

	resolve: {
		extensions: ['', '.js']
	},

	eslint: {
        failOnWarning: true,
        failOnError: true
    }
}

module.exports = config;