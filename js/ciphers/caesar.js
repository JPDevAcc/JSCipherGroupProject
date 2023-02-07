export default class CipherCaesar {
	constructor(shift) {
		this._shift = shift ;
		this._processCharCodeMin = "A".charCodeAt(0) ;
		this._processCharCodeMax = "Z".charCodeAt(0) ;
		this._moduloLen = (this.processCharCodeMax - this.processCharCodeMin) + 1
	}

	get processCharCodeMin() {
		return this._processCharCodeMin ;	
	}

	get processCharCodeMax() {
		return this._processCharCodeMax ;	
	}

	transformCharCode(charCode, shiftSign) {
		// Calculate the output (note: we have to add this.moduloLen to get correct wrapping behaviour for decode)
		return ((charCode - this._processCharCodeMin) + this._moduloLen + this._shift * shiftSign) % this._moduloLen + this._processCharCodeMin ;
	}
}