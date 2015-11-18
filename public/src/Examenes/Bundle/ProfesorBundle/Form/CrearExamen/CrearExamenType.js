/**
 * Created by Cesar on 3/11/15.
 */
CrearExamen.getAngular().factory('ProfesorBundle_CrearExamen_CrearExamenType', function (EvaluaMe) {
    var cargarFormulario = function (string) {
        EvaluaMe.init();
        //AQUI SE DEBEN CARGAR LOS CONTROLES JQWIDGETS


        $("#jqxToolBar").jqxToolBar({
            width: '100%', height: '100%', theme: theme, tools: 'custom | custom | custom | dropdownlist | custom | custom | custom',
            initTools: function (type, index, tool, menuToolIninitialization) {
                switch (index) {
                    case 0:
                        var label = $("<div class='Examen'>Examen: </div>");
                        tool.append(label);
                        break;
                    case 1:
                        var label = $("<div class='NumExamen'><b>A001</b></div>");
                        tool.append(label);
                        break;
                    case 2:
                        var label = $("<div class='Asignatura'>Asignatura: </div>");
                        tool.append(label);
                        break;
                    case 3:
                        var url = "datasource/dataListaAsignaturas.json";
                        // prepare the data
                        var source =
                        {
                            datatype: "json",
                            datafields: [
                                { name: 'id' },
                                { name: 'descripcion' }
                            ],
                            id: 'id',
                            url: url
                        };
                        var dataAdapter = new $.jqx.dataAdapter(source);
                        tool.jqxDropDownList({

                            width: 130,
                            height: 20,
                            source: dataAdapter,
                            displayMember: "descripcion",
                            valueMember: "id",
                            dropDownWidth: 450,
                            theme: theme
                        });
                        tool.jqxDropDownList('selectIndex', 1 );
                        tool.addClass("ListAsig");
                        break;
                    case 4:
                        var label = $("<div class='Minutos'>Minutos: </div>");
                        tool.append(label);
                        break;
                    case 5:
                        var input = $("<input type='number' name='minutes' class='NumMin' style='height:15px;text-align:right;' min='1' max='180' value='1'>");
                        tool.append(input);
                        //tool.jqxInput({ width: 100 });
                        break;
                    case 6:
                        var btn = $("<div id='btnSave' style='float: right; position: relative; margin-left: 30px; margin-top:4px; margin-right:5px; margin-bottom: 5px;'><img style='position: relative; margin-top: 12px;' src='images/save.png'/><span style='margin-left: 4px; position: relative; top: -3px;'>GUARDAR</span></div>");
                        tool.append(btn);
                        btn.jqxButton({ width:100, height: 40, theme: theme });
                        break;
                }
            }
        });

        $("#btnAddPreg").jqxButton({width: 120, height: 50, theme: theme});

        $("#btnDeletePreg").jqxButton({width: 60, height: 30, theme: theme});
        $("#btnAddRpta").jqxButton({width: 60, height: 30, theme: theme});

        var sourceDificultad = [
            "ALTA",
            "MEDIA",
            "BAJA"
        ];
        var sourceTipo = [
            "Tipo 01",
            "Tipo 02",
            "Tipo 03",
            "Tipo 04"
        ];
        var sourceTema = [
            "Tema 01",
            "Tema 02",
            "Tema 03",
            "Tema 04"
        ];

        $("#Dificultad").jqxDropDownList({ source: sourceDificultad, selectedIndex: 0, width: '80', height: '25', dropDownWidth: 250, autoDropDownHeight: true, theme: theme});
        $("#Tipo").jqxDropDownList({ source: sourceTipo, selectedIndex: 0, width: '80', height: '25', dropDownWidth: 250, autoDropDownHeight: true, theme: theme});
        $("#Tema").jqxDropDownList({ source: sourceTema, selectedIndex: 0, width: '80', height: '25', dropDownWidth: 250, autoDropDownHeight: true, theme: theme});


        $("#jqxListBox").jqxListBox({
            //source: dataAdapter,
            //displayMember: "npregunta",
            //valueMember: "codpreg",
            width: '100%',
            height: '100%',
            theme: theme
        });
        $('#jqxTextArea').jqxTextArea({
            placeHolder: 'Enter a sentence',
            height: 120,
            width: '100%',
            minLength: 1/*,
             source: quotes */
        });


    }
    return {
        cargarFormulario: cargarFormulario
    }
});

