var ItemIDType = require('./ItemIDType'),
	NameValueListArrayType = require('./NameValueListArrayType');

function VariationKeyType(ItemID, VariationSpecifics) {

	/**
	  Documentation
	   
                Used to provide input for ItemID and VariationSpecific
            
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _VariationSpecifics;
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
	Object.defineProperty(this, 'VariationSpecifics', {
		 get: function(){
			 return _VariationSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_VariationSpecifics = value; 
				}else{
					console.log('VariationSpecifics expects type NameValueListArrayType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.VariationSpecifics = VariationSpecifics;
}
VariationKeyType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics.toJSON()
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
module.exports = VariationKeyType;