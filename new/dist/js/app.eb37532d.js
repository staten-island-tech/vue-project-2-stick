(function(e){function t(t){for(var n,s,a=t[0],r=t[1],l=t[2],u=0,b=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,a=1;a<c.length;a++){var r=c[a];0!==i[r]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=r;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"10d4":function(e,t,c){},"1e6a":function(e,t,c){},"1e9c":function(e,t,c){},"226a":function(e,t,c){"use strict";c("b85a")},"274e":function(e,t,c){},"2b6f":function(e,t,c){},"2c47":function(e,t,c){},"36bd":function(e,t,c){},"3bc5":function(e,t,c){},"4a70":function(e,t,c){"use strict";c("274e")},"4b80":function(e,t,c){},"4d43":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);var n=c("7a23");const i={class:"container"};function o(e,t,c,o,s,a){const r=Object(n["A"])("Navbar"),l=Object(n["A"])("router-view");return Object(n["t"])(),Object(n["f"])("body",null,[Object(n["g"])("div",i,[Object(n["j"])(r)]),Object(n["g"])("div",null,[Object(n["j"])(l)])])}const s=e=>(Object(n["w"])("data-v-e23bf2b2"),e=e(),Object(n["u"])(),e),a=s(()=>Object(n["g"])("h1",{class:"title"},"Recipe list",-1)),r={class:"displayName"},l={key:0},d={class:"link"},u=Object(n["i"])(" Recipe"),b=Object(n["i"])(" Home "),p=Object(n["i"])(" My Recipe "),g=Object(n["i"])(" Login "),j=Object(n["i"])(" Signup "),O={class:"end"},m=Object(n["i"])(" Create Recipe ");function f(e,t,c,i,o,s){const f=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("nav",null,[a,Object(n["g"])("div",r,[null!==i.user?(Object(n["t"])(),Object(n["f"])("p",l,"Logged in as: "+Object(n["C"])(i.user.email),1)):Object(n["e"])("",!0)]),Object(n["g"])("div",d,[Object(n["j"])(f,{class:"linked-route",to:"/blog"},{default:Object(n["G"])(()=>[u]),_:1}),Object(n["j"])(f,{class:"linked-route",to:"/"},{default:Object(n["G"])(()=>[b]),_:1}),Object(n["j"])(f,{class:"linked-route",to:"/MyRecipe"},{default:Object(n["G"])(()=>[p]),_:1})]),Object(n["g"])("div",null,[null!==i.user?(Object(n["t"])(),Object(n["f"])("button",{key:0,class:"logout",onClick:t[0]||(t[0]=(...e)=>i.handleClick&&i.handleClick(...e))}," Logout ")):Object(n["e"])("",!0)]),Object(n["g"])("div",null,[null===i.user?(Object(n["t"])(),Object(n["d"])(f,{key:0,class:"linked-route",to:"/login"},{default:Object(n["G"])(()=>[g]),_:1})):Object(n["e"])("",!0),null===i.user?(Object(n["t"])(),Object(n["d"])(f,{key:1,class:"linked-route",to:"/signup"},{default:Object(n["G"])(()=>[j]),_:1})):Object(n["e"])("",!0)]),Object(n["g"])("div",O,[i.user?(Object(n["t"])(),Object(n["d"])(f,{key:0,class:"linked-route",to:"/create"},{default:Object(n["G"])(()=>[m]),_:1})):Object(n["e"])("",!0)])])}var v=c("5502"),h=c("6c02"),w={setup(){const e=Object(h["c"])(),t=Object(v["b"])(),c=()=>{t.dispatch("logout"),e.push("/")};return{handleClick:c,user:Object(n["b"])(()=>t.state.user),authIsReady:Object(n["b"])(()=>t.state.authIsReady)}}},y=(c("acdc"),c("6b0d")),R=c.n(y);const C=R()(w,[["render",f],["__scopeId","data-v-e23bf2b2"]]);var I=C,_={components:{Navbar:I}};c("6c94");const x=R()(_,[["render",o],["__scopeId","data-v-2628c880"]]);var k=x;const S={class:"main"},U=Object(n["h"])('<div class="create sec" data-v-c294b14e><div class="img-container" data-v-c294b14e><img src="https://images.collegexpress.com/article/How-to-Create-Your-Own-College-Major22.jpg" alt="create" data-v-c294b14e></div><div class="p-container" data-v-c294b14e><p data-v-c294b14e> &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div></div><div class="share sec" data-v-c294b14e><div class="img-container" data-v-c294b14e><img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/share-of-voice-what-it-is-why-it-matters-how-to-measure-it-5e985f3d6c8ae-760x400.png" alt="share" data-v-c294b14e></div><div class="p-container" data-v-c294b14e><p data-v-c294b14e> &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div></div><div class="explore sec" data-v-c294b14e><div class="img-container" data-v-c294b14e><img src="https://innonbathcreek.com/wp-content/uploads/2018/06/explore-icon-300x232.jpg" alt="explore" data-v-c294b14e></div><div class="p-container" data-v-c294b14e><p data-v-c294b14e> &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div></div>',3),E=[U];function q(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("div",S,E)}var V={components:{},setup(){return{}}};c("6f27");const P=R()(V,[["render",q],["__scopeId","data-v-c294b14e"]]);var B=P;const H=e=>(Object(n["w"])("data-v-07786e7a"),e=e(),Object(n["u"])(),e),A=H(()=>Object(n["g"])("h3",null,"Login",-1)),D=H(()=>Object(n["g"])("label",{for:"email"},"Email:",-1)),L=H(()=>Object(n["g"])("label",{for:"password"},"Password:",-1)),M=H(()=>Object(n["g"])("button",null,"Login",-1));function F(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("form",{class:"login",onSubmit:t[2]||(t[2]=Object(n["I"])((...e)=>i.handleSubmit&&i.handleSubmit(...e),["prevent"]))},[A,D,Object(n["H"])(Object(n["g"])("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),required:""},null,512),[[n["E"],i.email]]),L,Object(n["H"])(Object(n["g"])("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),required:""},null,512),[[n["E"],i.password]]),M],32)}var G={setup(){const e=Object(n["y"])(""),t=Object(n["y"])(""),c=Object(n["y"])(null),i=Object(v["b"])(),o=Object(h["c"])(),s=async()=>{try{await i.dispatch("login",{email:e.value,password:t.value}),o.push("/")}catch(n){c.value=n.message}};return{email:e,password:t,handleSubmit:s,store:i}}};c("76cb");const T=R()(G,[["render",F],["__scopeId","data-v-07786e7a"]]);var N=T;const z=e=>(Object(n["w"])("data-v-89f72638"),e=e(),Object(n["u"])(),e),W=z(()=>Object(n["g"])("h3",null,"Signup",-1)),J=z(()=>Object(n["g"])("label",{for:"email"},"Email:",-1)),K=z(()=>Object(n["g"])("label",{for:"password"},"Password:",-1)),Y=z(()=>Object(n["g"])("button",null,"Sign up",-1));function Q(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("form",{class:"login",onSubmit:t[2]||(t[2]=Object(n["I"])((...e)=>i.handleSubmit&&i.handleSubmit(...e),["prevent"]))},[W,J,Object(n["H"])(Object(n["g"])("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),required:""},null,512),[[n["E"],i.email]]),K,Object(n["H"])(Object(n["g"])("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),required:""},null,512),[[n["E"],i.password]]),Y],32)}var X={setup(){const e=Object(n["y"])(""),t=Object(n["y"])(""),c=Object(n["y"])(null),i=Object(v["b"])(),o=Object(h["c"])(),s=async()=>{try{await i.dispatch("signup",{email:e.value,password:t.value}),o.push("/")}catch(n){c.value=n.message}};return{email:e,password:t,store:i,handleSubmit:s}}};c("c9d5");const Z=R()(X,[["render",Q],["__scopeId","data-v-89f72638"]]);var $=Z;const ee=e=>(Object(n["w"])("data-v-29210226"),e=e(),Object(n["u"])(),e),te={class:"newRecipe"},ce=ee(()=>Object(n["g"])("label",{for:"title"},"Recipe Name",-1)),ne=ee(()=>Object(n["g"])("label",{for:"Ingredient"},"Description",-1)),ie=ee(()=>Object(n["g"])("label",{for:"Ingredient"},"List of Ingredients",-1)),oe=ee(()=>Object(n["g"])("label",{for:"Instruction"},"Recipe Instructions",-1)),se={class:"btn-cont"};function ae(e,t,c,i,o,s){const a=Object(n["A"])("Img");return Object(n["t"])(),Object(n["f"])("div",te,[Object(n["g"])("form",null,[ce,Object(n["H"])(Object(n["g"])("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e),required:""},null,512),[[n["E"],i.title]]),ne,Object(n["H"])(Object(n["g"])("textarea",{class:"gredients","onUpdate:modelValue":t[1]||(t[1]=e=>i.desc=e),name:"Ingredients",id:"ingredients",cols:"6955",rows:"20",required:""},null,512),[[n["E"],i.desc]]),ie,Object(n["H"])(Object(n["g"])("textarea",{class:"gredients","onUpdate:modelValue":t[2]||(t[2]=e=>i.ingred=e),name:"Ingredients",id:"ingredients",cols:"6955",rows:"20",required:""},null,512),[[n["E"],i.ingred]]),oe,Object(n["H"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.instruc=e),name:"Instructions",id:"instruction",cols:"6955",rows:"20",required:""},null,512),[[n["E"],i.instruc]])]),Object(n["j"])(a),Object(n["g"])("div",se,[Object(n["g"])("button",{class:"btn",onClick:t[4]||(t[4]=Object(n["I"])((...e)=>i.writeUserData&&i.writeUserData(...e),["prevent"]))},"Complele")])])}var re=c("66ce"),le=c("ea7b");const de=e=>(Object(n["w"])("data-v-dba11b04"),e=e(),Object(n["u"])(),e),ue=de(()=>Object(n["g"])("label",{for:"input"},"Insert Image Link",-1)),be=de(()=>Object(n["g"])("img",{class:"imagePreviewWrapper",id:"img",src:"",alt:""},null,-1));function pe(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("div",null,[ue,Object(n["g"])("input",{id:"file",name:"input",type:"text",onChange:t[0]||(t[0]=(...e)=>i.onFileChange&&i.onFileChange(...e))},null,32),be])}var ge={setup(){const e=Object(v["b"])();function t(){let t=Object(n["y"])(document.getElementById("file")).value,c=t.value;console.log(c),null!==c?(document.getElementById("img").src=c,e.commit("imgprv",c)):(document.getElementById("img").src=null,e.commit("imgprv",null))}return console.log(e),{onFileChange:t}}};c("7e01");const je=R()(ge,[["render",pe],["__scopeId","data-v-dba11b04"]]);var Oe=je,me={components:{Img:Oe},setup(){const e=Object(h["c"])(),t=Object(le["b"])(),c="",n="",i="",o="",s=Object(v["b"])(),a=Object(re["a"])();function r(){if(null!==c&&null!==n&&null!==i&&null!==o){const c=Object(re["d"])(a,"recipe/"),n=Object(re["d"])(a,"user/"+t.currentUser.uid+"/posts/"),i=Object(re["c"])(c),o=Object(re["c"])(n);Object(re["f"])(i,{title:this.title,ingredientsRecipe:this.ingred,instructionsRecipe:this.instruc,descsRecipe:this.desc,id:i.key,author:t.currentUser.email,img:s.state.imgPreview}).then(()=>{console.log("Post logged")}).catch(e=>{console.log(e)}),Object(re["f"])(o,{title:this.title,ingredientsRecipe:this.ingred,instructionsRecipe:this.instruc,descsRecipe:this.desc,id:i.key,author:t.currentUser.email,img:s.state.imgPreview}),e.push("/blog")}}return{title:c,ingred:n,instruc:i,writeUserData:r,desc:o}}};c("226a");const fe=R()(me,[["render",ae],["__scopeId","data-v-29210226"]]);var ve=fe;const he={class:"card-container"};function we(e,t,c,i,o,s){const a=Object(n["A"])("Card");return Object(n["t"])(),Object(n["f"])("div",he,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(i.recipe,e=>(Object(n["t"])(),Object(n["d"])(a,{key:e,id:e.id,title:e.title,img:e.img,text:e.descsRecipe,creator:e.author},null,8,["id","title","img","text","creator"]))),128))])}const ye={class:"recipe-name"},Re={class:"img-cont"},Ce=["src"],Ie={class:"desc-cont"},_e={class:"description"},xe={class:"author"},ke={class:"card-by"};function Se(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("button",{class:"card",onClick:t[0]||(t[0]=e=>i.goTo({id:c.id}))},[Object(n["g"])("h2",ye,Object(n["C"])(c.title),1),Object(n["g"])("div",Re,[Object(n["g"])("img",{class:"recipe-img",src:c.img,alt:""},null,8,Ce)]),Object(n["g"])("div",Ie,[Object(n["g"])("p",_e,Object(n["C"])(c.text),1)]),Object(n["g"])("div",xe,[Object(n["g"])("h2",ke,"By: "+Object(n["C"])(c.creator),1)])])}var Ue={props:{title:String,text:String,img:String,description:String,id:String,creator:String},setup(){const e=Object(v["b"])(),t=Object(re["a"])(),c=Object(h["c"])();function n(n){console.log("working");let i=n.id;const o=Object(re["d"])(t,"recipe/"+i);Object(re["b"])(o,t=>{const c=t.val();e.commit("view",c)}),c.push("/BlogView")}return{goTo:n}}};c("6772");const Ee=R()(Ue,[["render",Se],["__scopeId","data-v-5c0f020e"]]);var qe=Ee,Ve={components:{Card:qe},setup(){const e=Object(re["a"])(),t=Object(re["d"])(e,"recipe/"),c=Object(v["b"])();let i=[];return Object(n["r"])(()=>{c.commit("clear"),Object(re["b"])(t,e=>{e.forEach((function(e){const t=e.exportVal();i.push(t),console.log(t),c.dispatch("getRecipe",t)}))})}),console.log(i),{recipe:Object(n["b"])(()=>c.state.recipe),Card:qe,list:i}}};c("9270");const Pe=R()(Ve,[["render",we],["__scopeId","data-v-47f70ef6"]]);var Be=Pe;const He={class:"blog-container"};function Ae(e,t,c,i,o,s){const a=Object(n["A"])("Blog");return Object(n["t"])(),Object(n["f"])("div",He,[Object(n["j"])(a,{title:i.data.title,img:i.data.img,ingredient:i.data.ingredientsRecipe,instruction:i.data.instructionsRecipe,description:i.data.descsRecipe},null,8,["title","img","ingredient","instruction","description"])])}const De=e=>(Object(n["w"])("data-v-fc6c4ebe"),e=e(),Object(n["u"])(),e),Le={class:"container"},Me={class:"img-cont"},Fe=["src"],Ge={class:"title"},Te={class:"recipe-info"},Ne={class:"other"},ze={class:"blg-cont"},We=De(()=>Object(n["g"])("label",{for:"Description"},"Description",-1)),Je={class:"desc",name:"Description"},Ke={class:"blg-cont"},Ye=De(()=>Object(n["g"])("label",{for:"Ingredient"},"Ingredients",-1)),Qe={class:"ingred",name:"Ingredient"},Xe={class:"blg-cont"},Ze=De(()=>Object(n["g"])("label",{for:"Instruction"},"Instruction",-1)),$e={class:"instruc",name:"Instruction"};function et(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("div",Le,[Object(n["g"])("div",Me,[Object(n["g"])("img",{src:c.img,alt:""},null,8,Fe),Object(n["g"])("h1",Ge,Object(n["C"])(c.title),1)]),Object(n["g"])("div",Te,[Object(n["g"])("div",Ne,[Object(n["g"])("div",ze,[We,Object(n["g"])("p",Je,Object(n["C"])(c.description),1)]),Object(n["g"])("div",Ke,[Ye,Object(n["g"])("p",Qe,Object(n["C"])(c.ingredient),1)]),Object(n["g"])("div",Xe,[Ze,Object(n["g"])("p",$e,Object(n["C"])(c.instruction),1)])])])])}var tt={props:{title:String,img:String,description:String,instruction:String,ingredient:String},setup(){return{}}};c("6abd");const ct=R()(tt,[["render",et],["__scopeId","data-v-fc6c4ebe"]]);var nt=ct,it={components:{Blog:nt},setup(){const e=Object(v["b"])();return{data:Object(n["b"])(()=>e.state.viewRecipe)}}};c("f558");const ot=R()(it,[["render",Ae],["__scopeId","data-v-be525d36"]]);var st=ot;const at={class:"container"};function rt(e,t,c,i,o,s){const a=Object(n["A"])("EditCard");return Object(n["t"])(),Object(n["f"])("div",at,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(i.recipe,e=>(Object(n["t"])(),Object(n["d"])(a,{key:e,id:e.id,title:e.title,img:e.img,description:e.descsRecipe},null,8,["id","title","img","description"]))),128))])}const lt={class:"card"},dt={class:"recipe-name"},ut={class:"img-cont"},bt=["src"],pt={class:"description"},gt={class:"btn-cont"},jt={class:"btn-cont2"},Ot={class:"btn-cont2"};function mt(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("div",lt,[Object(n["g"])("h2",dt,Object(n["C"])(c.title),1),Object(n["g"])("div",ut,[Object(n["g"])("img",{class:"recipe-img",src:c.img,alt:""},null,8,bt)]),Object(n["g"])("p",pt,Object(n["C"])(c.description),1),Object(n["g"])("div",gt,[Object(n["g"])("div",jt,[Object(n["g"])("button",{class:"btn",onClick:t[0]||(t[0]=e=>i.goTo({id:c.id}))},"Edit")]),Object(n["g"])("div",Ot,[Object(n["g"])("button",{class:"btn",onClick:t[1]||(t[1]=e=>i.clear({id:c.id}))},"Delete")])])])}var ft={props:{title:String,text:String,img:String,description:String,id:String},setup(){const e=Object(v["b"])(),t=Object(re["a"])(),c=Object(h["c"])();function n(n){console.log("working");let i=n.id;const o=Object(re["d"])(t,"recipe/"+i);Object(re["b"])(o,t=>{const c=t.val();e.commit("edit",c)}),c.push("/editView")}function i(e){console.log("working");let c=e.id;const n=Object(re["d"])(t,"recipe/"+c);Object(re["e"])(n),location.reload()}return{goTo:n,clear:i}}};c("f51e");const vt=R()(ft,[["render",mt],["__scopeId","data-v-ae2fd1f4"]]);var ht=vt,wt={components:{EditCard:ht},setup(){const e=Object(re["a"])(),t=Object(re["d"])(e,"recipe/"),c=Object(v["b"])();return Object(n["r"])(()=>{c.commit("clear"),Object(re["b"])(t,e=>{e.forEach((function(e){const t=e.exportVal();console.log(t),c.dispatch("userRecipe",t)}))})}),{recipe:Object(n["b"])(()=>c.state.thisUserRecipe)}}};c("e14d");const yt=R()(wt,[["render",rt],["__scopeId","data-v-ad88829a"]]);var Rt=yt;const Ct={class:"edit-blog-cont"};function It(e,t,c,i,o,s){const a=Object(n["A"])("Form");return Object(n["t"])(),Object(n["f"])("div",Ct,[Object(n["j"])(a)])}const _t=e=>(Object(n["w"])("data-v-ac66b3ca"),e=e(),Object(n["u"])(),e),xt={class:"newRecipe"},kt=_t(()=>Object(n["g"])("label",{for:"title"},"Recipe Name",-1)),St=_t(()=>Object(n["g"])("label",{for:"Description"},"Description",-1)),Ut=_t(()=>Object(n["g"])("label",{for:"Ingredient"},"List of Ingredients",-1)),Et=_t(()=>Object(n["g"])("label",{for:"Instruction"},"Recipe Instructions",-1));function qt(e,t,c,i,o,s){const a=Object(n["A"])("Img"),r=Object(n["A"])("Btn");return Object(n["t"])(),Object(n["f"])("div",xt,[Object(n["g"])("form",null,[kt,Object(n["H"])(Object(n["g"])("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e),onChange:t[1]||(t[1]=(...e)=>i.titleChange&&i.titleChange(...e))},null,544),[[n["E"],i.title]]),St,Object(n["H"])(Object(n["g"])("textarea",{class:"descriptions","onUpdate:modelValue":t[2]||(t[2]=e=>i.desc=e),name:"Description",id:"description",cols:"6955",rows:"20",onChange:t[3]||(t[3]=(...e)=>i.descChange&&i.descChange(...e)),required:""},null,544),[[n["E"],i.desc]]),Ut,Object(n["H"])(Object(n["g"])("textarea",{class:"gredients","onUpdate:modelValue":t[4]||(t[4]=e=>i.ingred=e),name:"Ingredients",id:"ingredients",cols:"6955",rows:"20",onChange:t[5]||(t[5]=(...e)=>i.ingredChange&&i.ingredChange(...e)),required:""},null,544),[[n["E"],i.ingred]]),Et,Object(n["H"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.instruc=e),name:"Instructions",id:"instruction",cols:"6955",rows:"20",onChange:t[7]||(t[7]=(...e)=>i.instrucChange&&i.instrucChange(...e)),required:""},null,544),[[n["E"],i.instruc]])]),Object(n["j"])(a),Object(n["j"])(r)])}const Vt=e=>(Object(n["w"])("data-v-9e4d9cd6"),e=e(),Object(n["u"])(),e),Pt=Vt(()=>Object(n["g"])("img",{class:"imagePreviewWrapper",id:"img",src:"",alt:""},null,-1));function Bt(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("div",null,[Object(n["g"])("input",{id:"file",type:"text",onChange:t[0]||(t[0]=(...e)=>i.onFileChange&&i.onFileChange(...e))},null,32),Pt])}var Ht={setup(){const e=Object(v["b"])();function t(){let t=Object(n["y"])(document.getElementById("file")).value,c=t.value;console.log(c),null!==c&&(document.getElementById("img").src=c,e.commit("imgCha",c))}return console.log(e),Object(n["r"])(()=>{let t=Object(n["y"])(e.state.editRecipe.img).value;document.getElementById("img").src=t,document.getElementById("file").value=t}),{onFileChange:t}}};c("8838");const At=R()(Ht,[["render",Bt],["__scopeId","data-v-9e4d9cd6"]]);var Dt=At;const Lt={class:"btn-cont"};function Mt(e,t,c,i,o,s){return Object(n["t"])(),Object(n["f"])("div",Lt,[Object(n["g"])("button",{class:"btn",onClick:t[0]||(t[0]=Object(n["I"])((...e)=>i.change&&i.change(...e),["prevent"]))},"Complele")])}var Ft={setup(){const e=Object(v["b"])(),t=Object(h["c"])();function c(){const c=e.state.editRecipe.id;console.log(c);const n=Object(re["a"])();Object(re["f"])(Object(re["d"])(n,"recipe/"+c),{title:e.state.editRecipe.title,ingredientsRecipe:e.state.editRecipe.ingredientsRecipe,instructionsRecipe:e.state.editRecipe.instructionsRecipe,descsRecipe:e.state.editRecipe.descsRecipe,id:e.state.editRecipe.id,author:e.state.editRecipe.author,img:e.state.editRecipe.img}),e.commit("clear"),t.push("/MyRecipe")}return{change:c}}};c("e32a");const Gt=R()(Ft,[["render",Mt],["__scopeId","data-v-f029d1a8"]]);var Tt=Gt,Nt={components:{Img:Dt,Btn:Tt},setup(){const e=Object(v["b"])(),t=Object(n["y"])(e.state.editRecipe.descsRecipe),c=Object(n["y"])(e.state.editRecipe.title),i=Object(n["y"])(e.state.editRecipe.ingredientsRecipe),o=Object(n["y"])(e.state.editRecipe.instructionsRecipe);function s(){e.commit("titleCha",this.title),console.log("chnaged")}function a(){e.commit("descCha",this.desc),console.log("chnaged")}function r(){e.commit("ingredCha",this.ingred),console.log("chnaged")}function l(){e.commit("instrucCha",this.instruc),console.log("chnaged")}function d(){const t=e.state.editRecipe;console.log(t)}return{desc:t,title:c,ingred:i,instruc:o,titleChange:s,descChange:a,instrucChange:l,ingredChange:r,change:d}}};c("4a70");const zt=R()(Nt,[["render",qt],["__scopeId","data-v-ac66b3ca"]]);var Wt=zt,Jt={components:{Form:Wt},setup(){return{}}};c("e5b3");const Kt=R()(Jt,[["render",It],["__scopeId","data-v-59d5f2bc"]]);var Yt=Kt;const Qt=[{path:"/",name:"Home",component:B},{path:"/login",name:"Login",component:N},{path:"/signup",name:"Signup",component:$},{path:"/create",name:"Create",component:ve},{path:"/blog",name:"Blog",component:Be},{path:"/blogView",name:"BlogView",component:st},{path:"/MyRecipe",name:"MyRecipe",component:Rt},{path:"/editView",name:"editView",component:Yt}],Xt=Object(h["a"])({history:Object(h["b"])("/"),routes:Qt});var Zt=Xt,$t=(c("7d05"),c("260b"));const ec={apiKey:"AIzaSyCI9O3EYgQgkpg1bodjGvMAsWcKM0-ykjw",authDomain:"vuex-4-fb-auth-a48cb.firebaseapp.com",databaseURL:"https://vuex-4-fb-auth-a48cb-default-rtdb.firebaseio.com",projectId:"vuex-4-fb-auth-a48cb",storageBucket:"vuex-4-fb-auth-a48cb.appspot.com",messagingSenderId:"645472278213",appId:"1:645472278213:web:4ecb0c2eb95a566ffa02ac"},tc=(Object($t["a"])(ec),Object(le["b"])()),cc=Object(v["a"])({state:{user:null,authIsReady:!1,imgPreview:null,thisUserRecipe:[],recipe:[],viewRecipe:[],editRecipe:[],newData:{}},mutations:{setUser(e,t){e.user=t;const c=Object(re["a"])();Object(re["f"])(Object(re["d"])(c,"user/"+e.user.uid),{email:e.user.email,uid:e.user.uid,posts:[]}),console.log("user state changed:",e.user)},setAuthIsReady(e,t){e.authIsReady=t},clear(e){e.recipe=[],e.thisUserRecipe=[]},recipeRef(e,t){let c=e.recipe.some(e=>{if(e.id===t.id)return!0});!1===c&&e.recipe.push(t),console.log(t),console.log("recipe in store",e.recipe)},imgprv(e,t){e.imgPreview=t,console.log(e.imgPreview)},view(e,t){e.viewRecipe=t,console.log(e.viewRecipe)},edit(e,t){e.editRecipe=t,console.log(e.editRecipe)},myOwn(e,t){const c=e.thisUserRecipe.some(e=>{if(e.id===t.id)return!0});!1===c&&e.thisUserRecipe.push(t),console.log(e.thisUserRecipe),console.log("myrecipe")},titleCha(e,t){e.editRecipe.title=t,console.log(e.editRecipe)},descCha(e,t){e.editRecipe.descsRecipe=t},instrucCha(e,t){e.editRecipe.instructionsRecipe=t},ingredCha(e,t){e.editRecipe.ingredientsRecipe=t},imgCha(e,t){e.editRecipe.img=t}},actions:{async signup(e,{email:t,password:c}){console.log("signup action");const n=await Object(le["a"])(tc,t,c);if(!n)throw new Error("could not complete signup");e.commit("setUser",n.user)},async login(e,{email:t,password:c}){console.log("login action");const n=await Object(le["d"])(tc,t,c);if(!n)throw new Error("could not complete login");e.commit("setUser",n.user)},async logout(e){console.log("logout action"),await Object(le["e"])(tc),e.commit("setUser",null)},async getRecipe(e,t){console.log("got recipe"),e.commit("recipeRef",t)},async userRecipe(e,t){console.log(t),t.author===this.state.user.email&&(console.log(t),e.commit("myOwn",t)),console.log("got this users recipe")}}}),nc=Object(le["c"])(tc,e=>{cc.commit("setAuthIsReady",!0),cc.commit("setUser",e),nc()});var ic=cc;Object(n["c"])(k).use(Zt).use(ic).mount("#app")},6772:function(e,t,c){"use strict";c("4d43")},"6abd":function(e,t,c){"use strict";c("36bd")},"6c94":function(e,t,c){"use strict";c("c38b")},"6f27":function(e,t,c){"use strict";c("3bc5")},"76cb":function(e,t,c){"use strict";c("1e9c")},"7d05":function(e,t,c){},"7e01":function(e,t,c){"use strict";c("2b6f")},8838:function(e,t,c){"use strict";c("1e6a")},9270:function(e,t,c){"use strict";c("10d4")},"9ce8":function(e,t,c){},a9d9:function(e,t,c){},acdc:function(e,t,c){"use strict";c("9ce8")},b85a:function(e,t,c){},c38b:function(e,t,c){},c3b2:function(e,t,c){},c9d5:function(e,t,c){"use strict";c("2c47")},d001:function(e,t,c){},e14d:function(e,t,c){"use strict";c("fe89")},e32a:function(e,t,c){"use strict";c("a9d9")},e5b3:function(e,t,c){"use strict";c("d001")},f51e:function(e,t,c){"use strict";c("c3b2")},f558:function(e,t,c){"use strict";c("4b80")},fe89:function(e,t,c){}});
//# sourceMappingURL=app.eb37532d.js.map