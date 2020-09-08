$(document).ready(function () {
    $('.check_active').on('click', function () {
        if ($(this).not('active')) {
            $('.check_active').removeClass('active');
            $(this).addClass('active');
            var type = $(this).data('type');
            $('.tab-content').hide();
            $(type).show();
        }
    });
    $('.icon_autoplay').on('click', function () {
        if ($(this).hasClass('defaut_auto_play')) {
            $(this).removeClass('defaut_auto_play').addClass('un_auto_play');
        } else {
            $(this).removeClass('un_auto_play').addClass('defaut_auto_play');
        }
    });

    $('#show-lecture .course_chapter').on('click', function () {
        var src = $(this).data('src');
        var link = 'https://www.youtube.com/embed/';
        var video_id = src.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        $('#edm_player_zone').html('');
        $('#edm_player_zone').html('<iframe width="90%" height="100%" src="' + link + video_id + '?autoplay=1" autoplay = "1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
});
var objHome = {
    Events: function () {
        $(".popupSuccessBox .header .close").click(function () { objHome.closeVideo(); });
        $('.video_play_ic').click(function () {
            var link = $(this).attr('data-src');
            objHome.openVideo(link);
        });
    },
    openVideo: function (href) {
        Common.showProcessing();
        $(".popupSuccessBox .body").html("");
        objHome.calcContent(href);
        $(".popupSuccessFixed").removeClass("hidden");
        Common.hideProcessing();
    },
    closeVideo: function () {
        $(".popupSuccessBox .body").html("");
        $(".popupSuccessFixed").addClass("hidden");
    },
    calcContent: function (href) {
        var src = href;
        $(".popupSuccessBox .body").html('<iframe src="' + src + '?autoplay=1" autoplay = "1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }
};