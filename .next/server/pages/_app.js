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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet apolloClient;\nfunction createIsomorphLink() {\n    if (true) {\n        const { SchemaLink  } = __webpack_require__(/*! @apollo/client/link/schema */ \"@apollo/client/link/schema\");\n        const { schema  } = __webpack_require__(/*! ./schema */ \"./apollo/schema.js\");\n        return new SchemaLink({\n            schema\n        });\n    } else {}\n}\nfunction createApolloClient() {\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: createIsomorphLink(),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n    });\n}\nfunction initializeApollo(initialState = null) {\n    const _apolloClient = apolloClient ?? createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // get hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(initialState, existingCache);\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction useApollo(initialState) {\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(initialState), [\n        initialState\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQzZCO0FBQy9CO0FBRTdCLElBQUlJLFlBQVk7QUFFaEIsU0FBU0Msa0JBQWtCLEdBQUc7SUFDNUIsSUFBSSxJQUE2QixFQUFFO1FBQ2pDLE1BQU0sRUFBRUMsVUFBVSxHQUFFLEdBQUdDLG1CQUFPLENBQUMsOERBQTRCLENBQUM7UUFDNUQsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0QsbUJBQU8sQ0FBQyxvQ0FBVSxDQUFDO1FBQ3RDLE9BQU8sSUFBSUQsVUFBVSxDQUFDO1lBQUVFLE1BQU07U0FBRSxDQUFDO0tBQ2xDLE1BQU0sRUFNTjtDQUNGO0FBRUQsU0FBU0ksa0JBQWtCLEdBQUc7SUFDNUIsT0FBTyxJQUFJWCx3REFBWSxDQUFDO1FBQ3RCWSxPQUFPLEVBQUUsV0FBYSxLQUFLLFdBQVc7UUFDdENDLElBQUksRUFBRVQsa0JBQWtCLEVBQUU7UUFDMUJVLEtBQUssRUFBRSxJQUFJYix5REFBYSxFQUFFO0tBQzNCLENBQUM7Q0FDSDtBQUVNLFNBQVNjLGdCQUFnQixDQUFDQyxZQUFZLEdBQUcsSUFBSSxFQUFFO0lBQ3BELE1BQU1DLGFBQWEsR0FBR2QsWUFBWSxJQUFJUSxrQkFBa0IsRUFBRTtJQUUxRCwyRkFBMkY7SUFDM0Ysb0JBQW9CO0lBQ3BCLElBQUlLLFlBQVksRUFBRTtRQUNoQiw4REFBOEQ7UUFDOUQsTUFBTUUsYUFBYSxHQUFHRCxhQUFhLENBQUNFLE9BQU8sRUFBRTtRQUU3QyxtRkFBbUY7UUFDbkYsTUFBTUMsSUFBSSxHQUFHbEIsZ0RBQUssQ0FBQ2MsWUFBWSxFQUFFRSxhQUFhLENBQUM7UUFFL0MseUNBQXlDO1FBQ3pDRCxhQUFhLENBQUNILEtBQUssQ0FBQ08sT0FBTyxDQUFDRCxJQUFJLENBQUM7S0FDbEM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBSSxJQUE2QixFQUFFLE9BQU9ILGFBQWE7SUFDdkQsOENBQThDO0lBQzlDLElBQUksQ0FBQ2QsWUFBWSxFQUFFQSxZQUFZLEdBQUdjLGFBQWE7SUFFL0MsT0FBT0EsYUFBYTtDQUNyQjtBQUVNLFNBQVNLLFNBQVMsQ0FBQ04sWUFBWSxFQUFFO0lBQ3RDLE1BQU1PLEtBQUssR0FBR3hCLDhDQUFPLENBQUMsSUFBTWdCLGdCQUFnQixDQUFDQyxZQUFZLENBQUMsRUFBRTtRQUFDQSxZQUFZO0tBQUMsQ0FBQztJQUMzRSxPQUFPTyxLQUFLO0NBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxhdmFuX0V4YW1pbmF0aW9uLy4vYXBvbGxvL2NsaWVudC5qcz8wNTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcblxubGV0IGFwb2xsb0NsaWVudFxuXG5mdW5jdGlvbiBjcmVhdGVJc29tb3JwaExpbmsoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHsgU2NoZW1hTGluayB9ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWEnKVxuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSByZXF1aXJlKCcuL3NjaGVtYScpXG4gICAgcmV0dXJuIG5ldyBTY2hlbWFMaW5rKHsgc2NoZW1hIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBIdHRwTGluayB9ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQvbGluay9odHRwJylcbiAgICByZXR1cm4gbmV3IEh0dHBMaW5rKHtcbiAgICAgIHVyaTogJy9hcGkvZ3JhcGhxbCcsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxuICAgIGxpbms6IGNyZWF0ZUlzb21vcnBoTGluaygpLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldCBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKVxuXG4gICAgLy8gTWVyZ2UgdGhlIGV4aXN0aW5nIGNhY2hlIGludG8gZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlKVxuXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSlcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnRcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn1cbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIm1lcmdlIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlSXNvbW9ycGhMaW5rIiwiU2NoZW1hTGluayIsInJlcXVpcmUiLCJzY2hlbWEiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY3JlYXRlQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJjYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/client.js\n");

/***/ }),

