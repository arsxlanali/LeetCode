class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = nums1.length-1;
        m--;
        n--;
        while(n>=0 && m>=0)
        {
            if(nums1[m]<nums2[n])
            {
                nums1[i--] = nums2[n];
                n--;
            }
            else
            {
                nums1[i--] = nums1[m];
                m--;
            }
        }
        while(n >= 0) 
        { // this case deal with the exception of m=0 means 1st array is empty
            nums1[i--] = nums2[n--];
        }
    }
}
