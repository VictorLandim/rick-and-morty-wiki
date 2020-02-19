module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\layout\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  position: "absolute",
  w: "100%",
  bottom: "0",
  textAlign: "center",
  fontSize: "13px",
  p: "10px",
  shadow: "sm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, `© ${new Date().getFullYear()}, 💻 with ❤ by `, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  target: "_blank",
  textDecoration: "underline",
  href: "https://victorlandim.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Victor Landim"), ".");

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
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
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\components\\layout\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Navbar = () => {
  const {
    colorMode,
    toggleColorMode
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
    borderBottom: "1px solid blue.500",
    borderColor: "blue.300",
    shadow: "md",
    paddingTop: "30px",
    paddingBottom: "30px",
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
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    d: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDir: {
      md: 'row',
      sm: 'column',
      xs: 'column'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/VictorLandim/rick-and-morty-wiki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    size: 28,
    as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    d: "flex",
    alignItems: "center",
    flexDir: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/rick.svg",
    w: "32px",
    alt: "Rick Sanchez",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    marginLeft: "15px",
    marginRight: "15px",
    fontSize: "24px",
    textAlign: "center",
    marginBottom: {
      md: 0,
      sm: '30px',
      xs: '30px'
    },
    marginTop: {
      md: 0,
      sm: '30px',
      xs: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Rick and Morty Wiki"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/morty.svg",
    w: "32px",
    alt: "Morty Smith",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: toggleColorMode,
    variant: "ghost",
    variantColor: "teal",
    "aria-label": "Call Sage",
    fontSize: "20px",
    icon: colorMode === 'light' ? react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaMoon"] : react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSun"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/containers/CharacterDetails/index.js":
/*!**************************************************!*\
  !*** ./src/containers/CharacterDetails/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/queries */ "./src/lib/queries.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\containers\\CharacterDetails\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CharacterDetails = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    pid
  } = router.query; // const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS(gql, id), {
  //   variables: { page: 1, filter },
  //   notifyOnNetworkStatusChange: true,
  //   fetchPolicy: 'cache-first'
  // });

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "CharacterDetails : ", pid);
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterDetails);

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
    uri: 'https://rickandmortyapi.com/graphql',
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }
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
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Navbar */ "./src/components/layout/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Footer */ "./src/components/layout/Footer.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\lib\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Layout = ({
  children,
  title
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ColorModeProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["CSSReset"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, title), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("meta", {
  name: "description",
  content: "Rick and Morty Wiki built with React, Next, Chakra UI, Apollo and GraphQL.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  position: "relative",
  minHeight: "100vh",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), children, __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/lib/queries.js":
/*!****************************!*\
  !*** ./src/lib/queries.js ***!
  \****************************/
/*! exports provided: GET_CHARACTER_LIST, GET_CHARACTER_DETAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHARACTER_LIST", function() { return GET_CHARACTER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHARACTER_DETAILS", function() { return GET_CHARACTER_DETAILS; });
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
const GET_CHARACTER_LIST = gql => gql`
  query characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
const GET_CHARACTER_DETAILS = (gql, id) => gql`
  query CharacterDetails($id: ID) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        id
        name
        dimension
      }
      location {
        id
        name
      }

      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

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

/***/ "./src/pages/character/[pid].js":
/*!**************************************!*\
  !*** ./src/pages/character/[pid].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_CharacterDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/CharacterDetails */ "./src/containers/CharacterDetails/index.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/apollo */ "./src/lib/apollo.js");
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/layout */ "./src/lib/layout.js");
var _jsxFileName = "X:\\Victor\\Documents\\dev\\web\\rick-and-morty-wiki\\src\\pages\\character\\[pid].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __jsx(_lib_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_containers_CharacterDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "Rick and Morty Wiki | Character",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}))));

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./src/pages/character/[pid].js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Victor\Documents\dev\web\rick-and-morty-wiki\src\pages\character\[pid].js */"./src/pages/character/[pid].js");


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=[pid].js.map