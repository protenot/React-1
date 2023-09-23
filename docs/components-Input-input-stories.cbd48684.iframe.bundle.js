/*! For license information please see components-Input-input-stories.cbd48684.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[828],{"./src/components/Input/input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _LoggedIn$parameters,_LoggedIn$parameters2,_LoggedOut$parameters,_LoggedOut$parameters2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Component/Input",component:__webpack_require__("./src/components/Input/input.tsx").I,tags:["autodocs"],parameters:{layout:"center"}};var LoggedIn={args:{onInputChange:function onInputChange(){},placeholderText:"118531231231"}},LoggedOut={args:{onInputChange:function onInputChange(){},placeholderText:""}};LoggedIn.parameters=_objectSpread(_objectSpread({},LoggedIn.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedIn$parameters=LoggedIn.parameters)||void 0===_LoggedIn$parameters?void 0:_LoggedIn$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    onInputChange() {},\n    placeholderText: '118531231231'\n  }\n}"},null===(_LoggedIn$parameters2=LoggedIn.parameters)||void 0===_LoggedIn$parameters2||null===(_LoggedIn$parameters2=_LoggedIn$parameters2.docs)||void 0===_LoggedIn$parameters2?void 0:_LoggedIn$parameters2.source)})}),LoggedOut.parameters=_objectSpread(_objectSpread({},LoggedOut.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedOut$parameters=LoggedOut.parameters)||void 0===_LoggedOut$parameters?void 0:_LoggedOut$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    onInputChange() {},\n    placeholderText: ''\n  }\n}"},null===(_LoggedOut$parameters2=LoggedOut.parameters)||void 0===_LoggedOut$parameters2||null===(_LoggedOut$parameters2=_LoggedOut$parameters2.docs)||void 0===_LoggedOut$parameters2?void 0:_LoggedOut$parameters2.source)})});var __namedExportsOrder=["LoggedIn","LoggedOut"]},"./src/components/Input/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Input=function Input(_ref){var onInputChange=_ref.onInputChange,placeholderText=_ref.placeholderText,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),inputValue=_useState2[0],setInputValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",className:"input-value",placeholder:placeholderText,onChange:function handleInputChange(event){var newValue=event.target.value;setInputValue(newValue),onInputChange(newValue)},onKeyDown:function handleKeyPress(event){"Enter"===event.key&&onInputChange(inputValue)},value:inputValue})};Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!0,type:{name:"OnInputChange"}},placeholderText:{defaultValue:null,description:"",name:"placeholderText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);