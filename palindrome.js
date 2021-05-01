function reverseString(s) {
    if (s.length < 2) return true;

    let sArray = s.match(/[A-Za-z]/g);

    let result = [];
    
    for (var i = sArray.length-1; i >= 0; i--) {
        result.push(sArray[i]);
    }

    return result.join("").toLowerCase() === sArray.join("").toLowerCase();
}

function main () {
    let data = ["level", "algorithm","A man, a plan, a canal: Panama."]

    for(var i = 0; i < data.length; i++) {
        console.log(reverseString(data[i]));
    }
}

main();