(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{30:function(e,t,r){},31:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r(18),a=r.n(c),n=r(23),i=(r(30),r(31),r(1));var o=function(){return Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid bg-success bg-gradient",children:Object(i.jsx)("h1",{className:"display-4 text-center bg-success bg-gradient text-white",children:"Employee Directory"})})},l=r(19),h=r(20),j=r(25),d=r(24);var u=function(e){var t=e.employees;return Object(i.jsxs)("table",{className:"table table-success table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col"}),Object(i.jsx)("th",{scope:"col",children:"First"}),Object(i.jsx)("th",{scope:"col",children:"Last"}),Object(i.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:e.picture.medium,alt:""})}),Object(i.jsx)("td",{children:e.name.first}),Object(i.jsx)("td",{children:e.name.last}),Object(i.jsx)("td",{children:e.cell})]},t)}))})]})},b=r(21),m=r.n(b),p=function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")},O=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],searchArray:[],search:"",sorted:!1},e.sortByName=function(){var t,r=e.state,s=r.employees,c=r.sorted,a=r.searchArray;!a===[]&&(t=a),t=c?s.reverse():s.sort((function(e,t){return e.name.first>t.name.first?1:-1})),e.setState({searchArray:t,sorted:!c})},e.handleSearch=function(t){var r=t.target.value.toLowerCase();e.setState({search:r},e.searchBar)},e.searchBar=function(){var t=e.state.employees,r=[];r===[]&&(r=t);for(var s=0;s<t.length;s++)t[s].name.last.toLowerCase().startsWith(e.state.search)&&r.push(t[s]);e.setState({searchArray:r})},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results,searchArray:t.data.results})}))}},{key:"render",value:function(){var e=this.state.searchArray;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"input-group mb-3 row justify-content-center",children:[Object(i.jsx)("div",{className:"col-sm-4 ",children:Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Employee","aria-label":"Search Employee","aria-describedby":"basic-addon1",onChange:this.handleSearch})}),Object(i.jsx)("button",{className:"btn btn-light",onClick:this.sortByName,children:"Sort"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(u,{employees:e})})})]})}}]),r}(s.Component);r(51);var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;r(e),s(e),c(e),a(e),n(e)}))};a.a.render(Object(i.jsx)(n.a,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),y()}},[[57,1,2]]]);
//# sourceMappingURL=main.97d844f0.chunk.js.map