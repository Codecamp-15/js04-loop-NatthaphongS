console.log('Hello Hong.')

//ประเภทของ loop
//1 condition loop ตัดสินใจว่าจะทำต่อมั้ย จากboolen(T/F)
//2 couting loop   '--------------'  จากตัวเลข
//3 list loop      '--------------'  จากจำนวนของในรายการ


// console.log('Starting....');

// let i = 1;
// let i = 0;

// while (++i<=20){
    //loop block
    //####################################
    // if (i%3 == 0){
    //     console.log(i);
    // }
    // else if (i%5 == 0){
    //     console.log(`${i} : High Five`)
    // }
    // if (i%5 == 0){
    //     console.log(`${i} : High Five`)
    // }
    // else if (i%3 == 0){
    //     console.log(i);
    // }
    //##################################
    // if (i%3 != 0){
    //     console.log(i);
    // }
    // i = i+1;
    // i++;
    //##################################
    //FizzBuzz
    //Range 1-20;
    //divided by 3 : Print Fizz
    //divided by 5 : Print Buzz
    //divided by 3 and 5 : Print FizzBuzz
    //other : print number

// }
// console.log('End....');

//#####################################
//FizzBuzz Problem
//Range 1-20;
//divided by 3 : Print Fizz
//divided by 5 : Print Buzz
//divided by 3 and 5 : Print FizzBuzz
//other : print number
let i = 1;
while(i <=20){
    if (i%5 == 0 && i%3 ==0){
        console.log('FizzBuzz');
    }
    else if (i%5 == 0){
        console.log('Buzz');
    }
    else if (i%3 == 0){
        console.log('Fizz');
    }
    else{
        console.log(i);
    }
    
    i++;
}
//ต้องระวังเรื่องของลำดับในการเข้า condition ต่างๆที่มี
//แนะนำให้เอาเรื่องมากเข้าก่อน

