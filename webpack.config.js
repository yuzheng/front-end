module.exports = {
    entry: {
        bundle: './src/js/app.js'   //js 入口點
    },
    output: {
        path: './dist/js',
        filename: '[name].js'   // 動態讀取entry的屬性名稱, 故此輸出為 bundle.js
    },
    module: {
        loaders: [{
            test: /\.scss$/,    //$表示在字串的最後面    //符合test的描述就會執行底下的loader
            loader: 'style-loader!css-loader!sass-loader'   //sass->css->style (由右傳至左)
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=10000&name=../../dist/images/[name].[ext]'  // < 100kb 的圖檔轉成base64格式
        }]
    }
}