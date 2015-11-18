/**
 * Created by Cesar on 3/11/15.
 */

RendirExamen.getAngular().config((
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/examenes/alumno/rendir-examen/', {
                templateUrl: RendirExamen.getView() + '/rendirExamen.html',
                controller: 'ExamenesAlumnoBundle:RendirExamen/RendirExamen:manage'
            })
            .otherwise({
                redirectTo: '/'
            })
    }));