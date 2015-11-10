var SellingManagerProductDetailsType = require('../../Trading/SellingManagerProductDetailsType'),
	SellingManagerProductSpecificsType = require('../../Trading/SellingManagerProductSpecificsType');

function AddSellingManagerProductRequestType(SellingManagerProductDetails, FolderID, SellingManagerProductSpecifics) {

	/**
	  Documentation
	   The base request type of the <b>AddSellingManagerProduct</b> call, which is used to create a product or a group of product variations within the Selling Manager Pro system. Once a Selling Manager Pro product or production variation
                    group is created, the product settings and product specifics can be transferred over into a Selling Manager Pro listing template with the <b>AddSellingManagerTemplate</b> call.
	 */

	/**
	 * Arrays
	 */
	var _SellingManagerProductDetails;
	var _SellingManagerProductSpecifics;
	Object.defineProperty(this, 'SellingManagerProductDetails', {
		 get: function(){
			 return _SellingManagerProductDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductDetailsType){ 
					_SellingManagerProductDetails = value; 
				}else{
					console.log('SellingManagerProductDetails expects type SellingManagerProductDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingManagerProductSpecifics', {
		 get: function(){
			 return _SellingManagerProductSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductSpecificsType){ 
					_SellingManagerProductSpecifics = value; 
				}else{
					console.log('SellingManagerProductSpecifics expects type SellingManagerProductSpecificsType');
				}
			}
		}
	});
	this.SellingManagerProductDetails = SellingManagerProductDetails;
	this.FolderID = FolderID;
	this.SellingManagerProductSpecifics = SellingManagerProductSpecifics;
}
AddSellingManagerProductRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SellingManagerProductDetails: (this.SellingManagerProductDetails === undefined)? null : this.SellingManagerProductDetails.toJSON(),
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		SellingManagerProductSpecifics: (this.SellingManagerProductSpecifics === undefined)? null : this.SellingManagerProductSpecifics.toJSON()
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
module.exports = AddSellingManagerProductRequestType;