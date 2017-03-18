// create a function that will check if a number is a square root or not
// isSqrt(144) should return "144 is a square root of 12"
// isSqrt(133) should return "133 is not a square root"
function isSqrt(num) {
    var i = 1,result;
    result = 'pie'
    while(true){
        result = i * i
        if(result > num){
            return `${num} is not a squared number`
        }else if(result === num){
            return `${num} is a squared number, ${i}*${i}`
        }
        else{
            i++
        }
    }
}


console.log(isSqrt(25));
