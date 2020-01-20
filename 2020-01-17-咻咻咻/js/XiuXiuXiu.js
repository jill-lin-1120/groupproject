//.all要改
var alltop = document.querySelector('.all');
var mywindow = window;
var prevScroll = mywindow.pageYOffset;
var all_as = document.querySelectorAll('.all_a');

function removeAddcls() {
    all_as.forEach(all_a => {
        all_a.classList.remove('addcls');
    });
}

function removeAddcls_2() {
    all_as.forEach(all_a => {
        all_a.classList.remove('addcls_2');
    });
}

mywindow.addEventListener('scroll', scrollBlock);

function scrollBlock() {
    var oScroll_1 = document.documentElement.scrollTop;
    var all_1 = document.querySelector('.all_1');
    var all_2 = document.querySelector('.all_2');
    var all_3 = document.querySelector('.all_3');
    var oall = Number(alltop.offsetTop);
    var oallblock = oall-500;
    if (oScroll_1 > oallblock) {
        var oScroll = mywindow.pageYOffset;
        if (prevScroll > oScroll) {
            removeAddcls()
            all_as.forEach(all_a => {
                all_a.style.transform = 'translateX(0%)';
            });
            all_1.classList.add('addcls_2');
            all_2.classList.add('addcls_2');
            all_3.classList.add('addcls_2');

        } else {
            removeAddcls_2()
            all_as.forEach(all_a => {
                all_a.style.transform = 'translateX(350%)';
            });
            all_1.classList.add('addcls');
            all_2.classList.add('addcls');
            all_3.classList.add('addcls');
        }
        prevScroll = oScroll;
    }
}