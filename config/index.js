var path = require('path');
module.exports = {
	rootPath: path.join(__dirname,'..'),
	dev: {
		env: 'dev',
		port: 8090,
		//是否自动打开浏览器
		autoOpenBrowser: true
	},
	pro: {
		env: "pro"
	}
}