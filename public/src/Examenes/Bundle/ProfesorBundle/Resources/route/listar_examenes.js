/**
 * Created by Cesar on 4/11/15.
 */
ListarExamenes.getAngular().config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/examenes/profesor/listar-examenes/', {
            templateUrl: ListarExamenes.getView() + '/listarExamenes.html',
            controller: 'ProfesorBundle:ListarExamenes/ListarExamenes:manage'
        })
        .otherwise({
            redirectTo: '/'
        })
});