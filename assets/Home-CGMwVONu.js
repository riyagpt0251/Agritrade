import{$ as P,R as K,r as c,j as r,d as g,m as se}from"./index-frYVYmaC.js";import{u as W,c as k,a as wt,b as Ye,d as Ke,C as B,F as le,e as Me,f as ze,g as Et,h as V,i as Ct,j as Nt,k as Pe,l as kt,m as St,n as Rt,o as Tt,p as It,B as $t}from"./Container-B150SS7Y.js";function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},fe.apply(null,arguments)}function Ve(e,t){if(e==null)return{};var s={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;s[n]=e[n]}return s}function pe(e,t){return pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,n){return s.__proto__=n,s},pe(e,t)}function Dt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pe(e,t)}const Le={disabled:!1},Ge=P.createContext(null);var Ot=function(t){return t.scrollTop},G="unmounted",M="exited",z="entering",U="entered",me="exiting",S=function(e){Dt(t,e);function t(n,a){var o;o=e.call(this,n,a)||this;var i=a,l=i&&!i.isMounting?n.enter:n.appear,u;return o.appearStatus=null,n.in?l?(u=M,o.appearStatus=z):u=U:n.unmountOnExit||n.mountOnEnter?u=G:u=M,o.state={status:u},o.nextCallback=null,o}t.getDerivedStateFromProps=function(a,o){var i=a.in;return i&&o.status===G?{status:M}:null};var s=t.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(a){var o=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==z&&i!==U&&(o=z):(i===z||i===U)&&(o=me)}this.updateStatus(!1,o)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var a=this.props.timeout,o,i,l;return o=i=l=a,a!=null&&typeof a!="number"&&(o=a.exit,i=a.enter,l=a.appear!==void 0?a.appear:i),{exit:o,enter:i,appear:l}},s.updateStatus=function(a,o){if(a===void 0&&(a=!1),o!==null)if(this.cancelNextCallback(),o===z){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:K.findDOMNode(this);i&&Ot(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===M&&this.setState({status:G})},s.performEnter=function(a){var o=this,i=this.props.enter,l=this.context?this.context.isMounting:a,u=this.props.nodeRef?[l]:[K.findDOMNode(this),l],f=u[0],p=u[1],h=this.getTimeouts(),m=l?h.appear:h.enter;if(!a&&!i||Le.disabled){this.safeSetState({status:U},function(){o.props.onEntered(f)});return}this.props.onEnter(f,p),this.safeSetState({status:z},function(){o.props.onEntering(f,p),o.onTransitionEnd(m,function(){o.safeSetState({status:U},function(){o.props.onEntered(f,p)})})})},s.performExit=function(){var a=this,o=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:K.findDOMNode(this);if(!o||Le.disabled){this.safeSetState({status:M},function(){a.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:me},function(){a.props.onExiting(l),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:M},function(){a.props.onExited(l)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(a,o){o=this.setNextCallback(o),this.setState(a,o)},s.setNextCallback=function(a){var o=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,o.nextCallback=null,a(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},s.onTransitionEnd=function(a,o){this.setNextCallback(o);var i=this.props.nodeRef?this.props.nodeRef.current:K.findDOMNode(this),l=a==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],f=u[0],p=u[1];this.props.addEndListener(f,p)}a!=null&&setTimeout(this.nextCallback,a)},s.render=function(){var a=this.state.status;if(a===G)return null;var o=this.props,i=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var l=Ve(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return P.createElement(Ge.Provider,{value:null},typeof i=="function"?i(a,l):P.cloneElement(P.Children.only(i),l))},t}(P.Component);S.contextType=Ge;S.propTypes={};function A(){}S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A};S.UNMOUNTED=G;S.EXITED=M;S.ENTERING=z;S.ENTERED=U;S.EXITING=me;function Fe(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Mt(e){var t=zt(e,"string");return typeof t=="symbol"?t:String(t)}function zt(e,t){if(typeof e!="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var n=s.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Pt(e,t,s){var n=c.useRef(e!==void 0),a=c.useState(t),o=a[0],i=a[1],l=e!==void 0,u=n.current;return n.current=l,!l&&u&&o!==t&&i(t),[l?e:o,c.useCallback(function(f){for(var p=arguments.length,h=new Array(p>1?p-1:0),m=1;m<p;m++)h[m-1]=arguments[m];s&&s.apply(void 0,[f].concat(h)),i(f)},[s])]}function Lt(e,t){return Object.keys(t).reduce(function(s,n){var a,o=s,i=o[Fe(n)],l=o[n],u=Ve(o,[Fe(n),n].map(Mt)),f=t[n],p=Pt(l,i,e[f]),h=p[0],m=p[1];return fe({},u,(a={},a[n]=h,a[f]=m,a))},e)}function Ft(e){return e&&e.ownerDocument||document}function _t(e){var t=Ft(e);return t&&t.defaultView||window}function Bt(e,t){return _t(e).getComputedStyle(e,t)}var At=/([A-Z])/g;function Ut(e){return e.replace(At,"-$1").toLowerCase()}var Wt=/^ms-/;function ne(e){return Ut(e).replace(Wt,"-ms-")}var Ht=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function qt(e){return!!(e&&Ht.test(e))}function Je(e,t){var s="",n="";if(typeof t=="string")return e.style.getPropertyValue(ne(t))||Bt(e).getPropertyValue(ne(t));Object.keys(t).forEach(function(a){var o=t[a];!o&&o!==0?e.style.removeProperty(ne(a)):qt(a)?n+=a+"("+o+") ":s+=ne(a)+": "+o+";"}),n&&(s+="transform: "+n+";"),e.style.cssText+=";"+s}const Xt=!!(typeof window<"u"&&window.document&&window.document.createElement);var he=!1,xe=!1;try{var ue={get passive(){return he=!0},get once(){return xe=he=!0}};Xt&&(window.addEventListener("test",ue,ue),window.removeEventListener("test",ue,!0))}catch{}function Yt(e,t,s,n){if(n&&typeof n!="boolean"&&!xe){var a=n.once,o=n.capture,i=s;!xe&&a&&(i=s.__once||function l(u){this.removeEventListener(t,l,o),s.call(this,u)},s.__once=i),e.addEventListener(t,i,he?n:o)}e.addEventListener(t,s,n)}function Kt(e,t,s,n){var a=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,s,a),s.__once&&e.removeEventListener(t,s.__once,a)}function Ze(e,t,s,n){return Yt(e,t,s,n),function(){Kt(e,t,s,n)}}function Vt(e,t,s,n){if(n===void 0&&(n=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,s,n),e.dispatchEvent(a)}}function Gt(e){var t=Je(e,"transitionDuration")||"",s=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*s}function Jt(e,t,s){s===void 0&&(s=5);var n=!1,a=setTimeout(function(){n||Vt(e,"transitionend",!0)},t+s),o=Ze(e,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(a),o()}}function Zt(e,t,s,n){s==null&&(s=Gt(e)||0);var a=Jt(e,s,n),o=Ze(e,"transitionend",t);return function(){a(),o()}}function _e(e,t){const s=Je(e,t)||"",n=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*n}function Qt(e,t){const s=_e(e,"transitionDuration"),n=_e(e,"transitionDelay"),a=Zt(e,o=>{o.target===e&&(a(),t(o))},s+n)}function en(e){e.offsetHeight}const Be=e=>!e||typeof e=="function"?e:t=>{e.current=t};function tn(e,t){const s=Be(e),n=Be(t);return a=>{s&&s(a),n&&n(a)}}function nn(e,t){return c.useMemo(()=>tn(e,t),[e,t])}function rn(e){return e&&"setState"in e?K.findDOMNode(e):e??null}const sn=P.forwardRef(({onEnter:e,onEntering:t,onEntered:s,onExit:n,onExiting:a,onExited:o,addEndListener:i,children:l,childRef:u,...f},p)=>{const h=c.useRef(null),m=nn(h,u),v=y=>{m(rn(y))},j=y=>$=>{y&&h.current&&y(h.current,$)},Z=c.useCallback(j(e),[e]),H=c.useCallback(j(t),[t]),R=c.useCallback(j(s),[s]),q=c.useCallback(j(n),[n]),X=c.useCallback(j(a),[a]),I=c.useCallback(j(o),[o]),Q=c.useCallback(j(i),[i]);return r.jsx(S,{ref:p,...f,onEnter:Z,onEntered:R,onEntering:H,onExit:q,onExited:I,onExiting:X,addEndListener:Q,nodeRef:h,children:typeof l=="function"?(y,$)=>l(y,{...$,ref:v}):P.cloneElement(l,{ref:v})})});function Qe(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e},[e]),t}function Ae(e){const t=Qe(e);return c.useCallback(function(...s){return t.current&&t.current(...s)},[t])}function on(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e},[e]),t}function an(e){const t=on(e);return c.useCallback(function(...s){return t.current&&t.current(...s)},[t])}const cn=["as","disabled"];function ln(e,t){if(e==null)return{};var s={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;s[n]=e[n]}return s}function un(e){return!e||e.trim()==="#"}function ve({tagName:e,disabled:t,href:s,target:n,rel:a,role:o,onClick:i,tabIndex:l=0,type:u}){e||(s!=null||n!=null||a!=null?e="a":e="button");const f={tagName:e};if(e==="button")return[{type:u||"button",disabled:t},f];const p=m=>{if((t||e==="a"&&un(s))&&m.preventDefault(),t){m.stopPropagation();return}i==null||i(m)},h=m=>{m.key===" "&&(m.preventDefault(),p(m))};return e==="a"&&(s||(s="#"),t&&(s=void 0)),[{role:o??"button",disabled:void 0,tabIndex:t?void 0:l,href:s,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:p,onKeyDown:h},f]}const dn=c.forwardRef((e,t)=>{let{as:s,disabled:n}=e,a=ln(e,cn);const[o,{tagName:i}]=ve(Object.assign({tagName:s,disabled:n},a));return r.jsx(i,Object.assign({},a,o,{ref:t}))});dn.displayName="Button";const fn=["onKeyDown"];function pn(e,t){if(e==null)return{};var s={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;s[n]=e[n]}return s}function mn(e){return!e||e.trim()==="#"}const ge=c.forwardRef((e,t)=>{let{onKeyDown:s}=e,n=pn(e,fn);const[a]=ve(Object.assign({tagName:"a"},n)),o=an(i=>{a.onKeyDown(i),s==null||s(i)});return mn(n.href)||n.role==="button"?r.jsx("a",Object.assign({ref:t},n,a,{onKeyDown:o})):r.jsx("a",Object.assign({ref:t},n,{onKeyDown:s}))});ge.displayName="Anchor";const je=c.forwardRef(({as:e,bsPrefix:t,variant:s="primary",size:n,active:a=!1,disabled:o=!1,className:i,...l},u)=>{const f=W(t,"btn"),[p,{tagName:h}]=ve({tagName:e,disabled:o,...l}),m=h;return r.jsx(m,{...p,...l,ref:u,disabled:o,className:k(i,f,a&&"active",s&&`${f}-${s}`,n&&`${f}-${n}`,l.href&&o&&"disabled")})});je.displayName="Button";function hn(e,t){const s=c.useRef(!0);c.useEffect(()=>{if(s.current){s.current=!1;return}return e()},t)}function xn(){const e=c.useRef(!0),t=c.useRef(()=>e.current);return c.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function gn(e){const t=c.useRef(e);return t.current=e,t}function bn(e){const t=gn(e);c.useEffect(()=>()=>t.current(),[])}const be=2**31-1;function et(e,t,s){const n=s-Date.now();e.current=n<=be?setTimeout(t,n):setTimeout(()=>et(e,t,s),be)}function vn(){const e=xn(),t=c.useRef();return bn(()=>clearTimeout(t.current)),c.useMemo(()=>{const s=()=>clearTimeout(t.current);function n(a,o=0){e()&&(s(),o<=be?t.current=setTimeout(a,o):et(t,a,Date.now()+o))}return{set:n,clear:s,handleRef:t}},[])}const tt=c.forwardRef(({className:e,bsPrefix:t,as:s="div",...n},a)=>(t=W(t,"carousel-caption"),r.jsx(s,{ref:a,className:k(e,t),...n})));tt.displayName="CarouselCaption";const nt=c.forwardRef(({as:e="div",bsPrefix:t,className:s,...n},a)=>{const o=k(s,W(t,"carousel-item"));return r.jsx(e,{ref:a,...n,className:o})});nt.displayName="CarouselItem";function Ue(e,t){let s=0;return c.Children.map(e,n=>c.isValidElement(n)?t(n,s++):n)}function jn(e,t){let s=0;c.Children.forEach(e,n=>{c.isValidElement(n)&&t(n,s++)})}const yn=40;function wn(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const rt=c.forwardRef(({defaultActiveIndex:e=0,...t},s)=>{const{as:n="div",bsPrefix:a,slide:o=!0,fade:i=!1,controls:l=!0,indicators:u=!0,indicatorLabels:f=[],activeIndex:p,onSelect:h,onSlide:m,onSlid:v,interval:j=5e3,keyboard:Z=!0,onKeyDown:H,pause:R="hover",onMouseOver:q,onMouseOut:X,wrap:I=!0,touch:Q=!0,onTouchStart:y,onTouchMove:$,onTouchEnd:oe,prevIcon:ot=r.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:ye="Previous",nextIcon:at=r.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:we="Next",variant:Ee,className:it,children:ae,...ct}=Lt({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),C=W(a,"carousel"),L=wt(),F=c.useRef(null),[Ce,Ne]=c.useState("next"),[lt,ee]=c.useState(!1),[_,ke]=c.useState(!1),[b,ut]=c.useState(p||0);c.useEffect(()=>{!_&&p!==b&&(F.current?Ne(F.current):Ne((p||0)>b?"next":"prev"),o&&ke(!0),ut(p||0))},[p,_,b,o]),c.useEffect(()=>{F.current&&(F.current=null)});let D=0,Se;jn(ae,(d,x)=>{++D,x===p&&(Se=d.props.interval)});const Re=Qe(Se),w=c.useCallback(d=>{if(_)return;let x=b-1;if(x<0){if(!I)return;x=D-1}F.current="prev",h==null||h(x,d)},[_,b,h,I,D]),E=Ae(d=>{if(_)return;let x=b+1;if(x>=D){if(!I)return;x=0}F.current="next",h==null||h(x,d)}),ie=c.useRef();c.useImperativeHandle(s,()=>({element:ie.current,prev:w,next:E}));const Te=Ae(()=>{!document.hidden&&wn(ie.current)&&(L?w():E())}),O=Ce==="next"?"start":"end";hn(()=>{o||(m==null||m(b,O),v==null||v(b,O))},[b]);const dt=`${C}-item-${Ce}`,ft=`${C}-item-${O}`,pt=c.useCallback(d=>{en(d),m==null||m(b,O)},[m,b,O]),mt=c.useCallback(()=>{ke(!1),v==null||v(b,O)},[v,b,O]),ht=c.useCallback(d=>{if(Z&&!/input|textarea/i.test(d.target.tagName))switch(d.key){case"ArrowLeft":d.preventDefault(),L?E(d):w(d);return;case"ArrowRight":d.preventDefault(),L?w(d):E(d);return}H==null||H(d)},[Z,H,w,E,L]),xt=c.useCallback(d=>{R==="hover"&&ee(!0),q==null||q(d)},[R,q]),gt=c.useCallback(d=>{ee(!1),X==null||X(d)},[X]),Ie=c.useRef(0),te=c.useRef(0),$e=vn(),bt=c.useCallback(d=>{Ie.current=d.touches[0].clientX,te.current=0,R==="hover"&&ee(!0),y==null||y(d)},[R,y]),vt=c.useCallback(d=>{d.touches&&d.touches.length>1?te.current=0:te.current=d.touches[0].clientX-Ie.current,$==null||$(d)},[$]),jt=c.useCallback(d=>{if(Q){const x=te.current;Math.abs(x)>yn&&(x>0?w(d):E(d))}R==="hover"&&$e.set(()=>{ee(!1)},j||void 0),oe==null||oe(d)},[Q,R,w,E,$e,j,oe]),De=j!=null&&!lt&&!_,ce=c.useRef();c.useEffect(()=>{var d,x;if(!De)return;const N=L?w:E;return ce.current=window.setInterval(document.visibilityState?Te:N,(d=(x=Re.current)!=null?x:j)!=null?d:void 0),()=>{ce.current!==null&&clearInterval(ce.current)}},[De,w,E,Re,j,Te,L]);const Oe=c.useMemo(()=>u&&Array.from({length:D},(d,x)=>N=>{h==null||h(x,N)}),[u,D,h]);return r.jsxs(n,{ref:ie,...ct,onKeyDown:ht,onMouseOver:xt,onMouseOut:gt,onTouchStart:bt,onTouchMove:vt,onTouchEnd:jt,className:k(it,C,o&&"slide",i&&`${C}-fade`,Ee&&`${C}-${Ee}`),children:[u&&r.jsx("div",{className:`${C}-indicators`,children:Ue(ae,(d,x)=>r.jsx("button",{type:"button","data-bs-target":"","aria-label":f!=null&&f.length?f[x]:`Slide ${x+1}`,className:x===b?"active":void 0,onClick:Oe?Oe[x]:void 0,"aria-current":x===b},x))}),r.jsx("div",{className:`${C}-inner`,children:Ue(ae,(d,x)=>{const N=x===b;return o?r.jsx(sn,{in:N,onEnter:N?pt:void 0,onEntered:N?mt:void 0,addEndListener:Qt,children:(Y,yt)=>c.cloneElement(d,{...yt,className:k(d.props.className,N&&Y!=="entered"&&dt,(Y==="entered"||Y==="exiting")&&"active",(Y==="entering"||Y==="exiting")&&ft)})}):c.cloneElement(d,{className:k(d.props.className,N&&"active")})})}),l&&r.jsxs(r.Fragment,{children:[(I||p!==0)&&r.jsxs(ge,{className:`${C}-control-prev`,onClick:w,children:[ot,ye&&r.jsx("span",{className:"visually-hidden",children:ye})]}),(I||p!==D-1)&&r.jsxs(ge,{className:`${C}-control-next`,onClick:E,children:[at,we&&r.jsx("span",{className:"visually-hidden",children:we})]})]})]})});rt.displayName="Carousel";const We=Object.assign(rt,{Caption:tt,Item:nt});function En({as:e,bsPrefix:t,className:s,...n}){t=W(t,"col");const a=Ye(),o=Ke(),i=[],l=[];return a.forEach(u=>{const f=n[u];delete n[u];let p,h,m;typeof f=="object"&&f!=null?{span:p,offset:h,order:m}=f:p=f;const v=u!==o?`-${u}`:"";p&&i.push(p===!0?`${t}${v}`:`${t}${v}-${p}`),m!=null&&l.push(`order${v}-${m}`),h!=null&&l.push(`offset${v}-${h}`)}),[{...n,className:k(s,...i,...l)},{as:e,bsPrefix:t,spans:i}]}const T=c.forwardRef((e,t)=>{const[{className:s,...n},{as:a="div",bsPrefix:o,spans:i}]=En(e);return r.jsx(a,{...n,ref:t,className:k(s,!i.length&&o)})});T.displayName="Col";const J=c.forwardRef(({bsPrefix:e,className:t,as:s="div",...n},a)=>{const o=W(e,"row"),i=Ye(),l=Ke(),u=`${o}-cols`,f=[];return i.forEach(p=>{const h=n[p];delete n[p];let m;h!=null&&typeof h=="object"?{cols:m}=h:m=h;const v=p!==l?`-${p}`:"";m!=null&&f.push(`${u}${v}-${m}`)}),r.jsx(s,{ref:a,...n,className:k(t,o,...f)})});J.displayName="Row";const st=se`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Cn=se`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,He=se`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`,Nn=se`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,kn=g.section`
  padding: 5rem 0 8rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ea 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(to right, #2e7d32, #81c784);
  }
`,Sn=g.div`
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    color: #2e7d32;
    
    span {
      color: #1b5e20;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 12px;
        background: rgba(76, 175, 80, 0.3);
        z-index: -1;
        border-radius: 4px;
      }
    }
  }
  
  .lead {
    font-size: 1.3rem;
    color: #555;
    margin-bottom: 2rem;
    max-width: 600px;
  }
`,Rn=g.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  
  .main-image {
    position: absolute;
    width: 80%;
    right: 0;
    top: 0;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    z-index: 2;
    animation: ${He} 6s ease-in-out infinite;
  }
  
  .secondary-image {
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    z-index: 1;
    animation: ${He} 6s ease-in-out infinite 1s;
  }
  
  .pattern {
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: url('https://www.transparenttextures.com/patterns/rice-paper-3.png');
    opacity: 0.1;
    z-index: 0;
  }
`,de=g.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: #e8f5e9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: #2e7d32;
    font-size: 1.2rem;
  }
  
  .text {
    font-weight: 500;
    color: #444;
  }
`,Tn=g(V)`
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  animation: ${st} 0.8s ease-out;
  animation-delay: ${e=>e.delay||"0s"};
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.1);
  }
  
  .card-body {
    padding: 2rem;
  }
`,In=g.div`
  width: 70px;
  height: 70px;
  background: ${e=>e.color||"#e8f5e9"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${e=>e.iconColor||"#2e7d32"};
  font-size: 1.75rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`,qe=g.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  color: #2e7d32;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2e7d32, #81c784);
    border-radius: 2px;
  }
`,$n=g.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to right, #2e7d32, #81c784);
  }
`,Dn=g.div`
  position: relative;
  height: 450px;
  animation: ${st} 0.8s ease-out;
`,On=g.img`
  position: absolute;
  width: 60%;
  left: 0;
  top: 0;
  z-index: 1;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 12px;
  transform: rotate(-3deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(0deg) scale(1.02);
  }
`,Mn=g.img`
  position: absolute;
  width: 60%;
  right: 0;
  bottom: 0;
  z-index: 2;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 12px;
  transform: rotate(3deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(0deg) scale(1.02);
  }
`,zn=g($t)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #2e7d32, #4caf50);
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
  animation: ${Cn} 2s infinite;
`,Pn=g.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;

  li {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateX(5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    }
    
    svg {
      margin-right: 1rem;
      font-size: 1.5rem;
    }
  }
`,Ln=g.section`
  padding: 5rem 0;
  background: white;
`,Fn=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
`,_n=g.div`
  flex: 1;
  min-width: 150px;
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e8f5e9;
    transform: translateY(-5px);
  }
  
  h3 {
    color: #2e7d32;
    font-weight: 800;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`,Bn=g.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ea 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to right, #2e7d32, #81c784);
  }
`,An=g.div`
  padding: 3rem;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin: 0 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }
  
  p {
    font-size: 1.3rem;
    font-style: italic;
    line-height: 1.6;
    color: #444;
    margin-bottom: 2rem;
    position: relative;
    
    &::before, &::after {
      content: '"';
      font-size: 2rem;
      color: #81c784;
      opacity: 0.5;
    }
    
    &::before {
      margin-right: 0.5rem;
    }
    
    &::after {
      margin-left: 0.5rem;
    }
  }
  
  .blockquote-footer {
    font-size: 1.1rem;
    color: #2e7d32;
    font-weight: 600;
    
    &::before {
      content: '— ';
    }
  }
