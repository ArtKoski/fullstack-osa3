(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),s=t.n(c),r=t(6),a=t(3),o=t(2),u=t(4),i=t.n(u),l="/api/persons",d=function(){return i.a.get(l)},j=function(e){return i.a.post(l,e)},b=function(e,n){return i.a.put("".concat(l,"/").concat(e),n)},m=function(e){return i.a.delete("".concat(l,"/").concat(e))},f=(t(38),t(0)),h=function(e){var n=e.message,t=e.classType;return null===n?null:Object(f.jsx)("div",{className:t,children:n})},O=function(e){var n=e.person;return n.name+" "+n.number},p=function(e){var n=e.filter,t=e.handleFilterChange;return Object(f.jsx)("div",{children:Object(f.jsx)("form",{children:Object(f.jsxs)("p",{children:[" filter shown with",Object(f.jsx)("input",{value:n,onChange:t})]})})})},v=function(e){var n=e.handleClick,t=e.text;return Object(f.jsx)("button",{onClick:n,children:t})},x=function(e){var n=e.persons,t=e.filter,c=e.setPersons,s=e.setErrorMessage,r=e.setSuccessMessage;return Object(f.jsx)("ul",{children:void 0===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsx)(O,{person:e}),Object(f.jsx)(v,{text:"delete",handleClick:function(){return function(e){var n=e.person,t=e.setPersons,c=e.persons,s=e.setErrorMessage,r=e.setSuccessMessage;if(window.confirm("Do you really want to delete ".concat(n.name,"?")))return m(n.id).then((function(e){t(c.filter((function(e){return e.id!==n.id}))),r("Person ".concat(n.name," removed succesfully")),setTimeout((function(){r(null)}),3e3)})).catch((function(e){s("Note '".concat(n.name,"' was already removed from server")),setTimeout((function(){s(null)}),5e3)}))}({person:e,setPersons:c,persons:n,setErrorMessage:s,setSuccessMessage:r})}})]},e.name)}))})},g=function(e){var n=e.onSubmit,t=e.handleNameChange,c=e.handleNumberChange,s=e.name,r=e.number;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:s,onChange:t})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:r,onChange:c})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},w=function(){var e=Object(o.useState)([{name:"Arto Hellas",number:"045135133"}]),n=Object(a.a)(e,2),t=n[0],c=n[1],s=Object(o.useState)(""),u=Object(a.a)(s,2),i=u[0],l=u[1],m=Object(o.useState)(""),O=Object(a.a)(m,2),v=O[0],w=O[1],C=Object(o.useState)(""),S=Object(a.a)(C,2),y=S[0],P=S[1],T=Object(o.useState)(null),M=Object(a.a)(T,2),N=M[0],k=M[1],E=Object(o.useState)(null),D=Object(a.a)(E,2),F=D[0],J=D[1];Object(o.useEffect)((function(){d().then((function(e){c(e.data)}))}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)(h,{message:N,classType:"error"}),Object(f.jsx)(h,{message:F,classType:"success"}),Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(p,{filter:y,handleFilterChange:function(e){P(e.target.value)}}),Object(f.jsx)("h2",{children:"add a new "}),Object(f.jsx)(g,{onSubmit:function(e){e.preventDefault();var n={name:i,number:v};if(t.map((function(e){return e.name})).includes(i)){if(window.confirm("".concat(i," is already added to the phonebook. Replace the old number with new one?"))){var s=t.find((function(e){return e.name===i})),a=Object(r.a)(Object(r.a)({},s),{},{number:n.number});b(s.id,a).then((function(e){c(t.map((function(n){return n.name!==i?n:e.data}))),l(""),w(""),J("Person ".concat(n.name," updated!")),setTimeout((function(){J(null)}),3e3)})).catch((function(e){k("Person '".concat(n.name,"' has already been removed from server")),setTimeout((function(){k(null)}),3e3)}))}}else j(n).then((function(e){console.log(e.data),c(t.concat(e.data)),l(""),w(""),J("Person ".concat(n.name," added!")),setTimeout((function(){J(null)}),3e3)})).catch((function(e){k("Name or password missing"),setTimeout((function(){k(null)}),3e3)}))},handleNameChange:function(e){l(e.target.value)},handleNumberChange:function(e){w(e.target.value)},name:i,number:v}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(x,{persons:t,filter:y,setPersons:c,setErrorMessage:k,setSuccessMessage:J})]})};s.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5a6c075b.chunk.js.map