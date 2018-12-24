var time=0;
function mytime(){
    postMessage(time);//将计算结果传递给HTML页面中胡worker对象
    time++;
    setTimeout(mytime,1000);
}
mytime();