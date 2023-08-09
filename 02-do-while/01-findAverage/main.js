let ansNumber;
let isEmpty;
let isNan;
let stackAns=0;
let devider=0;
let avgNumber;
do{
    ansNumber = prompt('Enter your magic number') || '';
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    if(isEmpty||isNan||ansNumber==0){
        break;
    }
    stackAns += +ansNumber;
    devider++;
}while(true);
avgNumber = stackAns/devider;
alert(avgNumber);