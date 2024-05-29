"use strict"

let a = + prompt('Son kiriting', ''), 
    b = + prompt('Son kiriting', ''), 
    c = + prompt('Son kiriting', '');


if (a === b) 
    {
    alert(`${c} - son  birinchi  `)
}
else if (b === c)
    {
    alert(`${a} - son ikkinchi`)
}
else if (a === c)
    {
    alert(`${b} - son uchinchi`)
}else
{
    alert('Iltimos bir xil raqam kiriting !')
}