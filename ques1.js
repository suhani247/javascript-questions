function printPretty(){
	var a= [[1,2,3],[4,5,6],[7,8,9]];
	for(var i=0;i<a.length;i++)
	{
		var s= '['
		for(var j=0;j<a.length;j++)
		{
			s+=a[i][j];
			if(j!=a.legnth-1)
			s+=' ';
		}
		s+=']';
		console.log(s);
	}
}