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

module.exports = "<h1>{{title}}</h1>\r\n<nav id=\"menu\">\r\n    <a routerLink=\"/fares\">Fares</a>   <a routerLink=\"/dashboard\">Dashboard</a>     <a routerLink=\"/list-airports\">List airports</a>    \r\n</nav>\r\n\r\n<hr style=\"\r\ncolor: #3f51b5;\r\nborder-top-color: #3f51b5;\r\nborder-bottom-color: #00a1de;\r\nborder: (1,5,10,20);\r\n\">\r\n\r\n<div style=\"color:#fff; margin-bottom:80px; margin-top:40px\">\r\n    <h1>Welcome to KLM Casex01</h1>\r\n    <h5>by Luis Bello Moraes</h5>\r\n  </div>\r\n\r\n  \r\n<router-outlet></router-outlet>\r\n"

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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
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

module.exports = "\r\n  h4 {\r\n    position: relative;\r\n    margin-top: 80px; text-align: center; width: 100%;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n  }\r\n  .graph{\r\n    min-width:500px;\r\n    width:50%;\r\n    float: left;\r\n    padding: 60px;\r\n  }"

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

module.exports = "\n  <mat-card class=\"example-card\">\n  \n    \n    <h5>Find our exclusive fares!</h5>\n\n    <mat-vertical-stepper [linear]=\"true\" #stepper (selectionChange)=\"changedStep($event)\"  (animationDone)=\"stepperAnimationDone()\">\n  \n      <mat-step [stepControl]=\"formOrigin\" editable=\"true\" #stepOrigin>\n        <form [formGroup]=\"formOrigin\">\n          <ng-template matStepLabel>Select your origin </ng-template>\n          <mat-form-field>\n  \n            <input type=\"text\" formControlName=\"originControl\" placeholder=\"From\" aria-label=\"From\" matInput [formControl]=\"originControl\"\n              [matAutocomplete]=\"autoOrig\">\n            <mat-autocomplete autoActiveFirstOption #autoOrig=\"matAutocomplete\" [displayWith]=\"locationDisplayFn\">\n              <mat-option *ngFor=\"let location of filteredOriginLocations$ | async \" [value]=\"location\">\n                {{ location.name }}\n              </mat-option>\n            </mat-autocomplete>\n  \n  \n  \n          </mat-form-field>\n  \n        </form>\n      </mat-step>\n  \n      <mat-step [stepControl]=\"formDestination\" editable=\"true\" #stepDestination>\n        <form [formGroup]=\"formDestination\">\n          <ng-template matStepLabel>Select your destination </ng-template>\n          <mat-form-field>\n  \n            <input type=\"text\" formControlName=\"destinationControl\" placeholder=\"To\" aria-label=\"To\" matInput [formControl]=\"destinationControl\"\n              [matAutocomplete]=\"autoDest\">\n            <mat-autocomplete autoActiveFirstOption #autoDest=\"matAutocomplete\" [displayWith]=\"locationDisplayFn\">\n              <mat-option *ngFor=\"let location of filteredDestinationLocations$ | async \" [value]=\"location\">\n                {{ location.name }}\n              </mat-option>\n            </mat-autocomplete>\n  \n          </mat-form-field>\n  \n        </form>\n      </mat-step>\n  \n  \n      <mat-step>\n        <ng-template matStepLabel>Fares</ng-template>\n  \n        <mat-card class=\"example-card\">\n  \n  \n          <div *ngIf=\"gotFares; then thenBlock else elseBlock\"></div>\n          <ng-template #thenBlock>\n  \n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>FARES</mat-card-title>\n              <mat-card-subtitle>For the selected locations</mat-card-subtitle>\n            </mat-card-header>\n  \n            <mat-card-content>\n  \n              <div style=\"padding-top:30px\">\n  \n                <div style=\"float: left;padding-left:50px;\">\n                  <div>From</div>\n                  <h4>{{originAirport.name}}</h4>\n                  <h6>latitude: {{originAirport.latitude}} | longitude: {{originAirport.longitude}}</h6>\n                  <h5>{{originAirport.description}}</h5>\n                </div>\n                <div style=\"float: left; padding-left:50px;\">\n                  <div>To</div>\n                  <h4>{{destinationAirport.name}}</h4>\n                  <h6>latitude: {{destinationAirport.latitude}} | longitude: {{destinationAirport.longitude}}</h6>\n                  <h5>{{destinationAirport.description}}</h5>\n                </div>\n              </div>\n  \n              <div style=\"clear: both; padding-top:30px;padding-left:50px;\">\n               <h2>{{fares.amount}} {{fares.currency}}</h2>\n                \n             \n              </div>\n            </mat-card-content>\n  \n  \n  \n          </ng-template>\n          <ng-template #elseBlock>\n  \n  \n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>Please wait</mat-card-title>\n              <mat-card-subtitle>while we fetch your fares</mat-card-subtitle>\n            </mat-card-header>\n  \n            <mat-card-content>\n              <div style=\"padding-left:50px; padding-top: 50px;\">\n                <mat-spinner></mat-spinner>\n              </div>\n  \n            </mat-card-content>\n  \n  \n          </ng-template>\n  \n  \n  \n        </mat-card>\n  \n  \n      </mat-step>\n    </mat-vertical-stepper>\n  \n  \n  </mat-card>"

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

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }"

