webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/layout/Filter.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\layout\\Filter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Filter = props => {
  const {
    filter,
    setFilter,
    onFilter
  } = props;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    border: "0px solid gray",
    borderRadius: 5,
    mt: "20px",
    mb: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: {
      md: 6,
      xs: 1
    },
    spacing: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Name",
    value: name,
    onChange: e => setName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Status",
    value: status,
    onChange: e => setStatus(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("option", {
    value: "option2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Alive"), __jsx("option", {
    value: "option1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Dead"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "unknown")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Species",
    value: species,
    onChange: e => setSpecies(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Type",
    value: type,
    onChange: e => setType(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Gender",
    value: gender,
    onChange: e => setGender(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("option", {
    value: "option1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Male"), __jsx("option", {
    value: "option2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Female"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Genderless"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "unknown")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "blue",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Filter")));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ })

})
//# sourceMappingURL=index.js.85b898af26472a149eec.hot-update.js.map