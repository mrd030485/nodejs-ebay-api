var ItemIDType = require('../../Trading/ItemIDType'),
	PaginationType = require('../../Trading/PaginationType');

function GetVeROReportStatusRequestType(VeROReportPacketID, ItemID, IncludeReportedItemDetails, TimeFrom, TimeTo, Pagination) {

	/**
	  Documentation
	   Retrieves status information about VeRO reported items you have submitted. You can receive the status of individual items you have reported or, by specifying VeROReportPacketID, you can retrieve status for all items reported with a given
                    VeROReportItems request. You can also retrieve items that were reported during a given time period. If no input parameters are specified, status is returned on all items you have reported in the last two years. You must be a member
                    of the Verified Rights Owner (VeRO) Program to use this call.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _Pagination;
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
	Object.defineProperty(this, 'Pagination', {
		 get: function(){
			 return _Pagination;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationType){ 
					_Pagination = value; 
				}else{
					console.log('Pagination expects type PaginationType');
				}
			}
		}
	});
	this.VeROReportPacketID = VeROReportPacketID;
	this.ItemID = ItemID;
	this.IncludeReportedItemDetails = IncludeReportedItemDetails;
	this.TimeFrom = TimeFrom;
	this.TimeTo = TimeTo;
	this.Pagination = Pagination;
}
GetVeROReportStatusRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		VeROReportPacketID: (this.VeROReportPacketID === undefined)? null : this.VeROReportPacketID,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		IncludeReportedItemDetails: (this.IncludeReportedItemDetails === undefined)? null : this.IncludeReportedItemDetails,
		TimeFrom: (this.TimeFrom === undefined)? null : this.TimeFrom,
		TimeTo: (this.TimeTo === undefined)? null : this.TimeTo,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON()
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
module.exports = GetVeROReportStatusRequestType;