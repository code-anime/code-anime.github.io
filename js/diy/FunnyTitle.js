<!--浏览器搞笑标题    第十二行源码：document.title = 'ヾ(Ő∀Ő3)ノ你帅就回来！' + OriginTitle;-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/fennu.ico");
         document.title = '( >﹏< )你丑你就走！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = '(❁´◡`❁)你帅就回来！';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });