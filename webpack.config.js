const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
				exclude: /(node_modules|theme)/,
        loader: [ 'style-loader', 'css-loader' ]
      },
			{
        test: /theme.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|\.spec.js$|\.stories.js$)/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
    new ExtractTextPlugin("theme.css"),
  ]
};
