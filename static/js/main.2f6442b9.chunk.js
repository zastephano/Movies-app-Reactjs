(this["webpackJsonpreact-movies-app"]=this["webpackJsonpreact-movies-app"]||[]).push([[0],{22:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),s=a(16),i=a.n(s),o=(a(22),a(3)),u=a.n(o),l=a(4),j=a(6),b=a(5),d=a.n(b);a(42);var f=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),r=a[0],s=a[1],i=function(){var t=Object(l.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,d.a.get("https://api.themoviedb.org/3/search/movie?api_key=c9fd3a3ff02ea8c83f2640c4e7ec0e2e&query="+r).then((function(t){e.data(t.data.results)}));case 3:s("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("p",{}),Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("i",{className:"fa fa-search"}),Object(n.jsx)("input",{type:"text",className:"search-text",onChange:function(e){return function(e){s(e.target.value)}(e)},value:r,name:"search",placeholder:"Search..."})]})]})})})};a(43);var p=function(e){var t=e.data,a=(t.original_language,t.original_title,t.backdrop_path,t.overview),c=(t.popularity,t.poster_path),r=(t.release_date,t.title),s=t.vote_average,i=s<=4?"rating-red":s<7?"rating-orange":s>=7?"rating-green":"";return Object(n.jsx)("div",{className:"movie-container",children:Object(n.jsxs)("div",{className:"movie-block",children:[Object(n.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500"+c:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3440&q=80",alt:r}),Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsxs)("span",{className:"movie-title",children:[" ",r.length>20?r.substring(0,20)+"...":r," "]}),Object(n.jsxs)("span",{className:"movie-rating "+i,children:[" ",s," "]})]}),Object(n.jsx)("div",{className:"movie-overview",children:a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h5",{className:"text-center pt-2",children:"Overview"}),Object(n.jsxs)("p",{children:[" ",a," "]})]}):Object(n.jsx)("b",{children:"No overview available"})})]})})},h=(a(44),"https://api.themoviedb.org/3/discover/movie?api_key=c9fd3a3ff02ea8c83f2640c4e7ec0e2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=");var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(1),i=Object(j.a)(s,2),o=i[0],b=i[1];Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(h+o).then((function(e){r(e.data.results)}));case 2:case"end":return e.stop()}}),e)}))),[]);var x=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o-=1)<=0)){e.next=7;break}return b(o=1),e.abrupt("return");case 7:return b(o),e.next=10,d.a.get(h+o).then((function(e){r(e.data.results)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o+=1)>500)){e.next=7;break}return b(o=500),e.abrupt("return");case 7:return b(o),e.next=10,d.a.get(h+o).then((function(e){r(e.data.results)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{data:function(e){r(e)}}),Object(n.jsxs)("div",{className:"next_back pt-4",children:[Object(n.jsx)("span",{className:"backword-button",children:Object(n.jsxs)("button",{className:"button btn-prev",onClick:function(){return x()},children:[Object(n.jsx)("i",{class:"fas fa-angle-double-left"}),Object(n.jsx)("span",{className:"texto prev-text",children:"Prev"})]})}),Object(n.jsx)("span",{className:"forword-button",children:Object(n.jsxs)("button",{className:"button btn-next",onClick:function(){return v()},children:[Object(n.jsx)("span",{className:"texto next-text",children:"Next"}),Object(n.jsx)("i",{className:"fas fa-angle-double-right"})]})})]}),Object(n.jsx)("div",{className:"movies-container",children:a.map((function(e){return Object(n.jsx)(p,{data:e},e.id)}))})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.2f6442b9.chunk.js.map