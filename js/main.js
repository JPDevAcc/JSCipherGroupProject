// Type: Module (with side-effects)
import CipherCaesar from './ciphers/caesar.js' ;

const caesarCipher = new CipherCaesar(3) ;

const textInputEl = document.querySelector('#text_input') ;
// const textOutputEl = document.querySelector('#text_output') ;

textInputEl.addEventListener('input', (e) => handleUpdate(e.target.value)) ;
document.querySelector('#encode_decode_selector').addEventListener('change', (e) => selectEncodeOrDecodeMode(e.target.id)) ;

function handleUpdate(val = null) {
	if (val === null) val = textInputEl.value ;
	// Just test with last character entered for now
	let char = val.charAt(val.length - 1) ;
	char = char.toUpperCase() ;
	let charCode = char.charCodeAt(0) ;
	const transformedCharCode = caesarCipher.transformCharCode(charCode, (mode === 'mode_enc') ? 1 : -1) ;
	const transformedChar = String.fromCharCode(transformedCharCode) ;
	console.log("Last character: charCode", charCode, " -> ", transformedCharCode, "(" + transformedChar + ")") ;
}

let mode = 'mode_enc';
function selectEncodeOrDecodeMode(newMode) {
	mode = newMode ;
	console.log("new mode:", mode) ;
	handleUpdate() ;
}