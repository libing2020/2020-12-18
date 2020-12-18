
          var h1=document.querySelector('.header-end');
          var ul = h1.querySelector('ul');
          var dn=document.querySelector('#down'); 
        ul.onmouseover=function(){
            dn.style.display='block'
        },
        ul.onmouseout=function(){
            dn.style.display='none'
        }

        //轮播图
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 })  
    for(i=0;i<mySwiper.pagination.bullets.length;i++){
    mySwiper.pagination.bullets[i].onmouseover=function(){
        this.click();
    };
    } 
        mySwiper.params.pagination.clickable = true ;
        //此外还需要重新初始化pagination
        mySwiper.pagination.destroy()
        mySwiper.pagination.init()
        mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');  


