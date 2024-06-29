function changeIndexHeight(){
	var h = $(window).height();
    //alert(h);
    if(h > 600){
        var lh = h / 3;
        $('#block li').css({height:lh});//右2
        $('.comon_pic').css("height",h);
        $('.shade_cot').css("height",h);
        $('.shade_1').css("height",h);
        $('.comon_pic_1').css("height",h);
        if(h < 910){
        	$('.search').css({position:"absolute",top:"50px"});
            $('#lang').css('marginTop','20px');  
            $('.footer').css('margin-bottom',0);  
        }else{
        	$('.search').css({position:"relative"});
            $('#lang').css('marginTop','0');  
            $('.footer').css('margin-bottom',"30px");  
        }
    }
}
$(function(){
        $(window).resize(function(){
        	changeIndexHeight();
        });
        changeIndexHeight();
    })