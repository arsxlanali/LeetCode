/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    for(let i = 0;i<intervals.length-1; i++)
    {
        //console.log("ddfadsf");
      	if(intervals[i][1]>=intervals[i+1][0])
        {
            if(intervals[i][1]>intervals[i+1][1])
            {
                intervals[i+1][1]=intervals[i][1];
                intervals.splice(i,1);   
            }
            else if(intervals[i][1]<intervals[i+1][1])
            {
                intervals[i][1]=intervals[i+1][1];
                intervals.splice(i+1,1);                     
            }
            else if(intervals[i][0]>intervals[i+1][0])
            {
                //intervals[i][1]=intervals[i+1][1];
              //console.log("jkkj");
                intervals.splice(i+1,1);   
            }
            else if(intervals[i][0]<intervals[i+1][0])
            {
                intervals.splice(i,1);    
            }
          	else
            {
                intervals.splice(i,1);  
            }
        }  
    }
    return intervals;
};
