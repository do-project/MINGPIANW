var nf = sm("do_Notification");
var page = sm("do_Page");
var app = sm("do_App");

var do_alayout_2=ui("do_alayout_2");
var do_alayout_3=ui("do_alayout_3");
var do_imageview_4=ui("do_imageview_4");
var do_imageview_5=ui("do_imageview_5");

do_alayout_2.on("touchDown",function(data, e){
    do_imageview_4.source = "source://image/me/3.png";
});
do_alayout_2.on("touch",function(data, e){
    do_imageview_4.source = "source://image/me/2.png";
    page.fire("me-listen", "1");
});
do_alayout_3.on("touchDown",function(data, e){
    do_imageview_5.source = "source://image/me/3.png";
});
do_alayout_3.on("touch",function(data, e){
    do_imageview_5.source = "source://image/me/2.png";
    app.openPage({source:"source://view/me/edit.ui", data:"", animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
});
/*******************************************************/
//来自edit的响应
page.on("result",function(d){
	if(d=="1")
		page.fire("me-listen", "1");
});