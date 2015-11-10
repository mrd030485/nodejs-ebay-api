var VariationsType = require('./VariationsType'),
	NameValueListArrayType = require('./NameValueListArrayType');

function SellingManagerProductSpecificsType(PrimaryCategoryID, Variations, ItemSpecifics) {

	/**
	  Documentation
	   Describes a Selling Manager Template
	 */

	/**
	 * Arrays
	 */
	var _Variations;
	var _ItemSpecifics;
	Object.defineProperty(this, 'Variations', {
		 get: function(){
			 return _Variations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationsType){ 
					_Variations = value; 
				}else{
					console.log('Variations expects type VariationsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemSpecifics', {
		 get: function(){
			 return _ItemSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_ItemSpecifics = value; 
				}else{
					console.log('ItemSpecifics expects type NameValueListArrayType');
				}
			}
		}
	});
	this.PrimaryCategoryID = PrimaryCategoryID;
	this.Variations = Variations;
	this.ItemSpecifics = ItemSpecifics;
}
SellingManagerProductSpecificsType.prototype.toJSON = function(with_null) {
	var json = { 
		PrimaryCategoryID: (this.PrimaryCategoryID === undefined)? null : this.PrimaryCategoryID,
		Variations: (this.Variations === undefined)? null : this.Variations.toJSON(),
		ItemSpecifics: (this.ItemSpecifics === undefined)? null : this.ItemSpecifics.toJSON()
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
module.exports = SellingManagerProductSpecificsType;