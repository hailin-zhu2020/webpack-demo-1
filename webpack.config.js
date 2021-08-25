var path = require('path')
module.exports = {
    mode: 'development', //development 开发者 production 用户 
    entry: './src/index.js', //入口 待转换的代码文件
    output: {
        filename: '[name].[contenthash].js'
    } //出口 转化后的代码文件

};