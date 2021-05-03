var twoSum = function(nums, target) {
    if (nums.length < 3) return nums[0]+nums[1] == target ? [0,1] : [];
    
    let nMap = new Map();
    
    for (var i=0; i < nums.length; i++) {
        var diff = target - nums[i];
        
        if (nMap.has(diff)) {
            return [i,nMap.get(diff)];
        }
        nMap.set(nums[i],i);
    }
    
    return [];
};
