(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{299:function(e,a,t){e.exports={active:"Paginator_active__34QcS",pagination:"Paginator_pagination__Jjxaq",changeButton:"Paginator_changeButton__3o4Y2",pageSummary:"Paginator_pageSummary__3te70"}},302:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t(26),o=t(28),s=t(27),l=t(0),c=t.n(l),i=t(11),u=t(133),p=t(15),g=t.n(p),m=t(13),f=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:g.a.wrapper},c.a.createElement("span",{className:g.a.contentBorder},c.a.createElement("div",{className:g.a.logo},c.a.createElement(m.b,{to:"/profile/".concat(this.props.id)},c.a.createElement("img",{className:g.a.imgLogo,src:this.props.img,alt:"logo"})),this.props.isFollowed?c.a.createElement("button",{disabled:this.props.isFollowClicked.some((function(a){return a==e.props.id})),onClick:function(){e.props.unfollowUser(e.props.id)},className:g.a.buttonFollow},"Follow"):c.a.createElement("button",{disabled:this.props.isFollowClicked.some((function(a){return a==e.props.id})),onClick:function(){e.props.followUser(e.props.id)},className:g.a.buttonFollow},"Unfollow"))),c.a.createElement("div",{className:g.a.contentBorder},c.a.createElement("div",{className:g.a.content},c.a.createElement("div",{className:g.a.nameStatus},c.a.createElement("span",null,this.props.fullname),c.a.createElement("span",null,this.props.status)),c.a.createElement("div",{className:g.a.countryCity},c.a.createElement("span",null,"this.props.country"),c.a.createElement("span",null,"this.props.city")))))}}]),t}(c.a.Component),d=t(98),P=t.n(d),h=t(44),b=t(48),E=t(299),v=t.n(E),C=t(301),w=function(e){for(var a=e.totalPage,t=e.perPage,n=e.onPageChanged,r=e.currentPage,o=e.pageInterval,s=Math.ceil(a/t),i=[],u=1;u<=s;u++)i.push(u);var p=Object(l.useState)(1),g=Object(b.a)(p,2),m=g[0],f=g[1],d=Object(l.useState)(o),P=Object(b.a)(d,2),h=P[0],E=P[1],w=i.map((function(e){if(e<=h&&e>=m)return c.a.createElement("span",{onClick:function(){n(e)},className:r==e&&v.a.active},e)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:v.a.pagination},m>=o+1?c.a.createElement("button",{className:v.a.changeButton,onClick:function(){f(m-o),E(h-o)}},c.a.createElement(C.b,null)):"",w,c.a.createElement("ins",{className:v.a.pageSummary}," >>",s," "),h>=s?" ":c.a.createElement("button",{className:v.a.changeButton,onClick:function(){f(m+o),E(h+o)}},c.a.createElement(C.a,null))))},k=c.a.memo((function(e){var a=e.users.map((function(a){return c.a.createElement(f,{key:a.id,img:a.photos.small?a.photos.small:P.a,fullname:a.name,status:a.status?a.status:"Test",isFollowed:a.followed,id:a.id,isFollowClicked:e.isFollowClicked,followUser:e.followUser,unfollowUser:e.unfollowUser})}));return c.a.createElement("div",{className:g.a.friendsContent},e.isLoadingStatus?c.a.createElement(h.a,null):"",c.a.createElement(w,{totalPage:e.totalPage,perPage:e.perPage,currentPage:e.currentPage,onPageChanged:e.onPageChanged,pageInterval:20}),a,c.a.createElement("button",{onClick:e.onMoreButtonClick,className:g.a.buttonReadMore},"Show More.."))})),j=t(7),N=t(300),y=function(e){return e.friendsPage.currentPage},O=function(e){return e.friendsPage.perPage},U=function(e){return e.friendsPage.totalPage},F=function(e){return e.friendsPage.isLoadingStatus},_=function(e){return e.friendsPage.isFollowClicked},S=Object(N.a)((function(e){return e.friendsPage.users}),(function(e){return e.filter((function(e){return!0}))})),B=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=a.call.apply(a,[this].concat(o))).onPageChanged=function(a){var t=e.props,n=t.getUsers,r=t.currentPage,o=t.perPage,s=t.setCurPage;a!=r&&(s(a),n(a,o))},e.onMoreButtonClick=function(){var a=e.props,t=a.getUsers,n=a.currentPage,r=a.perPage;(0,a.setPerPage)(r+5),t(n,r+5)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.perPage)}},{key:"render",value:function(){return c.a.createElement(k,Object.assign({},this.props,{onPageChanged:this.onPageChanged,onMoreButtonClick:this.onMoreButtonClick}))}}]),t}(c.a.Component);a.default=Object(j.d)(Object(i.b)((function(e){return{users:S(e),currentPage:y(e),perPage:O(e),totalPage:U(e),isLoadingStatus:F(e),isFollowClicked:_(e)}}),{followUser:u.b,unfollowUser:u.f,setCurPage:u.d,setPerPage:u.e,getUsers:u.c}))(B)}}]);
//# sourceMappingURL=4.047753de.chunk.js.map