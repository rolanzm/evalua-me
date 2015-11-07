/**
 * Created by Cesar on 6/11/15.
 */
ResultadoExamen.getAngular().config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/examenes/profesor/resultado-examen/resultado-examen.html', {
            templateUrl: ResultadoExamen.getView() + '/ResultadoExamen.html',
            controller: 'ProfesorBundle:ResultadoExamen/ResultadoExamen:manage'
        })
        .otherwise({
            redirectTo: '/'
        })
});