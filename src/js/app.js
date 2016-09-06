var style = require('../sass/main.scss');
//var jquery = require('jquery');   // jquery can be named as $
import jquery from 'jquery';  //改寫成2016語法
import titleCover from '../images/mario-icon.png';  // > 10kb 給連結, <=10kb 則轉成base64 (檔案大小*1.1倍)

//jquery('#title').html('Hello jQuery');
jquery(document).ready(function(){
    jquery('#title').html('Hello jQuery');
    jquery('#image').html(`<img src="${titleCover}" alt=""/>`);
});
/*
var a = require('./test.js');
console.log(a);
*/