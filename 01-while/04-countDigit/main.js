let data = +prompt('Please Enter Number for calculate digit');
console.log(data);
// console.log(data.trim().length);

//PATTERN RECOGNITION
//1150/10 => 115 =>count = 1;
//115/10 => 11.5 =>count = 2;
//11.5/10 => 1.15 =>count = 3;
//1.15/10 => 0.115 =>count = 4;
let digit=0;

if(data<0) data = -data; //handel ค่าลบ

while (data > 1){
    // console.log(data);
    digit++;
    data=data/10;
}
console.log(`Number of digit=${digit}`);

//ถ้าเราไม่ต้องการให้เหลือเศษ
//(1152-2)/10=>data'=115
//(115-5)/10=>data'=11
//(11-1)/10=>data'=1
//(1-1)/10=>data'=0 ซึ่งสุดท้ายจะเป็นfalse

// let sum =0;
// while(data){
//     let remainder = data%10;
//     data = (data-remainder)/10;
//     digit++;
// }

