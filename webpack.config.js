const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { title } = require('process');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"], //css结尾的文件用style-loader(将css代码包成style标签)和css-loader（读到js）
        }, ],


    },




};