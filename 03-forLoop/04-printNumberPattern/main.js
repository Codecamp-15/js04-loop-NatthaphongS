let string="";
for(let y=1; y<=8; string+="\n"){
    // console.log(y);
    for(let x=1; x<=y; x++){
        // console.log(x);
        string+=`${x} `;
    }
    y++;
}
console.log(string)