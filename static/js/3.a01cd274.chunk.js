(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,t,a){e.exports={wrapper:"Users_wrapper__okm4y",logo:"Users_logo__1-pgP",imgLogo:"Users_imgLogo__xL3cr",buttonFollow:"Users_buttonFollow__2dySL",content:"Users_content__209Jf",nameStatus:"Users_nameStatus__2-fes",countryCity:"Users_countryCity__21P2T",contentBorder:"Users_contentBorder__20xyj",buttonReadMore:"Users_buttonReadMore__37Bh2",friendsContent:"Users_friendsContent___0ztY"}},299:function(e,t,a){e.exports={active:"Paginator_active__34QcS",pagination:"Paginator_pagination__Jjxaq",changeButton:"Paginator_changeButton__3o4Y2",pageSummary:"Paginator_pageSummary__3te70"}},302:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(30),o=a(32),s=a(31),l=a(0),c=a.n(l),i=a(11),u=a(132),p=a(298),g=a.n(p),m=a(14),f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:g.a.wrapper},c.a.createElement("span",{className:g.a.contentBorder},c.a.createElement("div",{className:g.a.logo},c.a.createElement(m.b,{to:"/profile/".concat(this.props.id)},c.a.createElement("img",{className:g.a.imgLogo,src:this.props.img,alt:"logo"})),this.props.isFollowed?c.a.createElement("button",{disabled:this.props.isFollowClicked.some((function(t){return t==e.props.id})),onClick:function(){e.props.unfollowUser(e.props.id)},className:g.a.buttonFollow},"Follow"):c.a.createElement("button",{disabled:this.props.isFollowClicked.some((function(t){return t==e.props.id})),onClick:function(){e.props.followUser(e.props.id)},className:g.a.buttonFollow},"Unfollow"))),c.a.createElement("div",{className:g.a.contentBorder},c.a.createElement("div",{className:g.a.content},c.a.createElement("div",{className:g.a.nameStatus},c.a.createElement("span",null,this.props.fullname),c.a.createElement("span",null,this.props.status)),c.a.createElement("div",{className:g.a.countryCity},c.a.createElement("span",null,"this.props.country"),c.a.createElement("span",null,"this.props.city")))))}}]),a}(c.a.Component),d=a(97),P=a.n(d),_=a(64),h=a(88),b=a(299),C=a.n(b),w=a(301),E=function(e){for(var t=e.totalPage,a=e.perPage,n=e.onPageChanged,r=e.currentPage,o=e.pageInterval,s=Math.ceil(t/a),i=[],u=1;u<=s;u++)i.push(u);var p=Object(l.useState)(1),g=Object(h.a)(p,2),m=g[0],f=g[1],d=Object(l.useState)(o),P=Object(h.a)(d,2),_=P[0],b=P[1],E=i.map((function(e){if(e<=_&&e>=m)return c.a.createElement("span",{onClick:function(){n(e)},className:r==e&&C.a.active},e)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:C.a.pagination},m>=o+1?c.a.createElement("button",{className:C.a.changeButton,onClick:function(){f(m-o),b(_-o)}},c.a.createElement(w.b,null)):"",E,c.a.createElement("ins",{className:C.a.pageSummary}," >>",s," "),_>=s?" ":c.a.createElement("button",{className:C.a.changeButton,onClick:function(){f(m+o),b(_+o)}},c.a.createElement(w.a,null))))},v=c.a.memo((function(e){var t=e.users.map((function(t){return c.a.createElement(f,{key:t.id,img:t.photos.small?t.photos.small:P.a,fullname:t.name,status:t.status?t.status:"Test",isFollowed:t.followed,id:t.id,isFollowClicked:e.isFollowClicked,followUser:e.followUser,unfollowUser:e.unfollowUser})}));return c.a.createElement("div",{className:g.a.friendsContent},e.isLoadingStatus?c.a.createElement(_.a,null):"",c.a.createElement(E,{totalPage:e.totalPage,perPage:e.perPage,currentPage:e.currentPage,onPageChanged:e.onPageChanged,pageInterval:20}),t,c.a.createElement("button",{onClick:e.onMoreButtonClick,className:g.a.buttonReadMore},"Show More.."))})),k=a(7),y=a(300),U=function(e){return e.friendsPage.currentPage},j=function(e){return e.friendsPage.perPage},N=function(e){return e.friendsPage.totalPage},O=function(e){return e.friendsPage.isLoadingStatus},F=function(e){return e.friendsPage.isFollowClicked},S=Object(y.a)((function(e){return e.friendsPage.users}),(function(e){return e.filter((function(e){return!0}))})),B=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var a=e.props,n=a.getUsers,r=a.currentPage,o=a.perPage,s=a.setCurPage;t!=r&&(s(t),n(t,o))},e.onMoreButtonClick=function(){var t=e.props,a=t.getUsers,n=t.currentPage,r=t.perPage;(0,t.setPerPage)(r+5),a(n,r+5)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.perPage)}},{key:"render",value:function(){return c.a.createElement(v,Object.assign({},this.props,{onPageChanged:this.onPageChanged,onMoreButtonClick:this.onMoreButtonClick}))}}]),a}(c.a.Component);t.default=Object(k.d)(Object(i.b)((function(e){return{users:S(e),currentPage:U(e),perPage:j(e),totalPage:N(e),isLoadingStatus:O(e),isFollowClicked:F(e)}}),{followUser:u.b,unfollowUser:u.f,setCurPage:u.d,setPerPage:u.e,getUsers:u.c}))(B)}}]);
//# sourceMappingURL=3.a01cd274.chunk.js.map