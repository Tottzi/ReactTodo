(this.webpackJsonptodoreact=this.webpackJsonptodoreact||[]).push([[0],{17:function(t,e,o){},18:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var c=o(2),n=o.n(c),a=o(8),s=o.n(a),i=o(4),d=(o(17),o(9)),r=(o(18),o(1)),l=function(t){var e=t.dispatchTodo,o=Object(c.useState)(""),n=Object(i.a)(o,2),a=n[0],s=n[1],l=Object(c.useState)(""),_=Object(i.a)(l,2),j=_[0],u=_[1];return Object(r.jsx)("section",{className:"form_add__container",children:Object(r.jsxs)("form",{className:"form_add",onSubmit:function(t){if(t.preventDefault(),a&&j){var o=Math.random().toString(16).substr(2,10);e({type:"ADD_TODO",todo:{id:o,title:a,desc:j,isActive:!0}}),s(""),u("")}},children:[Object(r.jsxs)("article",{className:"form_add__input",children:[Object(r.jsx)("label",{htmlFor:"title",className:"form_add__label",children:"Title:"}),Object(r.jsx)("input",{type:"text",id:"title",onChange:function(t){return s(t.target.value)},value:a,className:"form_add__input__title",placeholder:"Type max 15 char.....",maxLength:"15",required:!0}),Object(r.jsx)("label",{htmlFor:"desc",className:"form_add__label",children:"Description:"}),Object(r.jsx)("input",{type:"text",id:"desc",onChange:function(t){return u(t.target.value)},value:j,className:"form_add__input__desc",placeholder:"Type max 45 char.....",maxLength:"45",required:!0})]}),Object(r.jsxs)("button",{className:"form_add__btn",children:[Object(r.jsx)(d.a,{className:"form_add__btn__icon"}),"Add"]})]})})},_=o(10),j=function(t){var e=t.todo,o=t.dispatchTodo,c=e.isActive?"todo__btn":"todo__btn todo__btn--done",n=e.isActive?"todo__btn__icon":"todo__btn__icon todo__btn__icon--done",a=e.isActive?"todo__article__text__title":"todo__article__text__title todo__article__text--done",s=e.isActive?"todo__article__text":"todo__article__text todo__article__text--done",i=e.isActive?"todo__article":"todo__article todo__article--done",d=e.isActive?"todo":"todo todo--done",l=function(){o({type:"CHANGE_STATUS",todo:e})};return Object(r.jsxs)("section",{className:d,children:[Object(r.jsxs)("article",{className:i,onClick:l,children:[Object(r.jsx)("h3",{className:a,children:e.title}),Object(r.jsx)("p",{className:s,children:e.desc})]}),Object(r.jsx)("button",{className:c,onClick:function(t){return/done/.test(t.target.className)?o({type:"DEL_TODO",todo:e}):l()},children:Object(r.jsx)(_.a,{className:n,onClick:function(){return o({type:"DEL_TODO",todo:e})}})})]})},u=function(t){var e=t.todos,o=t.dispatchTodo;return Object(r.jsx)("div",{className:"todos",children:e.length>0?e.map((function(t){return Object(r.jsx)(j,{todo:t,dispatchTodo:o},t.id)})):Object(r.jsx)("h3",{style:{textAlign:"center"},children:"There is no ToDo for today"})})},b=o(11),O=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("a",{className:"footer__link",href:"https://github.com/Tottzi",target:"_blank",children:Object(r.jsx)(b.a,{className:"footer__icon"})})})},h=function(t){var e=t.todos,o=t.dispatchTodo;return Object(r.jsxs)("div",{className:"todoBoard",children:[Object(r.jsx)(l,{dispatchTodo:o}),Object(r.jsx)(u,{todos:e,dispatchTodo:o}),Object(r.jsx)(O,{})]})},m=o(12),f=o(7),x=function(t,e){switch(e.type){case"CHANGE_STATUS":return t.map((function(t){return t.id===e.todo.id?Object(f.a)(Object(f.a)({},t),{},{isActive:!t.isActive}):t}));case"DEL_TODO":return t.filter((function(t){return t.id!==e.todo.id}));case"ADD_TODO":return[].concat(Object(m.a)(t),[e.todo]);default:return t}},p=localStorage.getItem("saltTodo")?JSON.parse(localStorage.getItem("saltTodo")):[];var T=function(){var t=Object(c.useReducer)(x,p),e=Object(i.a)(t,2),o=e[0],n=e[1];return Object(c.useEffect)((function(){localStorage.setItem("saltTodo",JSON.stringify(o))}),[o]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(h,{todos:o,dispatchTodo:n})})},v=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;o(t),c(t),n(t),a(t),s(t)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),v()}},[[20,1,2]]]);
//# sourceMappingURL=main.de029838.chunk.js.map