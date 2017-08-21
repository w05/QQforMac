/**
 * Created by Administrator on 2017/5/17.
 */
$(function () {
    /*
      0. 变量
    */
    var index = 0, timer = null;

    showAndHideEle(index);


    /*
      1. 监听点击
    */
    $('.gps li').on('click', function () {
        // 1.1 获取当前的索引
        index = $(this).index();

        // 1.2 切换选中的样式
        $(this).addClass('current').siblings().removeClass('current');
        $('section').eq(index).show().siblings('section').hide();

        // 1.3 显示和隐藏元素
        showAndHideEle(index);

        // 1.4 处理落空类
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        }, 10);
    });


    /*
      2. 监听滚动
    */
    $(window).mousewheel(function (event, delta) {
         clearTimeout(timer);
         timer = setTimeout(function () {
             // 2.1 求出索引
             index -= delta;

             // 2.2 临界值处理
             if(index > $('.gps li').length - 1){
                index =  $('.gps li').length - 1;
             }else if(index < 0){
                 index = 0;
             }

             // 2.3 切换样式
             $('.gps li').eq(index).addClass('current').siblings().removeClass('current');
             $('section').eq(index).show().siblings('section').hide();


             // 2.4 显示和隐藏元素
             showAndHideEle(index);

             // 2.5 处理落空类
             setTimeout(function () {
                 $('section').eq(index).removeClass('current').siblings('section').addClass('current');
             }, 10);

         }, 400);
    });


    /*
      3. 显示和隐藏部分元素
     */
     function showAndHideEle(index) {
         if(index == 0){
            $('.head-left').hide();
            $('.scroll').show();
         }else {
            $('.head-left').show();
            $('.scroll').hide();
         }
     }
});