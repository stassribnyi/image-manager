(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/logo.aaa24f5c.png"},36:function(e,t,a){e.exports=a.p+"static/media/image-placeholder.abb302b4.svg"},38:function(e,t,a){e.exports=a(76)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"moveToPage",function(){return G}),a.d(n,"setPageSize",function(){return F}),a.d(n,"moveToFirst",function(){return z}),a.d(n,"moveToLast",function(){return U}),a.d(n,"moveToNext",function(){return V}),a.d(n,"moveToPrev",function(){return R});var o={};a.r(o),a.d(o,"addImage",function(){return Z}),a.d(o,"editImage",function(){return Q}),a.d(o,"fetchImage",function(){return $}),a.d(o,"resetImage",function(){return K}),a.d(o,"updateImage",function(){return ee});var r=a(0),l=a.n(r),c=a(30),i=a.n(c),s=a(77),m=a(12),u=(a(47),a(13)),p=a(32),d=a(4),g={show:!1},h=a(17),f=[],v={pageNumber:1,itemsCount:1,pageSize:5,pageSizeOptions:[1,5,25,50]},E={tooltip:"",showTooltip:!1,url:""},b=Object(u.c)({modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return Object(d.a)({},t.payload,{show:!0});case"CLOSE_MODAL":return g;default:return e}},images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_IMAGES":return t.payload;case"ADD_IMAGE":return[].concat(Object(h.a)(e),[t.payload]);case"UPDATE_IMAGE":var a=e.findIndex(function(e){return e.id===t.payload.id});if(a<0)return e;var n=Object(h.a)(e);return n.splice(a,1,t.payload),n;case"DELETE_IMAGE":var o=e.findIndex(function(e){return e.id===t.payload});if(o<0)return e;var r=Object(h.a)(e);return r.splice(o,1),r;default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_TO_PAGE":return Object(d.a)({},e,{pageNumber:t.payload});case"MOVE_TO_FIRST":return Object(d.a)({},e,{pageNumber:1});case"MOVE_TO_LAST":var a=e.pageNumber,n=e.pageSize,o=e.itemsCount,r=Math.ceil(o/n);return r===a?e:Object(d.a)({},e,{pageNumber:r});case"MOVE_TO_NEXT":var l=e.pageNumber,c=e.pageSize,i=e.itemsCount,s=l+1;return s>Math.ceil(i/c)?e:Object(d.a)({},e,{pageNumber:s});case"MOVE_TO_PREV":var m=e.pageNumber,u=m-1;return u<=0||m===u?e:Object(d.a)({},e,{pageNumber:u});case"SET_ITEMS_COUNT":return Object(d.a)({},e,{itemsCount:t.payload});case"SET_PAGE_SIZE":return Object(d.a)({},e,{pageNumber:1,pageSize:t.payload});default:return e}},currentImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_IMAGE":case"EDIT_IMAGE":return t.payload;case"RESET_IMAGE":return E;default:return e}}}),N=[p.a],w=Object(u.d)(b,{},u.a.apply(void 0,N)),y=(a(48),Object(m.b)(function(e){return{modal:e.modal}})(function(e){var t=e.modal,a=t.title,n=t.show,o=t.body,r=t.submitName,c=t.onSubmit,i=t.closeName,s=t.onClose,m=n?"show d-block":"d-none",u=n?"show":"d-none",p=c?l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:c},r):null,d=s?l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:s},i):null;return l.a.createElement("div",null,l.a.createElement("div",{className:"modal ".concat(m),tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},a),l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:s},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},o),l.a.createElement("div",{className:"modal-footer"},p,d)))),l.a.createElement("div",{className:"modal-backdrop ".concat(u)}))})),O=a(6),I=a(7),C=a(9),k=a(8),T=a(10),j=a(78),S=a(33),_=a.n(S),x=(a(49),function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(C.a)(this,Object(k.a)(t).call(this,e))).toggleCollapse=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.state={collapsed:!0},a}return Object(T.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.state.collapsed?"collapse":"";return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary fixed-top"},l.a.createElement(j.a,{to:"/",className:"navbar-brand",onClick:this.toggleCollapse},l.a.createElement("img",{src:_.a,alt:"The manager logo",className:"logo"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","aria-controls":"navbarsDefault","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleCollapse},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navbar-collapse ".concat(e)},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(j.a,{to:"/",exact:!0,className:"nav-link",activeClassName:"active",onClick:this.toggleCollapse},"All Images")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(j.a,{to:"/new",className:"nav-link",activeClassName:"active",onClick:this.toggleCollapse},"Add new image")))))}}]),t}(r.Component)),P=(a(51),function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(C.a)(this,Object(k.a)(t).call(this,e))).handleBeforeInstallPropmpt=function(e){e.preventDefault(),a.setState({deferredPrompt:e,visible:!0})},a.handleYesClick=function(){a.setState({visible:!1});var e=a.state.deferredPrompt;e&&(e.prompt(),e.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),a.setState({deferredPrompt:null})}))},a.handleNoClick=function(){a.setState({visible:!1,deferredPrompt:null})},a.state={visible:!1},a}return Object(T.a)(t,e),Object(I.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPropmpt)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeinstallprompt",this.handleBeforeInstallPropmpt)}},{key:"render",value:function(){return this.state.visible?l.a.createElement("div",{className:"pwa-prompt"},l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-white"},l.a.createElement("h4",null,"Add app to the home screen?"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-white"},l.a.createElement("button",{className:"btn btn-success mr-3",onClick:this.handleYesClick},"Yes"),l.a.createElement("button",{className:"btn btn-warning",onClick:this.handleNoClick},"No")))))):null}}]),t}(r.Component)),A=(a(52),function(e){return function(t){t({type:"SHOW_MODAL",payload:{title:"Preview",closeName:"Close",onClose:function(){return t({type:"CLOSE_MODAL"})},body:e}})}}),M=a(35),D=a.n(M).a.create({baseURL:"http://localhost:5000"}),L=new(function(){function e(){Object(O.a)(this,e)}return Object(I.a)(e,[{key:"getImages",value:function(e,t){return D.get("images?_page=".concat(e,"&_limit=").concat(t))}},{key:"addImage",value:function(e){return D.post("images",e)}},{key:"updateImage",value:function(e){return D.put("images/".concat(e.id),e)}},{key:"getImage",value:function(e){return D.get("images/".concat(e))}},{key:"deleteImage",value:function(e){return D.delete("images/".concat(e))}}]),e}()),G=function(e){return{type:"MOVE_TO_PAGE",payload:e}},F=function(e){return{type:"SET_PAGE_SIZE",payload:e}},z=function(){return{type:"MOVE_TO_FIRST"}},U=function(){return{type:"MOVE_TO_LAST"}},V=function(){return{type:"MOVE_TO_NEXT"}},R=function(){return{type:"MOVE_TO_PREV"}},W=(a(72),function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(C.a)(this,Object(k.a)(t).call(this,e))).toggleTooltip=function(){a.setState(function(e){return{showTooltip:!e.showTooltip}})},a.state={showTooltip:!1},a}return Object(T.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.tooltip,n=e.showTooltip,o={style:{backgroundImage:'url("'.concat(t,'")')}},r="preview-image-tooltip ".concat(this.state.showTooltip?"active":""),c=n?l.a.createElement("span",{title:a,tabIndex:"-1",className:r,onClick:this.toggleTooltip}):null;return l.a.createElement("div",{className:"position-relative preview-image-container text-center"},l.a.createElement("span",Object.assign({className:"preview-image"},o)),c)}}]),t}(r.Component)),H=(a(73),function(e){var t=e.pageSize,a=e.pageNumber,n=e.itemsCount,o=e.pageSizeOptions,r=e.onPageSizeChange,c=e.onPageNumberChange,i=e.onNext,s=e.onPrev,m=e.onFirst,u=e.onLast,p=Math.ceil(n/t),d={min:1,step:1,size:4,maxLength:4,type:"number",max:p,value:a,onChange:function(e){var t=e.target;return c(parseInt(t.value,10)||a)}},g={value:t,onChange:function(e){var a=e.target;return r(parseInt(a.value,10)||t)}},h=o.map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)});return l.a.createElement("table",{className:"table pagination-compact"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"pagination-controls bg-success"},l.a.createElement("td",null,l.a.createElement("span",{className:"icon first",onClick:m})),l.a.createElement("td",null,l.a.createElement("span",{className:"icon prev",onClick:s})),l.a.createElement("td",null,l.a.createElement("span",null,"Page\xa0")),l.a.createElement("td",null,l.a.createElement("input",Object.assign({className:"page-number"},d))),l.a.createElement("td",null,l.a.createElement("span",null,"of\xa0",p)),l.a.createElement("td",null,l.a.createElement("select",Object.assign({className:"page-size"},g),h)),l.a.createElement("td",null,l.a.createElement("span",{className:"icon next",onClick:i})),l.a.createElement("td",null,l.a.createElement("span",{className:"icon last",onClick:u})))))}),B=(a(74),function(e){var t=e.id,a=e.tooltip,n=e.url,o=e.onPreview,r=e.onDelete,c={style:{backgroundImage:'url("'.concat(n,'")')}};return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,l.a.createElement("span",{className:"image-container",onClick:o},l.a.createElement("span",Object.assign({className:"image"},c)))),l.a.createElement("td",null,a),l.a.createElement("td",null,l.a.createElement(j.a,{to:"edit/".concat(t)},"Edit")),l.a.createElement("td",{className:"text-danger delete-image",onClick:r},"Delete"))}),Y=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteImage=function(e){window.confirm("Do you really want to delete this image?")&&a.props.deleteImage(e)},a}return Object(T.a)(t,e),Object(I.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.pagination,a=this.props.pagination;t.pageNumber===a.pageNumber&&t.pageSize===a.pageSize||this.fetchImages(a)}},{key:"componentDidMount",value:function(){this.fetchImages(this.props.pagination)}},{key:"fetchImages",value:function(e){var t=e.pageNumber,a=e.pageSize;this.props.fetchImages(t,a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.images,n=t.pagination,o=Object(d.a)({},n,{onNext:this.props.moveToNext,onPrev:this.props.moveToPrev,onLast:this.props.moveToLast,onFirst:this.props.moveToFirst,onPageSizeChange:this.props.setPageSize,onPageNumberChange:this.props.moveToPage}),r=a.map(function(t,a){return l.a.createElement(B,Object.assign({key:t.id},t,{onDelete:function(){return e.handleDeleteImage(t.id)},onPreview:function(){return e.props.showPreview(l.a.createElement(W,t))}}))});return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"responsive-image-table"},l.a.createElement("table",{className:"table table-striped image-table"},l.a.createElement("thead",{className:"bg-success image-thead"},l.a.createElement("tr",null,l.a.createElement("th",{className:"th-40"},"#"),l.a.createElement("th",{className:"th-image"},"Image"),l.a.createElement("th",null,"Tooltip"),l.a.createElement("th",{className:"th-40"},"Edit"),l.a.createElement("th",{className:"th-40"},"Delete"))),l.a.createElement("tbody",{className:"image-tbody"},r),l.a.createElement("tfoot",{className:"bg-success image-tfoot"},l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"5"},l.a.createElement(H,o))))))))}}]),t}(r.Component),q=Object(d.a)({},n,{deleteImage:function(e){return function(t){L.deleteImage(e).then(function(){return t({type:"DELETE_IMAGE",payload:e})})}},fetchImages:function(e,t){return function(a){L.getImages(e,t).then(function(e){a({type:"FETCH_IMAGES",payload:e.data}),a({type:"SET_ITEMS_COUNT",payload:parseInt(e.headers["x-total-count"]||0,10)})})}},showPreview:A}),J=Object(m.b)(function(e){return{images:e.images,pagination:e.pagination}},q)(Y),X=a(15),Z=function(e){return function(t){return L.addImage(e).then(function(e){return t({type:"ADD_IMAGE",payload:e.data})})}},Q=function(e){return{type:"EDIT_IMAGE",payload:e}},$=function(e){return function(t){L.getImage(e).then(function(e){return t({type:"FETCH_IMAGE",payload:e.data})})}},K=function(){return{type:"RESET_IMAGE"}},ee=function(e){return function(t){return L.updateImage(e).then(function(e){return t({type:"UPDATE_IMAGE",payload:e.data})})}},te=a(36),ae=a.n(te),ne=(a(75),function(e){return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"tooltip",className:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-form-label"},"Tooltip"),l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10"},l.a.createElement("input",{id:"tooltip",name:"tooltip",type:"text",className:"form-control",placeholder:"Some tooltip",required:!0,value:e.tooltip,onChange:e.onChange})))}),oe=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){var t=e.target.checkValidity();if(e.preventDefault(),t){var n=a.props.image;(void 0!==n.id?a.props.updateImage(n):a.props.addImage(n)).then(function(e){return a.props.history.push("/")}),a.props.resetImage()}},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value,r=t.checked,l="checkbox"===t.type?r:o;a.props.editImage(Object(d.a)({},a.props.image,Object(X.a)({},n,l)))},a.handleFileChange=function(e){if("function"!==typeof window.FileReader)throw new Error("The file API isn't supported on this browser.");var t=e.target.files;if(!t)throw new Error("This browser does not support the `files` property of the file input.");var n=t[0];if(n){var o=new FileReader;o.onload=function(e){a.props.editImage(Object(d.a)({},a.props.image,{url:e.target.result}))},o.readAsDataURL(n)}},a.showPreview=function(e){e.preventDefault(),a.props.showPreview(l.a.createElement(W,a.props.image))},a}return Object(T.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){void 0!==this.props.match.params.id&&this.props.fetchImage(this.props.match.params.id),this.unlisten=this.props.history.listen(this.props.resetImage)}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){var e=this.props.image,t=e.url||ae.a,a={style:{backgroundImage:'url("'.concat(t,'")')}},n=e.showTooltip?l.a.createElement(ne,{tooltip:e.tooltip,onChange:this.handleChange}):null,o=void 0!==e.id?"Update":"Upload";return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-img-top"},l.a.createElement("span",Object.assign({className:"placeholder"},a))),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"image",className:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-form-label"},"Image"),l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10"},l.a.createElement("input",{id:"image",name:"image",type:"file",accept:"image/*",className:"form-control",required:!0,onChange:this.handleFileChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},l.a.createElement("label",{className:"form-check-label",htmlFor:"showTooltip"},"Show tooltip")),l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:"showTooltip",name:"showTooltip",className:"form-check-input",type:"checkbox",checked:e.showTooltip,onChange:this.handleChange})))),n,l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-info float-right",onClick:this.showPreview},"Preview"),l.a.createElement("button",{type:"submit",className:"btn btn-success float-right mr-3"},o))))))))}}]),t}(r.Component),re=Object(d.a)({},o,{showPreview:A}),le=Object(m.b)(function(e){return{image:e.currentImage}},re)(oe),ce=a(37),ie=function(e){return l.a.createElement(ce.a,{path:e.path,exact:e.exact,render:function(t){return l.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ue=[{path:"/",exact:!0,component:J},{path:"/new",component:le},{path:"/edit/:id",component:le}],pe=document.getElementById("root");i.a.render(l.a.createElement(s.a,null,l.a.createElement(m.a,{store:w},l.a.createElement(function(e){return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement("div",{className:"container-fluid app-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},e.children))),l.a.createElement(y,null),l.a.createElement(P,null))},null,ue.map(function(e){return l.a.createElement(ie,Object.assign({key:e.path},e))})))),pe),function(){if("serviceWorker"in navigator){if(new URL("/image-manager",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/image-manager","/service-worker.js");se?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):me(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):me(e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.8c532cb0.chunk.js.map