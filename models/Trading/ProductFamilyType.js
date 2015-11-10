var ProductType = require('./ProductType');

function ProductFamilyType(ParentProduct, FamilyMembers) {

	/**
	  Documentation
	   
                This type is deprecated as <b>GetProduct*</b> calls were deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	FamilyMembers: ProductType
	 */
	var _ParentProduct;
	Object.defineProperty(this, 'ParentProduct', {
		 get: function(){
			 return _ParentProduct;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductType){ 
					_ParentProduct = value; 
				}else{
					console.log('ParentProduct expects type ProductType');
				}
			}
		}
	});
	this.ParentProduct = ParentProduct;
	this.FamilyMembers = FamilyMembers;
}
ProductFamilyType.prototype.toJSON = function(with_null) {
	var json = { 
		ParentProduct: (this.ParentProduct === undefined)? null : this.ParentProduct.toJSON(),
		FamilyMembers: (this.FamilyMembers === undefined)? null : this.FamilyMembers
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
module.exports = ProductFamilyType;