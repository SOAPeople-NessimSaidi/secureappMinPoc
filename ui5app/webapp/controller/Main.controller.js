sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/util/uid"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, uid) {
        "use strict";

        return Controller.extend("soa.poc.ui5app.controller.Main", {
            onInit: function () {

            },

            onLogin: function (oEvent) {
                this._storeSessionCtx();
                this._navToSecured();
            },

            /**
             * 
             */
            _storeSessionCtx: function () {
                let someValue = this.byId('someValue').getValue();
                // serialize complex data
                let someObj = JSON.stringify(
                    {
                        "ID": "90000000",
                        "NoteId": "Radwechsel (90000000)",
                        "Title": "Radwechsel (90000000)",
                        "Description": "Sondermaterial",
                        "Note": "Bei der Auswahl dieses Materials sollte Pop-Up kommen mit der Frage, ob Ihre Räder bei der Pneuhage eingelagert sind.",
                        "ServiceCategory": "010",
                        "Application": "",
                        "VehicleType": "PKW",
                        "TUEVService": false,
                        "IsAdditionalService": false,
                        "Branch": "",
                        "ServiceLift": "",
                        "Duration": 0,
                        "IsPrime": false,
                        "IsSelected": false,
                        "IsKontingent": false,
                        "HasSubstitutionService": true,
                        "PopupText": "Sind Ihre Räder bei uns eingelagert?"
                    }
                );
                sessionStorage.setItem('someValue', someValue);
                // send some generated value e.g. uid
                sessionStorage.setItem('sessionId', uid());
                sessionStorage.setItem('someObj', someObj);
            },

            /**
             * Internal routing to next (secured) view
             */
            _navToSecured: function () {
                // not using internal routing but direct browser navigation
                //var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //oRouter.navTo("secured", {});
                //oRouter.getTargets().display("TargetSecured");

                location.assign("#secure");
            }
        });
    });