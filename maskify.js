// Create a function that takes in a Phone number as an argument and returns it in secret format.
//
// 555-555-5555 would return ###-###-5555
// 5555555555 would return ###-###-5555
// (555)555-5555 would return ###-###-5555
// if the number passed in is not valid phone number format you should return an error.
//
// I recommend looking into Regex
//
//Numbers will need to be passed as strings
// "855-855-8555"

function maskify(num) {
    num = num.replace(/[^0-9]/g, '').split('')
    if(num.length>11){
        console.log('invalid number');
        return "invalid number"
    }else if (num.length === 11) {
        num.shift()
    }else if(num.length<10){
        console.log('invalid number');
        return "invalid number"
    }
    for(var i in num){
        num[i] = num[i].replace(/[0-9]/g,'#')
        if(i == 5){
            break
        }
    }
    num.splice(3,0,'-')
    num.splice(7,0,'-')
    console.log(num.join(''));

}
maskify('2-209-206-3491')
