"use strict"

let x=-3 , y=3;

if (x === 0 && y === 0)
    {
        console.log(`Nuqta koordinata boshida yotibdi: (${x},${y})`);
    } else if (x===0 && y !==0)
        {
            console.log(`Nuqta OY o\`qida joylashgan koordinata: (${x},${y})`);
        } else if (x !== 0 && y === 0)
            {
                console.log(`Nuqta OX o\`qida joylashgan koordinata: (${x},${y})`);
            } else
            {
                console.log(`Nuqta ${x},${y} shu koordinatada joylashgan`);
            }