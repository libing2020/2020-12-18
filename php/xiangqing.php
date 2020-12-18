<?php
header('content-type:text/html;charset=utf-8');
//获取参数
$id=$_GET['id'];

//链接数据库
$link=mysqli_connect("localhost",'root','','aaa');
//设置编码
mysqli_set_charset($link,"utf8");
//sql语句
$sql="select * from bing where id=$id";
//执行sql语句
$result=mysqli_query($link,$sql);

//获取结果集中的数据
$row=mysqli_fetch_assoc($result);

echo json_encode($row);
?>