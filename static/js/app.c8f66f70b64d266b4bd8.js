webpackJsonp([1],Array(19).concat([function(t,e,a){"use strict";e.a={name:"app"}},function(t,e,a){"use strict";var s=a(21);e.a={name:"Home",data:function(){return{user:{image:"",name:""}}},components:{SiteTemplate:s.a},created:function(){this.$store.getters.getUser&&(this.user=this.$store.getters.getUser)}}},function(t,e,a){"use strict";function s(t){a(62)}var i=a(22),r=a(70),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";var s=a(23),i=a(25),r=a(67);e.a={name:"LoginTemplate",data:function(){return{user:!1}},components:{NavBarVue:s.a,FooterVue:i.a,SideNavVue:r.a},created:function(){this.$store.getters.getUser?this.user=this.$store.getters.getUser:this.$router.push("/login")},methods:{sair:function(){this.$store.commit("setUser",null),sessionStorage.clear(),this.user=!1,this.$router.push("/login")}}}},function(t,e,a){"use strict";function s(t){a(63)}var i=a(24),r=a(64),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".sidenav");M.Sidenav.init(t)}),e.a={name:"NavBar",props:["cor","logo","url"],data:function(){return{}}}},function(t,e,a){"use strict";function s(t){a(65)}var i=a(26),r=a(66),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={name:"Footer",props:["cor"],data:function(){return{data:new Date}}}},function(t,e,a){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".sidenav");M.Sidenav.init(t,{edge:"left"})}),e.a={name:"SideNav",data:function(){return{user:""}},created:function(){this.$store.getters.getUser&&(this.user=this.$store.getters.getUser)}}},function(t,e,a){"use strict";var s=a(74),i=a.n(s),r=a(88),n=a.n(r),o=a(106),l=a.n(o),c=a(108);e.a={name:"Login",components:{LoginTemplate:c.a},data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;this.$http.post(this.$urlAPI+"login",{email:this.email,password:this.password}).then(function(e){if(console.log(e),e.data.status)console.log(e),t.$store.commit("setUser",e.data.user),sessionStorage.setItem("user",l()(e.data.user)),t.$router.push("/");else if(!1===e.data.status&&e.data.validate){console.log("erros de validação");var a="",s=!0,r=!1,o=void 0;try{for(var c,u=n()(i()(e.data.errors));!(s=(c=u.next()).done);s=!0){var v=c.value;a=v+" "}}catch(t){r=!0,o=t}finally{try{!s&&u.return&&u.return()}finally{if(r)throw o}}alert(a)}else console.log("login não existe"),alert("Login invalido")}).catch(function(t){console.warn("Error: ",t)})}}}},,,,,,,,,,,,,function(t,e,a){"use strict";var s=a(23),i=a(25);e.a={name:"LoginTemplate",data:function(){return{user:!1,name:"",email:"",password:"",password_confirmation:"",image:""}},components:{NavBarVue:s.a,FooterVue:i.a},created:function(){this.$store.getters.getUser&&(this.user=this.$store.getters.getUser,this.$router.push("/"))},methods:{}}},function(t,e,a){"use strict";var s=a(21);e.a={name:"Profile",components:{SiteTemplate:s.a},data:function(){return{user:!1,name:"",email:"",password:"",password_confirmation:"",image:"",company:"",members:[]}},created:function(){var t=this;this.$store.getters.getUser&&(this.user=this.$store.getters.getUser,this.name=this.user.name,this.email=this.user.email,this.company=this.user.company[0]),console.log(this.$store.getters.getToken),this.$http.post(this.$urlAPI+"company/members/"+this.user.id,{},{headers:{authorization:"Bearer "+this.$store.getters.getToken}}).then(function(e){e.status&&(t.members=e.data.members),console.log(e)}).catch(function(t){return console.log(t)})},methods:{saveImage:function(t){var e=this,a=t.target.file||t.dataTransfer.files;if(a.length){var s=new FileReader;s.onloadend=function(t){e.image=t.target.result},s.readAsDataURL(a[0])}}}}},,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(17),i=a(54),r=a(58),n=a(116),o=a.n(n),l=a(133);s.a.use(l.a),o.a.defaults.withCredentials=!0,s.a.prototype.$http=o.a,s.a.prototype.$urlAPI="http://localhost:8000/api/";var c=new l.a.Store({state:{user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null},getters:{getUser:function(t){return t.user},getToken:function(t){return t.user.token}},mutations:{setUser:function(t,e){t.user=e}}});s.a.config.productionTip=!1,new s.a({el:"#app",store:c,router:r.a,template:"<App/>",components:{App:i.a}})},,,function(t,e,a){"use strict";function s(t){a(55)}var i=a(19),r=a(57),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},,function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var s=a(17),i=a(59),r=a(60),n=a(72),o=a(112);s.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/login",name:"Login",component:n.a},{path:"/profile",name:"Profile",component:o.a}]})},,function(t,e,a){"use strict";function s(t){a(61)}var i=a(20),r=a(71),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{class:t.cor||"blue "},[a("div",{staticClass:"nav-wrapper  center-align"},[a("router-link",{staticClass:"brand-logo",attrs:{to:t.url||"/"}},[t._v(t._s(t.logo||"Sistema"))]),t._v(" "),t._m(0),t._v(" "),a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[t._t("default")],2)],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"top-nav sidenav-trigger full hide-on-large-only right",attrs:{href:"#","data-target":"slide-out"}},[a("i",{staticClass:"material-icons"},[t._v("menu")])])}],r={render:s,staticRenderFns:i};e.a=r},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{class:"page-footer col m8 offset-m4"+t.cor||"blue"},[a("div",{staticClass:"container "},[a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col l4 offset-l2 s12"},[a("h5",{staticClass:"white-text"},[t._v("Links")]),t._v(" "),a("ul",[a("li",[a("router-link",{staticClass:"grey-text text-lighten-3",attrs:{to:"/"}},[t._v("Home")])],1)])])])]),t._v(" "),a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"container"},[t._v("\n        © "+t._s(t.data.getFullYear())+" Copyright Gefin - Space\n        "),a("router-link",{staticClass:"grey-text text-lighten-4 right",attrs:{target:"_blank",to:"https://jos3duardo.online/"}},[t._v("Jos3duardo")])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col m6 l6 s12"},[a("h5",{staticClass:"white-text"},[t._v("Footer Content")]),t._v(" "),a("p",{staticClass:"grey-text text-lighten-4"},[t._v("You can use rows and columns here to organize your footer content.")])])}],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function s(t){a(68)}var i=a(27),r=a(69),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"sidenav sidenav-fixed",attrs:{id:"slide-out"}},[a("li",[a("div",{staticClass:"user-view"},[t._m(0),t._v(" "),a("a",{attrs:{href:"#user"}},[a("img",{staticClass:"circle",attrs:{src:t.user.image}})]),t._v(" "),a("a",{attrs:{href:"#name"}},[a("span",{staticClass:"white-text name"},[t._v(t._s(t.user.name))])]),t._v(" "),a("a",{attrs:{href:"#email"}},[a("span",{staticClass:"white-text email"},[t._v(t._s(t.user.email))])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("img",{attrs:{src:"https://materializecss.com/images/office.jpg"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#!"}},[a("i",{staticClass:"material-icons"},[t._v("cloud")]),t._v("First Link With Icon")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#!"}},[a("i",{staticClass:"material-icons"},[t._v("settings")]),t._v(" Second Link")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"divider"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"subheader"},[t._v("Subheader")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"waves-effect",attrs:{href:"#!"}},[t._v("Third Link With Waves")])])}],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("nav-bar-vue",{attrs:{logo:"Gefin",url:"/",cor:"red"}},[a("li",[a("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),t.user?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.user?a("li",[a("router-link",{attrs:{to:"/profile"}},[t._v(t._s(t.user.name))])],1):t._e(),t._v(" "),t.user?a("li",[a("a",{on:{click:function(e){return t.sair()}}},[t._v("Sair")])]):t._e()]),t._v(" "),a("side-nav-vue"),t._v(" "),a("main",[a("div",{staticClass:"container"},[t._t("default")],2)])],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("site-template",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m12"})])])])},i=[],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function s(t){a(73)}var i=a(28),r=a(111),n=a(1),o=s,l=n(i.a,r.a,!1,o,"data-v-5cfe15ac",null);e.a=l.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function s(t){a(109)}var i=a(41),r=a(110),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("span",[a("nav-bar-vue",{attrs:{logo:"Gefin - Space",url:"/",cor:"red"}},[a("li",[a("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),t.user?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.user?a("li",[a("router-link",{attrs:{to:"/profile"}},[t._v(t._s(t.user.name))])],1):t._e()])],1),t._v(" "),a("div",{staticClass:"container"},[t._t("header"),t._v(" "),t._t("principal")],2),t._v(" "),a("footer-vue",{attrs:{cor:"orange"}})],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("login-template",[a("span",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"row",attrs:{id:"header"}},[t._v("\n        Login\n      ")])]),t._v(" "),a("span",{attrs:{slot:"principal"},slot:"principal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m8 offset-m2  center-align"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"row"},[a("br"),t._v(" "),a("div",{staticClass:"col s12 m12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12 m12"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",attrs:{id:"icon_prefix",type:"text",autocomplete:"off"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"icon_prefix"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field col s12 m12"},[a("i",{staticClass:"material-icons prefix"},[t._v("vpn_key")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"validate",attrs:{id:"icon_telephone",type:"password",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"icon_telephone"}},[t._v("Password")])])]),t._v(" "),a("div",{staticClass:"row"},[a("button",{staticClass:"btn waves-effect waves-light",on:{click:function(e){return t.login()}}},[t._v("Entrar\n                  "),a("i",{staticClass:"material-icons right"},[t._v("send")])]),t._v(" "),a("button",{staticClass:"btn waves-effect waves-light orange",attrs:{type:"submit",name:"action"}},[t._v("Cadastrar-se\n                  "),a("i",{staticClass:"material-icons right"},[t._v("contacts")])])])])])])])])])])])},i=[],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function s(t){a(113)}var i=a(42),r=a(114),n=a(1),o=s,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("site-template",[s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m4 l4 offset-l2 offset-m2"},[s("h5",[t._v("Dados")]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:a(115),height:"150px"}}),t._v(" "),s("span",{staticClass:"card-title black-text"},[t._v(t._s(t.user.name))]),t._v(" "),s("div",{staticClass:"img-author-div "},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"circle img-author",attrs:{src:t.user.image}})])])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"rigth"},[s("b",[t._v("Empresa: ")]),t._v(t._s(t.company.name)),s("br"),t._v(" "),s("b",[t._v("Cadastro: ")]),t._v(t._s(t.user.created_at)),s("br"),t._v(" "),s("b",[t._v("Email: ")]),t._v(t._s(t.user.email)+"\n            ")])])])]),t._v(" "),s("div",{staticClass:"col s12 m6 l6"},[s("h5",[t._v("Editar Perfil")]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12 m12 l12"},[s("i",{staticClass:"material-icons prefix"},[t._v("account_circle")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"validate",attrs:{id:"name",type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"name"}},[t._v("Nome")])]),t._v(" "),s("div",{staticClass:"input-field col s12 m12 l12"},[s("i",{staticClass:"material-icons prefix"},[t._v("mail")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",attrs:{id:"email",type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"email"}},[t._v("Email")])])]),t._v(" "),s("div",{staticClass:"file-field input-field"},[s("div",{staticClass:"btn"},[s("span",[s("i",{staticClass:"material-icons"},[t._v("perm_media")])]),t._v(" "),s("input",{attrs:{type:"file"},on:{change:t.saveImage}})]),t._v(" "),s("div",{staticClass:"file-path-wrapper"},[s("input",{staticClass:"file-path validate",attrs:{type:"text"}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12 m12 l12"},[s("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"validate",attrs:{id:"password",type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Nova senha")])]),t._v(" "),s("div",{staticClass:"input-field col s12 m12 l12"},[s("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"validate",attrs:{id:"repassword",type:"password",name:"repassword"},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"repassword"}},[t._v("Confirme a senha")])])]),t._v(" "),s("div",{staticClass:"input-field center"},[s("button",{staticClass:"btn grey waves-effect",attrs:{type:"submit"}},[t._v("Salvar")])])])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m10 l10 offset-l2 offset-m2"},[s("h5",{staticClass:"center-align"},[t._v("Membros da Empresa")]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("table",{staticClass:"no-border"},[s("tr",[s("th",[t._v("nome")]),t._v(" "),s("th",[t._v("email")])]),t._v(" "),t._l(t.members,function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))])])})],2)])])])])])},i=[],r={render:s,staticRenderFns:i};e.a=r},function(t,e,a){t.exports=a.p+"static/img/fundo8.d776556.jpg"}]),[51]);
//# sourceMappingURL=app.c8f66f70b64d266b4bd8.js.map