class Solution {
public:
	double getPower(double x, int n) {
		if (n == 0) {
			return 1;
		}

		double halfPower = getPower(x, n/2);

		// even power
		if (n % 2 == 0) {
			return halfPower * halfPower;
		}

		// odd power
		else {
			return x * halfPower * halfPower;
		}
	}

	double myPow(double x, int n) {
		double ans = getPower(x, n);
		
		// negative power
		if (n < 0) {
			return (1 / ans);
		}
		return ans;
	}
};
