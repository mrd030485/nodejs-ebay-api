var ListingTypeCodeType = require('./ListingTypeCodeType'),
	AmountType = require('./AmountType');

function ListingStartPriceDetailsType(Description, ListingType, StartPrice, DetailVersion, UpdateTime, MinBuyItNowPricePercent) {

	/**
	  Documentation
	   
                Type defining the <b>ListingStartPriceDetails</b> container returned in <b>GeteBayDetails</b>. The <b>ListingStartPriceDetails</b> container lists the minimum start price for auction listings, the minimum sale price
                for fixed-price listings, and the minimum percentage value that a Buy It Now price for an auction listing must be above the minimum start price for that same listing. <br><br> The <b>ListingStartPriceDetails</b>
                container is returned if <b>ListingStartPriceDetails</b> is included as a <b>DetailName</b> filter in the request, or if no lt;b>DetailName</b> filters are used in the request.
            
	 */

	/**
	 * Arrays
	 */
	var _ListingType;
	var _StartPrice;
	Object.defineProperty(this, 'ListingType', {
		 get: function(){
			 return _ListingType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingTypeCodeType){ 
					_ListingType = value; 
				}else{
					console.log('ListingType expects type ListingTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'StartPrice', {
		 get: function(){
			 return _StartPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_StartPrice = value; 
				}else{
					console.log('StartPrice expects type AmountType');
				}
			}
		}
	});
	this.Description = Description;
	this.ListingType = ListingType;
	this.StartPrice = StartPrice;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
	this.MinBuyItNowPricePercent = MinBuyItNowPricePercent;
}
ListingStartPriceDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Description: (this.Description === undefined)? null : this.Description,
		ListingType: (this.ListingType === undefined)? null : this.ListingType.toJSON(),
		StartPrice: (this.StartPrice === undefined)? null : this.StartPrice.toJSON(),
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime,
		MinBuyItNowPricePercent: (this.MinBuyItNowPricePercent === undefined)? null : this.MinBuyItNowPricePercent
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
module.exports = ListingStartPriceDetailsType;