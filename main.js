(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!created\">\n  <div class=\"input-group mb-3\">\n    <input type=\"text\" [(ngModel)]=\"genesisData\" class=\"form-control\" placeholder=\"Enter genesis node value\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n    <div class=\"input-group-append\">\n      <button (click)=\"saveGenesis()\" class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Save</button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"created\">\n  <ul class=\"list-group\">\n    <li *ngFor=\"let node of nodesList\" class=\"list-group-item\" (click)=\"selected(node)\">Cras justo odio</li>\n  </ul>\n  <br>\n  <app-node-commands></app-node-commands>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.genesisNode = {
            timestamp: new Date(),
            data: '',
            nodeNumber: 0,
            nodeId: '',
            referenceNode: '',
            childReferenceNodeId: [],
            genesisReferenceNodeId: '',
            hashValue: ''
        };
        if (this.genesisNode.data == '') {
            this.created = false;
        }
        else {
            this.created = true;
        }
    }
    AppComponent.prototype.saveGenesis = function () {
        var _this = this;
        this.genesisNode.timestamp = new Date();
        this.genesisNode.data = this.genesisData.toString();
        this.genesisNode.nodeNumber = 0;
        this.genesisNode.nodeId = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
        this.genesisNode.referenceNode = null;
        this.genesisNode.genesisReferenceNodeId = this.genesisNode.nodeId;
        this.genesisNode.hashValue = this.createHash(this.genesisNode);
        setTimeout(function () {
            _this.created = true;
        }, 1000);
    };
    AppComponent.prototype.createHash = function (node) {
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"]();
        md5.appendStr(node.timestamp.toString())
            .appendStr(node.data)
            .appendStr(node.nodeNumber.toString())
            .appendStr(node.nodeId);
        if (!node.referenceNode == null) {
            md5.appendStr(node.referenceNode);
        }
        for (var i = 0; i < node.childReferenceNodeId.length; ++i)
            md5.appendStr(node.childReferenceNodeId[i]);
        md5.appendStr(node.genesisReferenceNodeId);
        md5.end();
        return md5.getState().buffer;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_create_node_create_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/create-node/create-node.component */ "./src/app/pages/create-node/create-node.component.ts");
/* harmony import */ var _pages_node_commands_node_commands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/node-commands/node-commands.component */ "./src/app/pages/node-commands/node-commands.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_create_node_create_node_component__WEBPACK_IMPORTED_MODULE_4__["CreateNodeComponent"],
                _pages_node_commands_node_commands_component__WEBPACK_IMPORTED_MODULE_5__["NodeCommandsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/create-node/create-node.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-node/create-node.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/create-node/create-node.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-node/create-node.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-node works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/create-node/create-node.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/create-node/create-node.component.ts ***!
  \************************************************************/
/*! exports provided: CreateNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNodeComponent", function() { return CreateNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateNodeComponent = /** @class */ (function () {
    function CreateNodeComponent() {
    }
    CreateNodeComponent.prototype.ngOnInit = function () {
    };
    CreateNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-node',
            template: __webpack_require__(/*! ./create-node.component.html */ "./src/app/pages/create-node/create-node.component.html"),
            styles: [__webpack_require__(/*! ./create-node.component.css */ "./src/app/pages/create-node/create-node.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateNodeComponent);
    return CreateNodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/node-commands/node-commands.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/node-commands/node-commands.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/pages/node-commands/node-commands.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/node-commands/node-commands.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 50px;\">\n  <ul class=\"list-group\">\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Create Node</li>\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Edit value of Node</li>\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Verify owner</li>\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Transfer Ownership</li>\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Find Longest Chain of Genesis Node</li>\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Find Longest Chain of Node</li>\n    <li data-toggle=\"modal\" data-target=\"#exampleModal\">Merge 2 nodes</li>\n  </ul>\n</div>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" [(ngModel)]=\"nodeData\" class=\"form-control\" placeholder=\"Enter Node Value\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" (click)=\"saveNode()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/node-commands/node-commands.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/node-commands/node-commands.component.ts ***!
  \****************************************************************/
/*! exports provided: NodeCommandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeCommandsComponent", function() { return NodeCommandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeCommandsComponent = /** @class */ (function () {
    function NodeCommandsComponent() {
        this.thisNode = {
            timestamp: new Date(),
            data: '',
            nodeNumber: 0,
            nodeId: '',
            referenceNode: '',
            childReferenceNodeId: [],
            genesisReferenceNodeId: '',
            hashValue: ''
        };
    }
    NodeCommandsComponent.prototype.ngOnInit = function () {
    };
    NodeCommandsComponent.prototype.saveNode = function () {
        this.thisNode.timestamp = new Date();
        this.thisNode.data = this.thisNode.toString();
        this.thisNode.nodeNumber = 0;
        this.thisNode.nodeId = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
        this.thisNode.referenceNode = null;
        this.thisNode.genesisReferenceNodeId = this.thisNode.nodeId;
        this.thisNode.hashValue = this.createHash(this.thisNode);
    };
    NodeCommandsComponent.prototype.createHash = function (node) {
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"]();
        md5.appendStr(node.timestamp.toString())
            .appendStr(node.data)
            .appendStr(node.nodeNumber.toString())
            .appendStr(node.nodeId);
        if (!node.referenceNode == null) {
            md5.appendStr(node.referenceNode);
        }
        for (var i = 0; i < node.childReferenceNodeId.length; ++i)
            md5.appendStr(node.childReferenceNodeId[i]);
        md5.appendStr(node.genesisReferenceNodeId);
        md5.end();
        return md5.getState().buffer;
    };
    NodeCommandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node-commands',
            template: __webpack_require__(/*! ./node-commands.component.html */ "./src/app/pages/node-commands/node-commands.component.html"),
            styles: [__webpack_require__(/*! ./node-commands.component.css */ "./src/app/pages/node-commands/node-commands.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NodeCommandsComponent);
    return NodeCommandsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Posist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map