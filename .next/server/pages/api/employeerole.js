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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ErrorHandler extends Error {\n    constructor(message, statusCode){\n        super(message);\n        this.statusCode = statusCode;\n        Error.captureStackTrace(this, this.constructor);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21tb24vZXJyb3JIYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxZQUFZLFNBQVNDLEtBQUs7SUFDOUJDLFlBQVlDLE9BQU8sRUFBRUMsVUFBVSxDQUFFO1FBQy9CLEtBQUssQ0FBQ0QsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDO1FBQzdCSCxLQUFLLENBQUNJLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNILFdBQVcsQ0FBQyxDQUFDO0tBQ2pEO0NBQ0Y7QUFFRCxpRUFBZUYsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsYXZhbl9FeGFtaW5hdGlvbi8uL2NvbW1vbi9lcnJvckhhbmRsZXIuanM/NGY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFcnJvckhhbmRsZXIgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ySGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJFcnJvckhhbmRsZXIiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsInN0YXR1c0NvZGUiLCJjYXB0dXJlU3RhY2tUcmFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./common/errorHandler.js\n");

/***/ }),

/***/ "(api)/./common/errormiddleware.js":
/*!***********************************!*\
  !*** ./common/errormiddleware.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst middleware = (err, req, res, next)=>{\n    err.statusCode = err.statusCode || 500;\n    let error = {\n        ...err\n    };\n    error.message = err.message;\n    res.status(err.statusCode).json({\n        error,\n        message: error.message,\n        stack: error.stack\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21tb24vZXJyb3JtaWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxHQUFLO0lBQzFDSCxHQUFHLENBQUNJLFVBQVUsR0FBR0osR0FBRyxDQUFDSSxVQUFVLElBQUksR0FBRyxDQUFDO0lBQ3ZDLElBQUlDLEtBQUssR0FBRztRQUFFLEdBQUdMLEdBQUc7S0FBRTtJQUN0QkssS0FBSyxDQUFDQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ00sT0FBTyxDQUFDO0lBQzVCSixHQUFHLENBQUNLLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxVQUFVLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO1FBQzlCSCxLQUFLO1FBQ0xDLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPO1FBQ3RCRyxLQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FBSztLQUNuQixDQUFDLENBQUM7Q0FDSjtBQUVELGlFQUFlVixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxhdmFuX0V4YW1pbmF0aW9uLy4vY29tbW9uL2Vycm9ybWlkZGxld2FyZS5qcz80NTI3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1pZGRsZXdhcmUgPSAoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICBlcnIuc3RhdHVzQ29kZSA9IGVyci5zdGF0dXNDb2RlIHx8IDUwMDtcbiAgbGV0IGVycm9yID0geyAuLi5lcnIgfTtcbiAgZXJyb3IubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlKS5qc29uKHtcbiAgICBlcnJvcixcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIHN0YWNrOiBlcnJvci5zdGFjayxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlO1xuIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJlcnIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic3RhdHVzQ29kZSIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsImpzb24iLCJzdGFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./common/errormiddleware.js\n");

/***/ }),

