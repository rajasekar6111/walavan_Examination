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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet apolloClient;\nfunction createIsomorphLink() {\n    if (true) {\n        const { SchemaLink  } = __webpack_require__(/*! @apollo/client/link/schema */ \"@apollo/client/link/schema\");\n        const { schema  } = __webpack_require__(/*! ./schema */ \"./apollo/schema.js\");\n        return new SchemaLink({\n            schema\n        });\n    } else {}\n}\nfunction createApolloClient() {\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: createIsomorphLink(),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n    });\n}\nfunction initializeApollo(initialState = null) {\n    const _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // get hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(initialState, existingCache);\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction useApollo(initialState) {\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(initialState), [\n        initialState\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQzZCO0FBQy9CO0FBRTdCLElBQUlJLFlBQVk7QUFFaEIsU0FBU0Msa0JBQWtCLEdBQUc7SUFDNUIsSUFBSSxJQUE2QixFQUFFO1FBQ2pDLE1BQU0sRUFBRUMsVUFBVSxHQUFFLEdBQUdDLG1CQUFPLENBQUMsOERBQTRCLENBQUM7UUFDNUQsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0QsbUJBQU8sQ0FBQyxvQ0FBVSxDQUFDO1FBQ3RDLE9BQU8sSUFBSUQsVUFBVSxDQUFDO1lBQUVFLE1BQU07U0FBRSxDQUFDO0tBQ2xDLE1BQU0sRUFNTjtDQUNGO0FBRUQsU0FBU0ksa0JBQWtCLEdBQUc7SUFDNUIsT0FBTyxJQUFJWCx3REFBWSxDQUFDO1FBQ3RCWSxPQUFPLEVBQUUsV0FBYSxLQUFLLFdBQVc7UUFDdENDLElBQUksRUFBRVQsa0JBQWtCLEVBQUU7UUFDMUJVLEtBQUssRUFBRSxJQUFJYix5REFBYSxFQUFFO0tBQzNCLENBQUM7Q0FDSDtBQUVNLFNBQVNjLGdCQUFnQixDQUFDQyxZQUFZLEdBQUcsSUFBSSxFQUFFO0lBQ3BELE1BQU1DLGFBQWEsR0FBR2QsWUFBWSxhQUFaQSxZQUFZLGNBQVpBLFlBQVksR0FBSVEsa0JBQWtCLEVBQUU7SUFFMUQsMkZBQTJGO0lBQzNGLG9CQUFvQjtJQUNwQixJQUFJSyxZQUFZLEVBQUU7UUFDaEIsOERBQThEO1FBQzlELE1BQU1FLGFBQWEsR0FBR0QsYUFBYSxDQUFDRSxPQUFPLEVBQUU7UUFFN0MsbUZBQW1GO1FBQ25GLE1BQU1DLElBQUksR0FBR2xCLGdEQUFLLENBQUNjLFlBQVksRUFBRUUsYUFBYSxDQUFDO1FBRS9DLHlDQUF5QztRQUN6Q0QsYUFBYSxDQUFDSCxLQUFLLENBQUNPLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO0tBQ2xDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQUksSUFBNkIsRUFBRSxPQUFPSCxhQUFhO0lBQ3ZELDhDQUE4QztJQUM5QyxJQUFJLENBQUNkLFlBQVksRUFBRUEsWUFBWSxHQUFHYyxhQUFhO0lBRS9DLE9BQU9BLGFBQWE7Q0FDckI7QUFFTSxTQUFTSyxTQUFTLENBQUNOLFlBQVksRUFBRTtJQUN0QyxNQUFNTyxLQUFLLEdBQUd4Qiw4Q0FBTyxDQUFDLElBQU1nQixnQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDLEVBQUU7UUFBQ0EsWUFBWTtLQUFDLENBQUM7SUFDM0UsT0FBT08sS0FBSztDQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhhbXRpbmF0aW9uLy4vYXBvbGxvL2NsaWVudC5qcz8wNTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcblxubGV0IGFwb2xsb0NsaWVudFxuXG5mdW5jdGlvbiBjcmVhdGVJc29tb3JwaExpbmsoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHsgU2NoZW1hTGluayB9ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWEnKVxuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSByZXF1aXJlKCcuL3NjaGVtYScpXG4gICAgcmV0dXJuIG5ldyBTY2hlbWFMaW5rKHsgc2NoZW1hIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBIdHRwTGluayB9ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQvbGluay9odHRwJylcbiAgICByZXR1cm4gbmV3IEh0dHBMaW5rKHtcbiAgICAgIHVyaTogJy9hcGkvZ3JhcGhxbCcsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxuICAgIGxpbms6IGNyZWF0ZUlzb21vcnBoTGluaygpLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldCBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKVxuXG4gICAgLy8gTWVyZ2UgdGhlIGV4aXN0aW5nIGNhY2hlIGludG8gZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlKVxuXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSlcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnRcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn1cbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIm1lcmdlIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlSXNvbW9ycGhMaW5rIiwiU2NoZW1hTGluayIsInJlcXVpcmUiLCJzY2hlbWEiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY3JlYXRlQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJjYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/client.js\n");

/***/ }),

