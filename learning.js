$(document).ready(function () {
    $('.check_active').on('click', function (){
        if($(this).not('active')){
            $('.check_active').removeClass('active');
            $(this).addClass('active');
            var type = $(this).data('type');
            $('.tab-content').hide();
            $(type).show();
        }
    });
    $('.icon_autoplay').on('click',function (){
       if($(this).hasClass('defaut_auto_play')){
           $(this).removeClass('defaut_auto_play').addClass('un_auto_play');
       }else{
           $(this).removeClass('un_auto_play').addClass('defaut_auto_play');
       }
    });
});
