var ItemIDType = require('./ItemIDType');

function VeROReportItemType(ItemID, VeROReasonCodeID, MessageToSeller, CopyEmailToRightsOwner, Region, Country, Patent, DetailedMessage) {

	/**
	  Documentation
	   Contains the item information to report.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.VeROReasonCodeID = VeROReasonCodeID;
	this.MessageToSeller = MessageToSeller;
	this.CopyEmailToRightsOwner = CopyEmailToRightsOwner;
	this.Region = Region;
	this.Country = Country;
	this.Patent = Patent;
	this.DetailedMessage = DetailedMessage;
}
VeROReportItemType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		VeROReasonCodeID: (this.VeROReasonCodeID === undefined)? null : this.VeROReasonCodeID,
		MessageToSeller: (this.MessageToSeller === undefined)? null : this.MessageToSeller,
		CopyEmailToRightsOwner: (this.CopyEmailToRightsOwner === undefined)? null : this.CopyEmailToRightsOwner,
		Region: (this.Region === undefined)? null : this.Region,
		Country: (this.Country === undefined)? null : this.Country,
		Patent: (this.Patent === undefined)? null : this.Patent,
		DetailedMessage: (this.DetailedMessage === undefined)? null : this.DetailedMessage
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
module.exports = VeROReportItemType;