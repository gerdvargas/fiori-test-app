sap.ui.define([
    "DTT/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
    /**
     * @param{typeof sap.ui.core.UIComponent} UIComponent
     */
    function(Models, ResourceModel, UIComponent){
        return UIComponent.extend("DTT.SAPUI5.Component", {
            
            metadata:{
                manifest: "json"
                // "rootView":{
                //     "viewName": "DTT.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
            },
            
            init:function(){
                UIComponent.prototype.init.apply(
                    this, arguments
                );
                this.setModel(Models.createRecipient());

                var i18nModel = new ResourceModel({
                    bundleName: "DTT.SAPUI5.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");
            }
        });
    }
);