function ShippingPackageInfoType(StoreID, ShippingTrackingEvent, ScheduledDeliveryTimeMin, ScheduledDeliveryTimeMax, ActualDeliveryTime, EstimatedDeliveryTimeMin, EstimatedDeliveryTimeMax) {

	/**
	  Documentation
	   Type defining the <b>ShippingPackageInfoType</b> container, which is returned in order management calls. The <b>ShippingPackageInfoType</b> container provides information on delivery times and tracking information
                    for a shipping package.
	 */

	/**
	 * Arrays
	 */
	this.StoreID = StoreID;
	this.ShippingTrackingEvent = ShippingTrackingEvent;
	this.ScheduledDeliveryTimeMin = ScheduledDeliveryTimeMin;
	this.ScheduledDeliveryTimeMax = ScheduledDeliveryTimeMax;
	this.ActualDeliveryTime = ActualDeliveryTime;
	this.EstimatedDeliveryTimeMin = EstimatedDeliveryTimeMin;
	this.EstimatedDeliveryTimeMax = EstimatedDeliveryTimeMax;
}
ShippingPackageInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		StoreID: (this.StoreID === undefined)? null : this.StoreID,
		ShippingTrackingEvent: (this.ShippingTrackingEvent === undefined)? null : this.ShippingTrackingEvent,
		ScheduledDeliveryTimeMin: (this.ScheduledDeliveryTimeMin === undefined)? null : this.ScheduledDeliveryTimeMin,
		ScheduledDeliveryTimeMax: (this.ScheduledDeliveryTimeMax === undefined)? null : this.ScheduledDeliveryTimeMax,
		ActualDeliveryTime: (this.ActualDeliveryTime === undefined)? null : this.ActualDeliveryTime,
		EstimatedDeliveryTimeMin: (this.EstimatedDeliveryTimeMin === undefined)? null : this.EstimatedDeliveryTimeMin,
		EstimatedDeliveryTimeMax: (this.EstimatedDeliveryTimeMax === undefined)? null : this.EstimatedDeliveryTimeMax
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
module.exports = ShippingPackageInfoType;