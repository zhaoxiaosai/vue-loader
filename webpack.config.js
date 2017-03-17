module.exports={
	entry:'./main.js',

	output:{
		path:__dirname,//dirname代表的是当前路径
		filename:'build.js'
	},

	module:{      //最核心的需要配置module,配置那些loader
		loaders:[
			{test:/\.vue$/, loader:'vue'},  //\.点转义,用vue-loader编译以.vue结尾的文件
			//多个loader的需要用!连接
			{test:/\.js$/, loader:'babel', exclude:/node_modules/}
		] 
	},
	babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	}
};