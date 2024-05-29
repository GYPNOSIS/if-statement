"use strict"

let a = prompt('1-chi sonni kiriting', '')
let b = prompt('2-chi sonni kiriting', '')
let c = prompt('3-chi sonni kiriting', '')



if((a > b && a < c) || (a < b && a > c))
    {
    alert(`${a} soni o\`rtancha`)
}
else if ((b > a && b < c) || (b < a && b > c))
    {
    alert(`${b} soni o\`rtancha`)
}
else
{
    alert(`${c} o\`rtancha`)
}