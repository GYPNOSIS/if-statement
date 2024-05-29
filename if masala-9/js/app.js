"use strict"

let a = + prompt('1-chi raqamni kiriting', ''), 
    b = + prompt('2-chi raqamni kiriting', ''), 
    c = + prompt('3-chi raqamni kiriting', '');

if (b - c < b || c - b < b)
    {
    alert(`${a} ga eng yaqin raqam ${b}, ${a} va ${b} ning orasidagi masofa ${a - b || b - a}`)
}
else if (c - b < c || b - c < c)
    {
    alert(`${a} ga eng yaqin raqam ${c}, ${a} va ${c} ning orasidagi masofa ${a - c || c - a}`)
}else {
    alert('Iltimos raqamlarni to\`g\`ri kiriting')
}