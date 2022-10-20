"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/employeerole";
exports.ids = ["pages/api/employeerole"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./common/errorHandler.js":
/*!********************************!*\
  !*** ./common/errorHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ErrorHandler extends Error {\n    constructor(message, statusCode){\n        super(message);\n        this.statusCode = statusCode;\n        Error.captureStackTrace(this, this.constructor);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21tb24vZXJyb3JIYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxZQUFZLFNBQVNDLEtBQUs7SUFDOUJDLFlBQVlDLE9BQU8sRUFBRUMsVUFBVSxDQUFFO1FBQy9CLEtBQUssQ0FBQ0QsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDO1FBQzdCSCxLQUFLLENBQUNJLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNILFdBQVcsQ0FBQyxDQUFDO0tBQ2pEO0NBQ0Y7QUFFRCxpRUFBZUYsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhhbXRpbmF0aW9uLy4vY29tbW9uL2Vycm9ySGFuZGxlci5qcz80ZjkyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVycm9ySGFuZGxlciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyO1xuIl0sIm5hbWVzIjpbIkVycm9ySGFuZGxlciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwic3RhdHVzQ29kZSIsImNhcHR1cmVTdGFja1RyYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./common/errorHandler.js\n");

/***/ }),

/***/ "(api)/./common/errormiddleware.js":
/*!***********************************!*\
  !*** ./common/errormiddleware.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst middleware = (err, req, res, next)=>{\n    err.statusCode = err.statusCode || 500;\n    let error = {\n        ...err\n    };\n    error.message = err.message;\n    res.status(err.statusCode).json({\n        error,\n        message: error.message,\n        stack: error.stack\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21tb24vZXJyb3JtaWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxHQUFLO0lBQzFDSCxHQUFHLENBQUNJLFVBQVUsR0FBR0osR0FBRyxDQUFDSSxVQUFVLElBQUksR0FBRyxDQUFDO0lBQ3ZDLElBQUlDLEtBQUssR0FBRztRQUFFLEdBQUdMLEdBQUc7S0FBRTtJQUN0QkssS0FBSyxDQUFDQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ00sT0FBTyxDQUFDO0lBQzVCSixHQUFHLENBQUNLLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxVQUFVLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO1FBQzlCSCxLQUFLO1FBQ0xDLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPO1FBQ3RCRyxLQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FBSztLQUNuQixDQUFDLENBQUM7Q0FDSjtBQUVELGlFQUFlVixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeGFtdGluYXRpb24vLi9jb21tb24vZXJyb3JtaWRkbGV3YXJlLmpzPzQ1MjciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWlkZGxld2FyZSA9IChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGVyci5zdGF0dXNDb2RlID0gZXJyLnN0YXR1c0NvZGUgfHwgNTAwO1xuICBsZXQgZXJyb3IgPSB7IC4uLmVyciB9O1xuICBlcnJvci5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUpLmpzb24oe1xuICAgIGVycm9yLFxuICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgc3RhY2s6IGVycm9yLnN0YWNrLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7XG4iXSwibmFtZXMiOlsibWlkZGxld2FyZSIsImVyciIsInJlcSIsInJlcyIsIm5leHQiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./common/errormiddleware.js\n");

/***/ }),

