function ListingTipFieldType(ListingTipFieldID, FieldTip, CurrentFieldText, CurrentFieldValue) {

	/**
	  Documentation
	   
                (out) Identifies the item field that the tip relates to.
            
	 */

	/**
	 * Arrays
	 */
	this.ListingTipFieldID = ListingTipFieldID;
	this.FieldTip = FieldTip;
	this.CurrentFieldText = CurrentFieldText;
	this.CurrentFieldValue = CurrentFieldValue;
}
ListingTipFieldType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingTipFieldID: (this.ListingTipFieldID === undefined)? null : this.ListingTipFieldID,
		FieldTip: (this.FieldTip === undefined)? null : this.FieldTip,
		CurrentFieldText: (this.CurrentFieldText === undefined)? null : this.CurrentFieldText,
		CurrentFieldValue: (this.CurrentFieldValue === undefined)? null : this.CurrentFieldValue
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
module.exports = ListingTipFieldType;