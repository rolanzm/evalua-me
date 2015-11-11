/**
 * Created by ctacuri on 04/11/2015.
 */
CrearExamen.getAngular().controller('ProfesorBundle:CrearExamen/CrearExamen:manage',
    function ($scope, $http, $location, $routeParams,ProfesorBundle_CrearExamen_CrearExamenType) {
        ProfesorBundle_CrearExamen_CrearExamenType.cargarFormulario();
    });