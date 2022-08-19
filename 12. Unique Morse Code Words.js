/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
     var code = [".-","-...","-.-.","-..",".",
                   "..-.","--.","....","..",".---",
                   "-.-",".-..","--","-.","---",".--.",
                   "--.-",".-.","...","-","..-","...-",
                   ".--","-..-","-.--","--.."];
    var alphabet = ["a","b","c","d","e","f","g","h","i",
                    "j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z"];

    var map = new Map();
    for(let i = 0; i<27; i++)
    {
      map.set(alphabet[i], code[i]);
    }
  	var codedWords = []
  	for(let word of words)
    {
      var string = [];
      for(let letter of word)
      {
      	string.push(map.get(letter));
      }
      string = string.join('');
       codedWords.push(string);
    }
	const uCodedWords = [...new Set(codedWords)]
    return uCodedWords.length;
};
