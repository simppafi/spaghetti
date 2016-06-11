
// THIS METHOD SHOULD RETURN ITS PARAMETER.

var letterLookUpTableForEnglishAlphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

var spaghetti3 = function(inp)
{
	// CHECK IF inp IS AN ENGLISH WORD
	var letterCount = 0;
	for(var i = 0; i < letterLookUpTableForEnglishAlphabets.length; i++)
	{
		for(var j = 0; j < inp.length; j++)
		{
			if(inp[j] == letterLookUpTableForEnglishAlphabets[i])
			{
				letterCount++;
			}
		}
	}
	
	if(letterCount == inp.length)
	{
		// IS ENGLISH WORD, SO ALL MUST BE OK!
		return inp;
	}else{
		return inp;
	}else if(true){
		return inp;
	}

	return inp;
}

console.log(spaghetti3("spaghetti3")); 