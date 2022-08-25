var threeSum = function(nums) {
    let len = nums.length-2;
  	var array = [];
  	for(let j=0; j<nums.length-2; j++)
    {
      for(let k=0; k<len;k++)
      {
        if(nums[0]+nums[j+1]+nums[j+k+2]==0)
        {
          array.push()
          
        }
        
      }
      len--;
    }
};

var array = [-1,0,1,2,-1,4];
console.log(threeSum(array));
// expected output: 1
