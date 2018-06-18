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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _fares_fares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fares/fares.component */ "./src/app/fares/fares.component.ts");
/* harmony import */ var _listairports_listairports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listairports/listairports.component */ "./src/app/listairports/listairports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/fares', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'fares', component: _fares_fares_component__WEBPACK_IMPORTED_MODULE_3__["FaresComponent"] },
    { path: 'list-airports', component: _listairports_listairports_component__WEBPACK_IMPORTED_MODULE_4__["ListairportsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menu{\r\n    color:#2b3c9c;\r\n}\r\n#menu a{\r\n    color:#3f51b5;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n#menu a:hover{\r\n    text-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<nav id=\"menu\">\r\n    <a routerLink=\"/fares\">Fares</a>   <a routerLink=\"/dashboard\">Dashboard</a>   \r\n</nav>\r\n\r\n<hr style=\"\r\ncolor: #3f51b5;\r\nborder-top-color: #3f51b5;\r\nborder-bottom-color: #00a1de;\r\nborder: (1,5,10,20);\r\n\">\r\n\r\n<div style=\"color:#fff; margin-bottom:80px; margin-top:40px\">\r\n    <h1>Welcome to KLM Casex01</h1>\r\n    <h5>by Luis Bello Moraes</h5>\r\n  </div>\r\n\r\n  \r\n<router-outlet></router-outlet>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _interceptors_httpinterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/httpinterceptor */ "./src/app/interceptors/httpinterceptor.ts");
/* harmony import */ var _utils_searchfilterpipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/searchfilterpipe */ "./src/app/utils/searchfilterpipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fares_fares_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fares/fares.component */ "./src/app/fares/fares.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _listairports_listairports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./listairports/listairports.component */ "./src/app/listairports/listairports.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _utils_searchfilterpipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"],
                _fares_fares_component__WEBPACK_IMPORTED_MODULE_11__["FaresComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _listairports_listairports_component__WEBPACK_IMPORTED_MODULE_13__["ListairportsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_httpinterceptor__WEBPACK_IMPORTED_MODULE_8__["Interceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n    margin-top: 80px; text-align: center; width: 100%;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n  }\r\n.graph{\r\n    min-width:500px;\r\n    width:50%;\r\n    float: left;\r\n    padding: 60px;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607d8b;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card class=\"example-card\">\n\n  <mat-card-content>\n\n\n    \n\n      \n      <h5>Statistics for the application usage</h5>\n\n     <div id=\"endPointStats\" style=\"display: none;\">{{endPointStats}}</div>\n\n      \n      <div class=\"graph\">\n          <h4>Requests</h4>\n          <canvas id=\"requests\" width=\"300\" height=\"200\"></canvas></div>\n\n      \n      <div class=\"graph\">\n          <h4>Response Time</h4>\n          <canvas id=\"Responsetime\" width=\"300\" height=\"200\"></canvas></div>\n\n<div style=\"clear: both;\"></div>\n\n  \n\n  </mat-card-content>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.endPointStats = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPointStats;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/fares/fares.component.css":
/*!*******************************************!*\
  !*** ./src/app/fares/fares.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fares/fares.component.html":
/*!********************************************!*\
  !*** ./src/app/fares/fares.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-card class=\"example-card\">\n  \n    <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"changedStep($event)\"  (animationDone)=\"stepperAnimationDone()\">\n  \n      <mat-step [stepControl]=\"formOrigin\" editable=\"true\" #stepOrigin>\n        <form [formGroup]=\"formOrigin\">\n          <ng-template matStepLabel>Select your origin </ng-template>\n          <mat-form-field>\n  \n            <input type=\"text\" formControlName=\"originControl\" placeholder=\"From\" aria-label=\"From\" matInput [formControl]=\"originControl\"\n              [matAutocomplete]=\"autoOrig\">\n            <mat-autocomplete autoActiveFirstOption #autoOrig=\"matAutocomplete\" [displayWith]=\"locationDisplayFn\">\n              <mat-option *ngFor=\"let location of filteredOriginLocations$ | async \" [value]=\"location\">\n                {{ location.name }}\n              </mat-option>\n            </mat-autocomplete>\n  \n  \n  \n          </mat-form-field>\n  \n        </form>\n      </mat-step>\n  \n      <mat-step [stepControl]=\"formDestination\" editable=\"true\" #stepDestination>\n        <form [formGroup]=\"formDestination\">\n          <ng-template matStepLabel>Select your destination </ng-template>\n          <mat-form-field>\n  \n            <input type=\"text\" formControlName=\"destinationControl\" placeholder=\"To\" aria-label=\"To\" matInput [formControl]=\"destinationControl\"\n              [matAutocomplete]=\"autoDest\">\n            <mat-autocomplete autoActiveFirstOption #autoDest=\"matAutocomplete\" [displayWith]=\"locationDisplayFn\">\n              <mat-option *ngFor=\"let location of filteredDestinationLocations$ | async \" [value]=\"location\">\n                {{ location.name }}\n              </mat-option>\n            </mat-autocomplete>\n  \n          </mat-form-field>\n  \n        </form>\n      </mat-step>\n  \n  \n      <mat-step>\n        <ng-template matStepLabel>Fares</ng-template>\n  \n        <mat-card class=\"example-card\">\n  \n  \n          <div *ngIf=\"gotFares; then thenBlock else elseBlock\"></div>\n          <ng-template #thenBlock>\n  \n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>FARES</mat-card-title>\n              <mat-card-subtitle>For the selected locations</mat-card-subtitle>\n            </mat-card-header>\n  \n            <mat-card-content>\n  \n              <div style=\"padding-top:30px\">\n  \n                <div style=\"float: left;padding-left:50px;\">\n                  <div>From</div>\n                  <h4>{{originAirport.name}}</h4>\n                  <h6>latitude: {{originAirport.latitude}} | longitude: {{originAirport.longitude}}</h6>\n                  <h5>{{originAirport.description}}</h5>\n                </div>\n                <div style=\"float: left; padding-left:50px;\">\n                  <div>To</div>\n                  <h4>{{destinationAirport.name}}</h4>\n                  <h6>latitude: {{destinationAirport.latitude}} | longitude: {{destinationAirport.longitude}}</h6>\n                  <h5>{{destinationAirport.description}}</h5>\n                </div>\n              </div>\n  \n              <div style=\"clear: both; padding-top:30px;padding-left:50px;\">\n               <h2>{{fares.amount}} {{fares.currency}}</h2>\n                \n             \n              </div>\n            </mat-card-content>\n  \n  \n  \n          </ng-template>\n          <ng-template #elseBlock>\n  \n  \n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>Please wait</mat-card-title>\n              <mat-card-subtitle>while we fetch your fares</mat-card-subtitle>\n            </mat-card-header>\n  \n            <mat-card-content>\n              <div style=\"padding-left:50px; padding-top: 50px;\">\n                <mat-spinner></mat-spinner>\n              </div>\n  \n            </mat-card-content>\n  \n  \n          </ng-template>\n  \n  \n  \n        </mat-card>\n  \n  \n      </mat-step>\n    </mat-vertical-stepper>\n  \n  \n  </mat-card>"

/***/ }),

/***/ "./src/app/fares/fares.component.ts":
/*!******************************************!*\
  !*** ./src/app/fares/fares.component.ts ***!
  \******************************************/
/*! exports provided: FaresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaresComponent", function() { return FaresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaresComponent = /** @class */ (function () {
    function FaresComponent(_svc, fb) {
        this._svc = _svc;
        this.title = 'app';
        this.originControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.destinationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.originAirport = { 'name': '', 'latitude': '', 'longitude': '', 'description': 'description' };
        this.destinationAirport = { 'name': '', 'latitude': '', 'longitude': '', 'description': 'description' };
        this.gotFares = false;
        this.compareFnSortLocations = function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        };
        this.formOrigin = fb.group({
            originControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.formDestination = fb.group({
            destinationControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    FaresComponent.prototype.onChanges = function () {
        var _this = this;
        this.originControl.valueChanges.subscribe(function (val) {
            _this.gotFares = false;
        });
        this.destinationControl.valueChanges.subscribe(function (val) {
            _this.gotFares = false;
        });
    };
    FaresComponent.prototype.ngOnInit = function () {
        this.getLocationData();
        this.onChanges();
    };
    FaresComponent.prototype.getLocationData = function () {
        var _this = this;
        this._svc.getLocationData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.gotLocationsData(); }))
            .subscribe(function (res) { return _this.locations = res; });
        console.info('-- AppComponent getLocations()');
    };
    FaresComponent.prototype.gotLocationsData = function () {
        var _this = this;
        console.info('-- AppComponent gotLocations()');
        this.filteredOriginLocations$ = this.originControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return name ? _this.filterLocations(name) : _this.locations.slice().sort(_this.compareFnSortLocations); }));
        this.filteredDestinationLocations$ = this.destinationControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return name ? _this.filterLocations(name) : _this.locations.slice().sort(_this.compareFnSortLocations); }));
    };
    FaresComponent.prototype.filterLocations = function (search) {
        return this.locations.filter(function (location) {
            return location.name.toLowerCase().indexOf(search.toLowerCase()) > 0
                || location.code.toLowerCase().indexOf(search.toLowerCase()) > 0
                || location.description.toLowerCase().indexOf(search.toLowerCase()) > 0;
        }).sort(this.compareFnSortLocations);
    };
    FaresComponent.prototype.locationDisplayFn = function (location) {
        return location ? location.name : undefined;
    };
    FaresComponent.prototype.getFaresData = function (origin, dest) {
        var _this = this;
        this._svc.getFaresData(origin, dest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.gotFaresData(); }))
            .subscribe(function (res) { return _this.fares = res; });
        console.info('-- AppComponent getLocations()');
    };
    FaresComponent.prototype.gotFaresData = function () {
        this.originAirport = { 'name': this.originControl.value['name'], 'latitude': this.originControl.value['coordinates']['latitude'], 'longitude': this.originControl.value['coordinates']['longitude'], 'description': this.originControl.value['description'] };
        this.destinationAirport = { 'name': this.destinationControl.value['name'], 'latitude': this.destinationControl.value['coordinates']['latitude'], 'longitude': this.destinationControl.value['coordinates']['longitude'], 'description': this.destinationControl.value['description'] };
        this.gotFares = true;
    };
    FaresComponent.prototype.changedStep = function (event) {
        console.info('-- AppComponent changedStep() :', event);
        // lbm@theline
        // TODO:
        // There is an bug or miss implementation in the Form Controls. Using template 'Validators.required' option is not working.
        // Step 'select' mehtod is not working as well, must check that later...
        if (event['selectedIndex'] == 2 && (!this.destinationControl.pristine && !this.originControl.pristine)) {
            this.getFaresData(this.originControl.value['code'], this.destinationControl.value['code']);
        }
    };
    FaresComponent.prototype.stepperAnimationDone = function () {
        if (this.stepper.selectedIndex == 1) {
            if (this.originControl.pristine) {
                this.stepOrigin.select();
            }
        }
        else if (this.stepper.selectedIndex == 2) {
            if (this.destinationControl.pristine) {
                this.stepDestination.select();
            }
        }
    };
    FaresComponent.prototype.reset = function () {
        this.destinationControl.reset;
        this.originControl.reset;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepOrigin'),
        __metadata("design:type", Object)
    ], FaresComponent.prototype, "stepOrigin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepDestination'),
        __metadata("design:type", Object)
    ], FaresComponent.prototype, "stepDestination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], FaresComponent.prototype, "stepper", void 0);
    FaresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fares',
            template: __webpack_require__(/*! ./fares.component.html */ "./src/app/fares/fares.component.html"),
            styles: [__webpack_require__(/*! ./fares.component.css */ "./src/app/fares/fares.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FaresComponent);
    return FaresComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/httpinterceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/httpinterceptor.ts ***!
  \*************************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Interceptor = /** @class */ (function () {
    // Utility Class to Intecept Http calls
    function Interceptor() {
    }
    Interceptor.prototype.intercept = function (req, next) {
        console.info('-- Interceptor intercept() req.headers =', req.headers, ';');
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            console.info('Event =', event, ';');
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                console.info('-- Interceptor intercept() event.body =', event.body, ';');
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 403) {
                    console.log('err.error =', err.error, ';');
                }
                return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(err);
            }
        }));
    };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // Utility Class to Intecept Http calls
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/listairports/listairports.component.css":
/*!*********************************************************!*\
  !*** ./src/app/listairports/listairports.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listairports/listairports.component.html":
/*!**********************************************************!*\
  !*** ./src/app/listairports/listairports.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listairports works!\n</p>\n"

/***/ }),

