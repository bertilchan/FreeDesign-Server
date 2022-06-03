import{J as l,a as u,M as h,e as B,d as H,u as r,D as c,X as m,o as b}from"./vendor.7bc67b35.js";import{_ as C}from"./index.4119df0a.js";var G="data:image/png;base64,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",L="data:image/png;base64,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",R="data:image/png;base64,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";const v={style:{display:"inline-block"}},I=["src","alt","width","height"],D={name:"UserImage"},Q=Object.assign(D,{props:{alt:{type:String,default:""},src:{type:[String,null],default:null},width:{type:[Number,String,null],default:null},height:{type:[Number,String,null],default:null},onLoad:{type:[Function,null],default:null},onError:{type:[Function,null],default:null}},setup(g){const A=g;m(e=>({f937cab2:r(o),"615f7f34":r(n),e2ac8f8e:r(R)}));const i=120,U=120,o=l(()=>{var e;if(typeof A.width=="number")return`${A.width}`;if(typeof A.width=="string"){let t=+A.width;if(Number.isFinite(t))return t}return(e=A.width)!=null?e:i}),n=l(()=>{var e;if(typeof A.height=="number")return`${A.height}`;if(typeof A.height=="string"){let t=+A.height;if(Number.isFinite(t))return t}return(e=A.height)!=null?e:U}),s=u(!1),E=l(()=>s.value?L:!A.src||A.src===""?G:A.src),a=u(!0),f=e=>{a.value=!1,s.value=!0,A.onError&&A.onError(e)};h(()=>A.src,()=>{s.value=!1,a.value=!0});const d=e=>{a.value=!1,A.onLoad&&A.onLoad(e)};return(e,t)=>(b(),B("div",v,[H("img",{src:r(E),alt:A.alt,width:r(o),height:r(n),onload:d,onerror:f,class:c({loading:a.value,error:s.value,empty:!A.src})},null,10,I)]))}});var y=C(Q,[["__scopeId","data-v-7d695372"]]);export{y as default};