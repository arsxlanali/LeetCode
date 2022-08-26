
function isEqual(a, b)
{
    return a.join() == b.join();
}
function compare(result, array1)
{
  for(let array of result)
  {
    if(isEqual(array,array1))
    {
      return true;
    }a
  }
  return false;
}

var threeSum = function(nums) {
    let len = nums.length-2;
  	nums.sort();
  	var result =[];
  	if(nums.every((e)=>e==0))
      return [[0,0,0]];
  	let i = 0;
  	for(let j=0; j<nums.length-2; j++)
    {
      for(let k=0; k<len;k++)
      {
        if(nums[i]+nums[j+1]+nums[j+k+2]==0)
        {
          //console.log(i,j+1, k+2);
          
          let array = [];
          array.push(nums[i]);
          array.push(nums[j+1]);
          array.push(nums[j+k+2]);
          if(!compare(result,array))
          {
            result.push(array);
          }
        }
        
      }
      //i++;
      len--;
    }
  	return result;
};
