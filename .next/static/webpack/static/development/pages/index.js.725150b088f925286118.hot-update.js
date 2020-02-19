webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/lib/apollo.js":
/*!***************************!*\
  !*** ./src/lib/apollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "./node_modules/next-apollo/dist/index.js");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


const config = {
  link: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: 'https://rickandmortyapi.com/graphql',
    credentials: 'same-origin'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withData"])(config));

/***/ })

})
//# sourceMappingURL=index.js.725150b088f925286118.hot-update.js.map