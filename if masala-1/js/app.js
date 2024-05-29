"use strict"

let a = prompt("Hohlagan 1chi sonni kiriting", '')
let b = prompt("Hohlagan 2chi sonni kiriting", '')
let c = prompt("Hohlagan 3chi sonni kiriting", '')


if ( a > b && c > b) 
    {
    alert(`${b} Soni kichik`)
}
else if (a > c && b > c)
    {
    alert(`${c} Soni kichik`)
}
else
{
    alert(`${a} Soni kichik`)
}