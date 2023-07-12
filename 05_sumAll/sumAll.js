const sumAll = function (...nums) {
    const sum1 = Math.min(...nums);
    const sum2 = Math.max(...nums);
    const sum1Type = typeof sum1;
    const sum2Type = typeof sum2;
    let i = 1;
    let sum = sum1;
    let sum3 = sum1 + 1;

    if(sum1 < 0 || sum2 < 0 ){
        return 'ERROR'
    }else if(sum1Type === "number" && sum2Type === "number"){
        while(i < sum2){
        sum += sum3
        i++;
        sum3++;}
    }else{
        return 'ERROR'
    };

        return sum;
};
// Do not edit below this line
module.exports = sumAll;