/***/ "./apollo/resolvers.js":
/*!*****************************!*\
  !*** ./apollo/resolvers.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_employees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/employees */ \"./lib/employees.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_auth_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth-cookies */ \"./lib/auth-cookies.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_employees__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_employees__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst resolvers = {\n    Query: {\n        async viewer (_parent, _args, context, _info) {\n            try {\n                const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getLoginSession)(context.req);\n                if (session) {\n                    return (0,_lib_employees__WEBPACK_IMPORTED_MODULE_1__.findEmployees)({\n                        email: session.email\n                    });\n                }\n            } catch (error) {\n                throw new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError(\"Authentication token is invalid, please log in\");\n            }\n        }\n    },\n    Mutation: {\n        async signUp (_parent, args, _context, _info) {\n            console.log(args);\n            const user = await (0,_lib_employees__WEBPACK_IMPORTED_MODULE_1__.createEmployees)(args.input);\n            return {\n                user\n            };\n        },\n        async signIn (_parent, args, _context, _info) {\n            const user = await (0,_lib_employees__WEBPACK_IMPORTED_MODULE_1__.findEmployees)({\n                email: args.input.email\n            });\n            return {\n                user\n            };\n        },\n        async signOut (_parent, _args, context, _info) {\n            (0,_lib_auth_cookies__WEBPACK_IMPORTED_MODULE_3__.removeTokenCookie)(context.res);\n            return true;\n        }\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vcmVzb2x2ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5RTtBQUNVO0FBQ3JCO0FBQ1A7QUFFaEQsTUFBTVEsU0FBUyxHQUFHO0lBQ3ZCQyxLQUFLLEVBQUU7UUFDTCxNQUFNQyxNQUFNLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtZQUMzQyxJQUFJO2dCQUNGLE1BQU1DLE9BQU8sR0FBRyxNQUFNVCwwREFBZSxDQUFDTyxPQUFPLENBQUNHLEdBQUcsQ0FBQztnQkFFbEQsSUFBSUQsT0FBTyxFQUFFO29CQUNYLE9BQU9aLDZEQUFhLENBQUM7d0JBQUVjLEtBQUssRUFBRUYsT0FBTyxDQUFDRSxLQUFLO3FCQUFFLENBQUM7aUJBQy9DO2FBQ0YsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxJQUFJbEIsb0VBQW1CLENBQzNCLGdEQUFnRCxDQUNqRDthQUNGO1NBQ0Y7S0FDRjtJQUNEbUIsUUFBUSxFQUFFO1FBQ1IsTUFBTUMsTUFBTSxFQUFDVCxPQUFPLEVBQUVVLElBQUksRUFBRUMsUUFBUSxFQUFFUixLQUFLLEVBQUU7WUFDM0NTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFSCxJQUFJLENBQUUsQ0FBQztZQUNwQixNQUFNSSxJQUFJLEdBQUcsTUFBTXZCLCtEQUFlLENBQUNtQixJQUFJLENBQUNLLEtBQUssQ0FBQztZQUM5QyxPQUFPO2dCQUFFRCxJQUFJO2FBQUU7U0FDaEI7UUFDRCxNQUFNRSxNQUFNLEVBQUNoQixPQUFPLEVBQUVVLElBQUksRUFBRUMsUUFBUSxFQUFFUixLQUFLLEVBQUU7WUFDM0MsTUFBTVcsSUFBSSxHQUFHLE1BQU10Qiw2REFBYSxDQUFDO2dCQUFFYyxLQUFLLEVBQUVJLElBQUksQ0FBQ0ssS0FBSyxDQUFDVCxLQUFLO2FBQUUsQ0FBQztZQUM3RCxPQUFPO2dCQUFFUSxJQUFJO2FBQUU7U0FJaEI7UUFDRCxNQUFNRyxPQUFPLEVBQUNqQixPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDNUNQLG9FQUFpQixDQUFDTSxPQUFPLENBQUNnQixHQUFHLENBQUM7WUFDOUIsT0FBTyxJQUFJO1NBQ1o7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsYXZhbl9FeGFtaW5hdGlvbi8uL2Fwb2xsby9yZXNvbHZlcnMuanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yLCBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXG5pbXBvcnQgeyBjcmVhdGVFbXBsb3llZXMsIGZpbmRFbXBsb3llZXMsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuLi9saWIvZW1wbG95ZWVzJ1xuaW1wb3J0IHsgc2V0TG9naW5TZXNzaW9uLCBnZXRMb2dpblNlc3Npb24gfSBmcm9tICcuLi9saWIvYXV0aCdcbmltcG9ydCB7IHJlbW92ZVRva2VuQ29va2llIH0gZnJvbSAnLi4vbGliL2F1dGgtY29va2llcydcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBhc3luYyB2aWV3ZXIoX3BhcmVudCwgX2FyZ3MsIGNvbnRleHQsIF9pbmZvKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0TG9naW5TZXNzaW9uKGNvbnRleHQucmVxKVxuXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmRFbXBsb3llZXMoeyBlbWFpbDogc2Vzc2lvbi5lbWFpbCB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcihcbiAgICAgICAgICAnQXV0aGVudGljYXRpb24gdG9rZW4gaXMgaW52YWxpZCwgcGxlYXNlIGxvZyBpbidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIE11dGF0aW9uOiB7XG4gICAgYXN5bmMgc2lnblVwKF9wYXJlbnQsIGFyZ3MsIF9jb250ZXh0LCBfaW5mbykge1xuICAgICAgY29uc29sZS5sb2coIGFyZ3MgKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVFbXBsb3llZXMoYXJncy5pbnB1dClcbiAgICAgIHJldHVybiB7IHVzZXIgfVxuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKF9wYXJlbnQsIGFyZ3MsIF9jb250ZXh0LCBfaW5mbykge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZpbmRFbXBsb3llZXMoeyBlbWFpbDogYXJncy5pbnB1dC5lbWFpbCB9KVxuICAgICAgcmV0dXJuIHsgdXNlciB9XG4gICAgIFxuXG4gICAgIFxuICAgIH0sXG4gICAgYXN5bmMgc2lnbk91dChfcGFyZW50LCBfYXJncywgY29udGV4dCwgX2luZm8pIHtcbiAgICAgIHJlbW92ZVRva2VuQ29va2llKGNvbnRleHQucmVzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICB9LFxufSJdLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiVXNlcklucHV0RXJyb3IiLCJjcmVhdGVFbXBsb3llZXMiLCJmaW5kRW1wbG95ZWVzIiwidmFsaWRhdGVQYXNzd29yZCIsInNldExvZ2luU2Vzc2lvbiIsImdldExvZ2luU2Vzc2lvbiIsInJlbW92ZVRva2VuQ29va2llIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJ2aWV3ZXIiLCJfcGFyZW50IiwiX2FyZ3MiLCJjb250ZXh0IiwiX2luZm8iLCJzZXNzaW9uIiwicmVxIiwiZW1haWwiLCJlcnJvciIsIk11dGF0aW9uIiwic2lnblVwIiwiYXJncyIsIl9jb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJpbnB1dCIsInNpZ25JbiIsInNpZ25PdXQiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/resolvers.js\n");