/***/ "./apollo/resolvers.js":
/*!*****************************!*\
  !*** ./apollo/resolvers.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/students */ \"./lib/students.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_auth_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth-cookies */ \"./lib/auth-cookies.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_students__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_students__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst resolvers = {\n    Query: {\n        async viewer (_parent, _args, context, _info) {\n            try {\n                const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getLoginSession)(context.req);\n                if (session) {\n                    return (0,_lib_students__WEBPACK_IMPORTED_MODULE_1__.findStudent)({\n                        email: session.email\n                    });\n                }\n            } catch (error) {\n                throw new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError(\"Authentication token is invalid, please log in\");\n            }\n        }\n    },\n    Mutation: {\n        async signUp (_parent, args, _context, _info) {\n            console.log(args);\n            const user = await (0,_lib_students__WEBPACK_IMPORTED_MODULE_1__.createStudent)(args.input);\n            return {\n                user\n            };\n        },\n        async signIn (_parent, args, context, _info) {\n            const user = await (0,_lib_students__WEBPACK_IMPORTED_MODULE_1__.findStudent)({\n                email: args.input.email\n            });\n            if (user && await (0,_lib_students__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(user, args.input.password)) {\n                const session = {\n                    id: user.id,\n                    email: user.email\n                };\n                await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.setLoginSession)(context.res, session);\n                return {\n                    user\n                };\n            }\n            throw new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.UserInputError(\"Invalid email and password combination\");\n        },\n        async signOut (_parent, _args, context, _info) {\n            (0,_lib_auth_cookies__WEBPACK_IMPORTED_MODULE_3__.removeTokenCookie)(context.res);\n            return true;\n        }\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vcmVzb2x2ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5RTtBQUNLO0FBQ2hCO0FBQ1A7QUFFaEQsTUFBTVEsU0FBUyxHQUFHO0lBQ3ZCQyxLQUFLLEVBQUU7UUFDTCxNQUFNQyxNQUFNLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtZQUMzQyxJQUFJO2dCQUNGLE1BQU1DLE9BQU8sR0FBRyxNQUFNVCwwREFBZSxDQUFDTyxPQUFPLENBQUNHLEdBQUcsQ0FBQztnQkFFbEQsSUFBSUQsT0FBTyxFQUFFO29CQUNYLE9BQU9aLDBEQUFXLENBQUM7d0JBQUVjLEtBQUssRUFBRUYsT0FBTyxDQUFDRSxLQUFLO3FCQUFFLENBQUM7aUJBQzdDO2FBQ0YsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxJQUFJbEIsb0VBQW1CLENBQzNCLGdEQUFnRCxDQUNqRDthQUNGO1NBQ0Y7S0FDRjtJQUNEbUIsUUFBUSxFQUFFO1FBQ1IsTUFBTUMsTUFBTSxFQUFDVCxPQUFPLEVBQUVVLElBQUksRUFBRUMsUUFBUSxFQUFFUixLQUFLLEVBQUU7WUFDM0NTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFSCxJQUFJLENBQUUsQ0FBQztZQUNwQixNQUFNSSxJQUFJLEdBQUcsTUFBTXZCLDREQUFhLENBQUNtQixJQUFJLENBQUNLLEtBQUssQ0FBQztZQUM1QyxPQUFPO2dCQUFFRCxJQUFJO2FBQUU7U0FDaEI7UUFDRCxNQUFNRSxNQUFNLEVBQUNoQixPQUFPLEVBQUVVLElBQUksRUFBRVIsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDMUMsTUFBTVcsSUFBSSxHQUFHLE1BQU10QiwwREFBVyxDQUFDO2dCQUFFYyxLQUFLLEVBQUVJLElBQUksQ0FBQ0ssS0FBSyxDQUFDVCxLQUFLO2FBQUUsQ0FBQztZQUUzRCxJQUFJUSxJQUFJLElBQUssTUFBTXJCLCtEQUFnQixDQUFDcUIsSUFBSSxFQUFFSixJQUFJLENBQUNLLEtBQUssQ0FBQ0UsUUFBUSxDQUFDLEVBQUc7Z0JBQy9ELE1BQU1iLE9BQU8sR0FBRztvQkFDZGMsRUFBRSxFQUFFSixJQUFJLENBQUNJLEVBQUU7b0JBQ1haLEtBQUssRUFBRVEsSUFBSSxDQUFDUixLQUFLO2lCQUNsQjtnQkFFRCxNQUFNWiwwREFBZSxDQUFDUSxPQUFPLENBQUNpQixHQUFHLEVBQUVmLE9BQU8sQ0FBQztnQkFFM0MsT0FBTztvQkFBRVUsSUFBSTtpQkFBRTthQUNoQjtZQUVELE1BQU0sSUFBSXhCLCtEQUFjLENBQUMsd0NBQXdDLENBQUM7U0FDbkU7UUFDRCxNQUFNOEIsT0FBTyxFQUFDcEIsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzVDUCxvRUFBaUIsQ0FBQ00sT0FBTyxDQUFDaUIsR0FBRyxDQUFDO1lBQzlCLE9BQU8sSUFBSTtTQUNaO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0V4YW10aW5hdGlvbi8uL2Fwb2xsby9yZXNvbHZlcnMuanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yLCBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXG5pbXBvcnQgeyBjcmVhdGVTdHVkZW50LCBmaW5kU3R1ZGVudCwgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gJy4uL2xpYi9zdHVkZW50cydcbmltcG9ydCB7IHNldExvZ2luU2Vzc2lvbiwgZ2V0TG9naW5TZXNzaW9uIH0gZnJvbSAnLi4vbGliL2F1dGgnXG5pbXBvcnQgeyByZW1vdmVUb2tlbkNvb2tpZSB9IGZyb20gJy4uL2xpYi9hdXRoLWNvb2tpZXMnXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgYXN5bmMgdmlld2VyKF9wYXJlbnQsIF9hcmdzLCBjb250ZXh0LCBfaW5mbykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldExvZ2luU2Vzc2lvbihjb250ZXh0LnJlcSlcblxuICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiBmaW5kU3R1ZGVudCh7IGVtYWlsOiBzZXNzaW9uLmVtYWlsIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKFxuICAgICAgICAgICdBdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBpbnZhbGlkLCBwbGVhc2UgbG9nIGluJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgTXV0YXRpb246IHtcbiAgICBhc3luYyBzaWduVXAoX3BhcmVudCwgYXJncywgX2NvbnRleHQsIF9pbmZvKSB7XG4gICAgICBjb25zb2xlLmxvZyggYXJncyApO1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVN0dWRlbnQoYXJncy5pbnB1dClcbiAgICAgIHJldHVybiB7IHVzZXIgfVxuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKF9wYXJlbnQsIGFyZ3MsIGNvbnRleHQsIF9pbmZvKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZFN0dWRlbnQoeyBlbWFpbDogYXJncy5pbnB1dC5lbWFpbCB9KVxuXG4gICAgICBpZiAodXNlciAmJiAoYXdhaXQgdmFsaWRhdGVQYXNzd29yZCh1c2VyLCBhcmdzLmlucHV0LnBhc3N3b3JkKSkpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHNldExvZ2luU2Vzc2lvbihjb250ZXh0LnJlcywgc2Vzc2lvbilcblxuICAgICAgICByZXR1cm4geyB1c2VyIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKCdJbnZhbGlkIGVtYWlsIGFuZCBwYXNzd29yZCBjb21iaW5hdGlvbicpXG4gICAgfSxcbiAgICBhc3luYyBzaWduT3V0KF9wYXJlbnQsIF9hcmdzLCBjb250ZXh0LCBfaW5mbykge1xuICAgICAgcmVtb3ZlVG9rZW5Db29raWUoY29udGV4dC5yZXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gIH0sXG59Il0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJVc2VySW5wdXRFcnJvciIsImNyZWF0ZVN0dWRlbnQiLCJmaW5kU3R1ZGVudCIsInZhbGlkYXRlUGFzc3dvcmQiLCJzZXRMb2dpblNlc3Npb24iLCJnZXRMb2dpblNlc3Npb24iLCJyZW1vdmVUb2tlbkNvb2tpZSIsInJlc29sdmVycyIsIlF1ZXJ5Iiwidmlld2VyIiwiX3BhcmVudCIsIl9hcmdzIiwiY29udGV4dCIsIl9pbmZvIiwic2Vzc2lvbiIsInJlcSIsImVtYWlsIiwiZXJyb3IiLCJNdXRhdGlvbiIsInNpZ25VcCIsImFyZ3MiLCJfY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiaW5wdXQiLCJzaWduSW4iLCJwYXNzd29yZCIsImlkIiwicmVzIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/resolvers.js\n");

