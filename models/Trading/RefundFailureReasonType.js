var RefundFailureCodeType = require('./RefundFailureCodeType');

function RefundFailureReasonType(RefundFailureCode) {

	/**
	  Documentation
	   
                This container is no longer used.
            
	 */

	/**
	 * Arrays
	 */
	var _RefundFailureCode;
	Object.defineProperty(this, 'RefundFailureCode', {
		 get: function(){
			 return _RefundFailureCode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundFailureCodeType){ 
					_RefundFailureCode = value; 
				}else{
					console.log('RefundFailureCode expects type RefundFailureCodeType');
				}
			}
		}
	});
	this.RefundFailureCode = RefundFailureCode;
}
RefundFailureReasonType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundFailureCode: (this.RefundFailureCode === undefined)? null : this.RefundFailureCode.toJSON()
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
module.exports = RefundFailureReasonType;