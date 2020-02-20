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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/queries */ "./src/lib/queries.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common/Loader */ "./src/components/common/Loader.js");
/* harmony import */ var _CharacterList_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CharacterList/styles */ "./src/containers/CharacterList/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/containers/CharacterDetails/styles.js");


var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\containers\\CharacterDetails\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










const CharacterDetails = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    pid
  } = router.query;
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(Object(_lib_queries__WEBPACK_IMPORTED_MODULE_7__["GET_CHARACTER_DETAILS"])(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"]), {
    variables: {
      id: pid
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });
  if (loading) return __jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  });
  if (error) return __jsx(_CharacterList_styles__WEBPACK_IMPORTED_MODULE_9__["Error"], {
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

  const renderEpisodes = () => __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, episode.map(episode => __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Episode"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key: episode.id
  }, episode, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))));

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    padding: {
      md: '20px',
      sm: '20px',
      xs: '20px'
    },
    marginLeft: {
      md: '250px',
      sm: '20px',
      xs: '20px'
    },
    marginRight: {
      md: '250px',
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
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    flex: "0 0 60%",
    p: "50px",
    paddingTop: "0px",
    paddingBottom: "0px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: image,
    alt: name,
    textAlign: "center",
    width: "100%",
    borderRadius: "1000px",
    border: "5px solid teal",
    shadow: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    fontSize: "2xl",
    textAlign: "center",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    pl: "20px",
    pr: "20px",
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Appears on:"), renderEpisodes()));
  return __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 2));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterDetails);

/***/ })

})
//# sourceMappingURL=[pid].js.8d558024b150a6e9b799.hot-update.js.map