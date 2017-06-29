var a = [[1,2,3],[4,5,6],[7,8,9]]
for(var i = 0;i< a.length; i++)
{
	a[i] = a[i].reverse();
}

for(var i=0;i < a.length; i++)
{
	for(var j =i;j < a.length; j++)
	{
		var temp = a[i][j];
		a[i][j] = a[j][i];
		a[j][i] = temp;
	}
}

