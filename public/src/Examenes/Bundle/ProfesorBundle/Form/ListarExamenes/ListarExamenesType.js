/**
 * Created by Cesar on 3/11/15.
 */
ListarExamenes.getAngular().factory('ProfesorBundle_ListarExamenes_ListarExamenesType', function (EvaluaMe) {
    var cargarFormulario = function (string) {
        EvaluaMe.init();
        //AQUI SE DEBEN CARGAR LOS CONTROLES JQWIDGETS

        var url = "EVALUAME/datasource/dataNotasAlumnos.json";
        // prepare the data
        var source =
        {
            datatype: "json",
            datafields: [
                { name: 'curso', type: 'string' },
                { name: 'codexamen', type: 'string' },
                { name: 'npreguntas', type: 'string' },
                { name: 'disponible', type: 'string' }
            ],
            url: url
        };
        var dataAdapter = new $.jqx.dataAdapter(source);

        console.log(url);
       $("#jqxGrid").jqxGrid({
            theme: theme,
            width: '100%',
            height: vHeight,
            source: dataAdapter,
            pageable: false,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: false,
            showtoolbar: true,
            selectionmode: 'singlerow',
            columns: [
                { text: 'Curso', datafield: 'curso', align: 'center', cellsalign: 'left', width: '70%' },
                { text: 'Cod. Examen', datafield: 'codexamen', align: 'center', cellsalign: 'right', width: '10%' },
                { text: '# Preguntas', datafield: 'npreguntas', align: 'center', cellsalign: 'right', cellsformat: 'd0', width: '10%' },
                { text: 'Disponible', datafield: 'disponible', align: 'center', cellsalign: 'right', width: '10%' }
            ]
            ,rendertoolbar: function (toolbar) {
                var me = this;
                var container = $("<div style='margin: 5px;'></div>");
                var btn = $("<input type='button' value='Agregar' id='btnAdd' style='float: right; ' />").jqxButton({ width: '100', theme: theme});

                toolbar.append(container);
                container.append(btn);
            }
        });



    }
    return {
        cargarFormulario: cargarFormulario
    }
});

