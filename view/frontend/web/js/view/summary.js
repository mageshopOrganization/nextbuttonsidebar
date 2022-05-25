define([
	'jquery',
	'ko',
	'Magento_Checkout/js/view/summary',
	'Magento_Checkout/js/model/step-navigator',
	'Magento_Customer/js/model/customer'
], function($, ko, Component, stepNavigator, customer) {
	'use strict';
	
	return Component.extend({				
		isVisibleShippingButton: function () {
			return stepNavigator.getActiveItemIndex();			
		},
		isLoggedIn: function () {
			return customer.isLoggedIn();
		},
		initialize: function () {				
			$(function() {
				$('body').on('click', '#continue-to-payment-trigger', function () {
					$('#shipping-method-buttons-container').find('.action.continue.primary').trigger('click');
				});
			});
		
			var self = this;
			this._super();
		}
	});
});