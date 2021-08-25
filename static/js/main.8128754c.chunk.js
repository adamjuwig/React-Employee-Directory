(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r(18),a=r.n(c),n=r(23),o=(r(30),r(31),r(32),r(1));var i=function(){return Object(o.jsx)("div",{className:"jumbotron jumbotron-fluid image",children:Object(o.jsx)("h1",{className:"display-4 text-center textShadow font-weight-bold",children:"Employee Directory"})})},l=r(19),h=r(20),j=r(25),d=r(24);var u=function(e){var t=e.employees;return Object(o.jsxs)("table",{className:"table bg-gradient-light table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col"}),Object(o.jsx)("th",{scope:"col",children:"First"}),Object(o.jsx)("th",{scope:"col",children:"Last"}),Object(o.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.picture.medium,alt:""})}),Object(o.jsx)("td",{className:"p-5",children:e.name.first}),Object(o.jsx)("td",{className:"p-5",children:e.name.last}),Object(o.jsx)("td",{className:"p-5",children:e.cell})]},t)}))})]})},b=r(21),m=r.n(b),p=function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")},y=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],searchArray:[],search:"",sorted:!1},e.sortByName=function(){var t,r=e.state,s=r.employees,c=r.sorted,a=r.searchArray;!a===[]&&(t=a),t=c?s.reverse():s.sort((function(e,t){return e.name.first>t.name.first?1:-1})),e.setState({searchArray:t,sorted:!c})},e.handleSearch=function(t){var r=t.target.value.toLowerCase();e.setState({search:r},e.searchBar)},e.searchBar=function(){var t=e.state.employees,r=[];r===[]&&(r=t);for(var s=0;s<t.length;s++)t[s].name.last.toLowerCase().startsWith(e.state.search)&&r.push(t[s]);e.setState({searchArray:r})},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results,searchArray:t.data.results})}))}},{key:"render",value:function(){var e=this.state.searchArray;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"input-group mb-3 row justify-content-center",children:[Object(o.jsx)("div",{className:"col-sm-4 ",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Employee by Last Name","aria-label":"Search Employee","aria-describedby":"basic-addon1",onChange:this.handleSearch})}),Object(o.jsx)("button",{className:"btn btn-dark",onClick:this.sortByName,children:"Sort"})]}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(u,{employees:e})})})]})}}]),r}(s.Component);r(52);var O=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(y,{})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,59)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;r(e),s(e),c(e),a(e),n(e)}))};a.a.render(Object(o.jsx)(n.a,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()}},[[58,1,2]]]);
//# sourceMappingURL=main.8128754c.chunk.js.map