var SellingManagerProductDetailsType = require('./SellingManagerProductDetailsType'),
	ItemType = require('./ItemType');

function SellingManagerTemplateDetailsType(SaleTemplateID, SaleTemplateName, SuccessPercent, SellingManagerProductDetails, Template) {

	/**
	  Documentation
	   Describes a Selling Manager Template
            
	 */

	/**
	 * Arrays
	 */
	var _SellingManagerProductDetails;
	var _Template;
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
	Object.defineProperty(this, 'Template', {
		 get: function(){
			 return _Template;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Template = value; 
				}else{
					console.log('Template expects type ItemType');
				}
			}
		}
	});
	this.SaleTemplateID = SaleTemplateID;
	this.SaleTemplateName = SaleTemplateName;
	this.SuccessPercent = SuccessPercent;
	this.SellingManagerProductDetails = SellingManagerProductDetails;
	this.Template = Template;
}
SellingManagerTemplateDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		SaleTemplateID: (this.SaleTemplateID === undefined)? null : this.SaleTemplateID,
		SaleTemplateName: (this.SaleTemplateName === undefined)? null : this.SaleTemplateName,
		SuccessPercent: (this.SuccessPercent === undefined)? null : this.SuccessPercent,
		SellingManagerProductDetails: (this.SellingManagerProductDetails === undefined)? null : this.SellingManagerProductDetails.toJSON(),
		Template: (this.Template === undefined)? null : this.Template.toJSON()
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
module.exports = SellingManagerTemplateDetailsType;