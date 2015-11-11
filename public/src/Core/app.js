//Mantenimiento
var dirModule= 'src/Core';
var scripts = [];
//scripts.push('<script type="text/javascript" src="MantenimientoBundle/app.js"></script>');


////
for (var i = 0; i < scripts.length; i++) {
    var newString = scripts[i].replace('src="', 'src="' + dirModule + '/');
    document.write(newString);
}