/***/ }),

/***/ "./src/app/listairports/listairports.component.html":
/*!**********************************************************!*\
  !*** ./src/app/listairports/listairports.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <mat-card class=\"example-card\">\n    \n      <h5 style=\"padding-bottom:40px;\"> Airport sortable paginated list. Extrapoints, yammy yammy!</h5>\n\n    <div class=\"mat-elevation-z8\">\n\n        <mat-form-field style=\"padding:20px;width:90%;\"> \n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n\n<table mat-table #table [dataSource]=\"dataSource\"  matSort matSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear  class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n\n\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"code\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> code </th>\n    <td mat-cell *matCellDef=\"let location\"> {{location.code}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> name </th>\n    <td mat-cell *matCellDef=\"let location\"> {{location.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"description\" >\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> description </th>\n    <td mat-cell *matCellDef=\"let location\"> {{location.description}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<mat-paginator [pageSizeOptions]=\"[10, 20, 40]\" showFirstLastButtons></mat-paginator>\n\n</div>\n\n</mat-card>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _fares_fares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fares/fares.component */ "./src/app/fares/fares.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListairportsComponent = /** @class */ (function (_super) {
    __extends(ListairportsComponent, _super);
    function ListairportsComponent(svc, fb) {
        var _this = _super.call(this, svc, fb) || this;
        _this.displayedColumns = ['code', 'name', 'description'];
        return _this;
    }
    ListairportsComponent.prototype.ngOnInit = function () {
        this.getLocationData();
    };
    ListairportsComponent.prototype.gAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        //merge(this.sort.sortChange, this.paginator.page).pipe().subscribe();
    };
    ListairportsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ListairportsComponent.prototype.gotLocationsData = function () {
        console.info('-- ListairportsComponent gotLocations()');
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.locations);
        this.dataSource.sort = this.sort;
        this.sortedData = this.locations.slice();
        this.dataSource.paginator = this.paginator;
    };
    ListairportsComponent.prototype.sortData = function (sort) {
        var data = this.locations.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'code': return compare(+a.code, +b.code, isAsc);
                case 'description': return compare(+a.description, +b.description, isAsc);
                default: return 0;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ListairportsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ListairportsComponent.prototype, "paginator", void 0);
    ListairportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listairports',
            template: __webpack_require__(/*! ./listairports.component.html */ "./src/app/listairports/listairports.component.html"),
            styles: [__webpack_require__(/*! ./listairports.component.css */ "./src/app/listairports/listairports.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ListairportsComponent);
    return ListairportsComponent;
}(_fares_fares_component__WEBPACK_IMPORTED_MODULE_3__["FaresComponent"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function DataService(_http, snackBar) {
        this._http = _http;
        this.snackBar = snackBar;
        this.endPointAirports = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endPointAirports;
        this.endPointFares = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endPointFares;
        this.endPointStats = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endPointStats;
    }
    DataService.prototype.getLocationData = function () {
        var _this = this;
        console.log('--DataService getLocationData()');
        return this._http.get(this.endPointAirports)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result['_embedded']['locations']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err, caught) {
            console.log('err.error =', err.error, ';');
            _this.dropMessage('Error getting Locations Data, please check your connection to the server.');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    DataService.prototype.getFaresData = function (origin, destination) {
        var _this = this;
        console.log('--DataService getFaresData()');
        return this._http.get(this.endPointFares + '/' + origin + '/' + destination)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err, caught) {
            console.log('err.error =', err.error, ';');
            _this.dropMessage('Error getting Fares Data, please check your connection to the server.');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    DataService.prototype.getStatsData = function () {
        var _this = this;
        console.log('--DataService getFaresData()');
        return this._http.get(this.endPointStats)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err, caught) {
            console.log('err.error =', err.error, ';');
            _this.dropMessage('Error getting Stats Data, please check your connection to the server. ');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    DataService.prototype.dropMessage = function (msg) {
        var snackBarRef = this.snackBar.open(msg, '', { duration: 5000 });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
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