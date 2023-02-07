// Type: Module (with side-effects)
import CipherCaesar from './ciphers/caesar.js' ;

// Accepts user input for key
function getKey(key) {
	key ||= 0 ; // (default to zero on invalid input)
	caesarCipher = new CipherCaesar(key);
	handleUpdate();
}

const KeyEl = document.querySelector('#user_key') ;
KeyEl.addEventListener('input', (e) => getKey(e.target.value)) ;

let caesarCipher = new CipherCaesar(document.getElementById("user_key").value);

const textInputEl = document.querySelector('#text_input') ;
const textOutputEl = document.querySelector('#text_output') ;

textInputEl.addEventListener('input', (e) => handleUpdate(e.target.value)) ;
document.querySelector('#encode_decode_selector').addEventListener('change', (e) => selectEncodeOrDecodeMode(e.target.id)) ;

// Handle update to plaintext or shift setting
function handleUpdate(val = null) {
	if (val === null) val = textInputEl.value;
	// Simplify the A-Z guard check below by converting to uppercase (although in-fact the cipher would work correctly with either case)
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
	textOutputEl.value = ciphertext;
}

let mode = 'mode_enc' ; // Initial mode
function selectEncodeOrDecodeMode(newMode) {
	mode = newMode ;
	handleUpdate() ;
}