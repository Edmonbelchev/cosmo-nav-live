import{f as X,r as G,a as K}from"./utils-8ae099c7.js";import{d as Z,r as u,z as q,w as H,f as J,o as n,c as l,b as t,g as Q,h as W,i as Y,A as ee,F as S,t as d,j as te,C as ae,p as oe,a as se,_ as ne}from"./index-0e4a841f.js";const _=f=>(oe("data-v-52a695df"),f=f(),se(),f),le={class:"container"},re=_(()=>t("div",{class:"heading"},[t("h1",null,"Detect Current Location"),t("span",{class:"sub-title"}," Please enable location detection on your device. ")],-1)),ce={class:"datepicker-container"},ie=_(()=>t("label",{for:"datepicker"},"Select Date:",-1)),ue=["value"],de={class:"table-wrapper"},_e=_(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Date"),t("th",null,"Dataset"),t("th",null,"Planet")])],-1)),fe={key:0,class:"zoom-buttons"},pe=_(()=>t("i",{class:"cs-zoom-in"},null,-1)),me=[pe],ve=_(()=>t("i",{class:"cs-zoom-out"},null,-1)),he=[ve],ge=["src"],ye={key:2,class:"loader"},ke={key:0,class:"error"},we={key:1},Ce=Z({__name:"CurrentLocation",setup(f){const c=u(null),s=u(null),y=u({}),p=u(!1),k=u(null);let r=u(null);const E=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{y.value=e;const a=X(new Date,700);r.value=a,P(y.value,a)},e=>{console.error("Error getting user location:",e)}):console.error("Geolocation is not supported by this browser.")},P=async(e,a)=>{try{c.value=null,s.value=null;const o=await K.get(`https://api.nasa.gov/planetary/earth/assets?lon=${e.coords.latitude}&lat=${e.coords.longitude}&dim=0.300&date=${a}&api_key=${window.nasa_api_key}`);s.value=o.data}catch(o){c.value=o.message,console.log(c.value),s.value=null}finally{if(c.value!=null)return;setTimeout(()=>{$.observe(k.value)},100)}},z={root:null,rootMargin:"0px",threshold:.1},$=new IntersectionObserver(e=>{e.forEach(a=>{if(a.isIntersecting){p.value=!1;const o=new Image;o.src=s.value.url,o.onload=()=>{console.log("loaded"),p.value=!0},$.unobserve(a.target)}})},z),w=q({transform:"scale(1) translate(0, 0)"});let C=!1,D=0,b=0,m=0,v=0,i=1;const x=e=>e instanceof MouseEvent?e.clientX:e.touches.length>0?e.touches[0].clientX:0,I=e=>e instanceof MouseEvent?e.clientY:e.touches.length>0?e.touches[0].clientY:0,V=e=>{C=!0,D=x(e),b=I(e)},B=e=>{if(C){const a=x(e)-D,o=I(e)-b;m+=a,v+=o,D=x(e),b=I(e),j()}},R=()=>{C=!1},L=(e,a=!0)=>{const o=e.shiftKey?-.1:.1,h=a?i+o:i-o;if(h>=.5&&h<=2){const g=k.value.getBoundingClientRect(),N=g.width/2,O=g.height/2,F=e.clientX-g.left,T=e.clientY-g.top,M=h/i,U=(1-M)*(F-N),A=(1-M)*(T-O);m+=U,v+=A,i=h,w.transform=`scale(${i}) translate(${m}px, ${v}px)`}},j=()=>{w.transform=`scale(${i}) translate(${m}px, ${v}px)`};return H(r,e=>{const a=X(e);r.value=a,P(y.value,a)}),J(()=>{E()}),(e,a)=>(n(),l("div",le,[re,t("div",ce,[ie,Q(Y(G),{format:Y(X),modelValue:Y(r),"onUpdate:modelValue":a[0]||(a[0]=o=>ee(r)?r.value=o:r=o),"max-date":new Date},{"dp-input":W(({value:o})=>[t("input",{type:"text",value:o},null,8,ue)]),_:1},8,["format","modelValue","max-date"])]),s.value?(n(),l(S,{key:0},[t("div",de,[t("table",null,[_e,t("tbody",null,[t("tr",null,[t("td",null,d(s.value.id),1),t("td",null,d(s.value.date),1),t("td",null,d(s.value.resource.dataset),1),t("td",null,d(s.value.resource.planet),1)])])])]),t("div",{ref_key:"imageContainer",ref:k,class:"image-container",onMousedown:V,onMousemove:B,onMouseup:R},[p.value?(n(),l("div",fe,[t("a",{href:"javascript:void(0);",onClick:a[1]||(a[1]=o=>L(o,!0))},me),t("a",{href:"javascript:void(0);",onClick:a[2]||(a[2]=o=>L(o,!1))},he)])):te("",!0),p.value?(n(),l("img",{key:1,src:s.value.url,style:ae(w)},null,12,ge)):(n(),l("div",ye,"Loading Image..."))],544)],64)):(n(),l(S,{key:1},[c.value?(n(),l("span",ke,d(c.value),1)):(n(),l("span",we," Loading... "))],64))]))}});const xe=ne(Ce,[["__scopeId","data-v-52a695df"]]);export{xe as default};
