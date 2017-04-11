var webpack = require('webpack');
module.exports = {
    entry: {
        main: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/dev-server','./app/main.jsx']
    },
    output: {
        path: __dirname,
        publicPath: 'http://localhost:8080/',
        filename: 'dist/[name].js'
    },
    devtool: 'source-map',
    
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  cacheDirectory: true,
                  presets: ['react', 'es2015']
                }

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: { inline: true, hot: true, contentBase: './' }
}