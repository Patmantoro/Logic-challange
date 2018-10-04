function balikKata(kata){
	var msg = '';
	for(var i = kata.length-1; i >=0; i--){
		msg =msg + kata[i];
	}

	return msg;
}
//
console.log(balikKata('Hello Word and Coders'));// sredoC dna dlroW olleH
console.log(balikKata('John Doe'));// eoD nhoj
console.log(balikKata('I am a bookworm'));// mrowkoob a ma I
console.log(balikKata('Coding is my hobby'));// ybboh ym si gnidoC
console.log(balikKata('super'));// repuS