"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0";
exports.ids = ["vendor-chunks/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RemoveScrollBar = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar react_style_singleton_1 = __webpack_require__(/*! react-style-singleton */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.22_react@18.2.0/node_modules/react-style-singleton/dist/es5/index.js\");\nvar constants_1 = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js\");\nvar Style = (0, react_style_singleton_1.styleSingleton)();\n// important tip - once we measure scrollBar width and remove them\n// we could not repeat this operation\n// thus we are using style-singleton - only the first \"yet correct\" style will be applied.\nvar getStyles = function (_a, allowRelative, gapMode, important) {\n    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;\n    if (gapMode === void 0) { gapMode = 'margin'; }\n    return \"\\n  .\".concat(constants_1.noScrollbarsClassName, \" {\\n   overflow: hidden \").concat(important, \";\\n   padding-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  body {\\n    overflow: hidden \").concat(important, \";\\n    overscroll-behavior: contain;\\n    \").concat([\n        allowRelative && \"position: relative \".concat(important, \";\"),\n        gapMode === 'margin' &&\n            \"\\n    padding-left: \".concat(left, \"px;\\n    padding-top: \").concat(top, \"px;\\n    padding-right: \").concat(right, \"px;\\n    margin-left:0;\\n    margin-top:0;\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n    \"),\n        gapMode === 'padding' && \"padding-right: \".concat(gap, \"px \").concat(important, \";\"),\n    ]\n        .filter(Boolean)\n        .join(''), \"\\n  }\\n  \\n  .\").concat(constants_1.zeroRightClassName, \" {\\n    right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(constants_1.fullWidthClassName, \" {\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(constants_1.zeroRightClassName, \" .\").concat(constants_1.zeroRightClassName, \" {\\n    right: 0 \").concat(important, \";\\n  }\\n  \\n  .\").concat(constants_1.fullWidthClassName, \" .\").concat(constants_1.fullWidthClassName, \" {\\n    margin-right: 0 \").concat(important, \";\\n  }\\n  \\n  body {\\n    \").concat(constants_1.removedBarSizeVariable, \": \").concat(gap, \"px;\\n  }\\n\");\n};\n/**\n * Removes page scrollbar and blocks page scroll when mounted\n */\nvar RemoveScrollBar = function (props) {\n    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;\n    /*\n     gap will be measured on every component mount\n     however it will be used only by the \"first\" invocation\n     due to singleton nature of <Style\n     */\n    var gap = React.useMemo(function () { return (0, utils_1.getGapWidth)(gapMode); }, [gapMode]);\n    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });\n};\nexports.RemoveScrollBar = RemoveScrollBar;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9jb21wb25lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCLGNBQWMsbUJBQU8sQ0FBQyxzRkFBTztBQUM3QixpQ0FBaUMsbUJBQU8sQ0FBQyxxS0FBTztBQUNoRCw4QkFBOEIsbUJBQU8sQ0FBQyw0S0FBdUI7QUFDN0Qsa0JBQWtCLG1CQUFPLENBQUMsMEtBQWE7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLGtLQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixnRUFBZ0UsNkNBQTZDLDhEQUE4RCxLQUFLLFVBQVUsOENBQThDLG1DQUFtQztBQUMzUSxtRUFBbUU7QUFDbkU7QUFDQSxvREFBb0Qsc0NBQXNDLDBDQUEwQyxvQkFBb0IsbUJBQW1CLDhEQUE4RDtBQUN6TywwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLHlCQUF5QixzREFBc0QsdURBQXVELEtBQUssc0RBQXNELDhEQUE4RCxLQUFLLG1HQUFtRyxzQ0FBc0MsS0FBSyxtR0FBbUcsNkNBQTZDLEtBQUssY0FBYywwRUFBMEUsS0FBSztBQUNwb0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQ0FBMkM7QUFDckYsd0NBQXdDLGdGQUFnRjtBQUN4SDtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWxsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyQDIuMy40X0B0eXBlcytyZWFjdEAxOC4yLjIyX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczUvY29tcG9uZW50LmpzPzIzNDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW92ZVNjcm9sbEJhciA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFJlYWN0ID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9zdHlsZV9zaW5nbGV0b25fMSA9IHJlcXVpcmUoXCJyZWFjdC1zdHlsZS1zaW5nbGV0b25cIik7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIFN0eWxlID0gKDAsIHJlYWN0X3N0eWxlX3NpbmdsZXRvbl8xLnN0eWxlU2luZ2xldG9uKSgpO1xuLy8gaW1wb3J0YW50IHRpcCAtIG9uY2Ugd2UgbWVhc3VyZSBzY3JvbGxCYXIgd2lkdGggYW5kIHJlbW92ZSB0aGVtXG4vLyB3ZSBjb3VsZCBub3QgcmVwZWF0IHRoaXMgb3BlcmF0aW9uXG4vLyB0aHVzIHdlIGFyZSB1c2luZyBzdHlsZS1zaW5nbGV0b24gLSBvbmx5IHRoZSBmaXJzdCBcInlldCBjb3JyZWN0XCIgc3R5bGUgd2lsbCBiZSBhcHBsaWVkLlxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChfYSwgYWxsb3dSZWxhdGl2ZSwgZ2FwTW9kZSwgaW1wb3J0YW50KSB7XG4gICAgdmFyIGxlZnQgPSBfYS5sZWZ0LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGdhcCA9IF9hLmdhcDtcbiAgICBpZiAoZ2FwTW9kZSA9PT0gdm9pZCAwKSB7IGdhcE1vZGUgPSAnbWFyZ2luJzsgfVxuICAgIHJldHVybiBcIlxcbiAgLlwiLmNvbmNhdChjb25zdGFudHNfMS5ub1Njcm9sbGJhcnNDbGFzc05hbWUsIFwiIHtcXG4gICBvdmVyZmxvdzogaGlkZGVuIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gICBwYWRkaW5nLXJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxuICAgIFwiKS5jb25jYXQoW1xuICAgICAgICBhbGxvd1JlbGF0aXZlICYmIFwicG9zaXRpb246IHJlbGF0aXZlIFwiLmNvbmNhdChpbXBvcnRhbnQsIFwiO1wiKSxcbiAgICAgICAgZ2FwTW9kZSA9PT0gJ21hcmdpbicgJiZcbiAgICAgICAgICAgIFwiXFxuICAgIHBhZGRpbmctbGVmdDogXCIuY29uY2F0KGxlZnQsIFwicHg7XFxuICAgIHBhZGRpbmctdG9wOiBcIikuY29uY2F0KHRvcCwgXCJweDtcXG4gICAgcGFkZGluZy1yaWdodDogXCIpLmNvbmNhdChyaWdodCwgXCJweDtcXG4gICAgbWFyZ2luLWxlZnQ6MDtcXG4gICAgbWFyZ2luLXRvcDowO1xcbiAgICBtYXJnaW4tcmlnaHQ6IFwiKS5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gICAgXCIpLFxuICAgICAgICBnYXBNb2RlID09PSAncGFkZGluZycgJiYgXCJwYWRkaW5nLXJpZ2h0OiBcIi5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcIiksXG4gICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcnKSwgXCJcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoY29uc3RhbnRzXzEuemVyb1JpZ2h0Q2xhc3NOYW1lLCBcIiB7XFxuICAgIHJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KGNvbnN0YW50c18xLmZ1bGxXaWR0aENsYXNzTmFtZSwgXCIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IFwiKS5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoY29uc3RhbnRzXzEuemVyb1JpZ2h0Q2xhc3NOYW1lLCBcIiAuXCIpLmNvbmNhdChjb25zdGFudHNfMS56ZXJvUmlnaHRDbGFzc05hbWUsIFwiIHtcXG4gICAgcmlnaHQ6IDAgXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICAuXCIpLmNvbmNhdChjb25zdGFudHNfMS5mdWxsV2lkdGhDbGFzc05hbWUsIFwiIC5cIikuY29uY2F0KGNvbnN0YW50c18xLmZ1bGxXaWR0aENsYXNzTmFtZSwgXCIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgXCIpLmNvbmNhdChjb25zdGFudHNfMS5yZW1vdmVkQmFyU2l6ZVZhcmlhYmxlLCBcIjogXCIpLmNvbmNhdChnYXAsIFwicHg7XFxuICB9XFxuXCIpO1xufTtcbi8qKlxuICogUmVtb3ZlcyBwYWdlIHNjcm9sbGJhciBhbmQgYmxvY2tzIHBhZ2Ugc2Nyb2xsIHdoZW4gbW91bnRlZFxuICovXG52YXIgUmVtb3ZlU2Nyb2xsQmFyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIG5vUmVsYXRpdmUgPSBwcm9wcy5ub1JlbGF0aXZlLCBub0ltcG9ydGFudCA9IHByb3BzLm5vSW1wb3J0YW50LCBfYSA9IHByb3BzLmdhcE1vZGUsIGdhcE1vZGUgPSBfYSA9PT0gdm9pZCAwID8gJ21hcmdpbicgOiBfYTtcbiAgICAvKlxuICAgICBnYXAgd2lsbCBiZSBtZWFzdXJlZCBvbiBldmVyeSBjb21wb25lbnQgbW91bnRcbiAgICAgaG93ZXZlciBpdCB3aWxsIGJlIHVzZWQgb25seSBieSB0aGUgXCJmaXJzdFwiIGludm9jYXRpb25cbiAgICAgZHVlIHRvIHNpbmdsZXRvbiBuYXR1cmUgb2YgPFN0eWxlXG4gICAgICovXG4gICAgdmFyIGdhcCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gKDAsIHV0aWxzXzEuZ2V0R2FwV2lkdGgpKGdhcE1vZGUpOyB9LCBbZ2FwTW9kZV0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlLCB7IHN0eWxlczogZ2V0U3R5bGVzKGdhcCwgIW5vUmVsYXRpdmUsIGdhcE1vZGUsICFub0ltcG9ydGFudCA/ICchaW1wb3J0YW50JyA6ICcnKSB9KTtcbn07XG5leHBvcnRzLlJlbW92ZVNjcm9sbEJhciA9IFJlbW92ZVNjcm9sbEJhcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;\nexports.zeroRightClassName = 'right-scroll-bar-position';\nexports.fullWidthClassName = 'width-before-scroll-bar';\nexports.noScrollbarsClassName = 'with-scroll-bars-hidden';\n/**\n * Name of a CSS variable containing the amount of \"hidden\" scrollbar\n * ! might be undefined ! use will fallback!\n */\nexports.removedBarSizeVariable = '--removed-body-scroll-bar-size';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLEdBQUcsNkJBQTZCLEdBQUcsMEJBQTBCLEdBQUcsMEJBQTBCO0FBQ3hILDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpbGwvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9jb25zdGFudHMuanM/MDVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlZEJhclNpemVWYXJpYWJsZSA9IGV4cG9ydHMubm9TY3JvbGxiYXJzQ2xhc3NOYW1lID0gZXhwb3J0cy5mdWxsV2lkdGhDbGFzc05hbWUgPSBleHBvcnRzLnplcm9SaWdodENsYXNzTmFtZSA9IHZvaWQgMDtcbmV4cG9ydHMuemVyb1JpZ2h0Q2xhc3NOYW1lID0gJ3JpZ2h0LXNjcm9sbC1iYXItcG9zaXRpb24nO1xuZXhwb3J0cy5mdWxsV2lkdGhDbGFzc05hbWUgPSAnd2lkdGgtYmVmb3JlLXNjcm9sbC1iYXInO1xuZXhwb3J0cy5ub1Njcm9sbGJhcnNDbGFzc05hbWUgPSAnd2l0aC1zY3JvbGwtYmFycy1oaWRkZW4nO1xuLyoqXG4gKiBOYW1lIG9mIGEgQ1NTIHZhcmlhYmxlIGNvbnRhaW5pbmcgdGhlIGFtb3VudCBvZiBcImhpZGRlblwiIHNjcm9sbGJhclxuICogISBtaWdodCBiZSB1bmRlZmluZWQgISB1c2Ugd2lsbCBmYWxsYmFjayFcbiAqL1xuZXhwb3J0cy5yZW1vdmVkQmFyU2l6ZVZhcmlhYmxlID0gJy0tcmVtb3ZlZC1ib2R5LXNjcm9sbC1iYXItc2l6ZSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/index.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;\nvar component_1 = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/component.js\");\nObject.defineProperty(exports, \"RemoveScrollBar\", ({ enumerable: true, get: function () { return component_1.RemoveScrollBar; } }));\nvar constants_1 = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/constants.js\");\nObject.defineProperty(exports, \"zeroRightClassName\", ({ enumerable: true, get: function () { return constants_1.zeroRightClassName; } }));\nObject.defineProperty(exports, \"fullWidthClassName\", ({ enumerable: true, get: function () { return constants_1.fullWidthClassName; } }));\nObject.defineProperty(exports, \"noScrollbarsClassName\", ({ enumerable: true, get: function () { return constants_1.noScrollbarsClassName; } }));\nObject.defineProperty(exports, \"removedBarSizeVariable\", ({ enumerable: true, get: function () { return constants_1.removedBarSizeVariable; } }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js\");\nObject.defineProperty(exports, \"getGapWidth\", ({ enumerable: true, get: function () { return utils_1.getGapWidth; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyw4QkFBOEIsR0FBRyw2QkFBNkIsR0FBRywwQkFBMEIsR0FBRywwQkFBMEIsR0FBRyx1QkFBdUI7QUFDeEssa0JBQWtCLG1CQUFPLENBQUMsMEtBQWE7QUFDdkMsbURBQWtELEVBQUUscUNBQXFDLHVDQUF1QyxFQUFDO0FBQ2pJLGtCQUFrQixtQkFBTyxDQUFDLDBLQUFhO0FBQ3ZDLHNEQUFxRCxFQUFFLHFDQUFxQywwQ0FBMEMsRUFBQztBQUN2SSxzREFBcUQsRUFBRSxxQ0FBcUMsMENBQTBDLEVBQUM7QUFDdkkseURBQXdELEVBQUUscUNBQXFDLDZDQUE2QyxFQUFDO0FBQzdJLDBEQUF5RCxFQUFFLHFDQUFxQyw4Q0FBOEMsRUFBQztBQUMvSSxjQUFjLG1CQUFPLENBQUMsa0tBQVM7QUFDL0IsK0NBQThDLEVBQUUscUNBQXFDLCtCQUErQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpbGwvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS9pbmRleC5qcz9lYzUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRHYXBXaWR0aCA9IGV4cG9ydHMucmVtb3ZlZEJhclNpemVWYXJpYWJsZSA9IGV4cG9ydHMubm9TY3JvbGxiYXJzQ2xhc3NOYW1lID0gZXhwb3J0cy5mdWxsV2lkdGhDbGFzc05hbWUgPSBleHBvcnRzLnplcm9SaWdodENsYXNzTmFtZSA9IGV4cG9ydHMuUmVtb3ZlU2Nyb2xsQmFyID0gdm9pZCAwO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUmVtb3ZlU2Nyb2xsQmFyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb25lbnRfMS5SZW1vdmVTY3JvbGxCYXI7IH0gfSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ6ZXJvUmlnaHRDbGFzc05hbWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnN0YW50c18xLnplcm9SaWdodENsYXNzTmFtZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZ1bGxXaWR0aENsYXNzTmFtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uc3RhbnRzXzEuZnVsbFdpZHRoQ2xhc3NOYW1lOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm9TY3JvbGxiYXJzQ2xhc3NOYW1lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zdGFudHNfMS5ub1Njcm9sbGJhcnNDbGFzc05hbWU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zdGFudHNfMS5yZW1vdmVkQmFyU2l6ZVZhcmlhYmxlOyB9IH0pO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEdhcFdpZHRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsc18xLmdldEdhcFdpZHRoOyB9IH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getGapWidth = exports.zeroGap = void 0;\nexports.zeroGap = {\n    left: 0,\n    top: 0,\n    right: 0,\n    gap: 0,\n};\nvar parse = function (x) { return parseInt(x || '', 10) || 0; };\nvar getOffset = function (gapMode) {\n    var cs = window.getComputedStyle(document.body);\n    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];\n    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];\n    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];\n    return [parse(left), parse(top), parse(right)];\n};\nvar getGapWidth = function (gapMode) {\n    if (gapMode === void 0) { gapMode = 'margin'; }\n    if (typeof window === 'undefined') {\n        return exports.zeroGap;\n    }\n    var offsets = getOffset(gapMode);\n    var documentWidth = document.documentElement.clientWidth;\n    var windowWidth = window.innerWidth;\n    return {\n        left: offsets[0],\n        top: offsets[1],\n        right: offsets[2],\n        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),\n    };\n};\nexports.getGapWidth = getGapWidth;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuMjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzNS91dGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyxlQUFlO0FBQ3JDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWlsbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNF9AdHlwZXMrcmVhY3RAMTguMi4yMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXM1L3V0aWxzLmpzPzExMDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEdhcFdpZHRoID0gZXhwb3J0cy56ZXJvR2FwID0gdm9pZCAwO1xuZXhwb3J0cy56ZXJvR2FwID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGdhcDogMCxcbn07XG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gcGFyc2VJbnQoeCB8fCAnJywgMTApIHx8IDA7IH07XG52YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKGdhcE1vZGUpIHtcbiAgICB2YXIgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICB2YXIgbGVmdCA9IGNzW2dhcE1vZGUgPT09ICdwYWRkaW5nJyA/ICdwYWRkaW5nTGVmdCcgOiAnbWFyZ2luTGVmdCddO1xuICAgIHZhciB0b3AgPSBjc1tnYXBNb2RlID09PSAncGFkZGluZycgPyAncGFkZGluZ1RvcCcgOiAnbWFyZ2luVG9wJ107XG4gICAgdmFyIHJpZ2h0ID0gY3NbZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnID8gJ3BhZGRpbmdSaWdodCcgOiAnbWFyZ2luUmlnaHQnXTtcbiAgICByZXR1cm4gW3BhcnNlKGxlZnQpLCBwYXJzZSh0b3ApLCBwYXJzZShyaWdodCldO1xufTtcbnZhciBnZXRHYXBXaWR0aCA9IGZ1bmN0aW9uIChnYXBNb2RlKSB7XG4gICAgaWYgKGdhcE1vZGUgPT09IHZvaWQgMCkgeyBnYXBNb2RlID0gJ21hcmdpbic7IH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuemVyb0dhcDtcbiAgICB9XG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXQoZ2FwTW9kZSk7XG4gICAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogb2Zmc2V0c1swXSxcbiAgICAgICAgdG9wOiBvZmZzZXRzWzFdLFxuICAgICAgICByaWdodDogb2Zmc2V0c1syXSxcbiAgICAgICAgZ2FwOiBNYXRoLm1heCgwLCB3aW5kb3dXaWR0aCAtIGRvY3VtZW50V2lkdGggKyBvZmZzZXRzWzJdIC0gb2Zmc2V0c1swXSksXG4gICAgfTtcbn07XG5leHBvcnRzLmdldEdhcFdpZHRoID0gZ2V0R2FwV2lkdGg7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.22_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es5/utils.js\n");

/***/ })

};
;