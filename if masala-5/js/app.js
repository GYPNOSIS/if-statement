"use strict"

let a = + prompt('1-chi sonni kiriting', ''), 
    b = + prompt('2-chi sonni kiriting', ''),
    c = + prompt('3-chi sonni kiriting', '')


if (a < b && b < c) 
    {
    alert(`${2 * a}, ${2 * b}, ${2 * c}`)
}else 
{
alert(`${a *-1 }, ${b *- 1}, ${c * - 1}`)
}