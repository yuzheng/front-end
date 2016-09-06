var style = require('../sass/main.scss');
//var jquery = require('jquery');   // jquery can be named as $
import jquery from 'jquery';  //改寫成2016語法

//jquery('#title').html('Hello jQuery');
jquery(document).ready(function(){
    jquery('#title').html('Hello jQuery');
});
/*
var a = require('./test.js');
console.log(a);
*/