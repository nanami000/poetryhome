$(document).ready(function(){
    $('div ul li ul').hide();
    $('div li').hover(function(){
        $('>ul:not(:animated)',this).slideDown('fast');
    },function(){
        $('>ul',this).slideUp('fast');
    });
});