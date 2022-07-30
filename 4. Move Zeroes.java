class Solution {
    public void moveZeroes(int[] nums) {
        int count =0;
        int length= nums.length;
        for(int i=0; i<length; i++)
        {
            if(nums[i]!=0)
            {
                nums[count++] = nums[i];
            }                     
        }
        for(int i=count; i<length; i++)
        {
            nums[i] = 0;
        }
        
    }
}
