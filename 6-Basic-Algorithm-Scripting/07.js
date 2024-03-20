// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// function repeatStringNumTimes(str, num) {
//     return str;
// }
//
// repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
    let str2 = "";

    for (let i = 0; i < num; i++) {
        str2 += str;
    }

    return str2;
}

repeatStringNumTimes("abc", 3);