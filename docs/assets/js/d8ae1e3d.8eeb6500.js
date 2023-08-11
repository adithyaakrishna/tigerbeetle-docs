"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4},i="Creating accounts and transfers in the Node CLI",c={unversionedId:"quick-start/node-cli",id:"quick-start/node-cli",title:"Creating accounts and transfers in the Node CLI",description:"Once you've got the TigerBeetle server running, let's connect to the",source:"@site/pages/quick-start/node-cli.md",sourceDirName:"quick-start",slug:"/quick-start/node-cli",permalink:"/quick-start/node-cli",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/quick-start/node-cli.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3-node cluster with Docker Compose",permalink:"/quick-start/with-docker-compose"},next:{title:"Client Requests",permalink:"/design/client-requests"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-accounts-and-transfers-in-the-node-cli"},"Creating accounts and transfers in the Node CLI"),(0,a.kt)("p",null,"Once you've got the TigerBeetle server running, let's connect to the\nrunning server and do some accounting!"),(0,a.kt)("p",null,"First install the Node client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install -g tigerbeetle-node\n")),(0,a.kt)("p",null,"Then create a client connection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"node\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'Welcome to Node.js v16.14.0.\nType ".help" for more information.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let { createClient } = require('tigerbeetle-node');\nlet client = createClient({ cluster_id: 0, replica_addresses: ['3000'] });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"info(message_bus): connected to replica 0\n")),(0,a.kt)("p",null,"Now create two accounts. (Don't worry about the details, you can\nread about them later.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let errors = await client.createAccounts([\n  {\n    id: 1n,\n    ledger: 1,\n    code: 718,\n    user_data: 0n,\n    reserved: Buffer.alloc(48, 0),\n    flags: 0,\n    debits_pending: 0n,\n    debits_posted: 0n,\n    credits_pending: 0n,\n    credits_posted: 0n,\n    timestamp: 0n,\n  },\n  {\n    id: 2n,\n    ledger: 1,\n    code: 718,\n    user_data: 0n,\n    reserved: Buffer.alloc(48, 0),\n    flags: 0,\n    debits_pending: 0n,\n    debits_posted: 0n,\n    credits_pending: 0n,\n    credits_posted: 0n,\n    timestamp: 0n,\n  },\n]);\nerrors;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"[]\n")),(0,a.kt)("p",null,"Now create a transfer of ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," (of some amount/currency) between the two accounts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"errors = await client.createTransfers([\n  {\n    id: 1n,\n    debit_account_id: 1n,\n    credit_account_id: 2n,\n    pending_id: 0n,\n    user_data: 0n,\n    reserved: 0n,\n    timeout: 0n,\n    ledger: 1,\n    code: 718,\n    flags: 0,\n    amount: 10n,\n    timestamp: 0n,\n  }\n]);\n")),(0,a.kt)("p",null,"Now, the amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," has been credited to account ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," and debited\nfrom account ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". Let's query TigerBeetle for these two accounts to\nverify!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let accounts = await client.lookupAccounts([1n, 2n]);\nconsole.log(accounts.map(a => ({\n  id: a.id,\n  debits_posted: a.debits_posted,\n  credits_posted: a.credits_posted,\n  timestamp: a.timestamp,\n})));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    id: 1n,\n    debits_posted: 10n,\n    credits_posted: 0n,\n    timestamp: 1662489240014463675n\n  },\n  {\n    id: 2n,\n    debits_posted: 0n,\n    credits_posted: 10n,\n    timestamp: 1662489240014463676n\n  }\n]\n")),(0,a.kt)("p",null,"And indeed you can see that account ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_posted")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),"\nand account ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_posted")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," amount is fully\naccounted for!"))}u.isMDXComponent=!0}}]);