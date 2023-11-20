"use strict";(self.webpackChunkwebsuckit_docs=self.webpackChunkwebsuckit_docs||[]).push([[242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>I,default:()=>_,frontMatter:()=>j,metadata:()=>T,toc:()=>D});var a=n(7462),r=n(7294),l=n(3905),i=n(6010),o=n(2466),c=n(6550),s=n(1980),u=n(7392),p=n(12);function h(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,s]=k({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=c??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}const C={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(C.tabItem,a),hidden:n},t)}const j={sidebar_position:1},I="Javascript Quick Start",T={unversionedId:"SDK quick start copy/javascript-quick-start",id:"SDK quick start copy/javascript-quick-start",title:"Javascript Quick Start",description:"Integrate the WebSuckIt SDK to your JavaScript application",source:"@site/docs/SDK quick start copy/javascript-quick-start.mdx",sourceDirName:"SDK quick start copy",slug:"/SDK quick start copy/javascript-quick-start",permalink:"/SDK quick start copy/javascript-quick-start",draft:!1,editUrl:"https://github.com/WebSuckIt/web-suck-it-docs/edit/main/docs/SDK quick start copy/javascript-quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK quick start",permalink:"/category/sdk-quick-start"},next:{title:"Python Quick Start",permalink:"/SDK quick start copy/python-quick-start"}},E={},D=[{value:"Integrate the WebSuckIt SDK to your JavaScript application",id:"integrate-the-websuckit-sdk-to-your-javascript-application",level:2},{value:"Install via NPM",id:"install-via-npm",level:3},{value:"Include via CDN",id:"include-via-cdn",level:3},{value:"Initialization",id:"initialization",level:2},{value:"Import the SDK",id:"import-the-sdk",level:3},{value:"Initialize the SDK",id:"initialize-the-sdk",level:3},{value:"Channel",id:"channel",level:2},{value:"Accessing a channel&#39;s websocket URL",id:"accessing-a-channels-websocket-url",level:3},{value:"Create a channel",id:"create-a-channel",level:3},{value:"Get a channel",id:"get-a-channel",level:3},{value:"Get channels",id:"get-channels",level:3},{value:"Get or create channel",id:"get-or-create-channel",level:3},{value:"Update a channel",id:"update-a-channel",level:3},{value:"Delete a channel",id:"delete-a-channel",level:3}],q={toc:D},O="wrapper";function _(e){let{components:t,...n}=e;return(0,l.kt)(O,(0,a.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"javascript-quick-start"},"Javascript Quick Start"),(0,l.kt)("h2",{id:"integrate-the-websuckit-sdk-to-your-javascript-application"},"Integrate the WebSuckIt SDK to your JavaScript application"),(0,l.kt)("h3",{id:"install-via-npm"},"Install via NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @websuckit/js\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("h3",{id:"include-via-cdn"},"Include via CDN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@websuckit/js/dist/websuckit.umd.js"><\/script>\n')),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("h3",{id:"import-the-sdk"},"Import the SDK"),(0,l.kt)(N,{mdxType:"Tabs"},(0,l.kt)(S,{value:"es6",label:"ES6",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,"import Websuckit from '@websuckit/js';")),(0,l.kt)(S,{value:"commonjs",label:"CommonJS",mdxType:"TabItem"},(0,l.kt)("pre",null,"const Websuckit = require('@websuckit/js');"))),(0,l.kt)("h3",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ws = new Websuckit({\n userId: USER_ID,\n accessKey: ACCESS_KEY,\n publicKey: PUBLIC_KEY\n});\n")),(0,l.kt)("p",null,"You can obtain your ",(0,l.kt)("inlineCode",{parentName:"p"},"USER_ID"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"PUBLIC_KEY")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://websuckit.com/api-keys"},"WebSuckIt dashboard"),". For guidance on how to do this, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://websuckit.com/docs/quick-start"},(0,l.kt)("strong",{parentName:"a"},"quick start guide")),"."),(0,l.kt)("h2",{id:"channel"},"Channel"),(0,l.kt)("h3",{id:"accessing-a-channels-websocket-url"},"Accessing a channel's websocket URL"),(0,l.kt)("p",null,"To obtain a channel's websocket URL, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getConnectionUrl")," method. This method takes an object with the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelName"),": The name of the channel you want to connect to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelPassKey"),": The passkey of the channel you want to connect to.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const connectionUrl = ws.getConnectionUrl({\n channelName: CHANNEL_NAME,\n channelPassKey: CHANNEL_PASSKEY\n});\n")),(0,l.kt)("h3",{id:"create-a-channel"},"Create a channel"),(0,l.kt)("p",null,"To create a channel, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"createChannel")," method, it returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," that resolves to a channel object. This method takes an object with the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," property, specifying the name of the channel you want to create. The channel name should be in the format of a slug, for example, 'test-channel'."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: please use only alphanumeric characters and hyphens (-) in channel names.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const channelResponse = ws.createChannel({\n channel: "channel-name"\n});\n')),(0,l.kt)("h3",{id:"get-a-channel"},"Get a channel"),(0,l.kt)("p",null,"To retrieve an existing channel, you can utilize the ",(0,l.kt)("inlineCode",{parentName:"p"},"getChannel")," method. This method takes an object with the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," property, which specifies the name of the channel you wish to retrieve. It returns a promise that resolves to a channel object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const channelResponse = ws.getChannel({\n channel: "channel-name"\n});\n')),(0,l.kt)("h3",{id:"get-channels"},"Get channels"),(0,l.kt)("p",null,"You can retrieve a list of all your channels using the ",(0,l.kt)("inlineCode",{parentName:"p"},"getChannels")," method. This method takes an object with the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"page"),": The page number (0-indexed)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"per_page"),": The number of channels per page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"search_key")," (optional): Filter by channel name.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const channelsResponse = ws.getChannels({\n page: "1", // Page number (0-indexed)\n per_page: "10", // Number of channels per page\n search_key: "channel-name" // Filter by channel name\n});\n')),(0,l.kt)("h3",{id:"get-or-create-channel"},"Get or create channel"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"getOrCreateChannel")," method to get an existing channel or create a new one. This method takes an object with the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," property, specifying the name of the channel you want to get or create."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const channelResponse = ws.getOrCreateChannel({\n channel: "channel-name"\n});\n')),(0,l.kt)("h3",{id:"update-a-channel"},"Update a channel"),(0,l.kt)("p",null,"To update a channel, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"updateChannel")," method. This method takes an object with the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelId"),": The unique identifier (UUID) of the channel you want to update."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel"),": The new name for the channel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"regenerate_pass_key")," (optional): A boolean value that, if set to true, regenerates the channel passkey. If set to false, the passkey remains unchanged.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const channelResponse = ws.updateChannel({\n channelId: "channel-id",\n channel: "new-channel-name",\n regenerate_pass_key: false // (optional) if true, the channel passkey will be regenerated\n});\n')),(0,l.kt)("h3",{id:"delete-a-channel"},"Delete a channel"),(0,l.kt)("p",null,"Use the deleteChannel method to delete an existing channel."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'$deleteResponse = $ws->deleteChannel("channel-id");\n')))}_.isMDXComponent=!0}}]);