/*! Copyright 2025 Adobe
All Rights Reserved. */
import{FetchGraphQL as i}from"@dropins/tools/fetch-graphql.js";import"@dropins/tools/event-bus.js";import{g as c}from"./persisted-data.js";function u(t){const r=document.cookie.split(";");for(let a=0;a<r.length;a++){const n=r[a].trim();if(n.indexOf(`${t}=`)===0)return n.substring(t.length+1)}return null}const d=(()=>{const t=c();return{cartId:null,authenticated:t?!t.isGuestCart:!1}})(),s=new Proxy(d,{set(t,r,a){var n;if(t[r]=a,r==="cartId"){if(a===s.cartId)return!0;if(a===null)return document.cookie="DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",!0;const e=(n=s.config)==null?void 0:n.cartExpiresInDays;e||console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');const o=new Date;o.setDate(o.getDate()+(e??30)),document.cookie=`DROPIN__CART__CART-ID=${a}; expires=${o.toUTCString()}; path=/`}return!0},get(t,r){return r==="cartId"?u("DROPIN__CART__CART-ID"):t[r]}}),{setEndpoint:f,setFetchGraphQlHeader:C,removeFetchGraphQlHeader:I,setFetchGraphQlHeaders:D,fetchGraphQl:m,getConfig:_}=new i().getMethods(),T=t=>{const r=t.findIndex(({extensions:e})=>(e==null?void 0:e.category)==="graphql-authorization")>-1,a=t.findIndex(({path:e,extensions:o})=>(o==null?void 0:o.category)==="graphql-no-such-entity"&&!(e!=null&&e.includes("applyCouponsToCart")))>-1,n=t.map(e=>e.message).join(" ");if(r||a)return l(),console.error(n),null;throw Error(n)},l=()=>(s.cartId=null,s.authenticated=!1,Promise.resolve(null));export{f as a,C as b,D as c,l as d,m as f,_ as g,T as h,I as r,s};