import{r as s,j as e,d as o,m as O}from"./index-XxRAgLa_.js";import{F as Q,a as xe,b as ge,c as Ge,d as Ke,e as Je,f as be,g as Qe,h as Ze,i as et,j as tt,k as rt}from"./index-Bts-V1XO.js";import{u as Y,c as T,a as st,b as at,d as nt,C as R,e as F}from"./Container-qoQXHYU1.js";import{u as ot,f as it,a as ct,b as je,t as lt,m as ve,A as we,T as dt,c as ut,C as k,B as Ie}from"./Col-BZ-RgS_q.js";import{B as mt}from"./Badge-Bzfme0wP.js";function ht(r,a){const i=s.useRef(!0);s.useEffect(()=>{if(i.current){i.current=!1;return}return r()},a)}function pt(){const r=s.useRef(!0),a=s.useRef(()=>r.current);return s.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),a.current}function ft(r){const a=s.useRef(r);return a.current=r,a}function xt(r){const a=ft(r);s.useEffect(()=>()=>a.current(),[])}const ee=2**31-1;function Se(r,a,i){const d=i-Date.now();r.current=d<=ee?setTimeout(a,d):setTimeout(()=>Se(r,a,i),ee)}function gt(){const r=pt(),a=s.useRef();return xt(()=>clearTimeout(a.current)),s.useMemo(()=>{const i=()=>clearTimeout(a.current);function d(f,u=0){r()&&(i(),u<=ee?a.current=setTimeout(f,u):Se(a,f,Date.now()+u))}return{set:d,clear:i,handleRef:a}},[])}const ze=s.forwardRef(({className:r,bsPrefix:a,as:i="div",...d},f)=>(a=Y(a,"carousel-caption"),e.jsx(i,{ref:f,className:T(r,a),...d})));ze.displayName="CarouselCaption";const Re=s.forwardRef(({as:r="div",bsPrefix:a,className:i,...d},f)=>{const u=T(i,Y(a,"carousel-item"));return e.jsx(r,{ref:f,...d,className:u})});Re.displayName="CarouselItem";const bt=40;function jt(r){if(!r||!r.style||!r.parentNode||!r.parentNode.style)return!1;const a=getComputedStyle(r);return a.display!=="none"&&a.visibility!=="hidden"&&getComputedStyle(r.parentNode).display!=="none"}const Te=s.forwardRef(({defaultActiveIndex:r=0,...a},i)=>{const{as:d="div",bsPrefix:f,slide:u=!0,fade:A=!1,controls:D=!0,indicators:c=!0,indicatorLabels:m=[],activeIndex:h,onSelect:p,onSlide:x,onSlid:w,interval:M=5e3,keyboard:te=!0,onKeyDown:W,pause:C="hover",onMouseOver:P,onMouseOut:X,wrap:E=!0,touch:re=!0,onTouchStart:U,onTouchMove:V,onTouchEnd:_,prevIcon:Ee=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:se="Previous",nextIcon:$e=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:ae="Next",variant:ne,className:Fe,children:G,...Be}=ot({defaultActiveIndex:r,...a},{activeIndex:"onSelect"}),j=Y(f,"carousel"),I=st(),S=s.useRef(null),[oe,ie]=s.useState("next"),[Ae,q]=s.useState(!1),[z,ce]=s.useState(!1),[l,De]=s.useState(h||0);s.useEffect(()=>{!z&&h!==l&&(S.current?ie(S.current):ie((h||0)>l?"next":"prev"),u&&ce(!0),De(h||0))},[h,z,l,u]),s.useEffect(()=>{S.current&&(S.current=null)});let y=0,le;it(G,(t,n)=>{++y,n===h&&(le=t.props.interval)});const de=ct(le),g=s.useCallback(t=>{if(z)return;let n=l-1;if(n<0){if(!E)return;n=y-1}S.current="prev",p==null||p(n,t)},[z,l,p,E,y]),b=je(t=>{if(z)return;let n=l+1;if(n>=y){if(!E)return;n=0}S.current="next",p==null||p(n,t)}),K=s.useRef();s.useImperativeHandle(i,()=>({element:K.current,prev:g,next:b}));const ue=je(()=>{!document.hidden&&jt(K.current)&&(I?g():b())}),N=oe==="next"?"start":"end";ht(()=>{u||(x==null||x(l,N),w==null||w(l,N))},[l]);const qe=`${j}-item-${oe}`,Le=`${j}-item-${N}`,He=s.useCallback(t=>{lt(t),x==null||x(l,N)},[x,l,N]),Oe=s.useCallback(()=>{ce(!1),w==null||w(l,N)},[w,l,N]),Ye=s.useCallback(t=>{if(te&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),I?b(t):g(t);return;case"ArrowRight":t.preventDefault(),I?g(t):b(t);return}W==null||W(t)},[te,W,g,b,I]),We=s.useCallback(t=>{C==="hover"&&q(!0),P==null||P(t)},[C,P]),Pe=s.useCallback(t=>{q(!1),X==null||X(t)},[X]),me=s.useRef(0),L=s.useRef(0),he=gt(),Xe=s.useCallback(t=>{me.current=t.touches[0].clientX,L.current=0,C==="hover"&&q(!0),U==null||U(t)},[C,U]),Ue=s.useCallback(t=>{t.touches&&t.touches.length>1?L.current=0:L.current=t.touches[0].clientX-me.current,V==null||V(t)},[V]),Ve=s.useCallback(t=>{if(re){const n=L.current;Math.abs(n)>bt&&(n>0?g(t):b(t))}C==="hover"&&he.set(()=>{q(!1)},M||void 0),_==null||_(t)},[re,C,g,b,he,M,_]),pe=M!=null&&!Ae&&!z,J=s.useRef();s.useEffect(()=>{var t,n;if(!pe)return;const v=I?g:b;return J.current=window.setInterval(document.visibilityState?ue:v,(t=(n=de.current)!=null?n:M)!=null?t:void 0),()=>{J.current!==null&&clearInterval(J.current)}},[pe,g,b,de,M,ue,I]);const fe=s.useMemo(()=>c&&Array.from({length:y},(t,n)=>v=>{p==null||p(n,v)}),[c,y,p]);return e.jsxs(d,{ref:K,...Be,onKeyDown:Ye,onMouseOver:We,onMouseOut:Pe,onTouchStart:Xe,onTouchMove:Ue,onTouchEnd:Ve,className:T(Fe,j,u&&"slide",A&&`${j}-fade`,ne&&`${j}-${ne}`),children:[c&&e.jsx("div",{className:`${j}-indicators`,children:ve(G,(t,n)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":m!=null&&m.length?m[n]:`Slide ${n+1}`,className:n===l?"active":void 0,onClick:fe?fe[n]:void 0,"aria-current":n===l},n))}),e.jsx("div",{className:`${j}-inner`,children:ve(G,(t,n)=>{const v=n===l;return u?e.jsx(dt,{in:v,onEnter:v?He:void 0,onEntered:v?Oe:void 0,addEndListener:ut,children:($,_e)=>s.cloneElement(t,{..._e,className:T(t.props.className,v&&$!=="entered"&&qe,($==="entered"||$==="exiting")&&"active",($==="entering"||$==="exiting")&&Le)})}):s.cloneElement(t,{className:T(t.props.className,v&&"active")})})}),D&&e.jsxs(e.Fragment,{children:[(E||h!==0)&&e.jsxs(we,{className:`${j}-control-prev`,onClick:g,children:[Ee,se&&e.jsx("span",{className:"visually-hidden",children:se})]}),(E||h!==y-1)&&e.jsxs(we,{className:`${j}-control-next`,onClick:b,children:[$e,ae&&e.jsx("span",{className:"visually-hidden",children:ae})]})]})]})});Te.displayName="Carousel";const ye=Object.assign(Te,{Caption:ze,Item:Re}),B=s.forwardRef(({bsPrefix:r,className:a,as:i="div",...d},f)=>{const u=Y(r,"row"),A=at(),D=nt(),c=`${u}-cols`,m=[];return A.forEach(h=>{const p=d[h];delete d[h];let x;p!=null&&typeof p=="object"?{cols:x}=p:x=p;const w=h!==D?`-${h}`:"";x!=null&&m.push(`${c}${w}-${x}`)}),e.jsx(i,{ref:f,...d,className:T(a,u,...m)})});B.displayName="Row";const Me=O`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,vt=O`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Ne=O`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`,wt=O`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,yt=o.section`
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
`,Nt=o.div`
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
`,kt=o.div`
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
    animation: ${Ne} 6s ease-in-out infinite;
  }
  
  .secondary-image {
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    z-index: 1;
    animation: ${Ne} 6s ease-in-out infinite 1s;
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
`,Z=o.div`
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
`,Ct=o(F)`
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  animation: ${Me} 0.8s ease-out;
  animation-delay: ${r=>r.delay||"0s"};
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.1);
  }
  
  .card-body {
    padding: 2rem;
  }
`,It=o.div`
  width: 70px;
  height: 70px;
  background: ${r=>r.color||"#e8f5e9"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${r=>r.iconColor||"#2e7d32"};
  font-size: 1.75rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`,ke=o.h2`
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
`,St=o.section`
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
`,zt=o.div`
  position: relative;
  height: 450px;
  animation: ${Me} 0.8s ease-out;
`,Rt=o.img`
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
`,Tt=o.img`
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
`,Mt=o(mt)`
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
  animation: ${vt} 2s infinite;
`,Et=o.ul`
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
`,$t=o.section`
  padding: 5rem 0;
  background: white;
`,Ft=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
`,Bt=o.div`
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
`,At=o.section`
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
`,Dt=o.div`
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
`,qt=o.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0d3b0f 0%, #1b5e20 50%, #2e7d32 100%);
  background-size: 200% 200%;
  animation: ${wt} 10s ease infinite;
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
`,H=o(Ie)`
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
`,Ce=o(Ie)`
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
`,Pt=()=>{const r=[{icon:e.jsx(Ze,{size:30}),title:"Discover Products",description:"Find agricultural products from across India with our advanced search",color:"#e3f2fd",iconColor:"#1976d2"},{icon:e.jsx(Q,{size:30}),title:"Competitive Pricing",description:"Get the best prices with our real-time auction system",color:"#e8f5e9",iconColor:"#2e7d32"},{icon:e.jsx(xe,{size:30}),title:"Secure Logistics",description:"Reliable shipping and delivery options with tracking",color:"#fff3e0",iconColor:"#ef6c00"},{icon:e.jsx(et,{size:30}),title:"Market Insights",description:"Real-time trading data and analytics dashboard",color:"#f3e5f5",iconColor:"#8e24aa"}],a=[{quote:"This platform has transformed my farming business! I've doubled my income since joining.",author:"Rajesh Kumar, Farmer from Punjab"},{quote:"Best prices for my produce with minimal effort. The mobile app makes trading so convenient.",author:"Priya Sharma, Farmer from Maharashtra"},{quote:"Efficient trading platform with great support. The quality verification gives me confidence in every purchase.",author:"Amit Patel, Trader from Gujarat"}],i=[{value:"10,000+",label:"Daily Transactions",icon:e.jsx(tt,{size:24,className:"text-success mb-2"})},{value:"₹500Cr+",label:"Annual Trade Volume",icon:e.jsx(Q,{size:24,className:"text-success mb-2"})},{value:"28",label:"States Covered",icon:e.jsx(be,{size:24,className:"text-success mb-2"})},{value:"99%",label:"Satisfaction Rate",icon:e.jsx(rt,{size:24,className:"text-success mb-2"})}];return e.jsxs("div",{className:"overflow-hidden",children:[e.jsx(yt,{children:e.jsx(R,{children:e.jsxs(B,{className:"align-items-center",children:[e.jsx(k,{lg:6,className:"mb-5 mb-lg-0",children:e.jsxs(Nt,{children:[e.jsxs("h1",{children:["Empowering ",e.jsx("span",{children:"Farmers"}),", Connecting ",e.jsx("span",{children:"Traders"})]}),e.jsx("p",{className:"lead",children:"India's most trusted agricultural marketplace with transparent pricing, secure transactions, and nationwide reach."}),e.jsxs("div",{className:"mb-4",children:[e.jsxs(Z,{children:[e.jsx("div",{className:"icon",children:e.jsx(Q,{})}),e.jsx("div",{className:"text",children:"Get 20-30% better prices for your produce"})]}),e.jsxs(Z,{children:[e.jsx("div",{className:"icon",children:e.jsx(xe,{})}),e.jsx("div",{className:"text",children:"Verified logistics partners across India"})]}),e.jsxs(Z,{children:[e.jsx("div",{className:"icon",children:e.jsx(ge,{})}),e.jsx("div",{className:"text",children:"100% secure payment protection"})]})]}),e.jsxs("div",{className:"d-flex",children:[e.jsxs(H,{size:"lg",children:["Start Trading ",e.jsx(Ge,{})]}),e.jsx(Ce,{size:"lg",children:"How It Works"})]})]})}),e.jsx(k,{lg:6,children:e.jsxs(kt,{children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Farmers trading",className:"main-image"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agricultural products",className:"secondary-image"}),e.jsx("div",{className:"pattern"})]})})]})})}),e.jsx("section",{className:"py-5",style:{backgroundColor:"#f8f9fa"},children:e.jsxs(R,{children:[e.jsx(ke,{children:"Why Choose Agritrade?"}),e.jsx(B,{children:r.map((c,m)=>e.jsx(k,{md:6,lg:3,className:"mb-4",children:e.jsx(Ct,{delay:`${m*.1}s`,children:e.jsxs(F.Body,{className:"text-center",children:[e.jsx(It,{color:c.color,iconColor:c.iconColor,children:c.icon}),e.jsx("h5",{className:"mb-3",children:c.title}),e.jsx("p",{className:"text-muted",children:c.description})]})})},m))})]})}),e.jsx(St,{children:e.jsx(R,{children:e.jsxs(B,{className:"align-items-center",children:[e.jsx(k,{lg:6,className:"mb-5 mb-lg-0",children:e.jsxs(zt,{children:[e.jsx(Rt,{src:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Indian farmer"}),e.jsx(Tt,{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agricultural trader"}),e.jsx(Mt,{bg:"success",children:"50,000+ Members"})]})}),e.jsxs(k,{lg:6,children:[e.jsx("h2",{className:"mb-4",style:{fontSize:"2.2rem",fontWeight:700},children:"Join Our Growing Community"}),e.jsx("p",{className:"lead",style:{fontSize:"1.3rem"},children:"Connect with thousands of farmers and traders across India"}),e.jsxs(Et,{children:[e.jsxs("li",{children:[e.jsx(Ke,{className:"me-2 text-success"}),"Direct access to agricultural producers"]}),e.jsxs("li",{children:[e.jsx(Je,{className:"me-2 text-primary"}),"Verified traders and buyers network"]}),e.jsxs("li",{children:[e.jsx(be,{className:"me-2 text-info"}),"Nationwide coverage with local support"]}),e.jsxs("li",{children:[e.jsx(ge,{className:"me-2 text-warning"}),"Secure transactions with escrow protection"]}),e.jsxs("li",{children:[e.jsx(Qe,{className:"me-2 text-secondary"}),"Mobile app for trading on the go"]})]}),e.jsx(H,{className:"mt-3 px-4",children:"Become a Member"})]})]})})}),e.jsx($t,{children:e.jsx(R,{children:e.jsxs(B,{className:"align-items-center",children:[e.jsxs(k,{lg:6,className:"mb-5 mb-lg-0",children:[e.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:700},children:"Explore Our Digital Marketplace"}),e.jsx("p",{style:{fontSize:"1.1rem",lineHeight:1.7},children:"Our platform offers a seamless trading experience with real-time pricing, secure transactions, quality assurance and dedicated support."}),e.jsx(Ft,{children:i.map((c,m)=>e.jsxs(Bt,{children:[c.icon,e.jsx("h3",{children:c.value}),e.jsx("p",{children:c.label})]},m))})]}),e.jsx(k,{lg:6,children:e.jsxs(F,{className:"border-0 shadow-lg",style:{borderRadius:"16px",overflow:"hidden"},children:[e.jsx(F.Img,{variant:"top",src:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",style:{height:"300px",objectFit:"cover"}}),e.jsx(F.Body,{className:"text-center",children:e.jsx(H,{className:"px-5 py-3",children:"Visit Marketplace"})})]})})]})})}),e.jsx(At,{children:e.jsxs(R,{children:[e.jsx(ke,{style:{color:"#2e7d32"},children:"What Our Community Says"}),e.jsx(ye,{indicators:!1,className:"mx-auto",style:{maxWidth:"800px"},children:a.map((c,m)=>e.jsx(ye.Item,{children:e.jsx(Dt,{children:e.jsxs("blockquote",{className:"blockquote",children:[e.jsxs("p",{children:['"',c.quote,'"']}),e.jsx("footer",{className:"blockquote-footer mt-4",children:c.author})]})})},m))})]})}),e.jsx(qt,{children:e.jsxs(R,{children:[e.jsx("h2",{children:"Ready to Transform Your Agricultural Business?"}),e.jsx("p",{className:"lead",children:"Join thousands of farmers and traders who are already benefiting from our platform"}),e.jsxs("div",{className:"d-flex gap-3 justify-content-center",children:[e.jsx(H,{size:"lg",className:"px-5",children:"Sign Up Now"}),e.jsx(Ce,{size:"lg",className:"px-5",variant:"outline-light",children:"Learn How It Works"})]})]})})]})};export{Pt as default};
