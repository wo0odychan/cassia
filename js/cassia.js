$(function () {
    // 스크롤 내리면 헤더 백그라운드 나오게
    $(window).on('scroll', function () {
        // 스크롤 크기 구하는 공식
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });


    $('.main_slide').slick({
        fade: true,
        dots: true,
        arrows: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });




})