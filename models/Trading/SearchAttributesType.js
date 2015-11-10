var DateSpecifierCodeType = require('./DateSpecifierCodeType'),
	RangeCodeType = require('./RangeCodeType');

function SearchAttributesType(AttributeID, DateSpecifier, RangeSpecifier, ValueList) {

	/**
	  Documentation
	   
                This type is deprecated as <b>GetProduct*</b> calls were deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	ValueList: ValType
	 */
	var _DateSpecifier;
	var _RangeSpecifier;
	Object.defineProperty(this, 'DateSpecifier', {
		 get: function(){
			 return _DateSpecifier;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DateSpecifierCodeType){ 
					_DateSpecifier = value; 
				}else{
					console.log('DateSpecifier expects type DateSpecifierCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RangeSpecifier', {
		 get: function(){
			 return _RangeSpecifier;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RangeCodeType){ 
					_RangeSpecifier = value; 
				}else{
					console.log('RangeSpecifier expects type RangeCodeType');
				}
			}
		}
	});
	this.AttributeID = AttributeID;
	this.DateSpecifier = DateSpecifier;
	this.RangeSpecifier = RangeSpecifier;
	this.ValueList = ValueList;
}
SearchAttributesType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeID: (this.AttributeID === undefined)? null : this.AttributeID,
		DateSpecifier: (this.DateSpecifier === undefined)? null : this.DateSpecifier.toJSON(),
		RangeSpecifier: (this.RangeSpecifier === undefined)? null : this.RangeSpecifier.toJSON(),
		ValueList: (this.ValueList === undefined)? null : this.ValueList
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
module.exports = SearchAttributesType;