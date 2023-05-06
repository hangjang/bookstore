$(function(){
    // 당일배송 날짜 매일 변경되게 하기
    var today=new Date();
    var month=today.getMonth()+1;
    var date=today.getDate();
    var day=today.getDay();
    
    var today_day=day;
    
    switch(today_day){
        case 0 : day="일요일";
        break;
        case 1 : day="월요일";
        break;
        case 2: day="화요일";
        break;
        case 3: day="수요일";
        break;
        case 4: day="목요일";
        break;
        case 5: day="금요일";
        break;
        case 6: day="토요일";
        break;
    }
    $(".sec1-3-1 span").eq(1).html("<u>오늘(" +month+"/"+date+", "+day+")</u> 도착예정")


    // 수량 버튼 누르면 숫자 변경
    var input=document.getElementById("result");
    var result=Number(input.value);

    document.getElementById("minus").onclick=function(){
        result--;
        input.value=result;
        // console.log(result);
        if(result<=0){
            alert("최소 1권 이상부터 구매 가능합니다");
            input.value=1;
            result=1;
        }
    }
    document.getElementById("plus").onclick=function(){
        result++;
        input.value=result;
    }

    // 많이 구매한 부분
    $(".manybuy-list ul li").click(function(){
        var mb_num=$(this).index();

        $(".with-buy ul").eq(mb_num).show();
        $(".with-buy ul").eq(mb_num).show().css("display","flex");
        $(".with-buy ul").eq(mb_num).siblings().hide();
        $(this).addClass("mb-click");
        $(this).siblings().removeClass("mb-click");
    });

    // bookcard 슬라이드 이벤트
    $(".bookcard-wrap").hover(function(){
        $(".prev").fadeIn();
        $(".next").fadeIn();
    }, function(){
        $(".prev").fadeOut();
        $(".next").fadeOut();
    });
    $(".prev").click(function(){
        $(".bookcard-list li:last").prependTo(".bookcard-list");
        $(".bookcard-list").css("margin-left","-50%");
        $(".bookcard-list").animate({marginLeft:"0"},550);
    });
    $(".next").click(function(){
        $(".bookcard-list").animate({marginLeft:"-50%"},550, function(){
            $(".bookcard-list li:first").appendTo(".bookcard-list");
            $(".bookcard-list").css("margin-left","0");
        });
    });

    //작가소개 정보 접어둔거 펼쳐보기
    var count=0;
    $(".read-more").click(function(){
        count++;
        if(count%2==1){
            $(this).html('<span>접어두기 </span>');
        } else if(count%2==0){
            $(this).html('<span>펼쳐보기 </span>');
        }
        $(".hidebox").toggle();
        $(".authors-btn").toggleClass("authors-btn-rotate");
    });

    $(".authors-btn").click(function(){
        count++;
        if(count%2==1){
            $(this).prev().html('<span>접어두기 </span>');
        } else if(count%2==0){
            $(this).prev().html('<span>펼쳐보기 </span>');
        }
        $(".hidebox").toggle();
        $(this).toggleClass("authors-btn-rotate");
    });

    //출판사리뷰 접어둔 정보 펼쳐보기
    $(".com-review-textbox").click(function(){
        count++;
        if(count%2==1){
            $(this).next().children("button").html(`<span>접어두기 </span>`);
        } else if(count%2==0){
            $(this).next().children("button").html(`<span>펼쳐보기 </span>`);
        }
        $(".com-review-hidebox").toggle();
        $(".review-btn").toggleClass("review-btn-rotate");
        $(this).toggleClass("com-review-pointer");
    });
    $(".read-more1").click(function(){
        count++;
        if(count%2==1){
            $(this).html(`<span>접어두기 </span>`);
        } else if(count%2==0){
            $(this).html(`<span>펼쳐보기 </span>`);
        }
        $(".com-review-hidebox").toggle();
        $(".review-btn").toggleClass("review-btn-rotate");
        $(this).parent().prev().toggleClass("com-review-pointer");
    });
    $(".review-btn").click(function(){
        count++;
        if(count%2==1){
            $(this).prev().html(`<span>접어두기 </span>`);
        } else if(count%2==0){
            $(this).prev().html(`<span>펼쳐보기 </span>`);
        }
        $(".com-review-hidebox").toggle();
        $(this).toggleClass("review-btn-rotate");
        $(this).parent().prev().toggleClass("com-review-pointer");
    });

    //별점 별 누르면 색깔 칠해지는거 css 넣고 빼기
    $("#starbox ul li").click(function(){
        var index=$(this).index()+1;

        $("#starbox").removeClass();
        $("#starbox").addClass("star"+index);
    });

    // 한줄평 input text 창 글씨 쓰면 글자수 카운트하기
    $(".korean").keyup(function(e){
        var text=$(this).val();
        $(this).next().html(`<b>${text.length}</b> / 50`);
    });

    // 한줄평 버튼 누르면 확인/취소창 뜨기
    $(".send").click(function(){
        confirm("로그인이 필요합니다. \n로그인 하시겠습니까?");
    });

    
    // 도서정보 탭 클릭 이벤트
    // $(".choice-nav-wrap ul:nth-of-type(1) li").click(function(){
    //     $(this).children().addClass("cho-nav-font");
    //     $(this).siblings().children().removeClass("cho-nav-font");
    //     $(this).addClass("cho-nav-bg");
    //     $(this).siblings().removeClass("cho-nav-bg");
    // });

    // 도서정보, 리뷰, 배송반품교환(choice-nav) 버튼 눌러서 내려간 다음에 top버튼으로 올라올 경우 첫번째만 css 들어가게 하기
    $(window).scroll(function () {
        var scroll=$(window).scrollTop();
        // console.log(scroll);
        if (scroll<=500){
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).addClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).children().addClass("cho-nav-font");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).siblings().removeClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).siblings().children().removeClass("cho-nav-font");
        }

        if(scroll < 7865){
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).addClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).children().addClass("cho-nav-font");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).siblings().removeClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(0).siblings().children().removeClass("cho-nav-font");
        }

        if(scroll>9100){
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(1).addClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(1).children().addClass("cho-nav-font");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(1).siblings().removeClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(1).siblings().children().removeClass("cho-nav-font");
        }

        if(scroll>10610){
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(2).addClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(2).children().addClass("cho-nav-font");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(2).siblings().removeClass("cho-nav-bg");
            $(".choice-nav-wrap ul:nth-of-type(1) li").eq(2).siblings().children().removeClass("cho-nav-font");
        }
        if(scroll>1220){
            $("#choice-nav").css({"position":"fixed","top":"63px","z-index":"10"});
        }
        if(scroll<1220){
            $("#choice-nav").css({"position":"relative","top":"0"});
        }
    });

    // 리뷰, 배송/반품/교환 버튼 누르면 해당 자리로 이동하기
    $(".choice-nav-wrap ul:nth-of-type(1) li:nth-of-type(1)").click(function(){
        let intro=$("#introduce");
        let offset=intro.offset().top-160;
        $("html").animate({scrollTop:offset},300);
    });

    $(".choice-nav-wrap ul:nth-of-type(1) li:nth-of-type(2)").click(function(){
        let review=$("#review");
        let offset=review.offset().top-210;

        $("html").animate({scrollTop:offset},300);
    });

    $(".title2-1 ul:nth-of-type(3) li:nth-of-type(2) a").click(function(){
        let review=$("#review");
        let offset=review.offset().top-210;

        $("html").animate({scrollTop:offset},300);
    })

    $(".choice-nav-wrap ul:nth-of-type(1) li:nth-of-type(3)").click(function(){
        let delivery=$("#delivery");
        let offset=delivery.offset().top-150;

        $("html").animate({scrollTop:offset},300);
    });

    // 좋아요 버튼 누르면 로그인 경고창
    $(".rv-list-header>div>ul>li>button").click(function(){
        confirm("로그인이 필요합니다. \n로그인 하시겠습니까?");
    })
});
    