/***/ "(api)/./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst util = __webpack_require__(/*! util */ \"util\");\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst pool = mysql.createPool({\n    connectionLimit: 10,\n    host: \"localhost\",\n    user: \"root\",\n    password: \"FemikAIshwarya@123\",\n    database: \"exam\"\n});\npool.getConnection((err, connection)=>{\n    if (err) {\n        if (err.code === \"PROTOCOL_CONNECTION_LOST\") {\n            console.error(\"Database connection was closed.\");\n        }\n        if (err.code === \"ER_CON_COUNT_ERROR\") {\n            console.error(\"Database has too many connections.\");\n        }\n        if (err.code === \"ECONNREFUSED\") {\n            console.error(\"Database connection was refused.\");\n        }\n    }\n    if (connection) connection.release();\n    return;\n});\npool.query = util.promisify(pool.query);\nconst executeQuery = (query, arraParms)=>{\n    return new Promise((resolve, reject)=>{\n        try {\n            pool.query(query, arraParms, (err, data)=>{\n                if (err) {\n                    console.log(\"error in executing the query\");\n                    reject(err);\n                }\n                resolve(data);\n            });\n        } catch (err) {\n            reject(err);\n        }\n    });\n};\nmodule.exports = {\n    executeQuery\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQU0sQ0FBQztBQUM1QixNQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsc0JBQVEsQ0FBQztBQUMvQixNQUFNRSxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsVUFBVSxDQUFDO0lBQzVCQyxlQUFlLEVBQUUsRUFBRTtJQUNwQkMsSUFBSSxFQUFPLFdBQVc7SUFDckJDLElBQUksRUFBTyxNQUFNO0lBQ2pCQyxRQUFRLEVBQUcsb0JBQW9CO0lBQy9CQyxRQUFRLEVBQUcsTUFBTTtDQUNsQixDQUFDO0FBRUZOLElBQUksQ0FBQ08sYUFBYSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsVUFBVSxHQUFLO0lBQ3RDLElBQUlELEdBQUcsRUFBRTtRQUNQLElBQUlBLEdBQUcsQ0FBQ0UsSUFBSSxLQUFLLDBCQUEwQixFQUFFO1lBQzNDQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSUosR0FBRyxDQUFDRSxJQUFJLEtBQUssb0JBQW9CLEVBQUU7WUFDckNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJSixHQUFHLENBQUNFLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDL0JDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDbkQ7S0FDRjtJQUVELElBQUlILFVBQVUsRUFBRUEsVUFBVSxDQUFDSSxPQUFPLEVBQUUsQ0FBQztJQUVyQyxPQUFPO0NBQ1IsQ0FBQyxDQUFDO0FBRUhiLElBQUksQ0FBQ2MsS0FBSyxHQUFHakIsSUFBSSxDQUFDa0IsU0FBUyxDQUFDZixJQUFJLENBQUNjLEtBQUssQ0FBQyxDQUFDO0FBRXhDLE1BQU1FLFlBQVksR0FBRyxDQUFDRixLQUFLLEVBQUVHLFNBQVMsR0FBSztJQUN6QyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sR0FBSztRQUN0QyxJQUFJO1lBQ0ZwQixJQUFJLENBQUNjLEtBQUssQ0FBQ0EsS0FBSyxFQUFFRyxTQUFTLEVBQUUsQ0FBQ1QsR0FBRyxFQUFFYSxJQUFJLEdBQUs7Z0JBQzFDLElBQUliLEdBQUcsRUFBRTtvQkFDUEcsT0FBTyxDQUFDVyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztvQkFDNUNGLE1BQU0sQ0FBQ1osR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBQ0RXLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLENBQUM7YUFDZixDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9iLEdBQUcsRUFBRTtZQUNaWSxNQUFNLENBQUNaLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7S0FDRixDQUFDLENBQUM7Q0FDSjtBQUVBZSxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUFFUixZQUFZO0NBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0V4YW10aW5hdGlvbi8uL2NvbmZpZy9kYi5qcz9iNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xuY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICBjb25uZWN0aW9uTGltaXQ6IDEwLFxuXHRob3N0ICAgICA6ICdsb2NhbGhvc3QnLFxuICB1c2VyICAgICA6ICdyb290JywgICBcbiAgcGFzc3dvcmQgOiAnRmVtaWtBSXNod2FyeWFAMTIzJywgIFxuICBkYXRhYmFzZSA6ICdleGFtJyAgXG59KTtcblxucG9vbC5nZXRDb25uZWN0aW9uKChlcnIsIGNvbm5lY3Rpb24pID0+IHtcbiAgaWYgKGVycikge1xuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BST1RPQ09MX0NPTk5FQ1RJT05fTE9TVCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gd2FzIGNsb3NlZC4nKTtcbiAgICB9XG4gICAgaWYgKGVyci5jb2RlID09PSAnRVJfQ09OX0NPVU5UX0VSUk9SJykge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgaGFzIHRvbyBtYW55IGNvbm5lY3Rpb25zLicpO1xuICAgIH1cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdFQ09OTlJFRlVTRUQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIHdhcyByZWZ1c2VkLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25uZWN0aW9uKSBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICByZXR1cm47XG59KTtcblxucG9vbC5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KHBvb2wucXVlcnkpO1xuXG5jb25zdCBleGVjdXRlUXVlcnkgPSAocXVlcnksIGFycmFQYXJtcykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBwb29sLnF1ZXJ5KHF1ZXJ5LCBhcnJhUGFybXMsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZXhlY3V0aW5nIHRoZSBxdWVyeVwiKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuIG1vZHVsZS5leHBvcnRzID0geyBleGVjdXRlUXVlcnkgfTtcbiJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIm15c3FsIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJjb25uZWN0aW9uTGltaXQiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJnZXRDb25uZWN0aW9uIiwiZXJyIiwiY29ubmVjdGlvbiIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWxlYXNlIiwicXVlcnkiLCJwcm9taXNpZnkiLCJleGVjdXRlUXVlcnkiLCJhcnJhUGFybXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGEiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/db.js\n");

