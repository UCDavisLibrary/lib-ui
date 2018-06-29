const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		library: '',
		libraryTarget: 'commonjs'
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
        test: /\.css$/,
				exclude: /node_modules/,
        loader: [ 'style-loader', 'css-loader' ]
      },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|\.spec.js$|\.stories.js$)/,
				loader: 'babel-loader'
			}
		]
	}
};
