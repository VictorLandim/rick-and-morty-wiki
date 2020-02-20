webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/containers/CharacterList/index.js":
/*!***********************************************!*\
  !*** ./src/containers/CharacterList/index.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_common_CharacterItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/common/CharacterItem */ "./src/components/common/CharacterItem.js");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/common/Loader */ "./src/components/common/Loader.js");
/* harmony import */ var _components_layout_Filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/layout/Filter */ "./src/components/layout/Filter.js");
/* harmony import */ var _components_layout_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/layout/Pagination */ "./src/components/layout/Pagination.js");
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../lib/queries */ "./src/lib/queries.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles */ "./src/containers/CharacterList/styles.js");








var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\containers\\CharacterList\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }












const CharacterList = () => {
  const INITIAL_FILTER = {
    name: null,
    status: null,
    species: null,
    type: null,
    gender: null
  };
  const {
    0: filter,
    1: setFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(_objectSpread({}, INITIAL_FILTER));
  const {
    loading,
    error,
    data,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(Object(_lib_queries__WEBPACK_IMPORTED_MODULE_16__["GET_CHARACTER_LIST"])(apollo_boost__WEBPACK_IMPORTED_MODULE_10__["gql"]), {
    variables: {
      page: 1,
      filter: INITIAL_FILTER
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first' // fetchPolicy: 'network-only'

  });
  const characterData = data ? data['characters']['results'] : [];
  const {
    pages,
    next,
    prev,
    count
  } = data ? data['characters']['info'] : {};

  const onPrev = () => paginate(data, fetchMore, prev);

  const onNext = () => paginate(data, fetchMore, next);

  const renderContent = () => {
    if (loading || !data) return __jsx(_components_common_Loader__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    });
    if (error) return __jsx(_styles__WEBPACK_IMPORTED_MODULE_17__["Error"], {
      error: error,
      message: "Could not fetch Rick and Morty characters...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_components_layout_Filter__WEBPACK_IMPORTED_MODULE_14__["default"], {
      filter: filter,
      setFilter: setFilter,
      onFilter: onFilter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }), __jsx(_components_layout_Pagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
      prev: prev,
      next: next,
      onPrev: onPrev,
      onNext: onNext,
      pages: pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["Text"], {
      textAlign: "center",
      color: "gray.400",
      marginBottom: "0px",
      fontSize: "14px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "\u2022 ", count, " characters \u2022"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["Text"], {
      textAlign: "center",
      color: "gray.400",
      marginBottom: "20px",
      fontSize: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, "Showing ", characterData.length), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["SimpleGrid"], {
      columns: {
        md: 5,
        sm: 3,
        xs: 1
      },
      spacingX: "30px",
      spacingY: "30px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, characterData.length === 0 ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_17__["Error"], {
      message: "This search led to no results...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }) : characterData.map(character => __jsx(_components_common_CharacterItem__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      key: character.id
    }, character, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    })))), __jsx(_components_layout_Pagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
      prev: prev,
      next: next,
      onPrev: onPrev,
      onNext: onNext,
      pages: pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }));
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_17__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
    as: "h1",
    size: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Rick and Morty Characters:"), renderContent());
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
//# sourceMappingURL=index.js.4d24eff837a2a9d7a8ad.hot-update.js.map