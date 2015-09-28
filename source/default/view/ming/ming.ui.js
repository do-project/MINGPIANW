var nf = sm("do_Notification");
var page = sm("do_Page");
var camera = sm("do_Camera");

var bg_layout = ui("bg_layout");
var youshang_=ui("youshang_");
var youshang=ui("youshang");
var zhong=ui("zhong");
var do_label_1=ui("do_label_1");

youshang_.on("touchDown",function(data, e){
    youshang.source = "source://image/ming/5.png";
});
youshang_.on("touch",function(data, e){
    youshang.source = "source://image/ming/4.png";
    bg_layout.add("youshang_1", "source://view/ming/youshang.ui", 0, 0);
});
zhong.on("touchDown",function(data, e){
    do_label_1.fontColor="808080FF";
});
zhong.on("touch",function(data, e){
    do_label_1.fontColor="FFFFFFFF";
    bg_layout.add("zhong_1", "source://view/ming/zhong.ui", 0, 0);
});
/***********************************************/
var listview = ui("do_listview_1");
var listdata = mm("do_ListData");
var i=0;
listview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

listdata.addData([
    {	    
        "template":0,
	    "do_imageview_1":"source://image/ming/7.png",
	    "do_label_1":"拍摄你的第一张名片"
    }
]); // 给ListData添加数据
listview.refreshItems(); // 刷新ListView 行数据;
/***********************************************/
 
listview.on("touch", function(index) {
    if(listdata.getOne(index).template==0)
    {
        camera.capture(-1, 120, 100, true, function(data){//width : -1 代表以hreight为基准 (保持原图横纵比)缩放;
                listdata.removeRange({fromIndex:index, toIndex:index});
                listdata.addData([
                    {	    
                        "template":1,
                	    "do_imageview_1":data,
                	    "do_label_1":"正在上传,可以继续拍照"
                    },{	    
                        "template":0,
                	    "do_imageview_1":"source://image/ming/7.png",
                	    "do_label_1":"继续拍摄你的名片"
                    }
                ]); // 给ListData添加数据
                listview.refreshItems(); // 刷新ListView 行数据;
                i=index+1;
        })
    }
});
/***********************************************/
//下拉刷新
listview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});
 
/***********************************************/
//viewshow底下的菜单中的拍照键
page.on("ming", function(data) {
    camera.capture(-1, 120, 100, true, function(data){//width : -1 代表以hreight为基准 (保持原图横纵比)缩放;
                listdata.removeRange({fromIndex:i, toIndex:i});
                listdata.addData([
                    {	    
                        "template":1,
                	    "do_imageview_1":data,
                	    "do_label_1":"正在上传,可以继续拍照"
                    },{	    
                        "template":0,
                	    "do_imageview_1":"source://image/ming/7.png",
                	    "do_label_1":"继续拍摄你的名片"
                    }
                ]); // 给ListData添加数据
                listview.refreshItems(); // 刷新ListView 行数据;
                i=i+1;
        })
});