`,Un=g.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0d3b0f 0%, #1b5e20 50%, #2e7d32 100%);
  background-size: 200% 200%;
  animation: ${Nn} 10s ease infinite;
  color: white;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png');
    opacity: 0.1;
    pointer-events: none;
  }
  
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .lead {
    font-size: 1.4rem;
    max-width: 700px;
    margin: 0 auto 3rem;
    opacity: 0.9;
  }
`,re=g(je)`
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  background: linear-gradient(to right, #4caf50, #81c784);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
    background: linear-gradient(to right, #43a047, #66bb6a);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,Xe=g(je)`
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  background: transparent;
  border: 2px solid #2e7d32;
  color: #2e7d32;
  transition: all 0.3s ease;
  margin-left: 1rem;
  
  &:hover {
    background: rgba(46, 125, 50, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(46, 125, 50, 0.2);
  }
`,qn=()=>{const e=[{icon:r.jsx(St,{size:30}),title:"Discover Products",description:"Find agricultural products from across India with our advanced search",color:"#e3f2fd",iconColor:"#1976d2"},{icon:r.jsx(le,{size:30}),title:"Competitive Pricing",description:"Get the best prices with our real-time auction system",color:"#e8f5e9",iconColor:"#2e7d32"},{icon:r.jsx(Me,{size:30}),title:"Secure Logistics",description:"Reliable shipping and delivery options with tracking",color:"#fff3e0",iconColor:"#ef6c00"},{icon:r.jsx(Rt,{size:30}),title:"Market Insights",description:"Real-time trading data and analytics dashboard",color:"#f3e5f5",iconColor:"#8e24aa"}],t=[{quote:"This platform has transformed my farming business! I've doubled my income since joining.",author:"Rajesh Kumar, Farmer from Punjab"},{quote:"Best prices for my produce with minimal effort. The mobile app makes trading so convenient.",author:"Priya Sharma, Farmer from Maharashtra"},{quote:"Efficient trading platform with great support. The quality verification gives me confidence in every purchase.",author:"Amit Patel, Trader from Gujarat"}],s=[{value:"10,000+",label:"Daily Transactions",icon:r.jsx(Tt,{size:24,className:"text-success mb-2"})},{value:"₹500Cr+",label:"Annual Trade Volume",icon:r.jsx(le,{size:24,className:"text-success mb-2"})},{value:"28",label:"States Covered",icon:r.jsx(Pe,{size:24,className:"text-success mb-2"})},{value:"99%",label:"Satisfaction Rate",icon:r.jsx(It,{size:24,className:"text-success mb-2"})}];return r.jsxs("div",{className:"overflow-hidden",children:[r.jsx(kn,{children:r.jsx(B,{children:r.jsxs(J,{className:"align-items-center",children:[r.jsx(T,{lg:6,className:"mb-5 mb-lg-0",children:r.jsxs(Sn,{children:[r.jsxs("h1",{children:["Empowering ",r.jsx("span",{children:"Farmers"}),", Connecting ",r.jsx("span",{children:"Traders"})]}),r.jsx("p",{className:"lead",children:"India's most trusted agricultural marketplace with transparent pricing, secure transactions, and nationwide reach."}),r.jsxs("div",{className:"mb-4",children:[r.jsxs(de,{children:[r.jsx("div",{className:"icon",children:r.jsx(le,{})}),r.jsx("div",{className:"text",children:"Get 20-30% better prices for your produce"})]}),r.jsxs(de,{children:[r.jsx("div",{className:"icon",children:r.jsx(Me,{})}),r.jsx("div",{className:"text",children:"Verified logistics partners across India"})]}),r.jsxs(de,{children:[r.jsx("div",{className:"icon",children:r.jsx(ze,{})}),r.jsx("div",{className:"text",children:"100% secure payment protection"})]})]}),r.jsxs("div",{className:"d-flex",children:[r.jsxs(re,{size:"lg",children:["Start Trading ",r.jsx(Et,{})]}),r.jsx(Xe,{size:"lg",children:"How It Works"})]})]})}),r.jsx(T,{lg:6,children:r.jsxs(Rn,{children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Farmers trading",className:"main-image"}),r.jsx("img",{src:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agricultural products",className:"secondary-image"}),r.jsx("div",{className:"pattern"})]})})]})})}),r.jsx("section",{className:"py-5",style:{backgroundColor:"#f8f9fa"},children:r.jsxs(B,{children:[r.jsx(qe,{children:"Why Choose Agritrade?"}),r.jsx(J,{children:e.map((u,f)=>r.jsx(T,{md:6,lg:3,className:"mb-4",children:r.jsx(Tn,{delay:`${f*.1}s`,children:r.jsxs(V.Body,{className:"text-center",children:[r.jsx(In,{color:u.color,iconColor:u.iconColor,children:u.icon}),r.jsx("h5",{className:"mb-3",children:u.title}),r.jsx("p",{className:"text-muted",children:u.description})]})})},f))})]})}),r.jsx($n,{children:r.jsx(B,{children:r.jsxs(J,{className:"align-items-center",children:[r.jsx(T,{lg:6,className:"mb-5 mb-lg-0",children:r.jsxs(Dn,{children:[r.jsx(On,{src:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Indian farmer"}),r.jsx(Mn,{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agricultural trader"}),r.jsx(zn,{bg:"success",children:"50,000+ Members"})]})}),r.jsxs(T,{lg:6,children:[r.jsx("h2",{className:"mb-4",style:{fontSize:"2.2rem",fontWeight:700},children:"Join Our Growing Community"}),r.jsx("p",{className:"lead",style:{fontSize:"1.3rem"},children:"Connect with thousands of farmers and traders across India"}),r.jsxs(Pn,{children:[r.jsxs("li",{children:[r.jsx(Ct,{className:"me-2 text-success"}),"Direct access to agricultural producers"]}),r.jsxs("li",{children:[r.jsx(Nt,{className:"me-2 text-primary"}),"Verified traders and buyers network"]}),r.jsxs("li",{children:[r.jsx(Pe,{className:"me-2 text-info"}),"Nationwide coverage with local support"]}),r.jsxs("li",{children:[r.jsx(ze,{className:"me-2 text-warning"}),"Secure transactions with escrow protection"]}),r.jsxs("li",{children:[r.jsx(kt,{className:"me-2 text-secondary"}),"Mobile app for trading on the go"]})]}),r.jsx(re,{className:"mt-3 px-4",children:"Become a Member"})]})]})})}),r.jsx(Ln,{children:r.jsx(B,{children:r.jsxs(J,{className:"align-items-center",children:[r.jsxs(T,{lg:6,className:"mb-5 mb-lg-0",children:[r.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:700},children:"Explore Our Digital Marketplace"}),r.jsx("p",{style:{fontSize:"1.1rem",lineHeight:1.7},children:"Our platform offers a seamless trading experience with real-time pricing, secure transactions, quality assurance and dedicated support."}),r.jsx(Fn,{children:s.map((u,f)=>r.jsxs(_n,{children:[u.icon,r.jsx("h3",{children:u.value}),r.jsx("p",{children:u.label})]},f))})]}),r.jsx(T,{lg:6,children:r.jsxs(V,{className:"border-0 shadow-lg",style:{borderRadius:"16px",overflow:"hidden"},children:[r.jsx(V.Img,{variant:"top",src:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",style:{height:"300px",objectFit:"cover"}}),r.jsx(V.Body,{className:"text-center",children:r.jsx(re,{className:"px-5 py-3",children:"Visit Marketplace"})})]})})]})})}),r.jsx(Bn,{children:r.jsxs(B,{children:[r.jsx(qe,{style:{color:"#2e7d32"},children:"What Our Community Says"}),r.jsx(We,{indicators:!1,className:"mx-auto",style:{maxWidth:"800px"},children:t.map((u,f)=>r.jsx(We.Item,{children:r.jsx(An,{children:r.jsxs("blockquote",{className:"blockquote",children:[r.jsxs("p",{children:['"',u.quote,'"']}),r.jsx("footer",{className:"blockquote-footer mt-4",children:u.author})]})})},f))})]})}),r.jsx(Un,{children:r.jsxs(B,{children:[r.jsx("h2",{children:"Ready to Transform Your Agricultural Business?"}),r.jsx("p",{className:"lead",children:"Join thousands of farmers and traders who are already benefiting from our platform"}),r.jsxs("div",{className:"d-flex gap-3 justify-content-center",children:[r.jsx(re,{size:"lg",className:"px-5",children:"Sign Up Now"}),r.jsx(Xe,{size:"lg",className:"px-5",variant:"outline-light",children:"Learn How It Works"})]})]})})]})};export{qn as default};
