var XMLRequesterCredentialsType = require('../../Trading/XMLRequesterCredentialsType'),
	UUIDType = require('../../Trading/UUIDType'),
	BotBlockRequestType = require('./BotBlockRequestType');

function AbstractRequestType(DetailLevel, ErrorLanguage, MessageID, Version, EndUserIP, RequesterCredentials, ErrorHandling, InvocationID, OutputSelector, WarningLevel, BotBlock) {

	/**
	  Documentation
	   Base type definition of the request payload, which can carry any type of payload content plus optional versioning information and detail level requirements. All concrete request types (e.g., AddItemRequestType) are derived from the abstract
                    request type. The naming convention we use for the concrete type names is the name of the service (the verb or call name) followed by "RequestType": VerbNameRequestType
	 */

	/**
	 * Arrays
	 */
	var _RequesterCredentials;
	var _InvocationID;
	var _BotBlock;
	Object.defineProperty(this, 'RequesterCredentials', {
		 get: function(){
			 return _RequesterCredentials;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof XMLRequesterCredentialsType){ 
					_RequesterCredentials = value; 
				}else{
					console.log('RequesterCredentials expects type XMLRequesterCredentialsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InvocationID', {
		 get: function(){
			 return _InvocationID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UUIDType){ 
					_InvocationID = value; 
				}else{
					console.log('InvocationID expects type UUIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BotBlock', {
		 get: function(){
			 return _BotBlock;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BotBlockRequestType){ 
					_BotBlock = value; 
				}else{
					console.log('BotBlock expects type BotBlockRequestType');
				}
			}
		}
	});
	this.DetailLevel = DetailLevel;
	this.ErrorLanguage = ErrorLanguage;
	this.MessageID = MessageID;
	this.Version = Version;
	this.EndUserIP = EndUserIP;
	this.RequesterCredentials = RequesterCredentials;
	this.ErrorHandling = ErrorHandling;
	this.InvocationID = InvocationID;
	this.OutputSelector = OutputSelector;
	this.WarningLevel = WarningLevel;
	this.BotBlock = BotBlock;
}
AbstractRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DetailLevel: (this.DetailLevel === undefined)? null : this.DetailLevel,
		ErrorLanguage: (this.ErrorLanguage === undefined)? null : this.ErrorLanguage,
		MessageID: (this.MessageID === undefined)? null : this.MessageID,
		Version: (this.Version === undefined)? null : this.Version,
		EndUserIP: (this.EndUserIP === undefined)? null : this.EndUserIP,
		RequesterCredentials: (this.RequesterCredentials === undefined)? null : this.RequesterCredentials.toJSON(),
		ErrorHandling: (this.ErrorHandling === undefined)? null : this.ErrorHandling,
		InvocationID: (this.InvocationID === undefined)? null : this.InvocationID.toJSON(),
		OutputSelector: (this.OutputSelector === undefined)? null : this.OutputSelector,
		WarningLevel: (this.WarningLevel === undefined)? null : this.WarningLevel,
		BotBlock: (this.BotBlock === undefined)? null : this.BotBlock.toJSON()
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
module.exports = AbstractRequestType;