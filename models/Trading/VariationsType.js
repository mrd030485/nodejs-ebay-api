var NameValueListArrayType = require('./NameValueListArrayType'),
	ModifyNameArrayType = require('./ModifyNameArrayType');

function VariationsType(Variation, Pictures, VariationSpecificsSet, ModifyNameList) {

	/**
	  Documentation
	   Variations are multiple similar (but not identical) items in a single fixed-price listing. For example, a single listing could contain multiple items of the same brand and model that vary by color and size (like "Blue, Large" and "Black,
                    Medium"). Each variation can have its own quantity and price. For example, a listing could include 10 "Blue, Large" variations and 20 "Black, Medium" variations.
	 */

	/**
	 * Arrays
	 *	Variation: VariationType
	 *	Pictures: PicturesType
	 */
	var _VariationSpecificsSet;
	var _ModifyNameList;
	Object.defineProperty(this, 'VariationSpecificsSet', {
		 get: function(){
			 return _VariationSpecificsSet;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_VariationSpecificsSet = value; 
				}else{
					console.log('VariationSpecificsSet expects type NameValueListArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ModifyNameList', {
		 get: function(){
			 return _ModifyNameList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ModifyNameArrayType){ 
					_ModifyNameList = value; 
				}else{
					console.log('ModifyNameList expects type ModifyNameArrayType');
				}
			}
		}
	});
	this.Variation = Variation;
	this.Pictures = Pictures;
	this.VariationSpecificsSet = VariationSpecificsSet;
	this.ModifyNameList = ModifyNameList;
}
VariationsType.prototype.toJSON = function(with_null) {
	var json = { 
		Variation: (this.Variation === undefined)? null : this.Variation,
		Pictures: (this.Pictures === undefined)? null : this.Pictures,
		VariationSpecificsSet: (this.VariationSpecificsSet === undefined)? null : this.VariationSpecificsSet.toJSON(),
		ModifyNameList: (this.ModifyNameList === undefined)? null : this.ModifyNameList.toJSON()
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
module.exports = VariationsType;