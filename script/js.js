document.addEventListener('DOMContentLoaded', function() {

    let head = document.getElementById('head');
    let offsetHeight = document.getElementById('head').offsetHeight;
    let burger = document.getElementById('burger');
    let burger_close = document.getElementById('burger_close');
    let headheight = head.offsetHeight;
    let nav = document.getElementById('nav');
    let subclass_nav = document.getElementById('subclass_nav');

    window.addEventListener('scroll' , function() {
        if (pageYOffset > offsetHeight + headheight) {
            head.classList.add('fixed');
        }else {
            head.classList.remove('fixed');
        }
    });





    function resize() {
        if (window.innerWidth <= 1023) {
            subclass_nav.classList.remove('subclass_nav');
        } else {
            subclass_nav.classList.add('subclass_nav');
        }
    }
    window.onresize = resize;



    


    burger.onclick = function() {
        nav.classList.toggle('show');
        subclass_nav.classList.remove('subclass_nav');

    }
    burger_close.onclick = function() {
        nav.classList.toggle('show');
    }



    let click_item = document.querySelectorAll('.click_item'),
        nav_item = document.querySelectorAll('.nav_item'),
        icon_arrow = document.querySelectorAll('.icon_arrow'),
        number = 0;


    click_item = Array.from(click_item);
    nav_item = Array.from(nav_item);
    icon_arrow = Array.from(icon_arrow);

    click_item.forEach(function (item) {
        item.onclick = (e) => {
            let art = click_item.indexOf(e.target);
            let q = nav_item[art].childElementCount;
            if (q === 2) {
                subclass_nav.classList.toggle('active');
                icon_arrow[art].classList.toggle('active_icon');
            }
            number = art;
        }
    });




})