var webpack = require('webpack');
var webpackBaseConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var config = require('../config');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var palMap = require('../pal-map');
var webpackDevConfig = merge(webpackBaseConfig, {
	output: {
		path: path.join(config.rootPath, '_dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		
		//测试环境错误提示
		/*new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),*/
		//开启webpack热更新功能
		new webpack.HotModuleReplacementPlugin(),
		//webpack编译过程中出错的时候跳过报错阶段，不会阻塞编译，在编译结束后报错
		new webpack.NoEmitOnErrorsPlugin(),
		//自动将依赖注入html模板，并输出最终的html文件到目标文件夹
		/*new HtmlWebpackPlugin({
			filename: 'app.html',
			template: path.join(config.rootPath, 'app.html'),
			inject: true,
			hash: true,
			chunks: ['app']
		}),
		new HtmlWebpackPlugin({
			filename: 'card.html',
			template: path.join(config.rootPath, 'card.html'),
			inject: true,
			hash: true,
			chunks: ['card']
		}),*/
		//友好的错误提示
		new FriendlyErrorsPlugin()
	]
})
palMap.file.map(function(it,i) {
	var o = new HtmlWebpackPlugin({
		filename: it.page,
		template: path.join(config.rootPath, it.page),
		inject: true,
		hash: true,
		chunks: it.chunks
	})
	webpackDevConfig.plugins.push(o);
	if(palMap.default && it.page == palMap.default) {
		var indexPage = new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(config.rootPath, it.page),
			inject: true,
			hash: true,
			chunks: it.chunks
		})
		webpackDevConfig.plugins.push(indexPage);
	}
})

module.exports = webpackDevConfig;