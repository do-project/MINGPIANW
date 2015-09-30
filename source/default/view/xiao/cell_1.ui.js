var rootview, page;
rootview = ui("$");
page = sm("do_Page");

rootview.setMapping({   // 此处的Mapping只能设置在 RootView 上 ;
    "do_imageview_1.source" : "do_imageview_1",
    "name.text" : "name",
    "do_label_2.text" : "do_label_2",
    "time.text" : "time",
});
 
var do_alayout_2=ui("do_alayout_2");
var do_alayout_1=ui("do_alayout_1");
do_alayout_1.on("touchDown",function(data, e){
    do_alayout_2.visible = "false";
});
page.on("change-listen",function(data, e){
    do_alayout_2.visible = "true";
});
  