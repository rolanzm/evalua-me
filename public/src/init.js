var EvaluaMe = new AngularMvcPattern('EvaluaMe');
EvaluaMe.setSubmodules([
    ['Examenes', false]
]);
EvaluaMe.execute();

var Examenes = new AngularMvcPattern('Examenes', EvaluaMe, 'src/Examenes');
Examenes.setSubmodules([
    ['ngRoute', false],
    ['ExamenesAlumnoBundle', false],
    ['ExamenesProfesorBundle', false]
]);
Examenes.execute();

var shortDateFormat = 'yyyyMMdd';
var shortDatePeriodo = 'yyyy-MM';
var hour = 'HH:mm a';
var tiempo = 'HH:mm';
var theme = "custom";
var vHeight = $(window).height() - 50;

EvaluaMe.getAngular().service('EvaluaMe', function () {
    this.daysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    }
    this.init = function () {
        //$('button').jqxButton({theme: theme});
        $('input[type="date"]').each(function (i, dom) {
            $this = $(dom);
            $div = $('<div>').attr({id: $this.attr('id'), class: $this.attr('class'), style: $this.attr('style')});
            $div.jqxDateTimeInput({width: '100%', height: 20});
            $div.insertAfter($this);
            $this.remove();
        });

        $('input[type="money"]').each(function (i, dom) {
            $this = $(dom);
            $div = $('<div>').attr({id: $this.attr('id'), class: $this.attr('class'), style: $this.attr('style')});
            $div.jqxNumberInput({
                theme: theme,
                width: '100%',
                height: 20,
                inputMode: 'simple',
                spinButtons: true
            });
            $div.insertAfter($this);
            $this.remove();
        });
    }
});