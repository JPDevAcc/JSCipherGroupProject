export default class CipherCaesar {
	constructor(shift) {
		this.shift = shift ;
		this.processCharCodeMin = "A".charCodeAt(0) ;
		this.processCharCodeMax = "Z".charCodeAt(0) ;
		this.moduloLen = (this.processCharCodeMax - this.processCharCodeMin) + 1
	}

	encodeCharCode(text) {
		// NOTE: This is right-shift currently!
		return this._processText(charCode, 1) ;
	}

	decodeCharCode(text) {
		// NOTE: This is right-shift currently!
		return this._processText(charCode, -1) ;
	}

	transformCharCode(charCode, shiftSign) {
		// Calculate the output (note: we have to add this.moduloLen to get correct wrapping behaviour for decode)
		return ((charCode - this.processCharCodeMin) + this.moduloLen + this.shift * shiftSign) % this.moduloLen + this.processCharCodeMin ;
	}
}