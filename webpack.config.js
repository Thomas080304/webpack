var webpack = require('webpack');
var path = require('path');
var HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

module.exports = {
	devServer:{
		hot:true,
	},
	entry:[
		'webpack/hot/dev-server',
		'wepback-dev-server/client?http://localhost:8080',
		path.resolve(__dirname,'./src/index.js')
	],
	output:{
		filename:'index.js',
		path:path.resolve(__dirname,'./dist')
	},
	resolve:['','.js','jsx'],
	module:{},
	plugins:[
		new HotModuleReplacementPlugin()
	]
};