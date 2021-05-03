var numJewelsInStones = function(jewels, stones) {
    let sArr = stones.split('');
    
    var sum = 0;
    for (var i = 0; i < jewels.length; i++) {
       if (sArr.indexOf(jewels[i]) != -1) {
           sum += (sArr.filter(x => x === jewels[i])).length;
           sArr = sArr.filter(x => x !== jewels[i]);
       } 
    }
    
    return sum;
};
