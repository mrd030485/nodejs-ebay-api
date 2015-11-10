function SellerReturnProfileType(ReturnProfileID, ReturnProfileName) {

	/**
	  Documentation
	   Type defining the <b>SellerReturnProfile</b> container, which is used in an Add/Revise/Relist Trading API call to reference a Business Policies return policy profile. Business Policies return policy profiles contain detailed
                    information on the seller's return policy, including the refund option, how many days the buyer has to return the item for a refund, warranty information, and restocking fee (if any). <br/><br/> Business Policies return
                    policy profiles are also returned in <b>GetItem</b>, <b>GetMyeBaySelling</b>, and other Trading calls that retrieve Item data.
	 */

	/**
	 * Arrays
	 */
	this.ReturnProfileID = ReturnProfileID;
	this.ReturnProfileName = ReturnProfileName;
}
SellerReturnProfileType.prototype.toJSON = function(with_null) {
	var json = { 
		ReturnProfileID: (this.ReturnProfileID === undefined)? null : this.ReturnProfileID,
		ReturnProfileName: (this.ReturnProfileName === undefined)? null : this.ReturnProfileName
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
module.exports = SellerReturnProfileType;