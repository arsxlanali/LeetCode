var merge = function(intervals) {
    intervals.sort((a, b)=>a[0]-b[0]);
  	//let length = intervals.length-1;
  	//console.log(intervals);
    for(let i = 0;i<intervals.length-1; i++)
    {	
      	//console.log(intervals[i]);
		
      	if(intervals[i+1][0]>=intervals[i][0] && intervals[i+1][0]<=intervals[i][1])
        {
         	let small = intervals[i][0];
          	let large = intervals[i][1];
          	if(intervals[i+1][0]<small)
            {
              small = intervals[i+1][0];
            }
          	if(intervals[i+1][1]>large)
            {
              large = intervals[i+1][1];
            }
          	intervals[i][0] = small;
          	intervals[i][1] = large;
          	intervals.splice(i+1,1);
          	i--;
        }
    }
    return intervals;
}
