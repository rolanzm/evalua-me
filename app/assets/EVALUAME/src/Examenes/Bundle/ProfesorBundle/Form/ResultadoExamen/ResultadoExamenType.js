/**
 * Created by Cesar on 3/11/15.
 */
ResultadoExamen.getAngular().factory('ProfesorBundle_ResultadoExamen_ResultadoExamenType', function (EvaluaMe) {
    var cargarFormulario = function (string) {
        EvaluaMe.init();
        //AQUI SE DEBEN CARGAR LOS CONTROLES JQWIDGETS

        $("#jqxToolBar").jqxToolBar({
            width: '100%', height: 35, theme: theme, tools: 'custom',
            initTools: function (type, index, tool, menuToolIninitialization) {
                switch (index) {
                    case 0:
                        var label = $("<div style='margin-top:5px;'>Resultado del examen A001 </div>");
                        tool.append(label);
                        break;
                }
            }
        });


        $("#GridNotasAlumons").jqxGrid({
            theme: theme,
            width: '100%',
            height: vHeight - 40,
            //source: dataAdapter01,
            pageable: false,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: false,
            showtoolbar: false,
            selectionmode: 'singlerow',
            columns: [
                { text: 'Alumno', datafield: 'Alumno', align: 'center', cellsalign: 'left', width: '80%' },
                { text: 'Nota', datafield: 'Nota', align: 'center', cellsalign: 'right', width: '20%' }
            ]
        });

        $("#GridNotasRangos").jqxGrid({
            theme: theme,
            width: '100%',
            height: vHeight  - 40,
            //source: dataAdapter02,
            pageable: false,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: false,
            showtoolbar: false,
            selectionmode: 'singlerow',
            columns: [
                { text: 'Intervalos', datafield: 'Rango', align: 'center', cellsalign: 'center', width: '80%' },
                { text: 'Alumnos', datafield: 'Cantidad', align: 'center', cellsalign: 'right', width: '20%' }
            ]
        });



    }
    return {
        cargarFormulario: cargarFormulario
    }
});

