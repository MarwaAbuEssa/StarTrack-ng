/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Ionic.loadBundle("qhjpqa5e",["exports"],function(t){window.Ionic.h;var e=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0;o<n.length;o++){var i=n[o];if(t[i]!==e[i])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),n=function(){function t(){this.from=""}return t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUpdate=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from"},to:{type:String,attr:"to"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();function r(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function o(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}function i(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=u(t,"to");return{from:o(u(t,"from")),to:null==e?void 0:o(e)}})}function a(t,e){return void 0===e&&(e=t),Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var n=u(e,"component");if(!n)throw new Error("component missing in ion-route");return{path:o(u(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:a(t,e)}})}function u(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function s(t){for(var e=[],n=0,r=t;n<r.length;n++)c([],e,r[n]);return e}function c(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++)c(r,e,i[o]);else e.push(r)}var h=":not([no-router]) ion-nav,:not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function l(t){return t?t.matches(h)?t:t.querySelector(h):null}function f(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}function p(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r}function d(t,e){for(var n=new v(t),r=!1,o=void 0,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])r=!0;else{for(var u=0,s=a;u<s.length;u++){var c=s[u],h=n.next();if(":"===c[0]){if(""===h)return null;((o=o||[])[i]||(o[i]={}))[c.slice(1)]=h}else if(h!==c)return null}r=!1}}return r&&r!==(""===n.next())?null:o?e.map(function(t,e){return{id:t.id,path:t.path,params:m(t.params,o[e])}}):e}function m(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function g(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e}var v=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),b=function(){function t(){this.previousPath=null,this.busy=!1,this.init=!1,this.state=0,this.lastState=0,this.base="",this.useHash=!0}return t.prototype.componentDidLoad=function(){var t=this;this.init=!0;var e=a(this.el);this.routes=s(e),this.redirects=i(this.el),requestAnimationFrame(function(){t.historyDirection(),t.writeNavStateRoot(t.getPath(),0)})},t.prototype.onRedirectChanged=function(t){this.init&&(t.target,this.redirects=i(this.el))},t.prototype.onRoutesChanged=function(t){var e=this;this.init&&(t.target,t.detail,this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.timer=setTimeout(function(){var t=a(e.el);e.routes=s(t),e.writeNavStateRoot(e.getPath(),0),e.timer=void 0},100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)},t.prototype.historyDirection=function(){null===window.history.state&&(this.state++,window.history.replaceState(this.state,document.title,document.location.href));var t=window.history.state,e=this.lastState;return this.lastState=t,t>e?1:t<e?-1:0},t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,o,i;return __generator(this,function(a){switch(a.label){case 0:return this.busy?[2,!1]:(e=function(t){for(var e,n=[],r=document.body;e=l(r);){var o=e.getRouteId();if(!o)break;r=o.element,o.element=void 0,n.push(o)}return{ids:n,outlet:e}}(),n=e.ids,r=e.outlet,(o=function(t,e){for(var n=null,r=0,o=t.map(function(t){return t.id}),i=0,a=e;i<a.length;i++){var u=a[i],s=p(o,u);s>r&&(n=u,r=s)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:m(e.params,t[n]&&t[n].params)}}):null}(n,this.routes))?(i=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=o.params&&o.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(o))?(this.setPath(i,t),r?[4,this.writeNavState(r,o,0,n.length)]:[3,2]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]));case 1:a.sent(),a.label=2;case 2:return this.emitRouteChange(i,null),[2,!0]}})})},t.prototype.push=function(t,e){void 0===e&&(e=1);var n=o(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.writeNavStateRoot=function(t,e){return __awaiter(this,void 0,void 0,function(){var n,r,o,i;return __generator(this,function(a){switch(a.label){case 0:return this.busy?[2,!1]:t?(n=function(t,e){for(var n=0,r=e;n<r.length;n++){var o=r[n];if(f(t,o))return o}return null}(t,this.redirects),r=null,n&&(this.setPath(n.to,e),r=n.from,t=n.to),o=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=d(t,i[o]);if(null!==a){var u=g(a);u>r&&(r=u,n=a)}}return n}(t,this.routes),[4,this.writeNavState(document.body,o,e)]):(console.error("[ion-router] URL is not part of the routing set"),[2,!1]);case 1:return(i=a.sent())&&this.emitRouteChange(t,r),[2,i]}})})},t.prototype.writeNavState=function(t,e,n,r){return void 0===r&&(r=0),__awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(i){switch(i.label){case 0:return this.busy?[2,!1]:(this.busy=!0,[4,function t(e,n,r,o,i){return void 0===i&&(i=!1),__awaiter(this,void 0,void 0,function(){var a,u,s,c;return __generator(this,function(h){switch(h.label){case 0:return h.trys.push([0,6,,7]),a=l(e),!n||o>=n.length||!a?[2,i]:[4,a.componentOnReady()];case 1:return h.sent(),u=n[o],[4,a.setRouteId(u.id,u.params,r)];case 2:return(s=h.sent()).changed&&(r=0,i=!0),[4,t(s.element,n,r,o+1,i)];case 3:return i=h.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:h.sent(),h.label=5;case 5:return[2,i];case 6:return c=h.sent(),console.error(c),[2,!1];case 7:return[2]}})})}(t,e,n,r)]);case 1:return o=i.sent(),this.busy=!1,[2,o]}})})},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,o,i,a){var u=r(o=[e].concat(o));n&&(u="#"+u),1===i?t.pushState(a,"",u):t.replaceState(a,"",u)}(window.history,this.base,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return t=window.location,e=this.base,(n=this.useHash?t.hash.substr(1):t.pathname).startsWith(e)?o(n.slice(e.length)):null;var t,e,n},t.prototype.emitRouteChange=function(t,e){var n=this.previousPath,o=e?r(e):null,i=r(t);this.previousPath=i,this.ionRouteChanged.emit({from:n,redirectedFrom:o,to:i})},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{base:{type:String,attr:"base"},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},push:{method:!0},queue:{context:"queue"},useHash:{type:Boolean,attr:"use-hash"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteChanged",method:"ionRouteChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionRouteRedirectChanged",method:"onRedirectChanged"},{name:"ionRouteDataChanged",method:"onRoutesChanged"},{name:"window:popstate",method:"onPopState"}]},enumerable:!0,configurable:!0}),t}();t.IonRoute=e,t.IonRouteRedirect=n,t.IonRouter=b,Object.defineProperty(t,"__esModule",{value:!0})});