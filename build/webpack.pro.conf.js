
var webpackBaseConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var webpackDevConfig = merge(webpackBaseConfig, {
	output: {
		path: path.join(config.root, 'static', 'js'),
		publicPath: './js',
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	      output: {
	        comments: false,
	      },
	      compress: {
	        warnings: false
	      }
	    }),
		new HtmlWebpackPlugin({
			filename: path.join(config.root, 'static/index.html'),
			template: path.join(config.root, 'index.html'),
			inject: true,
			hash: true,
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			filename: path.join(config.root, 'static/main.html'),
			template: path.join(config.root, 'main.html'),
			inject: true,
			hash: true,
			chunks: ['main']
		}),
	]
})
homeMap.file.map(function(it,i) {
	var o = new HtmlWebpackPlugin({
		filename: it.page,
		template: path.join(config.rootPath, it.page),
		inject: true,
		hash: true,
		chunks: it.chunks
	})
	webpackDevConfig.plugins.push(o);
})
module.exports = webpackDevConfig;