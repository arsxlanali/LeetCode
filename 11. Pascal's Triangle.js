/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var number = [];
    console.log(numRows);
    for(var i= 1; i<= numRows; i++)
    {
        
        var temp = [];
        temp.push(1);
        for(var j=0; j<i-2; j++)
        {
            temp.push(lastRow[j]+lastRow[j+1]); 
        }
        if(i==1)
        {
          	number.push(temp);
            continue;
        }
        temp.push(1);
        number.push(temp);
      	lastRow = number[number.length-1];
    }
    return number;
};
