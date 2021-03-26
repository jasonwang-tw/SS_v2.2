/*
 * @authors ECODES jason
 * @date    2015-06-18 16:22:05
 * @version $Id$
 */


$(function() {
    //select選項連動

    // $("select#sel-bur").change(function() {
    //     var type_select = $("select#sel-bur").val();
    //     var datalist = "datalist#" + type_select + " option";
    //     $("select#sel-bur-det").empty();
    //     $(datalist).each(function() {
    //         var add = $(this).attr("value");
    //         $("select#sel-bur-det").append("<option value='" + add + "'>" + add + "</option>");
    //     });
    // });
    // $("select#sel-way").change(function() {
    //     var type_select = $("select#sel-way").val();
    //     var datalist = "datalist#" + type_select + " option";
    //     $("select#sel-way-det").empty();
    //     $(datalist).each(function() {
    //         var add = $(this).attr("value");
    //         $("select#sel-way-det").append("<option value='" + add + "'>" + add + "</option>");
    //     });
    // });

    //依照選項出現細節選單 私人會館
    $("select#home").change(function() {
        if ($('select[name="home-sel"] option[value="h2"]').is(':selected')) {
            $('b.h1').css('display', 'none');
            $('b.h2').css('display', 'block');
        } else {
            $('b.h1').css('display', 'block');
            $('b.h2').css('display', 'none');
        };
    });

    //依照選項出現細節選單 塔位
    $("select#ta").change(function() {
        if ($('select[name="ta-sel"] option').is(':selected')) {
            var T = this.value.substr(1);
            $('.t1,.t2,.t3').css('display', 'none');
            $('.t'+ T).css('display', 'block');
        };
    });
    //依照選項出現細節選單 墓地
    $("select#mo").change(function() {
        if ($('select[name="mo-sel"] option').is(':selected')) {
            var M = this.value.substr(1);
            $('.m1,.m2,.m3').css('display', 'none');
            $('.m' + M).css('display', 'block');
        }
    });



    //骨灰罈
    //紅框
    $('.gu-list .imgview').click(function() {
        $('.gu-list .imgview').removeClass('imgclick');
        $(this).addClass('imgclick');
    });
 
    //列表金額帶入
    $("select#gu").change(function() {
        //列表-金額清空
        $('.gu,.gu-list,.gu-pay').css('display', 'none');
        if ($('select[name="gu-sel"] option').is(':selected')) {
            $('.gu-list .imgview').removeClass('imgclick');
            var S = this.value.substr(3);
            $('.gu-' + S).css('display', 'block');
            $('.gu-pay-' + S).css('display', 'block');
            $('.gu-title-' + S).css('display', 'block');
            $('.gu-red-' + S).addClass('imgclick');
        };
    });

    $('.gu-list .imgview').click(function() {
        $('.gu').css('display', 'none');
    });
    // 骨灰罈A
    $('.gu-1 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gu-a' + N).css('display', 'block');
    });
    // 骨灰罈b
    $('.gu-2 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gu-b' + N).css('display', 'block');
    });
    // 骨灰罈c
    $('.gu-3 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gu-c' + N).css('display', 'block');
    });
    // 骨灰罈d
    $('.gu-4 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gu-d' + N).css('display', 'block');
    });



    //棺木
    //紅框
    $('.gm-list .imgview').click(function() {
        $('.gm-list .imgview').removeClass('imgclick');
        $(this).addClass('imgclick');
    });

    //列表金額帶入
    $("select#gm").change(function() {
          //列表-金額清空
        $('.gm,.gm-list,.gm-pay').css('display', 'none'); 
        if ($('select[name="gm-sel"] option').is(':selected')) {
            $('.gm-list .imgview').removeClass('imgclick');
            var S = this.value.substr(3);
            $('.gm-' + S).css('display', 'block');
            $('.gm-pay-' + S).css('display', 'block');
            $('.gm-title-' + S).css('display', 'block');
            $('.gm-red-' + S).addClass('imgclick');
        };
    });
    // 大圖清空
    $('.gm-list .imgview').click(function() {
        $('.gm').css('display', 'none');
    });
    // 棺木A
    $('.gm-1 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gm-a' + N).css('display', 'block');
    });
    // 棺木b
    $('.gm-2 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gm-b' + N).css('display', 'block');
    });
    // 棺木c
    $('.gm-3 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gm-c' + N).css('display', 'block');
    });
    // 棺木d
    $('.gm-4 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gm-d' + N).css('display', 'block');
    });
    // 棺木e
    $('.gm-5 .imgview').click(function() {
        var N = this.id.substr(9);
        $('.gm-e' + N).css('display', 'block');
    });


    $('.silbar').scrollToFixed({
        zIndex: 0,
        // marginTop: $('.haednav').outerHeight() + 40,
        marginTop: function() {
            var marginTop = $(window).height() - $('.silbar').outerHeight(true) - 50;
            if (marginTop >= 0) return 20;
            return marginTop;
        },
        limit: function() {
            var limit = $('.userfooter').offset().top - $('.silbar').outerHeight() - 30;
            return limit;
        },
        minWidth: 950,
    });
});
