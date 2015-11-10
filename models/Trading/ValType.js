function ValType(ValueLiteral, SuggestedValueLiteral, ValueID) {
	/**
	 * Arrays
	 */
	this.ValueLiteral = ValueLiteral;
	this.SuggestedValueLiteral = SuggestedValueLiteral;
	this.ValueID = ValueID;
}
ValType.prototype.toJSON = function(with_null) {
	var json = { 
		ValueLiteral: (this.ValueLiteral === undefined)? null : this.ValueLiteral,
		SuggestedValueLiteral: (this.SuggestedValueLiteral === undefined)? null : this.SuggestedValueLiteral,
		ValueID: (this.ValueID === undefined)? null : this.ValueID
	};
	if(!with_null) {
		for(var k in json) {
			if(json[k] === null) {
				delete json[k];
			}
		}
	}
	return json;
};
module.exports = ValType;