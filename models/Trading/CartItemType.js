var ItemType = require('./ItemType'),
	ModifyActionCodeType = require('./ModifyActionCodeType');

function CartItemType(Item, ReferenceID, Action) {

	/**
	  Documentation
	   
                This type is deprecated.
            
	 */

	/**
	 * Arrays
	 */
	var _Item;
	var _Action;
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
	Object.defineProperty(this, 'Action', {
		 get: function(){
			 return _Action;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ModifyActionCodeType){ 
					_Action = value; 
				}else{
					console.log('Action expects type ModifyActionCodeType');
				}
			}
		}
	});
	this.Item = Item;
	this.ReferenceID = ReferenceID;
	this.Action = Action;
}
CartItemType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		ReferenceID: (this.ReferenceID === undefined)? null : this.ReferenceID,
		Action: (this.Action === undefined)? null : this.Action.toJSON()
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
module.exports = CartItemType;