function BotBlockRequestType(BotBlockToken, BotBlockUserInput) {

	/**
	  Documentation
	   Type used by the <b>BotBlock</b> container of the <b>PlaceOffer</b> call request. The <b>BotBlock</b> container is conditionally required in a <b>PlaceOffer</b> call request if the previous
                    <b>PlaceOffer</b> call resulted in a <b>BotBlock</b> container being returned in the response. The <b>BotBlock</b> container in the response will contain an authentication token and a URL that will
                    need to be passed into the <b>BotBlock</b> container of the <b>PlaceOffer</b> call request in the subsequent call.
	 */

	/**
	 * Arrays
	 */
	this.BotBlockToken = BotBlockToken;
	this.BotBlockUserInput = BotBlockUserInput;
}
BotBlockRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		BotBlockToken: (this.BotBlockToken === undefined)? null : this.BotBlockToken,
		BotBlockUserInput: (this.BotBlockUserInput === undefined)? null : this.BotBlockUserInput
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
module.exports = BotBlockRequestType;