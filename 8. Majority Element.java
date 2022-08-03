// This solution is based on the Boyer-Moore Voting Algorithm 
// In this solution we are makinng the candidate for the majority element
// and then adding 1 to count if the candidate is detected -1 otherwise
// when the count becomes zero we make the new ahead candidate.
class Solution {
    public int majorityElement(int[] nums) {
        int candidate = nums[0];
        int count = 1;
        for(int i=1;i<nums.length; i++)
        {
            if(nums[i]==candidate)
                count++;
            else
                count--;
            if(count==0)
                candidate = nums[i+1];
        }
        return candidate;
    }
}
