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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Star Wars Characters</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\" autosize>\n  <mat-sidenav mode=\"side\" opened>\n    <swc-character-list></swc-character-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"sidenav-content\">\n    <swc-sidenav-content></swc-sidenav-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _character_list_character_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character-list/character-list.component */ "./src/app/character-list/character-list.component.ts");
/* harmony import */ var _sidenav_content_sidenav_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav-content/sidenav-content.component */ "./src/app/sidenav-content/sidenav-content.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _character_list_character_list_component__WEBPACK_IMPORTED_MODULE_7__["CharacterListComponent"],
                _sidenav_content_sidenav_content_component__WEBPACK_IMPORTED_MODULE_8__["SidenavContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/character-list/character-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/character-list/character-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci1saXN0L2NoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/character-list/character-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/character-list/character-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-content\">\n  <mat-toolbar>\n    <mat-form-field class=\"search-filter\">\n      <input matInput placeholder=\"Filter Characters...\">\n    </mat-form-field>\n  </mat-toolbar>\n\n  <mat-list-item>\n    <button mat-stroked-button>\n      <span>Show or Hide Details</span>\n    </button>\n  </mat-list-item>\n\n  <mat-list>\n    <mat-list-item *ngFor=\"let character of charArray\">\n      <img mat-list-avatar src=\"{{ character.avatar }}\" />\n      <h3 mat-line>{{ character.name }}</h3>\n      <div mat-line *ngIf=\"!hideDetails\">\n        <span>Gender: {{ character.gender }}, </span>\n        <span>Species: {{ character.species }}</span>\n      </div>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/character-list/character-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/character-list/character-list.component.ts ***!
  \************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharacterListComponent = /** @class */ (function () {
    function CharacterListComponent() {
        this.charArray = [
            {
                "id": "luke-skywalker",
                "name": "Luke Skywalker",
                "height": 172,
                "mass": 77,
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY",
                "gender": "Male",
                "force": 5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/luke-skywalker-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/luke-skywalker-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "c-3po",
                "name": "C-3PO",
                "height": 167,
                "mass": 75,
                "hair_color": "N/A",
                "skin_color": "gold",
                "eye_color": "yellow",
                "birth_year": "112BBY",
                "gender": "N/A",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/c-3po-lg.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/c-3po-sm.jpeg",
                "species": "Droid",
                "alliance": "Light Side"
            },
            {
                "id": "r2-d2",
                "name": "R2-D2",
                "height": 96,
                "mass": 32,
                "hair_color": "N/A",
                "skin_color": "white, blue",
                "eye_color": "red",
                "birth_year": "33BBY",
                "gender": "N/A",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/r2-d2-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/r2-d2-lg.jpeg",
                "species": "Droid",
                "alliance": "Light Side"
            },
            {
                "id": "darth-vader",
                "name": "Darth Vader",
                "height": 202,
                "mass": 136,
                "hair_color": "none",
                "skin_color": "white",
                "eye_color": "yellow",
                "birth_year": "41.9BBY",
                "gender": "Male",
                "force": 5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/darth-vader-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/darth-vader-lg.jpeg",
                "species": "Human",
                "alliance": "Dark Side"
            },
            {
                "id": "princess-leia",
                "name": "Leia Organa",
                "height": 150,
                "mass": 49,
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "19BBY",
                "gender": "Female",
                "force": 5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/princess-leia-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/princess-leia-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "anakin-skywalker",
                "name": "Anakin Skywalker",
                "height": 188,
                "mass": 84,
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "41.9BBY",
                "gender": "Male",
                "force": 5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/anakin-skywalker-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/anakin-skywalker-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "chewie",
                "name": "Chewbacca",
                "height": 228,
                "mass": 112,
                "hair_color": "brown",
                "skin_color": "unknown",
                "eye_color": "blue",
                "birth_year": "200BBY",
                "gender": "Male",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/chewie-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/chewie-lg.jpeg",
                "species": "Wookie",
                "alliance": "Light Side"
            },
            {
                "id": "han-solo",
                "name": "Han Solo",
                "height": 180,
                "mass": 80,
                "hair_color": "brown",
                "skin_color": "fair",
                "eye_color": "brown",
                "birth_year": "29BBY",
                "gender": "Male",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/han-solo-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/han-solo-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "jabba-the-hutt",
                "name": "Jabba Desilijic Tiure",
                "height": 175,
                "mass": 1358,
                "hair_color": "N/A",
                "skin_color": "green-tan, brown",
                "eye_color": "orange",
                "birth_year": "600BBY",
                "gender": "Male",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/jabba-the-hutt-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/jabba-the-hutt-lg.jpeg",
                "species": "Hutt",
                "alliance": "None"
            },
            {
                "id": "jyn-erso",
                "name": "Jyn Erso",
                "height": 170,
                "mass": 77,
                "hair_color": "brown",
                "skin_color": "fair",
                "eye_color": "green",
                "birth_year": "22BBY",
                "gender": "Female",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/jyn-erso-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/jyn-erso-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "kylo-ren",
                "name": "Kylo Ren",
                "height": 180,
                "mass": 110,
                "hair_color": "black",
                "skin_color": "fair",
                "eye_color": "hazel",
                "birth_year": "5ABY",
                "gender": "Male",
                "force": 4,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/kylo-ren-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/kylo-ren-lg.jpeg",
                "species": "Human",
                "alliance": "Dark Side"
            },
            {
                "id": "yoda",
                "name": "Yoda",
                "height": 66,
                "mass": 17,
                "hair_color": "white",
                "skin_color": "green",
                "eye_color": "brown",
                "birth_year": "896BBY",
                "gender": "Male",
                "force": 5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/yoda-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/yoda-lg.jpeg",
                "species": "unknown",
                "alliance": "Light Side"
            },
            {
                "id": "cassian-andor",
                "name": "Cassian Andor",
                "height": 206,
                "mass": 80,
                "hair_color": "brown",
                "skin_color": "light brown",
                "eye_color": "brown",
                "birth_year": "26BBY",
                "gender": "Male",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/cassian-andor-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/cassian-andor-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "finn",
                "name": "Finn",
                "height": -1,
                "mass": -1,
                "hair_color": "black",
                "skin_color": "dark",
                "eye_color": "dark",
                "birth_year": "unknown",
                "gender": "Male",
                "force": 2.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/finn-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/finn-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "rey",
                "name": "Rey",
                "height": -1,
                "mass": -1,
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "hazel",
                "birth_year": "unknown",
                "gender": "Female",
                "force": 5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/rey-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/rey-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "poe-dameron",
                "name": "Poe Dameron",
                "height": -1,
                "mass": -1,
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "unknown",
                "gender": "Male",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/poe-dameron-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/poe-dameron-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            },
            {
                "id": "bb-8",
                "name": "BB8",
                "height": -1,
                "mass": -1,
                "hair_color": "none",
                "skin_color": "none",
                "eye_color": "black",
                "birth_year": "unknown",
                "gender": "N/A",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/bb-8-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/bb-8-lg.jpeg",
                "species": "Droid",
                "alliance": "Light Side"
            },
            {
                "id": "padme-amidala",
                "name": "Padmé Amidala",
                "height": 165,
                "mass": 45,
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "46BBY",
                "gender": "Female",
                "force": 0.5,
                "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/padme-amidala-sm.jpeg",
                "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/padme-amidala-lg.jpeg",
                "species": "Human",
                "alliance": "Light Side"
            }
        ];
    }
    CharacterListComponent.prototype.ngOnInit = function () {
    };
    CharacterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'swc-character-list',
            template: __webpack_require__(/*! ./character-list.component.html */ "./src/app/character-list/character-list.component.html"),
            styles: [__webpack_require__(/*! ./character-list.component.css */ "./src/app/character-list/character-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharacterListComponent);
    return CharacterListComponent;
}());



/***/ }),

/***/ "./src/app/sidenav-content/sidenav-content.component.css":
/*!***************************************************************!*\
  !*** ./src/app/sidenav-content/sidenav-content.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYtY29udGVudC9zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sidenav-content/sidenav-content.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sidenav-content/sidenav-content.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/sidenav-content/sidenav-content.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sidenav-content/sidenav-content.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavContentComponent", function() { return SidenavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavContentComponent = /** @class */ (function () {
    function SidenavContentComponent() {
    }
    SidenavContentComponent.prototype.ngOnInit = function () {
    };
    SidenavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'swc-sidenav-content',
            template: __webpack_require__(/*! ./sidenav-content.component.html */ "./src/app/sidenav-content/sidenav-content.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-content.component.css */ "./src/app/sidenav-content/sidenav-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavContentComponent);
    return SidenavContentComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarahsmalley/Projects/Angular/StarWarsCharacters/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map