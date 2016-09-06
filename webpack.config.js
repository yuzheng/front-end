module.exports = {
    entry: {
        bundle: './src/js/app.js'   //js 入口點
    },
    output: {
        path: './dist/js',
        filename: '[name].js'   // 動態讀取entry的屬性名稱, 故此輸出為 bundle.js
    }
}