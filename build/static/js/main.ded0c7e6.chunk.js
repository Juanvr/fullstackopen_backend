(this.webpackJsonpphonebook_app=this.webpackJsonpphonebook_app||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),l=(n(20),n(14)),u=n(2),i=function(e){var t=e.contact,n=e.deleteContact;return c.a.createElement("tr",null,c.a.createElement("td",null," ",t.name," "),c.a.createElement("td",null," ",t.phone," "),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return n(t)}},"Delete contact")))},m=function(e){var t=e.contacts,n=e.deleteContact;return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Phone"),c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement(i,{key:e.name,contact:e,deleteContact:n})}))))},s=function(e){var t=e.searchFunction;return c.a.createElement("div",null,"Search: ",c.a.createElement("input",{onChange:t}))},d=function(e){var t=e.onSubmitFunction,n=e.onChangeNameFunction,a=e.onChangePhoneFunction;return c.a.createElement("form",{onSubmit:t},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Name:"),c.a.createElement("td",null,c.a.createElement("input",{onChange:n}))),c.a.createElement("tr",null,c.a.createElement("td",null,"Phone:"),c.a.createElement("td",null,c.a.createElement("input",{onChange:a}))))),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},f=n(3),h=n.n(f),E="/api/contacts",b=function(){return h.a.get(E)},p=function(e){return h.a.post(E,e)},g=function(e){return h.a.delete("".concat(E,"/").concat(e))},v=function(e,t){return h.a.put("".concat(E,"/").concat(e),t)},C=function(e){var t=e.notification,n={color:"red",background:"#ffef96",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return t.error||(n.color="#50394c"),null===t.message?null:c.a.createElement("div",{style:n},t.message)},O=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),f=i[0],h=i[1],E=Object(a.useState)(""),O=Object(u.a)(E,2),j=O[0],S=O[1],y=Object(a.useState)(""),w=Object(u.a)(y,2),k=w[0],F=w[1],N=Object(a.useState)(n),P=Object(u.a)(N,2),D=P[0],x=P[1],B=Object(a.useState)({message:null,error:!1}),J=Object(u.a)(B,2),L=J[0],_=J[1];Object(a.useEffect)((function(){console.log("effect"),b().then((function(e){o(e.data),x(e.data),console.log(e.data)}))}),[]);var z=function(e,t){return e.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))},I=function(e,t){_({message:e,error:t}),setTimeout((function(){_({message:null,error:!1})}),5e3)};return c.a.createElement("div",null,c.a.createElement(C,{notification:L}),c.a.createElement("h1",null,"Phonebook"),c.a.createElement(s,{searchFunction:function(e){var t=e.target.value;F(t),x(z(n,t))}}),c.a.createElement("h3",null,"New Contact"),c.a.createElement(d,{onSubmitFunction:function(e){e.preventDefault();var t=n.filter((function(e){return e.name===f}))[0];t?window.confirm("Change contact ".concat(f,"?"))&&v(t.id,Object(l.a)({},t,{phone:j})).then((function(e){console.log("front-response:",e);var t=n.map((function(t){return t.id!==e.data.id?t:e.data}));return o(t),x(z(t,k)),e})).then((function(e){var t="".concat(e.data.name," modified in contact list");return I(t,!1),e})).catch((function(e){console.error(e.response.data.message),I(e.response.data.message,!0)})):p({name:f,phone:j}).then((function(e){var t=n.concat(e.data);return o(t),x(z(t,k)),e})).then((function(e){var t="".concat(e.data.name," added to contact list");return I(t,!1),e})).catch((function(e){console.error(e.response.data.message),I(e.response.data.message,!0)}))},onChangeNameFunction:function(e){return h(e.target.value)},onChangePhoneFunction:function(e){return S(e.target.value)}}),c.a.createElement("h3",null,"Contacts"),c.a.createElement(m,{contacts:D,deleteContact:function(e){window.confirm("Delete ".concat(e.name,"?"))&&(console.log(e),g(e.id).then((function(t){if(200===t.status)b().then((function(t){o(t.data),x(z(t.data,k));var n="".concat(e.name," deleted from contact list");I(n,!1)}));else{var n="Could not delete ".concat(e.name," from contact list, it may have already been deleted.");I(n,!0)}})).catch((function(t){var n="Could not delete ".concat(e.name," from contact list, it may have already been deleted. ").concat(t.message," ");I(n,!0)})))}}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ded0c7e6.chunk.js.map