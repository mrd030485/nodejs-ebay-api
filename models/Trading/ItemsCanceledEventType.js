var ItemIDArrayType = require('./ItemIDArrayType'),
	UserIDType = require('./UserIDType');

function ItemsCanceledEventType(CanceledItemIDArray, EligibleForRelist, SellerID) {

	/**
	  Documentation
	   
                This event is not functional.
            
	 */

base: undefined
	/**
	 * Arrays
	 */
	var _CanceledItemIDArray;
	var _SellerID;
	Object.defineProperty(this, 'CanceledItemIDArray', {
		 get: function(){
			 return _CanceledItemIDArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				 if(value instanceof ItemIDArrayType){ 
					_CanceledItemIDArray = value; 
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerID', {
		 get: function(){
			 return _SellerID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				 if(value instanceof UserIDType){ 
					_SellerID = value; 
				}
			}
		}
	});
	this.CanceledItemIDArray = CanceledItemIDArray;
	this.EligibleForRelist = EligibleForRelist;
	this.SellerID = SellerID;
}
ItemsCanceledEventType.prototype.toJSON = function(with_null) {
	var json = { 
		CanceledItemIDArray: (this.CanceledItemIDArray === undefined)? null : this.CanceledItemIDArray.toJSON(),
		EligibleForRelist: (this.EligibleForRelist === undefined)? null : this.EligibleForRelist,
		SellerID: (this.SellerID === undefined)? null : this.SellerID.toJSON()
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
module.exports = ItemsCanceledEventType;