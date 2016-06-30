var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:3000/',
		'webpack/hot/only-dev-server',
		'./src/js/main.js'
	],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/app'),
		publicPath: 'http://127.0.0.1:3000/'
	},
	module: {
		loaders: [
			{ 
				test: [/\.less$/, /\.css$/],
				loader: 'style!css!autoprefixer!less'
			},
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				loader: 'react-hot!babel'
			},
			{
				test: /\.(png|jpg)$/, 
				loader: 'url?limit=8192'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', 'less', 'css']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin('./common/util.js'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			'__DEV__': JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
			'__PRERELEASE__': JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
		})
	]
};