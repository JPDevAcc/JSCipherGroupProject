// Type: Module (with side-effects)
import CipherCaesar from './ciphers/caesar.js' ;

// accepts user input for key
function getKey(val = 1) {
	if (val === 1) val = keyEl.value;
	let key = val
	caesarCipher = new CipherCaesar(key);
	handleUpdate();
}

const KeyEl = document.querySelector('#user_key') ;
KeyEl.addEventListener('click', (e) => getKey(e.target.value)) ;

let caesarCipher = new CipherCaesar(document.getElementById("user_key").value);

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
		// Only process characters that are handled correctly by the cipher
		if (charCode >= caesarCipher.processCharCodeMin && charCode <= caesarCipher.processCharCodeMax) {
			let transformedCharCode = caesarCipher.transformCharCode(charCode, (mode === 'mode_enc') ? 1 : -1) ; // Transform
			transformedCharCode |= (val.charCodeAt(i) & 32); // Restore capitalisation
			const transformedChar = String.fromCharCode(transformedCharCode); // Convert back to character
			ciphertext += transformedChar ; // Add to buffer
		} else {
			ciphertext += plaintext.charAt(i); // Add to buffer (pass through)
		}
	};
	document.getElementById("text_output").value = ciphertext;
}

let mode = 'mode_enc';
function selectEncodeOrDecodeMode(newMode) {
	mode = newMode ;
	console.log("new mode:", mode) ;
	handleUpdate() ;
}