

window.onload = function () {
    var bg = document.getElementById('bg');
    var top_h = document.getElementById('top').offsetHeight;
    var bg_h = document.body.clientHeight - top_h;
    bg.style.height = bg_h + 'px';

    window.onscroll= function () {
        var top = document.getElementById('top');
        var scrollTop = window.scrollY;
        var avatar = document.getElementsByClassName('avatar')[0];
        //console.log(scrollTop);
        if(scrollTop>bg_h){
            top.className = 'fixed';
            top.style.zIndex = 999;
            avatar.style.display = 'block';
        }
        else{
            top.className = '';
            avatar.style.display = '';
        }

        var flag = true;
        var s = document.getElementById('sidebar');
        //var s_top = s.offsetHeight;
        var t_h = top_h + bg_h - 150;
        var f_h = document.getElementById('footer').offsetTop;
        console.log(f_h);
        if(scrollTop>t_h){
            s.style.marginTop = (scrollTop - t_h) +'px';

            var mr = document.getElementsByClassName('mrright');
            var mr_h = mr[(mr.length-1)].offsetTop ;
            if(s.offsetTop>mr_h){
                s.style.marginTop = mr_h +'px';
            }
        }
        else{
            s.style.marginTop = 0;
        }

    };


};