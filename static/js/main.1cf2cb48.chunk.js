(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),s=n.n(c),i=(n(11),n(2)),o=n(4),u=n.n(o),j=n(6),b=n(0),p=function(e){var t=e.destination,n=Object(r.useState)({CAN:"",US:"",MEX:"",BLZ:"",GTM:"",SLV:"",HND:"",NIC:"",CRI:"",PAN:""}),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)([""]),p=Object(i.a)(o,2),f=p[0],l=p[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(r.useEffect)((function(){if(t){for(var e=t,n=[],r=c,a=!0;a;)for(var s in"US"===e&&(a=!1),r)if(s===e){n.push(e),e=r[s];break}l(n.reverse())}}),[t,c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h1",{className:"panel-header",children:["Route from US to ",t||"..."]}),Object(b.jsx)("ul",{className:"panel-content",children:f[0]&&f.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})]})},f=["CAN","US","MEX","BLZ","GTM","SLV","HND","NIC","CRI","PAN"],l=function(e){var t=e.setDestination,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),j=u[0],p=u[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),f.includes(c)?(p(!1),t(c),s("")):(p(!0),s(""))},children:Object(b.jsxs)("label",{htmlFor:"destination",children:["Enter a destination:",Object(b.jsx)("input",{type:"text",id:"destination",value:c,onChange:function(e){return s(e.target.value.toUpperCase())}}),j&&Object(b.jsxs)("p",{className:"form-error",children:["Wprowad\u017a poprawn\u0105 opcj\u0119! Dost\u0119pne opcje: ",f.join(", ")]}),Object(b.jsx)("button",{className:"form-button",type:"submit",children:"Get route"})]})})};n(14);var d=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(l,{setDestination:a}),Object(b.jsx)(p,{destination:n})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1cf2cb48.chunk.js.map