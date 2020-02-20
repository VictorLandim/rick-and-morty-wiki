webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");


function _templateObject2() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query CharacterDetails($id: ID) {\n    character(id: $id) {\n      name\n      status\n      species\n      type\n      gender\n      origin {\n        id\n        name\n        dimension\n      }\n      location {\n        id\n        name\n      }\n\n      image\n      episode {\n        id\n        name\n        air_date\n        episode\n      }\n    }\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query characters($page: Int!, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n\n        image\n        episode {\n          id\n          name\n          air_date\n        }\n\n        location {\n          name\n        }\n        created\n      }\n\n      info {\n        pages\n        next\n        prev\n        count\n      }\n    }\n  }\n"]);

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
const GET_CHARACTER_LIST = gql => gql(_templateObject());
const GET_CHARACTER_DETAILS = gql => gql(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.4eac77f88bd125ffcac5.hot-update.js.map