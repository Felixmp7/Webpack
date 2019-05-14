/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./babel-loader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel-loader/estilos.css":
/*!**********************************!*\
  !*** ./babel-loader/estilos.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./babel-loader/estilos.css?");

/***/ }),

/***/ "./babel-loader/index.js":
/*!*******************************!*\
  !*** ./babel-loader/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _estilos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estilos.css */ \"./babel-loader/estilos.css\");\n/* harmony import */ var _estilos_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_estilos_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.js */ \"./babel-loader/message.js\");\n\n // console.log('Hola mundo desde Webpack');\n\nconsole.log('Hola mundo desde Webpack en webpack.config.js');\ndocument.write(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"firstMessage\"]);\nObject(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"delayedMessage\"])();\n\n//# sourceURL=webpack:///./babel-loader/index.js?");

/***/ }),

/***/ "./babel-loader/make-message.js":
/*!**************************************!*\
  !*** ./babel-loader/make-message.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction makeMessage(msg) {\n  const element = document.createElement('p');\n  element.textContent = msg;\n  return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeMessage);\n\n//# sourceURL=webpack:///./babel-loader/make-message.js?");

/***/ }),

/***/ "./babel-loader/message.js":
/*!*********************************!*\
  !*** ./babel-loader/message.js ***!
  \*********************************/
/*! exports provided: firstMessage, delayedMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstMessage\", function() { return firstMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delayedMessage\", function() { return delayedMessage; });\n/* harmony import */ var _render_to_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-to-dom.js */ \"./babel-loader/render-to-dom.js\");\n/* harmony import */ var _render_to_dom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_render_to_dom_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _make_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-message */ \"./babel-loader/make-message.js\");\n\n\nconst waitTime = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('han pasado 3 segundos');\n  }, 3000);\n});\nconst firstMessage = 'Hola mundo desde un modulo';\nconst delayedMessage = async () => {\n  const message = await waitTime;\n  console.log(message); // const element = document.createElement('p');\n  // element.textContent = message;\n\n  _render_to_dom_js__WEBPACK_IMPORTED_MODULE_0___default()(Object(_make_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(message));\n};\n\n//# sourceURL=webpack:///./babel-loader/message.js?");

/***/ }),

/***/ "./babel-loader/render-to-dom.js":
/*!***************************************!*\
  !*** ./babel-loader/render-to-dom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function renderToDOM(element) {\n  document.body.append(element);\n};\n\n//# sourceURL=webpack:///./babel-loader/render-to-dom.js?");

/***/ })

/******/ });