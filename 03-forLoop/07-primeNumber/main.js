for (num=1; num<=100; num++){
    let count=0;
    for(i=1; i<=num; i++){
        if(num%i==0){
            count++;
        }
        //##################
    }
    if(count==2){
        console.log(num)
    }
}