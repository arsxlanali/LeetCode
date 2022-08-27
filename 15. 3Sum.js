var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b);
    
    nums.forEach((el, i) => {
        if (i > 0 && nums[i] === nums[i - 1]) {
            return;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = el + nums[left] + nums[right];
            
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([el, nums[left], nums[right]]);
                left++;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    })
    
    return res;
};