/***/ }),

/***/ "./apollo/schema.js":
/*!**************************!*\
  !*** ./apollo/schema.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schema\": () => (/* binding */ schema)\n/* harmony export */ });\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-defs */ \"./apollo/type-defs.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./apollo/resolvers.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_resolvers__WEBPACK_IMPORTED_MODULE_2__]);\n_resolvers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst schema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_0__.makeExecutableSchema)({\n    typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_1__.typeDefs,\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__.resolvers\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vc2NoZW1hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2Q7QUFDQztBQUVoQyxNQUFNRyxNQUFNLEdBQUdILG1FQUFvQixDQUFDO0lBQ3pDQyxRQUFRO0lBQ1JDLFNBQVM7Q0FDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsYXZhbl9FeGFtaW5hdGlvbi8uL2Fwb2xsby9zY2hlbWEuanM/MGU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ2dyYXBocWwtdG9vbHMnXG5pbXBvcnQgeyB0eXBlRGVmcyB9IGZyb20gJy4vdHlwZS1kZWZzJ1xuaW1wb3J0IHsgcmVzb2x2ZXJzIH0gZnJvbSAnLi9yZXNvbHZlcnMnXG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG4gIHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG59KVxuIl0sIm5hbWVzIjpbIm1ha2VFeGVjdXRhYmxlU2NoZW1hIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJzY2hlbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/schema.js\n");

/***/ }),

