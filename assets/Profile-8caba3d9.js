import{d as _,u as v,g as h,i as m,o as f,c as g,a as e,a1 as n,a5 as u,M as w,l as y,m as i,B as U,s as x,a6 as E,a7 as S,p as B,e as V,_ as b}from"./index-4ce2c086.js";const l=d=>(B("data-v-39de60d8"),d=d(),V(),d),C={class:"container"},I={class:"profile-wrapper"},M={class:"form-wrapper"},P=l(()=>e("div",{class:"heading"},[e("h1",null," Edit profile ")],-1)),k={class:"input-wrapper"},q=l(()=>e("i",{class:"cs-user"},null,-1)),A={class:"input-wrapper"},D=l(()=>e("i",{class:"cs-password"},null,-1)),N={class:"input-wrapper"},R=l(()=>e("i",{class:"cs-location"},null,-1)),T={class:"input-wrapper"},j=l(()=>e("i",{class:"cs-calendar"},null,-1)),z=_({__name:"Profile",setup(d){const r=v(),s=h({email:"",password:"",age:"",address:""}),p=async()=>{try{s.value.email=r.state.user.email;const o=w(y(i,"usersCollection"),U("uid","==",r.state.user.uid));(await x(o)).forEach(a=>{s.value.address=a.data().address,s.value.age=a.data().age})}catch(o){console.error("Error getting collection data:",o)}},c=async()=>{const o=E(i,"usersCollection",r.state.user.uid),t={uid:r.state.user.uid,age:s.value.age,address:s.value.address};S(o,t,{merge:!0}).then(()=>{console.log("User updated successfully")}).catch(a=>{console.error("Error updating user:",a)})};return m(()=>{p()}),(o,t)=>(f(),g("div",C,[e("div",I,[e("div",M,[P,e("div",k,[q,n(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=a=>s.value.email=a),placeholder:"Email"},null,512),[[u,s.value.email]])]),e("div",A,[D,n(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=a=>s.value.password=a),placeholder:"Password"},null,512),[[u,s.value.password]])]),e("div",N,[R,n(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>s.value.address=a),placeholder:"Address"},null,512),[[u,s.value.address]])]),e("div",T,[j,n(e("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=a=>s.value.age=a),placeholder:"Age"},null,512),[[u,s.value.age]])]),e("button",{onClick:c},"Update")])])]))}});const G=b(z,[["__scopeId","data-v-39de60d8"]]);export{G as default};
