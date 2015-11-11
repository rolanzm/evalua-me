/**
 * Created by ctacuri on 04/11/2015.
 */
ResultadoExamen.getAngular().controller('AlumnoBundle:ResultadoExamen/ResultadoExamen:manage',
    function ($scope, $http, $location, $routeParams,AlumnoBundle_RendirExamen_RendirExamenType) {
        AlumnoBundle_ResultadoExamen_ResultadoExamenType.cargarFormulario();
    });