"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("i2djs"),a=require("vue"),C=["i-group","i-circle","i-line","i-path","i-ellipse","i-polygon","i-polyline","i-rect","i-text","i-image","i-page","i-linearGradient","i-radialGradient","i-page-template"];function x(r){const u={},f={},p={},{render:y}=a.createRenderer({patchProp(e,t,n,d,c,m,l,S,q){g(t)(e,d)},insert:(e,t,n)=>{!e||!t||!t.child||e instanceof h.CanvasGradient||t.child([e])},remove:e=>{e!=null&&e.remove()},createElement:(e,t,n,d)=>{const c=e.split("-").slice(1).join("-");let m=C.indexOf(e),l=null;switch(m===-1&&console.warn(`Unknown PDF-Frame tag: ${e}`),c){case"page-template":l=r.createTemplate(),f[d.id]=l;break;case"page":l=r.addPage();break;case"linearGradient":l=h.createLinearGradient(),p[d.id]=l;break;case"radialGradient":l=h.createRadialGradient(),p[d.id]=l;break;default:l=b(c);break}return l},createText:e=>{},createComment:e=>{},setText:(e,t)=>{},setElementText:(e,t)=>{},parentNode:e=>e&&e.dom.parent?e.dom.parent:null,nextSibling:e=>(t,n)=>{},querySelector:e=>r.fetchEl(e)||null}),g=e=>(t,n)=>{if(typeof n=="function"&&(n=n(t)),e!=="style")e==="src"&&!u[n]?(u[n]=r.createAsyncTexture({attr:{src:n}}),u[n].then(d=>{u[n]=d.exportAsDataUrl(),t.setAttr(e,u[n])})):e==="src"&&u[n]?t.setAttr(e,u[n]):e==="text"&&n?t.text(n):e==="p-template"&&t instanceof h.CanvasNodeExe?t.addTemplate(f[n]):t.setAttr(e,e==="transform"?i(n):n);else for(let d in n){let c=n[d];if((d==="fillStyle"||d==="strokeStyle")&&typeof c=="string"&&c.startsWith("grad")){const m=c.match(/\(([^)]+)\)/)[1];c=s(m)}t.setStyle(d,c)}};function b(e,t){return new h.CanvasNodeExe(r.ctx,{el:e,attr:{},style:{}},Math.round(Math.random()*1e7),0)}function i(e){if(typeof e=="object"&&!Array.isArray(e)&&e!==null)return e;const t={};for(const n in e=e.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g)){const d=e[n].match(/[\w\.\-]+/g);t[d.shift()]=d.map(c=>parseFloat(c))}return t}function s(e){return p[e]}return y}let o=null;const w=a.defineComponent({props:{type:{type:String,required:!0,default:"pdf"},id:{type:String,required:!0,default:"pdf-frame-id"},height:{type:Number,required:!0,default:0},width:{type:Number,required:!0,default:0},layerSetting:{type:Object,required:!1,default:()=>{}},onUpdate:{type:Function,required:!1,default:()=>{}},config:{type:Object,required:!1,default:()=>{}},info:{type:Object,required:!1,default:()=>{}},encryption:{type:Object,required:!1,default:()=>{}}},setup(r,u){let f;const p=a.getCurrentInstance();a.onMounted(()=>{a.nextTick().then(()=>{const i=u.slots.default;o||(r.type==="pdf"||r.type==="pdf-blob"?o=g(r):r.type==="canvas"?o=b(r):console.warn(`Unknown render context: ${r.type}`));const s=x(o),e=a.h(y,i);s(e,o)})}),a.onUnmounted(()=>{o&&(o.destroy(),o=null)}),a.watch(()=>r.encryption,i=>{o.setConfig&&o.setConfig({encryption:i})},{deep:!0}),a.watch(()=>r.info,i=>{o.setConfig&&o.setConfig({info:i})},{deep:!0}),a.watch(()=>r.config,i=>{o.setConfig&&o.setConfig({...i})},{deep:!0});const y=a.defineComponent({setup(i,s){const e=a.getCurrentInstance();e.parent=p,e.appContext=p.appContext,e.root=p.root,e.provides=p.provides;const t=s.slots.default;return()=>a.h(a.Fragment,t())}});function g(i){let s=document.getElementById(f.props.id);return h.pdfLayer(s,{height:i.height,width:i.width,...i.config||{},info:i.info||{},encryption:i.encryption||{}},{autoUpdate:!0,onUpdate:t=>{s.tagName==="IFRAME"&&s.setAttribute("src",t),i.onUpdate&&i.onUpdate(t)}})}function b(i){let s=document.getElementById(f.props.id);return h.canvasLayer(s,i.config,i.layerSetting)}switch(r.type){case"pdf":f=a.h("iframe",{id:r.id,class:"pdfIframe renderOutput",type:"application/pdf",src:null,style:{height:"100%",width:"100%"}});break;case"pdf-blob":f=a.h("div",{id:r.id,class:"renderOutput",style:{height:"100%",width:"100%"}});break;case"canvas":f=a.h("div",{id:r.id,class:"renderOutput",style:{height:"100%",width:"100%"}});break;case"default":f=a.h("iframe",{id:r.id,class:"pdfIframe renderOutput",type:"application/pdf",src:null,style:{height:"100%",width:"100%"}});break}return()=>f}});exports.default=w;
