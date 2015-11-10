var BuyerProtectionSourceCodeType = require('./BuyerProtectionSourceCodeType'),
	BuyerProtectionCodeType = require('./BuyerProtectionCodeType');

function BuyerProtectionDetailsType(BuyerProtectionSource, BuyerProtectionStatus) {

	/**
	  Documentation
	   
                Type defining the <strong>ApplyBuyerProtection</strong> container, which consists of details related to whether or not the item is eligible for buyer protection and which of the buyer protection programs will cover the item.
            
	 */

	/**
	 * Arrays
	 */
	var _BuyerProtectionSource;
	var _BuyerProtectionStatus;
	Object.defineProperty(this, 'BuyerProtectionSource', {
		 get: function(){
			 return _BuyerProtectionSource;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerProtectionSourceCodeType){ 
					_BuyerProtectionSource = value; 
				}else{
					console.log('BuyerProtectionSource expects type BuyerProtectionSourceCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerProtectionStatus', {
		 get: function(){
			 return _BuyerProtectionStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerProtectionCodeType){ 
					_BuyerProtectionStatus = value; 
				}else{
					console.log('BuyerProtectionStatus expects type BuyerProtectionCodeType');
				}
			}
		}
	});
	this.BuyerProtectionSource = BuyerProtectionSource;
	this.BuyerProtectionStatus = BuyerProtectionStatus;
}
BuyerProtectionDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BuyerProtectionSource: (this.BuyerProtectionSource === undefined)? null : this.BuyerProtectionSource.toJSON(),
		BuyerProtectionStatus: (this.BuyerProtectionStatus === undefined)? null : this.BuyerProtectionStatus.toJSON()
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
module.exports = BuyerProtectionDetailsType;