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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dynamic-imports/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dynamic-imports/src/js/index.js":
/*!*****************************************!*\
  !*** ./dynamic-imports/src/js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/felix/Proyectos-Github/Webpack/dynamic-imports/src/js/index.js: Support for the experimental syntax 'dynamicImport' isn't currently enabled (13:35):\\n\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m$button \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'dynamic'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m$button\\u001b[33m.\\u001b[39maddEventListener(\\u001b[32m'click'\\u001b[39m\\u001b[33m,\\u001b[39m async () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 | \\u001b[39m  \\u001b[36mconst\\u001b[39m {\\u001b[36mdefault\\u001b[39m\\u001b[33m:\\u001b[39m alerta} \\u001b[33m=\\u001b[39m await \\u001b[36mimport\\u001b[39m(\\u001b[32m'./alerta.js'\\u001b[39m) \\u001b[90m//La ruta es relativa\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m  alerta()\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m})\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-syntax-dynamic-import (https://git.io/vb4Sv) to the 'plugins' section of your Babel config to enable parsing.\\n    at Object.raise (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:6322:17)\\n    at Object.expectPlugin (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:7643:18)\\n    at Object.parseExprAtom (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8651:14)\\n    at Object.parseExprAtom (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:3596:20)\\n    at Object.parseExprSubscripts (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8385:23)\\n    at Object.parseMaybeUnary (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8365:21)\\n    at Object.parseAwait (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:9534:26)\\n    at Object.parseMaybeUnary (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8330:19)\\n    at Object.parseExprOps (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8252:23)\\n    at Object.parseMaybeConditional (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8225:23)\\n    at Object.parseMaybeAssign (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8172:21)\\n    at Object.parseVar (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:10415:26)\\n    at Object.parseVarStatement (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:10234:10)\\n    at Object.parseStatementContent (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:9830:21)\\n    at Object.parseStatement (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:9763:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:10340:25)\\n    at Object.parseBlockBody (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:10327:10)\\n    at Object.parseBlock (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:10311:10)\\n    at Object.parseFunctionBody (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:9382:24)\\n    at Object.parseArrowExpression (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:9323:10)\\n    at Object.parseAsyncArrowFromCallExpression (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8612:10)\\n    at Object.parseSubscript (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8498:21)\\n    at Object.parseSubscripts (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8406:19)\\n    at Object.parseExprSubscripts (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8395:17)\\n    at Object.parseMaybeUnary (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8365:21)\\n    at Object.parseExprOps (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8252:23)\\n    at Object.parseMaybeConditional (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8225:23)\\n    at Object.parseMaybeAssign (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8172:21)\\n    at Object.parseExprListItem (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:9449:18)\\n    at Object.parseCallExpressionArguments (/home/felix/Proyectos-Github/Webpack/node_modules/@babel/parser/lib/index.js:8592:22)\");\n\n//# sourceURL=webpack:///./dynamic-imports/src/js/index.js?");

/***/ })

/******/ });