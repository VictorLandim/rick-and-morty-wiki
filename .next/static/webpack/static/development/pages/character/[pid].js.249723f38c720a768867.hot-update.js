webpackHotUpdate("static\\development\\pages\\character\\[pid].js",{

/***/ "./src/containers/CharacterDetails/index.js":
/*!**************************************************!*\
  !*** ./src/containers/CharacterDetails/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/queries */ "./src/lib/queries.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/Loader */ "./src/components/common/Loader.js");
/* harmony import */ var _CharacterList_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CharacterList/styles */ "./src/containers/CharacterList/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/containers/CharacterDetails/styles.js");

var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\containers\\CharacterDetails\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const CharacterDetails = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    pid
  } = router.query;
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(Object(_lib_queries__WEBPACK_IMPORTED_MODULE_6__["GET_CHARACTER_DETAILS"])(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]), {
    variables: {
      id: pid
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });
  if (loading) return __jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  });
  if (error) return __jsx(_CharacterList_styles__WEBPACK_IMPORTED_MODULE_8__["Error"], {
    error: "error",
    message: "Erro fetching character data...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  });
  const {
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode
  } = data['character'];

  const renderEpisodes = () => episode.map(episode => __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(episode.name)));

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    padding: {
      md: '20px',
      sm: '20px',
      xs: '20px'
    },
    marginLeft: {
      md: '150px',
      sm: '20px',
      xs: '20px'
    },
    marginRight: {
      md: '150px',
      sm: '20px',
      xs: '20px'
    },
    marginTop: "50px",
    pb: "100px",
    borderRadius: "10px",
    d: "flex",
    alignItems: {
      md: 'flex-start',
      sm: 'center',
      xs: 'center'
    },
    justifyContent: "normal",
    flexDir: {
      md: 'row',
      sm: 'column',
      xs: 'column'
    },
    shadow: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    flex: "0 0 35%",
    p: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image,
    alt: name,
    textAlign: "center",
    width: "100%",
    borderRadius: "1000px",
    border: "5px solid teal",
    shadow: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    fontSize: "2xl",
    textAlign: "center",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    pl: "20px",
    pr: "20px",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Appears on:")));
  return __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 2));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterDetails);

/***/ })

})
//# sourceMappingURL=[pid].js.249723f38c720a768867.hot-update.js.map