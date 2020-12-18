//获取大盒子对象
var big = document.querySelector('.big')
console.log(big)
// console.log(big)
//获取地址栏中的参数
// console.log(location)
var path1=location.search
var dt;//当前详情信息显示的数据
//判断该参数是否存在
if(path1){
    //获取参数信息
    var id1=id1=path1.split('?')[1].split('=')[1];
    //使用异步函数发送请求，并获取响应结果
    (async function(){
        var p1=await promiseAjax({
            url:'../php/xiangqing.php',
            data:'id='+id1
        })
       //转换格式
        dt = eval('('+p1+')')
        console.log(dt)
       //设置内容
       var str=`
       <div class="leftBox">
            <div class="mark"></div>
            <img src="${dt.img}" alt="" class='img'>
   </div>
   <div class="rightBox">
       <img src="${dt.img}" alt="" class='img2'>
   </div>
   <div class="xiang">
       <p>
           <span>${dt.name}</span>
           <br>
           <span><a href="">此商品不支持用优惠券</a></span>
           <br>
           <span><a href="">参与抽奖可再减五元</a></span>
       </p>
       <ul>
           <li>商品编码: &nbsp ARHQ245-1</li>
           <li>吊牌价:<s>1699</s></li>
           <li>销售价:<a href="">${dt.money}</a></li>
       </ul>
       <b>
           选择尺码:
           <span>40</span>
           <span>41</span>
           <span>42</span>
           <span>43</span>
       </b>
       <a href="./car.html"><button>￥立即购买</button></a>
       <button>加入购物车</button>
       `
       //追加
       big.innerHTML=str
    })()
}else{
    alert('非法进入')
    location.href='./list.html'
}
//给大盒子绑定点击事件
big.onclick = function(){
    var e=e || window.event
    var target = e.target || e.srcElement
    //判断点击的对象是否为“加入购物车”
    if(target.innerHTML=='加入购物车'){
        //获取locaStrong中的cartList
        var cartList=localStorage.getItem("cartList")
        if(cartList){
            var a=0  //判断要添加的数据是否存在
            cartList=JSON.parse(cartList)
            //遍历cartList中的数据
            cartList.forEach((item)=>{
                if(item.id==dt.id){
                 item.num=++item.num
                 a++
                localStorage.setItem('cartList',JSON.stringify(cartList))
                }
            })
            //判断当前添加的商品是否存在
            if(a==0){
                //把当前商品追加到carlist数组中
                cartList.push(dt)
                //修改添加商品的数量
                dt.num=1
                localStorage.setItem('cartList',JSON.stringify(cartList))
            }
        }else{
            dt.num=1
            //在localStrong中设置一个cartList属性
            localStorage.setItem('cartList',JSON.stringify([dt]))
        }
    }
}

var leftBox = document.querySelector('.leftBox')
console.log(leftBox)
big.onmouseover=function(e){
    var e= e || window.event
    var target=e.srcElement
    if(target.className=='img'){
        var mark=document.getElementsByClassName('mark')[0]
        var rightBox=document.getElementsByClassName('rightBox')[0]
        mark.style.display='block'
        rightBox.style.display='block'
    }
}
big.onmouseleave=function(e){
    var e= e || window.event
    var target=e.srcElement
    // if(target.className=='big'){
        var mark=document.getElementsByClassName('mark')[0]
        var rightBox=document.getElementsByClassName('rightBox')[0]
        mark.style.display='none'
        rightBox.style.display='none' 
    // }
}
function move(e){
    var mark=document.getElementsByClassName('mark')[0]
    var rightBox=document.getElementsByClassName('rightBox')[0]
    var rightimg = document.getElementsByClassName('img2')[0]
    // console.log(leftBox.offsetLeft,leftBox.offsetTop)
   //获取光标的移动距离
   var x1=e.pageX-leftBox.offsetLeft-parseInt(mark.offsetWidth)-50
//    console.log(x1)
   var y1=e.pageY-leftBox.offsetTop-parseInt(mark.offsetHeight)-20
  /*  console.log(x1,y1)
   console.log(e.pageX,e.pageY) */
//    console.log(x1,y1)
    //设置边界条件
    var maxX=big.offsetWidth-mark.offsetWidth-775
    var maxY=big.offsetHeight-mark.offsetHeight-30
    var minX=minY=0
     //设置右边图片的移动距离
     var x2,y2
      //判断水平边界
      if(x1<minX){
          mark.style.left=minX+'px'
          x2=0
      }else if(x1>maxX){
          mark.style.left=maxX+'px'
          x2=maxX
      }else{
          mark.style.left=x1+'px'
          x2=x1
      }

      if(y1<minY){
          mark.style.top=minY+'px'
          y2=0
      }else if(y1>maxY){
          mark.style.top=maxY+'px'
          y2=maxY
      }else{
          mark.style.top=y1+'px'
          y2=y1
      }

      //设置右边图片的移动
       rightimg.style.left=-2*x2+'px'
       rightimg.style.top=-2*y2+'px'
}
big.onmousemove=function(e){
    var e= e || window.event
    var target=e.srcElement
        var mark=document.getElementsByClassName('mark')[0]
        var rightBox=document.getElementsByClassName('rightBox')[0]
        var rightimg = document.getElementsByClassName('img2')[0]
        move(e)
 }
 
/*  document.body.onmouseover=function(){
    var mark=document.getElementsByClassName('mark')[0]
    var rightBox=document.getElementsByClassName('rightBox')[0]
    mark.style.display='none'
    rightBox.style.display='none'
 } */