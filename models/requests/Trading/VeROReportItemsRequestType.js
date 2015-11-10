var UserIDType = require('../../Trading/UserIDType'),
	VeROReportItemsType = require('../../Trading/VeROReportItemsType');

function VeROReportItemsRequestType(RightsOwnerID, ReportItems) {

	/**
	  Documentation
	   Reports items that allegedly infringe your copyright, trademark, or other intellectual property rights. You can report one or more items at a time with this call. You must be a member of the Verified Rights Owner (VeRO) Program to use
                    this call.
                
	 */

	/**
	 * Arrays
	 */
	var _RightsOwnerID;
	var _ReportItems;
	Object.defineProperty(this, 'RightsOwnerID', {
		 get: function(){
			 return _RightsOwnerID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_RightsOwnerID = value; 
				}else{
					console.log('RightsOwnerID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReportItems', {
		 get: function(){
			 return _ReportItems;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VeROReportItemsType){ 
					_ReportItems = value; 
				}else{
					console.log('ReportItems expects type VeROReportItemsType');
				}
			}
		}
	});
	this.RightsOwnerID = RightsOwnerID;
	this.ReportItems = ReportItems;
}
VeROReportItemsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		RightsOwnerID: (this.RightsOwnerID === undefined)? null : this.RightsOwnerID.toJSON(),
		ReportItems: (this.ReportItems === undefined)? null : this.ReportItems.toJSON()
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
module.exports = VeROReportItemsRequestType;