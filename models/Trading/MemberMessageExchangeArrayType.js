function MemberMessageExchangeArrayType(MemberMessageExchange) {

	/**
	  Documentation
	   Container for messages. Returned for GetMemberMessages if messages that meet the request criteria exist.
	 */

	/**
	 * Arrays
	 *	MemberMessageExchange: MemberMessageExchangeType
	 */
	this.MemberMessageExchange = MemberMessageExchange;
}
MemberMessageExchangeArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		MemberMessageExchange: (this.MemberMessageExchange === undefined)? null : this.MemberMessageExchange
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
module.exports = MemberMessageExchangeArrayType;