/***/ "./src/app/listairports/listairports.component.ts":
/*!********************************************************!*\
  !*** ./src/app/listairports/listairports.component.ts ***!
  \********************************************************/
/*! exports provided: ListairportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListairportsComponent", function() { return ListairportsComponent; });
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

var ListairportsComponent = /** @class */ (function () {
    function ListairportsComponent() {
    }
    ListairportsComponent.prototype.ngOnInit = function () {
    };
    ListairportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listairports',
            template: __webpack_require__(/*! ./listairports.component.html */ "./src/app/listairports/listairports.component.html"),
            styles: [__webpack_require__(/*! ./listairports.component.css */ "./src/app/listairports/listairports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListairportsComponent);
    return ListairportsComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.endPointAirports = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endPointAirports;
        this.endPointFares = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endPointFares;
        this.endPointStats = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endPointStats;
    }
    DataService.prototype.getLocationData = function () {
        console.log('--DataService getLocationData()');
        return this._http.get(this.endPointAirports)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result['_embedded']['locations']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) {
            console.log('err.error =', err.error, ';');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    DataService.prototype.getFaresData = function (origin, destination) {
        console.log('--DataService getFaresData()');
        return this._http.get(this.endPointFares + '/' + origin + '/' + destination)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) {
            console.log('err.error =', err.error, ';');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    DataService.prototype.getStatsData = function () {
        console.log('--DataService getFaresData()');
        return this._http.get(this.endPointStats)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) {
            console.log('err.error =', err.error, ';');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/utils/searchfilterpipe.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/searchfilterpipe.ts ***!
  \*******************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, search) {
        console.info('-- SearchFilterPipe transform() value:', value, ' search:', search);
        if (!search) {
            return value;
        }
        var solution = value.filter(function (v) {
            if (!v) {
                return;
            }
            return (v.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                v.code.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                v.description.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        });
        return solution;
    };
    SearchFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'searchFilter' })
    ], SearchFilterPipe);
    return SearchFilterPipe;
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
    production: false,
    endPointAirports: 'http://localhost:9000/airports',
    endPointFares: 'http://localhost:9000/fares',
    endPointStats: 'http://localhost:9000/stats'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\lbm\Documents\TCS\KLM\ng6\lbmcasex01\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map