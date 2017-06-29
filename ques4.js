function findCommonElements()
{
	var merged;
	for(var i=0;i<arguments.length;i++)
	{
		merged = arguments[i].concat(merged);
	}
	merged.sort(function(a,b){
				return a-b;
	      }
		);

	var element = merged[0];
	var count =1;
	var result = [];
	for(var i=1;i<merged.length;i++)
	{
		if(merged[i]==merged[i-1])
			count++;
		else
			{ 
				if(count == arguments.length)
					result.push(merged[i-1]);
				count=1;
			}
	}

	return result;
}

console.log(findCommonElements([1,2,3,4],[2,3,4,5],[1,3,4,5,7,8]));