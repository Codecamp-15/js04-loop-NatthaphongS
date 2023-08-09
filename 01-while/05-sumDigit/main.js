let data = +prompt('Please Enter Number for calculate number and sum of digit');
let realData = data;
let digit=0;
let sum =0;
while(data){
    let remainder = data%10;
    data = (data-remainder)/10;
    sum+=remainder;
    digit++;
}
console.log(`data=${realData},digit=${digit},Sum of every digit=${sum}`)