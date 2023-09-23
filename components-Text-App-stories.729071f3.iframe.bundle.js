"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[676],{"./src/components/Text/App.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>App_stories});var react=__webpack_require__("./node_modules/react/index.js"),Select_select=__webpack_require__("./src/components/Select/select.tsx"),BlockRenderer=__webpack_require__("./src/components/BlockRenderer/BlockRenderer.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _LoggedIn$parameters,_LoggedIn$parameters2,_LoggedOut$parameters,_LoggedOut$parameters2,App=function App(){var _useState2=_slicedToArray((0,react.useState)([]),2),blocks=_useState2[0],setBlocks=_useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Select_select.P,{onSelectChange:function handleSelectBlock(selectedValue){setBlocks("Nothing"===selectedValue?[]:[].concat(_toConsumableArray(blocks),[selectedValue]))}}),blocks.map((function(block,index){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(BlockRenderer.H,{blockType:block})},index)}))]})};try{App.displayName="App",App.__docgenInfo={description:"",displayName:"App",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/App.tsx#App"]={docgenInfo:App.__docgenInfo,name:"App",path:"src/App.tsx#App"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const App_stories={title:"Component/App",component:App,tags:["autodocs"],parameters:{layout:"center"}};var LoggedIn={args:{blocks:["Header","Text","Break","unfoldingBlock","Image"]}},LoggedOut={args:{option:{control:"select"}}};LoggedIn.parameters=_objectSpread(_objectSpread({},LoggedIn.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedIn$parameters=LoggedIn.parameters)||void 0===_LoggedIn$parameters?void 0:_LoggedIn$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    blocks: ['Header', 'Text', 'Break', 'unfoldingBlock', 'Image']\n  }\n}"},null===(_LoggedIn$parameters2=LoggedIn.parameters)||void 0===_LoggedIn$parameters2||null===(_LoggedIn$parameters2=_LoggedIn$parameters2.docs)||void 0===_LoggedIn$parameters2?void 0:_LoggedIn$parameters2.source)})}),LoggedOut.parameters=_objectSpread(_objectSpread({},LoggedOut.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedOut$parameters=LoggedOut.parameters)||void 0===_LoggedOut$parameters?void 0:_LoggedOut$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    option: {\n      control: 'select'\n    }\n  }\n}"},null===(_LoggedOut$parameters2=LoggedOut.parameters)||void 0===_LoggedOut$parameters2||null===(_LoggedOut$parameters2=_LoggedOut$parameters2.docs)||void 0===_LoggedOut$parameters2?void 0:_LoggedOut$parameters2.source)})});var __namedExportsOrder=["LoggedIn","LoggedOut"]},"./src/components/Select/select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select,Y:()=>options});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var options=[{value:"",text:"--Choose an option--"},{value:"Header",text:"Header"},{value:"Text",text:"Text"},{value:"Break",text:"Break"},{value:"UnfoldingBlock",text:"UnfoldingBlock"},{value:"Image",text:"Image"},{value:"Nothing",text:"Nothing"}],Select=function Select(_ref){var onSelectChange=_ref.onSelectChange,_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(""),2),selected=_React$useState2[0],setSelected=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{children:["Select what do you want to see",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select",{className:"select-options",value:selected,onChange:function handleChange(event){var newSelectValue=event.target.value;setSelected(newSelectValue),onSelectChange(newSelectValue)},children:options.map((function(option,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option",{value:option.value,children:option.text},index)}))})]})};Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"SelectChangeHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}}}]);