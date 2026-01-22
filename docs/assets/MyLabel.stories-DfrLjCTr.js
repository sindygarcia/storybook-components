import{j as p}from"./jsx-runtime-u17CrQMm.js";const s=({label:o,size:n="normal",allCaps:c=!1,color:i="text-primary",fontColor:t=""})=>p.jsx("span",{className:`label ${n} ${i}`,style:t?{color:t}:void 0,children:c?o.toUpperCase():o});s.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether to capitalize the label",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color of the label",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Font color of the label",defaultValue:{value:"''",computed:!1}}}};const u={title:"MyLabel",component:s,tags:["autodocs"],argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}},parameters:{layout:"centered"}},e={args:{label:"Basic Label"}},a={args:{label:"Secondary Label",color:"text-secondary"}},r={args:{label:"All Caps Label",allCaps:!0}},l={args:{label:"Custom Color Label",fontColor:"green"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: 'green'
  }
}`,...l.parameters?.docs?.source}}};const d=["Basic","Secondary","AllCaps","CustomColor"];export{r as AllCaps,e as Basic,l as CustomColor,a as Secondary,d as __namedExportsOrder,u as default};
