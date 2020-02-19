webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/CharacterList/index.js":
/*!***********************************************!*\
  !*** ./src/components/CharacterList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CharacterItem */ "./src/components/CharacterItem/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Filter */ "./src/components/Filter/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Pagination */ "./src/components/Pagination/index.js");




var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\CharacterList\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query characters($page: Int!) {\n    characters(page: $page) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n\n        image\n        episode {\n          id\n          name\n          air_date\n        }\n\n        location {\n          name\n        }\n        created\n      }\n\n      info {\n        pages\n        next\n        prev\n        count\n      }\n    }\n  }\n"]);

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

const GET_CHARACTERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());

const Error = ({
  error
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
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
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
  mb: "15px",
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "semibold",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Could not fetch Rick and Morty characters..."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaRegSadCry"],
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
}, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(error, null, 4)));

const CharacterList = () => {
  const {
    loading,
    error,
    data,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(GET_CHARACTERS, {
    variables: {
      page: 0
    },
    notifyOnNetworkStatusChange: true
  });
  const characterData = data ? data['characters']['results'] : [];
  const {
    pages,
    next,
    prev
  } = data['characters']['info'];

  const onPrev = () => {};

  const onNext = () => {};

  if (loading) return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    p: {
      md: '50px',
      sm: '40px',
      xs: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    as: "h1",
    size: "2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Rick and Morty Characters:"), error ? __jsx(Error, {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    prev: null,
    next: 2,
    onPrev: onPrev,
    onNext: onNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["SimpleGrid"], {
    columns: {
      md: 5,
      sm: 3,
      xs: 1
    },
    spacingX: "30px",
    spacingY: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, characterData.map(character => __jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key: character.id
  }, character, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    d: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: () => loadMoreCharacters(data, fetchMore),
    color: "blue",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Fetch more!"))));
};

const loadMoreCharacters = (data, fetchMore) => fetchMore({
  variables: {
    page: data['characters']['info']['next']
  },
  updateQuery: (previousResult, {
    fetchMoreResult
  }) => {
    if (!fetchMoreResult) return previousResult;
    return fetchMoreResult;
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, previousResult, {
      characters: {
        results: [...previousResult.characters.results, ...fetchMoreResult.characters.results]
      }
    });
  }
});

/* harmony default export */ __webpack_exports__["default"] = (CharacterList);

/***/ })

})
//# sourceMappingURL=index.js.147773c286f7059759fd.hot-update.js.map