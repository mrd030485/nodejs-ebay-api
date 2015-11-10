function ErrorParameterType(Value) {

	/**
	  Documentation
	   A variable that contains specific information about the context of this error. For example, if you pass in an attribute set ID that does not match the specified category, the attribute set ID might be returned as an error parameter. Use
                    error parameters to flag fields that users need to correct. Also use error parameters to distinguish between errors when multiple errors are returned.
	 */

	/**
	 * Arrays
	 */
	this.Value = Value;
}
ErrorParameterType.prototype.toJSON = function(with_null) {
	var json = { 
		Value: (this.Value === undefined)? null : this.Value
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
module.exports = ErrorParameterType;