/***/ "(api)/./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst util = __webpack_require__(/*! util */ \"util\");\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst pool = mysql.createPool({\n    connectionLimit: 10,\n    host: \"localhost\",\n    user: \"root\",\n    password: \"M@th1N1th1\",\n    database: \"exam\"\n});\npool.getConnection((err, connection)=>{\n    if (err) {\n        if (err.code === \"PROTOCOL_CONNECTION_LOST\") {\n            console.error(\"Database connection was closed.\");\n        }\n        if (err.code === \"ER_CON_COUNT_ERROR\") {\n            console.error(\"Database has too many connections.\");\n        }\n        if (err.code === \"ECONNREFUSED\") {\n            console.error(\"Database connection was refused.\");\n        }\n    }\n    if (connection) connection.release();\n    return;\n});\npool.query = util.promisify(pool.query);\nconst executeQuery = (query, arraParms)=>{\n    return new Promise((resolve, reject)=>{\n        try {\n            pool.query(query, arraParms, (err, data)=>{\n                if (err) {\n                    console.log(\"error in executing the query\");\n                    reject(err);\n                }\n                resolve(data);\n            });\n        } catch (err) {\n            reject(err);\n        }\n    });\n};\nmodule.exports = {\n    executeQuery\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQU0sQ0FBQztBQUM1QixNQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsc0JBQVEsQ0FBQztBQUMvQixNQUFNRSxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsVUFBVSxDQUFDO0lBQzVCQyxlQUFlLEVBQUUsRUFBRTtJQUNwQkMsSUFBSSxFQUFPLFdBQVc7SUFDckJDLElBQUksRUFBTyxNQUFNO0lBQ2pCQyxRQUFRLEVBQUcsWUFBWTtJQUN2QkMsUUFBUSxFQUFHLE1BQU07Q0FDbEIsQ0FBQztBQUVGTixJQUFJLENBQUNPLGFBQWEsQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLFVBQVUsR0FBSztJQUN0QyxJQUFJRCxHQUFHLEVBQUU7UUFDUCxJQUFJQSxHQUFHLENBQUNFLElBQUksS0FBSywwQkFBMEIsRUFBRTtZQUMzQ0MsT0FBTyxDQUFDQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUlKLEdBQUcsQ0FBQ0UsSUFBSSxLQUFLLG9CQUFvQixFQUFFO1lBQ3JDQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSUosR0FBRyxDQUFDRSxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQy9CQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQ25EO0tBQ0Y7SUFFRCxJQUFJSCxVQUFVLEVBQUVBLFVBQVUsQ0FBQ0ksT0FBTyxFQUFFLENBQUM7SUFFckMsT0FBTztDQUNSLENBQUMsQ0FBQztBQUVIYixJQUFJLENBQUNjLEtBQUssR0FBR2pCLElBQUksQ0FBQ2tCLFNBQVMsQ0FBQ2YsSUFBSSxDQUFDYyxLQUFLLENBQUMsQ0FBQztBQUV4QyxNQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsS0FBSyxFQUFFRyxTQUFTLEdBQUs7SUFDekMsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7UUFDdEMsSUFBSTtZQUNGcEIsSUFBSSxDQUFDYyxLQUFLLENBQUNBLEtBQUssRUFBRUcsU0FBUyxFQUFFLENBQUNULEdBQUcsRUFBRWEsSUFBSSxHQUFLO2dCQUMxQyxJQUFJYixHQUFHLEVBQUU7b0JBQ1BHLE9BQU8sQ0FBQ1csR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7b0JBQzVDRixNQUFNLENBQUNaLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2dCQUNEVyxPQUFPLENBQUNFLElBQUksQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxPQUFPYixHQUFHLEVBQUU7WUFDWlksTUFBTSxDQUFDWixHQUFHLENBQUMsQ0FBQztTQUNiO0tBQ0YsQ0FBQyxDQUFDO0NBQ0o7QUFFQWUsTUFBTSxDQUFDQyxPQUFPLEdBQUc7SUFBRVIsWUFBWTtDQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxhdmFuX0V4YW1pbmF0aW9uLy4vY29uZmlnL2RiLmpzP2I0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XG5jb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gIGNvbm5lY3Rpb25MaW1pdDogMTAsXG5cdGhvc3QgICAgIDogJ2xvY2FsaG9zdCcsXG4gIHVzZXIgICAgIDogJ3Jvb3QnLCAgIFxuICBwYXNzd29yZCA6ICdNQHRoMU4xdGgxJywgIFxuICBkYXRhYmFzZSA6ICdleGFtJyAgXG59KTtcblxucG9vbC5nZXRDb25uZWN0aW9uKChlcnIsIGNvbm5lY3Rpb24pID0+IHtcbiAgaWYgKGVycikge1xuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BST1RPQ09MX0NPTk5FQ1RJT05fTE9TVCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gd2FzIGNsb3NlZC4nKTtcbiAgICB9XG4gICAgaWYgKGVyci5jb2RlID09PSAnRVJfQ09OX0NPVU5UX0VSUk9SJykge1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgaGFzIHRvbyBtYW55IGNvbm5lY3Rpb25zLicpO1xuICAgIH1cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdFQ09OTlJFRlVTRUQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIHdhcyByZWZ1c2VkLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25uZWN0aW9uKSBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICByZXR1cm47XG59KTtcblxucG9vbC5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KHBvb2wucXVlcnkpO1xuXG5jb25zdCBleGVjdXRlUXVlcnkgPSAocXVlcnksIGFycmFQYXJtcykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBwb29sLnF1ZXJ5KHF1ZXJ5LCBhcnJhUGFybXMsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZXhlY3V0aW5nIHRoZSBxdWVyeVwiKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuIG1vZHVsZS5leHBvcnRzID0geyBleGVjdXRlUXVlcnkgfTtcbiJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIm15c3FsIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJjb25uZWN0aW9uTGltaXQiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJnZXRDb25uZWN0aW9uIiwiZXJyIiwiY29ubmVjdGlvbiIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWxlYXNlIiwicXVlcnkiLCJwcm9taXNpZnkiLCJleGVjdXRlUXVlcnkiLCJhcnJhUGFybXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGEiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/db.js\n");

