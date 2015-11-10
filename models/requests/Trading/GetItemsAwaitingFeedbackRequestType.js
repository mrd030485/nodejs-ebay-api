var PaginationType = require('../../Trading/PaginationType');

function GetItemsAwaitingFeedbackRequestType(Sort, Pagination) {

	/**
	  Documentation
	   Returns orders in which the user was involved and for which feedback is still needed from either the buyer or seller.
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
	this.Sort = Sort;
	this.Pagination = Pagination;
}
GetItemsAwaitingFeedbackRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Sort: (this.Sort === undefined)? null : this.Sort,
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
module.exports = GetItemsAwaitingFeedbackRequestType;