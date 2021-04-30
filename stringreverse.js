function reverseString(s) {
     
    if (s.length < 2) return s;

    let sArray = s.split("");

    let result = [];
    
    for (var i = sArray.length-1; i >= 0; i--) {
        result.push(sArray[i]);
    }

    return result.join("");
}

function main () {
    let data = ["cat","The Daily Byte", "civic"]

    for(var i = 0; i < data.length; i++) {
        console.log(reverseString(data[i]));
    }
}

main();