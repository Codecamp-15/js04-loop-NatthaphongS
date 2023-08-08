let allSum=0;
let evenSum=0;
let oddSum=0;
let sumEvenSquare=0;
let sumThirdSquare=0;
for(let i=1; i<=100; i++){
    allSum=allSum+i;
    if(i%2==0){
        evenSum=evenSum+i;
    }
    else {
        oddSum=oddSum+i;
    }
}
for(let i=1; i<=100; i++){
    if(i%2==0){
        sumEvenSquare=sumEvenSquare+(i**2);
    }
    // ที่ไม่ใช้ else if เพราะ มีเลข6ที่ต้องระวังเพราะ 6 หารได้ทั้ง 2 และ 3 ต้องให้เข้า 2 และ 3ทั้งคู่โดยใช้ if กับ if เหมือนแยกกันไปเลย
    if(i%3==0){
        sumThirdSquare=sumThirdSquare+(i**2);
    }

}
console.log(allSum);
console.log(evenSum);
console.log(oddSum);
console.log(`sumEvenSquare-sumThirdSquare=${sumEvenSquare-sumThirdSquare}`);
