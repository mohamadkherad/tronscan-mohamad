(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1551:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAByklEQVR4Aa2RA7AeQRCEu7dipxTbtm3btm3btm0bhdi2bdvJj53nq6vs//y+w3LUg5BwROrF2vu5TtO9XxvHR0Sy423NntvfVpft76o/2vm2RjaEACIEbHhRdSRERggAEr9AtmyUdO/WcDte9ajySIEeARskxzdPVWAYOVLDA1x0r3xGaswGJLZxqAjR4j2qpCLi84EkRCTgfL9Eitu4Q5ot3wzbOdfLDAMxGt4YhiAE4jta9YnfGHBfKXWfgppdsh28Axucdqm0UWYY+EGyaZ/cR3ZbjsedKT4SFM+OxcrSzPi/JQkBOGpg/mOjSQpHnihqZWxY2jGlMqCf2c4YZPNIfx0uW4Ji6erZkJZzE0vzjG7lThjJ4dKeMwiDNiS2RYoZqdWEomd+RHI4NLRoqxQRv9Es3bxgzQVuRQyeW+3yZPjjnbELbi0ICaYUAkB9QCQ2XFrt8mHYiPT7n35MaBgYpZo9IHE+aiSps7T69ZeeLNFofY4sWktsBIa42wp0G3sgUi3KFEW6j6x/y4GwUnNZxpE1lqWXmsszSI3l6f/UXpGxJSKCSovS96m4MK1UXJjuSbVFmXIjoii/OnvMMvPSNqkyP1t8hBAvK0rbVvfapoMAAAAASUVORK5CYII="},3469:function(e,a,t){"use strict";t.r(a);var c=t(1475),l=t.n(c),s=t(1474),n=t.n(s),r=t(1693),m=t.n(r),i=t(78),o=t(93),d=t(16),u=t(15),E=t(21),v=t(20),b=t(67),f=t(0),N=t.n(f),p=t(28),j=t(13),x=t(4),O=t(90),h=t(23),A=t(3);function w(e){var a=e.valdata,t=(e.icon,e.children),c=Object(b.a)(e,["valdata","icon","children"]);return N.a.createElement("li",{className:"list-group-item p-1"},N.a.createElement("div",Object.assign({className:"media my-3 mx-3",key:a},c),N.a.createElement("div",{className:"media-body mb-0 lh-125 "},t)))}var g=function(e){Object(E.a)(c,e);var a=Object(v.a)(c);function c(){var e;Object(d.a)(this,c),(e=a.call(this)).listen=function(){},e.addEvent=function(a){a.id=e.id++,-1<e.state.filters.indexOf(a.type)&&e.setState(function(e,t){return{events:[a].concat(Object(o.a)(e.events.slice(0,30)))}})},e.id=0,e.state={events:[],filters:[],filterButtons:[{label:Object(A.c)("transactions"),icon:"fa fa-exchange-alt",value:"transfer"},{label:Object(A.c)("votes"),icon:"fa fa-bullhorn",value:"vote"},{label:Object(A.c)("asset_participation"),icon:"fa fa-arrow-right",value:"asset-participate"},{label:Object(A.c)("token_created"),icon:"fa fa-plus-circle",value:"asset-create"},{label:Object(A.c)("witness"),icon:"fa fa-eye",value:"witness-create"},{label:Object(A.c)("account"),icon:"fa fa-user",value:"account-name-changed"}]};var t,l=Object(i.a)(e.state.filterButtons);try{for(l.s();!(t=l.n()).done;){var s=t.value;e.state.filters.push(s.value)}}catch(e){l.e(e)}finally{l.f()}return e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.listen()}},{key:"componentWillUnmount",value:function(){this.listener.close()}},{key:"buildRow",value:function(e,a){switch(e.type){case"transfer":return N.a.createElement(w,{key:e.id,icon:"fa-exchange-alt"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-xs-10 col-sm-5"},N.a.createElement("h5",{className:"card-title text-left"},N.a.createElement("b",null,Object(A.c)("token_transfer"))),Object(A.c)("from"),": ",N.a.createElement("span",{className:"position-absolute ml-2"},N.a.createElement(h.a,{address:e.transferFromAddress,truncate:!0}))),N.a.createElement("div",{className:"col-xs-4 col-sm-2 d-flex justify-content-center align-items-center"},N.a.createElement("img",{src:t(1551)})),N.a.createElement("div",{className:"col-xs-10 col-sm-5"},N.a.createElement("div",null,Object(A.c)("asset"),": ","TRX"===e.tokenName?N.a.createElement("b",null,N.a.createElement(j.c,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount/x.L})):N.a.createElement("b",null,N.a.createElement(j.c,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount}))," ",e.tokenName),N.a.createElement("div",null,Object(A.c)("to"),": ",N.a.createElement("span",{className:"position-absolute ml-2"},N.a.createElement(h.a,{address:e.transferToAddress,truncate:!0}))))));case"vote":return N.a.createElement(w,{key:e.id,icon:"fa-bullhorn"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-xs-8 col-sm-5"},N.a.createElement("h5",{className:"card-title text-left"},N.a.createElement("b",null,Object(A.c)("voting")))),N.a.createElement("div",{className:"col-xs-8 col-sm-2"}),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("votes"),": ",N.a.createElement("b",null,N.a.createElement(j.c,{value:e.votes}))),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("voter"),": ",N.a.createElement("span",{className:"position-absolute ml-2"},N.a.createElement(h.a,{address:e.voterAddress,truncate:!1}))),N.a.createElement("div",{className:"col-xs-8 col-sm-2"}),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("representatives"),": ",N.a.createElement("span",{className:"position-absolute ml-2"},N.a.createElement(h.a,{address:e.candidateAddress,truncate:!1})))));case"asset-participate":return N.a.createElement(w,{key:e.id,icon:"fa-arrow-right"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-xs-8 col-sm-5"},N.a.createElement("h5",{className:"card-title text-left"},N.a.createElement("b",null,Object(A.c)("asset_participation")))),N.a.createElement("div",{className:"col-xs-8 col-sm-2"}),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("token_name"),": ",N.a.createElement("b",null,e.name)),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("owner_address"),": ",N.a.createElement("span",{className:"position-absolute ml-2"},N.a.createElement(h.a,{address:e.ownerAddress,truncate:!1}))),N.a.createElement("div",{className:"col-xs-8 col-sm-2"}),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("bought"),": ",e.amount," ",e.name)));case"asset-create":return N.a.createElement(w,{key:e.id,icon:"fa-plus-circle"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-xs-8 col-sm-5"},N.a.createElement("h5",{className:"card-title text-left"},N.a.createElement("b",null,Object(A.c)("token_creation")))),N.a.createElement("div",{className:"col-xs-8 col-sm-2"}),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("token_name"),": ",N.a.createElement("b",null,N.a.createElement(h.f,{name:e.name}))),N.a.createElement("div",{className:"col-sm-9"},Object(A.c)("address"),": ",N.a.createElement(h.a,{address:e.ownerAddress,truncate:!1})," ",Object(A.b)("created_token")," ",N.a.createElement(h.f,{name:e.name}))));case"witness-create":return N.a.createElement(w,{key:e.id,icon:"fa-user"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-xs-8 col-sm-5"},N.a.createElement("h5",{className:"card-title text-left"},N.a.createElement("b",null,Object(A.c)("sr_candidature")))),N.a.createElement("div",{className:"col-xs-8 col-sm-2"}),N.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(A.c)("address"),": ",N.a.createElement(h.a,{address:e.ownerAddress,truncate:!1})," ",Object(A.b)("applied_for_super_representative"))))}return N.a.createElement("div",{className:"media pt-3",key:"other-"+a},N.a.createElement("p",{className:"media-body pb-3 mb-0 small lh-125 "},"Unknown"))}},{key:"setFilter",value:function(e){this.setState({filters:e})}},{key:"render",value:function(){var e=this,a=this.state,t=a.events,c=a.filters,s=a.filterButtons;return N.a.createElement("main",{className:"container header-overlap page-live pb-3 token_black live"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-12 mb-4"},N.a.createElement("div",{className:"card"},N.a.createElement("div",{className:"card-body"},N.a.createElement("h5",{className:"card-title"},Object(A.c)("filters")),N.a.createElement("form",{className:"pt-2"},N.a.createElement(m.a.Group,{style:{width:"100%"},onChange:this.setFilter.bind(this),defaultValue:c},N.a.createElement(l.a,{className:"d-flex"},s.map(function(e){return N.a.createElement(n.a,{className:"mr-5",key:e.value},N.a.createElement("i",{className:e.icon+" ml-2"}),N.a.createElement("span",{className:"ml-1 mr-1"},e.label),N.a.createElement(m.a,{value:e.value}))}))))))),N.a.createElement("div",{className:"col-md-12 mt-3 mt-md-0"},0===t.length?N.a.createElement("div",{className:"card"},N.a.createElement(O.b,null,Object(A.c)("waiting_for_transactions"))):N.a.createElement("div",{className:"card"},N.a.createElement("ul",{className:"list-group list-group-flush"},t.map(function(a){return e.buildRow(a)}))))))}}]),c}(N.a.Component);a.default=Object(p.connect)(function(e){return{}},{})(g)}}]);