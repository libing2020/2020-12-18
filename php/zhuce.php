<?php
    header('content-type:text/html;charset=utf-8');
    //连接数据库
    $link=mysqli_connect("localhost",'root','','aaa');
    //设置编码
    mysqli_set_charset($link,'utf8');

     //获取传入的参数
     $u=$_GET['id1'];
     $p=$_GET['pass1'];
     //编写sql
     $sql = "insert into abc(name,pass) values('$u','$p')";

     //执行sql语句
     $result = mysqli_query($link,$sql);
     
     header("location:../html/denglu.html");
 
?>