function jqxDropDownListConstructor(customOptions) {
    this.defaults = {
        filterable: true,
        selectedIndex: 0,
        width: '100%',
        searchMode: "containsignorecase",
        autoDropDownHeight: true,
        height: 21,
        valueMember: "value",
        displayMember: "html",
        theme: 'custom'
    };
    this.customOptions = customOptions;
    this.jqxDropDownListAdapter = function (localData, id) {
        var id = id || 'id';
        var source =
        {
            datatype: "json",
            datafields: [
                {name: 'value'},
                {name: 'html'}
            ],
            id: id,
            localData: localData
        };
        // create a new instance of the jqx.dataAdapter.
        this.dataAdapter = new $.jqx.dataAdapter(source);
        this.get = function () {
            return this.dataAdapter;
        }
    }
    this.getOptions = function () {
        return $.extend(this.defaults, this.customOptions, {source: new this.jqxDropDownListAdapter(this.customOptions.source).get()});
    }
}

function jqxTabsConstructor(customOptions) {
    this.defaults = {
        width: '100%',
        height: 'auto',
        position: 'top',
        theme: 'custom'
    };
    this.customOptions = customOptions;
    this.getOptions = function () {
        return $.extend(this.defaults, this.customOptions);
    }
}

function jqxGridConstructor(customOptions) {
    this.defaults = {
        filterable: true,
        sortable: true,
        width: '99.8%',
        columnsresize: true,
        theme: 'custom',
        columns: [
            {
                text: '#', sortable: false, filterable: false, editable: false,
                groupable: false, draggable: false, resizable: false,
                datafield: '', columntype: 'number', width: '5%',
                cellsrenderer: function (row, column, value) {
                    return "<div style='margin:4px; float: right'>" + (value + 1) + "</div>";
                }, pinned: true
            }
        ]
    };
    this.customOptions = customOptions;
    this.jqxGridAdapter = function (customOptions) {
        var source =
        {
            datatype: "json"
        };
        // create a new instance of the jqx.dataAdapter.
        this.dataAdapter = new $.jqx.dataAdapter($.extend(source, customOptions.source));
        this.get = function () {
            return this.dataAdapter;
        }
    }
    this.getOptions = function () {
        for (var i = 0; i < this.defaults.columns.length; i++) {
            this.customOptions.columns.push(this.defaults.columns[i]);
        }
        return $.extend(this.defaults, this.customOptions, {source: new this.jqxGridAdapter(this.customOptions).get()});
    }
}

function jqxListBoxConstructor(customOptions) {
    this.defaults = {
        theme: 'custom',
        width: '100%',
        source: {}
    };
    this.dataAdapter = function (localData, id) {
        var id = id || 'id';
        var source =
        {
            datatype: "json",
            datafields: [
                {name: 'label'},
                {name: 'value'},
                {name: 'group'}
            ],
            id: id,
            localData: localData
        };
        // create a new instance of the jqx.dataAdapter.
        this.dataAdapter = new $.jqx.dataAdapter(source);
        this.get = function () {
            return this.dataAdapter;
        }
    }
    this.customOptions = customOptions;
    this.getOptions = function () {
        return $.extend(this.defaults, this.customOptions, {source: new this.dataAdapter(this.customOptions.source).get()});
    }
}