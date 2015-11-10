function ReviseStatusType(ItemRevised, BuyItNowAdded, BuyItNowLowered, ReserveLowered, ReserveRemoved) {

	/**
	  Documentation
	   
                Contains data indicating whether an item has been revised since the listing became active and, if so, which among a subset of properties have been changed by the revision. Output only.
            
	 */

	/**
	 * Arrays
	 */
	this.ItemRevised = ItemRevised;
	this.BuyItNowAdded = BuyItNowAdded;
	this.BuyItNowLowered = BuyItNowLowered;
	this.ReserveLowered = ReserveLowered;
	this.ReserveRemoved = ReserveRemoved;
}
ReviseStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemRevised: (this.ItemRevised === undefined)? null : this.ItemRevised,
		BuyItNowAdded: (this.BuyItNowAdded === undefined)? null : this.BuyItNowAdded,
		BuyItNowLowered: (this.BuyItNowLowered === undefined)? null : this.BuyItNowLowered,
		ReserveLowered: (this.ReserveLowered === undefined)? null : this.ReserveLowered,
		ReserveRemoved: (this.ReserveRemoved === undefined)? null : this.ReserveRemoved
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
module.exports = ReviseStatusType;