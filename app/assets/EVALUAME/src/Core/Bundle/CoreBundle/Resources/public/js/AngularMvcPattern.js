/**
 * Author:
 * @param dirModule
 * @constructor
 */
function AngularMvcPattern(moduleBundle, structure, dirModule) {
    //Declarando variables
    this.structure = {};
    this.moduleName = "";
    this.bundleName = undefined;
    this.isBundleBool = true;
    this.submodules = [];
    this.dirModule = dirModule;
    //Declarando funciones
    this.setSubmodules = function (submodules) {
        var arrResultSubmodules = [];
        for (var i = 0; i < submodules.length; i++) {
            if (Object.prototype.toString.call(submodules[i]) === '[object Array]') {
                if (submodules[i][1] == true) {
                    arrResultSubmodules.push(this.bundleName + submodules[i][0]);
                } else {
                    arrResultSubmodules.push(submodules[i][0]);
                }
            } else {
                arrResultSubmodules.push(this.bundleName + submodules[i]);
            }
        }
        this.submodules = arrResultSubmodules;
    };
    this.setModule = function (name, structure) {
        this.initModuleBundle(name, structure);
        if (this.isBundle()) {
            console.log("Por favor usar la función setBundle");
            return false;
        }
        this.moduleName = name;
    };
    this.setBundle = function (name, structure) {
        this.initModuleBundle(name, structure);
        if (!this.isBundle()) {
            console.log("Por favor usar la función setModule");
            return false;
        }
        this.bundleName = name;
    };
    this.initModuleBundle = function (name, structure) {
        this.structure = structure;
        if (structure !== undefined) {
            if (structure.dirModule !== undefined) {
                this.dirModule = structure.dirModule;
            }
            if (structure.bundleName !== undefined) {
                this.bundleName = structure.bundleName;
            }
        }
    };
    this.verifyIsBundle = function (moduleBundle) {
        if (moduleBundle.substr(moduleBundle.length - 6) == 'Bundle') {
            this.isBundleBool = true;
        } else {
            this.isBundleBool = false;
        }
    };
    this.isBundle = function () {
        return this.isBundleBool;
    };
    this.execute = function () {
        var angularModuleName = "";
        if (this.isBundle()) {
            angularModuleName = this.bundleName;
        } else {
            angularModuleName = this.moduleName;
        }
        var module = "";
        if (this.bundleName == undefined) {
            module = angularModuleName;
        } else {
            if (this.bundleName == angularModuleName) {
                module = angularModuleName;
            } else {
                module = this.bundleName + angularModuleName;
            }
        }
        this.angular = angular.module(module, this.submodules);
    };
    this.getView = function () {
        var path = "";
        var viewSub = "";
        var splitDirModule = this.dirModule.split('/');
        var bundleRoot = this.bundleName.replace(splitDirModule[1], '');
        if (this.isBundle()) {
            path = this.dirModule + '/Bundle/' + bundleRoot + '/Resources/views';
        } else {
            if (!this.structure.isBundle()) {
                viewSub = this.createPathViewModules(this.structure) + '/' + this.moduleName;
            } else {
                viewSub = this.moduleName;
            }
            path = this.dirModule + '/Bundle/' + bundleRoot + '/Resources/views/' + viewSub;
        }
        return path;
    };
    this.createPathViewModules = function (structure) {
        var pathViewModules = "";
        if (structure.structure !== undefined) {
            pathViewModules += ((structure.structure.moduleName != "") ? (structure.structure.moduleName + '/') : "") + structure.moduleName;
            this.createPathViewModules(structure.structure);
        } else {
            return false;
        }
        return pathViewModules;
    };
    this.getBundleName = function () {
        return this.bundleName;
    };
    this.getDirModule = function () {
        return this.dirModule;
    };
    this.getAngular = function () {
        return this.angular;
    };
    this.__constructor = function () {
        this.verifyIsBundle(moduleBundle);
        if (this.isBundle()) {
            this.setBundle(moduleBundle, structure);
        } else {
            this.setModule(moduleBundle, structure);
        }
    }
    this.__constructor();
}