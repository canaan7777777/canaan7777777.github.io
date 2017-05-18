class Draw {
    //构造函数
    constructor(cobj, option) { //绘图对象
        this.cobj = cobj;
        this.color = option.color;
        this.width = option.width;
        this.style = option.style;
    }

    init() {
        this.cobj.strokeStyle = this.color;
        this.cobj.fillStyle = this.color;
        this.cobj.lineWidth = this.width;

    }

    rect(ox, oy, mx, my) {
        this.init();
        //this.cobj.strokeRect(ox,oy,mx-ox,my-oy);
        this.cobj.beginPath();
        this.cobj.rect(ox, oy, mx - ox, my - oy);
        this.cobj[this.style]();

    }

    line(ox, oy, mx, my) {
        this.init(); //初始化颜色
        this.cobj.beginPath();
        this.cobj.moveTo(ox, oy);
        this.cobj.lineTo(mx, my);
        this.cobj.stroke();
    }

    circleout(ox, oy, mx, my) {
        this.init(); //初始化颜色
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(my - oy, 2) + Math.pow(mx - ox, 2)) / 2; //长方形对角线的一半
        this.cobj.arc(ox + (mx - ox) / 2, oy + (my - oy) / 2, r, 0, 2 * Math.PI);//位置在长方形的正中间
        this.cobj[this.style]();
    }

    circlein(ox, oy, mx, my) {
        this.init(); //初始化颜色
        this.cobj.beginPath()
        //绝对值长和宽哪个小以那个算 直径就是那个的长度
        var r = Math.abs(mx - ox) > Math.abs(my - oy) ? Math.abs(my - oy) / 2 : Math.abs(mx - ox) / 2;
        //
        this.cobj.arc(ox + (mx > ox ? r : -r), oy + (my > oy ? r : -r), r, 0, Math.PI * 2);
        this.cobj[this.style]();
    }

    circlecenter(ox, oy, mx, my) {
        this.init(); //初始化颜色
        this.cobj.beginPath();
        //中心圆的半径就是正方形的对角线
        var r = Math.sqrt(Math.pow(my - oy, 2) + Math.pow(mx - ox, 2));
        this.cobj.arc(ox, oy, r, 0, 2 * Math.PI);
        this.cobj[this.style]();
    }

    poly(ox, oy, mx, my, s) {
        this.init();
        this.cobj.save();
        this.cobj.translate(ox, oy);
        this.cobj.rotate(Math.PI / 2);     //先旋转90度，保证起始边在下边切平行
        var angle = Math.PI / s;
        var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2)) / 2;
        var x = Math.cos(angle) * r;
        var y = Math.sin(angle) * r;
        this.cobj.beginPath();
        this.cobj.moveTo(x, y);
        for (let i = 0; i < s; i++) {
            this.cobj.lineTo(x, -y);
            this.cobj.rotate(-angle * 2);
        }
        this.cobj[this.style]();
        this.cobj.restore();
    }
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
        this.stroke();


    }
    eraser(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,10,10);
    }
}
