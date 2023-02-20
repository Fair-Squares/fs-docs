(self.webpackChunkfs_docs=self.webpackChunkfs_docs||[]).push([[918],{1310:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(7462),s=a(7294),l=a(6010),r=a(5281),o=a(2802),c=a(8596),i=a(9960),d=a(5999),m=a(4996);function u(e){return s.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),s.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b="breadcrumbHomeIcon_YNFT";function h(){const e=(0,m.Z)("/");return s.createElement("li",{className:"breadcrumbs__item"},s.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},s.createElement(u,{className:b})))}const j="breadcrumbsContainer_Z_bl";function p(e){let{children:t,href:a,isLast:n}=e;const l="breadcrumbs__link";return n?s.createElement("span",{className:l,itemProp:"name"},t):a?s.createElement(i.Z,{className:l,href:a,itemProp:"item"},s.createElement("span",{itemProp:"name"},t)):s.createElement("span",{className:l},t)}function v(e){let{children:t,active:a,index:r,addMicrodata:o}=e;return s.createElement("li",(0,n.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,s.createElement("meta",{itemProp:"position",content:String(r+1)}))}function g(){const e=(0,o.s1)(),t=(0,c.Ns)();return e?s.createElement("nav",{className:(0,l.Z)(r.k.docs.docBreadcrumbs,j),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},s.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&s.createElement(h,null),e.map(((t,a)=>{const n=a===e.length-1;return s.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},s.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},230:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ne});var n=a(7294),s=a(1944),l=a(902);const r=n.createContext(null);function o(e){let{children:t,content:a}=e;const s=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:s},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(4966);function b(){const{metadata:e}=c();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var h=a(3120),j=a(4364),p=a(5281),v=a(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return n.createElement("span",{className:p.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?n.createElement(E,{lastUpdatedBy:s}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(7462);const _="iconEdit_Z9Sw";function Z(e){let{className:t,...a}=e;return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function N(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:p.k.common.editThisPage},n.createElement(Z,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var L=a(9960);const y="tag_zVej",T="tagRegular_sFm0",w="tagWithCount_h2kH";function U(e){let{permalink:t,label:a,count:s}=e;return n.createElement(L.Z,{href:t,className:(0,d.Z)(y,s?w:T)},a,s&&n.createElement("span",null,s))}const x="tags_jXut",z="tag_QGVx";function C(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:z},n.createElement(U,{label:t,permalink:a}))}))))}const A="lastUpdated_vwxv";function M(e){return n.createElement("div",{className:(0,d.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C,e)))}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:l}=e;return n.createElement("div",{className:(0,d.Z)(p.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",A)},(a||s)&&n.createElement(f,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:s})))}function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:l,tags:r}=e,o=r.length>0,i=!!(t||a||l);return o||i?n.createElement("footer",{className:(0,d.Z)(p.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(M,{tags:r}),i&&n.createElement(B,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:s})):null}var V=a(6043),D=a(3743);const H="tocCollapsibleButton_TO0P",P="tocCollapsibleButtonExpanded_MG3E";function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,k.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",H,!t&&P,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const S="tocCollapsible_ETCw",F="tocCollapsibleContent_vkbj",R="tocCollapsibleExpanded_sAul";function q(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:o}=(0,V.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(S,!r&&R,a)},n.createElement(O,{collapsed:r,onClick:o}),n.createElement(V.z,{lazy:!0,className:F,collapsed:r},n.createElement(D.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:l})))}const G="tocMobile_ITEo";function J(){const{toc:e,frontMatter:t}=c();return n.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(p.k.docs.docTocMobile,G)})}var Q=a(9407);function W(){const{toc:e,frontMatter:t}=c();return n.createElement(Q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var X=a(2503),Y=a(8905);function $(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(p.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(X.Z,{as:"h1"},a)),n.createElement(Y.Z,null,t))}var K=a(1310);const ee="docItemContainer_Djhp",te="docItemCol_VOVn";function ae(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?n.createElement(J,null):void 0,desktop:!l||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(W,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&te)},n.createElement(h.Z,null),n.createElement("div",{className:ee},n.createElement("article",null,n.createElement(K.Z,null),n.createElement(j.Z,null),a.mobile,n.createElement($,null,t),n.createElement(I,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ne(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(s.FG,{className:t},n.createElement(i,null),n.createElement(ae,null,n.createElement(a,null))))}},4966:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7462),s=a(7294),l=a(5999),r=a(6010),o=a(9960);function c(e){const{permalink:t,title:a,subLabel:n,isNext:l}=e;return s.createElement(o.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&s.createElement("div",{className:"pagination-nav__sublabel"},n),s.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return s.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&s.createElement(c,(0,n.Z)({},t,{subLabel:s.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&s.createElement(c,(0,n.Z)({},a,{subLabel:s.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294),s=a(6010),l=a(5999),r=a(5281),o=a(4477);function c(e){let{className:t}=e;const a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(7294),s=a(6010),l=a(2263),r=a(9960),o=a(5999),c=a(143),i=a(5281),d=a(373),m=a(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:s}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:s},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function j(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,l.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(o),{latestDocSuggestion:u,latestVersionSuggestion:j}=(0,c.Jo)(o),p=u??(v=j).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,s.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:j.label,to:p.path,onClick:()=>m(j.name)})))}function p(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(j,{className:t,versionMetadata:a}):null}},6700:(e,t,a)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":6180,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":6180,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=6700}}]);