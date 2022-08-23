var merge = function(intervals) {
    for(let i = 0;i<intervals.length-1; i++)
    {
        let map = new Map();
        map.set('a',intervals[i][0]);
        map.set('b',intervals[i][1]);
        map.set('c',intervals[i+1][0]);
        map.set('d',intervals[i+1][1]);
        let mapAsc = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
      	let keys = Array.from(mapAsc.entries());
      	console.log(keys);
      	//console.log(mapAsc.get('b')!=true);
      	if(keys[0][0]=='a' && keys[1][0]!='b' || keys[0][0]=='b' && keys[1][0]!='d')
        {
          intervals[i][0] = keys[0][1];
          intervals[i][1] = keys[3][1];
          intervals.splice(i+1, 1);
          //console.log(intervals);
        }
    }
    return intervals;
};

var array = [[1,4],[4,5]];
console.log(merge(array));
