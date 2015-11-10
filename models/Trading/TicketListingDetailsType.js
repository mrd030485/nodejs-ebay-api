function TicketListingDetailsType(EventTitle, Venue, PrintedDate, PrintedTime) {

	/**
	  Documentation
	   Type defining the <b>TicketListingDetails</b> container, which is used in an Add/Revise/Relist call to provide more details about event tickets.
	 */

	/**
	 * Arrays
	 */
	this.EventTitle = EventTitle;
	this.Venue = Venue;
	this.PrintedDate = PrintedDate;
	this.PrintedTime = PrintedTime;
}
TicketListingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		EventTitle: (this.EventTitle === undefined)? null : this.EventTitle,
		Venue: (this.Venue === undefined)? null : this.Venue,
		PrintedDate: (this.PrintedDate === undefined)? null : this.PrintedDate,
		PrintedTime: (this.PrintedTime === undefined)? null : this.PrintedTime
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
module.exports = TicketListingDetailsType;