webpackJsonp([26],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},15:function(n,a,s){"use strict";s(9),s(40)},16:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),l=t(o),c=s(7),u=t(c),i=s(6),r=t(i),k=s(1),d=t(k),f=s(33),m=t(f),g=s(3),h=t(g),v=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.className,o=a.style,l=a.renderHeader,c=a.renderFooter,u=(0,h["default"])((n={},(0,p["default"])(n,s,!0),(0,p["default"])(n,e,e),n));return d["default"].createElement("div",{className:u,style:o},l?d["default"].createElement("div",{className:s+"-header"},l()):null,t?d["default"].createElement("div",{className:s+"-body"},t):null,c?d["default"].createElement("div",{className:s+"-footer"},c()):null)},a}(d["default"].Component);a["default"]=v,v.Item=m["default"],v.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},19:function(n,a){"use strict";function s(n){var a={};return Object.keys(n).forEach(function(s){0===s.indexOf("data-")&&(a[s]=n[s])}),a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},20:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(5),p=t(e),o=s(1),l=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return l["default"].createElement("i",(0,p["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},23:function(n,a,s){"use strict";s(29)},28:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(35),p=t(e),o=s(34),l=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,c=(0,l["default"])(n);!(t=(o=c.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){e=!0,p=u}finally{try{!t&&c["return"]&&c["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},29:function(n,a){},31:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},33:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=a.Brief=void 0;var e=s(5),p=t(e),o=s(8),l=t(o),c=s(4),u=t(c),i=s(7),r=t(i),k=s(6),d=t(k),f=s(1),m=t(f),g=s(3),h=t(g),v=s(19),y=t(v),b=a.Brief=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){return m["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},a}(m["default"].Component),E=function(n){function a(s){(0,u["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));return t.onClick=function(n){t.props.onClick&&t.props.onClick(n)},t.onTouchStart=function(){t.props.onClick&&t.setState({hover:!0})},t.onTouchEnd=function(){t.props.onClick&&t.setState({hover:!1})},t.state={hover:!1},t}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a,s,t=this.props,e=t.prefixCls,o=t.thumb,c=t.arrow,u=t.error,i=t.children,r=t.extra,k=t.className,d=t.align,f=t.multipleLine,g=t.wrap,v=t.style,b=this.state.hover,E=void 0,x=void 0,w=(0,h["default"])((n={},(0,l["default"])(n,e+"-item",!0),(0,l["default"])(n,e+"-item-error",u),(0,l["default"])(n,e+"-item-top","top"===d),(0,l["default"])(n,e+"-item-middle","middle"===d),(0,l["default"])(n,e+"-item-bottom","bottom"===d),(0,l["default"])(n,e+"-item-hover",b),(0,l["default"])(n,k,k),n)),C=(0,h["default"])((a={},(0,l["default"])(a,e+"-line",!0),(0,l["default"])(a,e+"-line-multiple",f),(0,l["default"])(a,e+"-line-wrap",g),a)),B=(0,h["default"])((s={},(0,l["default"])(s,e+"-arrow",!0),(0,l["default"])(s,e+"-arrow-horizontal","horizontal"===c),(0,l["default"])(s,e+"-arrow-vertical","down"===c||"up"===c),(0,l["default"])(s,e+"-arrow-vertical-up","up"===c),s));return o&&(E="string"==typeof o?m["default"].createElement("div",{className:e+"-thumb"},m["default"].createElement("img",{src:o})):m["default"].createElement("div",{className:e+"-thumb"},o)),x=""!==c?m["default"].createElement("div",{className:B}):null,m["default"].createElement("div",(0,p["default"])({},(0,y["default"])(this.props),{className:w,onClick:this.onClick,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,style:v}),E,m["default"].createElement("div",{className:C},""!==i?m["default"].createElement("div",{className:e+"-content"},i):null,""!==r?m["default"].createElement("div",{className:e+"-extra"},r):null,x))},a}(m["default"].Component);a["default"]=E,E.Brief=b,E.defaultProps={prefixCls:"am-list",thumb:"",arrow:"",children:"",extra:"",error:!1,multipleLine:!1,align:"middle",wrap:!1},E.myName="ListItem"},34:function(n,a,s){n.exports={"default":s(36),__esModule:!0}},35:function(n,a,s){n.exports={"default":s(37),__esModule:!0}},36:function(n,a,s){s(32),s(24),n.exports=s(38)},37:function(n,a,s){s(32),s(24),n.exports=s(39)},38:function(n,a,s){var t=s(43),e=s(52);n.exports=s(17).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},39:function(n,a,s){var t=s(62),e=s(25)("iterator"),p=s(46);n.exports=s(17).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},40:function(n,a){},45:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&M(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(M(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(5),l=t(o),c=s(8),u=t(c),i=s(28),r=t(i),k=s(4),d=t(k),f=s(7),m=t(f),g=s(6),h=t(g),v=s(1),y=t(v),b=s(3),E=t(b),x=s(20),w=t(x),C=s(31),B=t(C),T=s(48),_=t(T),j=/^[\u4e00-\u9fa5]{2}$/,M=j.test.bind(j),N=function(n){function a(){(0,d["default"])(this,a);for(var s=arguments.length,t=Array(s),e=0;e<s;e++)t[e]=arguments[e];var p=(0,m["default"])(this,n.call.apply(n,[this].concat(t)));return p.onClick=function(){p.props.onClick(p)},p}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,B["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),s=(0,r["default"])(a,2),t=s[0],e=t.children,o=t.className,c=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.disabled,m=t.htmlType,g=t.icon,h=t.loading,v=t.touchFeedback,b=s[1],x=(0,E["default"])((n={},(0,u["default"])(n,o,o),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===k),(0,u["default"])(n,c+"-loading",h),(0,u["default"])(n,c+"-inline",d),(0,u["default"])(n,c+"-disabled",f),(0,u["default"])(n,c+"-active",v),n)),C=h?"loading":g,T=y["default"].Children.map(e,p);return y["default"].createElement("button",(0,l["default"])({},b,{type:m||"button",className:x,disabled:f,onClick:this.onClick}),C?y["default"].createElement(w["default"],{type:C}):null,T)},a}(y["default"].Component);N.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,_["default"])(N),n.exports=a["default"]},48:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:{myName:a||"TouchableFeedbackComponent"},getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},render:function(){var a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp};return c["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(5),o=t(p);a["default"]=e;var l=s(1),c=t(l),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},49:function(n,a,s){"use strict";s(9),s(23),s(65)},65:function(n,a){},680:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(49),s(45)),p=t(e),o=s(1),l=t(o),c=s(2);t(c);n.exports={content:[["p","\u4e3b\u6309\u94ae\u548c\u6b21\u6309\u94ae\u53ef\u72ec\u7acb\u4f7f\u7528\uff0c\u9700\u8981\u5f3a\u5f15\u5bfc\u7528\u4e3b\u6309\u94ae\u3002"],["p","\u5728\u6709\u591a\u4e2a\u64cd\u4f5c\u540c\u65f6\u51fa\u73b0\u65f6\uff0c\u9700\u8981\u533a\u5206\u4e3b\u6b21\u4f18\u5148\u7ea7\uff0c\u4e3b\u6309\u94ae\u5728\u540c\u4e00\u4e2a\u64cd\u4f5c\u533a\u57df\u5efa\u8bae\u6700\u591a\u51fa\u73b0\u4e00\u6b21\u3002"],["p","\u5176\u4ed6\u6309\u94ae\u7c7b\u578b\u6709\uff1a",["code","ghost"],"/",["code","warning"],"\uff1b\u6709\u5355\u72ec\u7684",["code","loading"],"/",["code","disabled"],"\u5c5e\u6027\u8bbe\u7f6e"]],meta:{order:0,title:"\u7c7b\u578b\u3001\u5c3a\u5bf8",filename:"components/button/demo/basic.md",id:"components-button-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ButtonExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'0 8px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >data-seed</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>logId<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token keyword" >default</span> \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span><span class="token keyword" >default</span> disabled \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>e <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>primary \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>primary disabled \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>e <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>ghost \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>ghost disabled \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>warning \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >loading</span><span class="token punctuation" >></span></span>loading \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>inline <span class="token operator" >/</span> small<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span><span class="token keyword" >default</span> inline<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >inline</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token keyword" >default</span> inline small<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>primary inline<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>primary inline small<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ButtonExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"ButtonExample",render:function(){return l["default"].createElement("div",{style:{margin:"0 8px"}},l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement(p["default"],{"data-seed":"logId"},"default \u6309\u94ae"),l["default"].createElement("div",{style:{height:8}}),l["default"].createElement(p["default"],{disabled:!0},"default disabled \u6309\u94ae")),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement(p["default"],{type:"primary",onClick:function(n){return console.log(n)}},"primary \u6309\u94ae"),l["default"].createElement("div",{style:{height:8}}),l["default"].createElement(p["default"],{type:"primary",disabled:!0},"primary disabled \u6309\u94ae")),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement(p["default"],{type:"ghost",onClick:function(n){return console.log(n)}},"ghost \u6309\u94ae"),l["default"].createElement("div",{style:{height:8}}),l["default"].createElement(p["default"],{type:"ghost",disabled:!0},"ghost disabled \u6309\u94ae")),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement(p["default"],{type:"warning"},"warning \u6309\u94ae")),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement(p["default"],{loading:!0},"loading \u6309\u94ae")),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement("p",{className:"demo-p"},"inline / small"),l["default"].createElement("div",{style:{height:8}}),l["default"].createElement(p["default"],{inline:!0},"default inline"),"\xa0",l["default"].createElement(p["default"],{inline:!0,size:"small"},"default inline small"),l["default"].createElement("div",{style:{height:8}}),l["default"].createElement(p["default"],{type:"primary",inline:!0},"primary inline"),"\xa0",l["default"].createElement(p["default"],{type:"primary",inline:!0,size:"small"},"primary inline small")))}});return l["default"].createElement(n,null)}}},681:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(15),s(16)),p=t(e),o=(s(49),s(45)),l=t(o),c=s(1),u=t(c),i=s(2);t(i);n.exports={content:[["p","\u548c List / Flex \u7ed3\u5408\u4f7f\u7528\u793a\u4f8b"]],meta:{order:1,title:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",filename:"components/button/demo/complex.md",id:"components-button-demo-complex"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> List <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'10px 0\'</span><span class="token punctuation" >,</span> backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'white\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n      <span class="token attr-name" >extra={&lt;Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>small<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n      multipleLine\n    <span class="token operator" >></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n      <span class="token attr-name" >extra={&lt;Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>small<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n      multipleLine\n    <span class="token operator" >></span>\n      \u533a\u57df\u7ecf\u7406\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){return u["default"].createElement(p["default"],{style:{margin:"10px 0",backgroundColor:"white"}},u["default"].createElement(p["default"].Item,{extra:u["default"].createElement(l["default"],{type:"ghost",size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",u["default"].createElement(p["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")),u["default"].createElement(p["default"].Item,{extra:u["default"].createElement(l["default"],{size:"small",inline:!0},"small"),multipleLine:!0},"\u533a\u57df\u7ecf\u7406",u["default"].createElement(p["default"].Item.Brief,null,"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c")))}}},900:function(n,a,s){n.exports={basic:s(680),complex:s(681)}}});