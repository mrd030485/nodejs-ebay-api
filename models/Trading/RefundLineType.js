function RefundLineType(type) {

	/**
	  Documentation
	   
                This type is no longer used.
            
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
RefundLineType.prototype.toJSON = function(with_null) {
	var json = { 
		type: (this.type === undefined)? null : this.type
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
module.exports = RefundLineType;