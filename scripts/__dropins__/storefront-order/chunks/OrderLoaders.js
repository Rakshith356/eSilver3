/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as e,jsxs as a}from"@dropins/tools/preact-jsx-runtime.js";import"./ShippingStatusCard.js";import{Card as d,Skeleton as i,SkeletonRow as r,CartItemSkeleton as t}from"@dropins/tools/components.js";import{classes as m}from"@dropins/tools/lib.js";const z=({testId:s,withCard:n=!0})=>{const l=a(i,{"data-testid":s??"skeletonLoader",children:[e(r,{variant:"heading",size:"xlarge",fullWidth:!1,lines:1}),e(r,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),e(r,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1})]});return n?l:e(d,{variant:"secondary",className:m(["order-order-loaders","order-order-loaders--card-loader"]),children:l})},v=s=>e(d,{variant:"secondary",...s,children:a(i,{"data-testid":"order-details-skeleton",children:[e(r,{variant:"heading",size:"medium",fullWidth:!0}),e(r,{size:"medium"}),e(r,{variant:"empty",size:"medium"}),e(r,{size:"xlarge"}),e(r,{size:"xlarge"}),e(r,{size:"xlarge"}),e(r,{size:"xlarge"})]})}),g=()=>a(i,{"data-testid":"order-product-list-skeleton",style:{gridTemplateColumns:"1fr"},children:[e(r,{variant:"heading",fullWidth:!0,size:"medium"}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{})]}),p=()=>a(i,{"data-testid":"order-cost-summary-content-skeleton",className:"order-cost-summary-content",children:[e(r,{variant:"heading",size:"small"}),e(r,{variant:"empty",size:"small"}),e(r,{variant:"empty",size:"small"}),e(r,{variant:"empty",size:"small"}),e(r,{variant:"heading",size:"small",fullWidth:!0,lines:3})]}),f=()=>a(i,{"data-testid":"order-header-skeleton",className:"order-header",children:[e(r,{variant:"empty",size:"xlarge",fullWidth:!0}),e(r,{variant:"empty",size:"medium"}),e(r,{variant:"empty",size:"medium"}),e(r,{variant:"empty",size:"medium"}),e(r,{variant:"empty",size:"medium"}),e(r,{variant:"empty",size:"medium"}),e(r,{size:"small",fullWidth:!0}),e(r,{variant:"heading",size:"xsmall",fullWidth:!0})]});export{z as C,v as D,p as O,g as a,f as b};
