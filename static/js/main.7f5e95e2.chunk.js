(this.webpackJsonplyrics=this.webpackJsonplyrics||[]).push([[0],{14:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),l=a.n(r),s=(a(19),a(2)),m=a(3),o=a.n(m),i=function(e){var t=Object(c.useRef)(null);return n.a.createElement("div",{className:"row py-2"},n.a.createElement("div",{className:"col d-flex justify-content-center"},n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.onSearch(t.current.value)}},n.a.createElement("div",{className:"form-row align-items-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("label",{className:"sr-only"},"Search Input"),n.a.createElement("input",{type:"text",className:"form-control mb-2",id:"inlineFormInput",placeholder:"Search millions lyrics",ref:t})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Search"))))))},u=function(e){var t=e.results.map((function(t){return n.a.createElement("div",{className:"col mb-4",key:t.result.id},n.a.createElement("div",{className:"card "},n.a.createElement("div",{style:{height:"200px"}},n.a.createElement("img",{src:t.result.header_image_thumbnail_url,className:"card-img-top w-100 h-100",style:{objectFit:"cover"},alt:t.result.title})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title mb-1"},t.result.title),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},"By. ",t.result.primary_artist.name)),n.a.createElement("a",{href:"#",className:"stretched-link",onClick:function(a){a.preventDefault(),e.onDetail(t.result.api_path)}},"View lyric"))))}));return n.a.createElement("div",{className:"row d-flex justify-content-center py-2"},n.a.createElement("div",{className:"col-6 d-flex justify-content-center"},n.a.createElement("div",{className:"row row-cols-1 row-cols-md-1 w-100"},t)))},d=function(e){var t=Object(c.useState)(null),a=Object(s.a)(t,2),r=a[0],l=a[1],m=Object(c.useState)(null),i=Object(s.a)(m,2),u=i[0],d=i[1];Object(c.useEffect)((function(){}),[r]),Object(c.useEffect)((function(){o()("https://cors-anywhere.herokuapp.com/https://api.genius.com"+e.path,{headers:{Authorization:"Bearer -q9pTc0nbEtxhurbKvVXz1gjzQhwrSJc3Dg3gc9WFEvmRBWYtZVWTcqM4qzJaFwV","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.data.response.song})).then((function(e){return l(e),e})).then((function(e){o()("https://api.lyrics.ovh/v1/".concat(e.primary_artist.name,"/").concat(e.title)).then((function(e){var t=e.data.lyrics.replace(/[\r\n]/g,"<br>");d(t)})).catch((function(e){console.log(e),d("Lyrics not found!")}))})).catch((function(e){return console.log(e)}))}),[]);var p=n.a.createElement("div",{className:"row py-2"},n.a.createElement("div",{className:"col d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))));return r&&(p=n.a.createElement("div",{className:"card w-100"},n.a.createElement("div",{className:"card-body p-5"},n.a.createElement("div",{style:{height:"200px"}},n.a.createElement("img",{src:r.header_image_url,className:"card-img-top rounded w-100 h-100",style:{objectFit:"cover"},alt:r.title})),n.a.createElement("h5",{className:"card-title mt-4 mb-1"},r.title),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},"By. ",r.primary_artist.name," | "),n.a.createElement("small",{className:"text-muted"},"Album: ",r.album.name," | "),n.a.createElement("small",{className:"text-muted"},"Released on ",r.release_date_for_display)),n.a.createElement("hr",null),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:u}}),n.a.createElement("hr",null),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.embed_content}})))),n.a.createElement("div",{className:"row d-flex justify-content-center py-2 py-2"},n.a.createElement("div",{className:"col-8 d-flex justify-content-center"},p))};a(37);var p=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)(null),m=Object(s.a)(l,2),p=m[0],E=m[1],f=Object(c.useState)([]),h=Object(s.a)(f,2),v=h[0],b=h[1],y=Object(c.useState)(null),N=Object(s.a)(y,2),g=N[0],j=N[1];Object(c.useEffect)((function(){o()("https://api.genius.com/search?q=".concat(p,"&access_token=-q9pTc0nbEtxhurbKvVXz1gjzQhwrSJc3Dg3gc9WFEvmRBWYtZVWTcqM4qzJaFwV")).then((function(e){return e.data.response.hits})).then((function(e){b(e),r(!1)})).catch((function(e){return console.log(e)}))}),[p]);var w=n.a.createElement(u,{results:v,onDetail:function(e){return function(e){j(e)}(e)}});g&&(w=n.a.createElement(d,{path:g}));var x=null;return a&&(x=n.a.createElement("div",{className:"row py-2"},n.a.createElement("div",{className:"col d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))))),n.a.createElement("div",{className:"container py-4"},n.a.createElement(i,{onSearch:function(e){return function(e){r(!0),j(null),E(e)}(e)}}),x,w)};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7f5e95e2.chunk.js.map