/***/ }),

/***/ "./apollo/schema.js":
/*!**************************!*\
  !*** ./apollo/schema.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schema\": () => (/* binding */ schema)\n/* harmony export */ });\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-defs */ \"./apollo/type-defs.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./apollo/resolvers.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_resolvers__WEBPACK_IMPORTED_MODULE_2__]);\n_resolvers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst schema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_0__.makeExecutableSchema)({\n    typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_1__.typeDefs,\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__.resolvers\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vc2NoZW1hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2Q7QUFDQztBQUVoQyxNQUFNRyxNQUFNLEdBQUdILG1FQUFvQixDQUFDO0lBQ3pDQyxRQUFRO0lBQ1JDLFNBQVM7Q0FDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhhbXRpbmF0aW9uLy4vYXBvbGxvL3NjaGVtYS5qcz8wZThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scydcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi90eXBlLWRlZnMnXG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuL3Jlc29sdmVycydcblxuZXhwb3J0IGNvbnN0IHNjaGVtYSA9IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcbiAgdHlwZURlZnMsXG4gIHJlc29sdmVycyxcbn0pXG4iXSwibmFtZXMiOlsibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsInNjaGVtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/schema.js\n");

/***/ }),

/***/ "./apollo/type-defs.js":
/*!*****************************!*\
  !*** ./apollo/type-defs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type User {\n    id: ID\n    email: String\n    createdAt: Int\n  }\n\n  input SignUpInput {\n    fname:String\n    lname:String\n    email: String\n    password: String\n  }\n\n  input SignInInput {\n    email: String\n    password: String\n  }\n\n  type SignUpPayload {\n    user: User!\n  }\n\n  type SignInPayload {\n    user: User!\n  }\n\n  type Query {\n    user(id: ID!): User!\n    users: [User]!\n    viewer: User\n  }\n\n  type Mutation {\n    signUp(input: SignUpInput!): SignUpPayload!\n    signIn(input: SignInInput!): SignInPayload!\n    signOut: Boolean!\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vdHlwZS1kZWZzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUU3QixNQUFNQyxRQUFRLEdBQUdELCtDQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0M1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhhbXRpbmF0aW9uLy4vYXBvbGxvL3R5cGUtZGVmcy5qcz81ZjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IElEXG4gICAgZW1haWw6IFN0cmluZ1xuICAgIGNyZWF0ZWRBdDogSW50XG4gIH1cblxuICBpbnB1dCBTaWduVXBJbnB1dCB7XG4gICAgZm5hbWU6U3RyaW5nXG4gICAgbG5hbWU6U3RyaW5nXG4gICAgZW1haWw6IFN0cmluZ1xuICAgIHBhc3N3b3JkOiBTdHJpbmdcbiAgfVxuXG4gIGlucHV0IFNpZ25JbklucHV0IHtcbiAgICBlbWFpbDogU3RyaW5nXG4gICAgcGFzc3dvcmQ6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBTaWduVXBQYXlsb2FkIHtcbiAgICB1c2VyOiBVc2VyIVxuICB9XG5cbiAgdHlwZSBTaWduSW5QYXlsb2FkIHtcbiAgICB1c2VyOiBVc2VyIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgdXNlcihpZDogSUQhKTogVXNlciFcbiAgICB1c2VyczogW1VzZXJdIVxuICAgIHZpZXdlcjogVXNlclxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgc2lnblVwKGlucHV0OiBTaWduVXBJbnB1dCEpOiBTaWduVXBQYXlsb2FkIVxuICAgIHNpZ25JbihpbnB1dDogU2lnbkluSW5wdXQhKTogU2lnbkluUGF5bG9hZCFcbiAgICBzaWduT3V0OiBCb29sZWFuIVxuICB9XG5gIl0sIm5hbWVzIjpbImdxbCIsInR5cGVEZWZzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/type-defs.js\n");

/***/ }),