/***/ }),

/***/ "(api)/./controller/employees/employeeRole.js":
/*!**********************************************!*\
  !*** ./controller/employees/employeeRole.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllRole\": () => (/* binding */ getAllRole),\n/* harmony export */   \"getRoleById\": () => (/* binding */ getRoleById)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/db */ \"(api)/./config/db.js\");\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_db__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/errorHandler */ \"(api)/./common/errorHandler.js\");\n\n\nconst getAllRole = async (req, res)=>{\n    try {\n        console.log(\"all the employee_role\");\n        let employeesData = await (0,_config_db__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(\"select * from employee_role\", []);\n        res.send(employeesData);\n    } catch (err) {\n        res.status(500).json(err);\n    }\n};\nconst getRoleById = async (req, res, next)=>{\n    let id = req.query.id;\n    try {\n        console.log(\"employee_role by id\");\n        let employeesData = await (0,_config_db__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`select * from employee_role where id=${id}`, []);\n        if (employeesData.length > 0) res.status(200).json(employeesData);\n        else {\n            next(new _common_errorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`no employee_role found with this id ${id}`, 404));\n        }\n    } catch (err) {\n        res.status(500).json(err);\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb250cm9sbGVyL2VtcGxveWVlcy9lbXBsb3llZVJvbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDTTtBQUNyRCxNQUFNRSxVQUFVLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDckMsSUFBSTtRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUlDLGFBQWEsR0FBRyxNQUFNUCx3REFBWSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsQ0FBQztRQUN6RUksR0FBRyxDQUFDSSxJQUFJLENBQUNELGFBQWEsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsT0FBT0UsR0FBRyxFQUFFO1FBQ1pMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0NBQ0Y7QUFFRCxNQUFNRyxXQUFXLEdBQUcsT0FBT1QsR0FBRyxFQUFFQyxHQUFHLEVBQUVTLElBQUksR0FBSztJQUM1QyxJQUFJQyxFQUFFLEdBQUdYLEdBQUcsQ0FBQ1ksS0FBSyxDQUFDRCxFQUFFO0lBQ3JCLElBQUk7UUFDRlQsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJQyxhQUFhLEdBQUcsTUFBTVAsd0RBQVksQ0FDcEMsQ0FBQyxxQ0FBcUMsRUFBRWMsRUFBRSxDQUFDLENBQUMsRUFDNUMsRUFBRSxDQUNIO1FBQ0QsSUFBSVAsYUFBYSxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFWixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixhQUFhLENBQUMsQ0FBQzthQUM3RDtZQUNITSxJQUFJLENBQUMsSUFBSVosNERBQVksQ0FBQyxDQUFDLG9DQUFvQyxFQUFFYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUU7S0FDRixDQUFDLE9BQU9MLEdBQUcsRUFBRTtRQUNaTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQztLQUMzQjtDQUNGO0FBWUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxhdmFuX0V4YW1pbmF0aW9uLy4vY29udHJvbGxlci9lbXBsb3llZXMvZW1wbG95ZWVSb2xlLmpzPzZhYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlY3V0ZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9kYlwiO1xuaW1wb3J0IEVycm9ySGFuZGxlciBmcm9tIFwiLi4vLi4vY29tbW9uL2Vycm9ySGFuZGxlclwiO1xuY29uc3QgZ2V0QWxsUm9sZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwiYWxsIHRoZSBlbXBsb3llZV9yb2xlXCIpO1xuICAgIGxldCBlbXBsb3llZXNEYXRhID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KFwic2VsZWN0ICogZnJvbSBlbXBsb3llZV9yb2xlXCIsIFtdKTtcbiAgICByZXMuc2VuZChlbXBsb3llZXNEYXRhKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0Um9sZUJ5SWQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbGV0IGlkID0gcmVxLnF1ZXJ5LmlkO1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwiZW1wbG95ZWVfcm9sZSBieSBpZFwiKTtcbiAgICBsZXQgZW1wbG95ZWVzRGF0YSA9IGF3YWl0IGV4ZWN1dGVRdWVyeShcbiAgICAgIGBzZWxlY3QgKiBmcm9tIGVtcGxveWVlX3JvbGUgd2hlcmUgaWQ9JHtpZH1gLFxuICAgICAgW11cbiAgICApO1xuICAgIGlmIChlbXBsb3llZXNEYXRhLmxlbmd0aCA+IDApIHJlcy5zdGF0dXMoMjAwKS5qc29uKGVtcGxveWVlc0RhdGEpO1xuICAgIGVsc2Uge1xuICAgICAgbmV4dChuZXcgRXJyb3JIYW5kbGVyKGBubyBlbXBsb3llZV9yb2xlIGZvdW5kIHdpdGggdGhpcyBpZCAke2lkfWAsIDQwNCkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgfVxufTtcblxuXG5cblxuXG5cblxuZXhwb3J0IHtcbiAgZ2V0QWxsUm9sZSxcbiAgZ2V0Um9sZUJ5SWQsXG5cbn07Il0sIm5hbWVzIjpbImV4ZWN1dGVRdWVyeSIsIkVycm9ySGFuZGxlciIsImdldEFsbFJvbGUiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZW1wbG95ZWVzRGF0YSIsInNlbmQiLCJlcnIiLCJzdGF0dXMiLCJqc29uIiwiZ2V0Um9sZUJ5SWQiLCJuZXh0IiwiaWQiLCJxdWVyeSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./controller/employees/employeeRole.js\n");

