class Solution {
    public int fib(int n) {
        if(n==1)
            return 1;
        else if(n==0)
            return 0;
        return fib(n-2)+fib(n-1);
    }
}
