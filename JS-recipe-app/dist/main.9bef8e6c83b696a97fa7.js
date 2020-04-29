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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/nunito.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/nunito.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Nunito-Regular.ttf */ \"./assets/fonts/Nunito-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n    font-family: 'Nunito';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/nunito.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nunito.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/nunito.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0; }\\r\\n  \\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    box-sizing: inherit; }\\r\\n  \\r\\n  html {\\r\\n    box-sizing: border-box;\\r\\n    font-size: 62.5%; }\\r\\n    @media only screen and (max-width: 68.75em) {\\r\\n      html {\\r\\n        font-size: 50%; } }\\r\\n  \\r\\n  body {\\r\\n    font-family: 'Nunito', sans-serif;\\r\\n    font-weight: 400;\\r\\n    line-height: 1.6;\\r\\n    color: #655A56;\\r\\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n    min-height: calc(100vh - 2 * 4vw); }\\r\\n  \\r\\n  .container {\\r\\n    max-width: 120rem;\\r\\n    margin: 4vw auto;\\r\\n    background-color: #fff;\\r\\n    border-radius: 6px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);\\r\\n    display: grid;\\r\\n    grid-template-rows: 10rem minmax(100rem, auto);\\r\\n    grid-template-columns: 1.1fr 2fr 1.1fr;\\r\\n    grid-template-areas: \\\"head head head\\\" \\\"list recipe shopping\\\"; }\\r\\n    @media only screen and (max-width: 68.75em) {\\r\\n      .container {\\r\\n        width: 100%;\\r\\n        margin: 0;\\r\\n        border-radius: 0; } }\\r\\n  \\r\\n  .btn, .btn-small, .btn-small:link, .btn-small:visited {\\r\\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\r\\n    border-radius: 10rem;\\r\\n    border: none;\\r\\n    text-transform: uppercase;\\r\\n    color: #fff;\\r\\n    cursor: pointer;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    transition: all .2s; }\\r\\n    .btn:hover, .btn-small:hover {\\r\\n      transform: scale(1.05); }\\r\\n    .btn:focus, .btn-small:focus {\\r\\n      outline: none; }\\r\\n    .btn > *:first-child, .btn-small > *:first-child {\\r\\n      margin-right: 1rem; }\\r\\n  \\r\\n  .btn {\\r\\n    padding: 1.3rem 3rem;\\r\\n    font-size: 1.4rem; }\\r\\n    .btn svg {\\r\\n      height: 2.25rem;\\r\\n      width: 2.25rem;\\r\\n      fill: currentColor; }\\r\\n  \\r\\n  .btn-small, .btn-small:link, .btn-small:visited {\\r\\n    font-size: 1.3rem;\\r\\n    padding: 1rem 1.75rem;\\r\\n    text-decoration: none; }\\r\\n    .btn-small svg, .btn-small:link svg, .btn-small:visited svg {\\r\\n      height: 1.5rem;\\r\\n      width: 1.5rem;\\r\\n      fill: currentColor; }\\r\\n  \\r\\n  .btn-inline {\\r\\n    color: #F59A83;\\r\\n    font-size: 1.2rem;\\r\\n    border: none;\\r\\n    background-color: #F9F5F3;\\r\\n    padding: .8rem 1.2rem;\\r\\n    border-radius: 10rem;\\r\\n    cursor: pointer;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    transition: all .2s; }\\r\\n    .btn-inline svg {\\r\\n      height: 1.5rem;\\r\\n      width: 1.5rem;\\r\\n      fill: currentColor;\\r\\n      margin: 0 .2rem; }\\r\\n    .btn-inline span {\\r\\n      margin: 0 .4rem; }\\r\\n    .btn-inline:hover {\\r\\n      color: #F48982;\\r\\n      background-color: #F2EFEE; }\\r\\n    .btn-inline:focus {\\r\\n      outline: none; }\\r\\n  \\r\\n  .btn-tiny {\\r\\n    height: 1.75rem;\\r\\n    width: 1.75rem;\\r\\n    border: none;\\r\\n    background: none;\\r\\n    cursor: pointer; }\\r\\n    .btn-tiny svg {\\r\\n      height: 100%;\\r\\n      width: 100%;\\r\\n      fill: #F59A83;\\r\\n      transition: all .3s; }\\r\\n    .btn-tiny:focus {\\r\\n      outline: none; }\\r\\n    .btn-tiny:hover svg {\\r\\n      fill: #F48982;\\r\\n      transform: translateY(-1px); }\\r\\n    .btn-tiny:active svg {\\r\\n      fill: #F48982;\\r\\n      transform: translateY(0); }\\r\\n    .btn-tiny:not(:last-child) {\\r\\n      margin-right: .3rem; }\\r\\n  \\r\\n  .heading-2 {\\r\\n    font-size: 1.8rem;\\r\\n    font-weight: 600;\\r\\n    color: #F59A83;\\r\\n    text-transform: uppercase;\\r\\n    margin-bottom: 2.5rem;\\r\\n    text-align: center;\\r\\n    transform: skewY(-3deg); }\\r\\n  \\r\\n  .copyright {\\r\\n    color: #968B87;\\r\\n    font-size: 1.2rem;\\r\\n    margin-top: auto; }\\r\\n  \\r\\n  .link:link,\\r\\n  .link:visited {\\r\\n    color: #968B87; }\\r\\n  \\r\\n  .loader {\\r\\n    margin: 5rem auto;\\r\\n    text-align: center; }\\r\\n    .loader svg {\\r\\n      height: 5.5rem;\\r\\n      width: 5.5rem;\\r\\n      fill: #F59A83;\\r\\n      transform-origin: 44% 50%;\\r\\n      animation: rotate 1.5s infinite linear; }\\r\\n  \\r\\n  @keyframes rotate {\\r\\n    0% {\\r\\n      transform: rotate(0); }\\r\\n    100% {\\r\\n      transform: rotate(360deg); } }\\r\\n  \\r\\n  .header {\\r\\n    grid-area: head;\\r\\n    background-color: #F9F5F3;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between; }\\r\\n    .header__logo {\\r\\n      margin-left: 4rem;\\r\\n      height: 4.5rem;\\r\\n      display: block; }\\r\\n  \\r\\n  .search {\\r\\n    background-color: #fff;\\r\\n    border-radius: 10rem;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding-left: 3rem;\\r\\n    transition: all .3s; }\\r\\n    .search:focus-within {\\r\\n      transform: translateY(-2px);\\r\\n      box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); }\\r\\n    .search__field {\\r\\n      border: none;\\r\\n      background: none;\\r\\n      font-family: inherit;\\r\\n      color: inherit;\\r\\n      font-size: 1.7rem;\\r\\n      width: 30rem; }\\r\\n      .search__field:focus {\\r\\n        outline: none; }\\r\\n      .search__field::placeholder {\\r\\n        color: #DAD0CC; }\\r\\n  \\r\\n  .likes {\\r\\n    position: relative;\\r\\n    align-self: stretch;\\r\\n    padding: 0 !important; }\\r\\n    .likes__field {\\r\\n      cursor: pointer;\\r\\n      padding: 0 4rem;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      height: 100%;\\r\\n      transition: all .3s; }\\r\\n      .likes__field:hover {\\r\\n        background-color: #F2EFEE; }\\r\\n    .likes__panel:hover,\\r\\n    .likes__field:hover + .likes__panel {\\r\\n      visibility: visible;\\r\\n      opacity: 1; }\\r\\n    .likes__icon {\\r\\n      fill: #F59A83;\\r\\n      height: 3.75rem;\\r\\n      width: 3.75rem; }\\r\\n    .likes__panel {\\r\\n      position: absolute;\\r\\n      right: 0;\\r\\n      top: 10rem;\\r\\n      z-index: 10;\\r\\n      padding: 2rem 0;\\r\\n      width: 34rem;\\r\\n      background-color: #fff;\\r\\n      box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);\\r\\n      visibility: hidden;\\r\\n      opacity: 0;\\r\\n      transition: all .5s .2s; }\\r\\n  \\r\\n  .results,\\r\\n  .likes {\\r\\n    padding: 3rem 0; }\\r\\n    .results__list,\\r\\n    .likes__list {\\r\\n      list-style: none; }\\r\\n    .results__link:link, .results__link:visited,\\r\\n    .likes__link:link,\\r\\n    .likes__link:visited {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      padding: 1.5rem 3rem;\\r\\n      transition: all .3s;\\r\\n      border-right: 1px solid #fff;\\r\\n      text-decoration: none; }\\r\\n    .results__link:hover,\\r\\n    .likes__link:hover {\\r\\n      background-color: #F9F5F3;\\r\\n      transform: translateY(-2px); }\\r\\n    .results__link--active,\\r\\n    .likes__link--active {\\r\\n      background-color: #F9F5F3; }\\r\\n    .results__fig,\\r\\n    .likes__fig {\\r\\n      flex: 0 0 5.5rem;\\r\\n      border-radius: 50%;\\r\\n      overflow: hidden;\\r\\n      height: 5.5rem;\\r\\n      margin-right: 2rem;\\r\\n      position: relative;\\r\\n      backface-visibility: hidden; }\\r\\n      .results__fig::before,\\r\\n      .likes__fig::before {\\r\\n        content: '';\\r\\n        display: block;\\r\\n        height: 100%;\\r\\n        width: 100%;\\r\\n        position: absolute;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\r\\n        opacity: .4; }\\r\\n      .results__fig img,\\r\\n      .likes__fig img {\\r\\n        display: block;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        object-fit: cover;\\r\\n        transition: all .3s; }\\r\\n    .results__name,\\r\\n    .likes__name {\\r\\n      font-size: 1.3rem;\\r\\n      color: #F59A83;\\r\\n      text-transform: uppercase;\\r\\n      font-weight: 600;\\r\\n      margin-bottom: .3rem; }\\r\\n    .results__author,\\r\\n    .likes__author {\\r\\n      font-size: 1.1rem;\\r\\n      color: #968B87;\\r\\n      text-transform: uppercase;\\r\\n      font-weight: 600; }\\r\\n    .results__pages,\\r\\n    .likes__pages {\\r\\n      margin-top: 3rem;\\r\\n      padding: 0 3rem; }\\r\\n      .results__pages::after,\\r\\n      .likes__pages::after {\\r\\n        content: \\\"\\\";\\r\\n        display: table;\\r\\n        clear: both; }\\r\\n    .results__btn--prev,\\r\\n    .likes__btn--prev {\\r\\n      float: left;\\r\\n      flex-direction: row-reverse; }\\r\\n    .results__btn--next,\\r\\n    .likes__btn--next {\\r\\n      float: right; }\\r\\n  \\r\\n  .recipe {\\r\\n    background-color: #F9F5F3;\\r\\n    border-top: 1px solid #fff; }\\r\\n    .recipe__fig {\\r\\n      height: 30rem;\\r\\n      position: relative;\\r\\n      transform: scale(1.04) translateY(-1px);\\r\\n      transform-origin: top; }\\r\\n      .recipe__fig::before {\\r\\n        content: '';\\r\\n        display: block;\\r\\n        height: 100%;\\r\\n        width: 100%;\\r\\n        position: absolute;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\r\\n        opacity: .6; }\\r\\n    .recipe__img {\\r\\n      width: 100%;\\r\\n      display: block;\\r\\n      height: 100%;\\r\\n      object-fit: cover; }\\r\\n    .recipe__title {\\r\\n      position: absolute;\\r\\n      bottom: 0;\\r\\n      left: 50%;\\r\\n      transform: translate(-50%, 20%) skewY(-6deg);\\r\\n      color: #fff;\\r\\n      font-weight: 700;\\r\\n      font-size: 2.75rem;\\r\\n      text-transform: uppercase;\\r\\n      width: 70%;\\r\\n      line-height: 1.95;\\r\\n      text-align: center; }\\r\\n      .recipe__title span {\\r\\n        -webkit-box-decoration-break: clone;\\r\\n        box-decoration-break: clone;\\r\\n        padding: 1.3rem 2rem;\\r\\n        background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }\\r\\n    .recipe__details {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      padding: 8rem 3rem 3rem 3rem; }\\r\\n    .recipe__info {\\r\\n      font-size: 1.5rem;\\r\\n      text-transform: uppercase;\\r\\n      display: flex;\\r\\n      align-items: center; }\\r\\n      .recipe__info:not(:last-child) {\\r\\n        margin-right: 4rem; }\\r\\n    .recipe__info-icon {\\r\\n      height: 2rem;\\r\\n      width: 2rem;\\r\\n      fill: #F59A83;\\r\\n      margin-right: 1rem; }\\r\\n    .recipe__info-data {\\r\\n      margin-right: .4rem;\\r\\n      font-weight: 600; }\\r\\n    .recipe__info-buttons {\\r\\n      display: flex;\\r\\n      margin-left: 1.5rem;\\r\\n      visibility: hidden;\\r\\n      opacity: 0;\\r\\n      transform: translateY(5px);\\r\\n      transition: all .4s; }\\r\\n    .recipe:hover .recipe__info-buttons {\\r\\n      visibility: visible;\\r\\n      opacity: 1;\\r\\n      transform: translateY(0); }\\r\\n    .recipe__love {\\r\\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\r\\n      border-radius: 50%;\\r\\n      border: none;\\r\\n      cursor: pointer;\\r\\n      height: 4.5rem;\\r\\n      width: 4.5rem;\\r\\n      margin-left: auto;\\r\\n      transition: all .2s;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      justify-content: center; }\\r\\n      .recipe__love:hover {\\r\\n        transform: scale(1.07); }\\r\\n      .recipe__love:focus {\\r\\n        outline: none; }\\r\\n      .recipe__love svg {\\r\\n        height: 2.75rem;\\r\\n        width: 2.75rem;\\r\\n        fill: #fff; }\\r\\n    .recipe__ingredients {\\r\\n      padding: 4rem 5rem;\\r\\n      font-size: 1.5rem;\\r\\n      line-height: 1.4;\\r\\n      background-color: #F2EFEE;\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      align-items: center; }\\r\\n    .recipe__ingredient-list {\\r\\n      display: grid;\\r\\n      grid-template-columns: 1fr 1fr;\\r\\n      grid-column-gap: 1.5rem;\\r\\n      grid-row-gap: 2.5rem;\\r\\n      list-style: none;\\r\\n      margin-bottom: 3rem; }\\r\\n    .recipe__item {\\r\\n      display: flex; }\\r\\n    .recipe__icon {\\r\\n      height: 1.8rem;\\r\\n      width: 1.8rem;\\r\\n      fill: #F59A83;\\r\\n      border: 1px solid #F59A83;\\r\\n      border-radius: 50%;\\r\\n      padding: 2px;\\r\\n      margin-right: 1rem;\\r\\n      flex: 0 0 auto;\\r\\n      margin-top: .1rem; }\\r\\n    .recipe__count {\\r\\n      margin-right: .5rem;\\r\\n      flex: 0 0 auto; }\\r\\n    .recipe__directions {\\r\\n      padding: 4rem;\\r\\n      padding-bottom: 5rem;\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      align-items: center; }\\r\\n    .recipe__directions-text {\\r\\n      font-size: 1.5rem;\\r\\n      text-align: center;\\r\\n      width: 90%;\\r\\n      margin-bottom: 3rem;\\r\\n      color: #968B87; }\\r\\n    .recipe__by {\\r\\n      font-weight: 700; }\\r\\n  \\r\\n  .shopping {\\r\\n    padding: 3rem 4rem;\\r\\n    display: flex;\\r\\n    flex-direction: column; }\\r\\n    .shopping__list {\\r\\n      list-style: none;\\r\\n      max-height: 77rem;\\r\\n      overflow: scroll; }\\r\\n    .shopping__item {\\r\\n      display: flex;\\r\\n      align-items: flex-start;\\r\\n      padding: 1.3rem 0;\\r\\n      border-bottom: 1px solid #F2EFEE;\\r\\n      position: relative; }\\r\\n    .shopping__count {\\r\\n      flex: 0 0 7.5rem;\\r\\n      padding: .4rem .5rem;\\r\\n      border: 1px solid #F2EFEE;\\r\\n      border-radius: 3px;\\r\\n      margin-right: 2rem;\\r\\n      cursor: pointer;\\r\\n      display: flex;\\r\\n      justify-content: space-between; }\\r\\n      .shopping__count input {\\r\\n        color: inherit;\\r\\n        font-family: inherit;\\r\\n        font-size: 1.2rem;\\r\\n        text-align: center;\\r\\n        border: none;\\r\\n        width: 3.7rem;\\r\\n        border-radius: 3px; }\\r\\n        .shopping__count input:focus {\\r\\n          outline: none;\\r\\n          background-color: #F2EFEE; }\\r\\n      .shopping__count p {\\r\\n        font-size: 1.2rem; }\\r\\n    .shopping__description {\\r\\n      flex: 1;\\r\\n      font-size: 1.3rem;\\r\\n      margin-top: .4rem;\\r\\n      margin-right: 1.5rem; }\\r\\n    .shopping__delete {\\r\\n      margin-top: .5rem;\\r\\n      position: absolute;\\r\\n      right: 0;\\r\\n      background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);\\r\\n      width: 3.75rem;\\r\\n      padding-left: 2rem;\\r\\n      visibility: hidden;\\r\\n      opacity: 0;\\r\\n      transition: all .5s; }\\r\\n    .shopping__item:hover .shopping__delete {\\r\\n      opacity: 1;\\r\\n      visibility: visible; }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./assets/fonts/Nunito-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Nunito-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"09b2f37e93bedfaa2976ab75c8366c14.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Nunito-Regular.ttf?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/first */ \"./js/models/first.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n \r\n\r\nconsole.log('hey man' + _models_first__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/models/first.js":
/*!****************************!*\
  !*** ./js/models/first.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = `i'm super crud`;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\r\n\n\n//# sourceURL=webpack:///./js/models/first.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ });