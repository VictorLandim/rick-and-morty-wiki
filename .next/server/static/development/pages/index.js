module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CharacterItem/index.js":
/*!***********************************************!*\
  !*** ./src/components/CharacterItem/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\CharacterItem\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CharacterItem = props => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    location
  } = props;
  const statusMap = {
    Alive: {
      color: 'teal.500',
      icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegGrin"],
      text: 'Alive'
    },
    Dead: {
      color: 'red.500',
      icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegDizzy"],
      text: 'Dead'
    },
    unknown: {
      color: 'purple.500',
      icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegFlushed"],
      text: 'Status unknown'
    }
  };
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
    maxW: "sm",
    borderWidth: "1px",
    rounded: "lg",
    overflow: "hidden",
    shadow: "md",
    transition: "0.3s all",
    _hover: {// transform: 'translateY(-5px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    fallbackSrc: "placeholder.png",
    alt: name,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    mb: "3px",
    isTruncated: true,
    size: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "blue.300",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, species), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    d: "flex",
    alignItems: "center",
    flexDir: "row",
    color: statusMap[status]['color'],
    mb: "10px",
    fontSize: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    w: "20px",
    mr: "3px",
    as: statusMap[status]['icon'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), statusMap[status]['text']), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    d: "flex",
    alignItems: "center",
    flexDir: "row",
    mb: "10px",
    fontSize: "xs",
    color: "gray.600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    w: "20px",
    mr: "3px",
    as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaMapMarkerAlt"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), location.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    alignSelf: "flex-end",
    rightIcon: "arrow-forward",
    mt: "10px",
    width: "100%",
    variantColor: "teal",
    size: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Details")));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterItem);

/***/ }),

/***/ "./src/components/CharacterList/index.js":
/*!***********************************************!*\
  !*** ./src/components/CharacterList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CharacterItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CharacterItem */ "./src/components/CharacterItem/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Filter */ "./src/components/Filter/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\CharacterList\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








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

const GET_CHARACTERS = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender

        image
        episode {
          id
          name
          air_date
        }

        location {
          name
        }
        created
      }

      info {
        pages
        next
        prev
        count
      }
    }
  }
`;

const Error = ({
  error
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  mt: "70px",
  d: "flex",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "gray.400",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  mb: "15px",
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "semibold",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, "Could not fetch Rick and Morty characters..."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaRegSadCry"],
  size: "64px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}), __jsx("pre", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, JSON.stringify(error, null, 4)));

const CharacterList = () => {
  const {
    loading,
    error,
    data,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_CHARACTERS, {
    variables: {
      page: 0
    },
    notifyOnNetworkStatusChange: true
  });
  const characterData = data ? data['characters']['results'] : [];
  if (loading) return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    p: {
      md: '50px',
      sm: '40px',
      xs: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    as: "h1",
    size: "2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Rick and Morty Characters:"), error ? __jsx(Error, {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SimpleGrid"], {
    columns: {
      md: 5,
      sm: 3,
      xs: 1
    },
    spacingX: "30px",
    spacingY: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, characterData.map(character => __jsx(_CharacterItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    key: character.id
  }, character, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    d: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => loadMoreCharacters(data, fetchMore),
    color: "blue",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
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
    return Object.assign({}, previousResult, {
      characters: {
        results: [...previousResult.characters.results, ...fetchMoreResult.characters.results]
      }
    });
  }
});

/* harmony default export */ __webpack_exports__["default"] = (CharacterList);

/***/ }),

/***/ "./src/components/Filter/index.js":
/*!****************************************!*\
  !*** ./src/components/Filter/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\Filter\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Filter = () => {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    border: "0px solid gray",
    borderRadius: 5,
    mt: "20px",
    mb: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: {
      md: 3,
      xs: 1
    },
    spacing: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Select gender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("option", {
    value: "option1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Male"), __jsx("option", {
    value: "option2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Female"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Genderless"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "unknown")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Select species",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("option", {
    value: "option1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Male"), __jsx("option", {
    value: "option2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Female"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Genderless"), __jsx("option", {
    value: "option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "unknown")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Select status",
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
  }, "unknown"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/components/Loader/index.js":
/*!****************************************!*\
  !*** ./src/components/Loader/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\Loader\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Loader = () => {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: '100vh',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    thickness: "4px",
    speed: "0.65s",
    emptyColor: "gray.200",
    color: "blue.500",
    size: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    color: 'gray.700',
    mt: 5,
    as: "h4",
    size: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Loading..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\Navbar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Navbar = () => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
  pl: "50px",
  pr: "50px",
  pt: "30px",
  pb: "30px",
  borderBottom: "1px solid blue.500",
  borderColor: "blue.300",
  shadow: "md",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  d: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDir: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  d: "flex",
  alignItems: "center",
  flexDir: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRadiationAlt"],
  mr: "10px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "sm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Rick and Morty Wiki")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  href: "https://github.com/VictorLandim/rick-and-morty-wiki",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})))));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/lib/apollo.js":
/*!***************************!*\
  !*** ./src/lib/apollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  link: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: 'https://rickandmortyapi.com/graphql'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withData"])(config));

/***/ }),

/***/ "./src/lib/layout.js":
/*!***************************!*\
  !*** ./src/lib/layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/lib/theme.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar/index.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\lib\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = ({
  children
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["CSSReset"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/lib/theme.js":
/*!**************************!*\
  !*** ./src/lib/theme.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const theme = _objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__["theme"]);

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CharacterList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CharacterList */ "./src/components/CharacterList/index.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo */ "./src/lib/apollo.js");
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/layout */ "./src/lib/layout.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __jsx(_lib_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_CharacterList__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}))));

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Victor\Documents\dev\web\rick-and-morty-wiki\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map