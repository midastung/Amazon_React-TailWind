/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n //THE GLOBAL STORE SETUP\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__.default\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvYXBwL3N0b3JlLmpzP2IxODUiXSwibmFtZXMiOlsic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJiYXNrZXQiLCJiYXNrZXRSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FHQTs7QUFDTyxNQUFNQSxLQUFLLEdBQUdDLGdFQUFjLENBQUM7QUFDbENDLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUVDLHdEQUFhQTtBQURkO0FBRHlCLENBQUQsQ0FBNUIiLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGJhc2tldFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xuXG4vL1RIRSBHTE9CQUwgU1RPUkUgU0VUVVBcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGJhc2tldDogYmFza2V0UmVkdWNlcixcbiAgfSxcbn0pO1xuICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/dongjianlin/Downloads/Github/Amazon_React-TailWind/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    session: pageProps.session,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n      store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 8\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDMUMsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBYyxXQUFPLEVBQUVBLFNBQVMsQ0FBQ0MsT0FBakM7QUFBQSwyQkFDRyw4REFBQyxpREFBRDtBQUFVLFdBQUssRUFBRUMsNkNBQWpCO0FBQUEsNkJBQ0QsOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVUEsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIlxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"basket\",\n  initialState,\n  reducers: {\n    //Actions-執行命令\n    addToBasket: (state, action) => {\n      state.items = [...state.items, action.payload];\n    },\n    removeFromBasket: (state, action) => {\n      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);\n      let newBasket = [...state.items];\n\n      if (index >= 0) {\n        //The item exists in the basket... remove it...\n        newBasket.splice(index, 1);\n      } else {\n        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in basket`);\n      }\n\n      state.items = newBasket;\n    }\n  }\n});\nconst {\n  addToBasket,\n  removeFromBasket\n} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice\n\nconst selectItems = state => state.basket.items;\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzPzQ1YzkiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9CYXNrZXQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVGcm9tQmFza2V0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiYXNrZXRJdGVtIiwiaWQiLCJuZXdCYXNrZXQiLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUlPLE1BQU1DLFdBQVcsR0FBR0MsNkRBQVcsQ0FBQztBQUNyQ0MsTUFBSSxFQUFFLFFBRCtCO0FBRXJDSixjQUZxQztBQUdyQ0ssVUFBUSxFQUFFO0FBQ1I7QUFDQUMsZUFBVyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLEdBQWMsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLEtBQVYsRUFBaUJPLE1BQU0sQ0FBQ0MsT0FBeEIsQ0FBZDtBQUNELEtBSk87QUFLUkMsb0JBQWdCLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ25DLFlBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FBc0JDLFVBQVUsSUFBSUEsVUFBVSxDQUFDQyxFQUFYLEtBQWtCTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBckUsQ0FBZDtBQUVBLFVBQUlDLFNBQVMsR0FBRyxDQUFDLEdBQUdSLEtBQUssQ0FBQ04sS0FBVixDQUFoQjs7QUFFQSxVQUFHVSxLQUFLLElBQUksQ0FBWixFQUFlO0FBQ2I7QUFDQUksaUJBQVMsQ0FBQ0MsTUFBVixDQUFpQkwsS0FBakIsRUFBd0IsQ0FBeEI7QUFDRCxPQUhELE1BR087QUFDTE0sZUFBTyxDQUFDQyxJQUFSLENBQ0csNEJBQTJCVixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBRyx3QkFEaEQ7QUFHRDs7QUFFRFAsV0FBSyxDQUFDTixLQUFOLEdBQWNjLFNBQWQ7QUFDRDtBQXBCTztBQUgyQixDQUFELENBQS9CO0FBMkJBLE1BQU07QUFBRVQsYUFBRjtBQUFlSTtBQUFmLElBQW9DUixXQUFXLENBQUNpQixPQUF0RCxDLENBRVA7O0FBQ08sTUFBTUMsV0FBVyxHQUFJYixLQUFELElBQVdBLEtBQUssQ0FBQ2MsTUFBTixDQUFhcEIsS0FBNUM7QUFFUCwrREFBZUMsV0FBVyxDQUFDb0IsT0FBM0IiLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNrZXRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJiYXNrZXRcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vQWN0aW9ucy3ln7fooYzlkb3ku6RcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF1cbiAgICB9LFxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChiYXNrZXRJdGVtID0+IGJhc2tldEl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcblxuICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XG5cbiAgICAgIGlmKGluZGV4ID49IDApIHtcbiAgICAgICAgLy9UaGUgaXRlbSBleGlzdHMgaW4gdGhlIGJhc2tldC4uLiByZW1vdmUgaXQuLi5cbiAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgQ2FudCByZW1vdmUgcHJvZHVjdCAoaWQ6ICR7YWN0aW9uLnBheWxvYWQuaWR9KSBhcyBpdHMgbm90IGluIGJhc2tldGBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();