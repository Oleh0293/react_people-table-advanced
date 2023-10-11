(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(26),n=c(8),s=(c(36),c(37),c(5)),r=c(3),l=c(0),i=c(9),j=c(6),o=c(10),d=c.n(o),b=function(e){return e.Centuries="centuries",e.Query="query",e.Sex="sex",e.Sort="sort",e.Order="order",e}({});function u(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];null===n?c.delete(a):Array.isArray(n)?(c.delete(a),n.forEach((function(e){c.append(a,e)}))):c.set(a,n)})),c.toString()}var h=c(24),O=c(27),p=c(1),x=["children","params"],m=function(e){var t=e.children,c=e.params,a=Object(O.a)(e,x),r=Object(n.d)(),l=Object(s.a)(r,1)[0];return Object(p.jsx)(n.b,Object(h.a)(Object(h.a)({to:{search:u(l,c)}},a),{},{children:t}))},f=function(e){return e.Femail="f",e.Male="m",e}({}),v=function(){var e,t=Object(n.d)(),c=Object(s.a)(t,2),a=c[0],r=c[1],l=a.get(b.Query)||"",o=a.getAll(b.Centuries)||[],h=a.get(b.Sex)||"",O=function(e){return o.includes(e)?o.filter((function(t){return t!==e})):[].concat(Object(i.a)(o),[e])};return Object(p.jsxs)("nav",{className:"panel",children:[Object(p.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(p.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(p.jsx)(m,{className:d()({"is-active":!h}),params:Object(j.a)({},b.Sex,null),children:"All"}),Object(p.jsx)(m,{className:d()({"is-active":!h}),params:Object(j.a)({},b.Sex,f.Male),children:"Male"}),Object(p.jsx)(m,{className:d()({"is-active":!h}),params:Object(j.a)({},b.Sex,f.Femail),children:"Female"})]}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsxs)("p",{className:"control has-icons-left",children:[Object(p.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:l,onChange:function(e){r(u(a,Object(j.a)({},b.Query,e.target.value||null)))}}),Object(p.jsx)("span",{className:"icon is-left",children:Object(p.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(p.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(p.jsx)(m,{"data-cy":"century",className:d()("button","mr-1",{"is-info":o.includes(e)}),params:Object(j.a)({},b.Centuries,O(e)),children:e},e)}))}),Object(p.jsx)("div",{className:"level-right ml-4",children:Object(p.jsx)("a",{"data-cy":"centuryALL",className:"button is-success is-outlined",href:"#/people",children:"All"})})]})}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsx)(m,{className:"button is-link is-outlined is-fullwidth",params:(e={},Object(j.a)(e,b.Centuries,[]),Object(j.a)(e,b.Query,null),Object(j.a)(e,b.Sex,null),e),children:"Reset all filters"})})]})},g=(c(39),function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(p.jsx)("div",{className:"Loader__content"})})}),N=["Name","Sex","Born","Died","Mother","Father"],y=function(e){var t=e.person;return Object(p.jsx)(n.b,{to:"/people/".concat(t.slug),className:d()({"has-text-danger":t.sex===f.Femail}),children:t.name})},S=function(e){var t=e.person,c=e.personSlug,a=t.slug,n=t.sex,s=t.born,r=t.died,l=t.motherName,i=t.fatherName,j=t.mother,o=t.father;return Object(p.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":c===a}),children:[Object(p.jsx)("td",{children:Object(p.jsx)(y,{person:t})}),Object(p.jsx)("td",{children:n}),Object(p.jsx)("td",{children:s}),Object(p.jsx)("td",{children:r}),Object(p.jsx)("td",{children:j?Object(p.jsx)(y,{person:j}):l||"-"}),Object(p.jsx)("td",{children:o?Object(p.jsx)(y,{person:o}):i||"-"})]})},w=function(e){var t=e.sortBy,c=Object(n.d)(),a=Object(s.a)(c,1)[0],r="desc"===a.get("order"),l=a.get("sort")||"",i=t===l&&!r,j=t===l&&r,o=l!==t,b={order:i?"desc":null,sort:j?null:t};return Object(p.jsx)(m,{params:b,children:Object(p.jsx)("span",{className:"icon",children:Object(p.jsx)("i",{className:d()("fas",{"fa-sort":o,"fa-sort-up":i,"fa-sort-down":j})})})})},k=function(e){var t=e.people,c=Object(r.r)().personSlug;return Object(p.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:N.map((function(e){return Object(p.jsxs)("th",{children:[e,Object(p.jsx)(w,{sortBy:e})]},e)}))})}),Object(p.jsx)("tbody",{children:t.map((function(e){return Object(p.jsx)(S,{person:e,personSlug:c},e.slug)}))})]})},F=c(4),P=c(7),C="https://mate-academy.github.io/react_people-table/api/people.json";function L(e){return new Promise((function(t){return setTimeout(t,e)}))}function A(){return E.apply(this,arguments)}function E(){return(E=Object(P.a)(Object(F.a)().mark((function e(){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(500).then((function(){return fetch(C)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,t,c,a,n,s){var r=Object(i.a)(e);if(t&&(r=r.filter((function(e){return e.sex===t}))),a.length){r=r.filter((function(e){return a.includes(function(e){return Math.ceil(e.born/100)}(e).toString())}))}if(c){var l=c.toLocaleLowerCase();r=r.filter((function(e){return[e.name,e.motherName||"",e.fatherName||""].join(" ").toLocaleLowerCase().includes(l)}))}return n&&(r.sort((function(e,t){switch(n){case"name":case"sex":return e[n].localeCompare(t[n]);case"born":case"died":return e[n]-t[n];default:return 0}})),"desc"===s&&r.reverse()),r},Q=function(e){var t=e.setPeople,c=e.people,a=Object(l.useState)(!1),r=Object(s.a)(a,2),i=r[0],j=r[1],o=Object(l.useState)(!1),d=Object(s.a)(o,2),u=d[0],h=d[1],O=Object(n.d)(),x=Object(s.a)(O,1)[0],m=x.get(b.Sex),f=x.get(b.Query),N=x.getAll(b.Centuries),y=x.get(b.Sort),S=x.get(b.Order),w=M(c,m,f,N,y,S);return Object(l.useEffect)((function(){return h(!1),j(!0),A().then((function(e){t(e)})).catch((function(){h(!0)})).finally((function(){j(!1)})),function(){return t([])}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"title",children:"People Page"}),Object(p.jsx)("div",{className:"block",children:Object(p.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(p.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(p.jsx)(v,{people:c})}),Object(p.jsx)("div",{className:"block",children:Object(p.jsxs)("div",{className:"box table-container",children:[i&&!u&&!c.length&&Object(p.jsx)(g,{}),!i&&u&&!c.length&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!i&&!u&&!c.length&&Object(p.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!i&&!u&&c.length&&Object(p.jsx)(k,{people:w})]})})]})})]})},_=function(){var e=function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})};return Object(p.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"navbar-brand",children:[Object(p.jsx)(n.c,{className:e,to:"/",children:"Home"}),Object(p.jsx)(n.c,{className:e,to:"/people",children:"People"})]})})})},B=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"navbar-brand",children:Object(p.jsx)(_,{})})})}),Object(p.jsx)(r.b,{})]})},R=(c(40),function(){var e=Object(l.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(l.useEffect)((function(){A().then(a)}),[]),Object(p.jsxs)("div",{"data-cy":"app",children:[Object(p.jsx)(B,{}),Object(p.jsx)("div",{className:"section",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(r.e,{children:[Object(p.jsx)(r.c,{index:!0,element:Object(p.jsx)("h1",{className:"title",children:"Home Page"})}),Object(p.jsx)(r.c,{path:"*",element:Object(p.jsx)("h1",{className:"title",children:"Page not found"})}),Object(p.jsx)(r.c,{path:"people",element:Object(p.jsx)(Q,{people:c,setPeople:a}),children:Object(p.jsx)(r.c,{path:":personSlug",element:Object(p.jsx)(Q,{people:c,setPeople:a})})}),Object(p.jsx)(r.c,{path:"home",element:Object(p.jsx)(r.a,{to:"/",replace:!0})})]})})})]})});Object(a.createRoot)(document.getElementById("root")).render(Object(p.jsx)(n.a,{children:Object(p.jsx)(R,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.f504f542.chunk.js.map