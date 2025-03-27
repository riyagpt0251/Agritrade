import{r as l,j as e,d as r}from"./index-XxRAgLa_.js";import{l as F,m as S,n as y,o as w}from"./index-Bts-V1XO.js";const k=r.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
`,M=r.h1`
  color: #2e7d32;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`,T=r.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,z=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,s=r.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,n=r.div`
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 1rem;
`,a=r.h3`
  color: #1b5e20;
  margin-bottom: 1rem;
`,i=r.p`
  color: #555;
  line-height: 1.6;
`,q=r.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,E=r.h2`
  color: #1b5e20;
  text-align: center;
  margin-bottom: 1.5rem;
`,d=r.div`
  margin-bottom: 1.5rem;
`,c=r.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`,u=r.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
`,I=r.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
`,A=r.button`
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #1b5e20;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,U=r.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
`,P=()=>{const[o,x]=l.useState({name:"",email:"",subject:"",message:""}),[h,g]=l.useState(!1),[j,b]=l.useState(!1),t=m=>{const{name:f,value:v}=m.target;x(C=>({...C,[f]:v}))},p=m=>{m.preventDefault(),g(!0),setTimeout(()=>{console.log("Form submitted:",o),g(!1),b(!0),x({name:"",email:"",subject:"",message:""}),setTimeout(()=>b(!1),5e3)},1500)};return e.jsxs(k,{children:[e.jsx(M,{children:"Contact Us"}),e.jsx(T,{children:"Have questions or feedback? We'd love to hear from you. Reach out through our contact form or connect with us directly using the information below."}),e.jsxs(z,{children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(F,{})}),e.jsx(a,{children:"Our Location"}),e.jsxs(i,{children:["123 Agriculture Avenue",e.jsx("br",{}),"Farmville, FP 12345",e.jsx("br",{}),"United States"]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(S,{})}),e.jsx(a,{children:"Phone"}),e.jsxs(i,{children:["+1 (800) 123-4567",e.jsx("br",{}),"Monday - Friday, 9am - 5pm EST"]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(y,{})}),e.jsx(a,{children:"Email"}),e.jsxs(i,{children:["support@agritrade.com",e.jsx("br",{}),"inquiries@agritrade.com"]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(w,{})}),e.jsx(a,{children:"Hours"}),e.jsxs(i,{children:["Monday - Friday: 9am - 6pm",e.jsx("br",{}),"Saturday: 10am - 4pm",e.jsx("br",{}),"Sunday: Closed"]})]})]}),e.jsxs(q,{children:[e.jsx(E,{children:"Send Us a Message"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs(d,{children:[e.jsx(c,{htmlFor:"name",children:"Full Name"}),e.jsx(u,{type:"text",id:"name",name:"name",value:o.name,onChange:t,required:!0})]}),e.jsxs(d,{children:[e.jsx(c,{htmlFor:"email",children:"Email Address"}),e.jsx(u,{type:"email",id:"email",name:"email",value:o.email,onChange:t,required:!0})]}),e.jsxs(d,{children:[e.jsx(c,{htmlFor:"subject",children:"Subject"}),e.jsx(u,{type:"text",id:"subject",name:"subject",value:o.subject,onChange:t,required:!0})]}),e.jsxs(d,{children:[e.jsx(c,{htmlFor:"message",children:"Your Message"}),e.jsx(I,{id:"message",name:"message",value:o.message,onChange:t,required:!0})]}),e.jsx(A,{type:"submit",disabled:h,children:h?"Sending...":"Send Message"}),j&&e.jsx(U,{children:"Thank you for your message! We'll get back to you soon."})]})]})]})};export{P as default};
