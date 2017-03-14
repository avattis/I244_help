
var list = document.querySelectorAll('div.row div.bead');
var i;
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

