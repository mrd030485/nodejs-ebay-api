var UnpaidItemCaseStatusTypeCodeType = require('./UnpaidItemCaseStatusTypeCodeType'),
	UnpaidItemCaseOpenTypeCodeType = require('./UnpaidItemCaseOpenTypeCodeType');

function UnpaidItemType(Status, Type) {

	/**
	  Documentation
	   
                Type defining the <strong>UnpaidItem</strong> container, which consists of details related to the type and status of an Unpaid Item case.
            
	 */

	/**
	 * Arrays
	 */
	var _Status;
	var _Type;
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UnpaidItemCaseStatusTypeCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type UnpaidItemCaseStatusTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Type', {
		 get: function(){
			 return _Type;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UnpaidItemCaseOpenTypeCodeType){ 
					_Type = value; 
				}else{
					console.log('Type expects type UnpaidItemCaseOpenTypeCodeType');
				}
			}
		}
	});
	this.Status = Status;
	this.Type = Type;
}
UnpaidItemType.prototype.toJSON = function(with_null) {
	var json = { 
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		Type: (this.Type === undefined)? null : this.Type.toJSON()
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
module.exports = UnpaidItemType;