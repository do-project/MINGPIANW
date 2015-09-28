/**********************************************
 * Author : @wuwei
 * Timestamp : @2015.9.2
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
delay3.delay = 3000;
delay3.interval = 1000;
delay3.on("tick", function(){
    this.stop();
    canBack = false;
});

var main_shower = ui("main_shower");
var action_alys = [ui("first"), ui("buy"), ui("find"),ui("mine")];
var action_imgs = [ui("img_0"), ui("img_1"), ui("img_2"), ui("img_3")];
var action_lbs = [ui("lb_0"), ui("lb_1"), ui("lb_2"), ui("lb_3"),];

main_shower.addViews([
	{id : "first" , path : "source://view/sub/first.ui"},
	{id : "buy" , path : "source://view/sub/buy.ui"},
	{id : "find" , path : "source://view/sub/find.ui"},
	{id : "mine" , path : "source://view/sub/mine.ui"}
]);

main_shower.showView("first");

var first = ui("first");
first.on("touch",function(data, e){
	main_shower.showView("first");
	action_imgs[0].source = "source://image/main/firsto.png";
	action_imgs[1].source = "source://image/main/buy.png";
	action_imgs[2].source = "source://image/main/find.png";
	action_imgs[3].source = "source://image/main/mine.png";
	action_lbs[0].fontColor = "F75000FF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "222222FF";
	action_lbs[3].fontColor = "222222FF";
});

var buy = ui("buy");
buy.on("touch",function(data, e){
	main_shower.showView("buy");
	action_imgs[0].source = "source://image/main/first.png";
	action_imgs[1].source = "source://image/main/buyo.png";
	action_imgs[2].source = "source://image/main/find.png";
	action_imgs[3].source = "source://image/main/mine.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "F75000FF";
	action_lbs[2].fontColor = "222222FF";
	action_lbs[3].fontColor = "222222FF";
});

var find = ui("find");
find.on("touch",function(data, e){
	main_shower.showView("find");
	action_imgs[0].source = "source://image/main/first.png";
	action_imgs[1].source = "source://image/main/buy.png";
	action_imgs[2].source = "source://image/main/findo.png";
	action_imgs[3].source = "source://image/main/mine.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "F75000FF";
	action_lbs[3].fontColor = "222222FF";
});

var mine = ui("mine");
mine.on("touch",function(data, e){
	main_shower.showView("mine");
	action_imgs[0].source = "source://image/main/first.png";
	action_imgs[1].source = "source://image/main/buy.png";
	action_imgs[2].source = "source://image/main/find.png";
	action_imgs[3].source = "source://image/main/mineo.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "222222FF";
	action_lbs[3].fontColor = "F75000FF";
});