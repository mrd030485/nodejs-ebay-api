var TaxTableType = require('../../Trading/TaxTableType');

function SetTaxTableRequestType(TaxTable) {

	/**
	  Documentation
	   Sets the tax table for a seller on a given site.
	 */

	/**
	 * Arrays
	 */
	var _TaxTable;
	Object.defineProperty(this, 'TaxTable', {
		 get: function(){
			 return _TaxTable;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TaxTableType){ 
					_TaxTable = value; 
				}else{
					console.log('TaxTable expects type TaxTableType');
				}
			}
		}
	});
	this.TaxTable = TaxTable;
}
SetTaxTableRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		TaxTable: (this.TaxTable === undefined)? null : this.TaxTable.toJSON()
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
module.exports = SetTaxTableRequestType;