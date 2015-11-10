var PaginationType = require('../../Trading/PaginationType');

function GetUserDisputesRequestType(DisputeFilterType, DisputeSortType, ModTimeFrom, ModTimeTo, Pagination) {

	/**
	  Documentation
	   Requests a list of disputes the requester is involved in as buyer or seller. eBay Buyer Protection Item Not Received and Significantly Not As Described cases are not returned with this call. To retrieve eBay Buyer Protection cases, the
                    getUserCases call of the Resolution Case Management API must be used instead.
	 */

	/**
	 * Arrays
	 */
	var _Pagination;
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
	this.DisputeFilterType = DisputeFilterType;
	this.DisputeSortType = DisputeSortType;
	this.ModTimeFrom = ModTimeFrom;
	this.ModTimeTo = ModTimeTo;
	this.Pagination = Pagination;
}
GetUserDisputesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeFilterType: (this.DisputeFilterType === undefined)? null : this.DisputeFilterType,
		DisputeSortType: (this.DisputeSortType === undefined)? null : this.DisputeSortType,
		ModTimeFrom: (this.ModTimeFrom === undefined)? null : this.ModTimeFrom,
		ModTimeTo: (this.ModTimeTo === undefined)? null : this.ModTimeTo,
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
module.exports = GetUserDisputesRequestType;