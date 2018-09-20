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
});