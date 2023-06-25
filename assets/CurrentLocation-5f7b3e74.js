import{f as p,a as D,r as x}from"./utils-85cb897d.js";import{d as I,r as u,w as C,f as L,o as n,c as r,b as e,g as S,h as V,i as g,y as B,F as y,t as i,p as E,a as M,_ as O}from"./index-66c68d7e.js";const b=d=>(E("data-v-2c603b28"),d=d(),M(),d),$={class:"container"},F={class:"datepicker-container"},N=b(()=>e("label",{for:"datepicker"},"Select Date:",-1)),P=["value"],U={class:"table-wrapper"},G=b(()=>e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Date"),e("th",null,"Dataset"),e("th",null,"Planet")])],-1)),R=["src"],T={key:1,class:"loader"},j={key:0,class:"error"},q={key:1},z=I({__name:"CurrentLocation",setup(d){const c=u(null),s=u(null),_=u({}),v=u(!1),m=u(null);let l=u(null);const k=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{_.value=a;const t=p(new Date,700);l.value=t,f(_.value,t)},a=>{console.error("Error getting user location:",a)}):console.error("Geolocation is not supported by this browser.")},f=async(a,t)=>{try{c.value=null,s.value=null;const o=await D.get(`https://api.nasa.gov/planetary/earth/assets?lon=${a.coords.latitude}&lat=${a.coords.longitude}&dim=0.300&date=${t}&api_key=${window.nasa_api_key}`);s.value=o.data}catch(o){c.value=o.message,console.log(c.value),s.value=null}finally{if(c.value!=null)return;setTimeout(()=>{h.observe(m.value)},100)}},w={root:null,rootMargin:"0px",threshold:.1},h=new IntersectionObserver(a=>{a.forEach(t=>{if(t.isIntersecting){v.value=!1;const o=new Image;o.src=s.value.url,o.onload=()=>{console.log("loaded"),v.value=!0},h.unobserve(t.target)}})},w);return C(l,a=>{const t=p(a);l.value=t,f(_.value,t)}),L(()=>{k()}),(a,t)=>(n(),r("div",$,[e("div",F,[N,S(g(x),{format:g(p),modelValue:g(l),"onUpdate:modelValue":t[0]||(t[0]=o=>B(l)?l.value=o:l=o),"max-date":new Date},{"dp-input":V(({value:o})=>[e("input",{type:"text",value:o},null,8,P)]),_:1},8,["format","modelValue","max-date"])]),s.value?(n(),r(y,{key:0},[e("div",U,[e("table",null,[G,e("tbody",null,[e("tr",null,[e("td",null,i(s.value.id),1),e("td",null,i(s.value.date),1),e("td",null,i(s.value.resource.dataset),1),e("td",null,i(s.value.resource.planet),1)])])])]),e("div",{ref_key:"imageContainer",ref:m,class:"image-container"},[v.value?(n(),r("img",{key:0,src:s.value.url},null,8,R)):(n(),r("div",T,"Loading Image..."))],512)],64)):(n(),r(y,{key:1},[c.value?(n(),r("span",j,i(c.value),1)):(n(),r("span",q," Loading... "))],64))]))}});const J=O(z,[["__scopeId","data-v-2c603b28"]]);export{J as default};