/***/ }),

/***/ "(api)/./controller/employees/employeeRole.js":
/*!**********************************************!*\
  !*** ./controller/employees/employeeRole.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllRole\": () => (/* binding */ getAllRole),\n/* harmony export */   \"getRoleById\": () => (/* binding */ getRoleById)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/db */ \"(api)/./config/db.js\");\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_db__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/errorHandler */ \"(api)/./common/errorHandler.js\");\n\n\nconst getAllRole = async (req, res)=>{\n    try {\n        console.log(\"all the employee_role\");\n        let employeesData = await (0,_config_db__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(\"select * from employee_role\", []);\n        res.send(employeesData);\n    } catch (err) {\n        res.status(500).json(err);\n    }\n};\nconst getRoleById = async (req, res, next)=>{\n    let id = req.query.id;\n    try {\n        console.log(\"employee_role by id\");\n        let employeesData = await (0,_config_db__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`select * from employee_role where id=${id}`, []);\n        if (employeesData.length > 0) res.status(200).json(employeeData);\n        else {\n            next(new _common_errorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`no employee_role found with this id ${id}`, 404));\n        }\n    } catch (err) {\n        res.status(500).json(err);\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb250cm9sbGVyL2VtcGxveWVlcy9lbXBsb3llZVJvbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDTTtBQUNyRCxNQUFNRSxVQUFVLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDckMsSUFBSTtRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUlDLGFBQWEsR0FBRyxNQUFNUCx3REFBWSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsQ0FBQztRQUN6RUksR0FBRyxDQUFDSSxJQUFJLENBQUNELGFBQWEsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsT0FBT0UsR0FBRyxFQUFFO1FBQ1pMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0NBQ0Y7QUFFRCxNQUFNRyxXQUFXLEdBQUcsT0FBT1QsR0FBRyxFQUFFQyxHQUFHLEVBQUVTLElBQUksR0FBSztJQUM1QyxJQUFJQyxFQUFFLEdBQUdYLEdBQUcsQ0FBQ1ksS0FBSyxDQUFDRCxFQUFFO0lBQ3JCLElBQUk7UUFDRlQsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJQyxhQUFhLEdBQUcsTUFBTVAsd0RBQVksQ0FDcEMsQ0FBQyxxQ0FBcUMsRUFBRWMsRUFBRSxDQUFDLENBQUMsRUFDNUMsRUFBRSxDQUNIO1FBQ0QsSUFBSVAsYUFBYSxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFWixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTSxZQUFZLENBQUMsQ0FBQzthQUM1RDtZQUNISixJQUFJLENBQUMsSUFBSVosNERBQVksQ0FBQyxDQUFDLG9DQUFvQyxFQUFFYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUU7S0FDRixDQUFDLE9BQU9MLEdBQUcsRUFBRTtRQUNaTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQztLQUMzQjtDQUNGO0FBWUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeGFtdGluYXRpb24vLi9jb250cm9sbGVyL2VtcGxveWVlcy9lbXBsb3llZVJvbGUuanM/NmFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjdXRlUXVlcnkgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2RiXCI7XG5pbXBvcnQgRXJyb3JIYW5kbGVyIGZyb20gXCIuLi8uLi9jb21tb24vZXJyb3JIYW5kbGVyXCI7XG5jb25zdCBnZXRBbGxSb2xlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJhbGwgdGhlIGVtcGxveWVlX3JvbGVcIik7XG4gICAgbGV0IGVtcGxveWVlc0RhdGEgPSBhd2FpdCBleGVjdXRlUXVlcnkoXCJzZWxlY3QgKiBmcm9tIGVtcGxveWVlX3JvbGVcIiwgW10pO1xuICAgIHJlcy5zZW5kKGVtcGxveWVlc0RhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICB9XG59O1xuXG5jb25zdCBnZXRSb2xlQnlJZCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgaWQgPSByZXEucXVlcnkuaWQ7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJlbXBsb3llZV9yb2xlIGJ5IGlkXCIpO1xuICAgIGxldCBlbXBsb3llZXNEYXRhID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KFxuICAgICAgYHNlbGVjdCAqIGZyb20gZW1wbG95ZWVfcm9sZSB3aGVyZSBpZD0ke2lkfWAsXG4gICAgICBbXVxuICAgICk7XG4gICAgaWYgKGVtcGxveWVlc0RhdGEubGVuZ3RoID4gMCkgcmVzLnN0YXR1cygyMDApLmpzb24oZW1wbG95ZWVEYXRhKTtcbiAgICBlbHNlIHtcbiAgICAgIG5leHQobmV3IEVycm9ySGFuZGxlcihgbm8gZW1wbG95ZWVfcm9sZSBmb3VuZCB3aXRoIHRoaXMgaWQgJHtpZH1gLCA0MDQpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gIH1cbn07XG5cblxuXG5cblxuXG5cbmV4cG9ydCB7XG4gIGdldEFsbFJvbGUsXG4gIGdldFJvbGVCeUlkLFxuXG59OyJdLCJuYW1lcyI6WyJleGVjdXRlUXVlcnkiLCJFcnJvckhhbmRsZXIiLCJnZXRBbGxSb2xlIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVtcGxveWVlc0RhdGEiLCJzZW5kIiwiZXJyIiwic3RhdHVzIiwianNvbiIsImdldFJvbGVCeUlkIiwibmV4dCIsImlkIiwicXVlcnkiLCJsZW5ndGgiLCJlbXBsb3llZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./controller/employees/employeeRole.js\n");