/***/ "./apollo/type-defs.js":
/*!*****************************!*\
  !*** ./apollo/type-defs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type User {\n    id: ID\n    email: String\n    createdAt: Int\n  }\n\n  input SignUpInput {\n    fname:String\n    lname:String\n    DOB:String\n    email: String\n    password: String\n    phone_no: String\n  }\n\n  input SignInInput {\n    email: String!\n    password: String!\n  }\n\n  type SignUpPayload {\n    user: User!\n  }\n\n  type SignInPayload {\n    user: User!\n  }\n\n  type Query {\n    user(id: ID!): User!\n    users: [User]!\n    viewer: User\n  }\n\n  type Mutation {\n    signUp(input: SignUpInput!): SignUpPayload!\n    signIn(input: SignInInput!): SignInPayload!\n    signOut: Boolean!\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vdHlwZS1kZWZzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUU3QixNQUFNQyxRQUFRLEdBQUdELCtDQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxhdmFuX0V4YW1pbmF0aW9uLy4vYXBvbGxvL3R5cGUtZGVmcy5qcz81ZjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IElEXG4gICAgZW1haWw6IFN0cmluZ1xuICAgIGNyZWF0ZWRBdDogSW50XG4gIH1cblxuICBpbnB1dCBTaWduVXBJbnB1dCB7XG4gICAgZm5hbWU6U3RyaW5nXG4gICAgbG5hbWU6U3RyaW5nXG4gICAgRE9COlN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmdcbiAgICBwYXNzd29yZDogU3RyaW5nXG4gICAgcGhvbmVfbm86IFN0cmluZ1xuICB9XG5cbiAgaW5wdXQgU2lnbkluSW5wdXQge1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgcGFzc3dvcmQ6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgU2lnblVwUGF5bG9hZCB7XG4gICAgdXNlcjogVXNlciFcbiAgfVxuXG4gIHR5cGUgU2lnbkluUGF5bG9hZCB7XG4gICAgdXNlcjogVXNlciFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXIoaWQ6IElEISk6IFVzZXIhXG4gICAgdXNlcnM6IFtVc2VyXSFcbiAgICB2aWV3ZXI6IFVzZXJcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIHNpZ25VcChpbnB1dDogU2lnblVwSW5wdXQhKTogU2lnblVwUGF5bG9hZCFcbiAgICBzaWduSW4oaW5wdXQ6IFNpZ25JbklucHV0ISk6IFNpZ25JblBheWxvYWQhXG4gICAgc2lnbk91dDogQm9vbGVhbiFcbiAgfVxuYCJdLCJuYW1lcyI6WyJncWwiLCJ0eXBlRGVmcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/type-defs.js\n");

/***/ }),

