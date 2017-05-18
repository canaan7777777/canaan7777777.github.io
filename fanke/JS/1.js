//轮播
var btns1=document.querySelectorAll(".banner .yuan li");
var cons1=document.querySelectorAll(".banner .banner-tu li")
var container1=document.querySelector(".banner");
var obj=btns1[0]    //小圆点第一个值
var newcons=cons1[0] //图第一个值
var jz=document.querySelector(".jiantouzuo");
var jy=document.querySelector(".jiantouyou");

Array.from(btns1).forEach(function (ele,index) {  //ele是圆的每一个，index每一个下标
    ele.onmouseover=function(){
       num1=index;
        obj.style.background="#dddddd";
        newcons.style.zIndex="1"
        newcons.style.opacity="0"
        btns1[index].style.background="#a10000";
        cons1[index].style.zIndex="2";
        cons1[index].style.opacity="1"
        obj=btns1[index]
        newcons=cons1[index];
    }
})

var num1=0;
var t=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==btns1.length){
        num1=0;
    }
    if(num1==-1){
        num1=btns1.length-1
    }
    obj.style.background="#dddddd";
    newcons.style.zIndex="1"
    newcons.style.opacity="0"
    btns1[num1].style.background="#a10000";
    cons1[num1].style.zIndex="2";
    cons1[num1].style.opacity="1"
    obj=btns1[num1]
    newcons=cons1[num1];
}
container1.onmouseover=function () {
    clearInterval(t);
}
container1.onmouseout=function () {
    t=setInterval(move1,2000)
}
btns1.onmouseout=function () {
    t=setInterval(move1,2000)
}
jz.onclick=function () {
    num1-=2;
    move1()
}
jy.onclick=function () {
    move1()
}



//下拉二级页面详情
 var xiala=document.querySelectorAll(".xiala");
 var dr=document.querySelectorAll(".dr .li");

 var arr=Array.from(xiala).map(v=>v.querySelectorAll("li").length*35-20);
 console.log(arr)
 Array.from(dr).forEach(function (li,i) {
     li.onmouseover=function () {
         xiala[i].style.height=arr[i]+"px";
     }
     li.onmouseout=function () {
         xiala[i].style.height=0;
     }
 })



//微信二维码
var w1=document.querySelector(".w1");
var weixin=document.querySelector(".weixindatu");

w1.onmouseover=function () {
    weixin.style.display="block";
}
w1.onmouseout=function () {
    weixin.style.display="none";
}


//购物车
var gwc=document.querySelector(".gwc-yc");
var soutu=document.querySelector(".sou-tu");
hover(soutu,function () {
    gwc.style.display="block";
},function () {
    gwc.style.display="none";
})


//返回顶部
//返回顶部动效
var toback=document.querySelector(".blacktop");
console.log(toback)
toback.onclick=function () {
    animate(document.body,{scrollTop:0})
};
