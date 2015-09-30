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

 
