import{g as c,c as l,r as u,i as p,j as s,y as e,N as a,z as d,p as m,A as f,O as x}from"./index-87733728.js";import{b as h,c as j,d as g,w as N}from"./index.esm-11337bc2.js";const C=()=>{const r=c(),{user:t}=l(i=>i.userSliceReducer),{trips:o}=l(i=>i.tripsSliceReducer),n=()=>{r(f.asyncThunk(null))};return u.useEffect(()=>{r(p.asyncThunk(null))},[]),s.jsxs("aside",{className:e.profileSidebarWrapper,children:[s.jsxs("div",{children:[s.jsxs("div",{className:e.profileHeader,children:[s.jsx("h4",{className:e.profileUserName,children:t.username}),s.jsx("img",{className:e.profileUserImage,src:t.avatar,alt:""}),s.jsxs("p",{className:e.profileTripCount,children:["Count trips: ",o.length]})]}),s.jsxs("ul",{className:e.profileList,children:[s.jsxs(a,{to:d,className:e.profileListItem,children:[s.jsx(h,{}),"Home"]}),s.jsxs(a,{to:m,className:e.profileListItem,children:[s.jsx(j,{}),"Settings"]})]})]}),s.jsx(g,{onClick:n,className:e.logOutIcon})]})},L=()=>s.jsx("div",{children:s.jsx(C,{})}),S="_profileContainer_1d839_1",v={profileContainer:S},P=()=>{const{user:r}=l(t=>t.userSliceReducer);return r===null?null:s.jsxs("div",{className:v.profileContainer,children:[s.jsx(L,{}),s.jsx(x,{})]})},A=N(P);export{A as default};
