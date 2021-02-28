var a = 35;
var b = 'Привет, ';
var db = 'Мир!';
var c = false;
var d = 5;

// a = 456;

// a = prompt ('Напишите значение переменной a');

// if (a == 37) {
//     alert ('a = 37');
// } else {
//     alert ('Что то другое')
// }

// for (
//         var i = 0;
//         i < 5;
//         i++
//     ) {
//     alert (i);
// }

var obj = {
    'key': 'value',
    'key': 'value',
    'key': 'value',
    'key': 'value'
}

// var document = {
//     'name': 'Петья',
//     'surname': 'Васичкин',
//     'age': 25,
//     'getElementById':function () {}
// }

// alert (document.getElementById);
var mas = ['Петья', 'Васичкин', 25]

// alert (mas[2]);

function doMagic (a,dfdf) {
    alert (a + dfdf);
}

// doMagic(10,5);
// doMagic(1,1);

var btn = document.getElementById('btn');
btn.onclick = function () {
    var text = document.querySelector('p.intro');
    text.classList.add('red');
    var img = document.querySelector('.desktop');
    img.style.display = 'none';
    document.querySelector('skill-value').style.marginLeft = "50px";
}
$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.skill-time').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.skill-value').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
})
