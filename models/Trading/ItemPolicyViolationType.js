function ItemPolicyViolationType(PolicyID, PolicyText) {

	/**
	  Documentation
	   
                Specifies the details of policy violations if the item was administratively canceled. The details are the policy ID and the policy text.
            
	 */

	/**
	 * Arrays
	 */
	this.PolicyID = PolicyID;
	this.PolicyText = PolicyText;
}
ItemPolicyViolationType.prototype.toJSON = function(with_null) {
	var json = { 
		PolicyID: (this.PolicyID === undefined)? null : this.PolicyID,
		PolicyText: (this.PolicyText === undefined)? null : this.PolicyText
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
module.exports = ItemPolicyViolationType;