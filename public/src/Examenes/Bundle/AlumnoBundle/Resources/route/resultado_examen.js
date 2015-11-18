/**
 * Created by Cesar on 3/11/15.
 */

ResultadoExamen.getAngular().config((
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/examenes/alumno/resultado-examen/', {
                templateUrl: RendirExamen.getView() + '/ResultadoExamen.html',
                controller: 'ExamenesAlumnoBundle:ResultadoExamen/ResultadoExamen:manage'
            })
            .otherwise({
                redirectTo: '/'
            })
    }));