var CharacteristicsSetType = require('./CharacteristicsSetType'),
	AmountType = require('./AmountType');

function ProductType(CharacteristicsSet, DetailsURL, NumItems, MinPrice, MaxPrice, ProductReferenceID) {

	/**
	  Documentation
	   This type is deprecated as <b>GetProduct*</b> calls were deprecated. 
	 */

	/**
	 * Arrays
	 */
	var _CharacteristicsSet;
	var _MinPrice;
	var _MaxPrice;
	Object.defineProperty(this, 'CharacteristicsSet', {
		 get: function(){
			 return _CharacteristicsSet;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharacteristicsSetType){ 
					_CharacteristicsSet = value; 
				}else{
					console.log('CharacteristicsSet expects type CharacteristicsSetType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MinPrice', {
		 get: function(){
			 return _MinPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MinPrice = value; 
				}else{
					console.log('MinPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxPrice', {
		 get: function(){
			 return _MaxPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MaxPrice = value; 
				}else{
					console.log('MaxPrice expects type AmountType');
				}
			}
		}
	});
	this.CharacteristicsSet = CharacteristicsSet;
	this.DetailsURL = DetailsURL;
	this.NumItems = NumItems;
	this.MinPrice = MinPrice;
	this.MaxPrice = MaxPrice;
	this.ProductReferenceID = ProductReferenceID;
}
ProductType.prototype.toJSON = function(with_null) {
	var json = { 
		CharacteristicsSet: (this.CharacteristicsSet === undefined)? null : this.CharacteristicsSet.toJSON(),
		DetailsURL: (this.DetailsURL === undefined)? null : this.DetailsURL,
		NumItems: (this.NumItems === undefined)? null : this.NumItems,
		MinPrice: (this.MinPrice === undefined)? null : this.MinPrice.toJSON(),
		MaxPrice: (this.MaxPrice === undefined)? null : this.MaxPrice.toJSON(),
		ProductReferenceID: (this.ProductReferenceID === undefined)? null : this.ProductReferenceID
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
module.exports = ProductType;