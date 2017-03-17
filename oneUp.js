// Create a function that takes in a string and returns the string with each letter represented as the next letter in the alphabet.
// oneUp('IBM') === "jcn" || "JCN"
// oneUp('Hello') === "ifmmp" || "Ifmmp"
// oneUp('abcd') === "bcde"
var q = {
    abc: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function letterChange(str) {
    var complete = '';
    str = str.split('').map(function(obj) {
        if (obj === "z") {
            complete += "a";
        } else if (obj === "Z") {
            complete += "A";
        } else if (obj === " ") {
            complete += " ";
        } else {
            for (var i = 0; i < q.abc.length; i++) {
                if (obj === q.abc[i]) {
                    complete += q.abc[i + 1];
                }
            }
        }
    });
    console.log(complete);
    return complete;
}
console.log(letterChange('hello'))
