function CharityAffiliationsType(CharityID) {

	/**
	  Documentation
	   
                Lists the nonprofit charity organization affiliations for a specified user.
            
	 */

	/**
	 * Arrays
	 *	CharityID: CharityIDType
	 */
	this.CharityID = CharityID;
}
CharityAffiliationsType.prototype.toJSON = function(with_null) {
	var json = { 
		CharityID: (this.CharityID === undefined)? null : this.CharityID
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
module.exports = CharityAffiliationsType;