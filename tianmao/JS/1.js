//右边小块的遮罩
var Tonezhe=document.querySelectorAll(".tuwen-one-right .onemask");
var Toneli=document.querySelectorAll(".tuwen-one-right li");
Array.from(Toneli).forEach(function (v,i) {   //兼容火狐浏览器
    v.onmouseover=function () {
        Tonezhe[i].style.opacity="1";
    };
    v.onmouseout=function () {
        Tonezhe[i].style.opacity="0";
    }
});
//左边的轮播
var  title=document.querySelectorAll(".tuwen-one-left2 li");  //轮播按钮
var  picture=document.querySelectorAll(".tuwen-one-left1 li"); //轮播图
var  big=document.querySelector(".tuwen-one-left");         //整体左边的大框
var  olmask=document.querySelectorAll(".tuwen-one-left2-tu .olmask"); //轮播图上的遮罩（大猫头）

var topk=document.querySelector(".tuwen-one-left1");   //轮播图的框
var dik=document.querySelector(".tuwen-one-left2");    //轮播按钮的框
var catzhe=document.querySelector(".maozhe");          //轮播按钮上的小猫头
var leftjian=document.querySelector(".toleftjian");    //轮播左按钮
var rightjian=document.querySelector(".torightjian");  //轮播右按钮

var objq=olmask[0];
olmask[0].style.opacity=1;   //设置第一个默认的猫头透明度
Array.from(title).forEach(function (v,index) {
    v.onmouseover=function () {
        objq.style.opacity=0;   //清空其他猫头遮罩
    	olmask[index].style.opacity="1";
        num=index;     //移动过去之后，接着走
        for(var i=0;i<title.length;i++){
            title[i].style.color="#000";
            picture[i].style.display="none";
        }
        title[index].style.color="red";
        picture[index].style.display="block";
        objq=olmask[index];
    };
    // v.onmouseout=function () {
    //     // olmask[index].style.opacity="0";
    // }
});
var num=0;
var t1=setInterval(move,2000);
    function move() {
        num++;

        if (num==title.length){
            num=0;
            dik.style.marginLeft=0;
            leftjian.style.display="none";
            rightjian.style.display="block";
        }
        if (num==3){
            dik.style.marginLeft=-492+"px";
            rightjian.style.display="none";
            leftjian.style.display="block";
        }        //让自己轮播的时候到第四个整体向左移动
        objq.style.opacity=0;
        olmask[num].style.opacity="1";
        for(var i=0;i<title.length;i++){
            picture[i].style.display="none";
        }
        picture[num].style.display="block";
        objq=olmask[num];
    }
big.onmouseover=function () {
    clearInterval(t1);
};
big.onmouseout=function () {
    t1=setInterval(move,2000);
};
topk.onmouseover=function () {
    catzhe.style.transform="scale(1.2,1.2)";
};
topk.onmouseout=function () {
    catzhe.style.transform="scale(1,1)";
};
leftjian.onclick=function () {
    dik.style.marginLeft=0;
    leftjian.style.display="none";
    rightjian.style.display="block";
};
rightjian.onclick=function () {
    dik.style.marginLeft=-492+"px";
    rightjian.style.display="none";
    leftjian.style.display="block";
};
//左边的下边
var inner=document.querySelector(".tol3-list");
console.log(inner);
var numq=0;
setInterval(function () {
    if(numq==0){
        inner.style.transition = "all 1s";
    }
    //第二次轮回再加上过渡
    numq++;
    inner.style.marginTop=-40*numq+"px";
},2000);

inner.addEventListener("transitionend",function () {
    if(numq==4) {
        inner.style.transition = "none";
        inner.style.marginTop = 0;
        numq = 0;
    }
});
//banner图的轮播
//CSS中的图片的li设置opacity。其中第一个li设置透明度为0;
var pbtn=document.querySelectorAll(".banner-neitu li");  //图片
var lbtn=document.querySelectorAll(".banner-lunbo li");  //轮播点
var Bbox=document.querySelector(".banner-neitu");        //大框
var Bg=document.querySelector(".bannerk");              //背景颜色大框
var colorArr=["#0A8EFE","#E8E8E8","#E8E8E8","#E8E8E8","#E4F6CF","#FE7F03"]; //背景变换的颜色数组
var obj1=lbtn[0];
var obj2=pbtn[0];
Array.from(lbtn).forEach(function (v2,index1) {
var shijian2;
    v2.onmouseover=function () {
        clearTimeout(shijian2);
        shijian2=setTimeout(function () {
            num1=index1;     //移动过去之后，接着走
            obj1.style.background="rgba(0, 0, 0, 0.5)";
            obj2.style.opacity="0";
            obj2.style.zIndex="1";
            //以上三步全部为恢复默认的配置
            pbtn[index1].style.opacity="1";
            pbtn[index1].style.zIndex="2";
            //上两步为配置图片的变化
            lbtn[index1].style.background="#FFF";
            //配置按钮的变化
            Bg.style.background=colorArr[index1];
            //给背景换颜色
            obj2=pbtn[index1];
            obj1=lbtn[index1];
            //重新给对象赋值为当前的元素
        },500);

    }
});
var num1=0;
var t2=setInterval(move1,3000);
    function move1() {
        num1++;
        if (num1==lbtn.length){
            num1=0;
        }
        obj1.style.background="rgba(0, 0, 0, 0.5)";
        obj2.style.opacity="0";
        obj2.style.zIndex="1";
        //以上三步全部为恢复默认的配置
        pbtn[num1].style.opacity="1";
        pbtn[num1].style.zIndex="2";
        //上两步为配置图片的变化
        lbtn[num1].style.background="#FFF";
        //配置按钮的变化
        Bg.style.background=colorArr[num1];
        //给背景换颜色
        obj2=pbtn[num1];
        obj1=lbtn[num1];
    }
