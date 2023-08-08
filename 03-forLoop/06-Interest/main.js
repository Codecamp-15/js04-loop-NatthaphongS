let deposit = 100000
for(i=1; i<=10; i++){
    deposit+=(deposit*(2.5/100));
}
console.log(`Ten yesrs later,My deposit will be ${deposit.toFixed(2)}`)