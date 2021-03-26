/*
 * @authors ECODES jason
 * @date    2015-06-18 16:22:05
 * @version $Id$
 */


$(function() {
    //header特效 需要jquery-ui
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 100) { //多條件同時成立 

    //         $('#navindex').stop().animate({
    //             backgroundColor: "white"
    //         }, 500);
    //         $('#navindex').css({
    //             'box-shadow': '0px 0px 10px -3px rgba(0,0,0,0.5)'
    //         }, 1000);
    //         $('.logob').stop().fadeIn(500);
    //         $('.logow').stop().fadeOut(500);


    //     } else if ($(window).scrollTop() < 300) { //不然要符合...

    //         $('#navindex').stop().animate({
    //             backgroundColor: "rgba(255, 255, 255, 0)"
    //         }, 500);
    //         $('#navindex').css({
    //             'box-shadow': 'inherit'
    //         }, 1000);
    //         $('.logob').stop().fadeOut(500);
    //         $('.logow').stop().fadeIn(500);

    //     }
    // });

    $('.menubar,img[alt="menu"]').click(function() {
        $('.menu').addClass('menu_right');
        $('.menubg').stop().fadeIn("fast");
    });
    $('.menubg,.menuover').click(function() {
        $('.menu').removeClass('menu_right');
        $(".menubg").fadeOut("fast");
    });

    // 新增保管人
    $('.addmanlink').click(function() {
        $('.addman').stop().fadeIn("fast");
    });
    $('.fa-times,div.close').click(function() {
        $(".addman").fadeOut("fast");
    });
    $('.add-safeman').click(function() {
        $(".edit-addman").fadeIn("fast");
        $(".editman-book").fadeOut("fast");
    });
    //     $('.addclike').click(function () {
    //         $('.system').stop().fadeIn("fast");
    //     });

    // 編輯保管人
    $('.accept').click(function() {
        $('.ok-editman').stop().fadeIn("fast");
    });
    $('.not-accepted').click(function() {
        $('.not-editman').stop().fadeIn("fast");
    });
    $('.fa-times,div.close').click(function() {
        $(".editman").fadeOut("fast");
    });
    $('.reset_pass,.userlogin,.user_reg,.idont').click(function() {
        $('.system').stop().fadeIn("fast");
    });
    $('img[alt=close],.ms_cont').click(function() {
        $('.system,.addman').stop().fadeOut("fast");
        $('body').css('overflow', 'auto');
    });


    // 新增信件、更換其他媒體
    $('.axis-tim .addms,.chaoth-ms').click(function() {
        $('#ax-vi,.axis-tim,#ax-ms,#ax-vo,#ax-ex,#ax-ph').stop().hide();
        $('#ax-addms').stop().show();
    });

    // 新增信件畫面
    $('.addms-wo .fa-video-camera').click(function() {
        $('#ax-addms,.axis-tim,#ax-ms,#ax-vo,#ax-ex,#ax-ph').stop().hide();
        $('#ax-vi').stop().show();
    });
    $('.addms-wo .fa-microphone').click(function() {
        $('#ax-addms,.axis-tim,#ax-ms,#ax-vi,#ax-ex,#ax-ph').stop().hide();
        $('#ax-vo').stop().show();
    });
    $('.addms-wo .fa-commenting,.fa-pencil').click(function() {
        $('#ax-addms,.axis-tim,#ax-vi,#ax-vo,#ax-ex,#ax-ph').stop().hide();
        $('#ax-ms').stop().show();
    });
    $('.addms-wo .fa-paperclip').click(function() {
        $('#ax-addms,.axis-tim,#ax-ms,#ax-vo,#ax-vi,#ax-ph').stop().hide();
        $('#ax-ex').stop().show();
    });
    $('.addms-wo .fa-picture-o').click(function() {
        $('#ax-addms,.axis-tim,#ax-ms,#ax-vo,#ax-vi,#ax-ex').stop().hide();
        $('#ax-ph').stop().show();
    });

    // 關閉新增信件畫面
    $('.ch-add .fa-remove,.tab-ti-book').click(function() {
        $('#ax-addms,#ax-ex,#ax-ms,#ax-vo,#ax-vi,#ax-ph').stop().hide();
        $('.axis-tim').stop().show();
    });

    // 開啟關閉編輯收件人
    $('.tab-ed-man').click(function() {
        $('.editman-book').stop().fadeIn();
    });
    $('.editman-book .fa-remove').click(function() {
        $('.editman-book').stop().fadeOut();
    });

    // 開啟關閉修改密碼
    $('.cha-ps').click(function() {
        $('.cha-ps-pg').stop().fadeIn("fast");
    });
    $('.cha-ps-pg .fa-times,div.close').click(function() {
        $('.cha-ps-pg').stop().fadeOut("fast");
    });

    // 開啟關閉手機驗證
    $('.cha-ph').click(function() {
        $('.cha-ph-pg').stop().fadeIn("fast");
    });
    $('.cha-ph-pg .fa-times,div.close').click(function() {
        $('.cha-ph-pg').stop().fadeOut("fast");
    });
    // 開啟已寄出秘密
    $('.op-list1').click(function() {
        $('.msop-list1').stop().fadeIn("fast");
    });
    $('.op-list2').click(function() {
        $('.msop-list2').stop().fadeIn("fast");
    });
    $('.op-list3').click(function() {
        $('.msop-list3').stop().fadeIn("fast");
    });
    $('.op-list4').click(function() {
        $('.msop-list4').stop().fadeIn("fast");
    });
    $('.op-list5').click(function() {
        $('.msop-list5').stop().fadeIn("fast");
    });

    // 開啟手機驗證系統通知
    $('.cha-ph-edit').click(function() {
        $('.system_ph').stop().fadeIn("fast");
    });
    $('.cha-pa-edit').click(function() {
        $('.system_ps').stop().fadeIn("fast");
    });
    $('.fa-trash-o,.fa-trash').click(function() {
        $('.system_sa').stop().fadeIn("fast");
    });
    $('.del-all').click(function() {
        $('.system_all').stop().fadeIn("fast");
    });


    $('.safebox .fa-remove').click(function() {
        $('.system_msdel').stop().fadeIn("fast");
    });


    $('.listdel-on').click(function() {
        $('.system-go').stop().fadeIn("fast");
    });
    $('.listdel-tw').click(function() {
        $('.system-del').stop().fadeIn("fast");
    });

    //鎖定視窗
    $('.timebox,.system,.menu,.menubg,.addman,.will-booking').scrollLock();

    // header特效
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) { //多條件同時成立 
            $('.haednav').addClass('haednav-down');
            $('.user-call').addClass('user-call-down');
        } else {
          $('.haednav').removeClass('haednav-down');
          $('.user-call').removeClass('user-call-down');
        }
    });
});
