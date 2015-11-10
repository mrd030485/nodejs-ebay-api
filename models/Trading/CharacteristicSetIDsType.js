function CharacteristicSetIDsType(ID) {

	/**
	  Documentation
	   This type is deprecated as the <b>GetProduct*</b> calls are no longer available. 
	 */

	/**
	 * Arrays
	 */
	this.ID = ID;
}
CharacteristicSetIDsType.prototype.toJSON = function(with_null) {
	var json = { 
		ID: (this.ID === undefined)? null : this.ID
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
module.exports = CharacteristicSetIDsType;