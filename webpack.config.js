const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
		path: path.resolve(__dirname, 'dist'),
        filename: "static/js/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            '@': resolve('src'),
            'assets': resolve('src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node-modules/',
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.(css|less)$/,
                loader: 'css-loader!less-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'view/index.html',
			filename: 'view/index.html',
			inject: true
		})
	],
    devtool: '#source-map',
    devServer: {
		port: 3333,
		stats: 'errors-only', 
		inline: true,
		hot: true,
		contentBase: './dist'
	}
}