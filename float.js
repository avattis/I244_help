
var list = document.querySelectorAll('div.bead');
var i;
var len;

/*for (i = 0, len = list.children.lenght; i < len; i = i + 1) {
    (function (index) {
    list.children[i].onclick = function () {
        "use strict";
        alert(index);
    };(i);
}*/
list[10].onclick = function () {
    "use strict";
    for (i = 0; i < list.length; i = i + 1) {
        list[i].style.backgroundColor = 'red';
    }
};
    

list.onclick = function () {
    "use strict";
    list.style.backgroundColor('red');
    for (i = 0; i < list.length; i = i + 1) {
        
        if (list[i].style.cssFloat("right") === list.style.cssFloat("right")) {
            list[i].style.cssFloat = "left";
        } else {
            list[i].style.cssFloat = "right";
        }
    }
};
alert('0');

