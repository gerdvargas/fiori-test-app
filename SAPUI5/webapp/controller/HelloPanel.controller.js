//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    // "sap/ui/model/json/JSONModel"
    // "DTT/SAPUI5/model/Models",
    // "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     * @param{typeof sap.ui.model.json.JSONModel} JSONModel
     * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (Controller, MessageToast) {
        return Controller.extend("DTT.SAPUI5.controller.HelloPanel", {
            onInit: function() {
                // var i18nModel = new ResourceModel({bundleName:"DTT.SAPUI5.i18n.i18n"});
                // this.getView().setModel(i18nModel, "i18n");
                // this.getView().setModel(Models.createRecipient());
                // var oData = {
                //     recipient:{
                //         name:"World"
                //     }
                // };
                // var oModel=new JSONModel(oData);
                // this.getView().setModel(oModel);
                
            },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMSG = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMSG);
            }
        });
    });

