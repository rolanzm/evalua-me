/**
 * Created by Cesar on 4/11/15.
 */

CrearExamen.getAngular().config(
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/examenes/profesor/crear-examen/', {
                templateUrl: CrearExamen.getView() + '/crearExamen.html',
                controller: 'ProfesorBundle:CrearExamen/crearExamen:manage'
            })
            .otherwise({
                redirectTo: '/'
            })
    });

