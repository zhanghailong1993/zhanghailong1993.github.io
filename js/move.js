
function getStyle(obj,sName){
    return (obj.currentStyle || getComputedStyle(obj,false))[sName];
}
function move(obj,json,options){
    var options=options || {};
    var duration=options.duration || 1000;
    var easing=options.easing || 'linear';
    var start={};
    var dis={};

    for(name in json){
        start[name]=parseFloat(getStyle(obj,name));
        dis[name]=json[name]-start[name];
    }
    //start {width:50,}  dis {width:150}
    //console.log(start,dis);
    var count=Math.floor(duration/30);
    var n=0;

    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;
        if(n>count){
            clearInterval(obj.timer);
            options.complete && options.complete();
        }else{
            for(name in json){
                switch (easing){
                    case 'linear':
                        var a=n/count;
                        var cur=start[name]+dis[name]*a;
                        break;
                    case 'ease-in':
                        var a=n/count;
                        var cur=start[name]+dis[name]*a*a*a;
                        break;
                    case 'ease-out':
                        var a=1-n/count;
                        var cur=start[name]+dis[name]*(1-a*a*a);
                        break;
                }
                if(name=='opacity'){
                    obj.style.opacity=cur;
                }else{
                    obj.style[name]=cur+'px';
                }
            }
        }



    },30);
}
