var SellingManagerAlertTypeCodeType = require('./SellingManagerAlertTypeCodeType'),
	SellingManagerSoldListingsPropertyTypeCodeType = require('./SellingManagerSoldListingsPropertyTypeCodeType'),
	SellingManagerInventoryPropertyTypeCodeType = require('./SellingManagerInventoryPropertyTypeCodeType'),
	SellingManagerAutomationPropertyTypeCodeType = require('./SellingManagerAutomationPropertyTypeCodeType'),
	SellingManagerPaisaPayPropertyTypeCodeType = require('./SellingManagerPaisaPayPropertyTypeCodeType'),
	SellingManagerGeneralPropertyTypeCodeType = require('./SellingManagerGeneralPropertyTypeCodeType');

function SellingManagerAlertType(AlertType, SoldAlert, InventoryAlert, AutomationAlert, PaisaPayAlert, GeneralAlert, DurationInDays, Count) {

	/**
	  Documentation
	   
                Type defining the Alert container, which contains summary information on one type of Selling Manager alert.
            
	 */

	/**
	 * Arrays
	 */
	var _AlertType;
	var _SoldAlert;
	var _InventoryAlert;
	var _AutomationAlert;
	var _PaisaPayAlert;
	var _GeneralAlert;
	Object.defineProperty(this, 'AlertType', {
		 get: function(){
			 return _AlertType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAlertTypeCodeType){ 
					_AlertType = value; 
				}else{
					console.log('AlertType expects type SellingManagerAlertTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SoldAlert', {
		 get: function(){
			 return _SoldAlert;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerSoldListingsPropertyTypeCodeType){ 
					_SoldAlert = value; 
				}else{
					console.log('SoldAlert expects type SellingManagerSoldListingsPropertyTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InventoryAlert', {
		 get: function(){
			 return _InventoryAlert;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerInventoryPropertyTypeCodeType){ 
					_InventoryAlert = value; 
				}else{
					console.log('InventoryAlert expects type SellingManagerInventoryPropertyTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AutomationAlert', {
		 get: function(){
			 return _AutomationAlert;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutomationPropertyTypeCodeType){ 
					_AutomationAlert = value; 
				}else{
					console.log('AutomationAlert expects type SellingManagerAutomationPropertyTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaisaPayAlert', {
		 get: function(){
			 return _PaisaPayAlert;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerPaisaPayPropertyTypeCodeType){ 
					_PaisaPayAlert = value; 
				}else{
					console.log('PaisaPayAlert expects type SellingManagerPaisaPayPropertyTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'GeneralAlert', {
		 get: function(){
			 return _GeneralAlert;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerGeneralPropertyTypeCodeType){ 
					_GeneralAlert = value; 
				}else{
					console.log('GeneralAlert expects type SellingManagerGeneralPropertyTypeCodeType');
				}
			}
		}
	});
	this.AlertType = AlertType;
	this.SoldAlert = SoldAlert;
	this.InventoryAlert = InventoryAlert;
	this.AutomationAlert = AutomationAlert;
	this.PaisaPayAlert = PaisaPayAlert;
	this.GeneralAlert = GeneralAlert;
	this.DurationInDays = DurationInDays;
	this.Count = Count;
}
SellingManagerAlertType.prototype.toJSON = function(with_null) {
	var json = { 
		AlertType: (this.AlertType === undefined)? null : this.AlertType.toJSON(),
		SoldAlert: (this.SoldAlert === undefined)? null : this.SoldAlert.toJSON(),
		InventoryAlert: (this.InventoryAlert === undefined)? null : this.InventoryAlert.toJSON(),
		AutomationAlert: (this.AutomationAlert === undefined)? null : this.AutomationAlert.toJSON(),
		PaisaPayAlert: (this.PaisaPayAlert === undefined)? null : this.PaisaPayAlert.toJSON(),
		GeneralAlert: (this.GeneralAlert === undefined)? null : this.GeneralAlert.toJSON(),
		DurationInDays: (this.DurationInDays === undefined)? null : this.DurationInDays,
		Count: (this.Count === undefined)? null : this.Count
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
module.exports = SellingManagerAlertType;