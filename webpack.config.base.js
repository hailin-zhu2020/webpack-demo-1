const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { title } = require('process');

module.exports = {
    mode: 'development', //development 开发环境 production 生产环境 
    entry: './src/index.js', //入口 待转换的代码文件
    output: {
        filename: '[name].[contenthash].js'
    }, //出口 转化后的代码文件
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    }, //配置webpack
    plugins: [
        new HtmlWebpackPlugin({
            title: "XDML -写代码啦",
            template: "src/assets/index.html"
        }),


    ], //自动生成index.html文件
    module: {
        rules: [{
                test: /\.less$/i,
                loader: [
                    'style-loader',
                    'css-loader',
                    'less-loader', //将less代码转化成css代码
                ],
            },
            {
                test: /\.(gif|png|jpg|svg)$/i,
                use: ['file-loader'] //把文件变成文件路径
            }, //加载图片
            {
                test: /\.styl$/,
                loader: [
                        'style-loader',
                        'css-loader',
                        'stylus-loader'
                    ] // 将 Stylus 文件编译为 CSS

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', //将js字符串转换成style标签
                    'css-loader', //将css代码转化成js字符串
                    {
                        loader: 'sass-loader', //将scss代码转化成css代码
                        options: { implementation: require('dart-sass') }
                    }

                ],
            },
        ],
    }, //将scss转化成css

};