var ItemType = require('../../Trading/ItemType');

function AddItemFromSellingManagerTemplateRequestType(SaleTemplateID, ScheduleTime, Item) {

	/**
	  Documentation
	   This is the base request type of the <b>AddItemFromSellingManagerTemplate</b> call, which is used to create listings based on settings contained in a Selling Manager template.
	 */

	/**
	 * Arrays
	 */
	var _Item;
	Object.defineProperty(this, 'Item', {
		 get: function(){
			 return _Item;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Item = value; 
				}else{
					console.log('Item expects type ItemType');
				}
			}
		}
	});
	this.SaleTemplateID = SaleTemplateID;
	this.ScheduleTime = ScheduleTime;
	this.Item = Item;
}
AddItemFromSellingManagerTemplateRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SaleTemplateID: (this.SaleTemplateID === undefined)? null : this.SaleTemplateID,
		ScheduleTime: (this.ScheduleTime === undefined)? null : this.ScheduleTime,
		Item: (this.Item === undefined)? null : this.Item.toJSON()
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
module.exports = AddItemFromSellingManagerTemplateRequestType;