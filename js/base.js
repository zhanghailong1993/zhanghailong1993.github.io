 window.onload=function(){
        var oUl=document.querySelector('.hot-recommend-nav');
        var oH=document.querySelector('.hover-bg');
        var oDiv=document.querySelector('.hot-recommend-content');
        var oBtn=document.querySelector('.active-line');
        var oB=document.querySelector('#bannerContent ul');
        var aBl=oB.children;
        var oS=document.getElementById('switchBtn');
        var H=oS.children[0].offsetHeight;
        var oL=oS.children;
        var iNow=0;
        for(var i=0;i<oL.length;i++){
           (function(index){
             oL[i].onclick=function(){
                 iNow=index;
                change(index);
            };
           })(i);
        }
        var aLi=oUl.children;
        var j=aLi[0].offsetWidth;  
        var w=oDiv.children[0].offsetWidth;
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                for(var i=0;i<aLi.length;i++){
                    aLi[i].className='';
                }
                this.className='active';
                oBtn.style.transition='1s all ease';
                oBtn.style.left=this.index*j+'px';
                oDiv.style.transition='1s all ease';
                oDiv.style.left=-this.index*w+'px';
            };
        }
        var timer=setInterval(function(){
                iNow++;
                if(iNow==5){
                    iNow=0;
                }
                change(iNow);
        },1000);
        function change(index){
                oH.style.transition='.4s all ease';
                oH.style.marginTop=H*index+'px';
             for(var i=0;i<aBl.length;i++){
                aBl[i].style.zIndex='2';
                aBl[i].style.opacity='0';
                aBl[i].style.transition='1s all ease';
             }
                aBl[index].style.zIndex='5';
                aBl[index].style.opacity='1';
        }

    };