/***/ }),

/***/ "(api)/./pages/api/employeerole/index.js":
/*!*****************************************!*\
  !*** ./pages/api/employeerole/index.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _common_errormiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/errormiddleware */ \"(api)/./common/errormiddleware.js\");\n/* harmony import */ var _controller_employees_employeeRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/employees/employeeRole */ \"(api)/./controller/employees/employeeRole.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_common_errormiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.get(_controller_employees_employeeRole__WEBPACK_IMPORTED_MODULE_2__.getAllRole);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWVyb2xlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFJRjtBQUNwRCxNQUFNRyxPQUFPLEdBQUdILHdEQUFFLENBQUNDLCtEQUFPLENBQUM7QUFDM0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFHRiwwRUFBVSxDQUFDLENBQUM7QUFFMUIsaUVBQWVDLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0V4YW10aW5hdGlvbi8uL3BhZ2VzL2FwaS9lbXBsb3llZXJvbGUvaW5kZXguanM/Y2Y4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuaW1wb3J0IG9uRXJyb3IgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lcnJvcm1pZGRsZXdhcmVcIjtcbmltcG9ydCB7XG4gIGdldEFsbFJvbGUsXG5cbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXIvZW1wbG95ZWVzL2VtcGxveWVlUm9sZVwiO1xuY29uc3QgaGFuZGxlciA9IG5jKG9uRXJyb3IpO1xuaGFuZGxlci5nZXQoICBnZXRBbGxSb2xlKTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJuYyIsIm9uRXJyb3IiLCJnZXRBbGxSb2xlIiwiaGFuZGxlciIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/employeerole/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employeerole/index.js"));
module.exports = __webpack_exports__;

})();