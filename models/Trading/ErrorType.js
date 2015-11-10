var SeverityCodeType = require('./SeverityCodeType'),
	ErrorClassificationCodeType = require('./ErrorClassificationCodeType');

function ErrorType(ShortMessage, LongMessage, ErrorCode, UserDisplayHint, SeverityCode, ErrorParameters, ErrorClassification) {

	/**
	  Documentation
	   
                These are request errors (as opposed to system errors) that occur due to problems with business-level data (e.g., an invalid combination of arguments) that the application passed in.
            
	 */

	/**
	 * Arrays
	 *	ErrorParameters: ErrorParameterType
	 */
	var _SeverityCode;
	var _ErrorClassification;
	Object.defineProperty(this, 'SeverityCode', {
		 get: function(){
			 return _SeverityCode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SeverityCodeType){ 
					_SeverityCode = value; 
				}else{
					console.log('SeverityCode expects type SeverityCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ErrorClassification', {
		 get: function(){
			 return _ErrorClassification;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ErrorClassificationCodeType){ 
					_ErrorClassification = value; 
				}else{
					console.log('ErrorClassification expects type ErrorClassificationCodeType');
				}
			}
		}
	});
	this.ShortMessage = ShortMessage;
	this.LongMessage = LongMessage;
	this.ErrorCode = ErrorCode;
	this.UserDisplayHint = UserDisplayHint;
	this.SeverityCode = SeverityCode;
	this.ErrorParameters = ErrorParameters;
	this.ErrorClassification = ErrorClassification;
}
ErrorType.prototype.toJSON = function(with_null) {
	var json = { 
		ShortMessage: (this.ShortMessage === undefined)? null : this.ShortMessage,
		LongMessage: (this.LongMessage === undefined)? null : this.LongMessage,
		ErrorCode: (this.ErrorCode === undefined)? null : this.ErrorCode,
		UserDisplayHint: (this.UserDisplayHint === undefined)? null : this.UserDisplayHint,
		SeverityCode: (this.SeverityCode === undefined)? null : this.SeverityCode.toJSON(),
		ErrorParameters: (this.ErrorParameters === undefined)? null : this.ErrorParameters,
		ErrorClassification: (this.ErrorClassification === undefined)? null : this.ErrorClassification.toJSON()
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
module.exports = ErrorType;