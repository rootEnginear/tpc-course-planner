(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{3740:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(6495).Z,o=n(2648).Z,r=n(1598).Z,l=n(7273).Z,a=r(n(7294)),s=o(n(2636)),c=n(7757),f=n(3735),u=n(3341);n(4210);var d=o(n(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/tpc-course-planner/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(t){return void 0!==t.default}function h(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function m(t,e,n,o,r,l,a){if(!t||t["data-loaded-src"]===e)return;t["data-loaded-src"]=e;let s="decode"in t?t.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("blur"===n&&l(!0),null==o?void 0:o.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let n=!1,r=!1;o.current(i({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,e.preventDefault()},stopPropagation:()=>{r=!0,e.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(t)}})}let y=a.forwardRef((t,e)=>{var{imgAttributes:n,heightInt:o,widthInt:r,qualityInt:s,className:c,imgStyle:f,blurStyle:u,isLazy:d,fill:g,placeholder:p,loading:h,srcString:y,config:w,unoptimized:x,loader:v,onLoadRef:b,onLoadingCompleteRef:R,setBlurComplete:E,setShowAltText:C,onLoad:S,onError:L}=t,A=l(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},A,{loading:h,width:r,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:i({},f,u)},n,{ref:a.useCallback(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(L&&(t.src=t.src),t.complete&&m(t,y,p,b,R,E,x))},[y,p,b,R,E,L,x,e]),onLoad:t=>{let e=t.currentTarget;m(e,y,p,b,R,E,x)},onError:t=>{C(!0),"blur"===p&&E(!0),L&&L(t)}})))}),w=a.forwardRef((t,e)=>{let n,o;var r,{src:m,sizes:w,unoptimized:x=!1,priority:v=!1,loading:b,className:R,quality:E,width:C,height:S,fill:L,style:A,onLoad:T,onLoadingComplete:k,placeholder:P="empty",blurDataURL:_,layout:j,objectFit:O,objectPosition:D,lazyBoundary:z,lazyRoot:M}=t,B=l(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=a.useContext(u.ImageConfigContext),W=a.useMemo(()=>{let t=g||F||f.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),n=t.deviceSizes.sort((t,e)=>t-e);return i({},t,{allSizes:e,deviceSizes:n})},[F]),N=B,I=N.loader||d.default;delete N.loader;let V="__next_img_default"in I;if(V){if("custom"===W.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let t=I;I=e=>{let{config:n}=e,i=l(e,["config"]);return t(i)}}if(j){"fill"===j&&(L=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];t&&(A=i({},A,t));let e={responsive:"100vw",fill:"100vw"}[j];e&&!w&&(w=e)}let H="",J=h(C),Y=h(S);if("object"==typeof(r=m)&&(p(r)||void 0!==r.src)){let t=p(m)?m.default:m;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(t)));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(t)));if(n=t.blurWidth,o=t.blurHeight,_=_||t.blurDataURL,H=t.src,!L){if(J||Y){if(J&&!Y){let e=J/t.width;Y=Math.round(t.height*e)}else if(!J&&Y){let e=Y/t.height;J=Math.round(t.width*e)}}else J=t.width,Y=t.height}}let q=!v&&("lazy"===b||void 0===b);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(x=!0,q=!1),W.unoptimized&&(x=!0),V&&m.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(x=!0);let[G,Z]=a.useState(!1),[U,X]=a.useState(!1),$=h(E),K=Object.assign(L?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:D}:{},U?{}:{color:"transparent"},A),Q="blur"===P&&_&&!G?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:Y,blurWidth:n,blurHeight:o,blurDataURL:_,objectFit:K.objectFit}),'")')}:{},tt=function(t){let{config:e,src:n,unoptimized:i,width:o,quality:r,sizes:l,loader:a}=t;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(t,e,n){let{deviceSizes:i,allSizes:o}=t;if(n){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let i;i=t.exec(n);i)e.push(parseInt(i[2]));if(e.length){let t=.01*Math.min(...e);return{widths:o.filter(e=>e>=i[0]*t),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof e)return{widths:i,kind:"w"};let r=[...new Set([e,2*e].map(t=>o.find(e=>e>=t)||o[o.length-1]))];return{widths:r,kind:"x"}}(e,o,l),f=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((t,i)=>"".concat(a({config:e,src:n,quality:r,width:t})," ").concat("w"===c?t:i+1).concat(c)).join(", "),src:a({config:e,src:n,quality:r,width:s[f]})}}({config:W,src:m,unoptimized:x,width:J,quality:$,sizes:w,loader:I}),te=m,tn={imageSrcSet:tt.srcSet,imageSizes:tt.sizes,crossOrigin:N.crossOrigin},ti=a.useRef(T);a.useEffect(()=>{ti.current=T},[T]);let to=a.useRef(k);a.useEffect(()=>{to.current=k},[k]);let tr=i({isLazy:q,imgAttributes:tt,heightInt:Y,widthInt:J,qualityInt:$,className:R,imgStyle:K,blurStyle:Q,loading:b,config:W,fill:L,unoptimized:x,placeholder:P,loader:I,srcString:te,onLoadRef:ti,onLoadingCompleteRef:to,setBlurComplete:Z,setShowAltText:X},N);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,Object.assign({},tr,{ref:e})),v?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+tt.src+tt.srcSet+tt.sizes,rel:"preload",as:"image",href:tt.srcSet?void 0:tt.src},tn))):null)});e.default=w,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7757:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){let{widthInt:e,heightInt:n,blurWidth:i,blurHeight:o,blurDataURL:r,objectFit:l}=t,a=i||e,s=o||n,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},7746:function(t,e){"use strict";function n(t){let{config:e,src:n,width:i,quality:o}=t;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.__next_img_default=!0,e.default=n},5675:function(t,e,n){t.exports=n(3740)},8301:function(t,e,n){"use strict";function i(t){return t.split("-")[1]}function o(t){return"y"===t?"height":"width"}function r(t){return t.split("-")[0]}function l(t){return["top","bottom"].includes(r(t))?"x":"y"}function a(t,e,n){let a,{reference:s,floating:c}=t,f=s.x+s.width/2-c.width/2,u=s.y+s.height/2-c.height/2,d=l(e),g=o(d),p=s[g]/2-c[g]/2,h="x"===d;switch(r(e)){case"top":a={x:f,y:s.y-c.height};break;case"bottom":a={x:f,y:s.y+s.height};break;case"right":a={x:s.x+s.width,y:u};break;case"left":a={x:s.x-c.width,y:u};break;default:a={x:s.x,y:s.y}}switch(i(e)){case"start":a[d]-=p*(n&&h?-1:1);break;case"end":a[d]+=p*(n&&h?-1:1)}return a}n.d(e,{JB:function(){return c},RR:function(){return y},cv:function(){return w},oo:function(){return s},uY:function(){return x}});let s=async(t,e,n)=>{let{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),c=await (null==l.isRTL?void 0:l.isRTL(e)),f=await l.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:d}=a(f,i,c),g=i,p={},h=0;for(let n=0;n<s.length;n++){let{name:r,fn:m}=s[n],{x:y,y:w,data:x,reset:v}=await m({x:u,y:d,initialPlacement:i,placement:g,strategy:o,middlewareData:p,rects:f,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=w?w:d,p={...p,[r]:{...p[r],...x}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:o}):v.rects),{x:u,y:d}=a(f,g,c)),n=-1)}return{x:u,y:d,placement:g,strategy:o,middlewareData:p}};function c(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function f(t,e){var n;void 0===e&&(e={});let{x:i,y:o,platform:r,rects:l,elements:a,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:p=0}=e,h="number"!=typeof p?{top:0,right:0,bottom:0,left:0,...p}:{top:p,right:p,bottom:p,left:p},m=a[g?"floating"===d?"reference":"floating":d],y=c(await r.getClippingRect({element:null==(n=await (null==r.isElement?void 0:r.isElement(m)))||n?m:m.contextElement||await (null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:f,rootBoundary:u,strategy:s})),w="floating"===d?{...l.floating,x:i,y:o}:l.reference,x=await (null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),v=await (null==r.isElement?void 0:r.isElement(x))&&await (null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},b=c(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:s}):w);return{top:(y.top-b.top+h.top)/v.y,bottom:(b.bottom-y.bottom+h.bottom)/v.y,left:(y.left-b.left+h.left)/v.x,right:(b.right-y.right+h.right)/v.x}}let u=Math.min,d=Math.max;["top","right","bottom","left"].reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);let g={left:"right",right:"left",bottom:"top",top:"bottom"};function p(t){return t.replace(/left|right|bottom|top/g,t=>g[t])}let h={start:"end",end:"start"};function m(t){return t.replace(/start|end/g,t=>h[t])}let y=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,a,s,c;let{placement:u,middlewareData:d,rects:g,initialPlacement:h,platform:y,elements:w}=e,{mainAxis:x=!0,crossAxis:v=!0,fallbackPlacements:b,fallbackStrategy:R="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:C=!0,...S}=t,L=r(u),A=r(h)===h,T=await (null==y.isRTL?void 0:y.isRTL(w.floating)),k=b||(A||!C?[p(h)]:function(t){let e=p(t);return[m(t),e,m(e)]}(h));b||"none"===E||k.push(...function(t,e,n,o){let l=i(t),a=function(t,e,n){let i=["left","right"],o=["right","left"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(r(t),"start"===n,o);return l&&(a=a.map(t=>t+"-"+l),e&&(a=a.concat(a.map(m)))),a}(h,C,E,T));let P=[h,...k],_=await f(e,S),j=[],O=(null==(n=d.flip)?void 0:n.overflows)||[];if(x&&j.push(_[L]),v){let{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);let r=i(t),a=l(t),s=o(a),c="x"===a?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[s]>e.floating[s]&&(c=p(c)),{main:c,cross:p(c)}}(u,g,T);j.push(_[t],_[e])}if(O=[...O,{placement:u,overflows:j}],!j.every(t=>t<=0)){let t=((null==(a=d.flip)?void 0:a.index)||0)+1,e=P[t];if(e)return{data:{index:t,overflows:O},reset:{placement:e}};let n=null==(s=O.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:s.placement;if(!n)switch(R){case"bestFit":{let t=null==(c=O.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:c[0];t&&(n=t);break}case"initialPlacement":n=h}if(u!==n)return{reset:{placement:n}}}return{}}}},w=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:o}=e,a=await async function(t,e){let{placement:n,platform:o,elements:a}=t,s=await (null==o.isRTL?void 0:o.isRTL(a.floating)),c=r(n),f=i(n),u="x"===l(n),d=["left","top"].includes(c)?-1:1,g=s&&u?-1:1,p="function"==typeof e?e(t):e,{mainAxis:h,crossAxis:m,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return f&&"number"==typeof y&&(m="end"===f?-1*y:y),u?{x:m*g,y:h*d}:{x:h*d,y:m*g}}(e,t);return{x:n+a.x,y:o+a.y,data:a}}}},x=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:i,placement:o}=e,{mainAxis:a=!0,crossAxis:s=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...g}=t,p={x:n,y:i},h=await f(e,g),m=l(r(o)),y="x"===m?"y":"x",w=p[m],x=p[y];a&&(w=d(w+h["y"===m?"top":"left"],u(w,w-h["y"===m?"bottom":"right"]))),s&&(x=d(x+h["y"===y?"top":"left"],u(x,x-h["y"===y?"bottom":"right"])));let v=c.fn({...e,[m]:w,[y]:x});return{...v,data:{x:v.x-n,y:v.y-i}}}}}},5863:function(t,e,n){"use strict";let i;n.d(e,{oo:function(){return O}});var o=n(8301);function r(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function l(t){return r(t).getComputedStyle(t)}function a(t){return t instanceof r(t).Node}function s(t){return a(t)?(t.nodeName||"").toLowerCase():""}function c(){if(i)return i;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?i=t.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function f(t){return t instanceof r(t).HTMLElement}function u(t){return t instanceof r(t).Element}function d(t){return"undefined"!=typeof ShadowRoot&&(t instanceof r(t).ShadowRoot||t instanceof ShadowRoot)}function g(t){let{overflow:e,overflowX:n,overflowY:i,display:o}=l(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function p(t){let e=/firefox/i.test(c()),n=l(t),i=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!i&&"none"!==i||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(t=>n.willChange.includes(t))||["paint","layout","strict","content"].some(t=>{let e=n.contain;return null!=e&&e.includes(t)})}function h(){return/^((?!chrome|android).)*safari/i.test(c())}function m(t){return["html","body","#document"].includes(s(t))}let y=Math.min,w=Math.max,x=Math.round;function v(t){let e=l(t),n=parseFloat(e.width),i=parseFloat(e.height),o=f(t),r=o?t.offsetWidth:n,a=o?t.offsetHeight:i,s=x(n)!==r||x(i)!==a;return s&&(n=r,i=a),{width:n,height:i,fallback:s}}function b(t){return u(t)?t:t.contextElement}let R={x:1,y:1};function E(t){let e=b(t);if(!f(e))return R;let n=e.getBoundingClientRect(),{width:i,height:o,fallback:r}=v(e),l=(r?x(n.width):n.width)/i,a=(r?x(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}function C(t,e,n,i){var l,a;void 0===e&&(e=!1),void 0===n&&(n=!1);let s=t.getBoundingClientRect(),c=b(t),f=R;e&&(i?u(i)&&(f=E(i)):f=E(t));let d=c?r(c):window,g=h()&&n,p=(s.left+(g&&(null==(l=d.visualViewport)?void 0:l.offsetLeft)||0))/f.x,m=(s.top+(g&&(null==(a=d.visualViewport)?void 0:a.offsetTop)||0))/f.y,y=s.width/f.x,w=s.height/f.y;if(c){let t=r(c),e=i&&u(i)?r(i):i,n=t.frameElement;for(;n&&i&&e!==t;){let t=E(n),e=n.getBoundingClientRect(),i=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(i.paddingTop))*t.y,p*=t.x,m*=t.y,y*=t.x,w*=t.y,p+=e.x,m+=e.y,n=r(n).frameElement}}return(0,o.JB)({width:y,height:w,x:p,y:m})}function S(t){return((a(t)?t.ownerDocument:t.document)||window.document).documentElement}function L(t){return u(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function A(t){return C(S(t)).left+L(t).scrollLeft}function T(t){if("html"===s(t))return t;let e=t.assignedSlot||t.parentNode||d(t)&&t.host||S(t);return d(e)?e.host:e}function k(t,e,n){let i;if("viewport"===e)i=function(t,e){let n=r(t),i=S(t),o=n.visualViewport,l=i.clientWidth,a=i.clientHeight,s=0,c=0;if(o){l=o.width,a=o.height;let t=h();(!t||t&&"fixed"===e)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:l,height:a,x:s,y:c}}(t,n);else if("document"===e)i=function(t){let e=S(t),n=L(t),i=t.ownerDocument.body,o=w(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=w(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),a=-n.scrollLeft+A(t),s=-n.scrollTop;return"rtl"===l(i).direction&&(a+=w(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:a,y:s}}(S(t));else if(u(e))i=function(t,e){let n=C(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=f(t)?E(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}(e,n);else{let n={...e};if(h()){var a,s;let e=r(t);n.x-=(null==(a=e.visualViewport)?void 0:a.offsetLeft)||0,n.y-=(null==(s=e.visualViewport)?void 0:s.offsetTop)||0}i=n}return(0,o.JB)(i)}function P(t,e){return f(t)&&"fixed"!==l(t).position?e?e(t):t.offsetParent:null}function _(t,e){let n=r(t);if(!f(t))return n;let i=P(t,e);for(;i&&["table","td","th"].includes(s(i))&&"static"===l(i).position;)i=P(i,e);return i&&("html"===s(i)||"body"===s(i)&&"static"===l(i).position&&!p(i))?n:i||function(t){let e=T(t);for(;f(e)&&!m(e);){if(p(e))return e;e=T(e)}return null}(t)||n}let j={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t,a="clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let i=(function t(e,n){var i;void 0===n&&(n=[]);let o=function t(e){let n=T(e);return m(n)?n.ownerDocument.body:f(n)&&g(n)?n:t(n)}(e),l=o===(null==(i=e.ownerDocument)?void 0:i.body),a=r(o);return l?n.concat(a,a.visualViewport||[],g(o)?o:[]):n.concat(o,t(o))})(t).filter(t=>u(t)&&"body"!==s(t)),o=null,a="fixed"===l(t).position,c=a?T(t):t;for(;u(c)&&!m(c);){let t=l(c),e=p(c);"fixed"===t.position?o=null:(a?e||o:e||"static"!==t.position||!o||!["absolute","fixed"].includes(o.position))?o=t:i=i.filter(t=>t!==c),c=T(c)}return e.set(t,i),i}(e,this._c):[].concat(n),c=[...a,i],d=c[0],h=c.reduce((t,n)=>{let i=k(e,n,o);return t.top=w(i.top,t.top),t.right=y(i.right,t.right),t.bottom=y(i.bottom,t.bottom),t.left=w(i.left,t.left),t},k(e,d,o));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t,o=f(n),r=S(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},a={x:1,y:1},c={x:0,y:0};if((o||!o&&"fixed"!==i)&&(("body"!==s(n)||g(r))&&(l=L(n)),f(n))){let t=C(n);a=E(n),c.x=t.x+n.clientLeft,c.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-l.scrollLeft*a.x+c.x,y:e.y*a.y-l.scrollTop*a.y+c.y}},isElement:u,getDimensions:function(t){return v(t)},getOffsetParent:_,getDocumentElement:S,getScale:E,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t,o=this.getOffsetParent||_,r=this.getDimensions;return{reference:function(t,e,n){let i=f(e),o=S(e),r=C(t,!0,"fixed"===n,e),l={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(i||!i&&"fixed"!==n){if(("body"!==s(e)||g(o))&&(l=L(e)),f(e)){let t=C(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else o&&(a.x=A(o))}return{x:r.left+l.scrollLeft-a.x,y:r.top+l.scrollTop-a.y,width:r.width,height:r.height}}(e,await o(n),i),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===l(t).direction},O=(t,e,n)=>{let i=new Map,r={platform:j,...n},l={...r.platform,_c:i};return(0,o.oo)(t,e,{...r,platform:l})}}}]);