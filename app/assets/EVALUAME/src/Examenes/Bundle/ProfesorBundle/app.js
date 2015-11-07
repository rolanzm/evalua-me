/**
 * Created by Cesar on 3/11/15.
 */
var ExamenesProfesorBundle = new AngularMvcPattern('ExamenesProfesorBundle', Examenes);
ExamenesProfesorBundle.setSubmodules(['CrearExamen','ListarExamenes','ResultadoExamen']);
ExamenesProfesorBundle.execute();

var CrearExamen = new AngularMvcPattern('CrearExamen', ExamenesProfesorBundle);
CrearExamen.execute();

var ListarExamenes = new AngularMvcPattern('ListarExamenes', ExamenesProfesorBundle);
ListarExamenes.execute();

var ResultadoExamen = new AngularMvcPattern('ResultadoExamen', ExamenesProfesorBundle);
ResultadoExamen.execute();