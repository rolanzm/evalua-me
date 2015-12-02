/**
 * Created by Cesar on 3/11/15.
 */
RendirExamen.getAngular().controller('AlumnoBundle:RendirExamen/rendirExamen:manage',
    function ($scope, $http, $location, $routeParams,AlumnoBundle_RendirExamen_RendirExamenType) {
        AlumnoBundle_RendirExamen_RendirExamenType.cargarFormulario();
    });

