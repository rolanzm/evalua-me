/**
 * Created by Cesar on 3/11/15.
 */
ListarExamenes.getAngular().controller('ProfesorBundle:ListarExamenes/ListarExamenes:manage',
    function ($scope, $http, $location, $routeParams,ProfesorBundle_ListarExamenes_ListarExamenesType) {
        ProfesorBundle_ListarExamenes_ListarExamenesType.cargarFormulario();
    });

