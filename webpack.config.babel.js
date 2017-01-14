import path from 'path';

module.exports = {
	entry: './examples/js/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel'
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		compress: true,
		contentBase : './',
		inline: true,
		port: 8008
	}
}
