"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-view-transitions";
exports.ids = ["vendor-chunks/next-view-transitions"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-view-transitions/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-view-transitions/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* binding */ Link),\n/* harmony export */   ViewTransitions: () => (/* binding */ ViewTransitions),\n/* harmony export */   useTransitionRouter: () => (/* binding */ useTransitionRouter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(ssr)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(ssr)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Link,ViewTransitions,useTransitionRouter auto */ \n\n\n\nfunction useHash() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useSyncExternalStore)(subscribeHash, getHashSnapshot, getServerHashSnapshot);\n}\nfunction getHashSnapshot() {\n    return window.location.hash;\n}\nfunction getServerHashSnapshot() {\n    return \"\";\n}\nfunction subscribeHash(onStoreChange) {\n    window.addEventListener(\"hashchange\", onStoreChange);\n    return ()=>window.removeEventListener(\"hashchange\", onStoreChange);\n}\n// TODO: This implementation might not be complete when there are nested\n// Suspense boundaries during a route transition. But it should work fine for\n// the most common use cases.\nfunction useBrowserNativeTransitions() {\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const currentPathname = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(pathname);\n    // This is a global state to keep track of the view transition state.\n    const [currentViewTransition, setCurrentViewTransition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!(\"startViewTransition\" in document)) {\n            return ()=>{};\n        }\n        const onPopState = ()=>{\n            let pendingViewTransitionResolve;\n            const pendingViewTransition = new Promise((resolve)=>{\n                pendingViewTransitionResolve = resolve;\n            });\n            const pendingStartViewTransition = new Promise((resolve)=>{\n                // @ts-ignore\n                document.startViewTransition(()=>{\n                    resolve();\n                    return pendingViewTransition;\n                });\n            });\n            setCurrentViewTransition([\n                pendingStartViewTransition,\n                pendingViewTransitionResolve\n            ]);\n        };\n        window.addEventListener(\"popstate\", onPopState);\n        return ()=>{\n            window.removeEventListener(\"popstate\", onPopState);\n        };\n    }, []);\n    if (currentViewTransition && currentPathname.current !== pathname) {\n        // Whenever the pathname changes, we block the rendering of the new route\n        // until the view transition is started (i.e. DOM screenshotted).\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.use)(currentViewTransition[0]);\n    }\n    // Keep the transition reference up-to-date.\n    const transitionRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(currentViewTransition);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        transitionRef.current = currentViewTransition;\n    }, [\n        currentViewTransition\n    ]);\n    const hash = useHash();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // When the new route component is actually mounted, we finish the view\n        // transition.\n        currentPathname.current = pathname;\n        if (transitionRef.current) {\n            transitionRef.current[1]();\n            transitionRef.current = null;\n        }\n    }, [\n        hash,\n        pathname\n    ]);\n}\nconst ViewTransitionsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(()=>()=>{});\nfunction ViewTransitions({ children }) {\n    const [finishViewTransition, setFinishViewTransition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (finishViewTransition) {\n            finishViewTransition();\n            setFinishViewTransition(null);\n        }\n    }, [\n        finishViewTransition\n    ]);\n    useBrowserNativeTransitions();\n    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ViewTransitionsContext.Provider, {\n        value: setFinishViewTransition,\n        children: children\n    });\n}\nfunction useSetFinishViewTransition() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.use)(ViewTransitionsContext);\n}\nfunction _extends$1() {\n    _extends$1 = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends$1.apply(this, arguments);\n}\nfunction _object_without_properties_loose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction useTransitionRouter() {\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const finishViewTransition = useSetFinishViewTransition();\n    const triggerTransition = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((cb, { onTransitionReady } = {})=>{\n        if (\"startViewTransition\" in document) {\n            // @ts-ignore\n            const transition = document.startViewTransition(()=>new Promise((resolve)=>{\n                    (0,react__WEBPACK_IMPORTED_MODULE_3__.startTransition)(()=>{\n                        cb();\n                        finishViewTransition(()=>resolve);\n                    });\n                }));\n            if (onTransitionReady) {\n                transition.ready.then(onTransitionReady);\n            }\n        } else {\n            return cb();\n        }\n    }, []);\n    const push = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((href, _param = {})=>{\n        var { onTransitionReady } = _param, options = _object_without_properties_loose(_param, [\n            \"onTransitionReady\"\n        ]);\n        triggerTransition(()=>router.push(href, options), {\n            onTransitionReady\n        });\n    }, [\n        triggerTransition,\n        router\n    ]);\n    const replace = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((href, _param = {})=>{\n        var { onTransitionReady } = _param, options = _object_without_properties_loose(_param, [\n            \"onTransitionReady\"\n        ]);\n        triggerTransition(()=>router.replace(href, options), {\n            onTransitionReady\n        });\n    }, [\n        triggerTransition,\n        router\n    ]);\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>_extends$1({}, router, {\n            push,\n            replace\n        }), [\n        push,\n        replace,\n        router\n    ]);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n// copied from https://github.com/vercel/next.js/blob/66f8ffaa7a834f6591a12517618dce1fd69784f6/packages/next/src/client/link.tsx#L180-L191\nfunction isModifiedEvent(event) {\n    const eventTarget = event.currentTarget;\n    const target = eventTarget.getAttribute(\"target\");\n    return target && target !== \"_self\" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download\n    event.nativeEvent && event.nativeEvent.which === 2;\n}\n// copied from https://github.com/vercel/next.js/blob/66f8ffaa7a834f6591a12517618dce1fd69784f6/packages/next/src/client/link.tsx#L204-L217\nfunction shouldPreserveDefault(e) {\n    const { nodeName } = e.currentTarget;\n    // anchors inside an svg have a lowercase nodeName\n    const isAnchorNodeName = nodeName.toUpperCase() === \"A\";\n    if (isAnchorNodeName && isModifiedEvent(e)) {\n        // ignore click for browser’s default behavior\n        return true;\n    }\n    return false;\n}\n// This is a wrapper around next/link that explicitly uses the router APIs\n// to navigate, and trigger a view transition.\nfunction Link(props) {\n    const router = useTransitionRouter();\n    const { href, as, replace, scroll } = props;\n    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{\n        if (props.onClick) {\n            props.onClick(e);\n        }\n        if (\"startViewTransition\" in document) {\n            if (shouldPreserveDefault(e)) {\n                return;\n            }\n            e.preventDefault();\n            const navigate = replace ? router.replace : router.push;\n            navigate(as || href, {\n                scroll: scroll != null ? scroll : true\n            });\n        }\n    }, [\n        props.onClick,\n        href,\n        as,\n        replace,\n        scroll\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({}, props, {\n        onClick: onClick\n    }));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC12aWV3LXRyYW5zaXRpb25zL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs4RkFDd0M7QUFDUDtBQUN3QjtBQUM0RTtBQUVySSxTQUFTYTtJQUNMLE9BQU9ULDJEQUFvQkEsQ0FBQ1UsZUFBZUMsaUJBQWlCQztBQUNoRTtBQUNBLFNBQVNEO0lBQ0wsT0FBT0UsT0FBT0MsUUFBUSxDQUFDQyxJQUFJO0FBQy9CO0FBQ0EsU0FBU0g7SUFDTCxPQUFPO0FBQ1g7QUFDQSxTQUFTRixjQUFjTSxhQUFhO0lBQ2hDSCxPQUFPSSxnQkFBZ0IsQ0FBQyxjQUFjRDtJQUN0QyxPQUFPLElBQUlILE9BQU9LLG1CQUFtQixDQUFDLGNBQWNGO0FBQ3hEO0FBRUEsd0VBQXdFO0FBQ3hFLDZFQUE2RTtBQUM3RSw2QkFBNkI7QUFDN0IsU0FBU0c7SUFDTCxNQUFNQyxXQUFXdEIsNERBQVdBO0lBQzVCLE1BQU11QixrQkFBa0JwQiw2Q0FBTUEsQ0FBQ21CO0lBQy9CLHFFQUFxRTtJQUNyRSxNQUFNLENBQUNFLHVCQUF1QkMseUJBQXlCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNuRUMsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUUsMEJBQXlCcUIsUUFBTyxHQUFJO1lBQ3RDLE9BQU8sS0FBSztRQUNoQjtRQUNBLE1BQU1DLGFBQWE7WUFDZixJQUFJQztZQUNKLE1BQU1DLHdCQUF3QixJQUFJQyxRQUFRLENBQUNDO2dCQUN2Q0gsK0JBQStCRztZQUNuQztZQUNBLE1BQU1DLDZCQUE2QixJQUFJRixRQUFRLENBQUNDO2dCQUM1QyxhQUFhO2dCQUNiTCxTQUFTTyxtQkFBbUIsQ0FBQztvQkFDekJGO29CQUNBLE9BQU9GO2dCQUNYO1lBQ0o7WUFDQUoseUJBQXlCO2dCQUNyQk87Z0JBQ0FKO2FBQ0g7UUFDTDtRQUNBYixPQUFPSSxnQkFBZ0IsQ0FBQyxZQUFZUTtRQUNwQyxPQUFPO1lBQ0haLE9BQU9LLG1CQUFtQixDQUFDLFlB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LEdBQUdYLE9BQU9PLElBQUk7WUFDdkQ0QixTQUFTSixNQUFNdkIsTUFBTTtnQkFDakJ3QixRQUFRQSxVQUFVLE9BQU9BLFNBQVM7WUFDdEM7UUFDSjtJQUNKLEdBQUc7UUFDQ0YsTUFBTUcsT0FBTztRQUNiekI7UUFDQXVCO1FBQ0FwQjtRQUNBcUI7S0FDSDtJQUNELE9BQU8sV0FBVyxHQUFHakcsc0RBQUdBLENBQUNDLGlEQUFRQSxFQUFFNEUsU0FBUyxDQUFDLEdBQUdrQixPQUFPO1FBQ25ERyxTQUFTQTtJQUNiO0FBQ0o7QUFFc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXYvLi9ub2RlX21vZHVsZXMvbmV4dC12aWV3LXRyYW5zaXRpb25zL2Rpc3QvaW5kZXguanM/NzYyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdyZWFjdC9qc3gtcnVudGltZSc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmUsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlLCBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgc3RhcnRUcmFuc2l0aW9uLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VIYXNoKCkge1xuICAgIHJldHVybiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmVIYXNoLCBnZXRIYXNoU25hcHNob3QsIGdldFNlcnZlckhhc2hTbmFwc2hvdCk7XG59XG5mdW5jdGlvbiBnZXRIYXNoU25hcHNob3QoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuZnVuY3Rpb24gZ2V0U2VydmVySGFzaFNuYXBzaG90KCkge1xuICAgIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIHN1YnNjcmliZUhhc2gob25TdG9yZUNoYW5nZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25TdG9yZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpPT53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uU3RvcmVDaGFuZ2UpO1xufVxuXG4vLyBUT0RPOiBUaGlzIGltcGxlbWVudGF0aW9uIG1pZ2h0IG5vdCBiZSBjb21wbGV0ZSB3aGVuIHRoZXJlIGFyZSBuZXN0ZWRcbi8vIFN1c3BlbnNlIGJvdW5kYXJpZXMgZHVyaW5nIGEgcm91dGUgdHJhbnNpdGlvbi4gQnV0IGl0IHNob3VsZCB3b3JrIGZpbmUgZm9yXG4vLyB0aGUgbW9zdCBjb21tb24gdXNlIGNhc2VzLlxuZnVuY3Rpb24gdXNlQnJvd3Nlck5hdGl2ZVRyYW5zaXRpb25zKCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgICBjb25zdCBjdXJyZW50UGF0aG5hbWUgPSB1c2VSZWYocGF0aG5hbWUpO1xuICAgIC8vIFRoaXMgaXMgYSBnbG9iYWwgc3RhdGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgdmlldyB0cmFuc2l0aW9uIHN0YXRlLlxuICAgIGNvbnN0IFtjdXJyZW50Vmlld1RyYW5zaXRpb24sIHNldEN1cnJlbnRWaWV3VHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCEoJ3N0YXJ0Vmlld1RyYW5zaXRpb24nIGluIGRvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuICgpPT57fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvblBvcFN0YXRlID0gKCk9PntcbiAgICAgICAgICAgIGxldCBwZW5kaW5nVmlld1RyYW5zaXRpb25SZXNvbHZlO1xuICAgICAgICAgICAgY29uc3QgcGVuZGluZ1ZpZXdUcmFuc2l0aW9uID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgcGVuZGluZ1ZpZXdUcmFuc2l0aW9uUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdTdGFydFZpZXdUcmFuc2l0aW9uID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGVuZGluZ1ZpZXdUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRDdXJyZW50Vmlld1RyYW5zaXRpb24oW1xuICAgICAgICAgICAgICAgIHBlbmRpbmdTdGFydFZpZXdUcmFuc2l0aW9uLFxuICAgICAgICAgICAgICAgIHBlbmRpbmdWaWV3VHJhbnNpdGlvblJlc29sdmVcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgaWYgKGN1cnJlbnRWaWV3VHJhbnNpdGlvbiAmJiBjdXJyZW50UGF0aG5hbWUuY3VycmVudCAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIHBhdGhuYW1lIGNoYW5nZXMsIHdlIGJsb2NrIHRoZSByZW5kZXJpbmcgb2YgdGhlIG5ldyByb3V0ZVxuICAgICAgICAvLyB1bnRpbCB0aGUgdmlldyB0cmFuc2l0aW9uIGlzIHN0YXJ0ZWQgKGkuZS4gRE9NIHNjcmVlbnNob3R0ZWQpLlxuICAgICAgICB1c2UoY3VycmVudFZpZXdUcmFuc2l0aW9uWzBdKTtcbiAgICB9XG4gICAgLy8gS2VlcCB0aGUgdHJhbnNpdGlvbiByZWZlcmVuY2UgdXAtdG8tZGF0ZS5cbiAgICBjb25zdCB0cmFuc2l0aW9uUmVmID0gdXNlUmVmKGN1cnJlbnRWaWV3VHJhbnNpdGlvbik7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHRyYW5zaXRpb25SZWYuY3VycmVudCA9IGN1cnJlbnRWaWV3VHJhbnNpdGlvbjtcbiAgICB9LCBbXG4gICAgICAgIGN1cnJlbnRWaWV3VHJhbnNpdGlvblxuICAgIF0pO1xuICAgIGNvbnN0IGhhc2ggPSB1c2VIYXNoKCk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIC8vIFdoZW4gdGhlIG5ldyByb3V0ZSBjb21wb25lbnQgaXMgYWN0dWFsbHkgbW91bnRlZCwgd2UgZmluaXNoIHRoZSB2aWV3XG4gICAgICAgIC8vIHRyYW5zaXRpb24uXG4gICAgICAgIGN1cnJlbnRQYXRobmFtZS5jdXJyZW50ID0gcGF0aG5hbWU7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25SZWYuY3VycmVudFsxXSgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvblJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaGFzaCxcbiAgICAgICAgcGF0aG5hbWVcbiAgICBdKTtcbn1cblxuY29uc3QgVmlld1RyYW5zaXRpb25zQ29udGV4dCA9IC8qI19fUFVSRV9fKi8gY3JlYXRlQ29udGV4dCgoKT0+KCk9Pnt9KTtcbmZ1bmN0aW9uIFZpZXdUcmFuc2l0aW9ucyh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBbZmluaXNoVmlld1RyYW5zaXRpb24sIHNldEZpbmlzaFZpZXdUcmFuc2l0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoZmluaXNoVmlld1RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGZpbmlzaFZpZXdUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICBzZXRGaW5pc2hWaWV3VHJhbnNpdGlvbihudWxsKTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgZmluaXNoVmlld1RyYW5zaXRpb25cbiAgICBdKTtcbiAgICB1c2VCcm93c2VyTmF0aXZlVHJhbnNpdGlvbnMoKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qLyBqc3goVmlld1RyYW5zaXRpb25zQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogc2V0RmluaXNoVmlld1RyYW5zaXRpb24sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH0pO1xufVxuZnVuY3Rpb24gdXNlU2V0RmluaXNoVmlld1RyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHVzZShWaWV3VHJhbnNpdGlvbnNDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMkMSgpIHtcbiAgICBfZXh0ZW5kcyQxID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gc291cmNlKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzJDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uUm91dGVyKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGZpbmlzaFZpZXdUcmFuc2l0aW9uID0gdXNlU2V0RmluaXNoVmlld1RyYW5zaXRpb24oKTtcbiAgICBjb25zdCB0cmlnZ2VyVHJhbnNpdGlvbiA9IHVzZUNhbGxiYWNrKChjYiwgeyBvblRyYW5zaXRpb25SZWFkeSB9ID0ge30pPT57XG4gICAgICAgIGlmICgnc3RhcnRWaWV3VHJhbnNpdGlvbicgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKCgpPT5uZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUcmFuc2l0aW9uKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoVmlld1RyYW5zaXRpb24oKCk9PnJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBpZiAob25UcmFuc2l0aW9uUmVhZHkpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLnJlYWR5LnRoZW4ob25UcmFuc2l0aW9uUmVhZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNiKCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcHVzaCA9IHVzZUNhbGxiYWNrKChocmVmLCBfcGFyYW0gPSB7fSk9PntcbiAgICAgICAgdmFyIHsgb25UcmFuc2l0aW9uUmVhZHkgfSA9IF9wYXJhbSwgb3B0aW9ucyA9IF9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlKF9wYXJhbSwgW1xuICAgICAgICAgICAgXCJvblRyYW5zaXRpb25SZWFkeVwiXG4gICAgICAgIF0pO1xuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbigoKT0+cm91dGVyLnB1c2goaHJlZiwgb3B0aW9ucyksIHtcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvblJlYWR5XG4gICAgICAgIH0pO1xuICAgIH0sIFtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb24sXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IHJlcGxhY2UgPSB1c2VDYWxsYmFjaygoaHJlZiwgX3BhcmFtID0ge30pPT57XG4gICAgICAgIHZhciB7IG9uVHJhbnNpdGlvblJlYWR5IH0gPSBfcGFyYW0sIG9wdGlvbnMgPSBfb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllc19sb29zZShfcGFyYW0sIFtcbiAgICAgICAgICAgIFwib25UcmFuc2l0aW9uUmVhZHlcIlxuICAgICAgICBdKTtcbiAgICAgICAgdHJpZ2dlclRyYW5zaXRpb24oKCk9PnJvdXRlci5yZXBsYWNlKGhyZWYsIG9wdGlvbnMpLCB7XG4gICAgICAgICAgICBvblRyYW5zaXRpb25SZWFkeVxuICAgICAgICB9KTtcbiAgICB9LCBbXG4gICAgICAgIHRyaWdnZXJUcmFuc2l0aW9uLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICByZXR1cm4gdXNlTWVtbygoKT0+X2V4dGVuZHMkMSh7fSwgcm91dGVyLCB7XG4gICAgICAgICAgICBwdXNoLFxuICAgICAgICAgICAgcmVwbGFjZVxuICAgICAgICB9KSwgW1xuICAgICAgICBwdXNoLFxuICAgICAgICByZXBsYWNlLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2Upe1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbi8vIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9ibG9iLzY2ZjhmZmFhN2E4MzRmNjU5MWExMjUxNzYxOGRjZTFmZDY5Nzg0ZjYvcGFja2FnZXMvbmV4dC9zcmMvY2xpZW50L2xpbmsudHN4I0wxODAtTDE5MVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuLy8gY29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Jsb2IvNjZmOGZmYWE3YTgzNGY2NTkxYTEyNTE3NjE4ZGNlMWZkNjk3ODRmNi9wYWNrYWdlcy9uZXh0L3NyYy9jbGllbnQvbGluay50c3gjTDIwNC1MMjE3XG5mdW5jdGlvbiBzaG91bGRQcmVzZXJ2ZURlZmF1bHQoZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAvLyBhbmNob3JzIGluc2lkZSBhbiBzdmcgaGF2ZSBhIGxvd2VyY2FzZSBub2RlTmFtZVxuICAgIGNvbnN0IGlzQW5jaG9yTm9kZU5hbWUgPSBub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnQSc7XG4gICAgaWYgKGlzQW5jaG9yTm9kZU5hbWUgJiYgaXNNb2RpZmllZEV2ZW50KGUpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8gVGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIG5leHQvbGluayB0aGF0IGV4cGxpY2l0bHkgdXNlcyB0aGUgcm91dGVyIEFQSXNcbi8vIHRvIG5hdmlnYXRlLCBhbmQgdHJpZ2dlciBhIHZpZXcgdHJhbnNpdGlvbi5cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VUcmFuc2l0aW9uUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmLCBhcywgcmVwbGFjZSwgc2Nyb2xsIH0gPSBwcm9wcztcbiAgICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKGUpPT57XG4gICAgICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3RhcnRWaWV3VHJhbnNpdGlvbicgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRQcmVzZXJ2ZURlZmF1bHQoZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBuYXZpZ2F0ZSA9IHJlcGxhY2UgPyByb3V0ZXIucmVwbGFjZSA6IHJvdXRlci5wdXNoO1xuICAgICAgICAgICAgbmF2aWdhdGUoYXMgfHwgaHJlZiwge1xuICAgICAgICAgICAgICAgIHNjcm9sbDogc2Nyb2xsICE9IG51bGwgPyBzY3JvbGwgOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgcHJvcHMub25DbGljayxcbiAgICAgICAgaHJlZixcbiAgICAgICAgYXMsXG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHNjcm9sbFxuICAgIF0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIGpzeChOZXh0TGluaywgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICB9KSk7XG59XG5cbmV4cG9ydCB7IExpbmssIFZpZXdUcmFuc2l0aW9ucywgdXNlVHJhbnNpdGlvblJvdXRlciB9O1xuIl0sIm5hbWVzIjpbImpzeCIsIk5leHRMaW5rIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwic3RhcnRUcmFuc2l0aW9uIiwidXNlTWVtbyIsInVzZUhhc2giLCJzdWJzY3JpYmVIYXNoIiwiZ2V0SGFzaFNuYXBzaG90IiwiZ2V0U2VydmVySGFzaFNuYXBzaG90Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwib25TdG9yZUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlQnJvd3Nlck5hdGl2ZVRyYW5zaXRpb25zIiwicGF0aG5hbWUiLCJjdXJyZW50UGF0aG5hbWUiLCJjdXJyZW50Vmlld1RyYW5zaXRpb24iLCJzZXRDdXJyZW50Vmlld1RyYW5zaXRpb24iLCJkb2N1bWVudCIsIm9uUG9wU3RhdGUiLCJwZW5kaW5nVmlld1RyYW5zaXRpb25SZXNvbHZlIiwicGVuZGluZ1ZpZXdUcmFuc2l0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwZW5kaW5nU3RhcnRWaWV3VHJhbnNpdGlvbiIsInN0YXJ0Vmlld1RyYW5zaXRpb24iLCJjdXJyZW50IiwidHJhbnNpdGlvblJlZiIsIlZpZXdUcmFuc2l0aW9uc0NvbnRleHQiLCJWaWV3VHJhbnNpdGlvbnMiLCJjaGlsZHJlbiIsImZpbmlzaFZpZXdUcmFuc2l0aW9uIiwic2V0RmluaXNoVmlld1RyYW5zaXRpb24iLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2V0RmluaXNoVmlld1RyYW5zaXRpb24iLCJfZXh0ZW5kcyQxIiwiT2JqZWN0IiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX29iamVjdF93aXRob3V0X3Byb3BlcnRpZXNfbG9vc2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJrZXlzIiwiaW5kZXhPZiIsInVzZVRyYW5zaXRpb25Sb3V0ZXIiLCJyb3V0ZXIiLCJ0cmlnZ2VyVHJhbnNpdGlvbiIsImNiIiwib25UcmFuc2l0aW9uUmVhZHkiLCJ0cmFuc2l0aW9uIiwicmVhZHkiLCJ0aGVuIiwicHVzaCIsImhyZWYiLCJfcGFyYW0iLCJvcHRpb25zIiwicmVwbGFjZSIsIl9leHRlbmRzIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJldmVudFRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInNob3VsZFByZXNlcnZlRGVmYXVsdCIsImUiLCJub2RlTmFtZSIsImlzQW5jaG9yTm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsIkxpbmsiLCJwcm9wcyIsImFzIiwic2Nyb2xsIiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwibmF2aWdhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-view-transitions/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-view-transitions/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-view-transitions/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ e0),
/* harmony export */   ViewTransitions: () => (/* binding */ e1),
/* harmony export */   useTransitionRouter: () => (/* binding */ e2)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/workspaces/doorui/node_modules/next-view-transitions/dist/index.js#Link`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/workspaces/doorui/node_modules/next-view-transitions/dist/index.js#ViewTransitions`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/workspaces/doorui/node_modules/next-view-transitions/dist/index.js#useTransitionRouter`);


/***/ })

};
;