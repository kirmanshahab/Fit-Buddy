(this["webpackJsonpfit-buddy"]=this["webpackJsonpfit-buddy"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},39:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(15),i=c.n(a),r=(c(39),c.p,c(27),c(7)),d=(c(28),c(0));var l=function(e){e.cardList;var t=e.card,c=e.id,s=e.remove,n=e.onCompleted,a=e.Checked,i=e.del;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card mx-5 my-3 border-bottom border-3 border-success",style:{width:"14rem",borderRadius:"20px"},children:[Object(d.jsx)("img",{className:"card-img-top",src:"",alt:""}),Object(d.jsxs)("div",{className:"card-body fw-bolder",children:["Excercise:",t.excercise," ",Object(d.jsx)("br",{}),"Date:",t.date,"  ",Object(d.jsx)("br",{}),"Duration:",t.amount," ",Object(d.jsx)("br",{}),"Description ",Object(d.jsx)("br",{})," ",t.description]}),Object(d.jsxs)("div",{className:"d-flex justify-content-end me-2 mb-2",children:[Object(d.jsx)("button",{type:"button",className:"btn rounded-3 mx-auto ",onClick:function(){n(c)},disabled:a,style:a?{display:"none"}:{display:"block"},children:"\u2714\ufe0f"}),Object(d.jsx)("div",{className:"d-flex justify-content-end ",onClick:function(){return a?i(c):s(c)},children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})]})})},j=function(e){var t=e.cardList,c=(e.setCardList,e.onCompleted),s=e.remove;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"text-center my-5 bg-primary text-white rounded-pill py-3",children:"In Progress"}),Object(d.jsx)("div",{className:"d-flex justify-content-start flex-wrap",children:t.map((function(e,n){return Object(d.jsx)(l,{cardList:t,card:e,id:n,remove:s,onCompleted:c},n)}))})]})};var o=c.p+"static/media/60111.cfe9f79c.jpg",b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:o,alt:"txt",style:{height:200,width:200},id:"profile-pic",className:"ml-5 image-fluid my-2"})})};var h=function(){var e=Object(r.f)();return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"bg-primary",children:[Object(d.jsx)("div",{className:"mt-3",children:Object(d.jsx)("img",{className:"img-fluid mx-auto d-block",src:"data:image/png;base64,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"})}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"d-flex flex-column",children:Object(d.jsx)(b,{})})}),Object(d.jsx)("div",{class:"pt-5",children:Object(d.jsx)("a",{className:"btn btn-light btn-block text-primary mb-3",onClick:function(){return e.push("/")},children:"Log out "})})]})})},m=(c(31),c(18)),u=function(){return Object(d.jsxs)("div",{className:"text-center  py-5 px-4 text-primary border border-primary rounded-3 mx-auto my-2",id:"daily-challenges",children:[Object(d.jsx)("h3",{className:"mt-3",children:"Daily Challenges"}),Object(d.jsx)("p",{className:"",children:"Should You Choose To Accept"})]})},g=c(14),C=function(){var e=Object(s.useState)(),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(),i=Object(g.a)(a,2),r=i[0],l=i[1],j=Object(s.useState)(0),o=Object(g.a)(j,2),b=o[0],h=o[1];return Object(d.jsxs)("div",{className:"my-2",children:[Object(d.jsx)("h2",{className:"py-2",children:"Calculate Your B.M.I (Body Mass Index)"}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"number",className:"p-holder form-control   ",placeholder:"Enter Your Height in Metre","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:c,name:"height",onChange:function(e){var t=e.target.value;n(t)}})}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"number",className:"p-holder form-control  ",placeholder:"Enter Your Weight in KG","aria-label":"Recipient's username","aria-describedby":"basic-addon2 ",value:r,name:"weight",onChange:function(e){var t=e.target.value;l(t)}})}),Object(d.jsx)("div",{children:b}),Object(d.jsx)("button",{className:"btn text-white btn-block mb-3 bg-danger",type:"button",onClick:function(){h(r/Math.pow(c,2))},children:"Submit"})]})},x=function(){return Object(d.jsxs)("div",{className:"d-flex flex-column text-center rounded-end-3 mt-2",children:[Object(d.jsx)(u,{}),Object(d.jsx)(C,{})]})},p=c(26),v=c(12),O=c(2),Q=c(25),f=c(20),E=c(17),A=function(e){var t=e.completed,c=e.cardList,s=e.remove,n=e.checked,a=e.del;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"text-center my-5 bg-primary text-white rounded-pill py-3",children:"Completed"}),Object(d.jsx)("div",{className:"d-flex justify-content-start flex-wrap ",children:t.map((function(e,t){return Object(d.jsx)(l,{cardList:c,card:e,id:t,remove:s,Checked:n,del:a},t)}))})]})},I=function(){var e=Object(s.useState)({}),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(g.a)(a,2),r=i[0],l=i[1],o=Object(s.useState)([]),b=Object(g.a)(o,2),h=b[0],m=b[1],u=Object(s.useState)(!1),C=Object(g.a)(u,2),x=C[0],I=C[1],B=function(e){var t=e.target,c=t.name,s=t.value;n((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(v.a)({},c,s))}))},y=function(e){l((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(E.a,{defaultActiveKey:"0",children:Object(d.jsxs)(E.a.Item,{eventKey:"0",className:"bg-light",children:[Object(d.jsx)(E.a.Header,{className:"bg-primary text-center",children:"Add Activites"}),Object(d.jsx)(E.a.Body,{children:Object(d.jsxs)(Q.a,{children:[Object(d.jsxs)("div",{className:"d-flex justify-content-around align-items-center",children:[Object(d.jsxs)(Q.a.Group,{as:f.a,controlId:"formGridExcercise",cl:!0,children:[Object(d.jsx)("label",{className:"mr-sm-2",htmlFor:"inlineFormCustomSelect",children:"Exercises: "}),Object(d.jsxs)("select",{className:"custom-select mr-sm-2  form-control",id:"inlineFormCustomSelect",onChange:B,name:"excercise",children:[Object(d.jsx)("option",{selected:!0,children:"Choose An Exercise"}),Object(d.jsx)("option",{value:"Running",children:"Running"}),Object(d.jsx)("option",{value:"Cycling",children:"Cycling"}),Object(d.jsx)("option",{value:"Swimming",children:"Swimming"}),Object(d.jsx)("option",{value:"Hiking",children:"Hiking"}),Object(d.jsx)("option",{value:"Walking",children:"Walking"})]}),Object(d.jsx)("label",{htmlFor:"amount",children:"Duration: "}),Object(d.jsx)("input",{type:"text",name:"amount",id:"amount",placeholder:"00:00:00..",className:"p-holder  form-control",value:c.amount,onChange:B}),Object(d.jsx)("label",{htmlFor:"date",children:"Date: "}),Object(d.jsx)("input",{type:"date",id:"date",className:"form-control",value:c.date,name:"date",onChange:B})]}),Object(d.jsx)("textarea",{id:"w3review",name:"description",rows:"7",style:{outline:"none",borderRadius:"10px"},cols:"50",value:c.description,onChange:B,placeholder:"Description..."})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"button",className:"btn btn-primary mt-3",onClick:function(){l((function(e){return[].concat(Object(p.a)(e),[c])}))},children:"Submit"})})]})})]})}),Object(d.jsx)(j,{cardList:r,setCardList:l,onCompleted:function(e){var t=r.filter((function(t,c){return c===e}));console.log(t),l((function(t){return t.filter((function(t,c){return c!==e}))})),m((function(e){return[].concat(Object(p.a)(e),[t[0]])})),console.log(h),I(!0)},remove:y}),Object(d.jsx)(A,{completed:h,cardList:r,remove:y,checked:x,del:function(e){m((function(t){return t.filter((function(t,c){return c!==e}))}))}})]})},B=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(I,{})})},y=function(){return Object(d.jsx)("div",{className:"",children:Object(d.jsx)(B,{})})};var N=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 bg-primary",children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"col-md-7",children:Object(d.jsx)(y,{})}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)(x,{})})]})})})};var Y=function(){var e=Object(r.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"container-login",children:Object(d.jsx)("div",{id:"logo",children:Object(d.jsx)("img",{src:"data:image/png;base64,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"})})}),Object(d.jsx)("div",{className:"signin-signup",children:Object(d.jsxs)("form",{action:"#",className:"sign-in-form",children:[Object(d.jsx)("h2",{className:"title",children:"Sign in"}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("i",{className:"fas fa-user"}),Object(d.jsx)("input",{type:"text",placeholder:"Username"})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("i",{className:"fas fa-lock"}),Object(d.jsx)("input",{type:"password",placeholder:"Password"})]}),Object(d.jsx)("a",{onClick:function(){return e.push("/main")},className:"btn1 solid",id:"btn-a",children:"Login"}),Object(d.jsx)("p",{className:"social-text",children:"Or Sign in with social platforms"}),Object(d.jsxs)("div",{className:"social-media",children:[Object(d.jsx)("a",{href:"#",className:"social-icon",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)("a",{href:"#",className:"social-icon",children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)("a",{href:"#",className:"social-icon",children:Object(d.jsx)("i",{className:"fab fa-google"})}),Object(d.jsx)("a",{href:"#",className:"social-icon",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})})]})};c(45),c(46);var w=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m.a,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:Y}),Object(d.jsx)(r.a,{exact:!0,path:"/main",component:N})]})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),F()}},[[48,1,2]]]);
//# sourceMappingURL=main.934c024c.chunk.js.map