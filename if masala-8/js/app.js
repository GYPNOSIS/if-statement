"use strict"

let a = + prompt('Sonni kiriting', ''), 
    b = + prompt('Sonni kiriting', ''), 
    c = + prompt('Sonni kiriting', ''),
    d = + prompt('Sonni kiriting', '');


if (a === b && a === c) 
    {
    alert(`${d} Soni to\`rtinchi, qolganlari esa bir biriga teng`)
}
else if (b === c && b === d)
    {
    alert(`${a} Soni birinchi, qolganlari esa bir biriga teng`)
}
else if (a === c && a === d)
    {
    alert(`${b} Soni ikkinchi, qolganlari esa bir biriga teng`)
}
else if (a === b && a === d)
    {
    alert(`${c} Soni uchinchi, qolganlari esa bir biriga teng`)
}else
{
    alert('Iltimos 3 ta bir xil son kiriting !')
}