var rand=Math.floor(Math.random()*100);//取得0-99的一个随机数
if(rand<=9){
    postMessage(1);//若是在0-9之间，则表示抢到票了，传递数据1
}else{
    postMessage(0);//否则，表示没有抢到票，传递数据0
}