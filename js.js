function mm1(){
   var a=document.getElementById("mm");
   a.style.color='#a64bf4';//css中有-的属性，在js中要改成驼峰命名法
}
function mm2(){
    var a=document.getElementById("mm");
    a.style.color='rgb(217,217, 217)';//css中有-的属性，在js中要改成驼峰命名法
 }
function yhm1(){
    var a=document.getElementById("yhm");
    a.style.color='#a64bf4';//css中有-的属性，在js中要改成驼峰命名法
 }
function yhm2(){
     var a=document.getElementById("yhm");
     a.style.color='rgb(217,217, 217)';//css中有-的属性，在js中要改成驼峰命名法
  }

    var gotop=document.getElementById("gotop");
    gotop.addEventListener('click', function () {

      // 第一种：获取当前页面的滚动条纵坐标位置
      // document.documentElement.scrollTop = 0;
      // 第二种：
      // window.scrollTo(0, 0);

      let timer = setInterval(function () {

            let top = document.documentElement.scrollTop;

            if (top > 0) {
               document.documentElement.scrollTop -= 20;
            } else {
               document.documentElement.scrollTop -= 0;

               clearInterval(timer);
               timer = null;
            }


         }, 10);

  });


 var tianqilj=document.getElementById("tianqilj");
 tianqilj.addEventListener('click',function(){
   var tianqi=document.getElementById("tianqi")
   if(tianqi.style.display=="none"){
      tianqi.style.display="block";
   }else{
      tianqi.style.display="none"
   }
 });

// 密码显示与隐藏
function tanchu(){
   var a=document.getElementById("mmk").value;
   var b=document.getElementById("zy");
   var c=document.getElementById("by");
   var d=document.getElementById("mmk");
       if(a.length>0){
    c.style.display="block";    
   }else{
    c.style.display="none";   
   }
   c.addEventListener('click',function(){
      c.style.display="none";
      b.style.display="block";
      d.type="text";
   },mm1())
   b.addEventListener('click',function(){
      b.style.display="none";
      c.style.display="block";
      d.type="password";
   },mm1())
}   
