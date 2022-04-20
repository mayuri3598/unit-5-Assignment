/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.querySelector(\"#myForm\").addEventListener(\"submit\", addItem);\n\nfunction addItem(event) {\n  event.preventDefault();\n  var name = document.querySelector(\"#name\").value;\n  var qty = document.querySelector(\"#qty\").value;\n  var priority = document.querySelector(\"#priority\").value; //  console.log(name,qty,priority)\n\n  var row = document.createElement(\"tr\");\n  var td1 = document.createElement(\"td\");\n  td1.textContent = `${name}`;\n  var td2 = document.createElement(\"td\");\n  td2.textContent = `${qty}`;\n  var td3 = document.createElement(\"td\");\n  td3.textContent = `${priority}`;\n\n  if (priority == \"high\") {\n    td3.style.backgroundColor = \"red\";\n  }\n\n  var td4 = document.createElement(\"td\");\n  td4.textContent = \"Delete\";\n  td4.addEventListener(\"click\", deleteTask);\n  row.append(td1, td2, td3, td4);\n  document.querySelector(\"tbody\").append(row);\n}\n\nfunction deleteTask() {\n  console.log(event.target.parentNode);\n  event.target.parentNode.remove();\n}\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;