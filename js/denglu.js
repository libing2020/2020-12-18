//获取地址栏的参数信息
var seach1 = location.search
var btn1 = document.querySelector('.btn1')

console.log(btn1)
btn1.onclick=function(){
    var user1=document.querySelector('#user1').value
    var pass1=document.querySelector('#pass1').value
    //判断地址栏中是否有参数
if(seach1){
   
    //分割参数地址
    var newUrl=seach1.split('=')[1];
    //使用ajax发送登录请求
    (async function(){
        var p1=await promiseAjax({
            url:'../php/denglu.php',
            data:`username=${user1}&password=${pass1}`
        })
        //判断返回的结果是否为1
        if(p1==1){
            //添加cookie
            setCookie('name',user1)
            //登录成功跳转到指定页面
            location.href=newUrl
        }else{
            alert('账号或密码有误')
        }
    })()
}else{
    //使用ajax发送登录请求
    (async function(){
        var p1=await promiseAjax({
            url:'../php/denglu.php',
            data:`username=${user1}&password=${pass1}`
        })
        //判断返回的结果是否为1
        if(p1==1){
            //添加cookie
            setCookie('name',user1)
            //登录成功跳转到指定页面
            location.href='./index.html'
        }else{
            alert('账号或密码有误')
        }
    })()
}
        //阻止表单的默认提交行为
        return false
}
//获取对象
var user = document.querySelector('.user')
var phone = document.querySelector('.phone')
// console.log(user,phone)
var zhang = document.querySelector('.zhang')
var shou = document.querySelector('.shou')
console.log(zhang,shou)
shou.onclick = function(){
    shou.style.borderBottom='6px solid red'
    zhang.style.borderBottom='6px solid #ccc'
    phone.style.display='block'
    user.style.display='none'
}
zhang.onclick = function(){
    zhang.style.borderBottom='6px solid red'
    shou.style.borderBottom='6px solid #ccc'
    phone.style.display='none'
    user.style.display='block'
}
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