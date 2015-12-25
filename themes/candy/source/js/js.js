window.onload = function () {
    var bg = document.getElementById('bg');
    var top_h = document.getElementById('top').offsetHeight;
    var bg_h = document.body.clientHeight - top_h;
    var avatar = document.getElementsByClassName('avatar')[0];
    if (bg) {
        avatar.style.display = '';
        bg.style.height = bg_h + 'px';
    }

    window.onscroll = function () {
        var top = document.getElementById('top');
        var scrollTop = window.scrollY;
        //console.log(scrollTop);

        if (scrollTop > top_h) {
            top.className = 'fixed';
            top.style.zIndex = 999;
            avatar.style.display = 'block';
        }
        else {
            if (bg) {
                avatar.style.display = '';
            }
            top.className = '';

        }

        var s = document.getElementById('sidebar');
        var t_h = top_h + bg_h - 90;
        if (scrollTop > t_h && bg_h > 0) {
            s.style.marginTop = (scrollTop - t_h) + 'px';

            var mr = document.getElementsByClassName('mrright');
            var mr_h = mr[(mr.length - 2) < 0 ? 0 : (mr.length - 2)].offsetTop;
            if (s.offsetTop > mr_h) {
                s.style.marginTop = mr_h - top_h + 'px';
            }
        }
        else {
            s.style.marginTop = 0;
        }

    };


};