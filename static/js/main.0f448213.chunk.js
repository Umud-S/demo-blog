(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return d}));var a=n(95),r=n(0),o=n.n(r),i=n(69),c=n.n(i),u=n(88),s=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children;return o.a.createElement("div",null,o.a.createElement("div",{className:"".concat(c.a.formControl)},r,n&&a&&o.a.createElement("span",null,a)))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement(s,e,i?o.a.createElement("textarea",Object.assign({},t,r,{className:c.a.errorBorder})):o.a.createElement("textarea",Object.assign({},t,r)))},p=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement(s,e,i?o.a.createElement("input",Object.assign({},t,r,{className:c.a.errorBorder})):o.a.createElement("input",Object.assign({},t,r)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r))," ",i)}},11:function(e,t,n){e.exports={nav:"Navbar_nav__3g9sl",item:"Navbar_item__1zFi0",active:"Navbar_active__1S4Kb",setting:"Navbar_setting__37GA5",friends:"Navbar_friends__UV8jR",bestFriends:"Navbar_bestFriends__3aPHn"}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(36),r=n(9),o=(n(0),function(e){return{type:"ADD-MESSAGE",newText:e}}),i={messages:[{id:1,message:"salam"},{id:2,message:"Bu gun hardasiz"},{id:3,message:"ela kecdi"},{id:4,message:"Yalandan"}],dialogs:[{id:1,name:"Qowqar"},{id:2,name:"Evez"},{id:3,name:"Celil"},{id:4,name:"Ferrux"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:5,message:t.newText};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},131:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return O}));var a=n(7),r=n.n(a),o=n(17),i=n(36),c=n(9),u=(n(0),n(16)),s=function(e,t,n,a){return e.map((function(e){return e[n]==t?Object(c.a)({},e,{},a):e}))},l=function(e){return{type:"FOLLOW",userId:e}},p=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"SET_PER_PAGE",perPage:e}},f=function(e){return{type:"IS_LOADING",isLoadingStatus:e}},b=function(e,t){return{type:"IS_FOLLOW_CLICKED",isFollowClicked:e,userId:t}},g={users:[],currentPage:1,perPage:5,totalPage:112,isLoadingStatus:!1,isFollowClicked:[]},h=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(f(!0)),n.next=3,u.d.getUsers(e,t);case 3:o=n.sent,a(f(!1)),a({type:"SET_USERS",users:o.items}),a({type:"TOTAL_PAGE",totalPage:o.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,o)),e.next=3,n(o);case 3:0===e.sent.resultCode&&t(a(o)),t(b(!1,o));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,u.b.follow.bind(u.b),l,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,u.b.unfollow.bind(u.b),p,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(c.a)({},e,{users:Object(i.a)(t.users)});case"IS_FOLLOW_CLICKED":return Object(c.a)({},e,{isFollowClicked:t.isFollowClicked?[].concat(Object(i.a)(e.isFollowClicked),[t.userId]):e.isFollowClicked.filter((function(e){return e!=t.userId}))});case"FOLLOW":return Object(c.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(c.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});case"SET_PER_PAGE":return Object(c.a)({},e,{perPage:t.perPage});case"TOTAL_PAGE":return Object(c.a)({},e,{totalPage:t.totalPage});case"IS_LOADING":return Object(c.a)({},e,{isLoadingStatus:t.isLoadingStatus});default:return e}}},133:function(e,t,n){e.exports={content:"News_content__xOvo7"}},134:function(e,t,n){e.exports={content:"Music_content__14BFx"}},135:function(e,t,n){e.exports={content:"Settings_content__c63Wk"}},136:function(e,t,n){e.exports=n.p+"static/media/preview.6ce3ffad.gif"},137:function(e,t,n){e.exports=n.p+"static/media/video-full.e644cfb3.mp4"},140:function(e,t,n){e.exports={item:"Post_item__140e6"}},142:function(e,t,n){e.exports=n.p+"static/media/su-logo.c44cf7ec.jpg"},143:function(e,t,n){e.exports={wrapper:"Login_wrapper__3NXLr"}},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(141),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"e7a0392c-1e96-45ae-a727-e10d75ccea3e"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))}},i={auth:function(){return r.get("/auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logOut:function(){return r.delete("auth/login").then((function(e){return e.data}))}},c={getProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8111;return r.get("/profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8111;return r.get("/profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("/profile/status/",{status:e}).then((function(e){return e.data}))},uploadUserPhote:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{header:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))},updateProfile:function(e){return r.put("/profile",e).then((function(e){return e.data}))}},u={follow:function(e){return r.post("/follow/".concat(e),{withCredintals:!0}).then((function(e){return e.data}))},unfollow:function(e){return r.delete("/follow/".concat(e),{withCredintals:!0}).then((function(e){return e.data}))}}},169:function(e,t,n){e.exports=n(295)},174:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t.length>e?"Max Length is ".concat(e," Symbols"):void 0}}},294:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(64),i=n.n(o),c=n(14),u=n(30),s=n(31),l=n(33),p=n(32),d=(n(174),n(11)),m=n.n(d),f=function(){return r.a.createElement("nav",{className:m.a.nav},r.a.createElement("div",{className:"".concat(m.a.item)},r.a.createElement(c.b,{to:"/profile",activeClassName:m.a.active},"Profile")),r.a.createElement("div",{className:m.a.item},r.a.createElement(c.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),r.a.createElement("div",{className:m.a.item},r.a.createElement(c.b,{to:"/news",activeClassName:m.a.active},"News")),r.a.createElement("div",{className:m.a.item},r.a.createElement(c.b,{to:"/music",activeClassName:m.a.active},"Music")),r.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.setting)},r.a.createElement(c.b,{to:"/settings",activeClassName:m.a.active},"Settings")),r.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.friends)},r.a.createElement(c.b,{to:"/friends",activeClassName:m.a.active},"Users"),r.a.createElement("div",null,r.a.createElement("img",{className:m.a.bestFriends,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq6XuprtGiXlgg_1YyFrsStfsMu04OPiGgsz9Qt7pIEj97hApB&usqp=CAU"}),r.a.createElement("img",{className:m.a.bestFriends,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRev7YEMleo9OSB4DzSqjyF7xqGrugs_jQq79Z36l4Er-vXSPUW&usqp=CAU"}),r.a.createElement("img",{className:m.a.bestFriends,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAd9s673mkDy8lJrKdePBux2hqvRaP1_jWCneE_YzWfjLp1LBR&usqp=CAU"}))))},b=n(37),g=n(133),h=n.n(g),E=function(e){return r.a.createElement("div",{className:h.a.content},"News")},v=n(134),O=n.n(v),A=function(e){return r.a.createElement("div",{className:O.a.content},"Music")},S=n(135),j=n.n(S),P=function(e){return r.a.createElement("div",{className:j.a.content},"Settings")},w=n(51),_=n(38),y=n.n(_),k=n(65),N=n(137),x=n.n(N),I=function(e){var t=Object(a.useState)(!1),n=Object(w.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(e.status),u=Object(w.a)(c,2),s=u[0],l=u[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.status},!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){i(!0)}}," Status : ",s||"-----")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(t){i(!1),l(t.currentTarget.value),e.updateStatus(s)},value:s}))))},L=n(96),C=n.n(L),T=n(109),R=n(129),D=n(10),G=n(22),F=function(e){var t=e.profile,n=e.updateProfile,o=e.isLoadingStatus,i=e.status,c=e.updateStatus,u=e.isOwnerMe,s=e.uploadPhoto,l=(e.getProfile,Object(a.useState)(!1)),p=Object(w.a)(l,2),d=p[0],m=p[1],f=Object(R.a)({form:"profileEditForm",initialValues:t,destroyOnUnmount:!1,enableReinitialize:!0})((function(e){var n=e.handleSubmit,a=e.error;return r.a.createElement(T.a,{onSubmit:n},r.a.createElement("div",null,r.a.createElement("button",null,"Save Changes")),a&&r.a.createElement("div",null,a),Object(D.c)("Full Name","fullName",D.a,[G.b],{},""),Object(D.c)("About Me","aboutMe",D.a,[G.b],{},""),Object(D.c)("LookingForAJob","lookingForAJob",D.a,[],{type:"checkbox"},"Looking for Job"),Object(D.c)("LookingForAJobDescription","lookingForAJobDescription",D.b,[G.b]),r.a.createElement("p",null,"Contacts :"),Object.keys(t.contacts).map((function(e){return r.a.createElement("b",{key:e},e," :",Object(D.c)(e,"contacts."+e,D.a,[],{}))})))})),b=function(e){var t=e.userId,n=e.fullName,a=e.aboutMe,o=e.lookingForAJob,i=e.lookingForAJobDescription,c=e.contacts;return r.a.createElement("div",{key:t},r.a.createElement("div",{className:y.a.descriptionText},r.a.createElement("p",null,r.a.createElement("b",null,"Full Name :")," ",n),r.a.createElement("p",null,r.a.createElement("b",null,"About Me :")," ",a),r.a.createElement("p",null,r.a.createElement("b",null,"LookingForAJob :"),o?" yes":" no"),r.a.createElement("p",null,r.a.createElement("b",null,"LookingForAJobDescription :")," ",i),r.a.createElement(g,c)))},g=function(e){return r.a.createElement("div",null,r.a.createElement("details",null,r.a.createElement("summary",null,"Contacts"),Object.keys(e).map((function(t){return r.a.createElement("option",{key:t},t," : ",e[t])}))))},h=function(e){e.target.files.length&&s(e.target.files[0])},E=function(e){var t=e.photos;return r.a.createElement("div",{className:y.a.logo},r.a.createElement("label",{htmlFor:"newLogoUpload"},r.a.createElement("img",{src:t.small?t.small:C.a,alt:"click to change user photo"})),u&&r.a.createElement("input",{id:"newLogoUpload",type:"file",className:y.a.hiddenInputFile,onChange:h}))};return r.a.createElement("div",{key:t.userId},r.a.createElement("div",{className:y.a.content__img},r.a.createElement("video",{loop:!0,autoPlay:!0},r.a.createElement("source",{src:x.a,type:"video/mp4"}))),o?r.a.createElement(k.a,null):"",!d&&r.a.createElement("div",{className:y.a.description},r.a.createElement(E,t),r.a.createElement(b,t),u&&r.a.createElement("button",{onClick:function(){m(!0)}},"Edit Mode")),d&&r.a.createElement(f,{onSubmit:function(e){n(e).then((function(){m(!1)}))}}),r.a.createElement(I,{status:i,updateStatus:c}))},B=n(94),U=n.n(B),J=n(140),M=n.n(J),z=function(e){return r.a.createElement("div",{className:M.a.item},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd0r25XODQ5SftBiGJzxDRVzMw6B19B-ZCcM29kpo3c3Zpv3Nphd8igSxpbA&usqp=CAU",alt:"profil"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like -",e.likes)))},X=Object(G.a)(10),H=Object(R.a)({form:"addPostForm"})((function(e){var t=e.handleSubmit;return r.a.createElement(T.a,{onSubmit:t},Object(D.c)("Write Post","myPostAddText",D.b,[G.b,X]),r.a.createElement("div",null,r.a.createElement("button",{className:U.a.buttonPostAdd},"Add Post")))})),K=function(e){var t=e.posts.map((function(e){return r.a.createElement(z,{key:e.id,message:e.message,likes:e.likes})}));return r.a.createElement("div",{className:U.a.posts},r.a.createElement("h3",null,"My posts"),r.a.createElement(H,{onSubmit:function(t){e.addPost(t.myPostAddText)}}),t)},V=n(7),Y=n.n(V),Q=n(17),q=n(36),Z=n(9),W=n(16),$=n(26),ee=function(e){return{type:"ADD-POST",newText:e}},te=function(e){return{type:"IS_LOADING",isLoadingStatus:e}},ne=function(e){return{type:"SET_STATUS",status:e}},ae=function(e){return{type:"CHANGE_USER_PHOTO",photoFile:e}},re={posts:[{id:1,message:"salam",likes:15},{id:2,message:"Eleyke salam",likes:35}],profile:[],isLoadingStatus:!0,status:"status no loaded yet"},oe=function(e){return function(){var t=Object(Q.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(te(!0)),t.next=3,W.c.getProfile(e);case 3:a=t.sent,n(te(!1)),n({type:"SET-PROFILE",profile:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PROFILE":return Object(Z.a)({},e,{profile:[t.profile]});case"SET_STATUS":return Object(Z.a)({},e,{status:t.status});case"IS_LOADING":return Object(Z.a)({},e,{isLoadingStatus:t.isLoadingStatus});case"ADD-POST":var n={id:3,message:t.newText,likes:0};return Object(Z.a)({},e,{posts:[].concat(Object(q.a)(e.posts),[n])});case"DELETE_POST":return Object(Z.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"CHANGE_USER_PHOTO":return Object(Z.a)({},e,{profile:Object(q.a)(e.profile),photos:t.photoFile});default:return e}},ce=n(12),ue=Object(ce.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:ee})(K),se=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,0!=e.profile.length&&r.a.createElement(F,{profile:e.profile[0],getProfile:e.getProfile,isLoadingStatus:e.isLoadingStatus,isAuth:e.isAuth,status:e.status,isOwnerMe:e.isOwnerMe,updateStatus:e.updateStatus,uploadPhoto:e.uploadPhoto,updateProfile:e.updateProfile}),r.a.createElement(ue,null)))},le=function(e){return{isAuth:e.auth.isAuth}},pe=n(8),de=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidUpdate",value:function(e,t){if(e.match.params.userId!=this.props.match.params.userId){var n=this.props.match.params.userId;this.props.getProfile(n),this.props.getStatus(n)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(se,Object.assign({},this.props,{isOwnerMe:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,uploadPhoto:this.props.uploadPhoto,getProfile:this.props.getProfile,updateProfile:this.props.updateProfile})))}}]),n}(r.a.Component),me=Object(pe.d)(Object(ce.b)((function(e){return{profile:e.profilePage.profile,isLoadingStatus:e.profilePage.isLoadingStatus,status:e.profilePage.status,loggedUserId:e.auth.userId,isAuth:e.auth.isAuth,photos:e.profilePage.photos}}),{addPost:ee,getProfile:oe,getStatus:function(e){return function(){var t=Object(Q.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(te(!0)),t.next=3,W.c.getStatus(e);case 3:a=t.sent,n(te(!1)),n(ne(a));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(Q.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(te(!0)),t.next=3,W.c.updateStatus(e);case 3:a=t.sent,n(te(!1)),0===a.resultCode&&n(ne(e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},uploadPhoto:function(e){return function(){var t=Object(Q.a)(Y.a.mark((function t(n,a){var r,o;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,n(te(!0)),t.next=4,W.c.uploadUserPhote(e);case 4:o=t.sent,n(te(!1)),0===o.resultCode&&(n(ae(o.data.photos)),n(oe(r)));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},updateProfile:function(e){return function(){var t=Object(Q.a)(Y.a.mark((function t(n,a){var o,i,c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.id,n(te(!0)),t.next=4,W.c.updateProfile(e);case 4:if(i=t.sent,n(te(!1)),0!==i.resultCode){t.next=10;break}n(oe(o)),t.next=13;break;case 10:return c=i.messages.map((function(e){return r.a.createElement("p",null,e)})),n(Object($.a)("profileEditForm",{_error:[c]})),t.abrupt("return",Promise.reject([c]));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),b.f,(function(e){var t=function(t){Object(l.a)(a,t);var n=Object(p.a)(a);function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(b.a,{to:"/login"})}}]),a}(r.a.Component);return Object(ce.b)(le)(t)}))(de),fe=n(71),be=n.n(fe),ge=n(142),he=n.n(ge),Ee=function(e){var t=e.isAuth,n=e.login,a=e.logOutMe;return r.a.createElement("header",{className:be.a.header},r.a.createElement("img",{className:be.a.logoBrand,src:he.a}),r.a.createElement("div",{className:be.a.loginBlock},t?r.a.createElement("div",{style:{margin:1}},"User : ",n,r.a.createElement("button",{onClick:a}," Logout")):r.a.createElement(c.b,{to:"/login"},"Login")))},ve=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},Oe={userId:null,email:null,login:null,isAuth:!1,isLoadingStatus:!1},Ae=function(){return function(){var e=Object(Q.a)(Y.a.mark((function e(t){var n,a,r,o,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.auth();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.login,i=a.email,t(ve(r,i,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(Z.a)({},e,{},t.payload,{isAuth:t.payload.isAuth});case"IS_LOADING":return Object(Z.a)({},e,{isLoadingStatus:t.isLoadingStatus});default:return e}},je=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(Ee,this.props)}}]),n}(r.a.Component),Pe=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOutMe:function(){return function(){var e=Object(Q.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.logOut();case 2:0===e.sent.resultCode&&t(ve(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(je),we=n(143),_e=n.n(we),ye=Object(G.a)(20),ke=Object(R.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("div",{className:_e.a.wrapper},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:t},Object(D.c)("Email","email",D.a,[G.b]),Object(D.c)("Password","password",D.a,[G.b,ye],{type:"password"}),Object(D.c)(null,"rememberMe",D.a,[],{type:"checkbox"},"remember me"),n&&r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement("button",null,"Login"))))})),Ne=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginMe:function(e,t,n){return function(){var a=Object(Q.a)(Y.a.mark((function a(o){var i,c;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.a.login(e,t,n);case 2:0===(i=a.sent).resultCode?o(Ae()):(c=i.messages.map((function(e){return r.a.createElement("p",null,e)})),o(Object($.a)("login",{_error:[c]})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.loginMe;return e.isAuth?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement(ke,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))})),xe={initialised:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL":return Object(Z.a)({},e,{initialised:!0});default:return e}},Le=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:" Loading... "},r.a.createElement(e,t))}},Ce=r.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,301))})),Te=r.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Re=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initialiseAPP()}},{key:"render",value:function(){return this.props.initialised?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Pe,null),r.a.createElement(f,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(b.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(b.b,{path:"/dialogs",render:Le(Te)}),r.a.createElement(b.b,{path:"/news",component:E}),r.a.createElement(b.b,{path:"/music",component:A}),r.a.createElement(b.b,{path:"/settings",component:P}),r.a.createElement(b.b,{path:"/friends",render:Le(Ce)}),r.a.createElement(b.b,{path:"/login",render:function(){return r.a.createElement(Ne,null)}}))):r.a.createElement(k.a,null)}}]),n}(r.a.Component),De=Object(pe.d)(b.f,Object(ce.b)((function(e){return{initialised:e.app.initialised}}),{initialiseAPP:function(){return function(e){var t=e(Ae());Promise.all([t]).then((function(){e({type:"SET_INITIAL"})}))}}}))(Re);n(294),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=n(128),Fe=n(131),Be=n(144),Ue=n(130),Je=Object(pe.c)({profilePage:ie,messagePage:Ge.b,friendsPage:Fe.a,auth:Se,form:Ue.a,app:Ie}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ze=Object(pe.e)(Je,Me(Object(pe.a)(Be.a)));window.__store=ze;var Xe=ze;i.a.render(r.a.createElement(c.a,{basename:"/demo-blog"},r.a.createElement(ce.a,{store:Xe},r.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports={content:"ProfileInfo_content__2XV8X",content__img:"ProfileInfo_content__img__2bTSm",description:"ProfileInfo_description__16ag5",logo:"ProfileInfo_logo__1UuR1",descriptionText:"ProfileInfo_descriptionText__22zLn",status:"ProfileInfo_status__EQ_s_",hiddenInputFile:"ProfileInfo_hiddenInputFile__3pBTn"}},65:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(136),i=n.n(o),c=n(90),u=n.n(c);t.a=function(){return r.a.createElement("div",{className:u.a.loadingDiv},r.a.createElement("img",{className:u.a.loadingImg,src:i.a,alt:""}))}},69:function(e,t,n){e.exports={formControl:"FormControls_formControl__2gXJw",errorBorder:"FormControls_errorBorder__xLZwF"}},71:function(e,t,n){e.exports={header:"Header_header__1_Mgi",loginBlock:"Header_loginBlock__1AgGf",logoBrand:"Header_logoBrand__2dVN6"}},90:function(e,t,n){e.exports={loadingDiv:"ShowLoadingAnimation_loadingDiv__L9hzp",loadingImg:"ShowLoadingAnimation_loadingImg__LSh0a"}},94:function(e,t,n){e.exports={posts:"MyPosts_posts__1XXB7",buttonPostAdd:"MyPosts_buttonPostAdd__3bJ8B"}},96:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAB6CAMAAAC/Z0whAAABJlBMVEX///+e0dIebbDxnlAPER4REiQiXpwda6wRDyDTg0T5+fkaGiAAAAAMDiKZz9DmvJ8AABvRfTeu2Nnl8vLF4+P3olK33N2j19gACByb1NcAYavW6uvv9/cAABMAZq0VVpkAR5EAAA05TFB6oKFkhYbnmE7Zj0qlbT26ekLIkWTOh06+v6htqcODuMdpm7ZRhayRxMs5cKNGfrebvc1XfK1ymsabss80dbRri7XS3euGoL93lrtdXWY3N0BCQkiNjpJpanKLt7grNz5HXGAhKzJRa24oHiKGWTVnRSxGLyZyk5aXYzlVOio1JSN0TzKzxbldLxSbVyLInnbApYfYeSvWm2Xro17YrXzlp2nLtpb3mkK4qpLhxK0AVae4yd4kJDKur7J7fIQpuOgsAAAHf0lEQVRoge2a+V/aSBjGCUJsMLDhCCEKocghtVWRth5tOLyP2rpr223rbmX5//+JnVyQzMw7M0H7y3729UBhmC/PM+/7ThJIJP6P/+O/GdXiWqlcLnhRLpfWitVfSVsrF3IopHk4/xbKa7+EWiwZEZYU4Rql4tPiqiUJxAVQqfR0StcKHFwALaw9DU8SwflQ6fHMYkGc5zILj1vQajkez2WWH7GecQwNIRe2thrT0BCzsJDMIk+gkTsyQJkLrOYaT6BxdNw4gmXGdrbEEyi1GjW1BYlEyFI8IC9HkUA1lVKbhgEyc+U4QHbOGMbRiVpLoVg/azVzEDRXeBKgI6q57vFSqVqtoarr1wBTHAlaahi5ZmtdDXh+1FS1JVGZosZCSWPkrk9VtRHFedEAckgsfYCyMHpnDZUC80NdpxanSJEUAeB1qgHzHG9XmlQktxVU6Y5KJwx9gbV0Z3kND8gaASBylobkZQ99EY2WCBAhzyg5y15KwNOeEM9BHjdzJJTlK91TUYkuc+XkrCXuK5Snx7QahKKm4nXCyFeoK8fgue0dfz7Y7cAt8VEKJUbyADzjml37EYGn9OOCeBKNGApb9CkAkQUA2IQzVatUohKhdaGuZBWSeBLN1BDj/OLy6lxzwr+jcQ3tzrSaBDcpDHgZYrb1pXYHRfuTx6ydQETatgX4IeVmpnoeLm1eBZK0DX3JDf2Df9cpeNhDAoHql6SjgNjduHEs7OpLF5ons/Kx7RO7PvEZeARLdgHwcNEnVj7qur60uXF51dF1JNNlap88kfqm77QKOkXaCtoREG+cyRFVbzs33Y8uU/vgIdvnHKJkiGbqjDhbM99HvXujIaiP1G98kfDhK56tjGNwj/issxQNJLZ7WdFqN85a6hvuQtaOYSJuaxm2Iz03lYDq7c2ND3Nba2fwaQG+ZwENB8Xt7+6CdSlEn+reXDgitT9uwXmwtgMvo3nn1Jp2CQBn0V5BL0xTPpvQRNhCgtUomZsKIlY6PKKzkpXz/AuYGK1I+GzRVJSrCuhpGHmhaRfKJkyM7h9wqiLiBlYZUFxqCosYTVY4VZGrioBCV2VXUWBXsWRlEO8UpS0ERKHk4czBiHBxmC/zwsS2kr+FiQVBoiR9iUOEgeJE8y6PNziQyDI1hkYpnxck5hUGMAbRvH0hSPzKet1xNErmn2JEiSUxHvGbUEF+ZwIxIlyPLvHlvQDw/gebiHUAzjUqkfrQ4Z3KCeykjnMZTshWjqlYX+VcaTRv+bbyTMX2DnhH9uM7XyNnBmxHhi6qzERyc4cnkbgcwC4PAZFt3gT46RUvWXkryZVIXH/gXqQ2v7GQ+neeROKklZs6ksRqdTpjX/SJxBkkF2jewjV5/5IHJM87uJfiWfnKz1PauRV8xDpH/qAj779xgdSrSNwnOUiasboAkHp9hW8rQtKOP74KAKnXAQSyVTJfkEdZ+b9EiNTrj9y24x5lKVGZHSXPz1PoypxI7nzOK4rSCXS2O+g/1iHqTCJw9RE+2wxrxEOESBajqEjnlIAg8l2FL7ByVxJlDknkZw78bhJbpGEYZp6ML3cm4x06tkR4zzKk3tYrJ36jxN/OA1s9+ltXEuf9hwxdW+5Vf9latSzrJ+3VHv5Ej1jJ/Z0tia41wyCS26SBxG3vW0kvrD3Kc/b8R63V/varrRwO5b11hfm6tSPXrYCH4g3lKf35w5ZVl5FUYU+dCPtq9HbrspwMxyrZrYqrkRGyXN/thXUyPXUnmIk0thEvCkyuPhBPeIgSEVKub8+Q/Pfm5ktp7JDApPWWGH+ADXGRO4bYInrhbVsecBmfLomblLGIIXOk6Fv0DtKzFJeIbD3EBuOmolgOjBX/TABK2J4LJCVa77Cxb0mNjki53ov1iYCysStTJSaT/aitmT5ljCNS3jVifQThNSCRsPWQNDUQ+ToOMPEGkphcjbadPYqpvkhatwDj8DlIxNrOG+oYl/gcTzJWvANNRRGu6SIwxrUVTzJWuAoBYqTtUGpjRpRlcSDL1GjbodXGIrbu1RnE5P68m1f3gTGerbS9jR4HDFMj9UGvjZmtB6LADGsZI22HXhsz4i53pwq8Yi1jMtx2aA0nRHwu+iE2ZuI4IgNbD0GJPlE0dR6YiRM62oFqIyDWyf2bHuxURdH3Bx5wNAon6zse0W87VcYIOVbXeS9ziH7beYAl+k3nvSDxgEf02w7UcOYaRQuSS/SPdsCGM9P4dES3Phi1EZvIzRy3PuCGk2S6miHD17jMiP1EJtFnDfA1UmZPrJCResaNLBqm8YelKLMnsmSknfB+gxEM4wRl9oQ3u/uFQpugH/eBiciEiwQianbaHqQG9mQ4OR1Npzb6YzgdjheeUvNesvNb80SiezQvPGIWAcZjezweTu3paIS+R8PiYGFg1rYHTowHg4mdnTh/2uOhPXa/NJeYzo5s20b3DaYD2yf+M9YWJdbGYyRgNJ6iGA3QzRjZhhTZ6GbU8IkTbYgsTQ2z6cGgNhloE2TywhodV93EQpail438TE8mk7SGEkNzsi2UOe531vsWy8RYEcyYePKZefEvI6kS9OE+tlgAAAAASUVORK5CYII="}},[[169,1,2]]]);
//# sourceMappingURL=main.0f448213.chunk.js.map