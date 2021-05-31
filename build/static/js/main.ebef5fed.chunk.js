(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3FFxi",control:"Checkout_control__2pO3t",actions:"Checkout_actions__3DbR3",submit:"Checkout_submit__2qY-y",invalid:"Checkout_invalid__2Wclg"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__143cj",total:"Cart_total__3jW8r",actions:"Cart_actions__3tnBn","button--alt":"Cart_button--alt__1iR5x",button:"Cart_button__1n8V2"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__15Poa",summary:"CartItem_summary__21VpK",price:"CartItem_price__498DG",amount:"CartItem_amount__3dcSl",actions:"CartItem_actions__2B-AA"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__pItil",icon:"HeaderCartButton_icon__3wlGI",badge:"HeaderCartButton_badge__1-q8q",bump:"HeaderCartButton_bump__2-j81"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1jiSp",modal:"Modal_modal__2c-QE","slide-down":"Modal_slide-down__11Kap"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1wZzm","meals-appear":"AvailableMeals_meals-appear__wr6i2",MealsLoading:"AvailableMeals_MealsLoading__30zDe",MealsError:"AvailableMeals_MealsError__16deH"}},function(e,t,n){e.exports={meal:"MealItem_meal__atcu9",description:"MealItem_description__2t4GS",price:"MealItem_price__DsAJ8"}},,function(e,t,n){e.exports={header:"Header_header__A9M2L","main-image":"Header_main-image__JtTLc"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__2-iyC"}},,function(e,t,n){e.exports={card:"Card_card__3jAxg"}},function(e,t,n){e.exports={input:"Input_input__YzLw1"}},function(e,t,n){e.exports={form:"MealItemForm_form__2drYZ"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),l=n(11),u=n.n(l),d=n(0),j=function(e){return Object(d.jsx)("div",{className:u.a.backdrop,onClick:e.onClose})},m=function(e){return Object(d.jsx)("div",{className:u.a.modal,children:Object(d.jsx)("div",{className:u.a.content,children:e.children})})},b=document.getElementById("overlays"),O=function(e){return Object(d.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(d.jsx)(j,{onClose:e.onClose}),b),a.a.createPortal(Object(d.jsx)(m,{children:e.children}),b)]})},x=n(4),h=n.n(x),p=n(6),f=n.n(p),_=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:f.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:f.a.summary,children:[Object(d.jsx)("span",{className:f.a.price,children:t}),Object(d.jsxs)("span",{className:f.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:f.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=n(3),C=n.n(v),y=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),j=function(e){return""===e.trim()},m="".concat(C.a.control," ").concat(c.name?"":C.a.invalid);return Object(d.jsxs)("form",{className:C.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=l.current.value,i=u.current.value,d=!j(n),m=!j(c),b=!(5!==r.trim().length),O=!j(i);a({name:d,street:m,city:O,postalCode:b}),d&&m&&b&&O&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(d.jsx)("p",{children:"Please enter a valid name"})]}),Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(d.jsx)("p",{children:"Please enter a valid street"})]}),Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(d.jsx)("p",{children:"Please enter a valid postal code"})]}),Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",ref:u}),!c.city&&Object(d.jsx)("p",{children:"Please enter a valid city"})]}),Object(d.jsxs)("div",{className:C.a.actions,children:[Object(d.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:C.a.submit,children:"Confirm"})]})]})},N=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useState)(!1),l=Object(r.a)(s,2),u=l[0],j=l[1],m=Object(i.useState)(!1),b=Object(r.a)(m,2),x=b[0],p=b[1],f=Object(i.useContext)(o),v="$".concat(f.totalAmount.toFixed(2)),C=f.items.length>0,N=function(e){f.removeItem(e)},g=function(e){f.addItem(e)},A=Object(d.jsx)("ul",{className:h.a["cart-items"],children:f.items.map((function(e){return Object(d.jsx)(_,{name:e.name,amount:e.amount,price:e.price,onRemove:N.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),M=Object(d.jsxs)("div",{className:h.a.actions,children:[Object(d.jsx)("button",{className:h.a["button--alt"],onClick:e.onClose,children:"Close"}),C&&Object(d.jsx)("button",{className:h.a.button,onClick:function(){a(!0)},children:"Order"})]}),k=Object(d.jsxs)(i.Fragment,{children:[A,Object(d.jsxs)("div",{className:h.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:v})]}),c&&Object(d.jsx)(y,{onCancel:e.onClose,onConfirm:function(e){j(!0),fetch("https://food-order-app-36252-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:e,orderedItems:f.items})}).then((function(e){return e.json()})).then((function(e){j(!1),p(!0),f.clearCart()}))}}),!c&&M]}),I=Object(d.jsx)("p",{children:"Sending order data..."}),S=Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)("p",{children:"Successfully submitted your order!"}),Object(d.jsx)("div",{className:h.a.actions,children:Object(d.jsx)("button",{className:h.a.button,onClick:e.onClose,children:"Close"})})]});return Object(d.jsxs)(O,{onClose:e.onClose,children:[!u&&!x&&k,u&&I,!u&&x&&S]})},g=n.p+"static/media/meals.2971f633.jpg",A=n(15),M=n.n(A),k=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},I=n(9),S=n.n(I),w=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(o),l=s.items.reduce((function(e,t){return e+t.amount}),0),u=s.items,j="".concat(S.a.button," ").concat(c?S.a.bump:"");return Object(i.useEffect)((function(){if(0!==u.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[u]),Object(d.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(d.jsx)("span",{className:S.a.icon,children:Object(d.jsx)(k,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:S.a.badge,children:l})]})},F=function(e){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("header",{className:M.a.header,children:[Object(d.jsx)("h1",{children:"ReactMeals"}),Object(d.jsx)(w,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:M.a["main-image"],children:Object(d.jsx)("img",{src:g,alt:"A table full of delicious food"})})]})},R=n(18),E=n.n(R),D=function(){return Object(d.jsxs)("section",{className:E.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},H=n(16),P=n.n(H),B=n(19),L=n(12),T=n.n(L),z=n(20),Y=n.n(z),J=function(e){return Object(d.jsx)("div",{className:Y.a.card,children:e.children})},V=n(13),q=n.n(V),G=n(5),$=n(21),K=n.n($),W=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:K.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(G.a)({ref:t},e.input))]})})),Z=n(22),Q=n.n(Z),U=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(d.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(d.jsx)(W,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!c&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},X=function(e){var t=Object(i.useContext)(o),n="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:q.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:q.a.description,children:e.description}),Object(d.jsx)("div",{className:q.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(U,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},ee=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),o=s[0],l=s[1],u=Object(i.useState)(null),j=Object(r.a)(u,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){(function(){var e=Object(B.a)(P.a.mark((function e(){var t,n,a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-app-36252-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,console.log(n),a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(d.jsx)("section",{className:T.a.MealsLoading,children:Object(d.jsx)("p",{children:"Loading....."})});if(m)return Object(d.jsx)("section",{className:T.a.MealsError,children:Object(d.jsx)("p",{children:m})});var O=n.map((function(e){return Object(d.jsx)(X,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:T.a.meals,children:Object(d.jsx)(J,{children:Object(d.jsx)("ul",{children:O})})})},te=function(){return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)(ee,{})]})},ne=n(17),ce={items:[],totalAmount:0},ae=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(G.a)(Object(G.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(G.a)(Object(G.a)({},l),{},{amount:l.amount-1});(s=Object(ne.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ce},re=function(e){var t=Object(i.useReducer)(ae,ce),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(d.jsx)(o.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(re,{children:[n&&Object(d.jsx)(N,{onClose:function(){c(!1)}}),Object(d.jsx)(F,{onShowCart:function(){c(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(te,{})})]})};a.a.render(Object(d.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.ebef5fed.chunk.js.map