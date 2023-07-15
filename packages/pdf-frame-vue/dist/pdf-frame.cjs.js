"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("i2djs"),a=require("vue"),C=["i-group","i-circle","i-line","i-path","i-ellipse","i-polygon","i-polyline","i-rect","i-text","i-image","i-page-template"];function b(r){const u={},l={},g={},{render:y}=a.createRenderer({patchProp(e,t,n,i,s,h,c,w,I){x(t)(e,i)},insert:(e,t,n)=>{!e||!t||!t.child||e instanceof p.CanvasGradient||t.child([e])},remove:e=>{e!=null&&e.remove()},createElement:(e,t,n,i)=>{const s=e.split("-").slice(1).join("-");let h=C.indexOf(e),c=null;switch(h===-1&&console.warn(`Unknown I2Djs tag: ${e}`),s){case"page-template":c=r.createTemplate(),l[i.id]=c;break;case"page":c=r.addPage();break;case"linearGradient":c=p.createLinearGradient(),g[i.id]=c;break;case"radialGradient":c=p.createRadialGradient(),g[i.id]=c;break;default:c=m(s);break}return c},createText:e=>{},createComment:e=>{},setText:(e,t)=>{},setElementText:(e,t)=>{},parentNode:e=>e&&e.dom.parent?e.dom.parent:null,nextSibling:e=>(t,n)=>{},querySelector:e=>r.fetchEl(e)||null}),x=e=>(t,n)=>{if(typeof n=="function"&&(n=n(t)),e!=="style")e==="src"&&!u[n]?(u[n]=r.createAsyncTexture({attr:{src:n}}),u[n].then(i=>{u[n]=i.exportAsDataUrl(),t.setAttr(e,u[n])})):e==="src"&&u[n]?t.setAttr(e,u[n]):e==="p-template"&&t instanceof p.CanvasNodeExe?t.addTemplate(l[n]):t.setAttr(e,e==="transform"?d(n):n);else for(let i in n){let s=n[i];if((i==="fillStyle"||i==="strokeStyle")&&typeof s=="string"&&s.startsWith("grad")){const h=s.match(/\(([^)]+)\)/)[1];s=o(h)}t.setStyle(i,s)}};function m(e,t){return new p.CanvasNodeExe(r.ctx,{el:e,attr:{},style:{}},Math.round(Math.random()*1e7),0)}function d(e){const t={};for(const n in e=e.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g)){const i=e[n].match(/[\w\.\-]+/g);t[i.shift()]=i.map(s=>parseFloat(s))}return t}function o(e){return g[e]}return y}let f=null;const S=a.defineComponent({props:{type:{type:String,required:!0},id:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0},margin:{type:Number,required:!0},ctxConfig:{type:Object,required:!0,default:()=>{}},layerSetting:{type:Object,required:!0,default:()=>{}}},setup(r,u){const l=a.getCurrentInstance();a.onMounted(()=>{const d=u.slots.default;f&&f.flush(),f||(r.type==="pdf"?f=y(r):r.type==="canvas"?f=x("#"+r.id,r.ctxConfig,r.layerSetting):console.warn(`Unknown render context: ${r.type}`));const o=b(f);a.nextTick().then(()=>{const e=a.h(g,d);o(e,f)})});const g=a.defineComponent({setup(d,o){const e=a.getCurrentInstance();e.parent=l,e.appContext=l.appContext,e.root=l.root,e.provides=l.provides;const t=o.slots.default;return()=>a.h(a.Fragment,t())}});function y(d){const o=p.pdfLayer({height:d.height,width:d.width,margin:d.margin,el:document.getElementById(d.id)},{onUpdate:e=>{document.getElementById(d.id).setAttribute("src",e)}});return console.log(o),o}function x(d,o,e){return p.canvasLayer(d,o,e)}let m;switch(r.type){case"pdf":m=a.h("iframe",{id:r.id,class:"pdfIframe renderOutput",type:"application/pdf",src:null,style:{height:"100%",width:"100%"}});break;case"canvas":m=a.h("div",{id:r.id,class:"renderOutput"});break;case"default":m=a.h("iframe",{id:r.id,class:"pdfIframe renderOutput",type:"application/pdf",src:null});break}return()=>m}});exports.default=S;
