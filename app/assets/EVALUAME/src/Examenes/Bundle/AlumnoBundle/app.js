/**
 * Created by Cesar on 3/11/15.
 */
var ExamenesAlumnoBundle = new AngularMvcPattern('ExamenesAlumnoBundle', Examenes);
ExamenesAlumnoBundle.setSubmodules(['RendirExamen','ResultadoExamen']);
ExamenesAlumnoBundle.execute();

var RendirExamen = new AngularMvcPattern('RendirExamen', ExamenesAlumnoBundle);
RendirExamen.execute();

var ResultadoExamen = new AngularMvcPattern('ResultadoExamen', ExamenesAlumnoBundle);
ResultadoExamen.execute();


