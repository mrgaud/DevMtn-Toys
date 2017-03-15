// Create a function to See if a passed in word is a pallendrome or not. if it is return true else return false.
// spaces and capitalization shouldnt matter.
//
// palenCheck('mom is fat') should return false because "mom is fat" !== "taf si mom"
//
// palenCheck("racecar") should return true because "racecar" == 'racecar'
//
// palenCheck('borrow or rob') should return true because "borrow or rob" == "borrow or rob"

function palenCheck(str){
    str = str.toLowerCase().trim().replace(/[ ]/g, '')
    pal = str.split('').reverse().join('')
    return str === pal?true:false;
}

console.log(palenCheck('poop'));
