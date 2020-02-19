webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/CharacterList/index.js":
/*!***********************************************!*\
  !*** ./src/components/CharacterList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CharacterItem */ "./src/components/CharacterItem/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Filter */ "./src/components/Filter/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pagination */ "./src/components/Pagination/index.js");



var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\CharacterList\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query characters($page: Int!) {\n    characters(page: $page) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n\n        image\n        episode {\n          id\n          name\n          air_date\n        }\n\n        location {\n          name\n        }\n        created\n      }\n\n      info {\n        pages\n        next\n        prev\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









 // location {
//   id
//   name
//   type
// }
// origin {
//   id
//   name
//   type
//   dimension
// }

const GET_CHARACTERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

const Error = ({
  error
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
  mt: "70px",
  d: "flex",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "gray.400",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
  mb: "15px",
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "semibold",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Could not fetch Rick and Morty characters..."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaRegSadCry"],
  size: "64px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}), __jsx("pre", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(error, null, 4)));

const CharacterList = () => {
  const {
    loading,
    error,
    data,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_CHARACTERS, {
    variables: {
      page: 0
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });
  if (loading) return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  });
  const characterData = data ? data['characters']['results'] : [];
  const {
    pages,
    next,
    prev
  } = data['characters']['info'];

  const onPrev = () => paginate(data, fetchMore, prev);

  const onNext = () => paginate(data, fetchMore, next);

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    p: {
      md: '50px',
      sm: '40px',
      xs: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    as: "h1",
    size: "2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Rick and Morty Characters:"), error ? __jsx(Error, {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
    prev: prev,
    next: next,
    onPrev: onPrev,
    onNext: onNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["SimpleGrid"], {
    columns: {
      md: 5,
      sm: 3,
      xs: 1
    },
    spacingX: "30px",
    spacingY: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, characterData.map(character => __jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: character.id
  }, character, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })))), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
    prev: prev,
    next: next,
    onPrev: onPrev,
    onNext: onNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  })));
};

const paginate = (data, fetchMore, page) => fetchMore({
  variables: {
    page
  },
  updateQuery: (previousResult, {
    fetchMoreResult
  }) => {
    if (!fetchMoreResult) return previousResult;
    return fetchMoreResult;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (CharacterList);

/***/ })

})
//# sourceMappingURL=index.js.479f4aff00e0a23833f6.hot-update.js.map