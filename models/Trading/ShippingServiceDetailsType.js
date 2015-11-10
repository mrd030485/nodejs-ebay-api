var ShippingServiceCodeType = require('./ShippingServiceCodeType');

function ShippingServiceDetailsType(Description, ExpeditedService, InternationalService, ShippingService, ShippingServiceID, ShippingTimeMax, ShippingTimeMin, ShippingServiceCode, ServiceType, ShippingPackage, DimensionsRequired, ValidForSellingFlow, SurchargeApplicable, ShippingCarrier, CODService, DeprecationDetails, MappedToShippingServiceID, CostGroupFlat, ShippingServicePackageDetails, WeightRequired, DetailVersion, UpdateTime, ShippingCategory) {

	/**
	  Documentation
	   
                Details about a specific shipping service.
            
	 */

	/**
	 * Arrays
	 *	ServiceType: ShippingTypeCodeType
	 *	ShippingPackage: ShippingPackageCodeType
	 *	ShippingCarrier: ShippingCarrierCodeType
	 *	DeprecationDetails: AnnouncementMessageType
	 *	ShippingServicePackageDetails: ShippingServicePackageDetailsType
	 */
	var _ShippingServiceCode;
	Object.defineProperty(this, 'ShippingServiceCode', {
		 get: function(){
			 return _ShippingServiceCode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingServiceCodeType){ 
					_ShippingServiceCode = value; 
				}else{
					console.log('ShippingServiceCode expects type ShippingServiceCodeType');
				}
			}
		}
	});
	this.Description = Description;
	this.ExpeditedService = ExpeditedService;
	this.InternationalService = InternationalService;
	this.ShippingService = ShippingService;
	this.ShippingServiceID = ShippingServiceID;
	this.ShippingTimeMax = ShippingTimeMax;
	this.ShippingTimeMin = ShippingTimeMin;
	this.ShippingServiceCode = ShippingServiceCode;
	this.ServiceType = ServiceType;
	this.ShippingPackage = ShippingPackage;
	this.DimensionsRequired = DimensionsRequired;
	this.ValidForSellingFlow = ValidForSellingFlow;
	this.SurchargeApplicable = SurchargeApplicable;
	this.ShippingCarrier = ShippingCarrier;
	this.CODService = CODService;
	this.DeprecationDetails = DeprecationDetails;
	this.MappedToShippingServiceID = MappedToShippingServiceID;
	this.CostGroupFlat = CostGroupFlat;
	this.ShippingServicePackageDetails = ShippingServicePackageDetails;
	this.WeightRequired = WeightRequired;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
	this.ShippingCategory = ShippingCategory;
}
ShippingServiceDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Description: (this.Description === undefined)? null : this.Description,
		ExpeditedService: (this.ExpeditedService === undefined)? null : this.ExpeditedService,
		InternationalService: (this.InternationalService === undefined)? null : this.InternationalService,
		ShippingService: (this.ShippingService === undefined)? null : this.ShippingService,
		ShippingServiceID: (this.ShippingServiceID === undefined)? null : this.ShippingServiceID,
		ShippingTimeMax: (this.ShippingTimeMax === undefined)? null : this.ShippingTimeMax,
		ShippingTimeMin: (this.ShippingTimeMin === undefined)? null : this.ShippingTimeMin,
		ShippingServiceCode: (this.ShippingServiceCode === undefined)? null : this.ShippingServiceCode.toJSON(),
		ServiceType: (this.ServiceType === undefined)? null : this.ServiceType,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage,
		DimensionsRequired: (this.DimensionsRequired === undefined)? null : this.DimensionsRequired,
		ValidForSellingFlow: (this.ValidForSellingFlow === undefined)? null : this.ValidForSellingFlow,
		SurchargeApplicable: (this.SurchargeApplicable === undefined)? null : this.SurchargeApplicable,
		ShippingCarrier: (this.ShippingCarrier === undefined)? null : this.ShippingCarrier,
		CODService: (this.CODService === undefined)? null : this.CODService,
		DeprecationDetails: (this.DeprecationDetails === undefined)? null : this.DeprecationDetails,
		MappedToShippingServiceID: (this.MappedToShippingServiceID === undefined)? null : this.MappedToShippingServiceID,
		CostGroupFlat: (this.CostGroupFlat === undefined)? null : this.CostGroupFlat,
		ShippingServicePackageDetails: (this.ShippingServicePackageDetails === undefined)? null : this.ShippingServicePackageDetails,
		WeightRequired: (this.WeightRequired === undefined)? null : this.WeightRequired,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime,
		ShippingCategory: (this.ShippingCategory === undefined)? null : this.ShippingCategory
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
module.exports = ShippingServiceDetailsType;