const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { title } = require('process');

const base = require('./webpack.config.base.js');

module.exports = {
    ...base,
    mode: 'production', //development 开发环境 production 生产环境 
    plugins: [
        ...base.plugins,

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        })

    ], //自动生成index.html文件
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"], //css代码抽成文件
            },
        ],


    },




};