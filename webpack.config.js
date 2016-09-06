var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/js/app.js'   //js 入口點
    },
    output: {
        path: './dist',
        filename: '/js/[name].js'   // 動態讀取entry的屬性名稱, 故此輸出為 bundle.js
    },
    module: {
        loaders: [{
            test: /\.scss$/,    //$表示在字串的最後面    //符合test的描述就會執行底下的loader
            //loader: 'style-loader!css-loader!sass-loader'   //sass->css->style (由右傳至左)
            loader: extractTextPlugin.extract('style-loader','css-loader!sass-loader')
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=50000&name=./images/[name].[ext]'  // < 50kb 的圖檔轉成base64格式
        }]
    },
    plugins: [
        //new extractTextPlugin('main.css')  //輸出在 dist/js/main.css
        new extractTextPlugin('./css/main.css')  //輸出在 dist/js/main.css
    ]
}