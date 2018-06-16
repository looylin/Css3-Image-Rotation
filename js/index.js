
var init = function () {
    var $wrapper = $('.wrapper');
    var $item = $('.item');
    var $bigImg = $('.bigImg');
    var $fork = $('.fork');
    var $content = $('.content');
    var $inner = $('.inner');
    var nowIndex = 0;
    var lastIndex = 0;
    var len = $item.length - 1;
    var bigIndex;
    function bindEvent() {
        setTimeout(function () {
            $bigImg.removeClass('init');
            $wrapper.removeClass('looyinit');
        }, 300);
        $item.on('click', function (e) {
            e.stopPropagation();
            $(this).addClass('active');
            nowIndex = $(this).index();
            console.log(nowIndex)
            $wrapper.addClass('wrapper-active');
        });
        $fork.on('click', function (e) {
            e.stopPropagation();
            $('.active').removeClass('active');
            $wrapper.removeClass('wrapper-active');
        });
        $('.btn-left').add('.btn-right').on('click', function (e) {
            e.stopPropagation();
            if ($(this).attr('class') == 'btn-left') {
                move('left');

            } else if ($(this).attr('class') == 'btn-right') {
                move('right')
            }
        });
    }
    function move(btn) {
        lastIndex = nowIndex;
        if (btn == 'left') {
            nowIndex = nowIndex != 0 ? --nowIndex : len;
        } else if (btn == 'right') {
            nowIndex = nowIndex == len ? 0 : ++nowIndex;
        }
        console.log(nowIndex)
        changActive(lastIndex, nowIndex);
    }
    function changActive(lastIndex, nowIndex) {
        $('.active').removeClass('active');
        $item.eq(nowIndex).addClass('active');
        disappear();
    }
    function disappear(){
        $('.btn').animate({'bottom':'0px'},500,function(){
            $('.btn').animate({'bottom':'110px'},500)
        })
    }

    bindEvent();
}

init();



