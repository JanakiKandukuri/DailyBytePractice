var isAnagram = function(s, t) {
    if (s.length != t.length) return false
    
    //return s.split("").sort().join("") === t.split("").sort().join("")
    
    let nMap = new Map();
    
    for (let i of s.split("")) {
       if (nMap.has(i)) {
            nMap.set(i, nMap.get(i)+1);
        } else {
            nMap.set(i,1)
        }
    }
    
    for (let j of t.split("")) {
        if (!nMap.has(j) || nMap.get(j) <= 0) {
            return false;
        } else {
            nMap.set(j, nMap.get(j)-1);
        }
    }
    
    return true;

};
