/**********************************************
 * Author : @Author6
 * Timestamp : @Timestamp
 **********************************************/
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");
var canBack = false;

page.on("back", function(){
    if (canBack) {
        global.exit();
    } else {
        nf.toast("再按一次退出");
        canBack = true;
        delay3.start();
    }
});

var delay3 = mm("do_Timer");
delay3.delay = 2000;
delay3.interval = 2000;
delay3.on("tick", function(){
    this.stop();
    canBack = false;
});
/***********************************************/
//
var vs_shower0 = ui("vs_shower0");
vs_shower0.addViews([
    {id : "ming", path : "source://view/ming/ming.ui"},
    {id : "xiao", path : "source://view/xiao/xiao.ui"},
    {id : "lian", path : "source://view/lian/lian.ui"},
    {id : "me", path : "source://view/me/me.ui"}
]);
page.on("loaded", function(){
    vs_shower0.showView("ming");
});
/***********************************************/
var do_alayout_1=ui("do_alayout_1");
var do_alayout_2=ui("do_alayout_2");
var do_alayout_3=ui("do_alayout_3");
var do_alayout_4=ui("do_alayout_4");
var do_alayout_5=ui("do_alayout_5");
var do_imageview_2=ui("do_imageview_2");
var do_imageview_3=ui("do_imageview_3");
var do_imageview_4=ui("do_imageview_4");
var do_imageview_5=ui("do_imageview_5");
var do_imageview_6=ui("do_imageview_6");
var do_label_1=ui("do_label_1");
var do_label_2=ui("do_label_2");
var do_label_4=ui("do_label_4");
var do_label_5=ui("do_label_5");

do_alayout_1.on("touch",function(data, e){
    vs_shower0.showView("ming", "fade");
    do_imageview_2.source = "source://image/index/3.png"
    do_imageview_3.source = "source://image/index/4.png";
    do_imageview_4.source = "source://image/index/6.png";
    do_imageview_5.source = "source://image/index/8.png";
    do_imageview_6.source = "source://image/index/10.png";
    do_label_1.fontColor = "FFFFFFFF";
    do_label_2.fontColor = "A0A0A0FF";
    do_label_4.fontColor = "A0A0A0FF";
    do_label_5.fontColor = "A0A0A0FF";
});
do_alayout_2.on("touch",function(data, e){
    vs_shower0.showView("xiao", "fade");
    do_imageview_2.source = "source://image/index/2.png"
    do_imageview_3.source = "source://image/index/5.png";
    do_imageview_4.source = "source://image/index/6.png";
    do_imageview_5.source = "source://image/index/8.png";
    do_imageview_6.source = "source://image/index/10.png";
    do_label_1.fontColor = "A0A0A0FF";
    do_label_2.fontColor = "FFFFFFFF";
    do_label_4.fontColor = "A0A0A0FF";
    do_label_5.fontColor = "A0A0A0FF";
});
do_alayout_3.on("touchDown",function(data, e){
    do_imageview_4.source = "source://image/index/7.png";
});
do_alayout_3.on("touch",function(data, e){
	page.fire("ming", "1");
    do_imageview_2.source = "source://image/index/3.png"
    do_imageview_3.source = "source://image/index/4.png";
    do_imageview_4.source = "source://image/index/6.png";
    do_imageview_5.source = "source://image/index/8.png";
    do_imageview_6.source = "source://image/index/10.png";
    do_label_1.fontColor = "FFFFFFFF";
    do_label_2.fontColor = "A0A0A0FF";
    do_label_4.fontColor = "A0A0A0FF";
    do_label_5.fontColor = "A0A0A0FF";
    vs_shower0.showView("ming", "fade");
});
do_alayout_4.on("touch",function(data, e){
    vs_shower0.showView("lian", "fade");
    do_imageview_2.source = "source://image/index/2.png"
    do_imageview_3.source = "source://image/index/4.png";
    do_imageview_4.source = "source://image/index/6.png";
    do_imageview_5.source = "source://image/index/9.png";
    do_imageview_6.source = "source://image/index/10.png";
    do_label_1.fontColor = "A0A0A0FF";
    do_label_2.fontColor = "A0A0A0FF";
    do_label_4.fontColor = "FFFFFFFF";
    do_label_5.fontColor = "A0A0A0FF";
});
do_alayout_5.on("touch",function(data, e){
    vs_shower0.showView("me", "fade");
    do_imageview_2.source = "source://image/index/2.png"
    do_imageview_3.source = "source://image/index/4.png";
    do_imageview_4.source = "source://image/index/6.png";
    do_imageview_5.source = "source://image/index/8.png";
    do_imageview_6.source = "source://image/index/11.png";
    do_label_1.fontColor = "A0A0A0FF";
    do_label_2.fontColor = "A0A0A0FF";
    do_label_4.fontColor = "A0A0A0FF";
    do_label_5.fontColor = "FFFFFFFF";
});

page.on("me-listen",function(data, e){
	page.fire("ming", "1");
    do_imageview_2.source = "source://image/index/3.png"
    do_imageview_3.source = "source://image/index/4.png";
    do_imageview_4.source = "source://image/index/6.png";
    do_imageview_5.source = "source://image/index/8.png";
    do_imageview_6.source = "source://image/index/10.png";
    do_label_1.fontColor = "FFFFFFFF";
    do_label_2.fontColor = "A0A0A0FF";
    do_label_4.fontColor = "A0A0A0FF";
    do_label_5.fontColor = "A0A0A0FF";
    vs_shower0.showView("ming", "fade");
});


