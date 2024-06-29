function id(sId){
    return document.getElementById(sId);
}
function tag(oParent,sTag){
    return oParent.getElementsByTagName(sTag);
}
function css(obj,attr){
    return  obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
    var oPrev=id("prev");
    var oNext=id("next");
    var oList=id("list");
    var oScroll=id("new_scoll");
    //var aLi=244;
   var iLiH=640;
    var oListHeight = oList.style.height = oList.offsetHeight;
    var iMax=parseFloat(css(oScroll,'height'))-parseFloat(oListHeight);
    //alert(oListHeight)
    var b = true;
    oPrev.onclick=function(){
        //alert(iLiH)
        var iTop=parseFloat(css(oList,"top"))+iLiH;
        oPrev.style.background='#b48f32';
         oNext.style.background='#a2a2a2';
        moveTop(oList,"top",iTop,10)
        //alert(oList.top)
    };
    oNext.onclick=function(){
        var iTop=parseFloat(css(oList,"top"))-iLiH;
        //alert(iMax)
        oPrev.style.background='#a2a2a2';
         oNext.style.background='#b48f32';
        moveTop(oList,"top",iTop,-10)
      
    };
    function moveTop(obj,attr,target, speed, callback){
        if (!b) {
            return;
        }
        b = false;
        if(target>=0){
            target=0; 
        }
        
        if(target<=iMax){
            target=iMax;
        }
        
        startMove(obj,attr,target,speed,function(){
             b = true;
        });

    }

var get = {
    byId: function(id) {
        return typeof id === "string" ? document.getElementById(id) : id
    },
    byClass: function(sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp("(^| )" + sClass + "( |$)");
        var aElem = this.byTagName("*", oParent);
        for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        return aClass
    },
    byTagName: function(elem, obj) {
        return (obj || document).getElementsByTagName(elem)
    }
};
function css(obj, attr) {
    return  obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

function startMove(obj, attr, target, speed, callback) {
    //清除定时器
    clearInterval(obj.iTimer);

    //开始定时器
    obj.iTimer = setInterval(function() {

        //获取当前值
        var currentValue = parseInt(css(obj, attr));
        //用当前值+速度（增量) = 当前这一次定时器开启后要达到的值
        var value = currentValue + speed;

        if (speed < 0 && value < target || speed > 0 && value > target) {
            clearInterval(obj.iTimer);
            obj.style[attr] = target + 'px';
            callback && callback();
        } else {
            obj.style[attr] = value + 'px';
        }


    }, 30);

}
