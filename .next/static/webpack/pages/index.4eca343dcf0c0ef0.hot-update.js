"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  img {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n  }\\n\\n  .user-info {\\n    margin-top: 50px;\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    padding: 16px 32px;\\n    gap: 16px;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"Header__StyledHeader\",\n    componentId: \"sc-1a45c1e-0\"\n})(_templateObject());\n_c = StyledHeader;\nfunction Header(props) {\n    console.log(\"user -> \", props.picture.picture);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledHeader, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"user-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: \"https://github.com/\".concat(props.picture.picture, \".png\")\n                }, void 0, false, {\n                    fileName: \"/home/vitor/dev/imersao_alura/src/components/Header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: props.picture.name\n                        }, void 0, false, {\n                            fileName: \"/home/vitor/dev/imersao_alura/src/components/Header.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: props.picture.job\n                        }, void 0, false, {\n                            fileName: \"/home/vitor/dev/imersao_alura/src/components/Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/vitor/dev/imersao_alura/src/components/Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/vitor/dev/imersao_alura/src/components/Header.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vitor/dev/imersao_alura/src/components/Header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledHeader\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkMsTUFBTUMsZUFBZUQsd0VBQVU7Ozs7S0FBekJDO0FBZ0JTLFNBQVNFLE9BQU9DLEtBQUssRUFBRTtJQUNwQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlGLE1BQU1HLE9BQU8sQ0FBQ0EsT0FBTztJQUM3QyxxQkFDRSw4REFBQ047a0JBQ0MsNEVBQUNPO1lBQVFDLFdBQVU7OzhCQUNqQiw4REFBQ0M7b0JBQUlDLEtBQUssc0JBQTRDLE9BQXRCUCxNQUFNRyxPQUFPLENBQUNBLE9BQU8sRUFBQzs7Ozs7OzhCQUN0RCw4REFBQ0w7O3NDQUNDLDhEQUFDVTtzQ0FBSVIsTUFBTUcsT0FBTyxDQUFDTSxJQUFJOzs7Ozs7c0NBQ3ZCLDhEQUFDQztzQ0FBR1YsTUFBTUcsT0FBTyxDQUFDUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQixDQUFDO01BYnVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/MzMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgaW1nIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnVzZXItaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xuICAgIGdhcDogMTZweDtcbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBjb25zb2xlLmxvZyhcInVzZXIgLT4gXCIsIHByb3BzLnBpY3R1cmUucGljdHVyZSk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEhlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxuICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3BzLnBpY3R1cmUucGljdHVyZX0ucG5nYH0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+e3Byb3BzLnBpY3R1cmUubmFtZX08L2gyPlxuICAgICAgICAgIDxwPntwcm9wcy5waWN0dXJlLmpvYn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvU3R5bGVkSGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZEhlYWRlciIsImRpdiIsIkhlYWRlciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBpY3R1cmUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDIiLCJuYW1lIiwicCIsImpvYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});