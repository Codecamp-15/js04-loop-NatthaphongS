// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

//Program1:Get input form user-1

// let ansNumber = prompt('Enter your magic number');//=>null,string:'','       ','rpprp','12'

// #########################
// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === '';
// let isNan = isNaN(ansMunber);
// ############################

// let isValid = ansNumber === null || aneNumber.trim() === '' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber)<1 || Number(ansNumber)>99;
// let inRange = Number(ansNumber)>=1 && Number(ansNumber)<=99;

// if(isValid){
//     alert('Invalid Input');
// }
// else if (outOfRange){
//     alert('Invalid Range');
// }else  if (inRange){
//     alert('Try to guess number');//Give the player2 turn;
// }

//Program1 V.2:รับ input  จาก player1 ได้เรื่อยๆจนกว่าจะพิมถูกและให้กดescเพื่อจบโปรแกรมได้

let ansNumber = '';
let isEmpty;
let isNan;

do{
    ansNumber = prompt('Enter your magic number') || '';//ทำเพื่อดักnull (null || '' )= ''  => F or F get last F
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber)<1 || Number(ansNumber)>99;
    if(isEmpty||isNan){
        alert('Invalid Number,Try 1-99')
    }
    else if (outOfRange){
        alert('Invalid Range,Try 1-99');
    }
}
while (isEmpty||isNan);

//Program 2 : Guess

let guessNumber;
do{
    guessNumber=prompt('Enter your answer') || '';
    isEmpty = guessNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber)<1 || Number(guessNumber)>99;
    if(isEmpty||isNan){
        alert('Invalid Number,Try 1-99')
    }
    else if (outOfRange){
        alert('Invalid Range,Try 1-99');
    }
    else if (+guessNumber < +ansNumber){
        alert('Too low');
    }
    else if (+guessNumber > +ansNumber){
        alert('Too high');
    }
    else if (+guessNumber == +ansNumber){
        alert('Correct');
    }
}
while( +guessNumber != +ansNumber);

//ทายได้ไม่เกิน n ครั้ง