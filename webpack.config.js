const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [new HtmlWebpackPlugin({template: 'src/index.html'})];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new UglifyJSPlugin());
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins,
    devServer: {
        host: '0.0.0.0',
        port: 1501,
    }
};