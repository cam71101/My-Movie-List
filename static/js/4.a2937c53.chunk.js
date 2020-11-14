(this["webpackJsonpmy-movie-list"]=this["webpackJsonpmy-movie-list"]||[]).push([[4],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return ge}));var n=a(22),r=a.n(n),o=a(13),i=a(41),c=a(64),l=a(21),s=a(0),m=a.n(s),u=a(222),d=a(223),p=a(168),f=a(30),g=a(46),h=a(177),v=a(198),b=a.n(v),w=a(39),x=a(195),j=a.n(x),y=a(182),E=a(194),O=a.n(E),k=a(232),C=a(219),N=Object(p.a)((function(e){var t;return{search:(t={position:"relative",borderRadius:e.shape.borderRadius,width:"20rem",order:2},Object(l.a)(t,e.breakpoints.down("xs"),{order:3,width:"20rem",margin:"auto"}),Object(l.a)(t,"zIndex",100),t),searchIcon:Object(l.a)({padding:e.spacing(0,2),height:"100%",position:"absolute",right:20,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"flex-end",color:e.palette.common.white},e.breakpoints.down("xs"),{right:20}),autoComplete:Object(l.a)({zIndex:10,width:"20rem"},e.breakpoints.down("xs"),{margin:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),S=Object(f.b)(null,(function(e){return{onUpdateMovieModal:function(t){return e(w.i(t))},onSetSelectedMovie:function(t){return e(w.h(t))}}}))((function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],l=a[1],u=Object(s.useState)([]),d=Object(c.a)(u,2),p=d[0],f=d[1],g=Object(s.useState)(),h=Object(c.a)(g,2),v=h[0],b=h[1],w=N(),x=e.onUpdateMovieModal,E=n&&0===p.length;Object(s.useEffect)((function(){var e=!0;if(v)return Object(i.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O()("https://cors-anywhere.herokuapp.com/http://api.themoviedb.org/3/search/movie?api_key=105094d957931ab7b01705c2f3d2dd58&query=".concat(v));case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).results.length=2,e&&f(n.results.map((function(e){return e}))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))(),function(){e=!1}}),[E,v]),Object(s.useEffect)((function(){n||f([])}),[n]);var S=function(e,t){e.preventDefault(),t&&x(t.id)},I=function(e){b(e.target.value)};return m.a.createElement("div",{className:w.search},m.a.createElement("div",{className:w.searchIcon},m.a.createElement(j.a,null)),m.a.createElement("form",{onSubmit:S},m.a.createElement(k.a,{className:w.autoComplete,id:"search movies",open:n,onOpen:function(){l(!0)},onClose:function(){l(!1)},popupIcon:!1,autoHighlight:!0,onChange:S,getOptionSelected:function(e,t){return e.name===t.name},getOptionLabel:function(e){return e.title},options:p,loading:E,renderInput:function(e){return m.a.createElement(y.a,Object.assign({},e,{label:"Search movies...",variant:"outlined",onChange:I,value:v,InputProps:Object(o.a)(Object(o.a)({},e.InputProps),{},{endAdornment:m.a.createElement(m.a.Fragment,null,E?m.a.createElement(C.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})))})),I=a(81),M=a.n(I),T=a(221),z=a(220),A=a(42),L=a(35),R=Object(p.a)((function(e){var t,a,n;return{root:{flexGrow:1,backgroundColor:"black",zIndex:2},appBar:Object(l.a)({background:"linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)",display:"flex",boxShadow:"0px 0px",height:"15rem",flexDirection:"row"},e.breakpoints.down("xs"),{position:"absolute"}),Toolbar:(t={display:"flex",justifyContent:"space-around",alignItems:"center",opacity:1,width:"100%",height:"50%",boxShadow:"0px 0px",flexWrap:"wrap"},Object(l.a)(t,e.breakpoints.down("xs"),{height:"10rem",justifyContent:"space-between"}),Object(l.a)(t,e.breakpoints.down("sm"),{height:"7rem",justifyContent:"space-between"}),t),signOut:(a={order:3,width:"8rem"},Object(l.a)(a,e.breakpoints.down("sm"),{width:"7rem"}),Object(l.a)(a,e.breakpoints.down("xs"),{order:1,width:"7rem"}),a),logo:(n={marginTop:"-1rem",order:1,width:"8rem"},Object(l.a)(n,e.breakpoints.down("sm"),{width:"7rem"}),Object(l.a)(n,e.breakpoints.down("xs"),{width:"6rem"}),n)}}));var B=Object(L.compose)(Object(f.b)((function(e){return{selectedMovie:e.movies.selectedMovie}}),(function(e){return{onLogout:function(){return e(w.d())}}})))((function(e){var t=R(),a=Object(A.a)(),n=Object(z.a)(a.breakpoints.between("xs","sm"));return m.a.createElement("div",{className:t.root},m.a.createElement(T.a,{in:!0,timeout:{enter:500,exit:500}},m.a.createElement(u.a,{className:t.appBar},m.a.createElement(d.a,{className:t.Toolbar},m.a.createElement("img",{className:t.logo,src:M.a,alt:"Logo"}),m.a.createElement(g.b,{to:"/logout",className:t.signOut},m.a.createElement(h.a,{color:"secondary",className:t.signOut},m.a.createElement(b.a,{fontSize:n?"small":void 0})," Sign out")),e.selectedMovie?m.a.createElement(S,{className:t.search}):null))))})),G=a(181),W=a(224),D=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.primary.main,outline:0}}}));var F=function(e){var t=D();return m.a.createElement("div",null,m.a.createElement(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.modal,onClose:e.close,closeAfterTransition:!0,BackdropComponent:W.a,BackdropProps:{timeout:500}},m.a.createElement(T.a,{in:e.modal},m.a.createElement("span",null,e.children))))},P=a(86),U=a(228),_=a(170),q=a(225),H=a(227),J=a(234),Y=a(226),Q=Object(p.a)((function(e){return{root:{maxWidth:400,margin:".5rem",zIndex:1e3},media:{width:350,height:140,opacity:.5},yourRatings:{zIndex:1e3,color:e.palette.secondary.main},cardActions:{display:"flex",justifyContent:"space-between",position:"relative",marginLeft:0}}}));function V(e){var t,a,n=Q(),r=Object(A.a)();return t=e.movie.title===e.title?{border:".1rem solid red"}:null,a=e.watched?{backgroundColor:r.palette.secondary.light}:null,m.a.createElement(_.a,{className:n.root},m.a.createElement(q.a,{onClick:e.select},m.a.createElement(Y.a,{className:n.media,image:"https://image.tmdb.org/t/p/w500".concat(e.poster),title:e.title,movie:e.movie,style:t})),m.a.createElement(H.a,{className:n.cardActions,style:a},m.a.createElement(J.a,{name:"rating",className:n.yourRatings,value:e.rating,precision:.5,readOnly:!0,max:10,size:"small"}),m.a.createElement(h.a,{size:"small",color:"default",onClick:e.remove},"Remove Movie")))}var K=a(179),X=a(184),Z=a(233),$=a(180),ee=a(174),te=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",flexGrow:1,marginTop:"2.5rem"},filter:{display:"flex",justifyContent:"center",alignItems:"flex-end"},gridContainer:{flexGrow:1,marginTop:"2.5rem"},formControl:{margin:e.spacing(1),minWidth:120}}})),ae=function(e){var t=te(),a=null;return a="title"===e.filterSelect?m.a.createElement(y.a,{className:t.formControl,id:"title",label:"Filter by Title",value:e.filterTitle,onChange:e.handleTitleChange}):"genre"===e.filterSelect?m.a.createElement(ee.a,{className:t.formControl},m.a.createElement(X.a,{id:"genre"},"Select Genre"),m.a.createElement($.a,{labelId:"genre",id:"genre",value:e.filterGenre,onChange:e.handleGenreChange},["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"].map((function(e){return m.a.createElement(Z.a,{value:e},e)})))):"watched"===e.filterSelect?m.a.createElement(ee.a,{className:t.formControl},m.a.createElement(X.a,{id:"watched"}),m.a.createElement($.a,{labelId:"watched",id:"watched",value:e.filterWatched,onChange:e.handleWatchedChange},m.a.createElement(Z.a,{value:"watched"},"Seen"),m.a.createElement(Z.a,{value:"not watched"},"Not Seen"))):null,m.a.createElement("div",{className:t.filter},m.a.createElement(ee.a,{className:t.formControl},m.a.createElement(X.a,{id:"filter"},"Select Filter"),m.a.createElement($.a,{labelId:"filter",id:"filter",value:e.filterSelect,onChange:e.handleSelectChange},m.a.createElement(Z.a,{value:"none",name:"none"},"None"),m.a.createElement(Z.a,{value:"title",name:"Title"},"Title"),m.a.createElement(Z.a,{value:"genre",name:"Genre"},"Genre"),m.a.createElement(Z.a,{value:"watched",name:"Genre"},"Watched"))),a)},ne=a(175),re=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",flexGrow:1,marginTop:"-5rem",background:"black"},filter:{display:"flex",justifyContent:"center",alignItems:"flex-end"},gridContainer:{flexGrow:1,marginTop:"1rem"},formControl:{margin:e.spacing(1),minWidth:120}}})),oe=Object(f.b)((function(e){return{movies:e.movies.movies,token:e.auth.token,userId:e.auth.userId,selectedMovie:e.movies.selectedMovie}}),(function(e){return{onRemoveFromMovieList:function(t,a){return e(w.f(t,a))},onSetSelectedMovie:function(t){return e(w.h(t))},onSetMovieList:function(t){return e(w.g(t))}}}))((function(e){var t,a=Object(s.useState)(""),n=Object(c.a)(a,2),o=n[0],l=n[1],u=Object(s.useState)(""),d=Object(c.a)(u,2),p=d[0],f=d[1],g=Object(s.useState)(""),h=Object(c.a)(g,2),v=h[0],b=h[1],w=e.movies,x=e.onRemoveFromMovieList,j=e.onSetSelectedMovie,y=e.token,E=re(),O=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t,y);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(w){var k=Object(P.a)(w);"title"===e.filterSelect?k=k.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())})):"genre"===e.filterSelect?p&&(k=w.filter((function(e){return e.genres.some((function(e){return e.name===p}))}))):"watched"===e.filterSelect&&v&&(k="watched"===v?w.filter((function(e){return!0===e.watched})):w.filter((function(e){return!1===e.watched}))),t=k.map((function(t){return m.a.createElement(ne.a,{in:!0,key:t.key},m.a.createElement(U.a,{key:t.key,item:!0},m.a.createElement(V,{item:!0,title:t.title,overview:t.overview,rating:t.rating,poster:t.poster_path,remove:function(){return O(t.key)},select:function(){j(t)},key:t.key,movie:e.selectedMovie,watched:t.watched})))}))}else t=null;return m.a.createElement(K.a,{component:"div",className:E.root},0!==w.length?m.a.createElement(ae,{filterTitle:o,handleTitleChange:function(e){l(e.target.value)},filterGenre:p,handleGenreChange:function(e){f(e.target.value)},filterSelect:e.filterSelect,handleSelectChange:e.handleSelect,handleWatchedChange:function(e){b(e.target.value)},filterWatched:v}):null,m.a.createElement(U.a,{container:!0,className:E.gridContainer,direction:"row",justify:"center",alignItems:"center"},t))})),ie=a(229),ce=(a(23),Object(p.a)((function(e){var t,a;return{root:Object(l.a)({width:"100%",height:"57rem",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",backgroundColor:"black"},e.breakpoints.down("xs"),{height:"auto",marginBottom:"5rem"}),black:Object(l.a)({width:"100%",height:"57rem",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",backgroundColor:"black"},e.breakpoints.down("xs"),{height:"auto"}),img:(t={position:"absolute",opacity:.2,width:"150rem",transform:"translateY(10vw)"},Object(l.a)(t,e.breakpoints.up("xl"),{width:"180rem"}),Object(l.a)(t,e.breakpoints.down("l"),{width:"180rem"}),Object(l.a)(t,e.breakpoints.down("md"),{width:"120rem"}),Object(l.a)(t,e.breakpoints.down("sm"),{width:"100rem"}),Object(l.a)(t,e.breakpoints.down("xs"),{width:"90rem",transform:"translateY(0)"}),Object(l.a)(t,"zIndex",0),t),infoContainer:Object(l.a)({display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",zIndex:1},e.breakpoints.down("xs"),{height:"100%",justifyContent:"flex-start",marginTop:"10rem"}),ratingsContainer:Object(l.a)({display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"},e.breakpoints.down("xs"),{flexDirection:"column"}),yourRatings:{zIndex:1e3,color:e.palette.secondary.main,margin:e.spacing(1)},audienceStars:{margin:e.spacing(1)},startContainer:{display:"flex",flexDirection:"column-reverse",justifyContent:"center",alignItems:"center"},ratingText:{margin:"0 0 0 8px"},title:(a={textAlign:"center",textTransform:"uppercase",width:"100%"},Object(l.a)(a,e.breakpoints.down("sm"),{width:"80vw"}),Object(l.a)(a,"zIndex",1),a),description:Object(l.a)({width:"50vw",height:"13rem"},e.breakpoints.down("sm"),{width:"80vw",marginBottom:"3rem",textAlign:"center",height:"auto"}),btn:Object(l.a)({width:"50vw"},e.breakpoints.down("sm"),{width:"80vw"}),search:{marginBottom:"8rem"},tagline:Object(l.a)({},e.breakpoints.down("sm"),{textAlign:"center",width:"80vw"})}})));var le=Object(L.compose)(Object(f.b)((function(e){return{selectedMovie:e.movies.selectedMovie,token:e.auth.token,movieChanged:e.movies.movieChanged,newMovie:e.movies.newMovie}}),(function(e){return{onUpdateStarRating:function(t,a,n,r){return e(w.j(t,a,n,r))},onUpdateWatched:function(t,a,n){return e(w.k(t,a,n))}}})))((function(e){var t=Object(s.useState)(!0),a=Object(c.a)(t,2),n=a[0],l=a[1],u=Object(s.useState)(),d=Object(c.a)(u,2),p=d[0],f=d[1],g=ce(),v=e.selectedMovie,b=e.onUpdateStarRating,w=e.onUpdateWatched,x=e.movieChanged,j=e.newMovie,y=function(){var t=Object(i.a)(r.a.mark((function t(a,n){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(i=Object(o.a)({},v)).rating=n,b(v.key,e.token,i,n);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),E=function(){var t=Object(i.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=Object(o.a)({},v)).watched=!a.watched,w(v.key,a,e.token);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{src:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",className:g.img,alt:"backgro undImage",style:{opacity:1}}),m.a.createElement(K.a,{component:"div",className:g.startContainer},m.a.createElement(ie.a,{variant:"h1",component:"h2",color:"secondary",gutterBottom:!0,className:g.title},"Start building your Movie List!"),m.a.createElement("div",{className:g.search},m.a.createElement(S,null))));Object(s.useEffect)((function(){"first load"===x?f(v):x&&(j?f(v):(l(!1),setTimeout((function(){f(v),l(!0)}),500)))}),[v,x,j]);var k=Object(A.a)(),C=Object(z.a)(k.breakpoints.down("md"));if(p){var N="https://image.tmdb.org/t/p/original".concat(p.backdrop_path);O=m.a.createElement(m.a.Fragment,null,m.a.createElement(K.a,{component:"div",className:g.infoContainer},m.a.createElement(ie.a,{variant:"h2",component:"h2",color:"secondary",className:g.title},p.title),m.a.createElement(ie.a,{variant:"h4",color:"textSecondary",gutterBottom:!0,className:g.tagline},p.tagline),m.a.createElement(ie.a,{variant:"h5",color:"textPrimary",gutterBottom:!0,className:g.description},p.overview),p.watched?m.a.createElement(h.a,{color:"secondary",variant:"contained",onClick:E,className:g.btn,size:C?"small":"large"},"seen"):m.a.createElement(h.a,{color:"primary",variant:"contained",onClick:E,className:g.btn,size:C?"small":"large"},"not seen"),m.a.createElement("div",{className:g.ratingsContainer},m.a.createElement(K.a,{component:"div",className:g.ratingContainer},m.a.createElement(ie.a,{variant:"h5",color:"textSecondary",className:g.ratingText},"AUDIENCE RATING:"),m.a.createElement(J.a,{className:g.audienceStars,name:"rating",value:p.vote_average,precision:.5,onChange:y,max:10,readOnly:!0,size:C?"small":"medium"})),m.a.createElement(K.a,{component:"div",className:g.ratingContainer},m.a.createElement(ie.a,{variant:"h5",color:"textSecondary",className:g.ratingText},"YOUR RATING:"," "),m.a.createElement(J.a,{name:"rating",className:g.yourRatings,value:p.rating,precision:.5,onChange:y,disabled:!p.watched,max:10,size:C?"small":"medium"})))),m.a.createElement("img",{src:N,className:g.img,alt:"backgroundImage"}))}return m.a.createElement(K.a,{className:g.black},m.a.createElement(T.a,{in:n,timeout:{enter:1e3,exit:700}},m.a.createElement(K.a,{className:g.root},O)))})),se=a(49),me=function(e,t){return function(a){var n=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],r=a[1],o=e.interceptors.request.use((function(e){return r(!1),e})),i=e.interceptors.response.use((function(e){return e}),(function(e){r(e)}));Object(s.useEffect)((function(){return function(){e.interceptors.request.eject(o),e.interceptors.response.eject(i)}}),[o,i,e.interceptors.request,e.interceptors.response]);return[n,function(){r(!1)}]}(t),r=Object(c.a)(n,2),o=r[0],i=r[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement(F,{modal:o,onClose:i},o?o.message:null),m.a.createElement(e,a))}},ue=a(230),de=Object(p.a)((function(e){var t,a;return{root:(t={display:"flex",width:"70rem",height:"40rem"},Object(l.a)(t,e.breakpoints.between("sm","md"),{height:"37rem",width:"45rem"}),Object(l.a)(t,e.breakpoints.down("xs"),{height:"37rem",width:"20rem",flexDirection:"column",justifyContent:"flex-end",position:"relative",overflow:"hidden"}),t),details:{display:"flex",zIndex:1},content:{display:"flex",flexDirection:"column",flex:"5",zIndex:1},cover:Object(l.a)({flex:"1 0 40%",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("xs"),{zIndex:0,opacity:.1,position:"absolute",width:"25rem",objectFit:"cover"}),tagline:{flex:"3 3 90%",zIndex:1},ratingsContainer:{display:"flex",zIndex:1},bottomContainer:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",zIndex:1},button:{marginTop:"1rem",zIndex:1},title:{textTransform:"uppercase"},rating:{paddingTop:".5rem",marginLeft:".3rem",zIndex:1},genresList:(a={width:"50%"},Object(l.a)(a,e.breakpoints.down("xs"),{width:"100%"}),Object(l.a)(a,"zIndex",1),a),runTimeContainer:{alignSelf:"flexend",zIndex:1}}})),pe=function(e){var t=de(),a=e.moviePoster,n=e.genres,r=e.checkMovieAdded,o=Object(A.a)(),i=Object(z.a)(o.breakpoints.down("xs")),c=null;a||(c=m.a.createElement(ie.a,{variant:"h5",color:"textSecondary",gutterBottom:!0},"No poster available"));var l=n.map((function(e){return e.name+" "}));return m.a.createElement(_.a,{className:t.root},i?m.a.createElement("img",{className:t.cover,src:a,alt:"No poster available"}):null,m.a.createElement("div",{className:t.details},m.a.createElement(ue.a,{className:t.content},m.a.createElement("div",{className:t.tagline},m.a.createElement(ie.a,{variant:i?"h4":"h3",gutterBottom:!0,color:"secondary",className:t.title},e.title),m.a.createElement(ie.a,{variant:"h5",color:"textSecondary",gutterBottom:!0},e.tagline),m.a.createElement(ie.a,{variant:i?"subtitle2":"subtitle1",color:"textPrimary",gutterBottom:!0},e.overview)),m.a.createElement("div",{className:t.bottomContainer},m.a.createElement(ie.a,{variant:"h5",color:"textSecondary",className:t.genresList},l),m.a.createElement("div",{className:t.runTimeContainer},m.a.createElement(ie.a,{variant:"h5",color:"textSecondary",gutterBottom:!0,display:"inline"},"Runtime:"),m.a.createElement(ie.a,{variant:"h5",color:"textPrimary",gutterBottom:!0,display:"inline"},"\xa0\xa0",e.runTime," mins")),m.a.createElement("div",{className:t.ratingsContainer},m.a.createElement(ie.a,{variant:"h5",color:"secondary"},"Rating:"),m.a.createElement(J.a,{className:t.rating,name:"rating",value:e.voteAverage,precision:1,max:10,readOnly:!0,size:"small"})),m.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:e.addMovie,disabled:r,className:t.button,size:i?"small":"medium"},"add to list")))),i?null:m.a.createElement(Y.a,{className:t.cover,image:a,src:"No poster available"},c))},fe=Object(p.a)((function(e){var t;return t={root:{display:"flex",flexDirection:"column",positon:"relative"},gradient:{width:"100%",height:"35rem",position:"absolute",top:"39rem",background:"linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 46%, rgba(0,212,255,0) 100%)"}},Object(l.a)(t,e.breakpoints.up("xl"),{height:"62rem"}),Object(l.a)(t,"loading",{width:"100%",height:"80rem",display:"flex",justifyContent:"center",alignItems:"center"}),Object(l.a)(t,"wheel",{height:"20rem",width:"20rem"}),t}));function ge(e){var t=Object(s.useState)(!0),a=Object(c.a)(t,2),n=a[0],l=a[1],u=Object(s.useState)(""),d=Object(c.a)(u,2),p=d[0],f=d[1],g=fe(),h=e.onSetMovieList,v=e.token,b=e.userId,w=e.onModalToggle,x=e.onAddToMovieList,j=e.searchedMovie,y=e.movies,E=e.modal,O=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=Object(o.a)({},j)).userId=b,x(t,v),f(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){Object(i.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="?auth="+v+'&orderBy="userId"&equalTo="'+b+'"',e.next=4,se.a.get("/movies.json"+t);case 4:a=e.sent,n=Object.entries(a.data).map((function(e){return e[1].key=e[0],e[1]})),h(n),setTimeout((function(){l(!1)}),300),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[h,v,b]);var k=null;j&&j.poster_path&&(k="https://image.tmdb.org/t/p/w500".concat(j.poster_path));var N=m.a.createElement("div",{className:g.loading},m.a.createElement(C.a,{color:"secondary"})),S=!1;return y&&j&&(S=y.some((function(e){return e.id===j.id}))),n||(N=m.a.createElement("div",{className:g.root},m.a.createElement(B,null),m.a.createElement(le,null),m.a.createElement("div",{className:g.gradient}),m.a.createElement(oe,{handleSelect:function(e){return function(e){f(e.target.value)}(e)},filterSelect:p}),j?m.a.createElement(F,{modal:E,close:function(){w()}},m.a.createElement(pe,{addMovie:O,moviePoster:k,runTime:j.runtime,genres:j.genres,checkMovieAdded:S,title:j.title,tagline:j.tagline,overview:j.overview,voteAverage:j.vote_average})):null)),m.a.createElement(m.a.Fragment,null,N)}t.default=Object(L.compose)(Object(f.b)((function(e){return{movies:e.movies.movies,token:e.auth.token,userId:e.auth.userId,modal:e.movies.modal,searchedMovie:e.movies.searchedMovie}}),(function(e){return{onRemoveFromMovieList:function(t,a){return e(w.f(t,a))},onSetSelectedMovie:function(t){return e(w.h(t))},onSetMovieList:function(t){return e(w.g(t))},onModalToggle:function(){return e(w.e())},onAddToMovieList:function(t,a){return e(w.a(t,a))}}})))(me(ge,se.a))}}]);
//# sourceMappingURL=4.a2937c53.chunk.js.map