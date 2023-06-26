import{f as g,r as V,a as B}from"./utils-c9255c54.js";import{d as F,g as f,u as P,h as $,i as j,o as r,c,a,b as q,w as M,j as p,F as N,t as w,n as z,k as D,l as x,m as b,M as I,q as T,B as _,s as C,v as L,x as O,y as A,p as G,e as H,z as J,_ as K}from"./index-9bcdac52.js";const h=i=>(G("data-v-e90e541c"),i=i(),H(),i),Q={class:"container"},R=h(()=>a("div",{class:"heading"},[a("h1",null,"Picture of the day!"),a("span",{class:"sub-title"}," Discover the stunning image chosen for today's picture. ")],-1)),W={class:"datepicker-container"},X=h(()=>a("label",{for:"datepicker"},"Select Date:",-1)),Y=["value"],Z={key:0,class:"image-wrapper"},U=["src","alt"],ee=h(()=>a("i",{class:"cs-heart"},null,-1)),te=[ee],ae={key:1},se=F({__name:"DailyPic",setup(i){const t=f(null),l=f(""),n=f(!1),u=P(),E=async(s=l.value)=>{t.value=null;try{const e=await B.get(`https://api.nasa.gov/planetary/apod?api_key=${window.nasa_api_key}&date=${s}`);if(t.value=e.data,u.state.user){const o=I(x(b,"favoriteImages"),_("uuid","==",u.state.user.uid),_("image","==",t.value.url)),v=await C(o);n.value=!v.empty,console.log(n.value)}}catch(e){console.error(e),t.value=null}},S=async(s,e)=>{const o=x(b,"favoriteImages"),v=I(o,_("uuid","==",e),_("image","==",s),T(1)),y=await C(v),d=L.useToast();if(y.empty){const m={uuid:e,image:s,created_at:J()};try{await O(o,m),n.value=!0,d.success("Imaged successfully added to collection!",{position:"bottom-right"})}catch(k){console.error("Error adding favorite image:",k),d.error("Error adding favorite image: "+k,{position:"bottom-right"})}}else await A(y.docs[0].ref).then(()=>{console.log("Document successfully deleted!"),n.value=!1,d.success("Image successfully removed from collection!",{position:"bottom-right"})}).catch(m=>{console.error("Error deleting document:",m),d.error("Error deleting document: "+m,{position:"bottom-right"})})};return $(l,s=>{const e=g(s);l.value=e,E()}),j(()=>{const s=g(new Date);l.value=s}),(s,e)=>(r(),c("div",Q,[R,a("div",W,[X,q(p(V),{format:p(g),modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),"max-date":new Date},{"dp-input":M(({value:o})=>[a("input",{type:"text",value:o},null,8,Y)]),_:1},8,["format","modelValue","max-date"])]),t.value?(r(),c(N,{key:0},[a("h1",null,w(t.value.title),1),a("p",null,w(t.value.explanation),1),t.value.url?(r(),c("div",Z,[a("img",{src:t.value.url,alt:t.value.title},null,8,U),p(u).state.user?(r(),c("button",{key:0,onClick:e[1]||(e[1]=o=>S(t.value.url,p(u).state.user.uid)),class:z({liked:n.value})},te,2)):D("",!0)])):D("",!0)],64)):(r(),c("p",ae,"Loading..."))]))}});const ne=K(se,[["__scopeId","data-v-e90e541c"]]);export{ne as default};
