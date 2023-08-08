let string="";
for(let y=1; y<=4; y++){
    // console.log(y);
    // for(let x=0; x<(2*y); x++){
    //     console.log(x);
    //     if(x%2==0){
    //         string+="*";
    //     }
    //     else{
    //         string+=" ";
    //     }
    // }
    for(let x=1; x<=y; x++){
        string+='* ';
    }
    string+="\n";
}
console.log(string)
