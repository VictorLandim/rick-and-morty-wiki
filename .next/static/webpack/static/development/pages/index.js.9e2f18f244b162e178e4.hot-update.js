webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/CharacterList/index.js":
/*!***********************************************!*\
  !*** ./src/components/CharacterList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../CharacterItem */ "./src/components/CharacterItem/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Filter */ "./src/components/Filter/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Pagination */ "./src/components/Pagination/index.js");










var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\CharacterList\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  query characters($page: Int!, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n\n        image\n        episode {\n          id\n          name\n          air_date\n        }\n\n        location {\n          name\n        }\n        created\n      }\n\n      info {\n        pages\n        next\n        prev\n        count\n      }\n    }\n  }\n"]);

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

const GET_CHARACTERS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_12__["gql"])(_templateObject());

const Error = ({
  error
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
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
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
  mb: "15px",
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "semibold",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Could not fetch Rick and Morty characters..."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaRegSadCry"],
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
}, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(error, null, 4)));

const CharacterList = () => {
  const INITIAL_FILTER = {
    name: null,
    status: null,
    species: null,
    type: null,
    gender: null
  };
  const [filter, setFilter] = useState(_objectSpread({}, INITIAL_FILTER));
  const {
    loading,
    error,
    data,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__["useQuery"])(GET_CHARACTERS, {
    variables: {
      page: 0,
      filter
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first'
  });
  if (loading) return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
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

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: {
      md: '50px',
      sm: '40px',
      xs: '20px'
    },
    paddingRight: {
      md: '50px',
      sm: '40px',
      xs: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
    as: "h1",
    size: "2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Rick and Morty Characters:"), error ? __jsx(Error, {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_18__["default"], {
    prev: prev,
    next: next,
    onPrev: onPrev,
    onNext: onNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_13__["SimpleGrid"], {
    columns: {
      md: 5,
      sm: 3,
      xs: 1
    },
    spacingX: "30px",
    spacingY: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, characterData.map(character => __jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
    key: character.id
  }, character, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  })))), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_18__["default"], {
    prev: prev,
    next: next,
    onPrev: onPrev,
    onNext: onNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
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
//# sourceMappingURL=index.js.9e2f18f244b162e178e4.hot-update.js.map