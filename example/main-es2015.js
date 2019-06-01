(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/angular-phonetic/fesm2015/angular-phonetic.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/tyran/Programs/angular-phonetic/dist/angular-phonetic/fesm2015/angular-phonetic.js ***!
  \***************************************************************************************************/
/*! exports provided: AngularPhoneticComponent, AngularPhoneticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPhoneticComponent", function() { return AngularPhoneticComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPhoneticModule", function() { return AngularPhoneticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularPhoneticComponent {
    constructor() {
        this.brackets = '()';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const parsed = this.parseBrackets();
        this.left = parsed[0];
        this.right = parsed[1];
    }
    /**
     * @private
     * @return {?}
     */
    parseBrackets() {
        switch (this.brackets.length) {
            case 0:
                return ['', ''];
            case 1:
                return [this.brackets, this.brackets];
            default:
                return [this.brackets[0], this.brackets[1]];
        }
    }
}
AngularPhoneticComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng-phonetic',
                template: `
    <ruby>
      <ng-content></ng-content> <rp>{{left}}</rp> <rt>{{phonetic}}</rt><rp>{{right}}</rp>
    </ruby>
  `
            }] }
];
AngularPhoneticComponent.propDecorators = {
    phonetic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    brackets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularPhoneticModule {
}
AngularPhoneticModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [AngularPhoneticComponent],
                imports: [],
                exports: [AngularPhoneticComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-phonetic.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*****************************************************************************************************!*\
  !*** C:/Users/tyran/Programs/angular-phonetic/node_modules/raw-loader!./src/app/app.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    Angular <ng-phonetic phonetic=\"フォネチック\">Phonetic</ng-phonetic>\r\n  </h1>\r\n  <pre>\r\n    <code class=\"language-html\" pCode>\r\nAngular &lt;ng-phonetic phonetic=\"フォネチック\"&gt;Phonetic&lt;/ng-phonetic&gt;\r\n    </code>\r\n  </pre>\r\n  <h2>A simple component to easily render ruby text.</h2>\r\n</div>\r\n<hr>\r\n<p>Additionally, if the browser doesn't support <em>ruby text</em>, you can specify the brackets used in the fallback:</p>\r\n<p>\r\n  Specifying both brackets: <ng-phonetic phonetic=\"にほんご\" brackets=\"「」\">日本語</ng-phonetic>\r\n</p>\r\n<pre>\r\n  <code class=\"language-html\" pCode>\r\n&lt;ng-phonetic phonetic=\"にほんご\" brackets=\"「」\" &gt;日本語&lt;/ng-phonetic&gt;\r\n  </code>\r\n</pre>\r\n<br />\r\n<p>\r\n  Using the same bracket twice: <ng-phonetic phonetic=\"조선적\" brackets=\"|\">朝鮮的</ng-phonetic>\r\n</p>\r\n<pre>\r\n  <code class=\"language-html\" pCode>\r\n&lt;ng-phonetic phonetic=\"조선적\" brackets=\"|\" &gt;朝鮮的&lt;/ng-phonetic&gt;\r\n  </code>\r\n</pre>\r\n<br />\r\n<p>\r\n  Can also strip out the brackets: <ng-phonetic phonetic=\"zhōng wén\" brackets=\"\">中文</ng-phonetic>\r\n</p>\r\n<pre>\r\n  <code class=\"language-html\" pCode>\r\n  &lt;ng-phonetic phonetic=\"zhōng wén\" brackets=\"\" &gt;中文&lt;/ng-phonetic&gt;\r\n  </code>\r\n</pre>\r\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm9qZWN0cy9leGFtcGxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'example';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/codehighlighter */ "../../node_modules/primeng/codehighlighter.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_phonetic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-phonetic */ "../../dist/angular-phonetic/fesm2015/angular-phonetic.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_phonetic__WEBPACK_IMPORTED_MODULE_5__["AngularPhoneticModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_3__["CodeHighlighterModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tyran\Programs\angular-phonetic\projects\example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map