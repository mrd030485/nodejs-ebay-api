var ItemListCustomizationType = require('../../Trading/ItemListCustomizationType');

function GetMyeBaySellingRequestType(ScheduledList, ActiveList, SoldList, UnsoldList, BidList, DeletedFromSoldList, DeletedFromUnsoldList, SellingSummary, HideVariations) {

	/**
	  Documentation
	   Returns items from the Selling section of the user's My eBay account, including items that the user is currently selling (the Active list), items that have bids, sold items, and unsold items.
	 */

	/**
	 * Arrays
	 */
	var _ScheduledList;
	var _ActiveList;
	var _SoldList;
	var _UnsoldList;
	var _BidList;
	var _DeletedFromSoldList;
	var _DeletedFromUnsoldList;
	var _SellingSummary;
	Object.defineProperty(this, 'ScheduledList', {
		 get: function(){
			 return _ScheduledList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_ScheduledList = value; 
				}else{
					console.log('ScheduledList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ActiveList', {
		 get: function(){
			 return _ActiveList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_ActiveList = value; 
				}else{
					console.log('ActiveList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SoldList', {
		 get: function(){
			 return _SoldList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_SoldList = value; 
				}else{
					console.log('SoldList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UnsoldList', {
		 get: function(){
			 return _UnsoldList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_UnsoldList = value; 
				}else{
					console.log('UnsoldList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BidList', {
		 get: function(){
			 return _BidList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_BidList = value; 
				}else{
					console.log('BidList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeletedFromSoldList', {
		 get: function(){
			 return _DeletedFromSoldList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_DeletedFromSoldList = value; 
				}else{
					console.log('DeletedFromSoldList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeletedFromUnsoldList', {
		 get: function(){
			 return _DeletedFromUnsoldList;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_DeletedFromUnsoldList = value; 
				}else{
					console.log('DeletedFromUnsoldList expects type ItemListCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingSummary', {
		 get: function(){
			 return _SellingSummary;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemListCustomizationType){ 
					_SellingSummary = value; 
				}else{
					console.log('SellingSummary expects type ItemListCustomizationType');
				}
			}
		}
	});
	this.ScheduledList = ScheduledList;
	this.ActiveList = ActiveList;
	this.SoldList = SoldList;
	this.UnsoldList = UnsoldList;
	this.BidList = BidList;
	this.DeletedFromSoldList = DeletedFromSoldList;
	this.DeletedFromUnsoldList = DeletedFromUnsoldList;
	this.SellingSummary = SellingSummary;
	this.HideVariations = HideVariations;
}
GetMyeBaySellingRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ScheduledList: (this.ScheduledList === undefined)? null : this.ScheduledList.toJSON(),
		ActiveList: (this.ActiveList === undefined)? null : this.ActiveList.toJSON(),
		SoldList: (this.SoldList === undefined)? null : this.SoldList.toJSON(),
		UnsoldList: (this.UnsoldList === undefined)? null : this.UnsoldList.toJSON(),
		BidList: (this.BidList === undefined)? null : this.BidList.toJSON(),
		DeletedFromSoldList: (this.DeletedFromSoldList === undefined)? null : this.DeletedFromSoldList.toJSON(),
		DeletedFromUnsoldList: (this.DeletedFromUnsoldList === undefined)? null : this.DeletedFromUnsoldList.toJSON(),
		SellingSummary: (this.SellingSummary === undefined)? null : this.SellingSummary.toJSON(),
		HideVariations: (this.HideVariations === undefined)? null : this.HideVariations
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
module.exports = GetMyeBaySellingRequestType;