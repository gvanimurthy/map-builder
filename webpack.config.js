module.exports = {
	module: {
		loaders: [
            {
                test: /\.js$/,
                loader: 'jsx',
                exclude: /node_modules/
            }
        ]
	},
	entry: {
		main: ['webpack-dev-server/client?http://localhost:8080','./app/index.jsx']
	},
	output: {
		filename: 'dist/[name].js'
	}
};