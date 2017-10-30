var path = require('path');
var config = require('../config');
var palMap = require('../pal-map');
var webpackConfig = {
	entry: palMap.script,
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: '/\.js$/',
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
		        test:/\.css$/,
		        loader: 'style-loader!css-loader'
		    },
		     {
		        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
		        use: [{
		          loader: 'url-loader',
		          options: {
		            limit: 10000
		          }
		        }]
		    }
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		},
	}
}
module.exports = webpackConfig;