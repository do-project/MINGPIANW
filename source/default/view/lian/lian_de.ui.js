var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
page.on("back", function(){ app.closePage() });
var action_back=ui("action_back");
var do_imageview_7=ui("do_imageview_7");
action_back.on("touchDown", function(){ 
    do_imageview_7.source = "source://image/lian/7.png";
});
action_back.on("touch", function(){
    do_imageview_7.source ="source://image/lian/6.png";
    app.closePage();
});

 


var do_alayout_10=ui("do_alayout_10");
var do_alayout_11=ui("do_alayout_11");
var do_alayout_12=ui("do_alayout_12");

do_alayout_10.on("touchDown",function(data, e){
    do_alayout_10.bgColor = "FF9A35FF";
});
do_alayout_10.on("touch",function(data, e){
    do_alayout_10.bgColor = "00000000";
}); 
do_alayout_11.on("touchDown",function(data, e){
    do_alayout_11.bgColor = "FF9A35FF";
});
do_alayout_11.on("touch",function(data, e){
    do_alayout_11.bgColor = "00000000";
}); 
do_alayout_12.on("touchDown",function(data, e){
    do_alayout_12.bgColor = "FF9A35FF";
});
do_alayout_12.on("touch",function(data, e){
    do_alayout_12.bgColor = "00000000";
});  