var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
page.on("back", function(){ app.closePage("0") });
var action_back=ui("action_back");
var do_imageview_7=ui("do_imageview_7");
action_back.on("touchDown", function(){ 
    do_imageview_7.source = "source://image/me/5.png";
});
action_back.on("touch", function(){
    do_imageview_7.source ="source://image/me/4.png";
    app.closePage("0");
});
var wancheng=ui("wancheng");
var do_imageview_3=ui("do_imageview_3");
wancheng.on("touchDown", function(){ 
    do_imageview_3.source = "source://image/me/5.png";
});
wancheng.on("touch", function(){
    do_imageview_3.source ="source://image/me/4.png";
    app.closePage("0");
});

/*******************************************************/
//下面两个按键的点击效果
var do_ALayout_13=ui("do_ALayout_13");
var do_ALayout_14=ui("do_ALayout_14");
var do_ImageView_8=ui("do_ImageView_8");
var do_ImageView_9=ui("do_ImageView_9");

do_ALayout_13.on("touchDown",function(data, e){
	do_ImageView_8.source = "source://image/me/3.png";
});
do_ALayout_13.on("touch",function(data, e){
	do_ImageView_8.source = "source://image/me/2.png";

});
do_ALayout_14.on("touchDown",function(data, e){
	do_ImageView_9.source = "source://image/me/3.png";
});
do_ALayout_14.on("touch",function(data, e){
	do_ImageView_9.source = "source://image/me/2.png";
	app.closePage("1");
}); 
/*******************************************************/
var add = ui("addLinearLayout");
var linearlayout = ui("do_LinearLayout_1");
var i = 4;
add.on("touch", function() {
	// 插入到第二个组件上
	//add函数返回是新加ui的地址，
	//add 的参数1是表示加进来的ui在index.ui里的唯一标示，必须和index.ui其他view的id不一样
	var newui = linearlayout.add("contact_" + i, "source://view/me/cell_1.ui",
			"contact_"+(i-1));
	i++;
});

/***********************************************/
  