$(function(){
    $(".video-img-box img").on("click",function(){
        $(this).hide();
        $(this).next().show();
        $(this).next().attr("src","https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1")
        $(".playbtn").hide();
    });
    $(".playbtn").on("click",function(){
        $(this).hide;
        $(".video-img-box img").hide();
        $(this).prev().show();
        $(this).prev().attr("src","https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1")
    });

    $(".second-call-book-title li").click(function(){
        var num=$(this).index();

        $(this).children().addClass("click");
        $(this).siblings().children().removeClass("click");
        $(".book-click").eq(num).fadeIn();
        $(".book-click").eq(num).siblings().fadeOut();

    });
    $(".second-call-book-title li:eq(0)").trigger("click");


    $(".audiobook-list ul li").click(function(){
        var clicknum=$(this).index();

        $(this).addClass("audiobook-list-click");
        $(this).siblings().removeClass("audiobook-list-click");
        $(".audiobook-main-wrap").eq(clicknum).show();
        $(".audiobook-main-wrap").eq(clicknum).siblings().hide();

    });

    $(".review-wrap img").on("click",function(){
        $(this).hide();
        $(this).next().attr("src","https://www.youtube.com/embed/c-XG8k_w1LM?autoplay=1&mute=1")
        $(this).next().show();
        $(".playbtn1").hide();
    });
    $(".playbtn1").click(function(){
        $(this).hide();
        $(".review-img-box img").hide();
        $(this).prev().show();
        $(this).prev().attr("src","https://www.youtube.com/embed/c-XG8k_w1LM?autoplay=1&mute=1")
    });

    $(".qna-list li").click(function(){
        $(this).children(".answer").slideToggle(250);
        $(this).children().children(".openbtn").toggleClass("openbtn-rotate");
    });

    $(".slider-box-1>img").css({"transform":"translateY(0px)","opacity":"1"});

    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        // console.log(scroll);
        
        // logo 이미지 변경하기
        if (scroll < 799) {
            $(".logo img").attr("src", "img/logo.png");
        }
        if (scroll > 800) {
            $(".logo img").attr("src", "img/logo1.png");
        }

        if(0<scroll<200){
            $(".booklist-wrap h2").css({"transform":"translateY(50px)","opacity":"0"});
            $(".booklist-wrap p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>300){
            $(".booklist-wrap h2").css({"transform":"translateY(0px)","opacity":"1"});
            $(".booklist-wrap p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>400){
            $(".slider-box-1>img").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>700){
            $(".slider-box-1>img").css({"transform":"translateY(50px)","opacity":"0"});
            $(".video-box h2").css({"transform":"translateY(50px)","opacity":"0"});
            $(".video-box p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>1170){
            $(".booklist-wrap h2").css({"transform":"translateY(50px)","opacity":"0"});
            $(".booklist-wrap p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>1200){
            $(".video-box h2").css({"transform":"translateY(0px)","opacity":"1"});
            $(".video-box p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>1900){
            $("#first-call-book h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#first-call-book p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>2200){
            $("#first-call-book h2").css({"transform":"translateY(0px)","opacity":"1"});
            $("#first-call-book p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>2400){
            $(".video-box h2").css({"transform":"translateY(50px)","opacity":"0"});
            $(".video-box p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>3110){
            $("#first-call-book h2").css({"transform":"translateY(0px)","opacity":"1"});
            $("#first-call-book p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>3200){
            $("#first-call-book h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#first-call-book p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>4000){
            $("#second-call-book h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#second-call-book p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>4100){
            $("#second-call-book h2").css({"transform":"translateY(0px)","opacity":"1"});
            $("#second-call-book p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>4700){
            $("#pick h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#pick p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>4900){
            $("#pick h2").css({"transform":"translateY(0px)","opacity":"1"});
            $("#pick p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>5200){
            $("#second-call-book h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#second-call-book p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>5500){
            $("#price h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#price>p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>5774){
            $("#price h2").css({"transform":"translateY(0px)","opacity":"1"});
            $("#price>p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>5980){
            $("#pick h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#pick p").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll<6550){
            $(".audio-main-first>h2").css({"transform":"translateY(50px)","opacity":"0"});
            $(".audio-main-first>p").css({"transform":"translateY(50px)","opacity":"0"});
            $(".audiobook-phone").css({"transform":"translateY(50px)","opacity":"0"});
        }
        if(scroll>6730){
            $("#price h2").css({"transform":"translateY(50px)","opacity":"0"});
            $("#price>p").css({"transform":"translateY(50px)","opacity":"0"});
            $(".audio-main-first>h2").css({"transform":"translateY(0px)","opacity":"1"});
            $(".audio-main-first>p").css({"transform":"translateY(0px)","opacity":"1"});
            $(".audiobook-phone").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>7678){
            $(".review-main h2").css({"transform":"translateY(0px)","opacity":"1"});
            $(".review-main p").css({"transform":"translateY(0px)","opacity":"1"});
        }
        if(scroll>8100){
            $(".audio-main-first>h2").css({"transform":"translateY(50px)","opacity":"0"});
            $(".audio-main-first>p").css({"transform":"translateY(50px)","opacity":"0"});
            $(".audiobook-phone").css({"transform":"translateY(50px)","opacity":"0"});
        }

        // 완독지수(#pick) 그림 scale
        if(scroll<5100){ // 완독지수(#pick) 그림 scale 0.3으로 돌리기
            $(".pick-img-box img").eq(2).css("transform","scale(0.3)");
            $(".pick-img-box img").eq(4).css("transform","scale(0.3)");
            $(".pick-img-box img").eq(3).css("transform","scale(0.3)");
            $(".pick-img-box img").eq(5).css("transform","scale(0.3)");
        }
        if (scroll > 5100) {
            $(".pick-img-box img").eq(2).css("transform", "scale(1)");
            $(".pick-img-box img").eq(4).css("transform", "scale(1)");
        }
        if(scroll>5300){
            $(".pick-img-box img").eq(3).css("transform","scale(1)");
            $(".pick-img-box img").eq(5).css("transform","scale(1)");
        }

        if(scroll>6400){ // 완독지수(#pick) 그림 scale 0.3으로 돌리기
            $(".pick-img-box img").eq(2).css("transform","scale(0.3)");
            $(".pick-img-box img").eq(4).css("transform","scale(0.3)");
            $(".pick-img-box img").eq(3).css("transform","scale(0.3)");
            $(".pick-img-box img").eq(5).css("transform","scale(0.3)");
        }

        // 책 리스트 fadein 하기
        if(scroll>2700){
            $(".best-all-box").fadeIn();
        }
        if(scroll>2900){
            $(".new-all-box").fadeIn();
        }
        if(scroll>3400){
            $(".audio-all-box").fadeIn();
        }
        if(scroll>3700){
            $(".romance-all-box").fadeIn();
        }
        if(scroll>4500){
            $(".second-call-book-wrap").fadeIn();
        }
        if(scroll>4900){
            $(".first-call-book-wrap>div").hide(); 
        }
        if(scroll<2500){
            $(".first-call-book-wrap>div").fadeOut();
            $(".second-call-book-wrap").fadeOut();
        }
        if(scroll>5600){
            $(".second-call-book-wrap").hide();
        }
    });
});


