// Type: Module (with side-effects)
import CipherCaesar from './ciphers/caesar.js' ;

//NEXT: add user input to get key and pass it through the function
let key = 3;
const caesarCipher = new CipherCaesar(key) ;

const textInputEl = document.querySelector('#text_input') ;
const textOutputEl = document.querySelector('#text_output') ;

textInputEl.addEventListener('input', (e) => handleUpdate(e.target.value)) ;
document.querySelector('#encode_decode_selector').addEventListener('change', (e) => selectEncodeOrDecodeMode(e.target.id)) ;

function handleUpdate(val = null) {
	if (val === null) val = textInputEl.value;
	let plaintext = val.toUpperCase();
	let ciphertext = "";

	for (let i = 0; i < plaintext.length; i++) {
		let charCode = plaintext.charCodeAt(i);
		const transformedCharCode = caesarCipher.transformCharCode(charCode, (mode === 'mode_enc') ? 1 : -1) ;
		const transformedChar = String.fromCharCode(transformedCharCode);
		ciphertext += transformedChar;
	};
	console.log(plaintext + " -> " + ciphertext); 
	document.getElementById("text_output").value = ciphertext;
}

let mode = 'mode_enc';
function selectEncodeOrDecodeMode(newMode) {
	mode = newMode ;
	console.log("new mode:", mode) ;
	handleUpdate() ;
}