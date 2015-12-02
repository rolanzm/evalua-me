/**
 * Created by Cesar on 3/11/15.
 */
RendirExamen.getAngular().factory('AlumnoBundle_RendirExamen_RendirExamenType', function (EvaluaMe) {
    var cargarFormulario = function (string) {
        EvaluaMe.init();
        //AQUI SE DEBEN CARGAR LOS CONTROLES JQWIDGETS


        $("#Minutos").jqxNumberInput({
            width: 70,
            height: 25,
            decimal: 0,
            decimalDigits: 0,
            min: 1,
            spinButtons: true,
            inputMode: 'simple'
        });

        $("#btnSave").jqxButton({
            width: 120,
            height: 40,
            theme: theme
        });

        $("#jqxListBox").jqxListBox({
            //source: dataAdapter,
            //displayMember: "npregunta",
            //valueMember: "codpreg",
            width: '100%',
            height: '100%',
            theme: theme
        });

    }
    return {
        cargarFormulario: cargarFormulario
    }
});

