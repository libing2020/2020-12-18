<?php
    header('content-type:text/html;charset=utf-8');
    //连接数据库
    $link=mysqli_connect("localhost",'root','','aaa');
    //设置编码
    mysqli_set_charset($link,'utf8');
    //获取传入的参数
    $u=$_GET['username'];
    $p=$_GET['password'];

    //sql语句
    $sql="select * from abc where name='$u' and pass='$p'";

    //执行sql语句,并获取结果集
    $result=mysqli_query($link,$sql);

    //获取结果集中的数据，并判断
    if(mysqli_fetch_row($result)){
        // echo "登录成功";
        // setcookie('name',$u,time()+60);
        // header("location:../html/shouye2.html");
        echo '1';
    }else{
        echo "账号或密码有误";
    }

?>