var nf = sm("do_Notification");
var page = sm("do_Page");
var bg_layout = ui("bg_layout");
var app = sm("do_App");
var huanxin =sm("do_HuanXinIM");

var youshang=ui("youshang");
var youshang_=ui("youshang_");

youshang_.on("touchDown",function(data, e){
    youshang.source = "source://image/xiao/2.png";
});
youshang_.on("touch",function(data, e){
    youshang.source = "source://image/xiao/1.png";
    app.openPage({source:"source://view/xiao/youshang.ui", data:"", animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
}); 

/***********************************************/
var listview = ui("do_listview_1");
var listdata = mm("do_ListData");

listview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

listdata.addData([
    {	    
        "template":0,
	    "do_imageview_1":"source://image/xiao/3.png",
	    "name":"名片王小姐",
	    "do_label_2":"Hi，你好，欢迎来到经纬名片...",
	    "time":"今天"
    },{	    
        "template":0,
	    "do_imageview_1":"source://image/xiao/3.png",
	    "name":"名片李小姐",
	    "do_label_2":"Hi，你好，欢迎来到经纬名片...",
	    "time":"星期三"
    },{	    
        "template":0,
	    "do_imageview_1":"source://image/xiao/3.png",
	    "name":"名片张小姐",
	    "do_label_2":"Hi，你好，欢迎来到经纬名片...",
	    "time":"星期一"
    }
]); // 给ListData添加数据
listview.refreshItems(); // 刷新ListView 行数据;
/***********************************************/
//huanxin
//page.on("cell-listen", function(index){
listview.on("touch", function(index){
    if (!huanxin) return nf.alert("此系统暂不支持即时消息");
    data = listdata.getOne(index);
    huanxin.login({username:"1", password:"1"}, function(data, e){});
    huanxin.enterChat({
        userID: data.name,
        userNick: data.name
    });
  page.fire("change-listen", "1");
});

