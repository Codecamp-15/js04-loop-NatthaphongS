// My solution
// for (num=1; num<=100; num++){
//     let count=0;
//     for(i=2; i<num; i++){
//         if(num%i==0){
//             count++;
//         }
//         //##################
//     }
//     if(count==0){
//         console.log(num)
//     }
// }

//P'We Solution เริ่มจากการทำโปรแกรมตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่?
// let n=73;
// let isPrime = true; //flag

// for(divider=2; divider<n; divider++){
//     if(n%divider == 0) isPrime=false;
// }
// if(isPrime) console.log(`Number ${n} is prime number`);
// else console.log(`Number ${n} is not prime number`)

//ต่อด้วยloopตัวเลข n ทีละตัว
for(let n = 2; n<=100; n++){
    let isPrime = true;
    for(divider=2; divider<n; divider++){
        if(n%divider == 0){
            isPrime=false;
            break;//เห็นผลชัดเจนเมื่อเลขเยอะๆ
        }
    }
    if(isPrime) console.log(n);
}