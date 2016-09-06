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
        }]
    }
}