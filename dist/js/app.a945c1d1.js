(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("bc3a"),r=a.n(o),i=a("f309");n["a"].use(i["a"]);var l=new i["a"]({icons:{iconfont:"md"},breakpoint:{thresholds:{xs:340,sm:540,md:800,lg:1280},scrollBarWidth:24}}),s=(a("caad"),a("8c4f")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-form",[a("v-card",{staticClass:"elevation-12"},[a("v-snackbar",{attrs:{bottom:"bottom"===t.y,color:t.color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"write",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")]),a("v-toolbar",{attrs:{dark:"",color:"deep-purple"}},[a("v-toolbar-title",[t._v("Login")])],1),a("v-card-text",[a("v-text-field",{attrs:{rules:[t.rules.required],color:"deep-purple",name:"nome",label:"Nome",type:"text"},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),a("v-text-field",{attrs:{rules:[t.rules.required],color:"deep-purple",name:"senha",label:"Senha",type:"password"},model:{value:t.senha,callback:function(e){t.senha=e},expression:"senha"}}),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{to:"/forgot",text:"",small:"",color:"deep-purple"}},[t._v("Esqueci minha senha")])],1)],1),a("v-divider",{attrs:{light:""}}),a("v-card-actions",[a("v-btn",{attrs:{text:"",small:"",to:"/signup",color:"deep-purple"}},[t._v("Cadastre-se")]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.isComplete,color:"deep-purple"},on:{click:function(e){t.agreement=!0,t.dialog=!1,t.login()}}},[t._v("Entrar")])],1)],1)],1)],1)],1)],1)},u=[],d=(a("ac1f"),a("5319"),{name:"login",data:function(){return{nome:void 0,senha:void 0,color:"grey lighten",mode:"",snackbar:!1,text:"",timeout:6e3,x:null,y:"top",rules:{required:function(t){return!!t||"Required"}}}},computed:{isComplete:function(){return this.nome&&this.senha}},methods:{login:function(){var t=this;this.$store.dispatch("LOGIN",{nome:this.nome,senha:this.senha}).then((function(){t.$router.replace("/tasks"),t.$router.go()}),(function(e){t.snackbar=!0,t.text=e.response.data.message}))}}}),p=d,v=a("2877"),m=a("6544"),f=a.n(m),h=a("8336"),b=a("b0af"),g=a("99d9"),x=a("a523"),k=a("ce7e"),_=a("0e8f"),T=a("4bd4"),y=a("a722"),V=a("2db4"),w=a("2fa4"),C=a("8654"),S=a("71d9"),E=a("2a7f"),I=Object(v["a"])(p,c,u,!1,null,null,null),F=I.exports;f()(I,{VBtn:h["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VContainer:x["a"],VDivider:k["a"],VFlex:_["a"],VForm:T["a"],VLayout:y["a"],VSnackbar:V["a"],VSpacer:w["a"],VTextField:C["a"],VToolbar:S["a"],VToolbarTitle:E["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{8:"",12:"",xs:"",sm:"",md5:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"deep-purple"}},[a("v-toolbar-title",[t._v("Sign up")])],1),a("v-card-text",[a("v-text-field",{attrs:{color:"deep-purple",name:"nome",label:"Usuario",rules:[t.rules.required]},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),a("v-text-field",{attrs:{color:"deep-purple",name:"email",label:"Email",rules:[t.rules.required,t.rules.email]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{color:"deep-purple",name:"senha",label:"Senha",rules:[t.rules.required],type:"password"},model:{value:t.senha,callback:function(e){t.senha=e},expression:"senha"}}),a("v-text-field",{attrs:{color:"deep-purple",name:"confirm_password",label:"Confirme sua senha",rules:[t.rules.required],type:"password",error:!t.valid()},model:{value:t.confirm_password,callback:function(e){t.confirm_password=e},expression:"confirm_password"}}),a("v-form",[a("v-divider",{attrs:{light:""}}),a("v-card-actions",[a("v-btn",{attrs:{to:"/login",color:"deep-purple",text:""}},[t._v("Voltar")]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.isComplete,color:"deep-purple"},on:{click:function(e){return e.preventDefault(),t.register()}}},[t._v("Registrar")])],1)],1)],1),a("v-snackbar",{attrs:{bottom:"bottom"===t.y,color:t.color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)],1)],1)],1)},D=[],P={name:"signup",data:function(){return{email:"",nome:"",senha:"",password:"",confirm_password:"",color:"",mode:"",snackbar:!1,text:"",timeout:6e3,x:null,y:"top",rules:{required:function(t){return!!t||"Required"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}},computed:{isComplete:function(){return this.nome&&this.email&&this.senha&&this.confirm_password}},methods:{register:function(){var t=this;this.valid()&&this.$store.dispatch("REGISTER",{nome:this.nome,email:this.email,senha:this.senha}).then((function(e){t.text=e.data.message}),(function(e){t.snackbar=!0,t.text=e.response.data.message}))},valid:function(){return this.senha===this.confirm_password}}},R=P,j=Object(v["a"])(R,O,D,!1,null,null,null),L=j.exports;f()(j,{VBtn:h["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VContainer:x["a"],VDivider:k["a"],VFlex:_["a"],VForm:T["a"],VLayout:y["a"],VSnackbar:V["a"],VSpacer:w["a"],VTextField:C["a"],VToolbar:S["a"],VToolbarTitle:E["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-form",[a("v-snackbar",{attrs:{bottom:"bottom"===t.y,color:t.color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"write",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Fechar")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")]),a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"deep-purple"}},[a("v-toolbar-title",[t._v("Esqueci minha senha")])],1),a("v-card-text",[a("v-alert",{attrs:{text:"",dense:"",color:"deep-purple",border:"left"}},[t._v("Você receberá uma nova senha no email cadastrado.")]),a("v-text-field",{attrs:{color:"deep-purple",name:"email",label:"Email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-divider",{attrs:{light:""}}),a("v-card-actions",[a("v-btn",{attrs:{to:"/login",color:"deep-purple",text:""}},[t._v("Back")]),a("v-spacer"),a("v-btn",{attrs:{color:"deep-purple",dark:""},on:{click:function(e){return e.preventDefault(),t.sendEmail()}}},[t._v("Enviar")])],1)],1)],1)],1)],1)],1)},A=[],q={name:"forgot",data:function(){return{color:"grey lighten",mode:"",snackbar:!1,text:"",timeout:6e3,x:null,y:"top"}},methods:{sendEmail:function(){var t=this;this.$store.dispatch("FORGOT",{email:this.email}).then((function(){t.$router.push("/login")}),(function(e){t.snackbar=!0,t.text=e.response.data.message}))}}},M=q,U=a("0798"),G=Object(v["a"])(M,$,A,!1,null,null,null),H=G.exports;f()(G,{VAlert:U["a"],VBtn:h["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VContainer:x["a"],VDivider:k["a"],VFlex:_["a"],VForm:T["a"],VLayout:y["a"],VSnackbar:V["a"],VSpacer:w["a"],VTextField:C["a"],VToolbar:S["a"],VToolbarTitle:E["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",left:"",fluid:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-9"},[a("v-btn",{attrs:{block:"",color:"deep-purple",dark:""},on:{click:function(e){return e.preventDefault(),t.logout()}}},[t._v("Logout")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"deep-purple",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-dots-horizontal")])],1),a("v-toolbar-title",[t._v("KAIRÓS")]),a("v-spacer")],1),a("v-main",[a("v-container",{attrs:{fluid:"",align:"align-baseline",justify:"center"}},[[a("router-view")]],2)],1)],1)},K=[],B={name:"todo",props:{source:String},data:function(){return{drawer:null,items:[{icon:"mdi-view-dashboard",title:"Inicio",to:"/"},{title:"Tarefas ",icon:"mdi-clipboard-outline",to:"/tasks"},{icon:"mdi-account",title:"Usuario",to:"/user"},{title:"Notificações",icon:"mdi-bell",to:"/components/notifications"}]}},methods:{logout:function(){var t=this;this.$store.dispatch("LOGOUT",{}).then((function(){t.$router.push("login")}),(function(e){t.snackbar=!0,t.text=e.response.data.message}))}}},Z=B,N=a("7496"),Y=a("40dc"),J=a("5bc1"),W=a("132d"),Q=a("8860"),X=a("da13"),tt=a("5d23"),et=a("34c3"),at=a("f6c4"),nt=a("f774"),ot=Object(v["a"])(Z,z,K,!1,null,null,null),rt=ot.exports;f()(ot,{VApp:N["a"],VAppBar:Y["a"],VAppBarNavIcon:J["a"],VBtn:h["a"],VContainer:x["a"],VIcon:W["a"],VList:Q["a"],VListItem:X["a"],VListItemContent:tt["a"],VListItemIcon:et["a"],VListItemTitle:tt["b"],VMain:at["a"],VNavigationDrawer:nt["a"],VSpacer:w["a"],VToolbarTitle:E["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"overflow-hidden mx-auto",attrs:{flat:"",height:"570","max-width":"1500"}},[a("v-container",[a("v-row",{attrs:{dense:""}},t._l(t.items,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.src}})],1)],1)])],1)})),1)],1)],1)},lt=[],st={data:function(){return{items:[{color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"Gerenciar Tarefas",artist:"Foster the People"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Configurações de Usuario",artist:"Ellie Goulding"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Sobre o aplicativo",artist:"Ellie Goulding"}]}}},ct=st,ut=a("8212"),dt=a("62ad"),pt=a("adda"),vt=a("0fd9"),mt=Object(v["a"])(ct,it,lt,!1,null,null,null),ft=mt.exports;f()(mt,{VAvatar:ut["a"],VCard:b["a"],VCardSubtitle:g["b"],VCardTitle:g["d"],VCol:dt["a"],VContainer:x["a"],VImg:pt["a"],VRow:vt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"overflow-hidden mx-auto"},[a("v-app-bar",{attrs:{color:"grey lighten","elevate-on-scroll":"",dense:"",dark:""}},[a("v-btn",{attrs:{dark:"",text:"",icon:""},on:{click:t.prev}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-left")])],1),t.$refs.calendar?a("v-toolbar-title",[t._v(t._s(t.$refs.calendar.title))]):t._e(),a("v-btn",{attrs:{dark:"",text:"",icon:""},on:{click:t.next}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-right")])],1),a("v-spacer"),a("v-btn",{attrs:{text:"",small:""},on:{click:t.setToday}},[t._v("Hoje")]),a("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{small:"",fab:"",color:"deep-purple"}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-format-list-bulleted-square")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){t.type="day"}}},[a("v-list-item-title",[t._v("Day")])],1),a("v-list-item",{on:{click:function(e){t.type="week"}}},[a("v-list-item-title",[t._v("Week")])],1),a("v-list-item",{on:{click:function(e){t.type="month"}}},[a("v-list-item-title",[t._v("Month")])],1),a("v-list-item",{on:{click:function(e){t.type="4day"}}},[a("v-list-item-title",[t._v("4 days")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600","min-width":"700"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:function(e){t.salvar=!0,t.clear()}}},"v-btn",o,!1),n),[a("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Criar tarefa")])]),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-text-field",{attrs:{rules:t.titleRules,color:"deep-purple",name:"tipoTarefa",label:"Titulo tarefa",type:"text"},model:{value:t.tipoTarefa,callback:function(e){t.tipoTarefa=e},expression:"tipoTarefa"}})],1),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-textarea",{attrs:{"auto-grow":"",name:"descricao",label:"Descrição da tarefa (Opcional)",color:"deep-purple",rows:"1"},model:{value:t.descricao,callback:function(e){t.descricao=e},expression:"descricao"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{rules:t.dataInicialRules,color:"deep-purple",label:"Data inicial",hint:"MM/DD/YYYY format","persistent-hint":""},model:{value:t.dataInicial,callback:function(e){t.dataInicial=e},expression:"dataInicial"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[a("v-date-picker",{attrs:{color:"deep-purple","no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.data1,callback:function(e){t.data1=e},expression:"data1"}})],1)],1),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{color:"deep-purple",label:"Data final (Opcional)",hint:"MM/DD/YYYY format"},model:{value:t.dataFinal,callback:function(e){t.dataFinal=e},expression:"dataFinal"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-date-picker",{attrs:{color:"deep-purple","no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.data2,callback:function(e){t.data2=e},expression:"data2"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-dialog",{ref:"hora1",attrs:{"return-value":t.horaInicial,width:"290px",color:"deep-purple"},on:{"update:returnValue":function(e){t.horaInicial=e},"update:return-value":function(e){t.horaInicial=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{locale:"pt-br",rules:t.horaInicialRules,color:"deep-purple",label:"Hora Inicial",readonly:""},model:{value:t.horaInicial,callback:function(e){t.horaInicial=e},expression:"horaInicial"}},"v-text-field",o,!1),n))]}}]),model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[t.modal1?a("v-time-picker",{attrs:{locale:"pt-br",color:"deep-purple",format:"24hr","full-width":""},model:{value:t.horaInicial,callback:function(e){t.horaInicial=e},expression:"horaInicial"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"deep-purple"},on:{click:function(e){t.modal1=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"deep-purple"},on:{click:function(e){return t.$refs.hora1.save(t.horaInicial)}}},[t._v("OK")])],1):t._e()],1)],1),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-dialog",{ref:"hora2",attrs:{"return-value":t.horaFinal,width:"290px"},on:{"update:returnValue":function(e){t.horaFinal=e},"update:return-value":function(e){t.horaFinal=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{color:"deep-purple",label:"Hora Final (Opcional)",readonly:""},model:{value:t.horaFinal,callback:function(e){t.horaFinal=e},expression:"horaFinal"}},"v-text-field",o,!1),n))]}}]),model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[t.modal2?a("v-time-picker",{attrs:{locale:"pt-br",color:"deep-purple",format:"24hr","full-width":""},model:{value:t.horaFinal,callback:function(e){t.horaFinal=e},expression:"horaFinal"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"deep-purple"},on:{click:function(e){t.modal2=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"deep-purple"},on:{click:function(e){return t.$refs.hora2.save(t.horaFinal)}}},[t._v("OK")])],1):t._e()],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),t.salvar?a("v-sheet",[a("v-btn",{attrs:{color:"deep-purple",text:""},on:{click:function(e){t.dialog=!1,t.clear()}}},[t._v("Cancelar")]),a("v-btn",{attrs:{disabled:!t.isComplete,color:"deep-purple",text:""},on:{click:function(e){t.dialog=!1,t.postTarefa()}}},[t._v("Salvar")])],1):a("v-sheet",[a("v-btn",{attrs:{color:"deep-purple",text:""},on:{click:function(e){t.dialog=!1,t.clear()}}},[t._v("Cancelar")]),a("v-btn",{attrs:{disabled:!t.isComplete,color:"deep-purple",text:""},on:{click:function(e){t.dialog=!1,t.putTarefa()}}},[t._v("Atualizar")])],1)],1)],1)],1)],1),a("v-sheet",{attrs:{height:"600"}},[t.renderComponent?a("v-calendar",{ref:"calendar",attrs:{locale:"pt-br",color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}):t._e(),a("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[a("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[a("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[a("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.salvar=!1,t.edit()}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.deleteDialog=!0}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-card-text",[a("v-col",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),t.selectedEvent.end?a("v-col",{domProps:{innerHTML:t._s(t.selectedEvent.description)}}):t._e(),a("v-col",{domProps:{innerHTML:t._s(t.selectedEvent.start)}}),t.selectedEvent.end?a("v-col",{domProps:{innerHTML:t._s(t.selectedEvent.end)}}):t._e()],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v("Cancel")])],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Tem certeza que deseja excluir a tarefa selecionada?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("cancelar")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteDialog=!1,t.deletar()}}},[t._v("deletar")])],1)],1)],1),a("v-snackbar",{attrs:{bottom:"bottom"===t.y,color:t.color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"write",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Fechar")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)},bt=[],gt=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),a("4d90"),a("1276"),a("3835")),xt={name:"tasks",data:function(){return{renderComponent:!0,color:"deep-purple",mode:"",snackbar:!1,text:"",timeout:6e3,x:null,y:"top",salvar:!0,dialog:!1,deleteDialog:!1,data1:void 0,data2:void 0,menu1:!1,menu2:!1,horaInicial:void 0,horaFinal:void 0,modal1:!1,modal2:!1,status:"CONCLUIDA",descricao:void 0,tipoTarefa:void 0,usuario:void 0,id:void 0,focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["grey darken-1"],titleRules:[function(t){return!!t||"Titulo é obrigatorio"}],dataInicialRules:[function(t){return!!t||"Data inicial é obrigatória"}],horaInicialRules:[function(t){return!!t||"Hora inicial é obrigatória"}]}},computed:{isComplete:function(){return this.tipoTarefa&&this.horaInicial&&this.data1},dataInicial:function(){return this.data1},dataFinal:function(){return this.data2},computedDateFormatted:function(){return this.formatDate(this.date1)}},watch:{date1:function(){this.dateFormatted=this.formatDate(this.date1)}},beforeMount:function(){this.forceRerender()},methods:{forceRerender:function(){var t=this;this.renderComponent=!1,this.$nextTick((function(){t.renderComponent=!0}))},postTarefa:function(){var t=this;this.$store.dispatch("POST_TASK",{status:this.status,tipoTarefa:this.tipoTarefa,descricao:this.descricao,tempoInicial:this.dataInicial+"T"+this.horaInicial+":00Z",tempoFinal:this.authenticateFinal()}).then((function(e){e&&(t.snackbar=!0,t.text="Tarefa "+e.tipoTarefa+" foi criada.",t.forceRerender())}))},putTarefa:function(){var t=this;this.$store.dispatch("PUT_TASK",{id:this.selectedEvent.id,status:this.status,tipoTarefa:this.tipoTarefa,descricao:this.descricao,tempoInicial:this.dataInicial+"T"+this.horaInicial+":00Z",tempoFinal:this.authenticateFinal()}).then((function(e){e&&(t.snackbar=!0,t.text="Tarefa "+e.tipoTarefa+" foi atualizada.",t.forceRerender())}))},edit:function(){this.dialog=!0,this.tipoTarefa=this.selectedEvent.name,this.descricao=this.selectedEvent.description,this.data1=this.createDate(this.selectedEvent.start),this.horaInicial=this.createHour(this.selectedEvent.start),this.data2=null!=this.selectedEvent.end?this.createDate(this.selectedEvent.end):"",this.horaFinal=null!=this.selectedEvent.end?this.createHour(this.selectedEvent.end):""},deletar:function(){var t=this;this.$store.dispatch("DELETE_TASK",{id:this.selectedEvent.id}).then((function(e){204==e.status&&(t.snackbar=!0,t.text="Tarefa excluida com sucesso.",t.forceRerender())}))},clear:function(){this.tipoTarefa="",this.descricao="",this.data1="",this.data2="",this.horaInicial="",this.horaFinal=""},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(gt["a"])(e,3),n=a[0],o=a[1],r=a[2];return"".concat(o,"/").concat(r,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(gt["a"])(e,3),n=a[0],o=a[1],r=a[2];return"".concat(r,"-").concat(n.padStart(2,"0"),"-").concat(o.padStart(2,"0"))},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=this,a=t.nativeEvent,n=t.event,o=function(){e.selectedEvent=n,e.selectedElement=a.target,setTimeout((function(){return e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(o,10)):o(),a.stopPropagation()},authenticateFinal:function(){return this.dataFinal&&""!=this.horaFinal?this.dataFinal+"T"+this.horaFinal+":00Z":null==this.dataFinal&&this.horaFinal?this.dataInicial+"T"+this.horaFinal+":00Z":this.dataFinal&&""==this.horaFinal?this.dataFinal+"T"+this.horaInicial+":00Z":this.dataFinal&&this.horaFinal?null:void 0},createDate:function(t){var e=t.getFullYear()+"-"+(t.getMonth()<=9?"0"+(t.getMonth()+1):t.getMonth())+"-"+(t.getDate()<=9?"0"+t.getDate():t.getDate());return e},createHour:function(t){var e=t.getHours()+":"+(0==t.getMinutes()?"00":t.getMinutes());return e},timeZone:function(t){var e=new Date(t),a=new Date(e.valueOf()+6e4*e.getTimezoneOffset());return a},updateRange:function(){var t=this;this.$store.dispatch("GET_TASKS").then((function(e){for(var a=[],n=0;n<e.data.length;n++){var o=!0,r=t.timeZone(e.data[n].tempoInicial),i=null===e.data[n].tempoFinal?null:t.timeZone(e.data[n].tempoFinal);a.push({id:e.data[n].id,name:e.data[n].tipoTarefa,description:e.data[n].descricao,usuario:e.data[n].usuario,start:r,end:i,color:t.colors[t.rnd(0,t.colors.length-1)],timed:o})}t.events=a}))},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t}}},kt=xt,_t=a("a4f6"),Tt=a("2e4b"),yt=a("169a"),Vt=a("e449"),wt=a("8dd9"),Ct=a("a844"),St=a("c964"),Et=Object(v["a"])(kt,ht,bt,!1,null,null,null),It=Et.exports;f()(Et,{VAppBar:Y["a"],VBtn:h["a"],VCalendar:_t["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:dt["a"],VContainer:x["a"],VDatePicker:Tt["a"],VDialog:yt["a"],VIcon:W["a"],VList:Q["a"],VListItem:X["a"],VListItemTitle:tt["b"],VMenu:Vt["a"],VRow:vt["a"],VSheet:wt["a"],VSnackbar:V["a"],VSpacer:w["a"],VTextField:C["a"],VTextarea:Ct["a"],VTimePicker:St["a"],VToolbar:S["a"],VToolbarTitle:E["a"]});var Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"500px"},attrs:{flat:""}},[a("v-form",{ref:"form",staticClass:"pa-4 pt-6",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("v-text-field",{attrs:{filled:"",color:"deep-purple",label:"Usuario"},model:{value:t.usuario,callback:function(e){t.usuario=e},expression:"usuario"}}),a("v-text-field",{attrs:{rules:[t.rules.email],filled:"",color:"deep-purple",label:"Email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{staticStyle:{"min-height":"96px"},attrs:{rules:[t.rules.password,t.rules.length(6)],filled:"",color:"deep-purple",counter:"10",label:"Senha atual",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{staticStyle:{"min-height":"96px"},attrs:{rules:[t.rules.confirmPassword,t.rules.length(6)],filled:"",color:"deep-purple",counter:"10",label:"Nova Senha",type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$refs.form.reset()}}},[t._v("Clear")]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.form,loading:t.isLoading,color:"deep-purple accent-4",depressed:""}},[t._v("Submit")])],1),a("v-dialog",{attrs:{absolute:"","max-width":"400",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-3"},[t._v("Legal")]),a("v-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){t.agreement=!1,t.dialog=!1}}},[t._v("No")]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{color:"deep-purple accent-4"},on:{click:function(e){t.agreement=!0,t.dialog=!1}}},[t._v("Yes")])],1)],1)],1)],1)},Ot=[],Dt=(a("466d"),{data:function(){return{agreement:!1,dialog:!1,email:void 0,form:!1,isLoading:!1,password:void 0,phone:void 0,rules:{email:function(t){return(t||"").match(/@/)||"Please enter a valid email"},length:function(t){return function(e){return(e||"").length>=t||"Invalid character length, required ".concat(t)}},confirmPassword:function(t){return(t||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||"Password must contain an upper case letter, a numeric character, and a special character"},required:function(t){return!!t||"This field is required"}}}},methods:{getUser:function(){this.$store.dispatch("GET_USER")}}}),Pt=Dt,Rt=Object(v["a"])(Pt,Ft,Ot,!1,null,null,null),jt=Rt.exports;f()(Rt,{VBtn:h["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VDialog:yt["a"],VDivider:k["a"],VForm:T["a"],VSpacer:w["a"],VTextField:C["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-title",{staticClass:"text-center justify-center py-6"},[a("h1",{staticClass:"font-weight-bold display-3 basil--text"},[t._v("KAIROS")])]),a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e},[t._v(" "+t._s(e)+" ")])})),1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab-item",{key:e},[a("v-card",{attrs:{color:"basil",flat:""}},[a("v-card-text",[t._v(t._s(t.text))])],1)],1)})),1)],1)},$t=[],At={data:function(){return{tab:null,items:["Appetizers"],text:"O menage time foi criado pelo Alberto Lopes como um exercio de desenvolvimento de software utilizando Java e Spring Boot na construção do back-and e VueJs para o front-and, abaixo estará os o links do projeto no Github."}}},qt=At,Mt=a("71a3"),Ut=a("c671"),Gt=a("fe57"),Ht=a("aac8"),zt=Object(v["a"])(qt,Lt,$t,!1,null,null,null),Kt=zt.exports;f()(zt,{VCard:b["a"],VCardText:g["c"],VCardTitle:g["d"],VTab:Mt["a"],VTabItem:Ut["a"],VTabs:Gt["a"],VTabsItems:Ht["a"]}),n["a"].use(s["a"]);var Bt=new s["a"]({mode:"history",base:"/",routes:[{path:"/",component:rt,name:"todo",children:[{path:"/tasks",component:It,name:"tasks"},{path:"/init",component:ft,name:"init"},{path:"/user",component:jt,name:"user"},{path:"/about",component:Kt,name:"about"}]},{path:"/login",component:F,name:"login"},{path:"/signup",component:L,name:"singup"},{path:"/forgot",component:H,name:"forgot"}]});Bt.beforeEach((function(t,e,a){var n=["/login","/signup","/forgot"],o=!n.includes(t.path),r=localStorage.getItem("user");o&&!r?a("/login"):a()}));var Zt=Bt,Nt=a("2f62"),Yt=(a("d3b7"),"https://menage-time.herokuapp.com/"),Jt={mutations:{loginRequest:function(t,e){t.status={loggingIn:!0},t.user=e},loginSuccess:function(t,e){t.status={loggedIn:!0},t.user=e},loginFailure:function(t){t.status={},t.user=null},logout:function(t){t.status={},t.user=null}},actions:{LOGIN:function(t,e){var a=t.commit;return r.a.post(Yt+"login",{nome:e.nome,senha:e.senha}).then((function(t){return t&&(localStorage.setItem("user",t.data),a("loginSuccess",t)),Promise.resolve(t)}))},LOGOUT:function(t){var e=t.commit;localStorage.removeItem("user"),e("logout")},FORGOT:function(t,e){var a=t.commit;return a("loginRequest",e),r.a.post("/auth/forgot",e).then((function(t){return t.data}))},REGISTER:function(t,e){var a=t.commit;return r.a.post(Yt+"usuarios",{nome:e.nome,email:e.email,senha:e.senha}).then((function(t){return t&&a(t),Promise.resolve(t)}))},REFRESH_TOKEN:function(){return new Promise((function(t,e){r.a.post("token/refresh").then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},Wt="https://menage-time.herokuapp.com/",Qt={headers:{Authorization:"".concat(localStorage.getItem("user"))}},Xt={mutations:{taskRequest:function(t,e){t.data=e},taskSuccess:function(t,e){t.data=e},taskFailure:function(t,e){t.data=e}},actions:{GET_TASKS:function(){return r.a.get(Wt+"tarefas",Qt).then((function(t){return Promise.resolve(t)}))},POST_TASK:function(t,e){var a=t.commit;return console.log(e),r.a.post(Wt+"tarefas",{status:e.status,tipoTarefa:e.tipoTarefa,descricao:e.descricao,tempoInicial:e.tempoInicial,tempoFinal:e.tempoFinal},Qt).then((function(t){return t&&a("taskSuccess",t.data),Promise.resolve(t.data)}))},PUT_TASK:function(t,e){var a=t.commit;return console.log(e),r.a.put(Wt+"tarefas",{id:e.id,status:e.status,tipoTarefa:e.tipoTarefa,descricao:e.descricao,tempoInicial:e.tempoInicial,tempoFinal:e.tempoFinal},Qt).then((function(t){return t&&a("taskSuccess",t.data),Promise.resolve(t.data)}))},DELETE_TASK:function(t,e){var a=t.commit;return console.log(e.id),r.a.delete(Wt+"tarefas/"+e.id,Qt).then((function(t){return a("taskSuccess",t),Promise.resolve(t)}))}}},te="https://menage-time.herokuapp.com/",ee={headers:{Authorization:"".concat(localStorage.getItem("user"))}},ae={mutations:{},actions:{GET_USER:function(){return r.a.get(te+"usuario",ee).then((function(t){return Promise.resolve(t)}))},POST_USER:function(t,e){var a=t.commit;return r.a.post(te+"usuario",{status:e.status,tipoTarefa:e.tipoTarefa,descricao:e.descricao,tempoInicial:e.tempoInicial,tempoFinal:e.tempoFinal},ee).then((function(t){return t&&a(t),Promise.resolve(t)}))},PUT_USER:function(t,e){var a=t.commit;console.log(e),r.a.put(te+"usuario",{id:e.id,status:e.status,tipoTarefa:e.tipoTarefa,descricao:e.descricao,tempoInicial:e.tempoInicial,tempoFinal:e.tempoFinal},ee).then((function(t){return t&&a(t),Promise.resolve(t)}))},DELETE_USER:function(t,e){var a=t.commit;console.log(e.id),r.a.delete(te+"usuario"+e.id,ee).then((function(t){return t&&a(t),Promise.resolve(t)}))}}};n["a"].use(Nt["a"]);var ne=new Nt["a"].Store({modules:{auth:Jt,task:Xt,user:ae}}),oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},re=[],ie={name:"app",components:{}},le=ie,se=Object(v["a"])(le,oe,re,!1,null,null,null),ce=se.exports;f()(se,{VApp:N["a"]}),n["a"].config.productionTip=!1,r.a.defaults.baseURL="http://localhost:9000/",new n["a"]({router:Zt,store:ne,vuetify:l,render:function(t){return t(ce)}}).$mount("#app")}});
//# sourceMappingURL=app.a945c1d1.js.map