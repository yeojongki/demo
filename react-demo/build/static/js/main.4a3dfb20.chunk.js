(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[2],{134:function(e,t,n){"use strict";function a(e){var t=function(e){return e<10?"0"+e:e},n=Math.floor(e/60/60/24),a=Math.floor(e/60/60%60),r=Math.floor(e/60%60),c=Math.floor(e%60);return{days:t(n),hours:t(a),minutes:t(r),seconds:t(c)}}function r(e){return e.displayName||e.name||"Component"}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},143:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},148:function(e,t,n){e.exports=n(304)},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){var a={"./antd-form/index.js":303,"./antd-year-picker/index.js":306,"./decorators-hoc/index.js":311,"./error-boundaries/index.js":310,"./hoc/index.js":308,"./hooks/index.js":302,"./inheritance-inversion/index.js":296,"./lazy-suspense/index.js":297,"./modal-render-props/index.js":309,"./redux-saga/index.js":300,"./render-props/index.js":307,"./swipe-card/index.js":301};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=155},296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default={path:"/inheritance-inversion",exact:!0,component:r.a.lazy((function(){return n.e(0).then(n.bind(null,314))}))}},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a).a.lazy((function(){return n.e(1).then(n.bind(null,313))}));t.default={path:"/lazy-suspense",exact:!0,component:r}},300:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default={path:"/redux-saga",exact:!0,component:r.a.lazy((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,315))}))}},301:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default={path:"/swipe-card",exact:!0,component:r.a.lazy((function(){return n.e(5).then(n.bind(null,316))}))}},302:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(15),c=n(16),o=n(13),u=n(17),l=n(0),i=n.n(l),s=n(85),m=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.route;return i.a.createElement("div",null,Object(s.a)(e.children))}}]),t}(i.a.Component),h=n(22);function d(e,t){switch(t.type){case"add":return{count:e.count+1};case"minus":return{count:e.count-1};default:return e}}var f=i.a.createContext();function p(e,t){switch(t.type){case"add":return{count:e.count+1};case"minus":return{count:e.count-1};default:return e}}var b=function(e){var t=Object(l.useReducer)(p,{count:0}),n=Object(h.a)(t,2),a=n[0],r=n[1];return i.a.createElement(f.Provider,{value:{state:a,dispatch:r}},e.children)};function v(){var e=Object(l.useContext)(f),t=e.state,n=e.dispatch;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,t.count),i.a.createElement("button",{onClick:function(){return n({type:"add"})}},"+"),i.a.createElement("button",{onClick:function(){return n({type:"minus"})}},"-"))}function j(e){var t=e.count,n=Object(l.useMemo)((function(){return function(e){return console.log("child2 changeCount function"),"\u5b50\u7ec4\u4ef62\u6539\u53d8Count\u7684\u65b9\u6cd5"+e}(t)}),[t]);return i.a.createElement(i.a.Fragment,null,"child count: ",n)}var O=Object(l.memo)((function(e){var t=e.onClickCallback,n=e.count;return console.log("child render"),i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"im child:",n),i.a.createElement("button",{onClick:t},"child btn"))}));t.default={path:"/hooks",component:m,children:[{exact:!0,path:"/hooks/useState",component:function(){var e=Object(l.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,n),i.a.createElement("button",{onClick:function(){a(n+1)}},"+"),i.a.createElement("button",{onClick:function(){setTimeout((function(){console.log(n)}),2e3)}},"logCount"))}},{exact:!0,path:"/hooks/useReducer",component:function(){var e=Object(l.useReducer)(d,{count:0}),t=Object(h.a)(e,2),n=t[0],a=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,n.count),i.a.createElement("button",{onClick:function(){return a({type:"add"})}},"+"),i.a.createElement("button",{onClick:function(){return a({type:"minus"})}},"-"))}},{exact:!0,path:"/hooks/useEffect",component:function(){var e=Object(l.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){return document.title="you clicked ".concat(n," times"),function(){console.log("return func ",n),document.title="app"}}),[n]),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"you clicked ",n," times"),i.a.createElement("button",{onClick:function(){return a(n+1)}},"+"))}},{exact:!0,path:"/hooks/useContext",component:function(){return i.a.createElement(b,null,i.a.createElement(v,null))}},{exact:!0,path:"/hooks/useRef",component:function(){var e=Object(l.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.useRef)(n);return Object(l.useEffect)((function(){r.current=n,setTimeout((function(){console.log("You clicked ".concat(r.current," times"))}),3e3)})),i.a.createElement("div",null,i.a.createElement("p",null,"You clicked ",n," times"),i.a.createElement("button",{onClick:function(){return a(n+1)}},"Click me"))}},{exact:!0,path:"/hooks/useMemo",component:function(){var e=Object(l.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(+new Date),c=Object(h.a)(r,2),o=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"time:",o),i.a.createElement("button",{onClick:function(){return u(+new Date)}},"setTime"),i.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),i.a.createElement(j,{count:n}))}},{exact:!0,path:"/hooks/useCallback",component:function(){var e=Object(l.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)("test"),c=Object(h.a)(r,2),o=c[0],u=c[1],s=Object(l.useCallback)((function(){return a(n+1)}),[n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"name:",o),i.a.createElement("button",{onClick:function(){return u(o+"1")}},"+"),i.a.createElement(O,{onClickCallback:s,count:n}))}}]}},303:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(78);var o=function(e){var t=e.label,n=e.children;return r.a.createElement("div",null,t&&r.a.createElement("label",null,t),n)},u=n(79),l=n(116),i=n(14),s=n(15),m=n(16),h=n(13),d=n(17);var f=function(e){var t=e.children,n=Object(c.a)(e,["children"]);return r.a.createElement("form",n,t)};f.defaultProps={onSubmit:function(){}},f.Item=o,f.create=function(){return function(e){return function(t){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(c)))).state={values:{},errors:{}},t.rules={},t.getFieldsValue=function(){return t.state.values},t.handleChange=function(e,n){t.setState({values:Object(l.a)({},t.state.values,Object(u.a)({},n,e.target.value))},(function(){t.validateFields([n])}))},t.validateFields=function(e,n){"function"===typeof e&&(n=e,e=Object.keys(t.rules));var a=t.state.errors;e.forEach((function(n){var r=t.rules[e];if(r&&r.length>0){var c=t.state.values[n],o=r.map((function(e){var t=e.required,a=e.min,r=e.max,o=e.message;return t&&void 0===c||r&&c.length>r||a&&c.length<a?{field:n,message:o}:null})).filter(Boolean);o.length>0?a[n]={errors:o}:delete a[n]}}));var r=Object.keys(a).length>0?a:null;t.setState({errors:a},(function(){n&&n(r,t.state.values)}))},t.getFieldDecorator=function(e,n){var a=n.rules;return a&&(t.rules[e]=a),function(n){var a=t.state,c=a.values,o=a.errors[e],u=[],l={value:c[e]||"",onChange:function(n){return t.handleChange(n,e)}};o&&o.errors.length>0&&(l.style={border:"1px solid red"},u=o.errors.map((function(e,t){var n=e.message;return r.a.createElement("p",{style:{color:"red"},key:t},n)})));var i=r.a.cloneElement(n,l);return r.a.createElement("div",null,i,u.length>0&&u)}},t}return Object(d.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){var t={form:{getFieldsValue:this.getFieldsValue,getFieldDecorator:this.getFieldDecorator,validateFields:this.validateFields}};return r.a.createElement(e,t)}}]),n}(r.a.Component)}};var p=f;var b=p.create()((function(e){var t=e.form,n=t.getFieldDecorator,a=t.validateFields;return r.a.createElement(p,{onSubmit:function(e){e.preventDefault(),a((function(e,t){e?console.error("error",e):console.log("Received values of form: ",t)}))}},r.a.createElement(p.Item,{label:"\u7528\u6237\u540d"},n("username",{rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]})(r.a.createElement("input",null))),r.a.createElement(p.Item,{label:"\u5bc6\u7801"},n("password",{rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},{min:6,message:"\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e6\u4f4d"},{max:8,message:"\u5bc6\u7801\u4e0d\u80fd\u4e0d\u80fd\u5927\u4e8e8\u4f4d"}]})(r.a.createElement("input",null))),r.a.createElement(p.Item,null,r.a.createElement("button",{type:"submit"},"\u63d0\u4ea4")))}));t.default={path:"/antd-form",exact:!0,component:b}},304:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(153),n(154),n(85)),l=n(155),i=l.keys().map((function(e){return l(e).default})),s=n(144);var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(s.a,null,Object(u.a)(i))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},306:function(e,t,n){"use strict";n.r(t);n(64);var a=n(37),r=(n(312),n(62)),c=n(14),o=n(15),u=n(16),l=n(13),i=n(17),s=n(0),m=n.n(s),h=(n(305),n(145)),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(h.a,Object.assign({},this.props,{format:"YYYY",mode:"year"}))}}]),t}(m.a.Component),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,date:null},n.handleChange=function(e){n.setState({open:!1}),n.props.form.setFieldsValue({date:e})},n.handleOpenChange=function(e){n.setState({open:e})},n.handleReset=function(){n.props.form.resetFields()},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,n=(0,e.getFieldValue)("date");return m.a.createElement("div",{className:"App",style:{paddingTop:"150px"}},m.a.createElement(r.a,{layout:"inline"},m.a.createElement(r.a.Item,null,t("date",{})(m.a.createElement(d,{open:this.state.open,onOpenChange:this.handleOpenChange,onPanelChange:this.handleChange})),m.a.createElement("div",{style:{margin:"10px 0"}},"\u5f53\u524d\u65e5\u671f\uff1a",n?n.format("YYYY"):"\u672a\u9009\u62e9")),m.a.createElement(r.a.Item,null,m.a.createElement(a.a,{type:"primary",onClick:this.handleReset},"Reset"))))}}]),t}(m.a.Component),p=r.a.create({name:"datePickerDemo"})(f);t.default={path:"/antd-year-picker",exact:!0,component:p}},307:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n(15),u=n(16),l=n(13),i=n(17),s=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={x:0,y:0},n.handleMouseMove=function(e){n.setState({x:e.clientX,y:e.clientY})},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onMouseMove:this.handleMouseMove},this.props.render(this.state))}}]),t}(r.a.Component),m=n(84);t.default={path:"/render-props",exact:!0,component:function(){return r.a.createElement(s,{render:function(e){return r.a.createElement(m.a,{mouse:e})}})}}},308:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(15),c=n(16),o=n(13),u=n(17),l=n(0),i=n.n(l),s=function(e){return function(t){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(u)))).state={x:0,y:0},t.handleMouseMove=function(e){t.setState({x:e.clientX,y:e.clientY})},t}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onMouseMove:this.handleMouseMove},i.a.createElement(e,Object.assign({},this.props,{mouse:this.state})))}}]),n}(i.a.Component)}(n(84).a);t.default={path:"/hoc",exact:!0,component:s}},309:function(e,t,n){"use strict";n.r(t);n(64);var a=n(37),r=n(0),c=n.n(r),o=(n(298),n(146)),u=function(e){var t=e.visible,n=e.handleHide;return c.a.createElement(o.a,{visible:t,title:"Hello",onOk:n,onCancel:n},"World!")},l=n(14),i=n(15),s=n(16),m=n(13),h=n(17),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},n.show=function(){n.setState({visible:!0})},n.hide=function(){n.setState({visible:!1})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.visible;return(0,this.props.children)({visible:e,show:this.show,hide:this.hide})}}]),t}(c.a.Component);t.default={path:"/modal-render-props",exact:!0,component:function(){return c.a.createElement(d,null,(function(e){return c.a.createElement("div",null,c.a.createElement(u,{visible:e.visible,handleHide:e.hide}),c.a.createElement(a.a,{type:"primary",onClick:e.show},"Click me!"))}))}}},310:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(15),c=n(16),o=n(13),u=n(17),l=n(0),i=n.n(l),s=Object(l.lazy)((function(){return n.e(1).then(n.bind(null,313))})),m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={hasError:!1},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(e){console.log("componentDidCatch",e)}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("div",null,"something error..."):i.a.createElement(l.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(s,{name:"error-boundaries"}))}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("getDerivedStateFromError",e),{hasError:!0}}}]),t}(i.a.Component);t.default={path:"/error-boundaries",exact:!0,component:m}},311:function(e,t,n){"use strict";n.r(t);var a,r=n(78),c=n(14),o=n(15),u=n(16),l=n(13),i=n(17),s=n(0),m=n.n(s),h=n(134),d=["admin"];var f=function(e){var t=function(t){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){var t=this.props,n=t.visible,a=t.auth,c=Object(r.a)(t,["visible","auth"]);return!1===n||a&&-1===d.indexOf(a)?null:m.a.createElement(e,c)}}]),n}(s.Component);return t.displayName="HOC(".concat(Object(h.a)(e),")"),t}(a=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement("button",null,"AdminButton")}}]),t}(s.Component))||a,p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={auth:"user"},n.toggleAuth=function(){n.setState({auth:"user"===n.state.auth?"admin":"user"})},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,"now auth: ",this.state.auth),m.a.createElement("button",{onClick:this.toggleAuth},"toggle"),m.a.createElement(f,{auth:this.state.auth}))}}]),t}(m.a.Component);t.default={path:"/decorators-hoc",exact:!0,component:p}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(14),r=n(15),c=n(16),o=n(13),u=n(17),l=n(0),i=n.n(l),s=n(143),m=n.n(s),h=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.mouse;return i.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo",style:{width:200,height:200,position:"absolute",left:e.x,top:e.y}})}}]),t}(i.a.Component)}},[[148,4,6]]]);