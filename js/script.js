$(document).ready(function(){
    $('.tabs__item').click(function(e){
        e.preventDefault();
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
    });
});