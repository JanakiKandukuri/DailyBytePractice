var isAnagram = function(s, t) {
    if (s.length != t.length) return false
    
    //return s.split("").sort().join("") === t.split("").sort().join("")
    
    let nMap = new Map();
    
    for (let i = 0; i <s.length; i++) {
        if (nMap.has(s[i])) {
            nMap.set(s[i], nMap.get(s[i])+1);
        } else {
            nMap.set(s[i],1)
        }
    }
    
    for (let i = 0; i <t.length; i++) {
        if (nMap.has(t[i])) {
            nMap.set(t[i], nMap.get(t[i])-1);
        }
    }
    
    for (let i of nMap.values()) {
        if (i !=0) return false;
    }
    
    return true;

};
