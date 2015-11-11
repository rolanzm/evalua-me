/**
 * Created by ctacuri on 04/11/2015.
 */
ResultadoExamen.getAngular().factory('AlumnoBundle_ResultadoExamen_ResultadoExamenType', function (EvaluaMe) {
    var cargarFormulario = function (string) {
        EvaluaMe.init();
        //AQUI SE DEBEN CARGAR LOS CONTROLES JQWIDGETS

    }
    return {
        cargarFormulario: cargarFormulario
    }
});
