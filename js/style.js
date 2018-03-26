
//教师切换
(function(){
		clearInterval(time);
		var time=setInterval(run,2000);
		var step=618;
		var nub=0;	
	
		function run(){				
				if(nub==4){
					nub=0;
				};
        $(".jiangshi").animate({"marginLeft":-(step*nub)+"px"});
        $(".teac_ctrl ul li").eq(nub).addClass("ctrl_dian").siblings().removeClass("ctrl_dian");
				nub+=1;	
		};

		$(".teac_ctrl ul li").click(function(){
			nub=$(this).index();
			$(".jiangshi").animate({"marginLeft":-(step*nub)+"px"});
			$(this).addClass("ctrl_dian").siblings().removeClass("ctrl_dian");
		});
		$(".teac_ctrl").mouseenter(function(){
	    clearInterval(time)		    
		})
		$(".teac_ctrl").mouseleave(function(){
	    time=setInterval(run,2000);
		})
	})();
	
//tab切换的封装	
function Tab(){	
};
Tab.prototype={
	tab:function(ctrl,xian,yuan,zeng){
		var ctrl=document.getElementsByClassName(ctrl);
		var play_list=document.getElementsByClassName(xian);
		for (var i=0;i<ctrl.length;i++) {
			ctrl[i].index=i;  //绑定i值
			ctrl[i].onclick=function(){
				var num=this.index;  //获取点击的第几个
				for (var j=0;j<ctrl.length;j++) {
					ctrl[j].className=yuan;  //全部取出掉样式
					play_list[j].style.display="none";
				};
				this.className+=" "+zeng;//为当前样式添加选中效果
				play_list[num].style.display="block";
			}
		}
	}
}
var tab1=new Tab();
tab1.tab("ctrl","play_list","ctrl","ctrl_active");
var tab2=new Tab();
tab2.tab("shipin","chuan_x","shipin","chuan_btn_active");
//榜切换
(function(){
		clearInterval(time);
		var time=setInterval(run,2000);
		var step=780;
		var nub=0;		
		function run(){				
				if(nub<6){
					nub=nub+1;
				}else{
					nub=1;
					$(".bang_xi ul").css({"marginLeft":0});
				}
        $(".bang_xi ul").stop().animate({"marginLeft":-(step*nub)+"px"});
				
		};
//  每次点击左边按钮的时候让nub-1
$(".bang_btn_left").click(function(){
	if(nub>0){
			nub=nub-1
		}else{
			$(".bang_xi ul").css({"marginLeft":-(step*6)+"px"}); 
			nub=5;
		};
		  $(".bang_xi ul").stop().animate({"marginLeft":-(step*nub)+"px"});
});
//  每次点击左边按钮的时候让nub+1;
$(".bang_btn_right").click(function(){
	run();
});
//清除定时器
$(".bang_btn_left,.bang_btn_right").mouseenter(function(){
	clearInterval(time)
});
//启动定时器
$(".bang_btn_left,.bang_btn_right").mouseleave(function(){
	time=setInterval(run,2000);
});
	})();

// 楼层跳跃

function Scroll(){

};
Scroll.prototype={
	scroll:function(gao,dom){
        var height=$(gao).offset().top;	
		$(dom).click(function() {
			$("body,html").animate({
				scrollTop:height
			},500);
			$(this).css("color","#ffff00").siblings().css("color","#ffffff")
		});
	}
};
var top1=new Scroll();
top1.scroll(".tui",".ceshi");
var top2=new Scroll();
top2.scroll(".fuwu",".gexing");
var top3=new Scroll();
top3.scroll(".teacher",".shizi");
var top4=new Scroll();
top4.scroll(".ban",".banxing");
var top5=new Scroll();
top5.scroll(".play",".zhibo");
var top6=new Scroll();
top6.scroll(".ziliao",".ziliao");
var top7=new Scroll();
top7.scroll(".shi",".ketang");
var top8=new Scroll();
top8.scroll(".fa",".baozhang");
var top9=new Scroll();
top9.scroll(".pin",".pinpai");
var top10=new Scroll();
top10.scroll(".m",".hui");


$(window).scroll(function(){
   var height=$(window).scrollTop();
if(height >= 600){
  $(".xuanfu").fadeIn(500);

} else{
 $(".xuanfu").fadeOut(500);
};
});