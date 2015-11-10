var DisputeFilterTypeCodeType = require('./DisputeFilterTypeCodeType');

function DisputeFilterCountType(DisputeFilterType, TotalAvailable) {

	/**
	  Documentation
	   
                The number of disputes that match a given filter.
            
	 */

	/**
	 * Arrays
	 */
	var _DisputeFilterType;
	Object.defineProperty(this, 'DisputeFilterType', {
		 get: function(){
			 return _DisputeFilterType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeFilterTypeCodeType){ 
					_DisputeFilterType = value; 
				}else{
					console.log('DisputeFilterType expects type DisputeFilterTypeCodeType');
				}
			}
		}
	});
	this.DisputeFilterType = DisputeFilterType;
	this.TotalAvailable = TotalAvailable;
}
DisputeFilterCountType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeFilterType: (this.DisputeFilterType === undefined)? null : this.DisputeFilterType.toJSON(),
		TotalAvailable: (this.TotalAvailable === undefined)? null : this.TotalAvailable
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
module.exports = DisputeFilterCountType;