/***/ "./lib/auth-cookies.js":
/*!*****************************!*\
  !*** ./lib/auth-cookies.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC1jb29raWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFFekMsTUFBTUUsVUFBVSxHQUFHLE9BQU87QUFFbkIsTUFBTUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVU7QUFBWDtBQUUzQixTQUFTQyxjQUFjLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO0lBQ3pDLE1BQU1DLE1BQU0sR0FBR1AsaURBQVMsQ0FBQ0UsVUFBVSxFQUFFSSxLQUFLLEVBQUU7UUFDMUNFLE1BQU0sRUFBRUwsT0FBTztRQUNmTSxPQUFPLEVBQUUsSUFBSUMsSUFBSSxDQUFDQSxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHUixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzlDUyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUVDLGFBWEMsS0FXd0IsWUFBWTtRQUM3Q0MsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUVGWCxHQUFHLENBQUNZLFNBQVMsQ0FBQyxZQUFZLEVBQUVWLE1BQU0sQ0FBQztDQUNwQztBQUVNLFNBQVNXLGlCQUFpQixDQUFDYixHQUFHLEVBQUU7SUFDckMsTUFBTUUsTUFBTSxHQUFHUCxpREFBUyxDQUFDRSxVQUFVLEVBQUUsRUFBRSxFQUFFO1FBQ3ZDTSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ1ZPLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUVGVixHQUFHLENBQUNZLFNBQVMsQ0FBQyxZQUFZLEVBQUVWLE1BQU0sQ0FBQztDQUNwQztBQUVNLFNBQVNZLFlBQVksQ0FBQ0MsR0FBRyxFQUFFO0lBQ2hDLHFEQUFxRDtJQUNyRCxJQUFJQSxHQUFHLENBQUNDLE9BQU8sRUFBRSxPQUFPRCxHQUFHLENBQUNDLE9BQU87SUFFbkMsNkNBQTZDO0lBQzdDLE1BQU1kLE1BQU0sR0FBR2EsR0FBRyxDQUFDRSxPQUFPLEVBQUVmLE1BQU07SUFDbEMsT0FBT04sNkNBQUssQ0FBQ00sTUFBTSxJQUFJLEVBQUUsQ0FBQztDQUMzQjtBQUVNLFNBQVNnQixjQUFjLENBQUNILEdBQUcsRUFBRTtJQUNsQyxNQUFNQyxPQUFPLEdBQUdGLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2pDLE9BQU9DLE9BQU8sQ0FBQ25CLFVBQVUsQ0FBQztDQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGF2YW5fRXhhbWluYXRpb24vLi9saWIvYXV0aC1jb29raWVzLmpzPzczYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplLCBwYXJzZSB9IGZyb20gJ2Nvb2tpZSdcblxuY29uc3QgVE9LRU5fTkFNRSA9ICd0b2tlbidcblxuZXhwb3J0IGNvbnN0IE1BWF9BR0UgPSA2MCAqIDYwICogOCAvLyA4IGhvdXJzXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbkNvb2tpZShyZXMsIHRva2VuKSB7XG4gIGNvbnN0IGNvb2tpZSA9IHNlcmlhbGl6ZShUT0tFTl9OQU1FLCB0b2tlbiwge1xuICAgIG1heEFnZTogTUFYX0FHRSxcbiAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgTUFYX0FHRSAqIDEwMDApLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBwYXRoOiAnLycsXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICB9KVxuXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbkNvb2tpZShyZXMpIHtcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsICcnLCB7XG4gICAgbWF4QWdlOiAtMSxcbiAgICBwYXRoOiAnLycsXG4gIH0pXG5cbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhyZXEpIHtcbiAgLy8gRm9yIEFQSSBSb3V0ZXMgd2UgZG9uJ3QgbmVlZCB0byBwYXJzZSB0aGUgY29va2llcy5cbiAgaWYgKHJlcS5jb29raWVzKSByZXR1cm4gcmVxLmNvb2tpZXNcblxuICAvLyBGb3IgcGFnZXMgd2UgZG8gbmVlZCB0byBwYXJzZSB0aGUgY29va2llcy5cbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnM/LmNvb2tpZVxuICByZXR1cm4gcGFyc2UoY29va2llIHx8ICcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5Db29raWUocmVxKSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMocmVxKVxuICByZXR1cm4gY29va2llc1tUT0tFTl9OQU1FXVxufVxuIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInBhcnNlIiwiVE9LRU5fTkFNRSIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsInJlcyIsInRva2VuIiwiY29va2llIiwibWF4QWdlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJwYXRoIiwic2FtZVNpdGUiLCJzZXRIZWFkZXIiLCJyZW1vdmVUb2tlbkNvb2tpZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiZ2V0VG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth-cookies.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"./lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QjtBQUMyQztBQUV4RSxNQUFNSSxZQUFZLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDbEQsTUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtJQUM1QixvRUFBb0U7SUFDcEUsTUFBTUMsR0FBRyxHQUFHO1FBQUUsR0FBR0osT0FBTztRQUFFQyxTQUFTO1FBQUVJLE1BQU0sRUFBRWIsa0RBQU87S0FBRTtJQUN0RCxNQUFNYyxLQUFLLEdBQUcsTUFBTWYsc0RBQVMsQ0FBQ2EsR0FBRyxFQUFFVCxZQUFZLEVBQUVKLDREQUFhLENBQUM7SUFFL0RFLDZEQUFjLENBQUNNLEdBQUcsRUFBRU8sS0FBSyxDQUFDO0NBQzNCO0FBRU0sZUFBZUcsZUFBZSxDQUFDQyxHQUFHLEVBQUU7SUFDekMsTUFBTUosS0FBSyxHQUFHWiw2REFBYyxDQUFDZ0IsR0FBRyxDQUFDO0lBRWpDLElBQUksQ0FBQ0osS0FBSyxFQUFFLE9BQU07SUFFbEIsTUFBTU4sT0FBTyxHQUFHLE1BQU1ULHdEQUFXLENBQUNlLEtBQUssRUFBRVgsWUFBWSxFQUFFSiw0REFBYSxDQUFDO0lBQ3JFLE1BQU1xQixTQUFTLEdBQUdaLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHRCxPQUFPLENBQUNLLE1BQU0sR0FBRyxJQUFJO0lBRTNELDhDQUE4QztJQUM5QyxJQUFJSCxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHUyxTQUFTLEVBQUU7UUFDMUIsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7S0FDbkM7SUFFRCxPQUFPYixPQUFPO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxhdmFuX0V4YW1pbmF0aW9uLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXJvbiBmcm9tICdAaGFwaS9pcm9uJ1xuaW1wb3J0IHsgTUFYX0FHRSwgc2V0VG9rZW5Db29raWUsIGdldFRva2VuQ29va2llIH0gZnJvbSAnLi9hdXRoLWNvb2tpZXMnXG5cbmNvbnN0IFRPS0VOX1NFQ1JFVCA9IHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0TG9naW5TZXNzaW9uKHJlcywgc2Vzc2lvbikge1xuICBjb25zdCBjcmVhdGVkQXQgPSBEYXRlLm5vdygpXG4gIC8vIENyZWF0ZSBhIHNlc3Npb24gb2JqZWN0IHdpdGggYSBtYXggYWdlIHRoYXQgd2UgY2FuIHZhbGlkYXRlIGxhdGVyXG4gIGNvbnN0IG9iaiA9IHsgLi4uc2Vzc2lvbiwgY3JlYXRlZEF0LCBtYXhBZ2U6IE1BWF9BR0UgfVxuICBjb25zdCB0b2tlbiA9IGF3YWl0IElyb24uc2VhbChvYmosIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcblxuICBzZXRUb2tlbkNvb2tpZShyZXMsIHRva2VuKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9naW5TZXNzaW9uKHJlcSkge1xuICBjb25zdCB0b2tlbiA9IGdldFRva2VuQ29va2llKHJlcSlcblxuICBpZiAoIXRva2VuKSByZXR1cm5cblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgSXJvbi51bnNlYWwodG9rZW4sIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcbiAgY29uc3QgZXhwaXJlc0F0ID0gc2Vzc2lvbi5jcmVhdGVkQXQgKyBzZXNzaW9uLm1heEFnZSAqIDEwMDBcblxuICAvLyBWYWxpZGF0ZSB0aGUgZXhwaXJhdGlvbiBkYXRlIG9mIHRoZSBzZXNzaW9uXG4gIGlmIChEYXRlLm5vdygpID4gZXhwaXJlc0F0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZXNzaW9uIGV4cGlyZWQnKVxuICB9XG5cbiAgcmV0dXJuIHNlc3Npb25cbn1cbiJdLCJuYW1lcyI6WyJJcm9uIiwiTUFYX0FHRSIsInNldFRva2VuQ29va2llIiwiZ2V0VG9rZW5Db29raWUiLCJUT0tFTl9TRUNSRVQiLCJwcm9jZXNzIiwiZW52Iiwic2V0TG9naW5TZXNzaW9uIiwicmVzIiwic2Vzc2lvbiIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJvYmoiLCJtYXhBZ2UiLCJ0b2tlbiIsInNlYWwiLCJkZWZhdWx0cyIsImdldExvZ2luU2Vzc2lvbiIsInJlcSIsInVuc2VhbCIsImV4cGlyZXNBdCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ excuteQuery)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: \"127.0.0.1\",\n        port: \"3306\",\n        database: \"exam\",\n        user: \"root\",\n        password: \"M@th1N1th1\"\n    }\n});\nasync function excuteQuery({ query , values  }) {\n    try {\n        const results = await db.query(query, values);\n        await db.end();\n        return results;\n    } catch (error) {\n        return {\n            error\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBQ3JDLE1BQU1DLEVBQUUsR0FBR0QsdURBQUssQ0FBQztJQUNmRSxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFQyxXQUFnQjtRQUN0QkUsSUFBSSxFQUFFRixNQUFnQjtRQUN0QkcsUUFBUSxFQUFFSCxNQUFvQjtRQUM5QkksSUFBSSxFQUFFSixNQUFnQjtRQUN0QkssUUFBUSxFQUFFTCxZQUFvQjtLQUMvQjtDQUNGLENBQUM7QUFDYSxlQUFlTSxXQUFXLENBQUMsRUFBRUMsS0FBSyxHQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUMzRCxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLE1BQU1aLEVBQUUsQ0FBQ1UsS0FBSyxDQUFDQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQztRQUM3QyxNQUFNWCxFQUFFLENBQUNhLEdBQUcsRUFBRSxDQUFDO1FBQ2YsT0FBT0QsT0FBTyxDQUFDO0tBQ2hCLENBQUMsT0FBT0UsS0FBSyxFQUFFO1FBQ2QsT0FBTztZQUFFQSxLQUFLO1NBQUUsQ0FBQztLQUNsQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsYXZhbl9FeGFtaW5hdGlvbi8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJztcbmNvbnN0IGRiID0gbXlzcWwoe1xuICBjb25maWc6IHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5ob3N0LFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LnBvcnQsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LmRhdGFiYXNlLFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LnVzZXIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LnBhc3N3b3JkXG4gIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXhjdXRlUXVlcnkoeyBxdWVyeSwgdmFsdWVzIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZGIucXVlcnkocXVlcnksIHZhbHVlcyk7XG4gICAgYXdhaXQgZGIuZW5kKCk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufSJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJwb3J0IiwiZGF0YWJhc2UiLCJ1c2VyIiwicGFzc3dvcmQiLCJleGN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwicmVzdWx0cyIsImVuZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./lib/employees.js":
/*!**************************!*\
  !*** ./lib/employees.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEmployees\": () => (/* binding */ createEmployees),\n/* harmony export */   \"findEmployees\": () => (/* binding */ findEmployees),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./lib/db.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function createEmployees({ fname , lname , DOB , email , password  }) {\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n        createdAt: moment__WEBPACK_IMPORTED_MODULE_3___default()().format(\"YYYY-MM-DD HH:mm:ss\"),\n        fname,\n        lname,\n        email,\n        hash,\n        salt,\n        DOB\n    };\n    try {\n        const result = await (0,_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            query: \"INSERT INTO employees ( FirstName,LastName,uuid,created, DOB, email_id, hash, salt,emp_role_id) VALUES(?,?, ?, ?, ?, ?,?,?,?)\",\n            values: [\n                user.fname,\n                user.lname,\n                user.id,\n                user.createdAt.toString(),\n                user.DOB,\n                user.email,\n                user.hash,\n                user.salt,\n                1\n            ]\n        });\n        console.log(result);\n    } catch (error) {\n        console.log(error);\n    }\n    return user;\n}\nasync function findEmployees({ email  }) {\n    try {\n        console.log(email);\n        const result = await (0,_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            query: \"SELECT * FROM employees WHERE email_id = ?\",\n            values: [\n                email\n            ]\n        });\n        return result[0];\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function validatePassword(user, inputPassword) {\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, user.salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = user.hash === inputHash;\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW1wbG95ZWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNRO0FBQ0w7QUFDSDtBQUVyQixlQUFlSyxlQUFlLENBQUMsRUFBRUMsS0FBSyxHQUFDQyxLQUFLLEdBQUVDLEdBQUcsR0FBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6RSxNQUFNQyxJQUFJLEdBQUdYLHlEQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDYSxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELE1BQU1DLElBQUksR0FBR2Qsd0RBQ0UsQ0FBQ1UsUUFBUSxFQUFFQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FDOUNFLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDcEIsTUFBTUcsSUFBSSxHQUFHO1FBQ1RDLEVBQUUsRUFBRWYsd0NBQU0sRUFBRTtRQUNaZ0IsU0FBUyxFQUFFZCw2Q0FBTSxFQUFFLENBQUNlLE1BQU0sQ0FBRSxxQkFBcUIsQ0FBQztRQUNsRGIsS0FBSztRQUNMQyxLQUFLO1FBQ0xFLEtBQUs7UUFDTEssSUFBSTtRQUNKSCxJQUFJO1FBQ0pILEdBQUc7S0FFTjtJQUVELElBQUk7UUFDQSxNQUFNWSxNQUFNLEdBQUcsTUFBTWpCLCtDQUFXLENBQUM7WUFDN0JrQixLQUFLLEVBQUUsK0hBQStIO1lBQ3RJQyxNQUFNLEVBQUU7Z0JBQUVOLElBQUksQ0FBQ1YsS0FBSztnQkFBQ1UsSUFBSSxDQUFDVCxLQUFLO2dCQUFFUyxJQUFJLENBQUNDLEVBQUU7Z0JBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDTCxRQUFRLEVBQUU7Z0JBQUVHLElBQUksQ0FBQ1IsR0FBRztnQkFBRVEsSUFBSSxDQUFDUCxLQUFLO2dCQUFFTyxJQUFJLENBQUNGLElBQUk7Z0JBQUVFLElBQUksQ0FBQ0wsSUFBSTtBQUFDLGlCQUFDO2FBQUM7U0FDcEgsQ0FBQztRQUNGWSxPQUFPLENBQUNDLEdBQUcsQ0FBRUosTUFBTSxDQUFFLENBQUM7S0FDekIsQ0FBQyxPQUFRSyxLQUFLLEVBQUc7UUFDZEYsT0FBTyxDQUFDQyxHQUFHLENBQUVDLEtBQUssQ0FBRSxDQUFDO0tBQ3hCO0lBRUQsT0FBT1QsSUFBSSxDQUFDO0NBQ2Y7QUFHTSxlQUFlVSxhQUFhLENBQUMsRUFBRWpCLEtBQUssR0FBRSxFQUFFO0lBQzNDLElBQUk7UUFDQWMsT0FBTyxDQUFDQyxHQUFHLENBQUNmLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU1XLE1BQU0sR0FBRyxNQUFNakIsK0NBQVcsQ0FBQztZQUM3QmtCLEtBQUssRUFBRSw0Q0FBNEM7WUFDbkRDLE1BQU0sRUFBRTtnQkFBRWIsS0FBSzthQUFFO1NBQ3BCLENBQUM7UUFDRixPQUFPVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEIsQ0FBQyxPQUFPSyxLQUFLLEVBQUU7UUFDWkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0NBQ0o7QUFFTSxlQUFlRSxnQkFBZ0IsQ0FBQ1gsSUFBSSxFQUFFWSxhQUFhLEVBQUU7SUFDeEQsTUFBTUMsU0FBUyxHQUFHN0Isd0RBQ0gsQ0FBQzRCLGFBQWEsRUFBRVosSUFBSSxDQUFDTCxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FDeERFLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDcEIsTUFBTWlCLGNBQWMsR0FBR2QsSUFBSSxDQUFDRixJQUFJLEtBQUtlLFNBQVM7SUFDOUMsT0FBT0MsY0FBYyxDQUFDO0NBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsYXZhbl9FeGFtaW5hdGlvbi8uL2xpYi9lbXBsb3llZXMuanM/MDA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBleGN1dGVRdWVyeSBmcm9tICcuL2RiJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlcyh7IGZuYW1lLGxuYW1lLCBET0IsIGVtYWlsLCBwYXNzd29yZCB9KSB7XG4gICAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpO1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG9cbiAgICAgICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcbiAgICAgICAgLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIGNyZWF0ZWRBdDogbW9tZW50KCkuZm9ybWF0KCAnWVlZWS1NTS1ERCBISDptbTpzcycpLFxuICAgICAgICBmbmFtZSxcbiAgICAgICAgbG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzYWx0LFxuICAgICAgICBET0IsXG4gICAgICAgIFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGN1dGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogJ0lOU0VSVCBJTlRPIGVtcGxveWVlcyAoIEZpcnN0TmFtZSxMYXN0TmFtZSx1dWlkLGNyZWF0ZWQsIERPQiwgZW1haWxfaWQsIGhhc2gsIHNhbHQsZW1wX3JvbGVfaWQpIFZBTFVFUyg/LD8sID8sID8sID8sID8sPyw/LD8pJyxcbiAgICAgICAgICAgIHZhbHVlczogWyB1c2VyLmZuYW1lLHVzZXIubG5hbWUsIHVzZXIuaWQsdXNlci5jcmVhdGVkQXQudG9TdHJpbmcoKSwgdXNlci5ET0IsIHVzZXIuZW1haWwsIHVzZXIuaGFzaCwgdXNlci5zYWx0LDFdLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coIHJlc3VsdCApO1xuICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgY29uc29sZS5sb2coIGVycm9yICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzZXI7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRFbXBsb3llZXMoeyBlbWFpbCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGN1dGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogJ1NFTEVDVCAqIEZST00gZW1wbG95ZWVzIFdIRVJFIGVtYWlsX2lkID0gPycsXG4gICAgICAgICAgICB2YWx1ZXM6IFsgZW1haWwgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRbMF07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQodXNlciwgaW5wdXRQYXNzd29yZCkge1xuICAgIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xuICAgICAgICAucGJrZGYyU3luYyhpbnB1dFBhc3N3b3JkLCB1c2VyLnNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcbiAgICAgICAgLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IHVzZXIuaGFzaCA9PT0gaW5wdXRIYXNoO1xuICAgIHJldHVybiBwYXNzd29yZHNNYXRjaDtcbn0iXSwibmFtZXMiOlsiY3J5cHRvIiwidjQiLCJ1dWlkdjQiLCJleGN1dGVRdWVyeSIsIm1vbWVudCIsImNyZWF0ZUVtcGxveWVlcyIsImZuYW1lIiwibG5hbWUiLCJET0IiLCJlbWFpbCIsInBhc3N3b3JkIiwic2FsdCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJoYXNoIiwicGJrZGYyU3luYyIsInVzZXIiLCJpZCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInJlc3VsdCIsInF1ZXJ5IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZmluZEVtcGxveWVlcyIsInZhbGlkYXRlUGFzc3dvcmQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRIYXNoIiwicGFzc3dvcmRzTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/employees.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo/client */ \"./apollo/client.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps.initialApolloState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: apolloClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/sathya/workspace/walavan_Examination/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sathya/workspace/walavan_Examination/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDaUI7QUFDSDtBQUU3QixTQUFTRSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNwRCxNQUFNQyxZQUFZLEdBQUdKLHlEQUFTLENBQUNHLFNBQVMsQ0FBQ0Usa0JBQWtCLENBQUM7SUFFNUQscUJBQ0UsOERBQUNOLDBEQUFjO1FBQUNPLE1BQU0sRUFBRUYsWUFBWTtrQkFFbEMsNEVBQUNGLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFFYixDQUNsQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsYXZhbl9FeGFtaW5hdGlvbi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tICcuLi9hcG9sbG8vY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMuaW5pdGlhbEFwb2xsb1N0YXRlKVxuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgIFxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICBcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJ1c2VBcG9sbG8iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/schema":
/*!*********************************************!*\
  !*** external "@apollo/client/link/schema" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/schema");

/***/ }),

/***/ "@hapi/iron":
/*!*****************************!*\
  !*** external "@hapi/iron" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@hapi/iron");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-micro");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-tools");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("serverless-mysql");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();