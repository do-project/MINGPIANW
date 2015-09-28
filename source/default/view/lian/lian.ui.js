var nf = sm("do_Notification");
var page = sm("do_Page");
var app = sm("do_App");
 
var button=ui("button");
var do_imageview_6=ui("do_imageview_6");

button.on("touchDown",function(data, e){
    do_imageview_6.source = "source://image/lian/5.png";
});
button.on("touch",function(data, e){
    do_imageview_6.source = "source://image/lian/4.png";
    app.openPage({source:"source://view/lian/button.ui", data:"", animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
}); 
   
var do_alayout_3=ui("do_alayout_3");
var do_alayout_5=ui("do_alayout_5");
var do_alayout_7=ui("do_alayout_7");

do_alayout_3.on("touchDown",function(data, e){
    do_alayout_3.bgColor = "FF9A35FF";
});
do_alayout_3.on("touch",function(data, e){
    do_alayout_3.bgColor = "00000000";
    app.openPage({source:"source://view/lian/lian_de.ui", data:"", animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
}); 
do_alayout_5.on("touchDown",function(data, e){
    do_alayout_5.bgColor = "FF9A35FF";
});
do_alayout_5.on("touch",function(data, e){
    do_alayout_5.bgColor = "00000000";
}); 
do_alayout_7.on("touchDown",function(data, e){
    do_alayout_7.bgColor = "FF9A35FF";
});
do_alayout_7.on("touch",function(data, e){
    do_alayout_7.bgColor = "00000000";
});  





