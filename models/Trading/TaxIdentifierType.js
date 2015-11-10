var ValueTypeCodeType = require('./ValueTypeCodeType');

function TaxIdentifierType(Type, ID, Attribute) {

	/**
	  Documentation
	   
                This type defines the <b>BuyerTaxIdentifier</b> container that is returned in order management calls. This container consists of taxpayer identification information for the buyer and it is currently used by sellers selling on the Italy or
                Spain site to retrieve the taxpayer ID of buyers registered on the Italy or Spain sites.
            
	 */

	/**
	 * Arrays
	 *	Attribute: TaxIdentifierAttributeType
	 */
	var _Type;
	Object.defineProperty(this, 'Type', {
		 get: function(){
			 return _Type;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ValueTypeCodeType){ 
					_Type = value; 
				}else{
					console.log('Type expects type ValueTypeCodeType');
				}
			}
		}
	});
	this.Type = Type;
	this.ID = ID;
	this.Attribute = Attribute;
}
TaxIdentifierType.prototype.toJSON = function(with_null) {
	var json = { 
		Type: (this.Type === undefined)? null : this.Type.toJSON(),
		ID: (this.ID === undefined)? null : this.ID,
		Attribute: (this.Attribute === undefined)? null : this.Attribute
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
module.exports = TaxIdentifierType;