var path = require('path');
var config = require('./config');
var publicPath = path.join(config.rootPath, 'dist');
module.exports = {
	//js注册
	script: {
		pal: path.join(publicPath,'pal'),
		util: path.join(publicPath,'util'),
	},
	//默认页面
	default: 'pal.html',
	//html对应js
	file: [
		{
			page: 'pal.html',
			chunks: ['pal', 'util']
		},
	]
}