/***/ }),

/***/ "(api)/./pages/api/employeerole/index.js":
/*!*****************************************!*\
  !*** ./pages/api/employeerole/index.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _common_errormiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/errormiddleware */ \"(api)/./common/errormiddleware.js\");\n/* harmony import */ var _controller_employees_employeeRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/employees/employeeRole */ \"(api)/./controller/employees/employeeRole.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_common_errormiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.get(_controller_employees_employeeRole__WEBPACK_IMPORTED_MODULE_2__.getAllRole);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWVyb2xlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFJRjtBQUNwRCxNQUFNRyxPQUFPLEdBQUdILHdEQUFFLENBQUNDLCtEQUFPLENBQUM7QUFDM0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFHRiwwRUFBVSxDQUFDLENBQUM7QUFFMUIsaUVBQWVDLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGF2YW5fRXhhbWluYXRpb24vLi9wYWdlcy9hcGkvZW1wbG95ZWVyb2xlL2luZGV4LmpzP2NmODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcbmltcG9ydCBvbkVycm9yIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZXJyb3JtaWRkbGV3YXJlXCI7XG5pbXBvcnQge1xuICBnZXRBbGxSb2xlLFxuXG59IGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVyL2VtcGxveWVlcy9lbXBsb3llZVJvbGVcIjtcbmNvbnN0IGhhbmRsZXIgPSBuYyhvbkVycm9yKTtcbmhhbmRsZXIuZ2V0KCAgZ2V0QWxsUm9sZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsibmMiLCJvbkVycm9yIiwiZ2V0QWxsUm9sZSIsImhhbmRsZXIiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/employeerole/index.js\n");

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