Bbox.onmouseover=function () {
    clearInterval(t2);
};
Bbox.onmouseout=function () {
    t2=setInterval(move1,3000);
};
//标题导航栏
var tou=document.querySelectorAll(".banner-title-middle p");
var tu=document.querySelectorAll(".banner-title-middle p img");
Array.from(tou).forEach(function (v,index) {
    v.onmouseover=function () {
        tu[index].style.top="-12px";
    };
    v.onmouseout=function () {
        tu[index].style.top="0";
    };
});
//返回顶部动效
var toback=document.querySelector(".totop");
var backtop=document.querySelector(".back");
toback.onclick=function () {
    animate(document.body,{scrollTop:0},500)
};
backtop.onclick=function () {
    animate(document.body,{scrollTop:0},500)
};
//右边固定的侧滑轮
var cehuabtn=document.querySelectorAll(".cehuabtn");
var cefei=document.querySelectorAll(".cehua");
var shijian;
Array.from(cehuabtn).forEach(function (btn,index) {
    hover(btn,function () {
        btn.style.background="#CC0000";
        clearTimeout(shijian);
        shijian=setTimeout(function () {
            cefei[index].classList.remove("hide");
            cefei[index].classList.add("show");
        },200)
    },function () {
        btn.style.background="";
        clearTimeout(shijian);
        if(cefei[index].classList.contains("show")){
            cefei[index].classList.remove("show");  //先移除出现属性
            cefei[index].classList.add("hide");     //添加隐藏的过度属性
        }
    })
});
//左侧固定动态
var zuogu=document.querySelector(".zuogu");
var zuogubtn=document.querySelectorAll(".zuogu>ul>li");
var floor=document.querySelectorAll(".floor");
console.log(zuogu);
console.log(zuogubtn);
console.log(floor);
//topbar特效
var topbar=document.querySelector(".topbark");
window.onscroll=function () {
    var zuo=document.body.scrollTop;
    if(zuo>760){
        zuogu.style.width=36+"px";
        zuogu.style.height=332+"px";
        topbar.style.top=0;
    }else{
        zuogu.style.width=0;
        zuogu.style.height=0;
        topbar.style.top=-50+"px";
    }
};
zuogubtn.forEach(function (btn,index) {
    btn.onclick=function () {   //按钮点击事件
        var gao=floor[index].offsetTop; //获取对应对象实际距顶部的高
        var shigao=gao-50;    //减去标题栏高度
        animate(document.body,{scrollTop:shigao});
        //有五个属性:对象、操作属性、时间、运动效果、回调函数
    }
});
//猫二维码
var catk=document.querySelector(".catmak");
var catma=document.querySelector(".caterweima");
var catsj=document.querySelector(".catsanjiao");
hover(catk,function () {
    catma.style.display="block";
    catsj.style.display="block";
},function () {
    catma.style.display="none";
    catsj.style.display="none";
});

//图文图片
var cq=document.querySelectorAll(".tuwen-two-left-top2");
var cqimg=document.querySelectorAll(".tuwen-two-left-top2 img");
console.log(cq,cqimg);
cq.forEach(function (v,index) {
    v.onmouseover=function () {
        cqimg[index].style.transform="scale(1.15,1.15)";
    };
    v.onmouseout=function () {
        cqimg[index].style.transform="scale(1,1)";
    };
});

//侧导航栏二级页面
var cenav=document.querySelectorAll(".cenav>ul>li");
var twoce=document.querySelectorAll(".twocenav");
var bigbox=document.querySelector(".bannerk");
// console.log(bigbox);

bigbox.onmouseover=function (e) {
    var target=e.target;   //事件委派
    // console.log(target);
    if(target.className=="iconfont"){
        cenav.forEach(function (v,index) {
            v.onmouseover=function () {
                twoce[index].style.display="block";
            };
            v.onmouseout=function () {
                twoce[index].style.display="none";
            }
        });
    }
};















