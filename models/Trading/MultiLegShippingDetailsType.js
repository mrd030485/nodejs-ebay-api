var MultiLegShipmentType = require('./MultiLegShipmentType');

function MultiLegShippingDetailsType(SellerShipmentToLogisticsProvider, LogisticsProviderShipmentToBuyer) {

	/**
	  Documentation
	   
                This type provides information about the domestic leg of a Global Shipping Program shipment. <br/><br/> <span class="tablenote"> <strong>Note:</strong> The <strong>LogisticsProviderShipmentToBuyer</strong> field
                is reserved for the exclusive use of the international shipping provider. </span>
            
	 */

	/**
	 * Arrays
	 */
	var _SellerShipmentToLogisticsProvider;
	var _LogisticsProviderShipmentToBuyer;
	Object.defineProperty(this, 'SellerShipmentToLogisticsProvider', {
		 get: function(){
			 return _SellerShipmentToLogisticsProvider;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MultiLegShipmentType){ 
					_SellerShipmentToLogisticsProvider = value; 
				}else{
					console.log('SellerShipmentToLogisticsProvider expects type MultiLegShipmentType');
				}
			}
		}
	});
	Object.defineProperty(this, 'LogisticsProviderShipmentToBuyer', {
		 get: function(){
			 return _LogisticsProviderShipmentToBuyer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MultiLegShipmentType){ 
					_LogisticsProviderShipmentToBuyer = value; 
				}else{
					console.log('LogisticsProviderShipmentToBuyer expects type MultiLegShipmentType');
				}
			}
		}
	});
	this.SellerShipmentToLogisticsProvider = SellerShipmentToLogisticsProvider;
	this.LogisticsProviderShipmentToBuyer = LogisticsProviderShipmentToBuyer;
}
MultiLegShippingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		SellerShipmentToLogisticsProvider: (this.SellerShipmentToLogisticsProvider === undefined)? null : this.SellerShipmentToLogisticsProvider.toJSON(),
		LogisticsProviderShipmentToBuyer: (this.LogisticsProviderShipmentToBuyer === undefined)? null : this.LogisticsProviderShipmentToBuyer.toJSON()
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
module.exports = MultiLegShippingDetailsType;