var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) return ""
    
    var sortedList = (strs.sort((a,b) => a.length - b.length));
    
    var result = ""; var listIdx = 1;
    
    for (var i = 0; i < sortedList[0].length; i++) {
        let ch = sortedList[0][i];        
        while (listIdx < sortedList.length) {
            if (sortedList[listIdx][i] !== ch) {
                listIdx = sortedList.length;
                return result;
            }
            listIdx++;
        }
        listIdx = 1;
        result += ch;
    }
    
    return result;
};
