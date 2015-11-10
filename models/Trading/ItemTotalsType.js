var AmountType = require('./AmountType');

function ItemTotalsType(TotalQuantity, TotalValue) {

	/**
	  Documentation
	   
                Details about items involved in the summary for the specified time period.
            
	 */

	/**
	 * Arrays
	 */
	var _TotalValue;
	Object.defineProperty(this, 'TotalValue', {
		 get: function(){
			 return _TotalValue;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalValue = value; 
				}else{
					console.log('TotalValue expects type AmountType');
				}
			}
		}
	});
	this.TotalQuantity = TotalQuantity;
	this.TotalValue = TotalValue;
}
ItemTotalsType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalQuantity: (this.TotalQuantity === undefined)? null : this.TotalQuantity,
		TotalValue: (this.TotalValue === undefined)? null : this.TotalValue.toJSON()
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
module.exports = ItemTotalsType;