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

};