// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/ComponentContainer"
], 
/**
 * @param{typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
    function(ComponentContainer) {
        // eslint-disable-next-line no-undef
        // alert("UI5 Is Ready");
        "use strict";
        // XMLView.create({
        //     viewName:"DTT.SAPUI5.view.App"
        // }).then(function(oView){
        //     oView.placeAt("Contenido");
        // });
        new ComponentContainer({
            name: "DTT.SAPUI5",
            settings: {
                id: "SAPUI5"
            },
            async:true     
        }).placeAt("Contenido");
    });