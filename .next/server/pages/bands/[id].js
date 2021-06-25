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
exports.id = "pages/bands/[id]";
exports.ids = ["pages/bands/[id]"];
exports.modules = {

/***/ "./pages/bands/[id].js":
/*!*****************************!*\
  !*** ./pages/bands/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/kiana/Kiana/Kiana/Projects/learning_next/pages/bands/[id].js\";\nconst getStaticPaths = async () => {\n  const res = await fetch('https://jsonplaceholder.typicode.com/users');\n  const data = await res.json();\n  const paths = data.map(ninja => {\n    return {\n      params: {\n        id: ninja.id.toString()\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async context => {\n  const id = context.params.id;\n  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);\n  const data = await res.json();\n  return {\n    props: {\n      user: data\n    }\n  };\n};\n\nconst Details = ({\n  user\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [user.name, user.email, user.website]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZ19uZXh0Ly4vcGFnZXMvYmFuZHMvW2lkXS5qcz9kZmU1Il0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwibmluamEiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsInVzZXIiLCJEZXRhaWxzIiwibmFtZSIsImVtYWlsIiwid2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsY0FBYyxHQUFHLFlBQVc7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBRCxDQUF2QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFQSxRQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxLQUFLLElBQUc7QUFDM0IsV0FBTztBQUNIQyxZQUFNLEVBQUU7QUFBQ0MsVUFBRSxFQUFDRixLQUFLLENBQUNFLEVBQU4sQ0FBU0MsUUFBVDtBQUFKO0FBREwsS0FBUDtBQUdILEdBSmEsQ0FBZDtBQU1BLFNBQU07QUFDRkwsU0FERTtBQUVGTSxZQUFRLEVBQUU7QUFGUixHQUFOO0FBSUgsQ0FkTTtBQWdCQSxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUM3QyxRQUFNSixFQUFFLEdBQUdJLE9BQU8sQ0FBQ0wsTUFBUixDQUFlQyxFQUExQjtBQUNBLFFBQU1SLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0RBQWdETyxFQUFqRCxDQUF2QjtBQUNBLFFBQU1OLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQSxTQUFNO0FBQ0ZVLFNBQUssRUFBRTtBQUFDQyxVQUFJLEVBQUVaO0FBQVA7QUFETCxHQUFOO0FBR0gsQ0FQTTs7QUFVUCxNQUFNYSxPQUFPLEdBQUMsQ0FBQztBQUFDRDtBQUFELENBQUQsS0FDZDtBQUNJLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSxpQkFDQ0EsSUFBSSxDQUFDRSxJQUROLEVBRUNGLElBQUksQ0FBQ0csS0FGTixFQUdDSCxJQUFJLENBQUNJLE9BSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBVUgsQ0FaRDs7QUFjQSwrREFBZUgsT0FBZiIsImZpbGUiOiIuL3BhZ2VzL2JhbmRzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChuaW5qYT0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczoge2lkOm5pbmphLmlkLnRvU3RyaW5nKCl9XG4gICAgICAgIH0gIFxuICAgIH0pXG5cbiAgICByZXR1cm57XG4gICAgICAgIHBhdGhzLCBcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWRcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLycgKyBpZClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHt1c2VyOiBkYXRhfVxuICAgIH1cbn1cblxuXG5jb25zdCBEZXRhaWxzPSh7dXNlcn0pID0+XG57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgIHt1c2VyLndlYnNpdGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/bands/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/bands/[id].js"));
module.exports = __webpack_exports__;

})();