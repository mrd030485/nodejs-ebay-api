var PaginationType = require('../../Trading/PaginationType');

function GetSellerPaymentsRequestType(PaymentStatus, PaymentTimeFrom, PaymentTimeTo, Pagination) {

	/**
	  Documentation
	   <b>Half.com only.</b>&nbsp;Retrieves a summary of pending or paid payments that Half.com created for the seller identified by the authentication token in the request. Only retrieves payments that occurred within a particular
                    pay period. Each payment is for one order line item in one order. An order can contain order line items for multiple items from multiple sellers, but this call only retrieves payments that are relevant to one seller. The financial
                    value of a payment is typically based on an amount that a buyer paid to Half.com for an order line item, with adjustments for shipping costs and Half.com's commission. For most sellers, each month contains two pay periods: One from
                    the 1st to the 15th of the month, and one from the 16th to the last day of the month. Sellers can refer to their account information on the Half.com site to determine their pay periods. (You cannot retrieve a seller's pay periods by
                    using eBay API.) When a buyer makes a purchase and an order is created, Half.com creates a payment for the seller and marks it as Pending in the seller's Half.com account. Within a certain number of days after the pay period ends,
                    Half.com settles payments for that period and marks each completed payment as Paid. See the Half.com Web site online help for more information about how payments are managed.
	 */

	/**
	 * Arrays
	 */
	var _Pagination;
	Object.defineProperty(this, 'Pagination', {
		 get: function(){
			 return _Pagination;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationType){ 
					_Pagination = value; 
				}else{
					console.log('Pagination expects type PaginationType');
				}
			}
		}
	});
	this.PaymentStatus = PaymentStatus;
	this.PaymentTimeFrom = PaymentTimeFrom;
	this.PaymentTimeTo = PaymentTimeTo;
	this.Pagination = Pagination;
}
GetSellerPaymentsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PaymentStatus: (this.PaymentStatus === undefined)? null : this.PaymentStatus,
		PaymentTimeFrom: (this.PaymentTimeFrom === undefined)? null : this.PaymentTimeFrom,
		PaymentTimeTo: (this.PaymentTimeTo === undefined)? null : this.PaymentTimeTo,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON()
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
module.exports = GetSellerPaymentsRequestType;