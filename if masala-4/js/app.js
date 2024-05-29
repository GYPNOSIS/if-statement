"use strict";

let x = + prompt('1-chi sonni kiriting', ''), 
y = + prompt('2-chi sonni kiriting', ''), 
z = + prompt('3-chi sonni kiriting', '');


if (x + y > x + z && x + y > y + z) 
    {
    alert(`${x + y} ikkala sonning yigindisi eng katta`)
}
else if(x + z > x + y && x+ z > y + z) 
    {
    alert(`${x + z} ikkala sonning yigindisi eng katta`)
}
else 
 {
    alert(`${y + z} ikkala sonning yigindisi eng katta`)
}