'use strict';
$(document).ready(function(){
    $('.tabs__item').click(function(e){
        e.preventDefault();
        if(window.matchMedia('(min-width: 992px)').matches || window.matchMedia('(max-width: 767px)').matches){
            if(!$(this).hasClass('active')){
                $('.tabs__item').removeClass('active');
                $(this).addClass('active');
                if($(this).hasClass('tabs__item--planned') && $(this).hasClass('active')) {
                    $('.investitions-content--planned').show();
                    $('.investitions-content--in-progress').hide();
                }
                if($(this).hasClass('tabs__item--in-progress') && $(this).hasClass('active')) {
                    $('.investitions-content--planned').hide();
                    $('.investitions-content--in-progress').show();
                }
            }
        } else {

        }
    });

    $(window).on('resize', function(){
        if(window.matchMedia('(min-width: 992px)').matches || window.matchMedia('(max-width: 767px)').matches){
            $('.investitions-content').css('display','');
        }
    });
    $('.letter-btn').click(function(){
        if(!$('html').hasClass('high-contrast')) {
            $('html').attr('class', '');
        } else {
            $('html').attr('class', '');
            $('html').addClass('high-contrast');
        }
        
        if($(this).attr('id') === 'letterLarge') {
            $('html').addClass('letter-large');
        }
        if($(this).attr('id') === 'letterXLarge') {
            $('html').addClass('letter-x-large');
        }
    });

    $('.btn-contrast').click(function(){
        $('html').toggleClass('high-contrast');
    });

    var rotation = 0;

    $.fn.rotate = function(degrees) {
        $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                    '-moz-transform' : 'rotate('+ degrees +'deg)',
                    '-ms-transform' : 'rotate('+ degrees +'deg)',
                    'transform' : 'rotate('+ degrees +'deg)'});
        return $(this);
    };

    // $('.nav-item--submenu .nav-link').click(function(){
    //     $(this).find('.ico-dropdown').toggleClass('rotate');
    // });
});