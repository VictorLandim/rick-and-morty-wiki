webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/Pagination/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\Pagination\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Pagination = ({
  next,
  prev,
  onNext,
  onPrev,
  pages
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  mt: "20px",
  mb: "20px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, prev && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  leftIcon: "arrow-back",
  onClick: onPrev,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, prev), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  disabled: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, prev ? prev + 1 : next - 1), next && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  rightIcon: "arrow-forward",
  onClick: onNext,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, next));

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=index.js.8f6f623a059cb48a1c28.hot-update.js.map