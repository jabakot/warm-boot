const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'stylus-loader']
				})
			},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.(woff2|woff|svg|png|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
}
