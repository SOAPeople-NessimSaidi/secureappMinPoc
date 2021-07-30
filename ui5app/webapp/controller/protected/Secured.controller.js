sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("soa.poc.ui5app.controller.protected.Secured", {

        /**
         * Object from Session Storage
         */
        transferredData: null,

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf test.pneu.app.AuthTestApp.view.Secured
		 */
		onInit: function () {
            
        },
        
        /**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf test.pneu.app.AuthTestApp.view.Secured
		 */
        onBeforeRendering: function () {
            this._loadCtxData();
        },
 
		onLogout: function () {
            location.assign("do/logout");
        },

        onNavBack: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home", {});
        },

        /**
         * Manually load session storage
         */
        onLoadCtx: function() {
            this._loadCtxData();
        },

        /**
         * Retreive session storage data
         */
        _loadCtxData: function() {
            let someValue = sessionStorage.getItem('someValue');
            let sessionId = sessionStorage.getItem('sessionId');
            let someObj = JSON.parse(sessionStorage.getItem('someObj'));
            this.transferredData = someObj;

            this.byId('ctxInfoTxt').setText('Some Value: ' + someValue + '\nsessionId: ' + sessionId); 
        }

	});

});