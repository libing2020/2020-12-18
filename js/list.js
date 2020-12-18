//获取用户名cookie
var name1=getCookie('name')
//获取当前地址
var url2=location.href
//判断当前cookie是否存在
if(name1){

}else{
    alert('非法进入，请登录')
    location.href='./denglu.html?url='+url2
}

//获取操作对象
var pagination =document.querySelector('.Pagination');
var flex =document.querySelector('.flex');
//使用自执行函数获取数据库中对应的数据
(async function(){
    var p1=await promiseAjax({
        url:'../php/list.php'
    })
    // console.log(p1)
    //转换数据类型
    var dt=eval('('+p1+')')
    // console.log(dt)
    
    //编写传入的obj数据
    var obj={
        pageInfo:{
            pagenum:1,//当前页
            pagesize:15, //每页显示的条数
            totalsize:dt.length, //总条数
            totalpage:Math.ceil(dt.length/15) //总页数
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:'下一页',
            last:"尾页"
        },
        change(m){
            //截取指定长度的数据
            let ar2=dt.slice((m-1)*15,m*15)
            // //拼接所有内容
            var str=''
            for(var attr in ar2){
                str+=`
                <dl>
                  <a href="./xiangqing1.html?id=${ar2[attr].id}">
                   <dt><img src="${ar2[attr].img}" alt=""></dt>
                   <dd>
                       <span>${ar2[attr].name}</span><br/>
                       <span>￥${ar2[attr].money}</span>
                   </dd>
                 </a>  
               </dl>
                `
            }
            flex.innerHTML=str
            // console.log(ar2[attr])
        }
    }
    //创建分液器对象
    new Pagination(pagination,obj) 
})()



//获取回到顶部
var top1 = document.querySelector('.top1')
console.log(top1)
var a;
//给window对象绑定滚动事件
window.onscroll=function(){
    //获取滚动距离
    a=document.body.scrollTop || document.documentElement.scrollTop
    //判断滚动距离
    if(a>200){
        //显示按钮对象
        top1.style.display='block'
    }else{
        top1.style.display='none'
    }
}
//给按钮绑定点击事件
top1.onclick = function(){
    var dsq=setInterval(function(){
        //判断滚动距离是否大于0
        if(a<=0){
            clearInterval(dsq)
            return
        }
        //重新设置滚动距离
        document.documentElement.scrollTop=a-10
    },)
}

