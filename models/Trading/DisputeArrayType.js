function DisputeArrayType(Dispute) {

	/**
	  Documentation
	   
                Represents a list of disputes. Can hold zero or more Dispute types, each of which describes a dispute.
            
	 */

	/**
	 * Arrays
	 *	Dispute: DisputeType
	 */
	this.Dispute = Dispute;
}
DisputeArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Dispute: (this.Dispute === undefined)? null : this.Dispute
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
module.exports = DisputeArrayType;