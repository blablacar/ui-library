try{
var r="storybook/measure-addon",u=`${r}/tool`;var a=__REACT__,{Children:M,Component:B,Fragment:P,Profiler:D,PureComponent:x,StrictMode:N,Suspense:v,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:H,cloneElement:F,createContext:K,createElement:W,createFactory:Y,createRef:G,forwardRef:w,isValidElement:U,lazy:V,memo:q,useCallback:p,useContext:z,useDebugValue:Z,useEffect:S,useImperativeHandle:$,useLayoutEffect:j,useMemo:J,useReducer:Q,useRef:X,useState:ee,version:te}=__REACT__;var ne=__STORYBOOKAPI__,{ActiveTabs:le,Consumer:ue,ManagerContext:ce,Provider:me,addons:c,combineParameters:ie,controlOrMetaKey:pe,controlOrMetaSymbol:Se,eventMatchesShortcut:de,eventToShortcut:_e,isMacLike:Te,isShortcutTaken:be,keyToSymbol:Oe,merge:ye,mockChannel:Ee,optionOrAltSymbol:Ce,shortcutMatchesShortcut:he,shortcutToHumanString:Ae,types:d,useAddonState:fe,useArgTypes:ge,useArgs:Ie,useChannel:Re,useGlobalTypes:ke,useGlobals:_,useParameter:Le,useSharedState:Me,useStoryPrepared:Be,useStorybookApi:T,useStorybookState:Pe}=__STORYBOOKAPI__;var He=__STORYBOOKCOMPONENTS__,{A:Fe,ActionBar:Ke,AddonPanel:We,Badge:Ye,Bar:Ge,Blockquote:we,Button:Ue,Code:Ve,DL:qe,Div:ze,DocumentWrapper:Ze,ErrorFormatter:$e,FlexBar:je,Form:Je,H1:Qe,H2:Xe,H3:et,H4:tt,H5:ot,H6:rt,HR:at,IconButton:b,IconButtonSkeleton:st,Icons:O,Img:nt,LI:lt,Link:ut,ListItem:ct,Loader:mt,OL:it,P:pt,Placeholder:St,Pre:dt,ResetWrapper:_t,ScrollArea:Tt,Separator:bt,Spaced:Ot,Span:yt,StorybookIcon:Et,StorybookLogo:Ct,Symbols:ht,SyntaxHighlighter:At,TT:ft,TabBar:gt,TabButton:It,TabWrapper:Rt,Table:kt,Tabs:Lt,TabsState:Mt,TooltipLinkList:Bt,TooltipMessage:Pt,TooltipNote:Dt,UL:xt,WithTooltip:Nt,WithTooltipPure:vt,Zoom:Ht,codeCommon:Ft,components:Kt,createCopyToClipboardFunction:Wt,getStoryHref:Yt,icons:Gt,interleaveSeparators:wt,nameSpaceClassNames:Ut,resetComponents:Vt,withReset:qt}=__STORYBOOKCOMPONENTS__;var y=()=>{let[s,m]=_(),{measureEnabled:n}=s,i=T(),l=p(()=>m({measureEnabled:!n}),[m,n]);return S(()=>{i.setAddonShortcut(r,{label:"Toggle Measure [M]",defaultShortcut:["M"],actionName:"measure",showInMenu:!1,action:l})},[l,i]),a.createElement(b,{key:u,active:n,title:"Enable measure",onClick:l},a.createElement(O,{icon:"ruler"}))};c.register(r,()=>{c.add(u,{type:d.TOOL,id:"measure",title:"Measure",match:({viewMode:s})=>s==="story",render:()=>a.createElement(y,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
