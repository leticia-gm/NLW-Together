(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(28),c=n.n(s),i=n(14),o=n(6),u=n(5),d=n.n(u),l=n(8),j=n(9),h=n(19),b=n.p+"static/media/illustration.ae7276f0.svg",p=n.p+"static/media/logo.a88331cb.svg",m=n.p+"static/media/google-icon.df15d8e5.svg",f=(n(25),n(31)),O=n(32),x=(n(38),n(1));function v(e){var t=e.isOutlined,n=void 0!==t&&t,a=Object(O.a)(e,["isOutlined"]);return Object(x.jsx)("button",Object(f.a)({className:"button ".concat(n?"outlined":"")},a))}var g=n(18);n(40),n(42);g.a.initializeApp({apiKey:"AIzaSyDvZMmNtL5PjTUZf4mghQ28yNi_X6ezMUA",authDomain:"letmeask-2e9be.firebaseapp.com",databaseURL:"https://letmeask-2e9be-default-rtdb.firebaseio.com",projectId:"letmeask-2e9be",storageBucket:"letmeask-2e9be.appspot.com",messagingSenderId:"996388000402",appId:"1:996388000402:web:a9d058762bbffab97f4c4b"});var k=g.a.auth(),w=g.a.database(),y=Object(a.createContext)({});function C(e){var t=e.children,n=Object(a.useState)(),r=Object(j.a)(n,2),s=r[0],c=r[1];function i(){return(i=Object(l.a)(d.a.mark((function e(){var t,n,a,r,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new g.a.auth.GoogleAuthProvider,e.next=3,k.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(a=n.user,r=a.displayName,s=a.photoURL,i=a.uid,r&&s){e.next=8;break}throw new Error("H\xe1 informa\xe7\xf5es da conta Google faltando.");case 8:c({id:i,name:r,avatar:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=k.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("H\xe1 informa\xe7\xf5es da conta Google faltando.");c({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(x.jsx)(y.Provider,{value:{persona:s,signInWithGoogle:function(){return i.apply(this,arguments)}},children:t})}function A(){return Object(a.useContext)(y)}function N(){var e=Object(o.f)(),t=A(),n=t.persona,r=t.signInWithGoogle,s=Object(a.useState)(""),c=Object(j.a)(s,2),i=c[0],u=c[1];function f(){return(f=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-auth",children:[Object(x.jsxs)("aside",{children:[Object(x.jsx)("img",{src:b,alt:"ilustra\xe7\xe3o"}),Object(x.jsx)("strong",{children:"Crie salas de Q&A ao vivo"}),Object(x.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real"}),Object(x.jsx)("p",{children:"Aprenda e compartilhe conhecimento com outras pessoas"})]}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"main-content",children:[Object(x.jsx)("img",{src:p,alt:"LetMeAsk"}),Object(x.jsxs)("button",{onClick:function(){return f.apply(this,arguments)},className:"create-room",children:[Object(x.jsx)("img",{src:m,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(x.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(x.jsxs)(v,{type:"submit",children:[Object(x.jsx)(h.a,{}),"Entrar na sala"]})]})]})})]})}function q(){var e=A().persona,t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],c=Object(o.f)();function u(){return(u=Object(l.a)(d.a.mark((function t(n){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==r.trim()){t.next=3;break}return t.abrupt("return");case 3:return a=w.ref("rooms"),t.next=6,a.push({title:r,authorId:null===e||void 0===e?void 0:e.id});case 6:s=t.sent,c.push("/rooms/".concat(s.key));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-auth",children:[Object(x.jsxs)("aside",{children:[Object(x.jsx)("img",{src:b,alt:"Let Me Ask"}),Object(x.jsx)("strong",{children:"Crie salas de Q&A ao vivo"}),Object(x.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real"}),Object(x.jsx)("p",{children:"Aprenda e compartilhe conhecimento com outras pessoas"})]}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"main-content",children:[Object(x.jsx)("img",{src:p,alt:"Letmeask"}),Object(x.jsx)("h2",{children:"Crie uma nova sala"}),Object(x.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:r}),Object(x.jsxs)(v,{type:"submit",children:[Object(x.jsx)(h.a,{}),"Criar sala"]})]}),Object(x.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(x.jsx)(i.b,{to:"/",children:"Clique aqui"})]})]})})]})}var H=n(30),S=n.n(H);n(50);function I(e){var t=e.content,n=e.author,a=e.isAnswered,r=void 0!==a&&a,s=e.isHighlighted,c=void 0!==s&&s,i=e.children;return Object(x.jsxs)("div",{className:S()("question",{answered:r},{highlighted:c&&!r}),children:[Object(x.jsx)("p",{children:t}),Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("img",{src:n.avatar,alt:n.name}),Object(x.jsx)("span",{children:n.name})]}),Object(x.jsx)("div",{children:i})]})]})}var L=n.p+"static/media/copy.2f36f99e.svg";n(51);function M(e){return Object(x.jsxs)("button",{className:"room-code",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:L,alt:"Copiar c\xf3digo da sala"})}),Object(x.jsxs)("span",{children:["Sala ",e.code]})]})}function E(e){var t=A().persona,n=Object(a.useState)([]),r=Object(j.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),u=o[0],d=o[1];return Object(a.useEffect)((function(){var n=w.ref("rooms/".concat(e));return n.on("value",(function(e){var n=e.val(),a=n.questions,r=Object.entries(null!==a&&void 0!==a?a:{}).map((function(e){var n,a,r,s=Object(j.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(a=Object.entries(null!==(r=i.likes)&&void 0!==r?r:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===a?void 0:a[0]}}));d(n.title),c(r)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:s,title:u}}n(27);function D(){var e=A().persona,t=Object(o.g)().id,n=Object(a.useState)(""),r=Object(j.a)(n,2),s=r[0],c=r[1],i=E(t),u=i.questions,h=i.title;function b(){return(b=Object(l.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==s.trim()){n.next=3;break}return n.abrupt("return");case 3:if(e){n.next=5;break}throw new Error("Voc\xea deve estar logado.");case 5:return r={content:s,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},n.next=8,w.ref("rooms/".concat(t,"/questions")).push(r);case 8:c("");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(l.a)(d.a.mark((function n(a,r){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=5;break}return n.next=3,w.ref("rooms/".concat(t,"/questions/").concat(a,"/likes/").concat(r)).remove();case 3:n.next=7;break;case 5:return n.next=7,w.ref("rooms/".concat(t,"/questions/").concat(a,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-room",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("img",{src:p,alt:"LetMeAsk"}),Object(x.jsx)(M,{code:t})]})}),Object(x.jsxs)("main",{className:"content",children:[Object(x.jsxs)("div",{className:"room-title",children:[Object(x.jsxs)("h1",{children:["Sala ",h]}),u.length>0&&Object(x.jsxs)("span",{children:[u.length," pergunta(s)"]})]}),Object(x.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(x.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(x.jsxs)("div",{className:"form-footer",children:[e?Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("img",{src:e.avatar,alt:e.name}),Object(x.jsx)("span",{children:e.name})]}):Object(x.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(x.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(x.jsx)(v,{type:"submit",disabled:!e,children:" Enviar pergunta"})]})]}),Object(x.jsx)("div",{className:"question-list",children:u.map((function(e){return Object(x.jsx)(I,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(x.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return m.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(x.jsx)("span",{children:e.likeCount}),Object(x.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var G=n.p+"static/media/delete.22ba6e00.svg",z=n.p+"static/media/check.5dfa6ed6.svg",P=n.p+"static/media/answer.4502a8d5.svg";function T(){var e=Object(o.f)(),t=Object(o.g)().id,n=E(t),a=n.questions,r=n.title;function s(){return(s=Object(l.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Tem certeza que deseja encerrar essa sala?")){n.next=4;break}return n.next=3,w.ref("rooms/".concat(t)).update({ended_at:new Date});case 3:e.push("/");case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(){return(c=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que deseja excluir essa pergunta?")){e.next=3;break}return e.next=3,w.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-room",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("img",{src:p,alt:"Let Me Ask"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(M,{code:t}),Object(x.jsx)(v,{isOutlined:!0,onClick:function(){return s.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(x.jsxs)("main",{className:"content",children:[Object(x.jsxs)("div",{className:"room-title",children:[Object(x.jsxs)("h1",{children:["Sala ",r]}),a.length>0&&Object(x.jsxs)("span",{children:[a.length," pergunta(s)"]})]}),Object(x.jsx)("div",{className:"question-list",children:a.map((function(e){return Object(x.jsxs)(I,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:[!e.isAnswered&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:z,alt:"Marcar pergunta como respondida"})}),Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:P,alt:"Dar destaque \xe0 pergunta"})})]}),Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return c.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:G,alt:"Deletar pergunta"})})]},e.id)}))})]})]})}var U=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(C,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(x.jsx)(o.a,{path:"/rooms/new",component:q}),Object(x.jsx)(o.a,{path:"/rooms/:id",component:D}),Object(x.jsx)(o.a,{path:"/admin/rooms/:id",component:T})]})})})};n(52);c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c8604d5d.chunk.js.map