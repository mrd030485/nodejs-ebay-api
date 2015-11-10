var ItemIDType = require('./ItemIDType');

function VeROReportedItemType(ItemID, ItemStatus, ItemReasonForFailure) {

	/**
	  Documentation
	   Type defining the <b>ReportedItem</b> container which is returned in the <b>GetVeROReportStatus</b> response. The <b>ReportedItem</b> container consists of the <b>ItemID</b> of the item that
                    has infringed upon the seller's copyright, trademark, or intellectual property rights, as well as the submission status of the VeRO Report.
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
	this.ItemStatus = ItemStatus;
	this.ItemReasonForFailure = ItemReasonForFailure;
}
VeROReportedItemType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		ItemStatus: (this.ItemStatus === undefined)? null : this.ItemStatus,
		ItemReasonForFailure: (this.ItemReasonForFailure === undefined)? null : this.ItemReasonForFailure
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
module.exports = VeROReportedItemType;