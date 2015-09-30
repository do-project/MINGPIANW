var do_label_1=ui("do_label_1");
var do_label_2=ui("do_label_2");
var do_label_3=ui("do_label_3");
var do_label_4=ui("do_label_4");

do_label_1.on("touchDown",function(data, e){
    do_label_1.bgColor="9B9B9BFF";
    nf.alert("9B9B9BFF");
});
do_label_1.on("touch",function(data, e){
    do_label_1.bgColor="00000000";
});
do_label_2.on("touchDown",function(data, e){
    do_label_2.bgColor="9B9B9BFF";
});
do_label_2.on("touch",function(data, e){
    do_label_2.bgColor="00000000";
});
do_label_3.on("touchDown",function(data, e){
    do_label_3.bgColor="9B9B9BFF";
});
do_label_3.on("touch",function(data, e){
    do_label_3.bgColor="00000000";
});
do_label_4.on("touchDown",function(data, e){
    do_label_4.bgColor="9B9B9BFF";
});
do_label_4.on("touch",function(data, e){
    do_label_4.bgColor="00000000";
});

var bg_layout = ui("bg_layout");
bg_layout.on("touch",function(){
	
	bg_layout.remove();
});





