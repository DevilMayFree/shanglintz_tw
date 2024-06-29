/*导航栏*/
//alert(1)
var list = document.querySelectorAll('.nav_list');

//alert(list.length)
for(var i=0;i<list.length;i++){
    var navlist = list[i];
    navlist.onmouseover= (function(num){
        return function(){
            var navlist = list[num];
            var lilist = navlist.childNodes[0];
            var tip = navlist.childNodes[1];
            var show = navlist.childNodes[3];

            lilist.className+=' select';
            show.style.display="block";
            show.style.zIndex = '999';
            tip.style.visibility="visible";
            tip.className="select_more";
            //alert(1);
        }
    })(i);
    navlist.onmouseout= (function(num){
        return function(){
            var navlist = list[num];
            var show = navlist.childNodes[3];
            var tip = navlist.childNodes[1];
            var lilist = navlist.childNodes[0];
            show.style.display="none";
            show.style.zIndex = '0';
            tip.style.visibility="hidden";
            tip.className="";
            lilist.className-=' select';
        }
    })(i);
}
//var nav = document.querySelectorAll('.contains ul li');
//for(var i=0;i<nav.length;i++){
//    var li_list = nav[i];
//    li_list.onmouseover = function(){
//        this.className+=' nav_select';
//    }
//    li_list.onmouseout = function(){
//        this.className-=' nav_select';
//    }
//}
$(function(){


  $(".memorabilia-tab ul li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on")

    $(".big_news").eq($(this).index()).addClass("on").siblings(".big_news").removeClass("on")
  })

	//$(".contains").find("ul li:first-child").addClass('nav_select');
    $('.contains ul li ').mouseover(function(event) {

        $(this).addClass('nav_select').siblings().removeClass('nav_select');
    });
//	$('.contains ul li ').click(function(event) {
//
//	        $(this).addClass('nav_select').siblings().removeClass('nav_select');
//	 });
})
