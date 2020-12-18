var end = document.querySelector('.end');
//获取localStrong的数据
var cartList = localStorage.getItem("cartList") || "[]";
//转为数组对象
cartList = JSON.parse(cartList)

show1()
function show1() {
    if (cartList) {
        //验证全选框是否被选择
        var quan1 = cartList.every(item => {
            return item.kuang == 1
        })
        var aa = total1()
        //创建变量,拼接所有商品信息
        cartList.forEach(item => {
            var str2 = `
    <div class="end1">
                    <input type="checkbox" name="quan" ${quan1 ? 'checked' : ''}>
                    <span>全选</span>
                    <span>商品信息</span>
                    <span>规格</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>优惠</span>
                    <span>小计</span>
                    <span>操作</span>
                </div>
                <div class="end2">
                    <span>温馨提示</span>
                    <span>选购清单中的商品无法保留库存，请您及时结算</span>
                </div>
         
    `
            //遍历数组中所有的商品信息
            cartList.forEach(item => {
                str2 += `
               <div class="biao">
        <input type="checkbox" ${item.kuang == 1 ? 'checked' : ''} name="xuan" data-id="${item.id}">
        <img src="${item.img}" alt="">
        <span>${item.name}</span>
        <span>标准黑</span>
        <span>尺码:39.5</span>
        <span>${item.money}</span>
        <span>
            <button  data-id=${item.id} ${item.num <= 1 ? 'disabled' : ''}>-</button><input type="text" value="${item.num}" id="num1"><button  data-id=${item.id} ${item.num >= item.kc ? 'disabled' : ''}>+</button>
        </span>
        <span>￥0.00</span>
        <span>${item.money * item.num}</span>
        <span data-id=${item.id}>删除</span> 
    </div>
        `
            })
            str2 += `
            </div>
        </div>
    `
            str2 += `
    <div class="end5">
        <div class="main">
            <div class="zong">
                <input type="checkbox" name="quan" ${quan1 ? 'checked' : ''}>
                <span>全选</span>
                <span>批量删除</span>
                <span>继续购物</span>
                <span>总计:</span>
                <span>${aa[1]}</span>
                <span>去结算</span>
            </div>
        </div>
    </div>
    `
            end.innerHTML = str2
        })
    } else {
        var str = `
    <div class="end1">
        <input type="checkbox" name="" id="">
        <span>全选</span>
        <span>商品信息</span>
        <span>规格</span>
        <span>单价</span>
        <span>数量</span>
        <span>优惠</span>
        <span>小计</span>
        <span>操作</span>
    </div>
    <div class="end2">
        <span>温馨提示</span>
        <span>选购清单中的商品无法保留库存，请您及时结算</span>
    </div>
    <div class="end3">
        <p>
        您还没有添加商品到购物车
        </p>
    </div>
        `
        end.innerHTML=str
    }
}
//给大盒子绑定点击事件
end.onclick = function (e) {
    // console.log(cartList)
    var e = e || window.event
    var target = e.target || e.srcElement
    //加法
    if (target.innerHTML == "+") {
        var id1 = target.getAttribute('data-id')
        //遍历数组元素
        cartList.forEach(item => {
            //判断是否为当前操作商品
            if (item.id == id1) {
                item.num += 1
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }

    //减发
    if (target.innerHTML == "-") {
        //获取id
        var id1 = target.getAttribute('data-id')
        //遍历数组元素
        cartList.forEach(item => {
            //判断是否为当前操作商品
            if (item.id == id1) {
                item.num -= 1
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    //删除一行
    if (target.innerHTML == "删除") {
        //获取id
        var id1 = target.getAttribute('data-id')
        //遍历数组元素，把满足条件的数据过滤，不满足条件的元素保留
        cartList2 = cartList.filter(item => {
            return item.id != id1
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList2))
        //刷新
        location.reload()
    }
    //全选
    if (target.getAttribute('name') == 'quan') {
        //遍历数组中所有的数据
        cartList.forEach(item => {
            //判断全选框是否被选中
            if (target.checked) {
                //修改所有商品选中框的kuang
                item.kuang = 1
            } else {
                item.kuang = 0
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    //选中框
    if (target.getAttribute('name') == 'xuan') {
        //获取当前商品id
        var id1 = target.getAttribute('data-id')
        //遍历数组元素
        cartList.forEach(item => {
            //判断是否为当前操作商品
            if (item.id == id1) {
                //   item.kuang=item.kuang?0:1
                if (item.kuang == 1) {
                    item.kuang = 0
                } else {
                    item.kuang = 1
                }
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    if (target.innerHTML == '去结算') {
        //确定是否购买
        if (confirm("你确定要购买吗？")) {
            alert("你要支付:" + total1()[1])
            //过滤数组元素
            var cartList3 = cartList.filter(item => {
                return item.kuang != 1
            })
            //重置localStrong
            localStorage.setItem('cartList', JSON.stringify(cartList3))
            location.reload()
        }
    }
    //清空购物车
    if (target.innerHTML == '批量删除') {
        //过滤数组元素
        var cartlist4 = cartList.filter(item => {
            return item.kuang != 1
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartlist4))
        location.reload()
    }

}
function total1() {
    var num = 0 //总数量
    var price = 0 //总价格
    //遍历carlist数组
    cartList.forEach(item => {
        //判断该商品是否被选择
        if (item.kuang == 1) {
            //统计总数量
            num += item.num
            //统计总计
            var sum = parseInt(item.num) * parseFloat(item.money)
            price += sum
        }
    })
    return [num, price.toFixed(2)]
}

//获取回到顶部
var top1 = document.querySelector('.top1')
console.log(top1)
var a;
//给window对象绑定滚动事件
window.onscroll = function () {
    //获取滚动距离
    a = document.body.scrollTop || document.documentElement.scrollTop
    //判断滚动距离
    if (a > 200) {
        //显示按钮对象
        top1.style.display = 'block'
    } else {
        top1.style.display = 'none'
    }
}
//给按钮绑定点击事件
top1.onclick = function () {
    var dsq = setInterval(function () {
        //判断滚动距离是否大于0
        if (a <= 0) {
            clearInterval(dsq)
            return
        }
        //重新设置滚动距离
        document.documentElement.scrollTop = a - 10
    })
}