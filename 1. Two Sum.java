

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] idxArray = new int[2];
        for(int i = 0; i<nums.length; i++)
        {
            for(int j = 0; j<nums.length; j++)
            {
                if(i==j) 
                    continue;
                else if(target==nums[i]+nums[j])
                {
                    idxArray[0] = i;
                    idxArray[1] = j;
                }
            }
        }
        return idxArray;
    }
}


