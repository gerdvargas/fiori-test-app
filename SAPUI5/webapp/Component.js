sap.ui.define([
    "DTT/SAPUI5/model/Models",
    // "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent",
    "./controller/HelloDialog"
],
    /**
     * @param{typeof sap.ui.core.UIComponent} UIComponent
     */
    function(Models, UIComponent, HelloDialog){
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

                // var i18nModel = new ResourceModel({
                //     bundleName: "DTT.SAPUI5.i18n.i18n"
                // });
                // this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());
                this.getRouter().initialize();
            },
            exit:function() {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog:function() {
                this._helloDialog.open();
            }
        });
    }
);