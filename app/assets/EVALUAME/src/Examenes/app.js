/**
 * Created by Cesar on 3/11/15.
 */
var scripts = [];

//Alumno
scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/app.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/Resources/route/rendir_examen.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/Controller/RendirExamen/RendirExamenController.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/Form/RendirExamen/RendirExamenType.js"></script>');

scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/Resources/route/resultado_examen.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/Controller/ResultadoExamen/ResultadoExamenController.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/AlumnoBundle/Form/ResultadoExamen/ResultadoExamenType.js"></script>');


//Profesor
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/app.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Resources/route/crear_examen.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Controller/CrearExamen/CrearExamenController.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Form/CrearExamen/CrearExamenType.js"></script>');

scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Resources/route/listar_examenes.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Controller/ListarExamenes/ListarExamenesController.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Form/ListarExamenes/ListarExamenesType.js"></script>');

scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Resources/route/resultado_examen.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Controller/ResultadoExamen/ResultadoExamenController.js"></script>');
scripts.push('<script type="text/javascript" src="Bundle/ProfesorBundle/Form/ResultadoExamen/ResultadoExamenType.js"></script>');

for (var i = 0; i < scripts.length; i++) {
    var newString = scripts[i].replace('src="', 'src="' + Examenes.getDirModule() + '/');
    //console.log(newString);
    document.write(newString);
}
