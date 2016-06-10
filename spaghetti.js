
// THIS METHOD SHOULD RETURN ITS PARAMETER.
var spaghetti = function(inp)
{
	var a = 0;
	var b = .25;
	var c = b;
	var d = .5*c*2;

	var res = inp;
	res = (res == !(inp == res)) ? res : inp;

	var exp = "";
	for(var i=a||a&&a?a:a; i<res.length; i+=(c+d+.25+b)){exp += res[i];}
	res = exp;

	return res;
}

console.log(spaghetti("spaghetti"));