/***/ "./lib/auth-cookies.js":
/*!*****************************!*\
  !*** ./lib/auth-cookies.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    var ref;\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = (ref = req.headers) === null || ref === void 0 ? void 0 : ref.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC1jb29raWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFFekMsTUFBTUUsVUFBVSxHQUFHLE9BQU87QUFFbkIsTUFBTUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVU7QUFBWDtBQUUzQixTQUFTQyxjQUFjLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO0lBQ3pDLE1BQU1DLE1BQU0sR0FBR1AsaURBQVMsQ0FBQ0UsVUFBVSxFQUFFSSxLQUFLLEVBQUU7UUFDMUNFLE1BQU0sRUFBRUwsT0FBTztRQUNmTSxPQUFPLEVBQUUsSUFBSUMsSUFBSSxDQUFDQSxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHUixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzlDUyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUVDLGFBWEMsS0FXd0IsWUFBWTtRQUM3Q0MsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUVGWCxHQUFHLENBQUNZLFNBQVMsQ0FBQyxZQUFZLEVBQUVWLE1BQU0sQ0FBQztDQUNwQztBQUVNLFNBQVNXLGlCQUFpQixDQUFDYixHQUFHLEVBQUU7SUFDckMsTUFBTUUsTUFBTSxHQUFHUCxpREFBUyxDQUFDRSxVQUFVLEVBQUUsRUFBRSxFQUFFO1FBQ3ZDTSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ1ZPLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUVGVixHQUFHLENBQUNZLFNBQVMsQ0FBQyxZQUFZLEVBQUVWLE1BQU0sQ0FBQztDQUNwQztBQUVNLFNBQVNZLFlBQVksQ0FBQ0MsR0FBRyxFQUFFO1FBS2pCQSxHQUFXO0lBSjFCLHFEQUFxRDtJQUNyRCxJQUFJQSxHQUFHLENBQUNDLE9BQU8sRUFBRSxPQUFPRCxHQUFHLENBQUNDLE9BQU87SUFFbkMsNkNBQTZDO0lBQzdDLE1BQU1kLE1BQU0sR0FBR2EsQ0FBQUEsR0FBVyxHQUFYQSxHQUFHLENBQUNFLE9BQU8sY0FBWEYsR0FBVyxXQUFRLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsR0FBVyxDQUFFYixNQUFNO0lBQ2xDLE9BQU9OLDZDQUFLLENBQUNNLE1BQU0sSUFBSSxFQUFFLENBQUM7Q0FDM0I7QUFFTSxTQUFTZ0IsY0FBYyxDQUFDSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsT0FBTyxHQUFHRixZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUNqQyxPQUFPQyxPQUFPLENBQUNuQixVQUFVLENBQUM7Q0FDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeGFtdGluYXRpb24vLi9saWIvYXV0aC1jb29raWVzLmpzPzczYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplLCBwYXJzZSB9IGZyb20gJ2Nvb2tpZSdcblxuY29uc3QgVE9LRU5fTkFNRSA9ICd0b2tlbidcblxuZXhwb3J0IGNvbnN0IE1BWF9BR0UgPSA2MCAqIDYwICogOCAvLyA4IGhvdXJzXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbkNvb2tpZShyZXMsIHRva2VuKSB7XG4gIGNvbnN0IGNvb2tpZSA9IHNlcmlhbGl6ZShUT0tFTl9OQU1FLCB0b2tlbiwge1xuICAgIG1heEFnZTogTUFYX0FHRSxcbiAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgTUFYX0FHRSAqIDEwMDApLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBwYXRoOiAnLycsXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICB9KVxuXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbkNvb2tpZShyZXMpIHtcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsICcnLCB7XG4gICAgbWF4QWdlOiAtMSxcbiAgICBwYXRoOiAnLycsXG4gIH0pXG5cbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhyZXEpIHtcbiAgLy8gRm9yIEFQSSBSb3V0ZXMgd2UgZG9uJ3QgbmVlZCB0byBwYXJzZSB0aGUgY29va2llcy5cbiAgaWYgKHJlcS5jb29raWVzKSByZXR1cm4gcmVxLmNvb2tpZXNcblxuICAvLyBGb3IgcGFnZXMgd2UgZG8gbmVlZCB0byBwYXJzZSB0aGUgY29va2llcy5cbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnM/LmNvb2tpZVxuICByZXR1cm4gcGFyc2UoY29va2llIHx8ICcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5Db29raWUocmVxKSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMocmVxKVxuICByZXR1cm4gY29va2llc1tUT0tFTl9OQU1FXVxufVxuIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInBhcnNlIiwiVE9LRU5fTkFNRSIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsInJlcyIsInRva2VuIiwiY29va2llIiwibWF4QWdlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJwYXRoIiwic2FtZVNpdGUiLCJzZXRIZWFkZXIiLCJyZW1vdmVUb2tlbkNvb2tpZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiZ2V0VG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth-cookies.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"./lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QjtBQUMyQztBQUV4RSxNQUFNSSxZQUFZLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDbEQsTUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtJQUM1QixvRUFBb0U7SUFDcEUsTUFBTUMsR0FBRyxHQUFHO1FBQUUsR0FBR0osT0FBTztRQUFFQyxTQUFTO1FBQUVJLE1BQU0sRUFBRWIsa0RBQU87S0FBRTtJQUN0RCxNQUFNYyxLQUFLLEdBQUcsTUFBTWYsc0RBQVMsQ0FBQ2EsR0FBRyxFQUFFVCxZQUFZLEVBQUVKLDREQUFhLENBQUM7SUFFL0RFLDZEQUFjLENBQUNNLEdBQUcsRUFBRU8sS0FBSyxDQUFDO0NBQzNCO0FBRU0sZUFBZUcsZUFBZSxDQUFDQyxHQUFHLEVBQUU7SUFDekMsTUFBTUosS0FBSyxHQUFHWiw2REFBYyxDQUFDZ0IsR0FBRyxDQUFDO0lBRWpDLElBQUksQ0FBQ0osS0FBSyxFQUFFLE9BQU07SUFFbEIsTUFBTU4sT0FBTyxHQUFHLE1BQU1ULHdEQUFXLENBQUNlLEtBQUssRUFBRVgsWUFBWSxFQUFFSiw0REFBYSxDQUFDO0lBQ3JFLE1BQU1xQixTQUFTLEdBQUdaLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHRCxPQUFPLENBQUNLLE1BQU0sR0FBRyxJQUFJO0lBRTNELDhDQUE4QztJQUM5QyxJQUFJSCxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHUyxTQUFTLEVBQUU7UUFDMUIsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7S0FDbkM7SUFFRCxPQUFPYixPQUFPO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeGFtdGluYXRpb24vLi9saWIvYXV0aC5qcz8yODdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJcm9uIGZyb20gJ0BoYXBpL2lyb24nXG5pbXBvcnQgeyBNQVhfQUdFLCBzZXRUb2tlbkNvb2tpZSwgZ2V0VG9rZW5Db29raWUgfSBmcm9tICcuL2F1dGgtY29va2llcydcblxuY29uc3QgVE9LRU5fU0VDUkVUID0gcHJvY2Vzcy5lbnYuVE9LRU5fU0VDUkVUXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRMb2dpblNlc3Npb24ocmVzLCBzZXNzaW9uKSB7XG4gIGNvbnN0IGNyZWF0ZWRBdCA9IERhdGUubm93KClcbiAgLy8gQ3JlYXRlIGEgc2Vzc2lvbiBvYmplY3Qgd2l0aCBhIG1heCBhZ2UgdGhhdCB3ZSBjYW4gdmFsaWRhdGUgbGF0ZXJcbiAgY29uc3Qgb2JqID0geyAuLi5zZXNzaW9uLCBjcmVhdGVkQXQsIG1heEFnZTogTUFYX0FHRSB9XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgSXJvbi5zZWFsKG9iaiwgVE9LRU5fU0VDUkVULCBJcm9uLmRlZmF1bHRzKVxuXG4gIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dpblNlc3Npb24ocmVxKSB7XG4gIGNvbnN0IHRva2VuID0gZ2V0VG9rZW5Db29raWUocmVxKVxuXG4gIGlmICghdG9rZW4pIHJldHVyblxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBJcm9uLnVuc2VhbCh0b2tlbiwgVE9LRU5fU0VDUkVULCBJcm9uLmRlZmF1bHRzKVxuICBjb25zdCBleHBpcmVzQXQgPSBzZXNzaW9uLmNyZWF0ZWRBdCArIHNlc3Npb24ubWF4QWdlICogMTAwMFxuXG4gIC8vIFZhbGlkYXRlIHRoZSBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIHNlc3Npb25cbiAgaWYgKERhdGUubm93KCkgPiBleHBpcmVzQXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nlc3Npb24gZXhwaXJlZCcpXG4gIH1cblxuICByZXR1cm4gc2Vzc2lvblxufVxuIl0sIm5hbWVzIjpbIklyb24iLCJNQVhfQUdFIiwic2V0VG9rZW5Db29raWUiLCJnZXRUb2tlbkNvb2tpZSIsIlRPS0VOX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJzZXRMb2dpblNlc3Npb24iLCJyZXMiLCJzZXNzaW9uIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIm9iaiIsIm1heEFnZSIsInRva2VuIiwic2VhbCIsImRlZmF1bHRzIiwiZ2V0TG9naW5TZXNzaW9uIiwicmVxIiwidW5zZWFsIiwiZXhwaXJlc0F0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ excuteQuery)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: \"127.0.0.1\",\n        port: \"3306\",\n        database: \"exam\",\n        user: \"root\",\n        password: \"BigBlue@1234\"\n    }\n});\nasync function excuteQuery({ query , values  }) {\n    try {\n        const results = await db.query(query, values);\n        await db.end();\n        return results;\n    } catch (error) {\n        return {\n            error\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBQ3JDLE1BQU1DLEVBQUUsR0FBR0QsdURBQUssQ0FBQztJQUNmRSxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFQyxXQUFnQjtRQUN0QkUsSUFBSSxFQUFFRixNQUFnQjtRQUN0QkcsUUFBUSxFQUFFSCxNQUFvQjtRQUM5QkksSUFBSSxFQUFFSixNQUFnQjtRQUN0QkssUUFBUSxFQUFFTCxjQUFvQjtLQUMvQjtDQUNGLENBQUM7QUFDYSxlQUFlTSxXQUFXLENBQUMsRUFBRUMsS0FBSyxHQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUMzRCxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLE1BQU1aLEVBQUUsQ0FBQ1UsS0FBSyxDQUFDQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQztRQUM3QyxNQUFNWCxFQUFFLENBQUNhLEdBQUcsRUFBRSxDQUFDO1FBQ2YsT0FBT0QsT0FBTyxDQUFDO0tBQ2hCLENBQUMsT0FBT0UsS0FBSyxFQUFFO1FBQ2QsT0FBTztZQUFFQSxLQUFLO1NBQUUsQ0FBQztLQUNsQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhhbXRpbmF0aW9uLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ3NlcnZlcmxlc3MtbXlzcWwnO1xuY29uc3QgZGIgPSBteXNxbCh7XG4gIGNvbmZpZzoge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lmhvc3QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYucG9ydCxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuZGF0YWJhc2UsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYudXNlcixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYucGFzc3dvcmRcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBleGN1dGVRdWVyeSh7IHF1ZXJ5LCB2YWx1ZXMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShxdWVyeSwgdmFsdWVzKTtcbiAgICBhd2FpdCBkYi5lbmQoKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59Il0sIm5hbWVzIjpbIm15c3FsIiwiZGIiLCJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsInBvcnQiLCJkYXRhYmFzZSIsInVzZXIiLCJwYXNzd29yZCIsImV4Y3V0ZVF1ZXJ5IiwicXVlcnkiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwiZW5kIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./lib/students.js":
/*!*************************!*\
  !*** ./lib/students.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStudent\": () => (/* binding */ createStudent),\n/* harmony export */   \"findStudent\": () => (/* binding */ findStudent),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./lib/db.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function createStudent({ fname , lname , email , password  }) {\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n        createdAt: moment__WEBPACK_IMPORTED_MODULE_3___default()().format(\"YYYY-MM-DD HH:mm:ss\"),\n        fname,\n        lname,\n        email,\n        hash,\n        salt\n    };\n    try {\n        const result = await (0,_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            query: \"INSERT INTO students ( FirstName,LastName,uuid,created, email_id, hash, salt,student_role_id) VALUES(?,?,?, ?, ?, ?, ?,?)\",\n            values: [\n                user.fname,\n                user.lname,\n                user.id,\n                user.createdAt.toString(),\n                user.email,\n                user.hash,\n                user.salt,\n                1\n            ]\n        });\n        console.log(result);\n    } catch (error) {\n        console.log(error);\n    }\n    return user;\n}\nasync function findStudent({ email  }) {\n    try {\n        console.log(email);\n        const result = await (0,_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            query: \"SELECT * FROM students WHERE email_id = ?\",\n            values: [\n                email\n            ]\n        });\n        return result[0];\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function validatePassword(user, inputPassword) {\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, user.salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = user.hash === inputHash;\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3R1ZGVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1E7QUFDTDtBQUNIO0FBRXJCLGVBQWVLLGFBQWEsQ0FBQyxFQUFFQyxLQUFLLEdBQUNDLEtBQUssR0FBQ0MsS0FBSyxHQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUNqRSxNQUFNQyxJQUFJLEdBQUdWLHlEQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELE1BQU1DLElBQUksR0FBR2Isd0RBQ0UsQ0FBQ1MsUUFBUSxFQUFFQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FDOUNFLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDcEIsTUFBTUcsSUFBSSxHQUFHO1FBQ1RDLEVBQUUsRUFBRWQsd0NBQU0sRUFBRTtRQUNaZSxTQUFTLEVBQUViLDZDQUFNLEVBQUUsQ0FBQ2MsTUFBTSxDQUFFLHFCQUFxQixDQUFDO1FBQ2xEWixLQUFLO1FBQ0xDLEtBQUs7UUFDTEMsS0FBSztRQUNMSyxJQUFJO1FBQ0pILElBQUk7S0FDUDtJQUVELElBQUk7UUFDQSxNQUFNUyxNQUFNLEdBQUcsTUFBTWhCLCtDQUFXLENBQUM7WUFDN0JpQixLQUFLLEVBQUUsMkhBQTJIO1lBQ2xJQyxNQUFNLEVBQUU7Z0JBQUVOLElBQUksQ0FBQ1QsS0FBSztnQkFBQ1MsSUFBSSxDQUFDUixLQUFLO2dCQUFFUSxJQUFJLENBQUNDLEVBQUU7Z0JBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDTCxRQUFRLEVBQUU7Z0JBQUVHLElBQUksQ0FBQ1AsS0FBSztnQkFBRU8sSUFBSSxDQUFDRixJQUFJO2dCQUFFRSxJQUFJLENBQUNMLElBQUk7QUFBQyxpQkFBQzthQUFDO1NBQzFHLENBQUM7UUFDRlksT0FBTyxDQUFDQyxHQUFHLENBQUVKLE1BQU0sQ0FBRSxDQUFDO0tBQ3pCLENBQUMsT0FBUUssS0FBSyxFQUFHO1FBQ2RGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFQyxLQUFLLENBQUUsQ0FBQztLQUN4QjtJQUVELE9BQU9ULElBQUksQ0FBQztDQUNmO0FBR00sZUFBZVUsV0FBVyxDQUFDLEVBQUVqQixLQUFLLEdBQUUsRUFBRTtJQUN6QyxJQUFJO1FBQ0FjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNVyxNQUFNLEdBQUcsTUFBTWhCLCtDQUFXLENBQUM7WUFDN0JpQixLQUFLLEVBQUUsMkNBQTJDO1lBQ2xEQyxNQUFNLEVBQUU7Z0JBQUViLEtBQUs7YUFBRTtTQUNwQixDQUFDO1FBQ0YsT0FBT1csTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BCLENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ1pGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtDQUNKO0FBRU0sZUFBZUUsZ0JBQWdCLENBQUNYLElBQUksRUFBRVksYUFBYSxFQUFFO0lBQ3hELE1BQU1DLFNBQVMsR0FBRzVCLHdEQUNILENBQUMyQixhQUFhLEVBQUVaLElBQUksQ0FBQ0wsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQ3hERSxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3BCLE1BQU1pQixjQUFjLEdBQUdkLElBQUksQ0FBQ0YsSUFBSSxLQUFLZSxTQUFTO0lBQzlDLE9BQU9DLGNBQWMsQ0FBQztDQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL0V4YW10aW5hdGlvbi8uL2xpYi9zdHVkZW50cy5qcz9hY2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IGV4Y3V0ZVF1ZXJ5IGZyb20gJy4vZGInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3R1ZGVudCh7IGZuYW1lLGxuYW1lLGVtYWlsLCBwYXNzd29yZCB9KSB7XG4gICAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpO1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG9cbiAgICAgICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcbiAgICAgICAgLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIGNyZWF0ZWRBdDogbW9tZW50KCkuZm9ybWF0KCAnWVlZWS1NTS1ERCBISDptbTpzcycpLFxuICAgICAgICBmbmFtZSxcbiAgICAgICAgbG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzYWx0LFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGN1dGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogJ0lOU0VSVCBJTlRPIHN0dWRlbnRzICggRmlyc3ROYW1lLExhc3ROYW1lLHV1aWQsY3JlYXRlZCwgZW1haWxfaWQsIGhhc2gsIHNhbHQsc3R1ZGVudF9yb2xlX2lkKSBWQUxVRVMoPyw/LD8sID8sID8sID8sID8sPyknLFxuICAgICAgICAgICAgdmFsdWVzOiBbIHVzZXIuZm5hbWUsdXNlci5sbmFtZSwgdXNlci5pZCx1c2VyLmNyZWF0ZWRBdC50b1N0cmluZygpLCB1c2VyLmVtYWlsLCB1c2VyLmhhc2gsIHVzZXIuc2FsdCwxXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCByZXN1bHQgKTtcbiAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBlcnJvciApO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kU3R1ZGVudCh7IGVtYWlsIH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y3V0ZVF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAnU0VMRUNUICogRlJPTSBzdHVkZW50cyBXSEVSRSBlbWFpbF9pZCA9ID8nLFxuICAgICAgICAgICAgdmFsdWVzOiBbIGVtYWlsIF0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0WzBdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIGlucHV0UGFzc3dvcmQpIHtcbiAgICBjb25zdCBpbnB1dEhhc2ggPSBjcnlwdG9cbiAgICAgICAgLnBia2RmMlN5bmMoaW5wdXRQYXNzd29yZCwgdXNlci5zYWx0LCAxMDAwLCA2NCwgJ3NoYTUxMicpXG4gICAgICAgIC50b1N0cmluZygnaGV4Jyk7XG4gICAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2VyLmhhc2ggPT09IGlucHV0SGFzaDtcbiAgICByZXR1cm4gcGFzc3dvcmRzTWF0Y2g7XG59Il0sIm5hbWVzIjpbImNyeXB0byIsInY0IiwidXVpZHY0IiwiZXhjdXRlUXVlcnkiLCJtb21lbnQiLCJjcmVhdGVTdHVkZW50IiwiZm5hbWUiLCJsbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzYWx0IiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsImhhc2giLCJwYmtkZjJTeW5jIiwidXNlciIsImlkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwicmVzdWx0IiwicXVlcnkiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmaW5kU3R1ZGVudCIsInZhbGlkYXRlUGFzc3dvcmQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRIYXNoIiwicGFzc3dvcmRzTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/students.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo/client */ \"./apollo/client.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps.initialApolloState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: apolloClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/orkaapps/workspace/walavan_Examination/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/orkaapps/workspace/walavan_Examination/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDaUI7QUFDSDtBQUU3QixTQUFTRSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNwRCxNQUFNQyxZQUFZLEdBQUdKLHlEQUFTLENBQUNHLFNBQVMsQ0FBQ0Usa0JBQWtCLENBQUM7SUFFNUQscUJBQ0UsOERBQUNOLDBEQUFjO1FBQUNPLE1BQU0sRUFBRUYsWUFBWTtrQkFFbEMsNEVBQUNGLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFFYixDQUNsQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXhhbXRpbmF0aW9uLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gJy4uL2Fwb2xsby9jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgIFxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsInVzZUFwb2xsbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxBcG9sbG9TdGF0ZSIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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