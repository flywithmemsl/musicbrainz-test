(this["webpackJsonpmusicbrainz-test"]=this["webpackJsonpmusicbrainz-test"]||[]).push([[0],{29:function(e,n,t){e.exports=t(52)},34:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(23),c=t.n(i),o=(t(34),t(4)),u=t(1),l=t(2),f=t(5),s=t.n(f);function d(){var e=Object(u.a)(["\n position: absolute;\n top: 5px;\n right: 7px;\n filter: grayscale(",");\n cursor: pointer;\n outline: none;\n   \n"]);return d=function(){return e},e}function v(){var e=Object(u.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return e},e}function m(){var e=Object(u.a)(["\n  width: 200px;\n  min-height: 200px;\n"]);return m=function(){return e},e}function p(){var e=Object(u.a)(["\n  background: linear-gradient(180deg, rgba(219, 0, 255, 0.18) 0%, rgba(0, 255, 56, 0.18) 100%);\n  width: 200px;\n  min-height: 200px;\n  position: relative;\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 600px;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  padding: 10px;\n  display: flex;\n"]);return b=function(){return e},e}var g=l.a.div(b()),h=l.a.div(p()),x=l.a.img(m()),E=l.a.div(v()),j=l.a.span(d(),(function(e){return e.fav?"0":"1"})),O=function(e){var n=e.release,t=e.toggleFav,i=e.isFav,c=Object(a.useState)(null),u=Object(o.a)(c,2),l=u[0],f=u[1];return Object(a.useEffect)((function(){var e;(e=n.id,s.a.get("https://coverartarchive.org/release/"+e)).then((function(e){f(e.data)})).catch((function(e){return console.log(e)}))}),[n.id]),r.a.createElement(g,null,r.a.createElement(h,null,r.a.createElement(j,{role:"img","aria-label":"isFavorite",fav:i,onClick:function(e){e.preventDefault(),t(!i)}},"\u2b50"),l&&r.a.createElement(x,{src:l.images[0].thumbnails.small})),r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement("div",null,r.a.createElement("b",null,"Title: "),n.title),r.a.createElement("div",null,r.a.createElement("b",null,"ID: "),n.id),r.a.createElement("div",null,r.a.createElement("b",null,"Country: "),n.count))))};function y(){var e=Object(u.a)(["\n  width: 300px;\n  height: 30px;\n  font-size: 16px;\n"]);return y=function(){return e},e}function w(){var e=Object(u.a)(["\n  padding: 10px;\n  display: flex;\n"]);return w=function(){return e},e}var k=l.a.form(w()),F=l.a.input(y());var S=function(e){var n=e.favorites,t=e.onRemove,i=e.onAdd,c=Object(a.useState)(""),u=Object(o.a)(c,2),l=u[0],f=u[1],d=Object(a.useState)(""),v=Object(o.a)(d,2),m=v[0],p=v[1],b=Object(a.useCallback)((function(){(function(e){var n="release:".concat(e);return s.a.get("http://musicbrainz.org/ws/2/release/?query="+encodeURIComponent(n)+"&fmt=json")})(m).then((function(e){f(e.data)}))}),[m]);return r.a.createElement("div",{style:{flex:1}},r.a.createElement(k,{onSubmit:function(e){e.preventDefault(),b()}},r.a.createElement(F,{type:"text",placeholder:"Type album name to search",value:m,onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{onClick:b,style:{marginLeft:"10px"}},"Search")),r.a.createElement("div",null,l&&l.releases.filter((function(e){return e.score>95})).map((function(e){var a=n.includes(e.id);return r.a.createElement(O,{isFav:a,key:e.id,release:e,toggleFav:function(n){n?i(e.id):t(e.id)}})}))))};function C(){var e=Object(u.a)(["\n position: absolute;\n top: 5px;\n right: 7px;\n filter: grayscale(",");\n cursor: pointer;\n outline: none;\n   \n"]);return C=function(){return e},e}function R(){var e=Object(u.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n"]);return R=function(){return e},e}function z(){var e=Object(u.a)(["\n  width: 200px;\n  min-height: 200px;\n"]);return z=function(){return e},e}function A(){var e=Object(u.a)(["\n  background: linear-gradient(180deg, rgba(219, 0, 255, 0.18) 0%, rgba(0, 255, 56, 0.18) 100%);\n  width: 200px;\n  min-height: 200px;\n  position: relative;\n"]);return A=function(){return e},e}function D(){var e=Object(u.a)(["\n  width: 600px;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  padding: 10px;\n  display: flex;\n"]);return D=function(){return e},e}var I=l.a.div(D()),B=l.a.div(A()),J=l.a.img(z()),L=l.a.div(R()),T=l.a.span(C(),(function(e){return e.fav?"0.1":"1"})),W=function(e){var n=e.toggleFav,t=e.id,i=Object(a.useState)(null),c=Object(o.a)(i,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){(function(e){return s.a.get("https://coverartarchive.org/release/"+e)})(t).then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[t]),r.a.createElement(I,null,r.a.createElement(B,null,r.a.createElement(T,{role:"img","aria-label":"isFavorite",fav:!0,onClick:function(e){e.preventDefault(),n(!1)}},"\u2b50"),u&&r.a.createElement(J,{src:u.images[0].thumbnails.small})),r.a.createElement("div",null,r.a.createElement(L,null)))},q=function(e){var n=e.favorites,t=e.onRemove;return r.a.createElement("div",{style:{flex:1}},r.a.createElement("h1",null," Library "),r.a.createElement("div",null,n&&n.map((function(e){return r.a.createElement(W,{isFav:!0,key:e,id:e,toggleFav:function(){return t(e)}})}))))},M=t(10),U=t(27),$=Object(U.a)("favourites",window.localStorage);function G(){var e=Object(u.a)(["\n  display: flex;\n\n"]);return G=function(){return e},e}var H=l.a.div(G());var K=function(){var e=function(){var e=$([]),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){Array.isArray(t)||r()}),[t,r]),[t,{add:function(e){return!t.find((function(n){return n===e}))&&(r([e].concat(Object(M.a)(t))),!0)},remove:function(e){var n=t.findIndex((function(n){return n===e}));return n>-1&&(t.splice(n,1),r(Object(M.a)(t)),!0)}}]}(),n=Object(o.a)(e,2),t=n[0],i=n[1],c=i.add,u=i.remove;return r.a.createElement(H,null,r.a.createElement(S,{favorites:t,onRemove:u,onAdd:c}),r.a.createElement(q,{favorites:t,onRemove:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.20bd3bcd.chunk.js.map