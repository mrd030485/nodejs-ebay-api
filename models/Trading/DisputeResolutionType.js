var DisputeResolutionRecordTypeCodeType = require('./DisputeResolutionRecordTypeCodeType'),
	DisputeResolutionReasonCodeType = require('./DisputeResolutionReasonCodeType');

function DisputeResolutionType(DisputeResolutionRecordType, DisputeResolutionReason, ResolutionTime) {

	/**
	  Documentation
	   
                Contains all information about a dispute resolution. A dispute can have a resolution even if the seller does not receive payment. The resolution can have various results, including a Final Value Fee credit to the seller or a strike to the buyer.
            
	 */

	/**
	 * Arrays
	 */
	var _DisputeResolutionRecordType;
	var _DisputeResolutionReason;
	Object.defineProperty(this, 'DisputeResolutionRecordType', {
		 get: function(){
			 return _DisputeResolutionRecordType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeResolutionRecordTypeCodeType){ 
					_DisputeResolutionRecordType = value; 
				}else{
					console.log('DisputeResolutionRecordType expects type DisputeResolutionRecordTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DisputeResolutionReason', {
		 get: function(){
			 return _DisputeResolutionReason;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeResolutionReasonCodeType){ 
					_DisputeResolutionReason = value; 
				}else{
					console.log('DisputeResolutionReason expects type DisputeResolutionReasonCodeType');
				}
			}
		}
	});
	this.DisputeResolutionRecordType = DisputeResolutionRecordType;
	this.DisputeResolutionReason = DisputeResolutionReason;
	this.ResolutionTime = ResolutionTime;
}
DisputeResolutionType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeResolutionRecordType: (this.DisputeResolutionRecordType === undefined)? null : this.DisputeResolutionRecordType.toJSON(),
		DisputeResolutionReason: (this.DisputeResolutionReason === undefined)? null : this.DisputeResolutionReason.toJSON(),
		ResolutionTime: (this.ResolutionTime === undefined)? null : this.ResolutionTime
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
module.exports = DisputeResolutionType;