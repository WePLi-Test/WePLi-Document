"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1390],{1094:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=r(4848),t=r(8453),a=r(1470),l=r(9365);const c={sidebar_position:1},i="\ud0a4\uc6cc\ub4dc\ub85c \ub178\ub798 \uac80\uc0c9\ud558\uae30",o={id:"\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx",title:"\ud0a4\uc6cc\ub4dc\ub85c \ub178\ub798 \uac80\uc0c9\ud558\uae30",description:"\uc124\uba85",source:"@site/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx.md",sourceDirName:"\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API",slug:"/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx",permalink:"/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/docs/category/search"},next:{title:"\uc81c\uc548 \uac80\uc0c9\uc5b4 \uc870\ud68c\ud558\uae30",permalink:"/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx"}},d={},u=[{value:"\uc124\uba85",id:"\uc124\uba85",level:3},{value:"Web Service Endpoint",id:"web-service-endpoint",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Response Codes",id:"response-codes",level:3}];function h(e){const n={br:"br",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\ud0a4\uc6cc\ub4dc\ub85c-\ub178\ub798-\uac80\uc0c9\ud558\uae30",children:"\ud0a4\uc6cc\ub4dc\ub85c \ub178\ub798 \uac80\uc0c9\ud558\uae30"})}),"\n",(0,s.jsx)(n.h3,{id:"\uc124\uba85",children:"\uc124\uba85"}),"\n",(0,s.jsxs)(n.p,{children:["Apple Music API\uc758 ",(0,s.jsx)(n.code,{children:"Search for Catalog Resources"})," \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub294 \uc785\ub825\ub41c \uac80\uc0c9\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec Apple Music \uce74\ud0c8\ub85c\uadf8\uc5d0\uc11c \ub9ac\uc18c\uc2a4\ub97c \uac80\uc0c9\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"web-service-endpoint",children:"Web Service Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HTTP \uba54\uc18c\ub4dc"})," : ",(0,s.jsx)(n.code,{children:"GET"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\uc5d4\ub4dc\ud3ec\uc778\ud2b8"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"https://api.music.apple.com/v1/catalog/{storefront}/search\n"})}),"\n",(0,s.jsxs)(a.A,{groupId:"examples",children:[(0,s.jsx)(l.A,{value:"request",label:"\uc694\uccad \uc608\uc2dc",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"GET https://api.music.apple.com/v1/catalog/us/search?types=songs,albums,artists&term=beach+bunny\nAuthorization: Bearer {developer_token}\n"})})}),(0,s.jsx)(l.A,{value:"response",label:"\uc751\ub2f5 \ud615\uc2dd",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "results": {\n      "artists": {\n          "href": "/v1/catalog/us/search?limit=5&term=beach+bunny&types=artists",\n          "data": [\n              {\n                  "id": "1147783278",\n                  "type": "artists",\n                  "href": "/v1/catalog/us/artists/1147783278",\n                  "attributes": {\n                      "name": "Beach Bunny",\n                      "genreNames": [\n                          "Alternative"\n                      ],\n                      "artwork": {\n                          "width": 2011,\n                          "height": 2011,\n                          "url": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ee/38/80/ee3880eb-e996-8b35-887f-c71c8ad800ac/pr_source.png/{w}x{h}bb.jpg",\n                          "bgColor": "19160f",\n                          "textColor1": "f3949b",\n                          "textColor2": "b08ff2",\n                          "textColor3": "c77b7f",\n                          "textColor4": "9277c5"\n                      },\n                      "url": "https://music.apple.com/us/artist/beach-bunny/1147783278"\n                  },\n                  "relationships": {\n                      "albums": {\n                          "href": "/v1/catalog/us/artists/1147783278/albums",\n                          "data": [\n                              {\n                                  "id": "1482041821",\n                                  "type": "albums",\n                                  "href": "/v1/catalog/us/albums/1482041821"\n                              },\n                          ]\n                      }\n                  }\n              }\n          ]\n      },\n      "songs": {\n          "href": "/v1/catalog/us/search?limit=5&term=beach+bunny&types=songs",\n          "next": "/v1/catalog/us/search?offset=5&term=beach+bunny&types=songs",\n          "data": [\n              {\n                  "id": "1482041830",\n                  "type": "songs",\n                  "href": "/v1/catalog/us/songs/1482041830",\n                  "attributes": {\n                      "albumName": "Honeymoon",\n                      "genreNames": [\n                          "Alternative",\n                          "Music"\n                      ],\n                      "trackNumber": 9,\n                      "releaseDate": "2020-02-14",\n                      "durationInMillis": 147351,\n                      "isrc": "USQE91600054",\n                      "artwork": {\n                          "width": 3000,\n                          "height": 3000,\n                          "url": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/0b/b2/52/0bb2524d-ecfc-1bae-9c1e-218c978d7072/Honeymoon_3K.jpg/{w}x{h}bb.jpg",\n                          "bgColor": "fffaa9",\n                          "textColor1": "030005",\n                          "textColor2": "363240",\n                          "textColor3": "353226",\n                          "textColor4": "5e5a55"\n                      },\n                      "url": "https://music.apple.com/us/album/cloud-9/1482041821?i=1482041830",\n                      "playParams": {\n                          "id": "1482041830",\n                          "kind": "song"\n                      },\n                      "discNumber": 1,\n                      "isAppleDigitalMaster": false,\n                      "hasLyrics": true,\n                      "name": "Cloud 9",\n                      "previews": [\n                          {\n                              "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5b/98/32/5b9832bb-5337-cd4f-5a7e-063709c465cc/mzaf_8852412892959276575.plus.aac.p.m4a"\n                          }\n                      ],\n                      "artistName": "Beach Bunny"\n                  }\n              },\n          ]\n      }\n  },\n  "meta": {\n      "results": {\n          "order": [\n              "artists",\n              "songs",\n              "albums"\n          ],\n          "rawOrder": [\n              "artists",\n              "songs",\n              "albums"\n          ]\n      }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"storefront"})})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsxs)(n.td,{children:["iTunes Store\uc758 \uad6d\uac00 \ub610\ub294 \uc9c0\uc5ed \ucf54\ub4dc\uc785\ub2c8\ub2e4. (ISO 3166 alpha-2 \ud615\uc2dd). \uac00\ub2a5\ud55c \uac12\uc740 Storefront \uac1d\uccb4\uc758 ",(0,s.jsx)(n.code,{children:"id"})," \uc18d\uc131\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"term"})})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsxs)(n.td,{children:["\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. \ub2e8\uc5b4 \uc0ac\uc774\uc758 \uacf5\ubc31\uc740 ",(0,s.jsx)(n.code,{children:"+"}),"\ub85c \ub300\uccb4\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608: ",(0,s.jsx)(n.code,{children:"term=james+br"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"l"})})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsxs)(n.td,{children:["\uc0ac\uc6a9\ud560 \uc5b8\uc5b4\ub97c \uc9c0\uc815\ud558\ub294 \uc5b8\uc5b4 \ud0dc\uadf8\uc785\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 \ud574\ub2f9 ",(0,s.jsx)(n.code,{children:"Storefront"})," \uac1d\uccb4\uc758 ",(0,s.jsx)(n.code,{children:"defaultLanguageTag"}),"\uc785\ub2c8\ub2e4."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"limit"})})}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"\ubc18\ud658\ud560 \uac1d\uccb4 \uc218\ub97c \uc81c\ud55c\ud569\ub2c8\ub2e4. \uae30\ubcf8\uac12: 5, \ucd5c\ub300\uac12: 25."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"offset"})})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc74c \ud398\uc774\uc9c0 \ub610\ub294 \uac00\uc838\uc62c \uac1d\uccb4 \uadf8\ub8f9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"types"})})}),(0,s.jsx)(n.td,{children:"String[]"}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsxs)(n.td,{children:["\uac80\uc0c9 \uacb0\uacfc\uc5d0 \ud3ec\ud568\ud560 \ub9ac\uc18c\uc2a4 \uc720\ud615 \ubaa9\ub85d\uc785\ub2c8\ub2e4. \uac00\ub2a5\ud55c \uac12: ",(0,s.jsx)(n.code,{children:"activities"}),", ",(0,s.jsx)(n.code,{children:"albums"}),", ",(0,s.jsx)(n.code,{children:"artists"}),", \ub4f1."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"with"})})}),(0,s.jsx)(n.td,{children:"String[]"}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsxs)(n.td,{children:["\uc694\uccad\uc5d0 \uc801\uc6a9\ud560 \uc218\uc815 \ubaa9\ub85d\uc785\ub2c8\ub2e4. \uc608: ",(0,s.jsx)(n.code,{children:"topResults"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"response-codes",children:"Response Codes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"200 OK"})}),":",(0,s.jsx)(n.br,{}),"\n","\uc694\uccad\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uc5c8\uc73c\uba70, ",(0,s.jsx)(n.code,{children:"SearchResponse"})," \uac1d\uccb4\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"401 Unauthorized"})}),":",(0,s.jsx)(n.br,{}),"\n","\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 Authorization \ud5e4\ub354\uac00 \uc0ac\uc6a9\ub418\uc5c8\uc74c\uc744 \ub098\ud0c0\ub0b4\ub294 \uc751\ub2f5\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"500 Internal Server Error"})}),":",(0,s.jsx)(n.br,{}),"\n","\uc11c\ubc84\uc5d0\uc11c \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc74c\uc744 \ub098\ud0c0\ub0b4\ub294 \uc751\ub2f5\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var s=r(4164);const t={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>A});var s=r(6540),t=r(4164),a=r(3104),l=r(6347),c=r(205),i=r(7485),o=r(1682),d=r(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=x({queryString:r,groupId:t}),[b,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),j=(()=>{const e=o??b;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function g(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=c[r].value;t!==s&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);