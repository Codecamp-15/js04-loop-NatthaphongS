for (let i=2; i<=12; i++){
    console.log(`สูตรคูณแม่${i}`)
    let multi='';
    for(let j=1; j<=12; j++){
        multi=multi+`${i}x${j}=${i*j}\n`
    }
    console.log(multi)
}