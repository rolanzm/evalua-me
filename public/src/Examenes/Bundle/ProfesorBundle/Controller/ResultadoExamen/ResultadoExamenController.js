/**
 * Created by ctacuri on 04/11/2015.
 */
ResultadoExamen.getAngular().controller('ProfesorBundle:ResultadoExamen/ResultadoExamen:manage',
    function ($scope, $http, $location, $routeParams,ProfesorBundle_ResultadoExamen_ResultadoExamenType) {
        ProfesorBundle_ResultadoExamen_ResultadoExamenType.cargarFormulario();
    });